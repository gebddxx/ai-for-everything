import { useT } from '../contexts/LanguageContext'
import styles from './Page.module.css'
import { pStyle, ulStyle, Card, Code } from '../components/TutorialCard'

export default function VideoGenTutorial() {
  const { lang } = useT()
  const l = {
    pageTitle: lang === 'zh-CN' ? 'AI 视频生成教程' : lang === 'zh-TW' ? 'AI 影片生成教學' : 'AI Video Generation — Complete Guide',
    pageSub: lang === 'zh-CN' ? '文字→视频 · AI数字人 · 视频剪辑 · 特效生成' : lang === 'zh-TW' ? '文字→影片 · AI數字人 · 影片剪輯 · 特效生成' : 'Text→Video · AI Avatars · Video Editing · Visual Effects',
    whatIs: lang === 'zh-CN' ? 'AI视频生成概览' : lang === 'zh-TW' ? 'AI影片生成概覽' : 'Overview',
    whatIsBody: lang === 'zh-CN' ? 'AI视频生成是AIGC增长最快的领域之一。OpenAI Sora实现了照片级真实感视频生成，Runway Gen-3在电影级画质上不断突破，HeyGen让普通人也能制作专业数字人视频。本教程涵盖文生视频、数字人播报、AI视频剪辑、特效制作四大模块。' : lang === 'zh-TW' ? 'AI影片生成是AIGC增長最快的領域之一。OpenAI Sora實現了照片級真實感影片生成，Runway Gen-3在電影級畫質上不斷突破，HeyGen讓普通人也能製作專業數字人影片。本教學涵蓋文生影片、數字人播報、AI影片剪輯、特效製作四大模塊。' : 'AI video generation is one of the fastest-growing AIGC areas. OpenAI Sora achieves photorealism, Runway Gen-3 keeps pushing cinematic quality, and HeyGen enables anyone to create professional avatar videos. This guide covers text-to-video, AI avatars, AI editing, and visual effects.',
    tools: lang === 'zh-CN' ? '推荐工具' : lang === 'zh-TW' ? '推薦工具' : 'Recommended Tools',
    step1: lang === 'zh-CN' ? '第1步：文生视频 (Runway / Sora)' : lang === 'zh-TW' ? '第1步：文生影片 (Runway / Sora)' : 'Step 1: Text-to-Video',
    step2: lang === 'zh-CN' ? '第2步：AI数字人视频 (HeyGen)' : lang === 'zh-TW' ? '第2步：AI數字人影片 (HeyGen)' : 'Step 2: AI Avatar Videos',
    step3: lang === 'zh-CN' ? '第3步：AI视频剪辑 (剪映/Descript)' : lang === 'zh-TW' ? '第3步：AI影片剪輯 (剪映/Descript)' : 'Step 3: AI Video Editing',
    step4: lang === 'zh-CN' ? '第4步：AI特效与合成' : lang === 'zh-TW' ? '第4步：AI特效與合成' : 'Step 4: AI Effects & Compositing',
    tips: lang === 'zh-CN' ? '进阶技巧' : lang === 'zh-TW' ? '進階技巧' : 'Pro Tips',
    links: lang === 'zh-CN' ? '资源链接' : lang === 'zh-TW' ? '資源連結' : 'Resources',
  }

  return (
    <div className={styles.page}>
      <div className={styles.head}><h2 className={styles.title}>🎬 {l.pageTitle}</h2><p className={styles.subtitle}>{l.pageSub}</p></div>
      <div className={styles.cases}>
        <Card title={l.whatIs}><p style={pStyle}>{l.whatIsBody}</p></Card>
        <Card title={l.tools}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead><tr style={{ borderBottom: '2px solid var(--border)' }}><th style={{ padding: 8, textAlign: 'left' }}>Tool</th><th style={{ padding: 8, textAlign: 'left' }}>Best For</th><th style={{ padding: 8, textAlign: 'left' }}>Price</th></tr></thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>Runway Gen-3</td><td style={{ padding: 8 }}>Cinematic text-to-video</td><td style={{ padding: 8 }}>Free tier, $15/mo</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>Sora (OpenAI)</td><td style={{ padding: 8 }}>Photorealism, 60s</td><td style={{ padding: 8 }}>ChatGPT Plus/Pro</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>HeyGen</td><td style={{ padding: 8 }}>AI avatar + dubbing</td><td style={{ padding: 8 }}>Free trial, $29/mo</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>Pika Labs</td><td style={{ padding: 8 }}>Quick social clips</td><td style={{ padding: 8 }}>Free tier, $10/mo</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>剪映/CapCut</td><td style={{ padding: 8 }}>AI mobile editing</td><td style={{ padding: 8 }}>Free</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>Descript</td><td style={{ padding: 8 }}>Text-based video editing</td><td style={{ padding: 8 }}>Free tier, $24/mo</td></tr>
              <tr><td style={{ padding: 8 }}>智影 (Tencent)</td><td style={{ padding: 8 }}>Chinese digital human</td><td style={{ padding: 8 }}>Free tier available</td></tr>
            </tbody>
          </table>
        </Card>
        <Card title={l.tools}><p style={pStyle}>👇 点击下方链接直接打开视频生成工具</p><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:8}}><a href="https://runwayml.com/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>🎬 Runway Gen-3 — 电影级文生视频</a><a href="https://klingai.com/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>🎬 可灵AI — 快手出品，画质极高</a><a href="https://www.vidu.com/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>🎞️ Vidu — 国产视频大模型，中文友好</a><a href="https://pixverse.ai/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>✨ PixVerse — 快速出视频，创意特效</a><a href="https://www.heygen.com/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>🎙️ HeyGen — AI数字人播报+配音</a><a href="https://pika.art/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>⚡ Pika — 快速社媒短视频</a><a href="https://www.capcut.com/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>✂️ 剪映/CapCut — AI剪辑+字幕</a><a href="https://zenvideo.qq.com/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>🎬 智影 — 腾讯数字人播报</a></div></Card>
