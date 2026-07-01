import { useState } from 'react'
import { useT } from '../contexts/LanguageContext'
import { tText, type MultiLang } from '../i18n/translate'
import { newsIssues } from '../data/aiNews'
import styles from './Page.module.css'
const PAGE_SIZE = 10
export default function AiNews() {
  const { lang } = useT()
  const [visible, setVisible] = useState(PAGE_SIZE)
  const L = (a: MultiLang, b?: string, c?: string) => { if (typeof a !== "string") return tText(a, lang); if (b !== undefined) return lang === "zh-CN" ? (b || a) : lang === "zh-TW" ? (c || b || a) : a; return tText(a, lang) }
  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>📰 {L('AI News Brief', 'AI速报', 'AI速報')}</h2>
        <p className={styles.subtitle}>
          {L('Updated every 4 hours · ', '每4小时更新 · 已更新', '每4小時更新 · 已更新')}
          <strong style={{ color: 'var(--primary)' }}>{newsIssues[0]?.id ?? 1379}</strong>
          {L(' issues', ' 期', ' 期')}
        </p>
      </div>
      <div className={styles.summary}>
        {L(
          'Curated AI industry news — covering model releases, product updates, funding, research, and developer tools. Sourced from official announcements and community highlights.',
          '精选AI行业快讯——覆盖模型发布、产品更新、投融资、学术研究和开发者工具。来源包括官方公告和社区热议。',
          '精選AI行業快訊——覆蓋模型發布、產品更新、投融資、學術研究和開發者工具。來源包括官方公告和社區熱議。'
        )}
      </div>
      {newsIssues.slice(0, visible).map(issue => (
        <div
          key={issue.id}
          style={{ background: 'var(--bg-card)', borderRadius: 12, padding: '18px 22px', marginBottom: 12, boxShadow: 'var(--shadow)', border: '1px solid var(--border)', transition: 'box-shadow .15s', }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <span style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', color: '#fff', fontSize: 12, fontWeight: 700, padding: '2px 10px', borderRadius: 20, whiteSpace: 'nowrap', }}>
              #{issue.id}
            </span>
            <span style={{ fontSize: 13, color: 'var(--text-secondary)', fontWeight: 500 }}>
              {issue.date} {issue.time}
            </span>
            <span style={{ fontSize: 11, color: 'var(--text-muted)', background: 'var(--hover-bg)', padding: '1px 8px', borderRadius: 10, }}>
              {issue.count} {L('items', '条', '條')}
            </span>
          </div>
          <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.8, margin: 0 }}>
            {issue.summary}
          </p>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 10 }}>
            {issue.tags.map(tag => (
              <span key={tag} style={{ fontSize: 11, color: 'var(--primary)', background: 'var(--primary-light)', padding: '2px 8px', borderRadius: 6, fontWeight: 500, }}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      ))}
      {visible < newsIssues.length && (
        <button
          onClick={() => setVisible(v => v + PAGE_SIZE)}
          style={{ display: 'block', width: '100%', padding: 12, background: 'var(--bg-card)', border: '1px dashed var(--border)', borderRadius: 10, color: 'var(--text-secondary)', fontSize: 14, cursor: 'pointer', marginTop: 4, }}
        >
          {L('Load more...', '加载更多...', '載入更多...')}
        </button>
      )}
      <div style={{ textAlign: 'center', padding: '20px 0', color: 'var(--text-muted)', fontSize: 13 }}>
        {L('AI News Brief · Since 2022', 'AI速报 · 始于2022', 'AI速報 · 始於2022')}
      </div>
    </div>
  )
}
