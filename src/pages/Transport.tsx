import { useT } from '../contexts/LanguageContext'
import StatCard from '../components/StatCard'
import BarChart from '../components/BarChart'
import styles from './Page.module.css'

const chartData = [
  { name: 'Load Rate (%)', Before: 90, After: 97 },
  { name: 'Fuel Cost Index', Before: 100, After: 85 },
]
const bars = [
  { key: 'Before', label: 'Before', color: '#94a3b8' },
  { key: 'After', label: 'After', color: '#3b82f6' },
]

export default function Transport() {
  const { t } = useT()
  const d = t.modules.transport

  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>🚛 {d.title}</h2>
        <p className={styles.subtitle}>{d.subtitle}</p>
      </div>

      <div className={styles.stats}>
        {d.stats.map((s: { label: string; value: string; sub: string }) => (
          <StatCard key={s.label} label={s.label} value={s.value} sub={s.sub} />
        ))}
      </div>

      <div className={styles.chart}>
        <h3 className={styles.chartTitle}>📈 {d.chartTitle}</h3>
        <BarChart data={chartData} bars={bars} />
      </div>

      <div className={styles.cases} style={{ marginTop: 20 }}>
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
