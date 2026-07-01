import { useT } from '../contexts/LanguageContext'
import styles from './Page.module.css'
import { pStyle, ulStyle, Card, Code } from '../components/TutorialCard'
export default function GeminiTutorial() {
  const { lang } = useT()
  const l = {
    pageTitle: lang === 'zh-CN' ? 'Gemini CLI 完整安装教程' : lang === 'zh-TW' ? 'Gemini CLI 完整安裝教學' : 'Gemini CLI — Complete Setup Guide',
    pageSub: lang === 'zh-CN' ? 'Google 官方 CLI 编程助手 · 开源 · MCP 原生支持 · 跨平台' : lang === 'zh-TW' ? 'Google 官方 CLI 編程助手 · 開源 · MCP 原生支持 · 跨平台' : 'Google Official CLI Coding Agent · Open Source · MCP Native · Multi-Platform',
    whatIs: lang === 'zh-CN' ? '什么是 Gemini CLI？' : lang === 'zh-TW' ? '什麼是 Gemini CLI？' : 'What is Gemini CLI?',
    whatIsBody: lang === 'zh-CN' ? 'Gemini CLI 是 Google 官方开源的命令行 AI 编程助手。它直接运行在终端中，能理解整个代码库，可以读取、编写、编辑和重构代码。支持 MCP（模型上下文协议）扩展能力，兼容 macOS / Linux / Windows，通过 Google API Key 即可免费用于个人开发。' : lang === 'zh-TW' ? 'Gemini CLI 是 Google 官方開源的命令列 AI 編程助手。它直接運行在終端中，能理解整個程式碼庫，可以讀取、編寫、編輯和重構程式碼。支援 MCP（模型上下文協議）擴展能力，相容 macOS / Linux / Windows，透過 Google API Key 即可免費用於個人開發。' : 'Gemini CLI is Google\'s official open-source command-line AI coding agent. It runs directly in your terminal, understands your entire codebase, and can read, write, edit, and refactor code. It supports Model Context Protocol (MCP) for extending capabilities, works on macOS / Linux / Windows, and is free for personal use with a Google API key.',
    req: lang === 'zh-CN' ? '系统要求' : lang === 'zh-TW' ? '系統要求' : 'System Requirements',
    install: lang === 'zh-CN' ? '第1步：安装（三种方式）' : lang === 'zh-TW' ? '第1步：安裝（三種方式）' : 'Step 1: Installation (3 methods)',
    auth: lang === 'zh-CN' ? '第2步：认证配置' : lang === 'zh-TW' ? '第2步：認證配置' : 'Step 2: Authentication',
    commands: lang === 'zh-CN' ? '第3步：基础命令大全' : lang === 'zh-TW' ? '第3步：基礎命令大全' : 'Step 3: Command Reference',
    files: lang === 'zh-CN' ? '第4步：文件与目录操作' : lang === 'zh-TW' ? '第4步：檔案與目錄操作' : 'Step 4: Working with Files',
    mcp: lang === 'zh-CN' ? '第5步：MCP 扩展配置' : lang === 'zh-TW' ? '第5步：MCP 擴展配置' : 'Step 5: MCP Extensions',
    vscode: lang === 'zh-CN' ? '第6步：VS Code 集成' : lang === 'zh-TW' ? '第6步：VS Code 集成' : 'Step 6: VS Code Integration',
    workflows: lang === 'zh-CN' ? '第7步：实战工作流' : lang === 'zh-TW' ? '第7步：實戰工作流' : 'Step 7: Real-World Workflows',
    debug: lang === 'zh-CN' ? '第8步：常见问题排查' : lang === 'zh-TW' ? '第8步：常見問題排查' : 'Step 8: Troubleshooting',
    links: lang === 'zh-CN' ? '链接与资源' : lang === 'zh-TW' ? '連結與資源' : 'Links & Resources',
  }
  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>🔷 {l.pageTitle}</h2>
        <p className={styles.subtitle}>{l.pageSub}</p>
      </div>
      <div className={styles.cases}>
        <Card title={l.whatIs}><p style={pStyle}>{l.whatIsBody}</p></Card>
        <Card title={l.req}><Code>{CODE.req}</Code></Card>
        <Card title={l.install}><Code>{CODE.install}</Code></Card>
        <Card title={l.auth}><Code>{CODE.auth}</Code></Card>
        <Card title={l.commands}><Code>{CODE.commands}</Code></Card>
        <Card title={l.files}><Code>{CODE.files}</Code></Card>
        <Card title={l.mcp}><Code>{CODE.mcp}</Code></Card>
        <Card title={l.vscode}><Code>{CODE.vscode}</Code></Card>
        <Card title={l.workflows}><Code>{CODE.workflows}</Code></Card>
        <Card title={l.debug}><Code>{CODE.debug}</Code></Card>
        <Card title={l.links}>
          <ul style={ulStyle}>
            <li><a href="https://www.gemini-cnblog.com/blog/gemini-chinese-official.html" target="_blank" rel="noopener">Gemini CLI 中文完整教程</a></li>
            <li><a href="https://github.com/google-gemini/gemini-cli" target="_blank" rel="noopener">Gemini CLI GitHub</a></li>
            <li><a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">获取免费 API Key</a></li>
            <li><a href="https://ai.google.dev/gemini-api/docs" target="_blank" rel="noopener">Gemini API 官方文档</a></li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
// Code blocks — stay in English (universal terminal commands)
const CODE = {
  req: `# Operating System
- macOS 12+ (Apple Silicon or Intel)
- Linux (Ubuntu 20.04+, Debian 11+, or any glibc 2.31+ distro)
- Windows 10+ (via WSL2 recommended, or native PowerShell)
# Runtime
- Node.js 18.0.0 or higher (LTS 20.x recommended)
- npm 9.0.0 or higher
# Check your versions:
node -v          # Should print v18.x.x or v20.x.x
npm -v           # Should print 9.x.x or 10.x.x
# Install/upgrade via nvm if needed:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
nvm install 20
nvm use 20
# Google API Key (required):
# Get one free at: https://aistudio.google.com/apikey
# Free tier: 100 requests/day`,
  install: `# ==========================================
# Method A: Global npm install (recommended)
# ==========================================
npm install -g @google/gemini-cli
gemini --version    # verify
# ==========================================
# Method B: npx (no install needed)
# ==========================================
npx @google/gemini-cli
# ==========================================
# Method C: Build from source
# ==========================================
git clone https://github.com/google-gemini/gemini-cli.git
cd gemini-cli
npm install && npm run build && npm link
# ==========================================
# Upgrade to latest:
# ==========================================
npm update -g @google/gemini-cli`,
  auth: `# Step 1: Get your API key
# Visit: https://aistudio.google.com/apikey
# Click "Create API Key" → copy the key (starts with "AIza...")
# Step 2: Set as environment variable
export GEMINI_API_KEY="AIzaSyD-xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
# Step 3: Make permanent (bash/zsh)
echo 'export GEMINI_API_KEY="AIzaSyD-xxxxxxxxxxxxxxxxxxxxxxxxxxxx"' >> ~/.bashrc
source ~/.bashrc
# For zsh:
echo 'export GEMINI_API_KEY="AIzaSyD-xxxxxxxxxxxxxxxxxxxxxxxxxxxx"' >> ~/.zshrc
# For fish shell:
set -Ux GEMINI_API_KEY "AIzaSyD-xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
# For Windows PowerShell:
[Environment]::SetEnvironmentVariable("GEMINI_API_KEY", "AIzaSyD-...", "User")
# Step 4: Verify
gemini "Hello, what model are you running on?"
# Should respond → authentication works!`,
  commands: `# ==========================================
# Interactive REPL mode
# ==========================================
gemini                    # Opens chat session. Ctrl+C to exit.
# ==========================================
# One-shot questions
# ==========================================
gemini "Explain the architecture of this project"
gemini "Find all async functions without error handling"
# ==========================================
# File-specific operations
# ==========================================
gemini "Refactor src/auth.ts to use async/await"
gemini "Add TypeScript types to src/api/users.ts"
# ==========================================
# Multi-file operations
# ==========================================
gemini "Rename all 'userId' to 'accountId' across the project"
gemini "Extract duplicate validation into src/utils/validators.ts"
# ==========================================
# Model selection
# ==========================================
gemini --model gemini-2.5-pro "Design a database schema"
gemini --model gemini-2.5-flash "Quick: convert JSON to TS interface"
# Available models:
# - gemini-2.5-pro     → best for complex reasoning & code generation
# - gemini-2.5-flash   → fastest, good for quick edits
# ==========================================
# Context options
# ==========================================
gemini --max-context 1000000 "Analyze this monorepo structure"
gemini --include "src/**/*.ts" "Find all unused imports"
gemini --exclude "node_modules,dist,.git" "Audit security"`,
  files: `# Gemini CLI automatically scans your working directory
# Create new files:
gemini "Create src/middleware/rateLimiter.ts with an Express rate limiter"
# Edit existing files:
gemini "In src/app.ts, add helmet middleware and CORS configuration"
# Generate project scaffold:
gemini "Scaffold a new Express + TypeScript REST API:
  - src/routes/     (user, post, auth)
  - src/middleware/  (auth, errorHandler, validation)
  - src/models/      (user, post)
  - src/services/    (userService, postService)
  - src/utils/       (jwt, password)
  - tests/           (unit, integration)
  - docker-compose.yml
  - .env.example"
# Documentation generation:
gemini "Write JSDoc comments for every exported function in src/utils/"
gemini "Generate API documentation from the Express route files"
# Code review:
gemini "Review all files changed in the last commit for:
  - Security vulnerabilities
  - Performance issues
  - Missing error handling
  - Type safety problems"`,
  mcp: `# MCP extends Gemini CLI with external tools
# Config file: ~/.gemini/mcp.json
mkdir -p ~/.gemini
cat > ~/.gemini/mcp.json << 'EOF'
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-filesystem", "/home/your-username/projects"],
      "description": "Read, write, and manage files on disk"
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-github"],
      "env": { "GITHUB_TOKEN": "ghp_xxxxxxxxxxxx" },
      "description": "Create issues, PRs, manage repos"
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-postgres", "postgresql://user:pass@localhost:5432/mydb"],
      "description": "Query and manage PostgreSQL"
    },
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-brave-search"],
      "env": { "BRAVE_API_KEY": "your-brave-api-key" },
      "description": "Search the web in real-time"
    }
  }
}
EOF
# Restart Gemini CLI — it auto-discovers ~/.gemini/mcp.json
# Verify MCP servers:
gemini "List all available MCP tools"
# Now you can use them:
gemini "Search the web for latest React 19 docs and summarize"
gemini "Create a GitHub issue titled 'Add rate limiting'"`,
  vscode: `# ==========================================
# Method A: VS Code Marketplace
# ==========================================
# 1. Open VS Code → Extensions (Ctrl+Shift+X)
# 2. Search: "Gemini Code Assist" (by Google)
# 3. Install → Reload
# ==========================================
# Method B: CLI install
# ==========================================
code --install-extension google.geminicodeassist
# ==========================================
# Key features after installation:
# ==========================================
# 1. Inline completion: type → gray suggestions → Tab to accept
# 2. Chat panel (Ctrl+Shift+G): ask about your code
# 3. Code generation from comments:
#    // Create a function that validates email format
#    → Gemini fills in the implementation
# 4. Right-click menu:
#    - "Gemini: Explain Code"
#    - "Gemini: Generate Tests"
#    - "Gemini: Refactor"
#    - "Gemini: Find Bugs"`,
  workflows: `# ==========================================
# Workflow 1: New codebase onboarding
# ==========================================
git clone https://github.com/some-org/big-project.git
cd big-project
gemini "Give me a comprehensive overview:
  1. Architecture and tech stack
  2. Directory structure overview
  3. Key entry points
  4. Database schema
  5. API endpoints
  6. Testing strategy"
# ==========================================
# Workflow 2: Implement a feature
# ==========================================
gemini "Add password reset flow:
  1. Create migration for reset_tokens table
  2. Add POST /api/auth/forgot-password
  3. Add POST /api/auth/reset-password
  4. Create email template
  5. Write tests for both endpoints"
# ==========================================
# Workflow 3: Debug production issue
# ==========================================
gemini "Users report 500 errors on checkout. Error:
  'TypeError: Cannot read property price of undefined'
  Please:
  1. Find the source of this bug
  2. Trace back to find where price could be undefined
  3. Propose a fix with defensive checks"
# ==========================================
# Workflow 4: Migration (CJS → ESM)
# ==========================================
gemini "Migrate from CommonJS to ESM:
  1. Convert 'require' to 'import'
  2. Convert 'module.exports' to 'export default'
  3. Update package.json with 'type: module'
  4. Fix __dirname and __filename usage
  5. Verify all imports resolve correctly"`,
  debug: `# Issue: "GEMINI_API_KEY not set"
echo $GEMINI_API_KEY          # verify it's set
source ~/.bashrc               # reload config
# Issue: "Permission denied"
ls -la src/                    # check file permissions
chmod -R u+w src/              # fix write permissions
# Issue: "Node.js version too old"
nvm install 20
nvm use 20
# Issue: "Cannot find module" after update
npm cache clean --force
npm uninstall -g @google/gemini-cli
npm install -g @google/gemini-cli
# Issue: Slow responses
gemini --model gemini-2.5-flash "quick question"
# Issue: Gemini doesn't see my files
pwd                            # verify you're in project root
ls                             # verify files are visible`,
}
