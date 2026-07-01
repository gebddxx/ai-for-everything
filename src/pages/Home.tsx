import { useState, useEffect } from 'react'
import { useT } from '../contexts/LanguageContext'
import { domains } from '../data/domains'
import { domainTitle } from '../i18n/translate'
import styles from './Page.module.css'
function getGreeting(lang: string) {
  const h = new Date().getHours()
  if (lang === 'zh-CN') {
    if (h < 6) return '夜深了'
    if (h < 9) return '早上好'
    if (h < 12) return '上午好'
    if (h < 14) return '中午好'
    if (h < 18) return '下午好'
    if (h < 22) return '晚上好'
    return '夜深了'
  }
  if (lang === 'zh-TW') {
    if (h < 6) return '夜深了'
    if (h < 9) return '早安'
    if (h < 12) return '上午好'
    if (h < 14) return '中午好'
    if (h < 18) return '下午好'
    if (h < 22) return '晚上好'
    return '夜深了'
  }
  if (h < 6) return 'Good Evening'
  if (h < 9) return 'Good Morning'
  if (h < 12) return 'Good Morning'
  if (h < 14) return 'Good Afternoon'
  if (h < 18) return 'Good Afternoon'
  if (h < 22) return 'Good Evening'
  return 'Good Evening'
}
const tips = {
  'zh-CN': [
    '🆕 已收录300+精选工具，覆盖16大行业',
    '📰 AI速报每4小时更新，追踪行业最新动态',
    '🎬 AIGC教程：从零生成音频、视频、PPT、网页、App',
    '💡 侧边栏点击可快速跳转，滚动浏览全部内容',
    '🔍 导航工具集支持连续滚动，无需翻页',
    '🌟 每天都有新工具收录，欢迎常来看看',
  ],
  'zh-TW': [
    '🆕 已收錄300+精選工具，覆蓋16大行業',
    '📰 AI速報每4小時更新，追蹤行業最新動態',
    '🎬 AIGC教學：從零生成音頻、影片、PPT、網頁、App',
    '💡 側邊欄點擊可快速跳轉，滾動瀏覽全部內容',
    '🔍 導航工具集支援連續滾動，無需翻頁',
    '🌟 每天都有新工具收錄，歡迎常來看看',
  ],
  en: [
    '🆕 300+ curated tools across 16 industries',
    '📰 AI News Brief updated every 4 hours',
    '🎬 AIGC Tutorials: audio, video, PPT, web, app generation',
    '💡 Sidebar for quick navigation, or scroll continuously',
    '🔍 All tools in one continuous scroll — no page flipping',
    '🌟 New tools added regularly — check back often',
  ],
}
interface Props { onEnter: (domainKey: string) => void }
export default function Home({ onEnter }: Props) {
  const { lang } = useT()
  const [tipIdx, setTipIdx] = useState(0)
  const t = tips[lang] || tips.en
  useEffect(() => {
    const timer = setInterval(() => setTipIdx(i => (i + 1) % t.length), 3500)
    return () => clearInterval(timer)
  }, [t.length])
  const greeting = getGreeting(lang)
  const stats = [
    { v: '300+', l: lang === 'zh-CN' ? '精选工具' : lang === 'zh-TW' ? '精選工具' : 'Curated Tools' },
    { v: '16', l: lang === 'zh-CN' ? '行业板块' : lang === 'zh-TW' ? '行業板塊' : 'Industries' },
    { v: '14', l: lang === 'zh-CN' ? '实操教程' : lang === 'zh-TW' ? '實操教學' : 'Tutorials' },
    { v: '1,379+', l: lang === 'zh-CN' ? 'AI速报期数' : lang === 'zh-TW' ? 'AI速報期數' : 'News Issues' },
  ]
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 30%, #3730a3 70%, #4c1d95 100%)', borderRadius: 16, padding: '40px 36px 32px', marginBottom: 28, color: '#fff', position: 'relative', overflow: 'hidden', }}>
        <div style={{ position: 'absolute', top: -40, right: -20, fontSize: 180, opacity: 0.08 }}>🌐</div>
        <h1 style={{ fontSize: 32, fontWeight: 800, margin: '0 0 6px', letterSpacing: -1 }}>
          {greeting}，{lang === 'zh-CN' ? '欢迎来到' : lang === 'zh-TW' ? '歡迎來到' : 'Welcome to'} AI Navigator
        </h1>
        <p style={{ fontSize: 16, opacity: 0.85, margin: '0 0 24px', maxWidth: 640, lineHeight: 1.6 }}>
          {lang === 'zh-CN'
            ? '一站式的AI工具导航、行业应用洞察和AIGC实操教程。不是零散的链接集合，而是一张完整的AI世界地图。'
            : lang === 'zh-TW'
            ? '一站式的AI工具導航、行業應用洞察和AIGC實操教學。不是零散的連結集合，而是一張完整的AI世界地圖。'
            : 'Your one-stop hub for AI tool discovery, industry insights, and hands-on AIGC tutorials. Not a link dump — a complete map of the AI world.'}
        </p>
        {/* Stats Row */}
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {stats.map(s => (
            <div key={s.l} style={{ textAlign: 'center', background: 'rgba(255,255,255,0.12)', borderRadius: 10, padding: '12px 20px', minWidth: 80 }}>
              <div style={{ fontSize: 28, fontWeight: 800 }}>{s.v}</div>
              <div style={{ fontSize: 12, opacity: 0.75, marginTop: 2 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Tip Ticker */}
      <div style={{ background: 'linear-gradient(90deg, rgba(102,126,234,0.1), rgba(118,75,162,0.1))', borderRadius: 10, padding: '10px 18px', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 10, border: '1px solid var(--border)', }}>
        <span style={{ fontSize: 14, flexShrink: 0 }}>💬</span>
        <span style={{ fontSize: 14, color: 'var(--text)', transition: 'opacity .3s', flex: 1, }}>
          {t[tipIdx]}
        </span>
      </div>
      {/* Section Cards */}
      <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
        📂 {lang === 'zh-CN' ? '快速导航' : lang === 'zh-TW' ? '快速導航' : 'Quick Navigation'}
      </h2>
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
            </div>
            <h3 className={styles.domainTitle}>{domainTitle(d.title, lang)}</h3>
            <p className={styles.domainDesc}>{d.desc[lang as Lang]}</p>
            <span className={styles.domainCta}>
              {lang === 'zh-CN' ? '进入 →' : lang === 'zh-TW' ? '進入 →' : 'Enter →'}
            </span>
          </div>
        ))}
      </div>
      {/* Bottom hint */}
      <div style={{ textAlign: 'center', padding: '24px 0 8px', color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.8 }}>
        {lang === 'zh-CN'
          ? '点击上方任意卡片进入对应板块 · 侧边栏可展开子目录 · 点击左上角 📦 随时回到这里'
          : lang === 'zh-TW'
          ? '點擊上方任意卡片進入對應板塊 · 側邊欄可展開子目錄 · 點擊左上角 📦 隨時回到這裡'
          : 'Click any card above to explore · Sidebar expands sub-categories · Click 📦 logo to return here'}
        <div onClick={() => onEnter('ai-news')} style={{ background: 'linear-gradient(135deg, #0f172a, #1e3a5f)', borderRadius: 12, padding: '16px 24px', marginTop: 20, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff', transition: 'transform .15s', }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.01)' }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)' }}
        >
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>
              📰 {lang === 'zh-CN' ? 'AI速报' : lang === 'zh-TW' ? 'AI速報' : 'AI News Brief'}
            </div>
            <div style={{ fontSize: 13, opacity: 0.8 }}>
              {lang === 'zh-CN' ? '每4小时更新的AI行业快讯，已更新1,379+期' : lang === 'zh-TW' ? '每4小時更新的AI行業快訊，已更新1,379+期' : 'AI industry news updated every 4 hours, 1,379+ issues'}
            </div>
          </div>
          <span style={{ fontSize: 28 }}>→</span>
        </div>
      </div>
    </div>
  )
}
