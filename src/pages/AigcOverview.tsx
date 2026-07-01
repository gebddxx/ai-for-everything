import { useT } from '../contexts/LanguageContext'
import { tText, type MultiLang, domainTitle } from '../i18n/translate'
import AudioGenTutorial from './AudioGenTutorial'
import VideoGenTutorial from './VideoGenTutorial'
import NovelWritingTutorial from './NovelWritingTutorial'
import PptGenTutorial from './PptGenTutorial'
import WebGenTutorial from './WebGenTutorial'
import AppGenTutorial from './AppGenTutorial'
import SoftwareGenTutorial from './SoftwareGenTutorial'
import WritingOverview from './WritingOverview'
import ImageGenOverview from './ImageGenOverview'
import VideoGenOverview from './VideoGenOverview'
import AudioGenOverview from './AudioGenOverview'

const sections = [
  { key: 'audio-gen', icon: '🎵', title: { en: 'Audio', 'zh-CN': '音频生成', 'zh-TW': '音頻生成', ja: '音声生成', ko: '오디오 생성', es: 'Audio' }, Component: AudioGenTutorial },
  { key: 'video-gen', icon: '🎬', title: { en: 'Video', 'zh-CN': '视频生成', 'zh-TW': '影片生成', ja: '動画生成', ko: '비디오 생성', es: 'Video' }, Component: VideoGenTutorial },
  { key: 'novel', icon: '📝', title: { en: 'Novel', 'zh-CN': '小说写作', 'zh-TW': '小說寫作', ja: '小説作成', ko: '소설 작성', es: 'Novela' }, Component: NovelWritingTutorial },
  { key: 'ppt-gen', icon: '📊', title: { en: 'PPT', 'zh-CN': 'PPT生成', 'zh-TW': 'PPT生成', ja: 'PPT生成', ko: 'PPT 생성', es: 'PPT' }, Component: PptGenTutorial },
  { key: 'web-gen', icon: '🌐', title: { en: 'Web Page', 'zh-CN': '网页生成', 'zh-TW': '網頁生成', ja: 'Webページ生成', ko: '웹페이지 생성', es: 'Web' }, Component: WebGenTutorial },
  { key: 'app-gen', icon: '📱', title: { en: 'App', 'zh-CN': '手机App生成', 'zh-TW': '手机App生成' }, Component: AppGenTutorial },
  { key: 'software-gen', icon: '💻', title: { en: 'Software', 'zh-CN': '桌面软件生成', 'zh-TW': '桌面軟體生成', ja: 'ソフトウェア生成', ko: '소프트웨어 생성', es: 'Software' }, Component: SoftwareGenTutorial },
  { key: 'writing', icon: '✍️', title: { en: 'Writing Tools', 'zh-CN': 'AI写作工具', 'zh-TW': 'AI寫作工具', ja: 'AI執筆ツール', ko: 'AI 작성 도구', es: 'Escritura IA' }, Component: WritingOverview },
  { key: 'image-gen', icon: '🎨', title: { en: 'Image Tools', 'zh-CN': 'AI绘画工具', 'zh-TW': 'AI繪畫工具', ja: 'AI画像ツール', ko: 'AI 이미지 도구', es: 'Imagen IA' }, Component: ImageGenOverview },
  { key: 'video-gen-tool', icon: '🎬', title: { en: 'Video Tools', 'zh-CN': 'AI视频工具', 'zh-TW': 'AI影片工具', ja: 'AI動画ツール', ko: 'AI 비디오 도구', es: 'Video IA' }, Component: VideoGenOverview },
  { key: 'audio-gen-tool', icon: '🎵', title: { en: 'Audio Tools', 'zh-CN': 'AI音频工具', 'zh-TW': 'AI音頻工具', ja: 'AI音声ツール', ko: 'AI 오디오 도구', es: 'Audio IA' }, Component: AudioGenOverview },
]

export default function AigcOverview() {
  const { lang } = useT()
  const L = (a: MultiLang, b?: string, c?: string) => {
    if (typeof a !== 'string') return tText(a, lang)
    return lang === 'zh-CN' ? (b || a) : lang === 'zh-TW' ? (c || b || a) : a
  }
  return (
    <div>
      <div id="section-overview" style={{
        background: 'linear-gradient(135deg, #4c1d95 0%, #6d28d9 50%, #7c3aed 100%)',
        borderRadius: 14, padding: '28px 32px', marginBottom: 32, color: '#fff', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -20, right: -10, fontSize: 100, opacity: 0.08 }}>🤖</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 8px' }}>{L({ en: 'AIGC · Content Generation', 'zh-CN': 'AIGC · AI生成', 'zh-TW': 'AIGC · AI生成', ja: 'AIGC · AI生成', ko: 'AIGC · AI 생성', es: 'AIGC · Generación IA' })}</h2>
        <p style={{ fontSize: 14, opacity: 0.85, margin: '0 0 20px', maxWidth: 600, lineHeight: 1.6 }}>
          {L({ en: 'Generate audio, video, novels, PPTs, web pages, apps and software with AI. 7 step-by-step tutorials with code and direct tool links.', 'zh-CN': '用AI生成音频、视频、小说、PPT、网页、App和软件。7个手把手教程，每步都有代码和工具直达链接。', 'zh-TW': '用AI生成音頻、影片、小說、PPT、網頁、App和軟體。7個手把手教學，每步都有程式碼和工具直達鏈接。', ja: '音声、動画、小説、PPT、Webページ、アプリをAIで生成する実践的チュートリアル。', ko: '오디오, 비디오, 소설, PPT, 웹페이지, 앱을 AI로 생성하는 실습 튜토리얼.', es: 'Tutoriales prácticos para generar audio, video, novelas, PPT, páginas web y apps con IA.' })}
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {sections.map(s => (<span key={s.key} onClick={() => { const el = document.getElementById(`section-${s.key}`); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }} style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', padding: '4px 12px', borderRadius: 16, fontSize: 13, cursor: 'pointer', fontWeight: 500 }}>{s.icon} {domainTitle(s.title, lang)}</span>))}
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
