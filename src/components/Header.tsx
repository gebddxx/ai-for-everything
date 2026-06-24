import { useTheme } from '../contexts/ThemeContext'
import styles from './Header.module.css'

export default function Header() {
  const { theme, toggle } = useTheme()

  return (
    <header className={styles.header}>
      <span className={styles.logo}>📦</span>
      <h1 className={styles.title}>AI Logistics Dashboard</h1>
      <span className={styles.badge}>AI-Powered</span>
      <span className={styles.spacer} />
      <button className={styles.themeBtn} onClick={toggle} title="Toggle theme">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </header>
  )
}
