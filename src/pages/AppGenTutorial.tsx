import { useT } from '../contexts/LanguageContext'
import styles from './Page.module.css'

export default function AppGenTutorial() {
  const { lang } = useT()
  const l = {
    pageTitle: lang === 'zh-CN' ? 'AI App 生成教程' : lang === 'zh-TW' ? 'AI App 生成教學' : 'AI App Generation — Complete Guide',
    pageSub: lang === 'zh-CN' ? '提示词→移动App · FlutterFlow/Replit/Bolt · iOS+Android' : lang === 'zh-TW' ? '提示詞→移動App · FlutterFlow/Replit/Bolt · iOS+Android' : 'Prompt→Mobile App · FlutterFlow/Replit/Bolt · iOS+Android',
    whatIs: lang === 'zh-CN' ? 'AI App生成概览' : lang === 'zh-TW' ? 'AI App生成概覽' : 'Overview',
    whatIsBody: lang === 'zh-CN' ? '现在你可以用AI在几小时内生成一个完整的App——包括前端UI、后端API、数据库和用户认证。FlutterFlow专注移动App，Replit Agent可以生成全栈应用，Bolt.new支持Web+移动端。本教程覆盖：App原型生成、后端搭建、打包发布全流程。' : lang === 'zh-TW' ? '現在你可以用AI在幾小時內生成一個完整的App——包括前端UI、後端API、數據庫和用戶認證。FlutterFlow專注移動App，Replit Agent可以生成全棧應用，Bolt.new支援Web+移動端。本教學覆蓋：App原型生成、後端搭建、打包發布全流程。' : 'You can now generate a complete app in hours — frontend UI, backend API, database, and auth. FlutterFlow focuses on mobile, Replit Agent handles full-stack, and Bolt.new supports web+mobile. This guide covers: prototyping, backend setup, and publishing.',
    tools: lang === 'zh-CN' ? '推荐工具' : lang === 'zh-TW' ? '推薦工具' : 'Recommended Tools',
    step1: lang === 'zh-CN' ? '第1步：AI生成App原型 (FlutterFlow)' : lang === 'zh-TW' ? '第1步：AI生成App原型 (FlutterFlow)' : 'Step 1: AI App Prototype with FlutterFlow',
    step2: lang === 'zh-CN' ? '第2步：全栈App生成 (Replit Agent)' : lang === 'zh-TW' ? '第2步：全棧App生成 (Replit Agent)' : 'Step 2: Full-Stack App with Replit Agent',
    step3: lang === 'zh-CN' ? '第3步：后端与数据库' : lang === 'zh-TW' ? '第3步：後端與數據庫' : 'Step 3: Backend & Database',
    step4: lang === 'zh-CN' ? '第4步：打包与发布' : lang === 'zh-TW' ? '第4步：打包與發布' : 'Step 4: Build & Publish',
    tips: lang === 'zh-CN' ? '实战建议' : lang === 'zh-TW' ? '實戰建議' : 'Practical Tips',
    links: lang === 'zh-CN' ? '资源链接' : lang === 'zh-TW' ? '資源連結' : 'Resources',
  }
  const pStyle: React.CSSProperties = { color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: 14 }
  const ulStyle: React.CSSProperties = { paddingLeft: 20, color: 'var(--text-secondary)', lineHeight: 2.2 }

  return (
    <div className={styles.page}>
      <div className={styles.head}><h2 className={styles.title}>📱 {l.pageTitle}</h2><p className={styles.subtitle}>{l.pageSub}</p></div>
      <div className={styles.cases}>
        <Card title={l.whatIs}><p style={pStyle}>{l.whatIsBody}</p></Card>
        <Card title={l.tools}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead><tr style={{ borderBottom: '2px solid var(--border)' }}><th style={{ padding: 8, textAlign: 'left' }}>Tool</th><th style={{ padding: 8, textAlign: 'left' }}>Best For</th><th style={{ padding: 8, textAlign: 'left' }}>Output</th></tr></thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>FlutterFlow</td><td style={{ padding: 8 }}>Native iOS + Android apps</td><td style={{ padding: 8 }}>Flutter code + APK/IPA</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>Replit Agent</td><td style={{ padding: 8 }}>Full-stack mobile + web</td><td style={{ padding: 8 }}>Deployed URL + code</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>Bolt.new</td><td style={{ padding: 8 }}>React Native/PWA apps</td><td style={{ padding: 8 }}>ZIP download + deploy</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>Bubble.io + AI</td><td style={{ padding: 8 }}>No-code web apps</td><td style={{ padding: 8 }}>Live web app</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>Supabase</td><td style={{ padding: 8 }}>Backend-as-a-Service</td><td style={{ padding: 8 }}>Database + Auth + API</td></tr>
              <tr><td style={{ padding: 8 }}>Firebase</td><td style={{ padding: 8 }}>Google mobile backend</td><td style={{ padding: 8 }}>DB + Auth + Hosting</td></tr>
            </tbody>
          </table>
        </Card>
        <Card title={l.step1}><Code>{CODE.step1}</Code></Card>
        <Card title={l.step2}><Code>{CODE.step2}</Code></Card>
        <Card title={l.step3}><Code>{CODE.step3}</Code></Card>
        <Card title={l.step4}><Code>{CODE.step4}</Code></Card>
        <Card title={l.tips}><p style={pStyle}>{lang === 'zh-CN' ? '1. App开发流程：先用v0.dev生成UI原型确认设计→用Bolt/Replit生成功能代码→用Supabase/Firebase搭建后端→FlutterFlow打包发布 2. 先用AI生成MVP验证想法（1-2天），不要一上来就做完整功能 3. 后端首选Supabase（开源、免费额度大方、PostgreSQL） 4. iOS发布必须有Apple Developer账号（$99/年），Android只需$25一次性 5. 生成代码后务必review安全相关逻辑（认证、支付、数据加密）' : '1. Workflow: v0 for UI prototype → Bolt/Replit for functionality → Supabase/Firebase backend → FlutterFlow for mobile build 2. Build MVP first (1-2 days) to validate — don\'t go full features upfront 3. Backend: Supabase first (open source, generous free tier, PostgreSQL) 4. iOS publishing needs Apple Developer ($99/yr), Android is $25 one-time 5. Always review AI-generated security code (auth, payments, encryption)'}</p></Card>
        <Card title={l.links}><ul style={ulStyle}><li><a href="https://flutterflow.io/" target="_blank" rel="noopener">FlutterFlow — AI mobile app builder</a></li><li><a href="https://replit.com/agent" target="_blank" rel="noopener">Replit Agent — full-stack AI dev</a></li><li><a href="https://bolt.new/" target="_blank" rel="noopener">Bolt.new — web + mobile AI</a></li><li><a href="https://supabase.com/" target="_blank" rel="noopener">Supabase — open source Firebase alternative</a></li><li><a href="https://firebase.google.com/" target="_blank" rel="noopener">Firebase — Google mobile backend</a></li></ul></Card>
      </div>
    </div>
  )
}

