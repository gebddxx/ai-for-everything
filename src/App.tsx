import { useState, useCallback, useEffect, useRef } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Breadcrumb from './components/Breadcrumb'
import { useT } from './contexts/LanguageContext'
import Home from './pages/Home'

// Tool Directory pages
import NavToolsOverview from './pages/NavToolsOverview'
import SearchOverview from './pages/SearchOverview'
import ChatOverview from './pages/ChatOverview'
import CreativeOverview from './pages/CreativeOverview'
import DesignOverview from './pages/DesignOverview'
import Game3DOverview from './pages/Game3DOverview'
import OfficeOverview from './pages/OfficeOverview'
import AgentOverview from './pages/AgentOverview'

// AI Industry pages
import IndustriesOverview from './pages/IndustriesOverview'
import Overview from './pages/Overview'
import HealthcareOverview from './pages/HealthcareOverview'
import FinanceOverview from './pages/FinanceOverview'
import EducationOverview from './pages/EducationOverview'
import ManufacturingOverview from './pages/ManufacturingOverview'
import AgricultureOverview from './pages/AgricultureOverview'
import EnterpriseOverview from './pages/EnterpriseOverview'

// AIGC Tutorial pages
import AigcOverview from './pages/AigcOverview'
import GeminiTutorial from './pages/GeminiTutorial'
import CodexTutorial from './pages/CodexTutorial'
import CCSwitchTutorial from './pages/CCSwitchTutorial'
import AgentFrameworks from './pages/AgentFrameworks'
import AgentAssistants from './pages/AgentAssistants'
import AgentWorkflow from './pages/AgentWorkflow'
import AgentMultiAgent from './pages/AgentMultiAgent'
import AudioGenTutorial from './pages/AudioGenTutorial'
import VideoGenTutorial from './pages/VideoGenTutorial'
import NovelWritingTutorial from './pages/NovelWritingTutorial'
import PptGenTutorial from './pages/PptGenTutorial'
import WebGenTutorial from './pages/WebGenTutorial'
import AppGenTutorial from './pages/AppGenTutorial'
import SoftwareGenTutorial from './pages/SoftwareGenTutorial'

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

  const NAV_TOOLS_PAGES: Record<string, React.ReactNode> = {
    overview: <NavToolsOverview  />,
    search: <SearchOverview />,
    chat: <ChatOverview />,
    creative: <CreativeOverview />,
    design: <DesignOverview />,
    '3d-game': <Game3DOverview />,
    office: <OfficeOverview />,
    agents: <AgentOverview />,
  }

  const INDUSTRIES_PAGES: Record<string, React.ReactNode> = {
    overview: <IndustriesOverview  />,
    logistics: <Overview />,
    healthcare: <HealthcareOverview />,
    finance: <FinanceOverview />,
    education: <EducationOverview />,
    manufacturing: <ManufacturingOverview />,
    agriculture: <AgricultureOverview />,
    enterprise: <EnterpriseOverview />,
  }

  const AIGC_PAGES: Record<string, React.ReactNode> = {
    overview: <AigcOverview  />,
    gemini: <GeminiTutorial />,
    codex: <CodexTutorial />,
    ccswitch: <CCSwitchTutorial />,
    frameworks: <AgentFrameworks />,
    assistants: <AgentAssistants />,
    workflow: <AgentWorkflow />,
    'multi-agent': <AgentMultiAgent />,
    'audio-gen': <AudioGenTutorial />,
    'video-gen': <VideoGenTutorial />,
    novel: <NovelWritingTutorial />,
    'ppt-gen': <PptGenTutorial />,
    'web-gen': <WebGenTutorial />,
    'app-gen': <AppGenTutorial />,
    'software-gen': <SoftwareGenTutorial />,
  }

  const renderPage = () => {
    if (domain === null) return <Home onEnter={handleEnterDomain} />
    if (domain === 'nav-tools') return NAV_TOOLS_PAGES[activePage] ?? <NavToolsOverview  />
    if (domain === 'ai-industries') return INDUSTRIES_PAGES[activePage] ?? <IndustriesOverview  />
    if (domain === 'aigc') return AIGC_PAGES[activePage] ?? <AigcOverview  />
    return null
  }

  const handleBack = () => setDomain(null)

  return (
    <div className={styles.app}>
      <Header onBack={domain ? handleBack : undefined} />
      <div className={styles.body}>
        <Sidebar domain={domain} activePage={activePage}  onSelectDomain={handleEnterDomain} />
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
