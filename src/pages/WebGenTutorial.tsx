import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'
import { pStyle, ulStyle, Card, Code } from '../components/TutorialCard'

export default function WebGenTutorial() {
  const { lang } = useT()
  const l = {
    pageTitle: lang === 'zh-CN' ? 'AI 网页生成教程' : lang === 'zh-TW' ? 'AI 網頁生成教學' : 'AI Web Page Generation — Complete Guide',
    pageSub: lang === 'zh-CN' ? '提示词→线上网站 · v0/Bolt/Lovable · 零代码建站' : lang === 'zh-TW' ? '提示詞→線上網站 · v0/Bolt/Lovable · 零程式碼建站' : 'Prompt→Live Website · v0/Bolt/Lovable · Zero-Code Web Dev',
    whatIs: lang === 'zh-CN' ? 'AI网页生成概览' : lang === 'zh-TW' ? 'AI網頁生成概覽' : 'Overview',
    whatIsBody: lang === 'zh-CN' ? '现在你可以用自然语言描述一个网站，AI在几秒钟内生成完整的代码并部署上线。v0.dev专注React组件生成，Bolt.new可以生成全栈应用，Lovable能打造完整的Web App。本教程教你从零构建和部署AI生成的网站。' : lang === 'zh-TW' ? '現在你可以用自然語言描述一個網站，AI在幾秒鐘內生成完整的程式碼並部署上線。v0.dev專注React組件生成，Bolt.new可以生成全棧應用，Lovable能打造完整的Web App。本教學教你從零構建和部署AI生成的網站。' : 'You can now describe a website in natural language, and AI generates complete code and deploys it in seconds. v0.dev focuses on React components, Bolt.new generates full-stack apps, and Lovable builds complete web apps. This guide teaches you how to build and deploy AI-generated websites from scratch.',
    tools: lang === 'zh-CN' ? '推荐工具' : lang === 'zh-TW' ? '推薦工具' : 'Recommended Tools',
    quickLinks: lang === 'zh-CN' ? '👇 工具直达' : lang === 'zh-TW' ? '👇 工具直達' : '👇 Quick Links',
    step1: lang === 'zh-CN' ? '第1步：v0.dev — 提示词生成React组件' : lang === 'zh-TW' ? '第1步：v0.dev — 提示詞生成React組件' : 'Step 1: v0.dev for React Components',
    step2: lang === 'zh-CN' ? '第2步：Bolt.new — 全栈应用生成' : lang === 'zh-TW' ? '第2步：Bolt.new — 全棧應用生成' : 'Step 2: Bolt.new for Full-Stack Apps',
    step3: lang === 'zh-CN' ? '第3步：Lovable — 完整的Web App' : lang === 'zh-TW' ? '第3步：Lovable — 完整的Web App' : 'Step 3: Lovable for Complete Web Apps',
    step4: lang === 'zh-CN' ? '第4步：部署上线' : lang === 'zh-TW' ? '第4步：部署上線' : 'Step 4: Deploy to Production',
    tips: lang === 'zh-CN' ? '提示词技巧' : lang === 'zh-TW' ? '提示詞技巧' : 'Prompt Engineering Tips',
    links: lang === 'zh-CN' ? '资源链接' : lang === 'zh-TW' ? '資源連結' : 'Resources',
  }

  return (
    <div className={styles.page}>
      <div className={styles.head}><h2 className={styles.title}>🌐 {l.pageTitle}</h2><p className={styles.subtitle}>{l.pageSub}</p></div>
      <LinkNav links={toolLinks} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#a855f7" />
      <div className={styles.chart} style={{ margin: '32px 0 20px' }}><div style={{ height: 1, background: 'var(--border)', marginBottom: 20 }} /></div>
      <div className={styles.cases}>
        <Card title={l.whatIs}><p style={pStyle}>{l.whatIsBody}</p></Card>
        <Card title={l.tools}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead><tr style={{ borderBottom: '2px solid var(--border)' }}><th style={{ padding: 8, textAlign: 'left' }}>Tool</th><th style={{ padding: 8, textAlign: 'left' }}>Best For</th><th style={{ padding: 8, textAlign: 'left' }}>Stack</th></tr></thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>v0.dev</td><td style={{ padding: 8 }}>React UI components</td><td style={{ padding: 8 }}>React + Tailwind + shadcn/ui</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>Bolt.new</td><td style={{ padding: 8 }}>Full-stack web apps</td><td style={{ padding: 8 }}>React/Vue + Node.js + Vite</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>Lovable</td><td style={{ padding: 8 }}>Complete SaaS apps</td><td style={{ padding: 8 }}>React + Supabase + Tailwind</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>Replit Agent</td><td style={{ padding: 8 }}>Prototype → production</td><td style={{ padding: 8 }}>Any (Python/Node.js/Go)</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>Cursor</td><td style={{ padding: 8 }}>AI-first code editor</td><td style={{ padding: 8 }}>All stacks</td></tr>
              <tr><td style={{ padding: 8 }}>Windsurf</td><td style={{ padding: 8 }}>AI IDE with multi-file edits</td><td style={{ padding: 8 }}>All stacks</td></tr>
            </tbody>
          </table>
        </Card>
        <Card title={l.tools}><p style={pStyle}>👇 点击下方链接直接打开网页生成工具</p><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:8}}><a href="https://v0.dev/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>🟢 v0.dev — Vercel出品，文字→React UI代码</a><a href="https://bolt.new/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>⚡ Bolt.new — 全栈Web应用，浏览器即运行</a><a href="https://lovable.dev/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>❤️ Lovable — 完整SaaS应用，Supabase集成</a><a href="https://replit.com/agent" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>🔄 Replit Agent — 原型→生产部署</a><a href="https://www.framer.com/ai/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>🟣 Framer AI — 设计→上线网站</a><a href="https://webflow.com/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>🌊 Webflow — 可视化建站+AI</a><a href="https://cursor.com/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>🖱️ Cursor — AI编程IDE，从零写网站</a><a href="https://www.trae.ai/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>💻 Trae — 字节AI编程，免费Claude</a></div></Card>
