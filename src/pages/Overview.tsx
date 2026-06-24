import { useT } from '../contexts/LanguageContext'
import StatCard from '../components/StatCard'
import PieChart from '../components/PieChart'
import MindMap from '../components/MindMap'
import styles from './Page.module.css'

const pieData = [
  { name: 'Smart Warehousing', value: 20, color: '#3b82f6' },
  { name: 'Transport Dispatch', value: 22, color: '#10b981' },
  { name: 'Last-Mile Delivery', value: 18, color: '#8b5cf6' },
  { name: 'Prediction & Decision', value: 25, color: '#f59e0b' },
  { name: 'Operations & Service', value: 15, color: '#ef4444' },
]

export default function Overview() {
  const { t } = useT()

  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>📦 {t.overview.title}</h2>
        <p className={styles.subtitle}>{t.overview.subtitle}</p>
      </div>

      <div className={styles.summary}>{t.overview.summary}</div>

      <div className={styles.stats}>
        {t.overviewStats.map((s: { label: string; value: string; sub: string }) => (
          <StatCard key={s.label} label={s.label} value={s.value} sub={s.sub} />
        ))}
      </div>

      <div className={styles.pieSection} style={{ marginBottom: 28 }}>
        <h3 className={styles.chartTitle}>🧠 {t.overview.mindmapTitle}</h3>
        <MindMap />
      </div>

      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginBottom: 28 }}>
        <div className={styles.pieSection} style={{ flex: '1 1 400px' }}>
          <h3 className={styles.chartTitle}>🍩 {t.overview.pieTitle}</h3>
          <PieChart data={pieData} innerRadius={55} />
        </div>
      </div>

      <h3 className={styles.chartTitle}>🏆 {t.overview.highlightsTitle}</h3>
      <div className={styles.highlights}>
        {t.overviewHighlights.map((h: { module: string; company: string; result: string }) => (
          <div key={h.company} className={styles.highlightCard}>
            <span className={styles.highlightBadge}>{h.module}</span>
            <div className={styles.highlightBody}>
              <div className={styles.highlightCase}>{h.company}</div>
              <div className={styles.highlightResult}>{h.result}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
