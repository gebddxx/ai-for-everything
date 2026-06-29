import { useT } from '../contexts/LanguageContext'
import AudioGenTutorial from './AudioGenTutorial'
import VideoGenTutorial from './VideoGenTutorial'
import NovelWritingTutorial from './NovelWritingTutorial'
import PptGenTutorial from './PptGenTutorial'
import WebGenTutorial from './WebGenTutorial'
import AppGenTutorial from './AppGenTutorial'
import SoftwareGenTutorial from './SoftwareGenTutorial'

const sections = [
  { key: 'audio-gen', icon: '🎵', title: { en: 'Audio', 'zh-CN': '音频生成', 'zh-TW': '音頻生成' }, Component: AudioGenTutorial },
  { key: 'video-gen', icon: '🎬', title: { en: 'Video', 'zh-CN': '视频生成', 'zh-TW': '影片生成' }, Component: VideoGenTutorial },
  { key: 'novel', icon: '📝', title: { en: 'Novel', 'zh-CN': '小说写作', 'zh-TW': '小說寫作' }, Component: NovelWritingTutorial },
  { key: 'ppt-gen', icon: '📊', title: { en: 'PPT', 'zh-CN': 'PPT生成', 'zh-TW': 'PPT生成' }, Component: PptGenTutorial },
  { key: 'web-gen', icon: '🌐', title: { en: 'Web Page', 'zh-CN': '网页生成', 'zh-TW': '網頁生成' }, Component: WebGenTutorial },
  { key: 'app-gen', icon: '📱', title: { en: 'App', 'zh-CN': '手机App生成', 'zh-TW': '手机App生成' }, Component: AppGenTutorial },
  { key: 'software-gen', icon: '💻', title: { en: 'Software', 'zh-CN': '桌面软件生成', 'zh-TW': '桌面軟體生成' }, Component: SoftwareGenTutorial },
]

export default function AigcOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (
    <div>
      <div id="section-overview" style={{
        background: 'linear-gradient(135deg, #4c1d95 0%, #6d28d9 50%, #7c3aed 100%)',
        borderRadius: 14, padding: '28px 32px', marginBottom: 32, color: '#fff', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -20, right: -10, fontSize: 100, opacity: 0.08 }}>🤖</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 8px' }}>{L('AIGC · Content Generation', 'AIGC · AI生成', 'AIGC · AI生成')}</h2>
        <p style={{ fontSize: 14, opacity: 0.85, margin: '0 0 20px', maxWidth: 600, lineHeight: 1.6 }}>
          {L('Generate audio, video, novels, PPTs, web pages, apps and software with AI. 7 step-by-step tutorials with code and direct tool links.', '用AI生成音频、视频、小说、PPT、网页、App和软件。7个手把手教程，每步都有代码和工具直达链接。', '用AI生成音頻、影片、小說、PPT、網頁、App和軟體。7個手把手教學，每步都有程式碼和工具直達鏈接。')}
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {sections.map(s => (<span key={s.key} onClick={() => { const el = document.getElementById(`section-${s.key}`); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }} style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', padding: '4px 12px', borderRadius: 16, fontSize: 13, cursor: 'pointer', fontWeight: 500 }}>{s.icon} {s.title[lang as 'en'|'zh-CN'|'zh-TW']}</span>))}
        </div>
      </div>
      {sections.map(({ key, Component }, i) => (
        <div key={key} id={`section-${key}`} style={{ scrollMarginTop: 80 }}>
          {i > 0 && <div style={{ height: 2, background: 'linear-gradient(90deg, var(--primary), transparent)', margin: '32px 0 40px', borderRadius: 1 }} />}
          <Component />
        </div>
      ))}
    </div>
  )
}
