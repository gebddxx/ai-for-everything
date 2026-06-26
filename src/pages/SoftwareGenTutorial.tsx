import { useT } from '../contexts/LanguageContext'
import styles from './Page.module.css'
import { pStyle, ulStyle, Card, Code } from '../components/TutorialCard'

export default function SoftwareGenTutorial() {
  const { lang } = useT()
  const l = {
    pageTitle: lang === 'zh-CN' ? 'AI 软件/EXE 生成教程' : lang === 'zh-TW' ? 'AI 軟體/EXE 生成教學' : 'AI Software/EXE Generation — Complete Guide',
    pageSub: lang === 'zh-CN' ? '从想法到可执行文件 · AI编程全流程' : lang === 'zh-TW' ? '從想法到可執行文件 · AI編程全流程' : 'From Idea to Executable · Full AI Coding Pipeline',
    whatIs: lang === 'zh-CN' ? 'AI软件生成概览' : lang === 'zh-TW' ? 'AI軟體生成概覽' : 'Overview',
    whatIsBody: lang === 'zh-CN' ? '不只是网页和App——AI还能帮你生成桌面软件（.exe/.dmg）、命令行工具、自动化脚本、浏览器插件、后端服务器。Cursor、Claude Code、GitHub Copilot等工具让非程序员也能"说出需求，得到软件"。本教程覆盖：桌面应用、CLI工具、浏览器插件、打包分发全流程。' : lang === 'zh-TW' ? '不只是網頁和App——AI還能幫你生成桌面軟體（.exe/.dmg）、命令列工具、自動化腳本、瀏覽器擴充功能、後端伺服器。Cursor、Claude Code、GitHub Copilot等工具讓非程式設計師也能"說出需求，得到軟體"。本教學覆蓋：桌面應用、CLI工具、瀏覽器擴充功能、打包分發全流程。' : 'Beyond web and mobile — AI can generate desktop software (.exe/.dmg), CLI tools, automation scripts, browser extensions, and backend servers. Tools like Cursor, Claude Code, and GitHub Copilot let non-programmers "describe what they want and get software." This guide covers: desktop apps, CLI tools, browser extensions, and packaging.',
    tools: lang === 'zh-CN' ? '推荐AI编程工具' : lang === 'zh-TW' ? '推薦AI編程工具' : 'Recommended AI Coding Tools',
    step1: lang === 'zh-CN' ? '第1步：AI编程环境搭建' : lang === 'zh-TW' ? '第1步：AI編程環境搭建' : 'Step 1: AI Coding Environment Setup',
    step2: lang === 'zh-CN' ? '第2步：生成桌面应用 (Electron/Tauri)' : lang === 'zh-TW' ? '第2步：生成桌面應用 (Electron/Tauri)' : 'Step 2: Desktop App with Electron/Tauri',
    step3: lang === 'zh-CN' ? '第3步：生成命令行工具 (CLI)' : lang === 'zh-TW' ? '第3步：生成命令列工具 (CLI)' : 'Step 3: CLI Tool Generation',
    step4: lang === 'zh-CN' ? '第4步：浏览器插件' : lang === 'zh-TW' ? '第4步：瀏覽器擴充功能' : 'Step 4: Browser Extensions',
    step5: lang === 'zh-CN' ? '第5步：打包为EXE/DMG' : lang === 'zh-TW' ? '第5步：打包為EXE/DMG' : 'Step 5: Package as EXE/DMG',
    tips: lang === 'zh-CN' ? '实战建议' : lang === 'zh-TW' ? '實戰建議' : 'Practical Tips',
    links: lang === 'zh-CN' ? '资源链接' : lang === 'zh-TW' ? '資源連結' : 'Resources',
  }

  return (
    <div className={styles.page}>
      <div className={styles.head}><h2 className={styles.title}>💻 {l.pageTitle}</h2><p className={styles.subtitle}>{l.pageSub}</p></div>
      <div className={styles.cases}>
        <Card title={l.whatIs}><p style={pStyle}>{l.whatIsBody}</p></Card>
        <Card title={l.tools}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead><tr style={{ borderBottom: '2px solid var(--border)' }}><th style={{ padding: 8, textAlign: 'left' }}>Tool</th><th style={{ padding: 8, textAlign: 'left' }}>Best For</th><th style={{ padding: 8, textAlign: 'left' }}>Price</th></tr></thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>Cursor</td><td style={{ padding: 8 }}>AI-first IDE, best overall</td><td style={{ padding: 8 }}>Free tier, $20/mo Pro</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>Claude Code</td><td style={{ padding: 8 }}>Terminal AI agent</td><td style={{ padding: 8 }}>API usage based</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>GitHub Copilot</td><td style={{ padding: 8 }}>IDE autocomplete + chat</td><td style={{ padding: 8 }}>Free tier, $10/mo</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>Windsurf</td><td style={{ padding: 8 }}>Multi-file AI edits</td><td style={{ padding: 8 }}>Free tier, $15/mo</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>Electron</td><td style={{ padding: 8 }}>Desktop app framework</td><td style={{ padding: 8 }}>Open source</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>Tauri</td><td style={{ padding: 8 }}>Lightweight desktop (Rust)</td><td style={{ padding: 8 }}>Open source</td></tr>
              <tr><td style={{ padding: 8 }}>PyInstaller</td><td style={{ padding: 8 }}>Python → EXE</td><td style={{ padding: 8 }}>Open source</td></tr>
            </tbody>
          </table>
        </Card>
        <Card title={l.tools}><p style={pStyle}>👇 点击下方链接直接打开AI编程/打包工具</p><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:8}}><a href="https://cursor.com/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>🖱️ Cursor — AI编程IDE，最强代码生成</a><a href="https://www.trae.ai/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>💻 Trae — 字节AI编程，免费Claude</a><a href="https://github.com/features/copilot" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>🐙 GitHub Copilot — VS Code AI补全</a><a href="https://codegeex.cn/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>🔧 CodeGeeX — 清华AI编程助手</a><a href="https://www.marscode.cn/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>🚀 MarsCode — 豆包AI编程工具</a><a href="https://tongyi.aliyun.com/lingma/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>🧩 通义灵码 — 阿里云AI代码助手</a><a href="https://www.electronjs.org/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>⚛️ Electron — Web→桌面应用框架</a><a href="https://tauri.app/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>🦀 Tauri — 轻量桌面应用(Rust)</a></div></Card>
