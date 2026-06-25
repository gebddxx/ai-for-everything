import { useT } from '../contexts/LanguageContext'
import { domains } from '../data/domains'
import type { Lang } from '../i18n/translations'
import styles from './Page.module.css'

interface Props {
  onSelectPage: (key: string) => void
}

const navCats = (domains.find(d => d.key === 'nav-hub')?.subModules || []).filter(s => s.key !== 'overview')

export default function NavHubOverview({ onSelectPage }: Props) {
  const { lang } = useT()

  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>🧭 {lang === 'zh-CN' ? '导航合集' : lang === 'zh-TW' ? '導航合集' : 'Navigation Hub'}</h2>
        <p className={styles.subtitle}>
          {lang === 'zh-CN' ? '14个分类 · 300+精选工具网站'
            : lang === 'zh-TW' ? '14個分類 · 300+精選工具網站'
            : '14 categories · 300+ curated tools'}
        </p>
      </div>
      <p className={styles.summary}>
        {lang === 'zh-CN'
          ? '点击任意分类卡片，浏览该领域的精选工具目录。每个工具都附带中英文介绍和直达链接。'
          : lang === 'zh-TW'
            ? '點擊任意分類卡片，瀏覽該領域的精選工具目錄。每個工具都附帶中英文介紹和直達鏈接。'
            : 'Click any category card to explore curated tools with bilingual descriptions and direct links.'}
      </p>
      <div className={styles.domainGrid}>
        {navCats.map((cat) => (
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
              {lang === 'zh-CN' ? '浏览 →' : lang === 'zh-TW' ? '瀏覽 →' : 'Browse →'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