const CODE = {
  step1: `# FlutterFlow — AI-Powered Mobile App Builder
# Visit: https://flutterflow.io/
# Generates real Flutter code (Dart) for iOS + Android

# 1. Sign up → "Create New Project" → "AI App Generator"
# 2. Describe your app:
"""
Build a personal finance tracking app:
- Home screen: Monthly spending overview with pie chart
- Add transaction screen: amount, category picker, date, notes
- Transaction list with search and filter by category/month
- Budget setting with progress bars
- Login: email + Google sign-in
- Dark mode support
Target: iOS and Android, clean minimal design
"""

# 3. FlutterFlow AI generates:
#    - All screens with navigation flow
#    - Firebase/Supabase backend integration
#    - Responsive layouts
#    - Authentication flow

# 4. Customize visually (drag-and-drop editor)
# 5. Test immediately: "Run" → preview on device
# 6. Export: Flutter source code or APK/IPA`,

  step2: `# Replit Agent — Full-Stack App from Prompt
# Visit: https://replit.com/agent
# Generates complete apps with frontend + backend + database

# 1. Open Replit Agent → describe your app:
"""
Build a workout tracking app:
- User can create workout plans (name, exercises, sets, reps)
- Log completed workouts with date, duration, notes
- Progress charts (weight lifted over time, consistency streak)
- Exercise library with video links
- Social: share workout, follow friends
Tech: React frontend, Node.js/Express backend, SQLite database
"""

# 2. Replit Agent:
#    - Plans the architecture
#    - Creates database schema
#    - Builds API endpoints
#    - Generates React components
#    - Sets up routing and state management
#    - Deploys to a live URL

# 3. Every step is visible — you can intervene and guide
# 4. Result: live app at your-app.replit.app
# 5. Export full codebase as ZIP → deploy anywhere`,

  step3: `# Backend & Database with Supabase
# Visit: https://supabase.com/ (open source, free tier: 500MB DB, 50K users)

# 1. Create Supabase project → get API keys
# 2. AI generates database schema:
"""
-- Run in Supabase SQL Editor
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  username TEXT UNIQUE,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE posts (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES profiles(id),
  content TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
"""

# 3. Connect from your AI-generated app:
# Install: npm install @supabase/supabase-js
# Add env vars: SUPABASE_URL, SUPABASE_ANON_KEY

# 4. Row Level Security (critical!):
"""
-- Only allow users to read all posts
CREATE POLICY "Posts are viewable by everyone"
ON posts FOR SELECT USING (true);

-- Users can only insert their own posts
CREATE POLICY "Users can insert own posts"
ON posts FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Users can only delete their own posts
CREATE POLICY "Users can delete own posts"
ON posts FOR DELETE USING (auth.uid() = user_id);
"""`,

  step4: `# Build & Publish Your App

# iOS App Store:
# 1. Enroll Apple Developer Program ($99/year)
# 2. In Xcode: Product → Archive → Distribute App
# 3. App Store Connect: fill metadata, screenshots, privacy
# 4. Submit for review (typically 1-2 days)

# Google Play Store:
# 1. Create developer account ($25 one-time)
# 2. Build APK/AAB: flutter build appbundle (FlutterFlow)
#    Or: npx react-native build-android (React Native)
# 3. Play Console: upload, fill listing, set pricing
# 4. Submit for review (typically a few hours)

# PWA (Progressive Web App) — fastest route:
# 1. Build web app with mobile-responsive design
# 2. Add manifest.json + service worker
# 3. Deploy to Vercel/Netlify
# 4. Users can "Add to Home Screen" — no app store needed
# 5. Works offline, push notifications, looks like native app`,
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return <div style={{ background: 'var(--bg-card)', borderRadius: 12, padding: 22, boxShadow: 'var(--shadow)', marginBottom: 16 }}><h3 style={{ marginBottom: 12, color: 'var(--text)', fontSize: 16 }}>{title}</h3>{children}</div>
}

function Code({ children }: { children: string }) {
  return <pre style={{ background: '#0f172a', color: '#e2e8f0', borderRadius: 8, padding: 16, fontSize: 13, lineHeight: 1.6, overflowX: 'auto', whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: 0 }}><code>{children}</code></pre>
}
