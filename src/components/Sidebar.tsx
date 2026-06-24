import { pages, pageKeys } from '../data/logistics'
import styles from './Sidebar.module.css'

interface Props {
  active: string
  onSelect: (key: string) => void
}

export default function Sidebar({ active, onSelect }: Props) {
  return (
    <nav className={styles.sidebar}>
      {pageKeys.map((key) => {
        const page = pages[key]
        const isActive = key === active
        return (
          <button
            key={key}
            className={`${styles.item} ${isActive ? styles.active : ''}`}
            onClick={() => onSelect(key)}
          >
            <span className={styles.icon}>{page.icon}</span>
            <span className={styles.label}>{page.title}</span>
          </button>
        )
      })}
    </nav>
  )
}
