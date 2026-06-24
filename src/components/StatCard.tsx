import type { StatItem } from '../data/logistics'
import styles from './StatCard.module.css'

export default function StatCard({ label, value, sub, trend }: StatItem) {
  return (
    <div className={styles.card}>
      <div className={styles.label}>{label}</div>
      <div className={styles.valueRow}>
        <span className={styles.value}>{value}</span>
        {trend && (
          <span className={`${styles.trend} ${trend === 'up' ? styles.up : styles.down}`}>
            {trend === 'up' ? '↑' : '↓'}
          </span>
        )}
      </div>
      {sub && <div className={styles.sub}>{sub}</div>}
    </div>
  )
}
