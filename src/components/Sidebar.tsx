import { pages, overview } from '../data/logistics'
import styles from './Sidebar.module.css'

interface Props {
  active: string
  onSelect: (key: string) => void
}

const ALL_ITEMS = [
  { key: 'overview', icon: overview.icon, title: overview.title },
  ...Object.keys(pages).map((key) => ({
    key,
    icon: pages[key].icon,
    title: pages[key].title,
  })),
]

export default function Sidebar({ active, onSelect }: Props) {
  return (
    <nav className={styles.sidebar}>
      {ALL_ITEMS.map((item) => {
        const isActive = item.key === active
        return (
          <button
            key={item.key}
            className={`${styles.item} ${isActive ? styles.active : ''}`}
            onClick={() => onSelect(item.key)}
          >
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.label}>{item.title}</span>
          </button>
        )
      })}
    </nav>
  )
}