<Card title={l.step1}><Code>{CODE.step1}</Code></Card>
        <Card title={l.step2}><Code>{CODE.step2}</Code></Card>
        <Card title={l.step3}><Code>{CODE.step3}</Code></Card>
        <Card title={l.step4}><Code>{CODE.step4}</Code></Card>
        <Card title={l.tips}><p style={pStyle}>{lang === 'zh-CN' ? '1. 文生视频提示词公式：主题+场景+动作+风格+时长 2. 先用图片生成工具（Midjourney）做关键帧，再导入Runway生成视频过渡 3. HeyGen支持29种语言配音，做海外营销视频利器 4. 剪辑工作流：Descript粗剪→剪映精调→Adobe Podcast音频优化 5. 片头片尾用AI生成模板，提升完播率' : '1. TTV prompt formula: Subject + Scene + Action + Style + Duration 2. Generate keyframes in Midjourney first, then animate in Runway 3. HeyGen supports 29 languages — great for global marketing 4. Workflow: Descript rough cut → CapCut polish → Adobe Podcast audio 5. AI-generated intro/outro templates boost completion rate'}</p></Card>
        <Card title={l.links}><ul style={ulStyle}><li><a href="https://runwayml.com/" target="_blank" rel="noopener">Runway — cinematic AI video</a></li><li><a href="https://openai.com/sora/" target="_blank" rel="noopener">Sora — OpenAI video gen</a></li><li><a href="https://www.heygen.com/" target="_blank" rel="noopener">HeyGen — AI avatars</a></li><li><a href="https://pika.art/" target="_blank" rel="noopener">Pika Labs — quick clips</a></li><li><a href="https://www.capcut.com/" target="_blank" rel="noopener">CapCut / 剪映 — AI editing</a></li></ul></Card>
      </div>
    </div>
  )
}

const CODE = {
  step1: `# Runway Gen-3 — Best Text-to-Video
# Visit: https://runwayml.com/
# 1. Sign up → "Gen-3 Alpha" → "Text to Video"
# 2. Write prompt (be detailed!):
#    "Aerial drone shot of a misty mountain valley at sunrise,
#     golden light breaking through clouds, 4K cinematic, smooth
#     camera movement, photorealistic"

# Prompt structure:
# [Camera Shot] + [Subject/Scene] + [Lighting] + [Quality] + [Style]

# Shot types: Aerial drone, Close-up, Wide angle, Tracking, POV
# Example prompts:
# "Close-up of a barista pouring latte art, steam rising,
#  soft morning light, shallow depth of field, 4K"
# "Tracking shot of a delivery robot navigating a busy
#  city sidewalk, golden hour, gritty urban realism"

# Sora (OpenAI) — available to ChatGPT Plus/Pro users
# Sora excels at: complex physics, reflections, consistent objects
# Max: 60 seconds, 1080p`,

  step2: `# HeyGen — AI Avatar Video Creation
# Visit: https://www.heygen.com/
# 1. Sign up → "Create Video" → Choose avatar
#    - 100+ stock avatars or upload your own photo
# 2. Enter script (supports 29 languages)
# 3. Choose voice → AI generates lip-sync
# 4. Add background, music, transitions
# 5. Export as MP4

# Use cases:
# - Product demos / tutorials without filming yourself
# - Multi-language marketing videos (one script → 29 languages)
# - Corporate training videos at scale
# - YouTube channel without showing your face

# Pro workflow:
# 1. Claude/GPT writes the script
# 2. HeyGen avatar reads it in 3 languages
# 3. CapCut adds B-roll, captions, music
# = 1 video → 3 language versions in < 1 hour`,

  step3: `# AI Video Editing Workflow

# Descript — Edit video by editing text
# Visit: https://www.descript.com/
# 1. Import video → AI auto-transcribes
# 2. Delete text → corresponding video gets cut
#    (Remove "um", "uh" in one click with "Filler Word Removal")
# 3. AI voice clone: type new words → AI generates your voice
# 4. Studio Sound: one-click audio enhancement

# 剪映 / CapCut — Mobile-first AI editing
# 1. Import footage → "AI Smart Edit" auto-selects highlights
# 2. "Auto Captions" generates subtitles (Chinese + English)
# 3. "AI Effects" applies transitions & filters
# 4. Export directly to TikTok/Douyin/YouTube Shorts

# Long video → Short clips with Opus Clip
# Visit: https://www.opus.pro/
# 1. Upload 30-120 min video
# 2. AI identifies viral moments → generates 10+ short clips
# 3. Each clip gets captions, B-roll suggestions, face tracking`,

  step4: `# AI Visual Effects & Compositing

# Runway — AI-powered VFX tools:
# 1. "Green Screen" — remove background without green screen
# 2. "Inpainting" — remove unwanted objects from video
# 3. "Motion Brush" — paint where you want movement
# 4. "Image to Video" — bring still images to life

# Workflow: Create a product commercial
# 1. Midjourney → generate product beauty shots
# 2. Runway Image-to-Video → animate the shots
# 3. HeyGen → AI spokesperson introduces product
# 4. Suno → generate background music (30s jingle)
# 5. CapCut → stitch together, add captions, export

# All done without a camera crew. Time: ~2 hours.`,
}


