import { useT } from '../contexts/LanguageContext'
import styles from './Page.module.css'

export default function AudioGenTutorial() {
  const { lang } = useT()
  const l = {
    pageTitle: lang === 'zh-CN' ? 'AI 音频/音乐生成教程' : lang === 'zh-TW' ? 'AI 音頻/音樂生成教學' : 'AI Audio & Music — Complete Guide',
    pageSub: lang === 'zh-CN' ? '文字→歌曲 · AI配音 · 声音克隆 · 播客制作' : lang === 'zh-TW' ? '文字→歌曲 · AI配音 · 聲音克隆 · 播客製作' : 'Text→Song · AI Voiceover · Voice Cloning · Podcast Production',
    whatIs: lang === 'zh-CN' ? 'AI音频生成概览' : lang === 'zh-TW' ? 'AI音頻生成概覽' : 'Overview of AI Audio Generation',
    whatIsBody: lang === 'zh-CN' ? 'AI音频生成已从实验室走向实用——Suno和Udio可以生成完整的歌曲，ElevenLabs能克隆任何声音，Adobe Podcast一键降噪。本教程从零开始，带你掌握四大技能：音乐生成、语音合成、声音克隆、播客制作。' : lang === 'zh-TW' ? 'AI音頻生成已從實驗室走向實用——Suno和Udio可以生成完整的歌曲，ElevenLabs能克隆任何聲音，Adobe Podcast一鍵降噪。本教學從零開始，帶你掌握四大技能：音樂生成、語音合成、聲音克隆、播客製作。' : 'AI audio has gone from lab to practical: Suno and Udio generate complete songs, ElevenLabs clones any voice, and Adobe Podcast removes noise with one click. This guide takes you from zero to mastering: music generation, TTS, voice cloning, and podcast production.',
    tools: lang === 'zh-CN' ? '推荐工具' : lang === 'zh-TW' ? '推薦工具' : 'Recommended Tools',
    step1: lang === 'zh-CN' ? '第1步：AI音乐生成 (Suno)' : lang === 'zh-TW' ? '第1步：AI音樂生成 (Suno)' : 'Step 1: AI Music with Suno',
    step2: lang === 'zh-CN' ? '第2步：AI语音合成 (ElevenLabs)' : lang === 'zh-TW' ? '第2步：AI語音合成 (ElevenLabs)' : 'Step 2: TTS with ElevenLabs',
    step3: lang === 'zh-CN' ? '第3步：声音克隆' : lang === 'zh-TW' ? '第3步：聲音克隆' : 'Step 3: Voice Cloning',
    step4: lang === 'zh-CN' ? '第4步：播客制作' : lang === 'zh-TW' ? '第4步：播客製作' : 'Step 4: Podcast Production',
    tips: lang === 'zh-CN' ? '进阶技巧' : lang === 'zh-TW' ? '進階技巧' : 'Pro Tips',
    links: lang === 'zh-CN' ? '资源链接' : lang === 'zh-TW' ? '資源連結' : 'Resources',
  }

  const pStyle: React.CSSProperties = { color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: 14 }
  const ulStyle: React.CSSProperties = { paddingLeft: 20, color: 'var(--text-secondary)', lineHeight: 2.2 }

  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>🎵 {l.pageTitle}</h2>
        <p className={styles.subtitle}>{l.pageSub}</p>
      </div>
      <div className={styles.cases}>
        <Card title={l.whatIs}><p style={pStyle}>{l.whatIsBody}</p></Card>
        <Card title={l.tools}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead><tr style={{ borderBottom: '2px solid var(--border)' }}><th style={{ padding: 8, textAlign: 'left' }}>Tool</th><th style={{ padding: 8, textAlign: 'left' }}>Best For</th><th style={{ padding: 8, textAlign: 'left' }}>Price</th></tr></thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>Suno</td><td style={{ padding: 8 }}>Full songs from lyrics</td><td style={{ padding: 8 }}>Free 50 credits/day</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>Udio</td><td style={{ padding: 8 }}>High-quality music</td><td style={{ padding: 8 }}>Free 1200 credits/mo</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>ElevenLabs</td><td style={{ padding: 8 }}>TTS + voice cloning</td><td style={{ padding: 8 }}>Free 10K chars/mo</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>AIVA</td><td style={{ padding: 8 }}>Classical/ambient</td><td style={{ padding: 8 }}>Free tier available</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>Murf.ai</td><td style={{ padding: 8 }}>Professional voiceover</td><td style={{ padding: 8 }}>Free trial</td></tr>
              <tr><td style={{ padding: 8 }}>Adobe Podcast</td><td style={{ padding: 8 }}>Noise reduction + enhance</td><td style={{ padding: 8 }}>Free</td></tr>
            </tbody>
          </table>
        </Card>
        <Card title={l.step1}><Code>{CODE.step1}</Code></Card>
        <Card title={l.step2}><Code>{CODE.step2}</Code></Card>
        <Card title={l.step3}><Code>{CODE.step3}</Code></Card>
        <Card title={l.step4}><Code>{CODE.step4}</Code></Card>
        <Card title={l.tips}><p style={pStyle}>{lang === 'zh-CN' ? '1. 用详细风格提示提升Suno输出——指定BPM、乐器、情绪、参考艺术家 2. 先用Suno生成旋律，再导入Udio打磨 3. ElevenLabs克隆声音需要5分钟以上清晰录音 4. 组合使用：ChatGPT写歌词→Suno谱曲→ElevenLabs旁白→Adobe Podcast降噪 5. 使用Descript像编辑文档一样编辑音频——删掉"嗯""啊"只需一键' : '1. Use detailed style prompts for Suno — specify BPM, instruments, mood, reference artists 2. Generate melody in Suno first, then refine in Udio 3. ElevenLabs needs 5+ min of clear audio for cloning 4. Stack tools: ChatGPT lyrics → Suno music → ElevenLabs narration → Adobe Podcast cleanup 5. Edit audio like text with Descript — remove filler words in one click'}</p></Card>
        <Card title={l.links}>
          <ul style={ulStyle}>
            <li><a href="https://suno.com/" target="_blank" rel="noopener">Suno — text to full songs</a></li>
            <li><a href="https://www.udio.com/" target="_blank" rel="noopener">Udio — high quality AI music</a></li>
            <li><a href="https://elevenlabs.io/" target="_blank" rel="noopener">ElevenLabs — TTS & voice cloning</a></li>
            <li><a href="https://www.aiva.ai/" target="_blank" rel="noopener">AIVA — classical composition</a></li>
            <li><a href="https://murf.ai/" target="_blank" rel="noopener">Murf.ai — professional voiceovers</a></li>
            <li><a href="https://podcast.adobe.com/" target="_blank" rel="noopener">Adobe Podcast — AI noise reduction</a></li>
          </ul>
        </Card>
      </div>
    </div>
  )
}

