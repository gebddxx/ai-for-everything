import { useT } from '../contexts/LanguageContext'
import { domains } from '../data/domains'
import type { Lang } from '../i18n/translations'
import styles from './Page.module.css'

const statusLabels: Record<string, Record<Lang, string>> = {
  done: { en: '✅ Live', 'zh-CN': '✅ 已上线', 'zh-TW': '✅ 已上線' },
}

interface Props { onEnter: (domainKey: string) => void }

export default function Home({ onEnter }: Props) {
  const { lang } = useT()

  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>🌐 AI Navigator</h2>
        <p className={styles.subtitle}>
          {lang === 'zh-CN' ? '实用工具导航 · AI行业应用 · AIGC实操教程'
            : lang === 'zh-TW' ? '實用工具導航 · AI行業應用 · AIGC實操教學'
            : 'Tool Directory · AI in Industries · AIGC Tutorials'}
        </p>
      </div>

      <div className={styles.summary}>
        {lang === 'zh-CN'
          ? '三大板块：🧭 导航工具集 — 精选200+实用网站，搜索/对话/设计/创意/办公/3D/智能体一站式查找；🏭 AI行业应用 — 看AI如何落地8大行业，每个行业都有真实案例和工具推荐；🤖 AIGC教程 — 手把手教你生成音频、视频、小说、PPT、网页、App和软件。'
          : lang === 'zh-TW'
            ? '三大板塊：🧭 導航工具集 — 精選200+實用網站，搜索/對話/設計/創意/辦公/3D/智能體一站式查找；🏭 AI行業應用 — 看AI如何落地8大行業，每個行業都有真實案例和工具推薦；🤖 AIGC教學 — 手把手教你生成音頻、影片、小說、PPT、網頁、App和軟體。'
            : 'Three sections: 🧭 Tool Directory — 200+ curated websites across search, chat, design, creative, office, 3D, and AI agents; 🏭 AI in Industries — see how AI is transforming 8 major industries with real cases and tool recommendations; 🤖 AIGC Tutorials — step-by-step guides for generating audio, video, novels, PPTs, web pages, apps, and software.'}
      </div>

      <div className={styles.domainGrid}>
        {domains.map(d => (
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
            <h3 className={styles.domainTitle}>{d.title[lang as Lang]}</h3>
            <p className={styles.domainDesc}>{d.desc[lang as Lang]}</p>
            <span className={styles.domainCta}>
              {lang === 'zh-CN' ? '进入 →' : lang === 'zh-TW' ? '進入 →' : 'Enter →'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
