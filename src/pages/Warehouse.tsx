import { useT } from '../contexts/LanguageContext'
import StatCard from '../components/StatCard'
import styles from './Page.module.css'

export default function Warehouse() {
  const { t } = useT()
  const d = t.modules.warehouse

  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>🏭 {d.title}</h2>
        <p className={styles.subtitle}>{d.subtitle}</p>
      </div>

      <div className={styles.stats}>
        {d.stats.map((s: { label: string; value: string; sub: string }) => (
          <StatCard key={s.label} label={s.label} value={s.value} sub={s.sub} />
        ))}
      </div>

      <div className={styles.cases}>
        {d.cases.map((c: { title: string; items: { company: string; detail: string }[] }) => (
          <div key={c.title} className={styles.caseCard}>
            <h3 className={styles.caseTitle}>{c.title}</h3>
            {c.items.map((item) => (
              <div key={item.company} className={styles.caseItem}>
                <span className={styles.company}>{item.company}</span>
                <p className={styles.detail}>{item.detail}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
