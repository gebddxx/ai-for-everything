import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Warehouse from './pages/Warehouse'
import Transport from './pages/Transport'
import Delivery from './pages/Delivery'
import Prediction from './pages/Prediction'
import Operation from './pages/Operation'
import styles from './App.module.css'

const PAGES: Record<string, React.ReactNode> = {
  warehouse: <Warehouse />,
  transport: <Transport />,
  delivery: <Delivery />,
  prediction: <Prediction />,
  operation: <Operation />,
}

export default function App() {
  const [active, setActive] = useState('warehouse')

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
