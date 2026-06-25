import { useT } from '../contexts/LanguageContext'
import { domains } from '../data/domains'
import type { Lang } from '../i18n/translations'
import styles from './Page.module.css'

interface Props {
  onSelectPage: (key: string) => void
}

const aigcCats = (domains.find(d => d.key === 'aigc')?.subModules || []).filter(s => s.key !== 'overview')

export default function AigcOverview({ onSelectPage }: Props) {
  const { lang } = useT()

  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>🤖 {lang === 'zh-CN' ? 'AIGC 教程' : lang === 'zh-TW' ? 'AIGC 教學' : 'AIGC Tutorials'}</h2>
        <p className={styles.subtitle}>
          {lang === 'zh-CN' ? '14个教程 · 从入门到精通'
            : lang === 'zh-TW' ? '14個教學 · 從入門到精通'
            : '14 tutorials · From beginner to pro'}
        </p>
      </div>
      <p className={styles.summary}>
        {lang === 'zh-CN'
          ? '手把手实操教程，覆盖 AI 编程、智能体搭建、音频/视频/小说/PPT/网页/App/软件生成。每一步都有代码和截图说明。'
          : lang === 'zh-TW'
            ? '手把手實操教學，覆蓋 AI 編程、智能體搭建、音頻/影片/小說/PPT/網頁/App/軟體生成。每一步都有程式碼和截圖說明。'
            : 'Step-by-step hands-on tutorials covering AI coding, agent building, and generating audio, video, novels, PPTs, web pages, apps, and software.'}
      </p>
      <div className={styles.domainGrid}>
        {aigcCats.map((cat) => (
          <div
            key={cat.key}
            className={`${styles.domainCard} ${styles.domainClickable}`}
            style={{ borderTop: '4px solid var(--primary)' }}
            onClick={() => onSelectPage(cat.key)}
          >
            <div className={styles.domainHead}>
              <span className={styles.domainIcon}>{cat.icon}</span>
            </div>
            <h3 className={styles.domainTitle}>{cat.title[lang as Lang]}</h3>
            <span className={styles.domainCta}>
              {lang === 'zh-CN' ? '开始学习 →' : lang === 'zh-TW' ? '開始學習 →' : 'Learn →'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
