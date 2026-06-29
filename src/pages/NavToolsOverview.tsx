import { useT } from '../contexts/LanguageContext'
import SearchOverview from './SearchOverview'
import ChatOverview from './ChatOverview'
import WritingOverview from './WritingOverview'
import ImageGenOverview from './ImageGenOverview'
import VideoGenOverview from './VideoGenOverview'
import AudioGenOverview from './AudioGenOverview'
import DesignOverview from './DesignOverview'
import Game3DOverview from './Game3DOverview'
import OfficeOverview from './OfficeOverview'
import DevToolsOverview from './DevToolsOverview'
import SocialMediaOverview from './SocialMediaOverview'
import ImageResourcesOverview from './ImageResourcesOverview'
import styles from './Page.module.css'

const sections = [
  { key: 'search', icon: '🔍', title: { en: 'Search Engines', 'zh-CN': '搜索引擎', 'zh-TW': '搜索引擎' }, desc: { en: 'AI-powered search, research and discovery', 'zh-CN': 'AI搜索、学术研究和内容发现', 'zh-TW': 'AI搜尋、學術研究和內容發現' }, Component: SearchOverview },
  { key: 'chat', icon: '💬', title: { en: 'Chat & LLMs', 'zh-CN': '对话助手', 'zh-TW': '對話助手' }, desc: { en: 'LLM platforms, coding assistants, role-play', 'zh-CN': '大模型平台、编程助手、角色扮演', 'zh-TW': '大模型平台、編程助手、角色扮演' }, Component: ChatOverview },
  { key: 'writing', icon: '✍️', title: { en: 'Writing', 'zh-CN': '写作工具', 'zh-TW': '寫作工具' }, desc: { en: 'AI writing, editing, copywriting, novel continuation', 'zh-CN': 'AI写作、润色、文案、续写', 'zh-TW': 'AI寫作、潤色、文案、續寫' }, Component: WritingOverview },
  { key: 'image-gen', icon: '🎨', title: { en: 'Image Generation', 'zh-CN': '绘画工具', 'zh-TW': '繪畫工具' }, desc: { en: 'AI image, illustration, poster, photo editing', 'zh-CN': 'AI绘画、插画、海报、修图', 'zh-TW': 'AI繪畫、插畫、海報、修圖' }, Component: ImageGenOverview },
  { key: 'video-gen-tool', icon: '🎬', title: { en: 'Video Tools', 'zh-CN': '视频工具', 'zh-TW': '影片工具' }, desc: { en: 'AI video generation, editing, digital human, clipping', 'zh-CN': 'AI视频生成、剪辑、数字人、后期', 'zh-TW': 'AI影片生成、剪輯、數字人、後期' }, Component: VideoGenOverview },
  { key: 'audio-gen-tool', icon: '🎵', title: { en: 'Audio & Music', 'zh-CN': '音频工具', 'zh-TW': '音頻工具' }, desc: { en: 'AI music, TTS, voice cloning, podcast', 'zh-CN': 'AI音乐、语音合成、声音克隆、播客', 'zh-TW': 'AI音樂、語音合成、聲音克隆、播客' }, Component: AudioGenOverview },
  { key: 'design', icon: '🎯', title: { en: 'Design & UI', 'zh-CN': '设计工具', 'zh-TW': '設計工具' }, desc: { en: 'UI/UX, branding, prototyping tools', 'zh-CN': 'UI/UX、品牌设计、原型工具', 'zh-TW': 'UI/UX、品牌設計、原型工具' }, Component: DesignOverview },
  { key: '3d-game', icon: '🎮', title: { en: '3D & Gaming', 'zh-CN': '3D与游戏', 'zh-TW': '3D與遊戲' }, desc: { en: '3D modeling, game assets, NPC AI', 'zh-CN': '3D建模、游戏资产、NPC AI', 'zh-TW': '3D建模、遊戲資產、NPC AI' }, Component: Game3DOverview },
  { key: 'office', icon: '📋', title: { en: 'Office & Productivity', 'zh-CN': '办公提效', 'zh-TW': '辦公提效' }, desc: { en: 'PPT, docs, meetings, email, translation', 'zh-CN': 'PPT、文档、会议、邮件、翻译', 'zh-TW': 'PPT、文檔、會議、郵件、翻譯' }, Component: OfficeOverview },
  { key: 'dev-tools', icon: '🔧', title: { en: 'Dev Tools', 'zh-CN': '开发工具', 'zh-TW': '開發工具' }, desc: { en: 'Online compilers, formatters, converters', 'zh-CN': '在线编译、格式化、编码转换等实用工具', 'zh-TW': '在線編譯、格式化、編碼轉換等實用工具' }, Component: DevToolsOverview },
  { key: 'social-media', icon: '📱', title: { en: 'Social & Community', 'zh-CN': '社区媒体', 'zh-TW': '社群媒體' }, desc: { en: 'Social networks, content platforms, forums, video sites', 'zh-CN': '社交平台、内容社区、论坛、视频网站', 'zh-TW': '社群平台、內容社群、論壇、影片網站' }, Component: SocialMediaOverview },
  { key: 'image-resources', icon: '🖼️', title: { en: 'Image Resources', 'zh-CN': '图片专区', 'zh-TW': '圖片專區' }, desc: { en: 'Free stock photos, color tools, editors, AI cutout, logos', 'zh-CN': '免费图库、配色、在线修图、AI抠图、Logo设计', 'zh-TW': '免費圖庫、配色、在線修圖、AI摳圖、Logo設計' }, Component: ImageResourcesOverview },
]

export default function NavToolsOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e

  return (
    <div>
      {/* Overview Intro */}
      <div id="section-overview" style={{
        background: 'linear-gradient(135deg, #1e3a5f 0%, #312e81 50%, #4c1d95 100%)',
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
          <span style={{ fontWeight:600 }}>⚠️ {L('Not all AI — just a convenient tool collection.','非AI专属，仅为方便整理的普通工具合集。','非AI專屬，僅為方便整理的普通工具合集。')}</span>
          <br />
          {L(
            '300+ tools across 12 categories. Scroll continuously or use the sidebar to jump.',
            '300+工具，12大分类。向下滚动连续浏览，或用侧边栏快速跳转。',
            '300+工具，12大分類。向下滾動連續瀏覽，或用側邊欄快速跳轉。'
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