<Card title={l.step1}><Code>{CODE.step1}</Code></Card>
        <Card title={l.step2}><Code>{CODE.step2}</Code></Card>
        <Card title={l.step3}><Code>{CODE.step3}</Code></Card>
        <Card title={l.step4}><Code>{CODE.step4}</Code></Card>
        <Card title={l.step5}><Code>{CODE.step5}</Code></Card>
        <Card title={l.tips}><p style={pStyle}>{lang === 'zh-CN' ? '1. 非程序员入门路径：先用Bolt.new生成Web版→用户验证→再决定是否做桌面版 2. Cursor + Claude模式的威力：用Cursor的Tab补全做细节，用Claude做架构设计和大功能 3. "描述越详细，生成的代码越好"——明确技术栈、UI风格、功能边界、错误处理要求 4. Python一键打包：pyinstaller --onefile --windowed myapp.py → 单个EXE文件 5. 生成代码后务必让AI写测试——"Now write comprehensive tests for this code"' : '1. Non-programmer path: Bolt.new web version first → validate with users → decide if desktop is needed 2. Cursor for details (Tab completion), Claude for architecture and big features 3. "The more detail in prompts, the better the code" — specify stack, UI style, features, error handling 4. Python one-click packaging: pyinstaller --onefile --windowed myapp.py → single EXE 5. Always ask AI to write tests: "Now write comprehensive tests for this code"'}</p></Card>
        <Card title={l.links}><ul style={ulStyle}><li><a href="https://cursor.com/" target="_blank" rel="noopener">Cursor — AI-first IDE</a></li><li><a href="https://docs.anthropic.com/en/docs/claude-code" target="_blank" rel="noopener">Claude Code — terminal AI agent</a></li><li><a href="https://github.com/features/copilot" target="_blank" rel="noopener">GitHub Copilot — IDE AI pair programmer</a></li><li><a href="https://www.electronjs.org/" target="_blank" rel="noopener">Electron — desktop app framework</a></li><li><a href="https://tauri.app/" target="_blank" rel="noopener">Tauri — lightweight desktop (Rust)</a></li><li><a href="https://pyinstaller.org/" target="_blank" rel="noopener">PyInstaller — Python to EXE</a></li></ul></Card>
      </div>
    </div>
  )
}

