import { useT } from '../contexts/LanguageContext'
import styles from './Page.module.css'

export default function CodexTutorial() {
  const { lang } = useT()
  const l = {
    pageTitle: lang === 'zh-CN' ? 'Codex CLI 完整安装教程' : lang === 'zh-TW' ? 'Codex CLI 完整安裝教學' : 'Codex CLI — Complete Setup Guide',
    pageSub: lang === 'zh-CN' ? 'OpenAI 开源 CLI 编程助手 · 多 Agent 并行 · 本地沙箱 · GPT 驱动' : lang === 'zh-TW' ? 'OpenAI 開源 CLI 編程助手 · 多 Agent 並行 · 本地沙箱 · GPT 驅動' : 'OpenAI Open-Source CLI Coding Agent · Multi-Agent · Local Sandbox · GPT-Powered',
    whatIs: lang === 'zh-CN' ? '什么是 Codex CLI？' : lang === 'zh-TW' ? '什麼是 Codex CLI？' : 'What is Codex CLI?',
    whatIsBody: lang === 'zh-CN' ? 'Codex CLI 是 OpenAI 官方开源的命令行 AI 编程助手。不同于简单的聊天机器人，Codex 能自主规划、执行和迭代任务。它运行在本地沙箱中，支持审批控制，支持多 Agent 并行工作，兼容任何 OpenAI 兼容 API——包括 Azure、Ollama（本地模型）和 DeepSeek。' : lang === 'zh-TW' ? 'Codex CLI 是 OpenAI 官方開源的命令列 AI 編程助手。不同於簡單的聊天機器人，Codex 能自主規劃、執行和迭代任務。它運行在本地沙箱中，支援審批控制，支援多 Agent 並行工作，相容任何 OpenAI 相容 API——包括 Azure、Ollama（本地模型）和 DeepSeek。' : 'Codex CLI is OpenAI\'s official open-source command-line AI coding agent. Unlike a simple chat bot, Codex plans, executes, and iterates autonomously. It runs in a local sandbox with approval controls, supports multi-agent parallelism, and works with any OpenAI-compatible API — including Azure, Ollama (local models), and DeepSeek.',
    req: lang === 'zh-CN' ? '系统要求' : lang === 'zh-TW' ? '系統要求' : 'System Requirements',
    install: lang === 'zh-CN' ? '第1步：安装' : lang === 'zh-TW' ? '第1步：安裝' : 'Step 1: Installation',
    config: lang === 'zh-CN' ? '第2步：API 配置（四种方式）' : lang === 'zh-TW' ? '第2步：API 配置（四種方式）' : 'Step 2: API Configuration (4 providers)',
    commands: lang === 'zh-CN' ? '第3步：核心命令大全' : lang === 'zh-TW' ? '第3步：核心命令大全' : 'Step 3: Command Reference',
    safety: lang === 'zh-CN' ? '第4步：审批模式与安全' : lang === 'zh-TW' ? '第4步：審批模式與安全' : 'Step 4: Approval Modes & Safety',
    agents: lang === 'zh-CN' ? '第5步：多 Agent 并行模式' : lang === 'zh-TW' ? '第5步：多 Agent 並行模式' : 'Step 5: Multi-Agent Mode',
    ide: lang === 'zh-CN' ? '第6步：IDE 集成' : lang === 'zh-TW' ? '第6步：IDE 集成' : 'Step 6: IDE Integration',
    workflows: lang === 'zh-CN' ? '第7步：实战工作流' : lang === 'zh-TW' ? '第7步：實戰工作流' : 'Step 7: Real-World Workflows',
    debug: lang === 'zh-CN' ? '第8步：常见问题排查' : lang === 'zh-TW' ? '第8步：常見問題排查' : 'Step 8: Troubleshooting',
    links: lang === 'zh-CN' ? '链接与资源' : lang === 'zh-TW' ? '連結與資源' : 'Links & Resources',
  }

  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>🟢 {l.pageTitle}</h2>
        <p className={styles.subtitle}>{l.pageSub}</p>
      </div>
      <div className={styles.cases}>
        <Card title={l.whatIs}><p style={pStyle}>{l.whatIsBody}</p></Card>
        <Card title={l.req}><Code>{C.req}</Code></Card>
        <Card title={l.install}><Code>{C.install}</Code></Card>
        <Card title={l.config}><Code>{C.config}</Code></Card>
        <Card title={l.commands}><Code>{C.commands}</Code></Card>
        <Card title={l.safety}><Code>{C.safety}</Code></Card>
        <Card title={l.agents}><Code>{C.agents}</Code></Card>
        <Card title={l.ide}><Code>{C.ide}</Code></Card>
        <Card title={l.workflows}><Code>{C.workflows}</Code></Card>
        <Card title={l.debug}><Code>{C.debug}</Code></Card>
        <Card title={l.links}>
          <ul style={ulStyle}>
            <li><a href="https://blog.csdn.net/2503_94434664/article/details/159251011" target="_blank" rel="noopener">Codex CLI 完整教程</a></li>
            <li><a href="https://github.com/openai/codex" target="_blank" rel="noopener">Codex CLI GitHub</a></li>
            <li><a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener">OpenAI API Keys</a></li>
            <li><a href="https://ollama.com/download" target="_blank" rel="noopener">Ollama 下载（本地模型）</a></li>
            <li><a href="https://platform.deepseek.com/api_keys" target="_blank" rel="noopener">DeepSeek API（低价替代）</a></li>
          </ul>
        </Card>
      </div>
    </div>
  )
}