<Card title={l.step1}><Code>{CODE.step1}</Code></Card>
        <Card title={l.step2}><Code>{CODE.step2}</Code></Card>
        <Card title={l.step3}><Code>{CODE.step3}</Code></Card>
        <Card title={l.step4}><Code>{CODE.step4}</Code></Card>
        <Card title={l.tips}><p style={pStyle}>{lang === 'zh-CN' ? '1. 提示词结构："Build a [type of page] with [features]. Tech stack: [React/Vue/etc]. Style: [minimal/modern/dark]. Include: [list components]." 2. 先让AI生成单个组件确认风格，再让它生成完整页面 3. 代码可以直接复制到本地项目中使用，不需要依赖原平台 4. 对生成结果不满意？直接说："Change the color scheme to warm tones and add a gradient hero section" 5. 复杂项目拆分成多个小提示词，逐个生成再组合' : '1. Prompt structure: "Build [page type] with [features]. Stack: [tech]. Style: [look]. Include: [components]." 2. Generate one component first to confirm style, then the full page 3. Code can be copied to local projects — no platform lock-in 4. Not happy? Just say: "Change the color scheme to X and add Y" 5. Break complex projects into smaller prompts, generate individually, then compose'}</p></Card>
        <Card title={l.links}><ul style={ulStyle}><li><a href="https://v0.dev/" target="_blank" rel="noopener">v0.dev — Vercel AI React builder</a></li><li><a href="https://bolt.new/" target="_blank" rel="noopener">Bolt.new — StackBlitz full-stack AI</a></li><li><a href="https://lovable.dev/" target="_blank" rel="noopener">Lovable — AI web app builder</a></li><li><a href="https://replit.com/agent" target="_blank" rel="noopener">Replit Agent — prototype to deploy</a></li><li><a href="https://cursor.com/" target="_blank" rel="noopener">Cursor — AI-first code editor</a></li><li><a href="https://www.trae.ai/" target="_blank" rel="noopener">Trae — 字节AI编程IDE (免费Claude)</a></li><li><a href="https://codegeex.cn/" target="_blank" rel="noopener">CodeGeeX — 清华AI编程助手</a></li><li><a href="https://www.marscode.cn/" target="_blank" rel="noopener">MarsCode — 豆包AI编程工具</a></li><li><a href="https://tongyi.aliyun.com/lingma/" target="_blank" rel="noopener">通义灵码 — 阿里云AI代码助手</a></li><li><a href="https://dify.ai/" target="_blank" rel="noopener">Dify — 开源LLM应用开发平台</a></li><li><a href="https://www.coze.cn/" target="_blank" rel="noopener">扣子Coze — AI Bot搭建平台</a></li><li><a href="https://www.framer.com/ai/" target="_blank" rel="noopener">Framer AI — AI建站/设计→上线</a></li><li><a href="https://webflow.com/" target="_blank" rel="noopener">Webflow — 可视化建站+AI</a></li></ul></Card>
      </div>
    </div>
  )
}

