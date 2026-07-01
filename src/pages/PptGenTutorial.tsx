import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'
import { pStyle, ulStyle, Card, Code } from '../components/TutorialCard'
export default function PptGenTutorial() {
  const { lang } = useT()
  const l = {
    pageTitle: lang === 'zh-CN' ? 'AI PPT 生成教程' : lang === 'zh-TW' ? 'AI PPT 生成教學' : 'AI PPT Generation — Complete Guide',
    pageSub: lang === 'zh-CN' ? '一句话生成PPT · AI排版 · 智能美化 · 秒杀传统制作' : lang === 'zh-TW' ? '一句話生成PPT · AI排版 · 智能美化 · 秒殺傳統製作' : 'One-Line PPT Generation · AI Layout · Smart Formatting',
    whatIs: lang === 'zh-CN' ? 'AI PPT生成概览' : lang === 'zh-TW' ? 'AI PPT生成概覽' : 'Overview',
    whatIsBody: lang === 'zh-CN' ? 'Gamma、Beautiful.ai、Tome等工具可以用一句话或一个文档生成整份精美PPT。不再需要花几个小时调排版——AI自动处理设计、配色、字体、图片。本教程覆盖：一句话生成、文档转PPT、AI美化现有PPT、多格式导出。' : lang === 'zh-TW' ? 'Gamma、Beautiful.ai、Tome等工具可以用一句話或一個文檔生成整份精美PPT。不再需要花幾個小時調排版——AI自動處理設計、配色、字體、圖片。本教學覆蓋：一句話生成、文檔轉PPT、AI美化現有PPT、多格式導出。' : 'Gamma, Beautiful.ai, Tome, and more can generate entire decks from a single prompt or document. No more hours tweaking layouts — AI handles design, colors, fonts, and images automatically. This guide covers: one-prompt generation, document-to-PPT, AI beautification, and multi-format export.',
    tools: lang === 'zh-CN' ? '推荐工具' : lang === 'zh-TW' ? '推薦工具' : 'Recommended Tools',
    quickTools: lang === 'zh-CN' ? 'PPT生成工具直达' : lang === 'zh-TW' ? 'PPT生成工具直達' : 'PPT Tools — Click to Try',
    toolLinks: lang === 'zh-CN' ? '👇 点击下方链接直接打开PPT生成工具' : lang === 'zh-TW' ? '👇 點擊下方鏈接直接打開PPT生成工具' : '👇 Click any link below to open the PPT tool directly',
    step1: lang === 'zh-CN' ? '第1步：一句话生成PPT (Gamma)' : lang === 'zh-TW' ? '第1步：一句話生成PPT (Gamma)' : 'Step 1: One-Prompt PPT with Gamma',
    step2: lang === 'zh-CN' ? '第2步：文档转PPT' : lang === 'zh-TW' ? '第2步：文檔轉PPT' : 'Step 2: Document → PPT',
    step3: lang === 'zh-CN' ? '第3步：AI美化现有PPT' : lang === 'zh-TW' ? '第3步：AI美化現有PPT' : 'Step 3: AI Beautify Existing PPT',
    step4: lang === 'zh-CN' ? '第4步：进阶技巧' : lang === 'zh-TW' ? '第4步：進階技巧' : 'Step 4: Advanced Tips',
    links: lang === 'zh-CN' ? '资源链接' : lang === 'zh-TW' ? '資源連結' : 'Resources',
  }
  return (
    <div className={styles.page}>
      <div className={styles.head}><h2 className={styles.title}>📊 {l.pageTitle}</h2><p className={styles.subtitle}>{l.pageSub}</p></div>
      <LinkNav links={toolLinks} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#a855f7" />
      <div className={styles.chart} style={{ margin: '32px 0 20px' }}><div style={{ height: 1, background: 'var(--border)', marginBottom: 20 }} /></div>
      <div className={styles.cases}>
        <Card title={l.whatIs}><p style={pStyle}>{l.whatIsBody}</p></Card>
        <Card title={l.tools}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead><tr style={{ borderBottom: '2px solid var(--border)' }}><th style={{ padding: 8, textAlign: 'left' }}>Tool</th><th style={{ padding: 8, textAlign: 'left' }}>Best For</th><th style={{ padding: 8, textAlign: 'left' }}>Price</th></tr></thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>Gamma</td><td style={{ padding: 8 }}>Best overall, one-click design</td><td style={{ padding: 8 }}>Free tier, $10/mo</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>Beautiful.ai</td><td style={{ padding: 8 }}>Smart templates, brand control</td><td style={{ padding: 8 }}>Free trial, $12/mo</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>Tome</td><td style={{ padding: 8 }}>Storytelling/narrative decks</td><td style={{ padding: 8 }}>Free tier</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>Slides AI</td><td style={{ padding: 8 }}>Google Slides add-on</td><td style={{ padding: 8 }}>Free tier</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>Decktopus</td><td style={{ padding: 8 }}>Sales & pitch decks</td><td style={{ padding: 8 }}>Free trial</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>爱设计PPT</td><td style={{ padding: 8 }}>Chinese AI PPT</td><td style={{ padding: 8 }}>Free tier</td></tr>
              <tr><td style={{ padding: 8 }}>WPS AI</td><td style={{ padding: 8 }}>WPS Office integrated AI</td><td style={{ padding: 8 }}>Free with WPS</td></tr>
            </tbody>
          </table>
        </Card>
        <Card title={l.quickTools}><p style={{...pStyle,marginBottom:12}}>{l.toolLinks}</p><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:8}}>
