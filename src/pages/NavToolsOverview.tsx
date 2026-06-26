import { useT } from '../contexts/LanguageContext'
import SearchOverview from './SearchOverview'
import ChatOverview from './ChatOverview'
import CreativeOverview from './CreativeOverview'
import DesignOverview from './DesignOverview'
import Game3DOverview from './Game3DOverview'
import OfficeOverview from './OfficeOverview'
import AgentOverview from './AgentOverview'
import DevToolsOverview from './DevToolsOverview'
import styles from './Page.module.css'

const sections = [
  { key: 'search', icon: '🔍', title: { en: 'Search Engines', 'zh-CN': '搜索引擎', 'zh-TW': '搜索引擎' }, desc: { en: 'AI-powered search, research and discovery', 'zh-CN': 'AI搜索、学术研究和内容发现', 'zh-TW': 'AI搜尋、學術研究和內容發現' }, Component: SearchOverview },
  { key: 'chat', icon: '💬', title: { en: 'Chat & LLMs', 'zh-CN': '对话助手', 'zh-TW': '對話助手' }, desc: { en: 'LLM platforms, coding assistants, role-play', 'zh-CN': '大模型平台、编程助手、角色扮演', 'zh-TW': '大模型平台、編程助手、角色扮演' }, Component: ChatOverview },
  { key: 'creative', icon: '🎨', title: { en: 'Creative Tools', 'zh-CN': '创意工具', 'zh-TW': '創意工具' }, desc: { en: 'Writing, image, video, audio generation', 'zh-CN': '写作、绘画、视频、音频', 'zh-TW': '寫作、繪畫、影片、音頻' }, Component: CreativeOverview },
  { key: 'design', icon: '🎯', title: { en: 'Design & UI', 'zh-CN': '设计工具', 'zh-TW': '設計工具' }, desc: { en: 'UI/UX, branding, prototyping tools', 'zh-CN': 'UI/UX、品牌设计、原型工具', 'zh-TW': 'UI/UX、品牌設計、原型工具' }, Component: DesignOverview },
  { key: '3d-game', icon: '🎮', title: { en: '3D & Gaming', 'zh-CN': '3D与游戏', 'zh-TW': '3D與遊戲' }, desc: { en: '3D modeling, game assets, NPC AI', 'zh-CN': '3D建模、游戏资产、NPC AI', 'zh-TW': '3D建模、遊戲資產、NPC AI' }, Component: Game3DOverview },
  { key: 'office', icon: '📋', title: { en: 'Office & Productivity', 'zh-CN': '办公提效', 'zh-TW': '辦公提效' }, desc: { en: 'PPT, docs, meetings, email, translation', 'zh-CN': 'PPT、文档、会议、邮件、翻译', 'zh-TW': 'PPT、文檔、會議、郵件、翻譯' }, Component: OfficeOverview },
  { key: 'agents', icon: '🤖', title: { en: 'Agents & Automation', 'zh-CN': '智能体', 'zh-TW': '智能體' }, desc: { en: 'AI agent frameworks, assistants, workflows', 'zh-CN': 'AI智能体框架、助手、工作流', 'zh-TW': 'AI智能體框架、助手、工作流' }, Component: AgentOverview },
  { key: 'dev-tools', icon: '🔧', title: { en: 'Dev Tools', 'zh-CN': '开发工具', 'zh-TW': '開發工具' }, desc: { en: 'Online compilers, formatters, converters', 'zh-CN': '在线编译、格式化、编码转换等实用工具', 'zh-TW': '在線編譯、格式化、編碼轉換等實用工具' }, Component: DevToolsOverview },
]

export default function NavToolsOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e

  return (
    <div>
      {/* Overview Intro */}
      <div id="section-overview" style={{
        background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)',
        borderRadius: 14,
        padding: '28px 32px',
        marginBottom: 32,
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -20, right: -10, fontSize: 100, opacity: 0.08 }}>🧭</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 8px' }}>
          {L('Tool Directory', '导航工具集', '導航工具集')}
        </h2>
        <p style={{ fontSize: 14, opacity: 0.85, margin: '0 0 20px', maxWidth: 600, lineHeight: 1.6 }}>
          {L(
            '200+ curated tools across 8 categories. Scroll through all sections continuously, or use the sidebar to jump directly.',
            '200+精选工具，覆盖8大分类。向下滚动连续浏览所有内容，或用侧边栏快速跳转。',
            '200+精選工具，覆蓋7大分類。向下滾動連續瀏覽所有內容，或用側邊欄快速跳轉。'
          )}
        </p>
        {/* Category tags */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {sections.map(s => (
            <span key={s.key} onClick={() => { const el = document.getElementById(`section-${s.key}`); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }} style={{ cursor: 'pointer',
              background: 'rgba(255,255,255,0.15)',
              color: '#fff',
              padding: '4px 12px',
              borderRadius: 16,
              fontSize: 13,
              textDecoration: 'none',
              fontWeight: 500,
            }}>
              {s.icon} {s.title[lang as 'en' | 'zh-CN' | 'zh-TW']}
            </span>
          ))}
        </div>
      </div>

      {/* Sections */}
      {sections.map(({ key, Component }, i) => (
        <div key={key} id={`section-${key}`} style={{ scrollMarginTop: 80 }}>
          {i > 0 && <div style={{ height: 2, background: 'linear-gradient(90deg, var(--primary), transparent)', margin: '32px 0 40px', borderRadius: 1 }} />}
          <Component />
        </div>
      ))}
    </div>
  )
}
