import { pages } from '../data/logistics'
import StatCard from '../components/StatCard'
import styles from './Page.module.css'

const data = pages.warehouse

export default function Warehouse() {
  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>{data.icon} {data.title}</h2>
        <p className={styles.subtitle}>{data.subtitle}</p>
      </div>

      <div className={styles.stats}>
        {data.stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      <div className={styles.cases}>
        {data.cases.map((c) => (
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