const CODE = {
  step1: `# AI Coding Environment Setup

# Option A: Cursor (Recommended for beginners)
# 1. Download: https://cursor.com/
# 2. Install → sign in → open your project folder
# 3. Press Ctrl+L (Chat) or Ctrl+K (Inline edit)
# 4. Start coding in natural language!

# Option B: Claude Code (Terminal power users)
# Install:
npm install -g @anthropic-ai/claude-code
# Setup API key:
export ANTHROPIC_API_KEY="sk-ant-..."
# Use:
claude "Build a file organizer CLI tool that sorts files by type"
# Claude Code reads your entire codebase and can create/edit files directly

# Option C: VS Code + GitHub Copilot
# 1. Install VS Code → Extensions → "GitHub Copilot"
# 2. Sign in with GitHub → activation
# 3. Start typing comments → Copilot suggests code
# 4. Ctrl+I for inline chat: "Create a read_excel function with pandas"

# Option D: Windsurf (Multi-file AI edits)
# Download: https://codeium.com/windsurf
# Best for: large refactors across many files`,

  step2: `# Generate Desktop App with AI + Electron
# Use Cursor or Claude Code to build a desktop app:

# Prompt:
"""
Build a markdown note-taking desktop app:
- Electron + React + TypeScript
- File tree sidebar (browse folders, create/delete files)
- Markdown editor with live preview (use react-markdown)
- Syntax highlighting for code blocks
- Dark/light theme toggle
- Auto-save to local filesystem
- Search across all notes
- Export as PDF

Set up the project from scratch:
1. Initialize Electron + React project
2. Configure webpack/vite for Electron
3. Implement each feature with proper error handling
4. Add keyboard shortcuts (Ctrl+S save, Ctrl+F search)
5. Package for Windows (.exe) and macOS (.dmg)
"""

# AI will generate:
# - package.json with all dependencies
# - main.js (Electron main process)
# - React components for each feature
# - CSS styling
# - Build configuration
# - Packaging scripts`,

  step3: `# Generate CLI Tools with AI

# Example 1: File Organizer CLI
# Prompt (in Cursor/Claude Code):
"""
Create a Python CLI tool 'file-organizer' that:
- Scans a directory → sorts files into subfolders by type
- Categories: images, documents, videos, archives, code, other
- Dry-run mode (-n flag): preview changes without moving
- Recursive mode (-r flag): process subdirectories
- Log file: record all moves with timestamps
- Use argparse, pathlib, shutil
- Add --help with usage examples
- Package with pyproject.toml + pip install
"""

# Example 2: Bulk Image Resizer CLI
# Prompt:
"""
Build a Node.js CLI 'img-resize' using sharp library:
- Takes directory path + target width as arguments
- Resizes all images (jpg, png, webp) to target width
- Preserves aspect ratio
- Outputs to 'resized/' subfolder
- Progress bar with cli-progress
- Concurrent processing with worker threads
- CLI: img-resize ./photos --width 1200 --quality 80
"""`,

  step4: `# Generate Browser Extensions with AI

# Prompt (for Chrome Extension):
"""
Build a "Smart Tab Manager" Chrome extension:
- Popup: list all open tabs grouped by domain
- One-click close duplicate tabs
- Save tab session (name + restore later)
- Keyboard shortcut: Alt+Shift+T to open popup
- Dark mode popup UI
- manifest.json (Manifest V3)
- Use chrome.tabs API and chrome.storage for sessions
"""

# AI generates:
# - manifest.json (Manifest V3 compliant)
# - popup.html + popup.js (tab list UI)
# - background.js (service worker for keyboard shortcuts)
# - styles.css (dark mode popup)
# - icons (16, 48, 128 sizes)

# Load in Chrome:
# 1. chrome://extensions/ → "Developer mode" ON
# 2. "Load unpacked" → select extension folder
# 3. Test → iterate with AI → reload

# Publish to Chrome Web Store ($5 one-time registration):
# 1. Zip the extension folder
# 2. Chrome Developer Dashboard → "New Item"
# 3. Upload zip, fill listing, submit for review`,

  step5: `# Package as EXE/DMG/Deb for Distribution

# ========================================
# Python → EXE (Windows)
# ========================================
pip install pyinstaller
# Single file, no console window:
pyinstaller --onefile --windowed --icon=app.ico myapp.py
# Output: dist/myapp.exe (~30-50 MB)

# With all assets included:
pyinstaller --onefile --windowed --add-data "assets;assets" myapp.py

# ========================================
# Electron → Windows + macOS + Linux
# ========================================
npm install electron-builder --save-dev
# In package.json:
# "build": {
#   "appId": "com.mycompany.myapp",
#   "win": { "target": "nsis" },
#   "mac": { "target": "dmg" },
#   "linux": { "target": "AppImage" }
# }
npm run build  # generates installers in dist/

# ========================================
# Tauri → Lightweight Desktop (Recommended!)
# ========================================
# Tauri uses the OS native webview (not bundled Chromium)
# Result: 5-10 MB installer vs 80-150 MB for Electron
npm create tauri-app@latest
# Select: React + TypeScript
# Build: npm run tauri build
# Output: .msi (Windows), .dmg (macOS), .deb/.AppImage (Linux)

# For code signing (avoid Windows SmartScreen warning):
# - Windows: buy code signing certificate (~$200/yr)
# - macOS: Apple Developer certificate + notarization ($99/yr)`,
}


