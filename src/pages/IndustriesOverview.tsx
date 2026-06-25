import { useT } from '../contexts/LanguageContext'
import { domains } from '../data/domains'
import type { Lang } from '../i18n/translations'
import styles from './Page.module.css'

interface Props { onSelectPage: (key: string) => void }

const cats = (domains.find(d => d.key === 'ai-industries')?.subModules || []).filter(s => s.key !== 'overview')

export default function IndustriesOverview({ onSelectPage }: Props) {
  const { lang } = useT()
  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>🏭 {lang === 'zh-CN' ? 'AI 行业应用' : lang === 'zh-TW' ? 'AI 行業應用' : 'AI in Industries'}</h2>
        <p className={styles.subtitle}>{lang === 'zh-CN' ? '8大行业 · AI落地案例与工具' : lang === 'zh-TW' ? '8大行業 · AI落地案例與工具' : '8 industries · AI applications & tools'}</p>
      </div>
      <p className={styles.summary}>
        {lang === 'zh-CN' ? '探索AI在物流、医疗、金融、教育、制造、农业、企业等行业的真实应用。每个行业都有标杆案例、关键指标和精选工具目录。' : lang === 'zh-TW' ? '探索AI在物流、醫療、金融、教育、製造、農業、企業等行業的真實應用。每個行業都有標杆案例、關鍵指標和精選工具目錄。' : 'Explore real AI applications across logistics, healthcare, finance, education, manufacturing, agriculture, and enterprise. Each sector features benchmark cases, key metrics, and curated tool directories.'}
      </p>
      <div className={styles.domainGrid}>
        {cats.map(cat => (
          <div key={cat.key} className={`${styles.domainCard} ${styles.domainClickable}`} style={{ borderTop: '4px solid var(--primary)' }} onClick={() => onSelectPage(cat.key)}>
            <div className={styles.domainHead}><span className={styles.domainIcon}>{cat.icon}</span></div>
            <h3 className={styles.domainTitle}>{cat.title[lang as Lang]}</h3>
            <span className={styles.domainCta}>{lang === 'zh-CN' ? '进入 →' : lang === 'zh-TW' ? '進入 →' : 'Enter →'}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
