import { useState, useCallback, useEffect, useRef } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Breadcrumb from './components/Breadcrumb'
import { useT } from './contexts/LanguageContext'
import Home from './pages/Home'
import Overview from './pages/Overview'
import Warehouse from './pages/Warehouse'
import Transport from './pages/Transport'
import Delivery from './pages/Delivery'
import Prediction from './pages/Prediction'
import Operation from './pages/Operation'
import DomainPlaceholder from './pages/DomainPlaceholder'
import VibeOverview from './pages/VibeOverview'
import GeminiTutorial from './pages/GeminiTutorial'
import CodexTutorial from './pages/CodexTutorial'
import CCSwitchTutorial from './pages/CCSwitchTutorial'
import LearningOverview from './pages/LearningOverview'
import LearningReading from './pages/LearningReading'
import LearningMindmap from './pages/LearningMindmap'
import LearningKnowledge from './pages/LearningKnowledge'
import LearningGrowth from './pages/LearningGrowth'
import { domains } from './data/domains'
import type { Lang } from './i18n/translations'
import styles from './App.module.css'

const LOGISTICS_PAGES: Record<string, React.ReactNode> = {
  overview: <Overview />,
  warehouse: <Warehouse />,
  transport: <Transport />,
  delivery: <Delivery />,
  prediction: <Prediction />,
  operation: <Operation />,
}

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

  const handleEnterDomain = (key: string) => {
    setDomain(key)
    setActivePage('overview')
  }

  const VIBE_PAGES: Record<string, React.ReactNode> = {
    overview: <VibeOverview />,
    gemini: <GeminiTutorial />,
    codex: <CodexTutorial />,
    ccswitch: <CCSwitchTutorial />,
  }

  const LEARNING_PAGES: Record<string, React.ReactNode> = {
    overview: <LearningOverview />,
    reading: <LearningReading />,
    mindmap: <LearningMindmap />,
    knowledge: <LearningKnowledge />,
    growth: <LearningGrowth />,
  }

  const renderPage = () => {
    if (domain === null) return <Home onEnter={handleEnterDomain} />
    if (domain === 'vibe-coding') return VIBE_PAGES[activePage] ?? <VibeOverview />
    if (domain === 'learning') return LEARNING_PAGES[activePage] ?? <LearningOverview />
    if (domain === 'logistics') return LOGISTICS_PAGES[activePage] ?? <Overview />
    return <DomainPlaceholder domainKey={domain} subPage={activePage} />
  }

  const handleBack = () => {
    setDomain(null)
  }

  return (
    <div className={styles.app}>
      <Header onBack={domain ? handleBack : undefined} />
      <div className={styles.body}>
        <Sidebar
          domain={domain}
          activePage={activePage}
          onSelectPage={setActivePage}
          onSelectDomain={handleEnterDomain}
        />
        <div className={styles.handle} onMouseDown={onMouseDown} />
        <main className={styles.content}>
          <BreadcrumbBlock
            domain={domain}
            activePage={activePage}
            onBack={handleBack}
            onSelectPage={setActivePage}
          />
          {renderPage()}
        </main>
      </div>
    </div>
  )
}

function BreadcrumbBlock({ domain, activePage, onBack, onSelectPage }: {
  domain: string | null
  activePage: string
  onBack: () => void
  onSelectPage: (key: string) => void
}) {
  const { lang } = useT()

  if (!domain) {
    return <Breadcrumb path={[]} />
  }

  const d = domains.find(dd => dd.key === domain)
  const domainLabel = d?.title[lang as Lang] ?? domain
  const sub = d?.subModules.find(s => s.key === activePage)
  const pageLabel = sub?.title[lang as Lang] ?? activePage

  return (
    <Breadcrumb
      path={[
        { label: domainLabel, onClick: onBack },
        { label: pageLabel, onClick: () => onSelectPage(activePage) },
      ]}
    />
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  )
}
