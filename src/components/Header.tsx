import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>📦</span>
      <h1 className={styles.title}>AI 物流全景数据看板</h1>
      <span className={styles.badge}>AI-Powered Logistics Dashboard</span>
    </header>
  )
}
