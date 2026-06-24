import { overview } from '../data/logistics'
import StatCard from '../components/StatCard'
import PieChart from '../components/PieChart'
import styles from './Page.module.css'

export default function Overview() {
  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>{overview.icon} AI物流 · 全景总览</h2>
        <p className={styles.subtitle}>{overview.subtitle}</p>
      </div>

      <div className={styles.summary}>{overview.summary}</div>

      <div className={styles.stats}>
        {overview.stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      <div className="styles.grid" style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginBottom: 28 }}>
        <div className={styles.pieSection} style={{ flex: '1 1 400px' }}>
          <h3 className={styles.chartTitle}>🍩 AI投入效能分布</h3>
          <PieChart data={overview.pieData} innerRadius={55} />
        </div>
      </div>

      <h3 className={styles.chartTitle}>🏆 标杆案例速览</h3>
      <div className={styles.highlights}>
        {overview.highlights.map((h) => (
          <div key={h.case} className={styles.highlightCard}>
            <span className={styles.highlightBadge}>{h.module}</span>
            <div className={styles.highlightBody}>
              <div className={styles.highlightCase}>{h.case}</div>
              <div className={styles.highlightResult}>{h.result}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
