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
          {domain === null ? (
            <Home onEnter={handleEnterDomain} />
          ) : (
            LOGISTICS_PAGES[activePage] ?? <Overview />
          )}
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
  const { t } = useT()

  if (!domain) {
    return (
      <Breadcrumb path={[]} />
    )
  }

  const pageLabels: Record<string, string> = {
    overview: t.sidebar.overview,
    warehouse: t.sidebar.warehouse,
    transport: t.sidebar.transport,
    delivery: t.sidebar.delivery,
    prediction: t.sidebar.prediction,
    operation: t.sidebar.operation,
  }

  return (
    <Breadcrumb
      path={[
        { label: 'AI Logistics', onClick: onBack },
        { label: pageLabels[activePage] ?? activePage, onClick: () => onSelectPage(activePage) },
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