<a href="https://gamma.app/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>📊 Gamma — 一句话生成整份PPT，支持导出PPTX</a>
<a href="https://www.aippt.cn/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>📊 AiPPT — 国产AI PPT，自动生成大纲和模板</a>
<a href="https://www.beautiful.ai/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>💎 Beautiful.ai — 智能模板自动排版</a>
<a href="https://tome.app/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>📖 Tome — 叙事型幻灯片</a>
<a href="https://www.chatppt.com/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>💬 ChatPPT — 中文原生AI PPT，微信小程序可用</a>
<a href="https://www.slidesai.io/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>📄 SlidesAI — Google Slides插件，文字→幻灯片</a>
<a href="https://boardmix.cn/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>🖼️ Boardmix — AI白板+PPT+思维导图一键生成</a>
<a href="https://www.gezhe.com/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>🎤 歌者AI — 话题/文章→PPT自动生成</a>
<a href="https://wenku.baidu.com/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>📚 百度文库AI — 输入主题自动生成PPT</a>
<a href="https://www.decktopus.com/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>🎯 Decktopus — 销售/路演PPT专用</a>
<a href="https://www.wps.com/ai/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>📎 WPS AI — 金山WPS内置AI PPT</a>
<a href="https://www.canva.com/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>🖼️ Canva — 魔法设计+AI PPT，模板丰富</a>
</div></Card>
<Card title={l.step1}><Code>{CODE.step1}</Code></Card>
        <Card title={l.step2}><Code>{CODE.step2}</Code></Card>
        <Card title={l.step3}><Code>{CODE.step3}</Code></Card>
        <Card title={l.step4}><p style={pStyle}>{lang === 'zh-CN' ? '1. 提示词模板："Create a [N]-slide [pitch/deck/report] about [topic] for [audience]. Include: [key sections]. Tone: [professional/casual/inspirational]." 2. Gamma支持实时协作——团队成员可以同时编辑和评论 3. AI生成的图片可能不适合品牌调性，用品牌图片库替换 4. 导出为PPTX后在PowerPoint中做最后的微调 5. 用ChatGPT先写好每页的大纲和要点文字，再喂给AI PPT工具' : '1. Prompt template: "Create [N] slides about [topic] for [audience]. Include [key sections]. Tone: [style]." 2. Gamma supports real-time collaboration 3. Replace AI images with brand-approved assets if needed 4. Export as PPTX for final tweaks in PowerPoint 5. Have ChatGPT write the outline first, then feed to AI PPT tool'}</p></Card>
        <Card title={l.links}><ul style={ulStyle}><li><a href="https://gamma.app/" target="_blank" rel="noopener">Gamma — best AI PPT</a></li><li><a href="https://www.beautiful.ai/" target="_blank" rel="noopener">Beautiful.ai — smart templates</a></li><li><a href="https://tome.app/" target="_blank" rel="noopener">Tome — storytelling decks</a></li><li><a href="https://www.slidesai.io/" target="_blank" rel="noopener">Slides AI — Google Slides add-on</a></li><li><a href="https://www.wps.com/ai" target="_blank" rel="noopener">WPS AI — integrated Chinese office AI</a></li></ul></Card>
      </div>
    </div>
  )
}
const toolLinks: ToolLink[] = [
  {name:'Gamma',url:'https://gamma.app/',desc:{en:'Best AI PPT, one-click design, export PPTX',zh:'最好用的AI PPT,一键设计,在线展示,导出PPTX'},cat:'PPT',icon:'📊'},
  {name:'AiPPT',url:'https://www.aippt.cn/',desc:{en:'Auto-generate PPT outline + template, one-click',zh:'自动生成PPT大纲和模板,一键完成'},cat:'PPT',icon:'📊'},
  {name:'Beautiful.ai',url:'https://www.beautiful.ai/',desc:{en:'Smart templates, auto-layout, brand consistency',zh:'智能模板,自动排版,品牌风格统一'},cat:'PPT',icon:'💎'},
  {name:'Tome',url:'https://tome.app/',desc:{en:'Storytelling slides, interactive embeds',zh:'叙事型幻灯片,支持交互式嵌入'},cat:'PPT',icon:'📖'},
  {name:'ChatPPT',url:'https://www.chatppt.com/',desc:{en:'Chinese-native AI PPT, WeChat mini-program',zh:'中文原生AI PPT,微信小程序可用'},cat:'PPT',icon:'💬'},
  {name:'SlidesAI',url:'https://www.slidesai.io/',desc:{en:'Google Slides plugin, text→slides',zh:'Google Slides插件,文字直接生成幻灯片'},cat:'PPT',icon:'📄'},
  {name:'Boardmix',url:'https://boardmix.cn/',desc:{en:'AI whiteboard: mind map, flowchart, PPT gen',zh:'AI白板:思维导图/流程图/PPT一键生成'},cat:'PPT',icon:'🖼️'},
  {name:'歌者AI',url:'https://www.gezhe.com/',desc:{en:'Topic/WeChat article/text → PPT generation',zh:'话题/微信文章/文本→PPT自动生成'},cat:'PPT',icon:'🎤'},
  {name:'百度文库AI',url:'https://wenku.baidu.com/',desc:{en:'Baidu Wenku AI, input topic→generate PPT',zh:'百度文库AI,输入主题自动生成PPT'},cat:'PPT',icon:'📚'},
  {name:'WPS AI',url:'https://www.wps.com/ai/',desc:{en:'Kingsoft WPS built-in AI, doc/sheet/slide AI',zh:'金山WPS内置AI,文档/表格/演示全AI化'},cat:'PPT',icon:'📎'},
  {name:'Decktopus',url:'https://www.decktopus.com/',desc:{en:'Sales & pitch decks, AI-powered',zh:'销售/路演PPT专用,AI驱动'},cat:'PPT',icon:'🎯'},
  {name:'Canva',url:'https://www.canva.com/',desc:{en:'Magic Design, AI PPT, rich templates',zh:'魔法设计+AI PPT,模板丰富'},cat:'PPT',icon:'🖼️'},
]
const CODE = {
  step1: `# Gamma — Best AI PPT Generator
# Visit: https://gamma.app/
# 1. Sign up (Google account) → "Create new" → "Generate"
# 2. Choose format: Presentation (8-12 slides recommended)
# 3. Enter prompt (be specific!):
# Prompt template:
# "Create a [N]-slide presentation about [topic].
#  Audience: [who will see this].
#  Include: [key points to cover].
#  Style: [professional/creative/minimal/bold].
#  Use: [charts/diagrams/images/icon-heavy]."
# Example:
# "Create a 10-slide pitch deck for an AI logistics startup.
#  Audience: venture capital investors.
#  Include: problem, market size, our solution, tech stack,
#  traction metrics, team, competition, business model, ask.
#  Style: bold and modern, data-heavy with charts.
#  Color: deep blue and orange accent."
# 4. Gamma generates deck in ~30 seconds
# 5. Edit: change theme, add/remove slides, tweak content
# 6. Present directly in browser or export as PPTX/PDF`,
  step2: `# Document → PPT Conversion
# Method 1: Gamma (supports import)
# 1. Gamma → "Create new" → "Paste in text"
# 2. Paste your outline/document → AI converts to slides
# 3. Format: each ## heading → new slide
#    Bullet points → slide body
#    Tables → auto-formatted
# Method 2: Beautiful.ai + ChatGPT workflow
# 1. Have ChatGPT generate a structured outline:
"""
Generate a slide-by-slide outline for a presentation about
[TOPIC]. For each slide, provide:
- Slide title
- 3-5 bullet points
- Any data or chart suggestions
- Speaker notes (1-2 sentences)
"""
# 2. Copy each slide's content into Beautiful.ai
# 3. AI auto-formats with smart templates
# Method 3: MS PowerPoint Copilot (Microsoft 365)
# 1. Open PowerPoint → "Copilot" button
# 2. "Create a presentation from [document filename.docx]"
# 3. Or: "Create a presentation about [topic]"
# 4. Copilot generates slides with Designer suggestions`,
  step3: `# AI Beautify Your Existing Ugly PPT
# Method 1: PowerPoint Designer (free, built-in)
# 1. Open your PPT → go to any slide
# 2. "Design" tab → "Designer" panel opens on right
# 3. AI suggests multiple design variations
# 4. Click to apply → entire deck gets consistent styling
# Method 2: Beautiful.ai Smart Templates
# 1. Import your PPTX into Beautiful.ai
# 2. AI analyzes content → suggests template
# 3. Smart slide rules keep alignment perfect as you edit
# Method 3: Gamma re-design
# 1. Copy text content from your old PPT
# 2. Paste into Gamma as "Paste in text"
# 3. Gamma generates a fresh, modern design
# 4. Export → your content, AI's design
# WPS AI (for Chinese users):
# 1. Open WPS Office → "AI" tab
# 2. "Smart Beautify" → AI applies consistent theme
# 3. "AI Outline" → auto-generates table of contents
# 4. "AI Image" → generates custom illustrations for slides`,
}
