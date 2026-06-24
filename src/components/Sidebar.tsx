import { useT } from '../contexts/LanguageContext'
import styles from './Sidebar.module.css'

interface Props {
  active: string
  onSelect: (key: string) => void
}

export default function Sidebar({ active, onSelect }: Props) {
  const { t } = useT()

  const items = [
    { key: 'overview', icon: '📦', labelKey: 'overview' as const },
    { key: 'warehouse', icon: '🏭', labelKey: 'warehouse' as const },
    { key: 'transport', icon: '🚛', labelKey: 'transport' as const },
    { key: 'delivery', icon: '🚁', labelKey: 'delivery' as const },
    { key: 'prediction', icon: '📊', labelKey: 'prediction' as const },
    { key: 'operation', icon: '🤖', labelKey: 'operation' as const },
  ]

  return (
    <nav className={styles.sidebar}>
      {items.map((item) => {
        const isActive = item.key === active
        return (
          <button
            key={item.key}
            className={`${styles.item} ${isActive ? styles.active : ''}`}
            onClick={() => onSelect(item.key)}
          >
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.label}>{t.sidebar[item.labelKey]}</span>
          </button>
        )
      })}
    </nav>
  )
}
