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
        <h2 className={styles.title}>🌐 AI for Everything</h2>
        <p className={styles.subtitle}>
          {lang === 'zh-CN' ? 'AI 赋能千行百业 · 全景数据看板'
            : lang === 'zh-TW' ? 'AI 賦能千行百業 · 全景數據看板'
            : 'AI Empowering Every Industry · Panoramic Dashboard'}
        </p>
      </div>

      <div className={styles.summary}>
        {lang === 'zh-CN'
          ? 'AI 正在深刻改变每一个行业。这里汇集了 AI 在物流、医疗、教育、金融、制造、农业等领域的前沿应用与数据洞察。点击任意领域卡片，深入了解 AI 如何重塑该行业。'
          : lang === 'zh-TW'
            ? 'AI 正在深刻改變每一個行業。這裡彙集了 AI 在物流、醫療、教育、金融、製造、農業等領域的前沿應用與數據洞察。點擊任意領域卡片，深入了解 AI 如何重塑該行業。'
            : 'AI is transforming every industry. This hub brings together cutting-edge applications and data-driven insights across logistics, healthcare, education, finance, manufacturing, agriculture, and beyond. Click any card to dive in.'}
      </div>

      <div className={styles.domainGrid}>
        {domains.map((d) => {
          const title = d.title[lang]
          const desc = d.desc[lang]
          const isClickable = d.status === 'done'

          return (
            <div
              key={d.key}
              className={`${styles.domainCard} ${isClickable ? styles.domainClickable : ''}`}
              style={{ borderTop: `4px solid ${d.color}` }}
              onClick={() => isClickable && onEnter(d.key)}
            >
              <div className={styles.domainHead}>
                <span className={styles.domainIcon}>{d.icon}</span>
                <span className={styles.domainStatus}>{statusLabels[d.status][lang]}</span>
              </div>
              <h3 className={styles.domainTitle}>{title}</h3>
              <p className={styles.domainDesc}>{desc}</p>
              {isClickable && (
                <span className={styles.domainCta}>
                  {lang === 'zh-CN' ? '进入 →' : lang === 'zh-TW' ? '進入 →' : 'Enter →'}
                </span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