const toolLinks: ToolLink[] = [  {name:'v0.dev',url:'https://v0.dev/',desc:{en:'Vercel, text→React UI code, copy-paste',zh:'Vercel出品,文字→React UI代码,复制即用'},cat:'网页',icon:'🟢'},  {name:'Bolt.new',url:'https://bolt.new/',desc:{en:'Full-stack web app, browser-ready',zh:'全栈Web应用,浏览器即运行'},cat:'网页',icon:'⚡'},  {name:'Lovable',url:'https://lovable.dev/',desc:{en:'Complete SaaS app, Supabase integration',zh:'完整SaaS应用,Supabase集成'},cat:'网页',icon:'❤️'},  {name:'Replit Agent',url:'https://replit.com/agent',desc:{en:'Full-stack app, prototype→deploy',zh:'全栈应用,原型→生产部署'},cat:'网页',icon:'🔄'},  {name:'Framer AI',url:'https://www.framer.com/ai/',desc:{en:'AI website builder, design→live site',zh:'AI建站,设计→上线网站'},cat:'网页',icon:'🟣'},  {name:'Webflow',url:'https://webflow.com/',desc:{en:'Visual site builder + AI',zh:'可视化建站+AI'},cat:'网页',icon:'🌊'},  {name:'Cursor',url:'https://cursor.com/',desc:{en:'AI-first code editor, build websites',zh:'AI编程IDE,从零写网站'},cat:'网页',icon:'🖱️'},  {name:'Trae',url:'https://www.trae.ai/',desc:{en:'ByteDance AI IDE, free Claude 3.7',zh:'字节AI编程IDE,免费Claude'},cat:'网页',icon:'💻'},]
const CODE = {
  step1: `# v0.dev — Text to React Components
# Visit: https://v0.dev/
# Created by Vercel, generates React + Tailwind + shadcn/ui

# 1. Sign up → type prompt in the chat:
"""
Build a modern SaaS landing page with:
- Sticky navigation bar with logo and CTA button
- Hero section with animated gradient background
- 3 feature cards with icons
- Pricing table (3 tiers: Free/Pro/Enterprise)
- Footer with links and social icons
Style: dark theme, minimal, glass-morphism cards
"""

# 2. v0 generates the full page in ~10 seconds
# 3. Preview → iterate with natural language:
#    "Make the hero CTA button pulse on hover"
#    "Add a testimonial carousel section between features and pricing"
# 4. Copy code → paste into your Next.js/React project
# 5. All components use shadcn/ui — fully customizable`,

  step2: `# Bolt.new — Full-Stack App Generation
# Visit: https://bolt.new/
# Runs complete apps in the browser (StackBlitz infrastructure)

# 1. Enter prompt:
"""
Build a task management app with:
- User signup/login (email + password)
- Dashboard showing task list with filters
- Create/edit/delete tasks
- Tasks have: title, description, priority (low/medium/high),
  status (todo/in_progress/done), due date
- Responsive design, works on mobile
- Dark/light mode toggle
Tech stack: React, Tailwind CSS, Supabase for auth + database
"""

# 2. Bolt.new generates:
#    - Full project structure
#    - React components with Tailwind styling
#    - Supabase schema and API calls
#    - Auth flow (signup, login, session)
#    - npm packages auto-installed

# 3. Test immediately in the browser
# 4. Download ZIP → run locally with 'npm install && npm run dev'
# 5. Deploy: connect to Netlify/Vercel and push to GitHub`,

  step3: `# Lovable — Complete SaaS in Minutes
# Visit: https://lovable.dev/
# Best for: SaaS apps, dashboards, internal tools

# 1. Describe your app:
"""
Build a customer feedback analytics dashboard:
- Connect to a feedback form submissions database
- Real-time dashboard: total submissions, sentiment trend,
  top issues (word cloud), NPS score over time
- Filter by date range, product, customer segment
- Export filtered data as CSV
- Admin panel: manage users, view flagged feedback
Style: clean enterprise, charts with Recharts
"""

# 2. Lovable generates:
#    - Authentication (Supabase Auth)
#    - Database tables and relationships
#    - Dashboard with real charts
#    - Export functionality
#    - Admin panel

# 3. Iterate with chat: "Add email notifications for
#    negative feedback" → Lovable adds the feature
# 4. One-click deploy to Lovable's hosting or export code`,

  step4: `# Deploy Your AI-Generated Website to Production

# Method 1: Vercel (easiest, free tier)
# 1. Push code to GitHub repo
# 2. Go to vercel.com → "New Project" → import repo
# 3. Vercel auto-detects framework (Next.js/Vite/etc)
# 4. Deploy → get your-site.vercel.app
# 5. Connect custom domain in settings

# Method 2: Netlify (great for static sites)
# 1. Push to GitHub → netlify.com → "New site from Git"
# 2. Build command: npm run build
# 3. Publish directory: dist (Vite) or .next (Next.js)
# 4. Deploy → your-site.netlify.app

# Method 3: Cloudflare Pages (fast + free)
# 1. Push to GitHub → Cloudflare Dashboard → Pages
# 2. Connect repo → set build command
# 3. Deploy → your-site.pages.dev
# 4. Unlimited bandwidth on free tier

# Method 4: GitHub Pages (for simple static sites)
# npm install gh-pages --save-dev
# In package.json:
# "scripts": { "deploy": "gh-pages -d dist" }
# npm run build && npm run deploy

# For Chinese hosting:
# 腾讯云 CloudBase, 阿里云 OSS + CDN, Vercel (works in China with custom domain)`,
}


