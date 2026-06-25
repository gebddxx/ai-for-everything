import { useState } from 'react'
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

export default function Sidebar({ domain, activePage, onSelectPage, onSelectDomain }: Props) {
  const { t, lang } = useT()
  const [expanded, setExpanded] = useState<Set<string>>(() => {
    // auto-expand the current domain
    return domain ? new Set([domain]) : new Set()
  })

  const toggle = (key: string) => {
    setExpanded(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  return (
    <nav className={styles.sidebar}>
      <div className={styles.sectionTitle}>
        {lang === 'zh-CN' ? '导航' : lang === 'zh-TW' ? '導航' : 'Navigation'}
      </div>

      {domains.map((d) => {
        const title = d.title[lang as Lang]
        const isExpanded = expanded.has(d.key)
        const isActiveDomain = domain === d.key

        return (
          <div key={d.key} className={styles.treeGroup}>
            {/* domain header */}
            <button
              className={`${styles.item} ${isActiveDomain ? styles.activeDomain : ''}`}
              onClick={() => {
                toggle(d.key)
                if (d.status === 'done') onSelectDomain(d.key)
                else onSelectDomain(d.key) // now all domains are enterable
              }}
            >
              <span className={styles.arrow}>{isExpanded ? '▾' : '▸'}</span>
              <span className={styles.icon}>{d.icon}</span>
              <span className={styles.label}>{title}</span>
            </button>

            {/* sub-modules */}
            {isExpanded && (
              <div className={styles.subList}>
                {d.subModules.map((sub) => {
                  const isActive = isActiveDomain && sub.key === activePage
                  return (
                    <button
                      key={sub.key}
                      className={`${styles.subItem} ${isActive ? styles.active : ''}`}
                      onClick={() => {
                        onSelectDomain(d.key)
                        onSelectPage(sub.key)
                      }}
                    >
                      <span className={styles.subIcon}>{sub.icon}</span>
                      <span className={styles.label}>{sub.title[lang as Lang]}</span>
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
}
