import { useT } from '../contexts/LanguageContext'
import { domains } from '../data/domains'
import type { Lang } from '../i18n/translations'
import styles from './Sidebar.module.css'

interface Props {
  domain: string | null
  activePage: string
  onSelectPage: (key: string) => void
  onSelectDomain: (key: string) => void
}

const LOGISTICS_ITEMS = [
  { key: 'overview', icon: '📦', labelKey: 'overview' as const },
  { key: 'warehouse', icon: '🏭', labelKey: 'warehouse' as const },
  { key: 'transport', icon: '🚛', labelKey: 'transport' as const },
  { key: 'delivery', icon: '🚁', labelKey: 'delivery' as const },
  { key: 'prediction', icon: '📊', labelKey: 'prediction' as const },
  { key: 'operation', icon: '🤖', labelKey: 'operation' as const },
]

export default function Sidebar({ domain, activePage, onSelectPage, onSelectDomain }: Props) {
  const { t, lang } = useT()

  // Home page: show all domains
  if (domain === null) {
    return (
      <nav className={styles.sidebar}>
        <div className={styles.sectionTitle}>
          {lang === 'zh-CN' ? 'AI 领域' : lang === 'zh-TW' ? 'AI 領域' : 'AI Domains'}
        </div>
        {domains.map((d) => {
          const title = d.title[lang as Lang]
          const isReady = d.status === 'done'
          return (
            <button
              key={d.key}
              className={`${styles.item} ${!isReady ? styles.disabled : ''}`}
              onClick={() => isReady && onSelectDomain(d.key)}
              title={isReady ? title : `${title} — ${lang === 'zh-CN' ? '即将上线' : lang === 'zh-TW' ? '即將上線' : 'Coming soon'}`}
            >
              <span className={styles.icon}>{d.icon}</span>
              <span className={styles.label}>{title}</span>
              {!isReady && (
                <span className={styles.tag}>
                  {lang === 'zh-CN' ? '即将' : lang === 'zh-TW' ? '即將' : 'Soon'}
                </span>
              )}
            </button>
          )
        })}
      </nav>
    )
  }

  // Domain page: show sub-modules
  return (
    <nav className={styles.sidebar}>
      <div className={styles.sectionTitle}>
        {t.sidebar.overview ? 'AI Logistics' : 'AI Logistics'}
      </div>
      {LOGISTICS_ITEMS.map((item) => {
        const isActive = item.key === activePage
        return (
          <button
            key={item.key}
            className={`${styles.item} ${isActive ? styles.active : ''}`}
            onClick={() => onSelectPage(item.key)}
          >
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.label}>{t.sidebar[item.labelKey]}</span>
          </button>
        )
      })}
    </nav>
  )
}