const CODE = {
  step1: `# Suno — Text to Full Songs
# Visit: https://suno.com/
# 1. Sign up (Google/Discord)
# 2. Click "Create" → Enter lyrics or use ChatGPT to generate
# 3. Style prompt example:
#    "Upbeat pop with synth, 120 BPM, female vocals, catchy chorus,
#     similar to Taylor Swift, about summer love"

# Prompt formula:
# [Genre] + [BPM/Tempo] + [Instruments] + [Mood] + [Similar Artist]
# + [Theme]

# Example prompts:
# "Lo-fi hip hop, 85 BPM, piano + vinyl crackle, rainy night study vibes"
# "Epic orchestral, 140 BPM, strings + brass + choir, heroic battle theme"
# "Acoustic folk, 90 BPM, guitar + harmonica, road trip nostalgia"

# Udio — Higher quality alternative
# Visit: https://www.udio.com/
# Udio excels at: vocals clarity, instrument separation, remixing`,

  step2: `# ElevenLabs — Best TTS & Voice Cloning
# Visit: https://elevenlabs.io/
# 1. Sign up (free: 10,000 characters/month)
# 2. Go to "Speech Synthesis"
# 3. Choose a voice from the library (1000+ voices)
# 4. Enter text → adjust stability/clarity sliders → generate

# Voice settings:
# - Stability: 30-50% (lower = more expressive but less consistent)
# - Clarity+Similarity: 70-80% (higher = more natural)
# - Style Exaggeration: 0-20%

# Use via API (Python):
import requests
API_KEY = "your-elevenlabs-api-key"
url = "https://api.elevenlabs.io/v1/text-to-speech/{voice_id}"
headers = {"xi-api-key": API_KEY, "Content-Type": "application/json"}
data = {
    "text": "Welcome to the AI audio generation tutorial!",
    "voice_settings": {"stability": 0.5, "similarity_boost": 0.75}
}
response = requests.post(url, json=data, headers=headers)
with open("output.mp3", "wb") as f: f.write(response.content)`,

  step3: `# Voice Cloning with ElevenLabs
# Requires: 5+ minutes of clear, noise-free audio of target voice

# Step 1: Record/upload clean audio sample
# - No background noise, music, or other voices
# - Natural speaking pace and tone
# - Minimum 5 minutes (longer = better quality)

# Step 2: Go to ElevenLabs → "Voices" → "Add Voice"
# → "Instant Voice Cloning"
# Step 3: Upload audio + name the voice
# Step 4: Test with sample text, adjust settings

# Tips:
# - Record in a quiet room with a good mic
# - Read diverse content for sample (news, dialog, monologue)
# - For Chinese: include tonal variety (questions, exclamations)
# - Clone takes ~2 minutes to process`,

  step4: `# AI Podcast Production Workflow

# Step 1: Script with ChatGPT/Claude
# Prompt: "Write a 10-minute podcast script about [topic].
# Include intro, 3 main segments, transitions, and outro.
# Tone: conversational and engaging."

# Step 2: Generate voices with ElevenLabs
# - Host voice: choose a warm, authoritative voice
# - Guest voice: choose a contrasting voice
# - Assign script parts to different voices

# Step 3: Add intro/outro music
# - Generate with Suno: "Podcast intro music, upbeat electronic,
#   30 seconds, modern and energetic"

# Step 4: Assembly & clean-up
# - Use Descript (descript.com) to arrange tracks
# - AI removes filler words ("um", "uh", "like")
# - Adobe Podcast for final noise reduction

# Step 5: Export as MP3, upload to your platform
# Platform recommendations: 小宇宙 (xiaoyuzhoufm.com), Apple Podcasts`,
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return <div style={{ background: 'var(--bg-card)', borderRadius: 12, padding: 22, boxShadow: 'var(--shadow)', marginBottom: 16 }}><h3 style={{ marginBottom: 12, color: 'var(--text)', fontSize: 16 }}>{title}</h3>{children}</div>
}

function Code({ children }: { children: string }) {
  return <pre style={{ background: '#0f172a', color: '#e2e8f0', borderRadius: 8, padding: 16, fontSize: 13, lineHeight: 1.6, overflowX: 'auto', whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: 0 }}><code>{children}</code></pre>
}
