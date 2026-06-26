import { useState, useCallback, useEffect, useRef } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Breadcrumb from './components/Breadcrumb'
import { useT } from './contexts/LanguageContext'
import Home from './pages/Home'
import NavToolsOverview from './pages/NavToolsOverview'
import IndustriesOverview from './pages/IndustriesOverview'
import AigcOverview from './pages/AigcOverview'

import { domains } from './data/domains'
import type { Lang } from './i18n/translations'
import styles from './App.module.css'

const MIN_SIDEBAR = 120
const MAX_SIDEBAR = 420
const DEFAULT_SIDEBAR = 180

function AppContent() {
  const [domain, setDomain] = useState<string | null>(null)
  const [activePage, setActivePage] = useState('overview')
  const [sidebarWidth, setSidebarWidth] = useState(() => {
    const saved = localStorage.getItem('ai-logistics-sidebar-width')
    return saved ? Number(saved) : DEFAULT_SIDEBAR
  })
  const dragging = useRef(false)

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    dragging.current = true
    document.body.style.cursor = 'col-resize'
  }, [])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragging.current) return
      const next = Math.min(MAX_SIDEBAR, Math.max(MIN_SIDEBAR, e.clientX))
      setSidebarWidth(next)
    }
    const onUp = () => {
      if (dragging.current) {
        dragging.current = false
        document.body.style.cursor = ''
        localStorage.setItem('ai-logistics-sidebar-width', String(sidebarWidth))
      }
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [sidebarWidth])

  useEffect(() => {
    document.documentElement.style.setProperty('--sidebar-width', `${sidebarWidth}px`)
  }, [sidebarWidth])

  // Scroll observer: highlight sidebar based on visible section
  useEffect(() => {
    if (domain === null) return
    const visibleSections = new Map<string, number>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const key = entry.target.id.replace('section-', '')
          if (entry.isIntersecting) {
            visibleSections.set(key, entry.intersectionRatio)
          } else {
            visibleSections.delete(key)
          }
        })
        // Find section with highest visibility ratio
        let best = ''
        let bestRatio = 0
        visibleSections.forEach((ratio, key) => {
          if (ratio > bestRatio) { bestRatio = ratio; best = key }
        })
        if (best && bestRatio > 0.1) {
          setActivePage(best)
        }
      },
      { rootMargin: '-80px 0px 0px 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    )

    // Observe after a brief delay to let DOM render
    const timer = setTimeout(() => {
      document.querySelectorAll('[id^="section-"]').forEach(el => observer.observe(el))
    }, 300)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [domain])

  const handleEnterDomain = (key: string) => {
    setDomain(key)
    setActivePage('overview')
  }

  const handleSelectPage = (key: string) => {
    setActivePage(key)
    const el = document.getElementById(`section-${key}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const renderPage = () => {
    if (domain === null) return <Home onEnter={handleEnterDomain} />
    if (domain === 'nav-tools') return <NavToolsOverview />
    if (domain === 'ai-industries') return <IndustriesOverview />
    if (domain === 'aigc') return <AigcOverview />
    return null
  }

  const handleBack = () => setDomain(null)

  return (
    <div className={styles.app}>
      <Header onBack={domain ? handleBack : undefined} />
      <div className={styles.body}>
        <Sidebar domain={domain} activePage={activePage} onSelectPage={handleSelectPage} onSelectDomain={handleEnterDomain} />
        <div className={styles.handle} onMouseDown={onMouseDown} />
        <main className={styles.content}>
          <BreadcrumbBlock domain={domain} activePage={activePage} onBack={handleBack}  />
          {renderPage()}
        </main>
      </div>
    </div>
  )
}

function BreadcrumbBlock({ domain, activePage, onBack, onSelectPage }: {
  domain: string | null; activePage: string; onBack: () => void; onSelectPage: (key: string) => void
}) {
  const { lang } = useT()
  if (!domain) return <Breadcrumb path={[]} />
  const d = domains.find(dd => dd.key === domain)
  const domainLabel = d?.title[lang as Lang] ?? domain
  const sub = d?.subModules.find(s => s.key === activePage)
  const pageLabel = sub?.title[lang as Lang] ?? activePage
  return <Breadcrumb path={[{ label: domainLabel, onClick: onBack }, { label: pageLabel, onClick: () => onSelectPage(activePage) }]} />
}

export default function App() {
  return <ThemeProvider><LanguageProvider><AppContent /></LanguageProvider></ThemeProvider>
}
