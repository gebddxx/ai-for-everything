import { useState } from 'react'
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

function AppContent() {
  const [active, setActive] = useState('overview')

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.body}>
        <Sidebar active={active} onSelect={setActive} />
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
