import { useT } from '../contexts/LanguageContext'
import { domains } from '../data/domains'
import type { Lang } from '../i18n/translations'
import styles from './Page.module.css'

interface Props { onSelectPage: (key: string) => void }

const cats = (domains.find(d => d.key === 'nav-tools')?.subModules || []).filter(s => s.key !== 'overview')

export default function NavToolsOverview({ onSelectPage }: Props) {
  const { lang } = useT()
  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>🧭 {lang === 'zh-CN' ? '导航工具集' : lang === 'zh-TW' ? '導航工具集' : 'Tool Directory'}</h2>
        <p className={styles.subtitle}>{lang === 'zh-CN' ? '8个分类 · 200+实用工具网站' : lang === 'zh-TW' ? '8個分類 · 200+實用工具網站' : '8 categories · 200+ curated tools'}</p>
      </div>
      <p className={styles.summary}>
        {lang === 'zh-CN' ? '精选实用工具导航——搜索引擎、大模型对话、创意设计、办公提效、3D游戏、智能体等。点击任意分类卡片浏览该领域的工具目录。' : lang === 'zh-TW' ? '精選實用工具導航——搜索引擎、大模型對話、創意設計、辦公提效、3D遊戲、智能體等。點擊任意分類卡片瀏覽該領域的工具目錄。' : 'Curated tool directories — search engines, chatbots, creative tools, design, office productivity, 3D/gaming, AI agents, and more. Click any card to browse.'}
      </p>
      <div className={styles.domainGrid}>
        {cats.map(cat => (
          <div key={cat.key} className={`${styles.domainCard} ${styles.domainClickable}`} style={{ borderTop: '4px solid var(--primary)' }} onClick={() => onSelectPage(cat.key)}>
            <div className={styles.domainHead}><span className={styles.domainIcon}>{cat.icon}</span></div>
            <h3 className={styles.domainTitle}>{cat.title[lang as Lang]}</h3>
            <span className={styles.domainCta}>{lang === 'zh-CN' ? '浏览 →' : lang === 'zh-TW' ? '瀏覽 →' : 'Browse →'}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
