import { useT } from '../contexts/LanguageContext'
import { domains } from '../data/domains'
import type { Lang } from '../i18n/translations'
import styles from './Page.module.css'

const statusLabels: Record<string, Record<Lang, string>> = {
  done: { en: '✅ Live', 'zh-CN': '✅ 已上线', 'zh-TW': '✅ 已上線' },
  wip: { en: '🚧 WIP', 'zh-CN': '🚧 开发中', 'zh-TW': '🚧 開發中' },
  planned: { en: '📋 Planned', 'zh-CN': '📋 规划中', 'zh-TW': '📋 規劃中' },
}

interface Props {
  onEnter: (domainKey: string) => void
}

export default function Home({ onEnter }: Props) {
  const { t, lang } = useT()

  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>🌐 {t.header.title}</h2>
        <p className={styles.subtitle}>
          {lang === 'zh-CN' ? '实用工具导航 & AIGC 实操教程'
            : lang === 'zh-TW' ? '實用工具導航 & AIGC 實操教學'
            : 'Curated Tool Directories & AIGC Hands-on Tutorials'}
        </p>
      </div>

      <div className={styles.summary}>
        {lang === 'zh-CN'
          ? '这里有两大板块：🧭 导航合集 — 精心整理的300+工具网站，覆盖14个领域，一站式查找你需要的工具；🤖 AIGC教程 — 手把手教你用AI生成音频、视频、小说、PPT、网页、App甚至软件。点击下方卡片开始探索。'
          : lang === 'zh-TW'
            ? '這裡有兩大板塊：🧭 導航合集 — 精心整理的300+工具網站，覆蓋14個領域，一站式查找你需要的工具；🤖 AIGC教學 — 手把手教你用AI生成音頻、影片、小說、PPT、網頁、App甚至軟體。點擊下方卡片開始探索。'
            : 'Two main sections: 🧭 Navigation Hub — 300+ curated tools across 14 categories, find everything you need in one place; 🤖 AIGC Tutorials — step-by-step guides for generating audio, video, novels, PPTs, web pages, apps, and software with AI. Click a card to start exploring.'}
      </div>

      <div className={styles.domainGrid}>
        {domains.map((d) => {
          const title = d.title[lang]
          const desc = d.desc[lang]

          return (
            <div
              key={d.key}
              className={`${styles.domainCard} ${styles.domainClickable}`}
              style={{ borderTop: `4px solid ${d.color}` }}
              onClick={() => onEnter(d.key)}
            >
              <div className={styles.domainHead}>
                <span className={styles.domainIcon}>{d.icon}</span>
                <span className={styles.domainStatus}>{statusLabels[d.status][lang]}</span>
              </div>
              <h3 className={styles.domainTitle}>{title}</h3>
              <p className={styles.domainDesc}>{desc}</p>
              <span className={styles.domainCta}>
                {lang === 'zh-CN' ? '进入 →' : lang === 'zh-TW' ? '進入 →' : 'Enter →'}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
