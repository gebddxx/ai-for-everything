import { useState, useCallback, useEffect, useRef } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Overview from './pages/Overview'
import Warehouse from './pages/Warehouse'
import Transport from './pages/Transport'
import Delivery from './pages/Delivery'
import Prediction from './pages/Prediction'
import Operation from './pages/Operation'
import styles from './App.module.css'

const PAGES: Record<string, React.ReactNode> = {
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
  const [active, setActive] = useState('overview')
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
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging.current) return
      const next = Math.min(MAX_SIDEBAR, Math.max(MIN_SIDEBAR, e.clientX))
      setSidebarWidth(next)
    }
    const onMouseUp = () => {
      if (dragging.current) {
        dragging.current = false
        document.body.style.cursor = ''
        localStorage.setItem('ai-logistics-sidebar-width', String(sidebarWidth))
      }
    }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [sidebarWidth])

  useEffect(() => {
    document.documentElement.style.setProperty('--sidebar-width', `${sidebarWidth}px`)
  }, [sidebarWidth])

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.body}>
        <Sidebar active={active} onSelect={setActive} />
        <div className={styles.handle} onMouseDown={onMouseDown} />
        <main className={styles.content}>
          {PAGES[active]}
        </main>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}
