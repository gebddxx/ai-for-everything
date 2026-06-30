import { useT } from '../contexts/LanguageContext'
import styles from './Breadcrumb.module.css'

interface Props {
  path: { label: string; onClick?: () => void }[]
}

export default function Breadcrumb({ path }: Props) {
  const { t } = useT()

  return (
    <div className={styles.breadcrumb}>
      <span
        className={`${styles.crumb} ${path.length === 0 ? styles.active : styles.clickable}`}
        onClick={path.length > 0 ? path[0]?.onClick : undefined}
      >
        🏠 {t.sidebar.overview}
      </span>
      {path.map((p, i) => (
        <span key={`seg-${i}`}>
          <span className={styles.sep}>›</span>
          <span
            className={`${styles.crumb} ${i === path.length - 1 ? styles.active : styles.clickable}`}
            onClick={p.onClick}
          >
            {p.label}
          </span>
        </span>
      ))}
    </div>
  )
}