const C = {
  req: `# Operating System
- macOS 12+ / Linux (Ubuntu 20.04+) / Windows 10+ (WSL2)
- Node.js 18.0.0+ (LTS 20.x recommended)
- npm 9.0.0+

# Check versions:
node -v && npm -v

# API Key (pick one):
# - OpenAI:  https://platform.openai.com/api-keys
# - Azure:   enterprise, existing Azure subscription
# - Ollama:  local, free, no API key needed
# - DeepSeek: cheap, OpenAI-compatible
#   https://platform.deepseek.com/api_keys

# Git (for diff, branch, commit integration):
git --version    # 2.30+`,

  install: `# ==========================================
# Method A: Global npm install (recommended)
# ==========================================
npm install -g @openai/codex
codex --version && codex --help

# ==========================================
# Method B: npx (no install)
# ==========================================
npx @openai/codex "Summarize this project"

# ==========================================
# Method C: Build from source
# ==========================================
git clone https://github.com/openai/codex.git
cd codex && npm install && npm run build && npm link

# Update:
npm update -g @openai/codex`,

  config: `# ==========================================
# Option A: OpenAI (default, most capable)
# ==========================================
export OPENAI_API_KEY="sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
echo 'export OPENAI_API_KEY="sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxx"' >> ~/.bashrc
source ~/.bashrc

# ==========================================
# Option B: Azure OpenAI (enterprise)
# ==========================================
export AZURE_OPENAI_API_KEY="your-azure-key"
export AZURE_OPENAI_ENDPOINT="https://your-resource.openai.azure.com"
export AZURE_OPENAI_DEPLOYMENT="gpt-4.1"

# ==========================================
# Option C: Ollama (local, free, offline!)
# ==========================================
# Install Ollama first: https://ollama.com/download
ollama pull llama3.1:70b
ollama pull codellama:34b

# Configure Codex to use local Ollama:
export OPENAI_BASE_URL="http://localhost:11434/v1"
export OPENAI_API_KEY="ollama"

# ==========================================
# Option D: DeepSeek (cheap, good quality)
# ==========================================
export OPENAI_BASE_URL="https://api.deepseek.com/v1"
export OPENAI_API_KEY="sk-ds-xxxxxxxxxxxxxxxxxxxxxxxx"

# Verify:
codex --model gpt-4.1 "Hello, confirm connection"`,

  commands: `# ==========================================
# Interactive REPL mode
# ==========================================
codex              # Plans → executes → verifies. Ctrl+C to exit.

# ==========================================
# One-shot tasks
# ==========================================
codex "Create REST API POST /api/users with Express + TypeScript"
codex "Add JWT auth middleware to the Express app"
codex "Set up Prisma ORM with SQLite and create User + Post models"
codex "Write unit tests for src/services/authService.ts with Vitest"

# ==========================================
# File-specific
# ==========================================
codex src/server.ts "Add CORS, helmet, rate limiting middleware"
codex src/models/user.ts "Add email validation and password hashing"

# ==========================================
# Model and provider flags
# ==========================================
codex --model gpt-4.1 "Complex refactoring"
codex --model gpt-4.1-mini "Quick fix"
codex --model deepseek-chat --base-url https://api.deepseek.com/v1 "Tests"
codex --model llama3.1:70b --base-url http://localhost:11434/v1 "Analysis"

# ==========================================
# Context flags
# ==========================================
codex --max-turns 20 "Complex multi-step migration"
codex --context-window 128000 "Analyze entire monorepo"
codex --include "src/**/*.ts" --exclude "**/*.test.ts" "Find dead code"`,

  safety: `# ==========================================
# Approval modes (--approval-mode):
# ==========================================
# "default" — Ask before shell commands, file edits (RECOMMENDED)
codex --approval-mode default "Delete all console.log statements"

# "auto" — Auto-approve reads and analyses
codex --approval-mode auto "Find all TODO comments in the project"

# "never" — Always ask, never auto-approve (MOST CAUTIOUS)
codex --approval-mode never "Refactor auth system"

# ==========================================
# Preview plan before executing:
# ==========================================
codex --plan "Migrate from JavaScript to TypeScript"
# Shows exact steps. You approve/modify/reject each one.

# ==========================================
# Dry run (see what WOULD happen, no changes):
# ==========================================
codex --dry-run "Delete all files older than 30 days"

# ==========================================
# Diff mode (review changes before applying):
# ==========================================
codex --diff "Refactor src/utils/helpers.ts"
# Shows git-style diff. Review, then approve.`,

  agents: `# ==========================================
# Parallel agents (dramatically faster for large tasks)
# ==========================================
codex --agents 3 "Write tests for all route files"
# Spawns 3 agents, each handling different files simultaneously.

# ==========================================
# Named agents with specific roles:
# ==========================================
codex \\
  --agent "architect: Design DB schema and API structure" \\
  --agent "backend: Implement Express routes and controllers" \\
  --agent "frontend: Create React components and API client" \\
  "Build a full-stack task management app"

# ==========================================
# Agent pipeline (sequential stages):
# ==========================================
codex \\
  --stage "design: Plan the feature architecture" \\
  --stage "implement: Write the code" \\
  --stage "test: Write and run tests" \\
  --stage "review: Code review for bugs and security" \\
  "Add real-time notifications with WebSockets"

# ==========================================
# Different models per role:
# ==========================================
codex \\
  --agent "planner:gpt-4.1:Design the system" \\
  --agent "coder:gpt-4.1-mini:Write the code" \\
  --agent "reviewer:gpt-4.1:Review everything" \\
  "Build an e-commerce cart microservice"`,

  ide: `# ==========================================
# VS Code Extension:
# ==========================================
# Marketplace: search "OpenAI Codex" → Install
# Or CLI:
code --install-extension openai.codex-vscode

# Keybindings:
# Alt+Enter       → "Fix with Codex"
# Ctrl+Shift+I    → "Explain with Codex"
# Ctrl+Shift+T    → "Generate Tests"
# Ctrl+Shift+R    → "Refactor with Codex"

# ==========================================
# JetBrains (IntelliJ, WebStorm, PyCharm):
# ==========================================
# Settings → Plugins → "OpenAI Codex" → Install → Restart
# Alt+Enter → Codex in context menu

# ==========================================
# Cursor Editor (native support):
# ==========================================
# Settings → Models → Add "codex" provider
# Ctrl+K → Codex prompt
# Ctrl+L → Codex chat panel`,

  workflows: `# ==========================================
# Workflow 1: Code Review Before Merge
# ==========================================
codex --approval-mode default \\
  "Review all changed files:
   1. Security vulnerabilities (SQL injection, XSS, etc.)
   2. Error handling consistency
   3. TypeScript type completeness
   4. Test coverage for new code
   Output a structured review report."

# ==========================================
# Workflow 2: Full-Stack Feature
# ==========================================
codex "Build 'User Favorites' feature:
  DB: favorites table (userId, itemId, createdAt)
  Backend: POST/DELETE/GET /api/favorites
  Frontend: Favorite button + favorites list page
  Tests: Unit + component + E2E"

# ==========================================
# Workflow 3: Database Migration (SQL → Prisma)
# ==========================================
codex "Migrate from raw SQL to Prisma ORM:
  1. Analyze existing schema in src/db/schema.sql
  2. Create Prisma schema with equivalent models
  3. Generate migration files
  4. Update all repository files
  5. Update tests"`,

  debug: `# Issue: "OPENAI_API_KEY not set"
echo $OPENAI_API_KEY           # verify
source ~/.bashrc

# Issue: "Rate limit exceeded"
# Wait 60s or switch to cheaper model:
codex --model gpt-4.1-mini "..."

# Issue: Codex can't find my files
codex --include "src/**/*.ts" "..."

# Issue: Ollama connection refused
ollama serve                    # start in separate terminal
curl http://localhost:11434     # verify: "Ollama is running"

# Issue: Multi-agent tasks hang
codex --agents 1 "..."          # single agent mode`,
}

const pStyle: React.CSSProperties = { color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: 14 }
const ulStyle: React.CSSProperties = { paddingLeft: 20, color: 'var(--text-secondary)', lineHeight: 2.2 }

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: 'var(--bg-card)', borderRadius: 12, padding: 22, boxShadow: 'var(--shadow)', marginBottom: 16 }}>
      <h3 style={{ marginBottom: 12, color: 'var(--text)', fontSize: 16 }}>{title}</h3>
      {children}
    </div>
  )
}

function Code({ children }: { children: string }) {
  return (
    <pre style={{ background: '#0f172a', color: '#e2e8f0', borderRadius: 8, padding: 16, fontSize: 13, lineHeight: 1.6, overflowX: 'auto', whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: 0 }}>
      <code>{children}</code>
    </pre>
  )
}
