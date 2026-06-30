import{j as e}from"./vendor-react-rUZxkNKj.js";import{u as d,s as i}from"./index-BSMIbDq7.js";import{C as r,p as C,a as l,u as I}from"./TutorialCard-xkDXIy3J.js";import{L as P}from"./LinkNav-VR_2Kpic.js";import"./vendor-libs-CTdZNLIH.js";function S(){const{lang:t}=d(),o={pageTitle:t==="zh-CN"?"Gemini CLI 完整安装教程":t==="zh-TW"?"Gemini CLI 完整安裝教學":"Gemini CLI — Complete Setup Guide",pageSub:t==="zh-CN"?"Google 官方 CLI 编程助手 · 开源 · MCP 原生支持 · 跨平台":t==="zh-TW"?"Google 官方 CLI 編程助手 · 開源 · MCP 原生支持 · 跨平台":"Google Official CLI Coding Agent · Open Source · MCP Native · Multi-Platform",whatIs:t==="zh-CN"?"什么是 Gemini CLI？":t==="zh-TW"?"什麼是 Gemini CLI？":"What is Gemini CLI?",whatIsBody:t==="zh-CN"?"Gemini CLI 是 Google 官方开源的命令行 AI 编程助手。它直接运行在终端中，能理解整个代码库，可以读取、编写、编辑和重构代码。支持 MCP（模型上下文协议）扩展能力，兼容 macOS / Linux / Windows，通过 Google API Key 即可免费用于个人开发。":t==="zh-TW"?"Gemini CLI 是 Google 官方開源的命令列 AI 編程助手。它直接運行在終端中，能理解整個程式碼庫，可以讀取、編寫、編輯和重構程式碼。支援 MCP（模型上下文協議）擴展能力，相容 macOS / Linux / Windows，透過 Google API Key 即可免費用於個人開發。":"Gemini CLI is Google's official open-source command-line AI coding agent. It runs directly in your terminal, understands your entire codebase, and can read, write, edit, and refactor code. It supports Model Context Protocol (MCP) for extending capabilities, works on macOS / Linux / Windows, and is free for personal use with a Google API key.",req:t==="zh-CN"?"系统要求":t==="zh-TW"?"系統要求":"System Requirements",install:t==="zh-CN"?"第1步：安装（三种方式）":t==="zh-TW"?"第1步：安裝（三種方式）":"Step 1: Installation (3 methods)",auth:t==="zh-CN"?"第2步：认证配置":t==="zh-TW"?"第2步：認證配置":"Step 2: Authentication",commands:t==="zh-CN"?"第3步：基础命令大全":t==="zh-TW"?"第3步：基礎命令大全":"Step 3: Command Reference",files:t==="zh-CN"?"第4步：文件与目录操作":t==="zh-TW"?"第4步：檔案與目錄操作":"Step 4: Working with Files",mcp:t==="zh-CN"?"第5步：MCP 扩展配置":t==="zh-TW"?"第5步：MCP 擴展配置":"Step 5: MCP Extensions",vscode:t==="zh-CN"||t==="zh-TW"?"第6步：VS Code 集成":"Step 6: VS Code Integration",workflows:t==="zh-CN"?"第7步：实战工作流":t==="zh-TW"?"第7步：實戰工作流":"Step 7: Real-World Workflows",debug:t==="zh-CN"?"第8步：常见问题排查":t==="zh-TW"?"第8步：常見問題排查":"Step 8: Troubleshooting",links:t==="zh-CN"?"链接与资源":t==="zh-TW"?"連結與資源":"Links & Resources"};return e.jsxs("div",{className:i.page,children:[e.jsxs("div",{className:i.head,children:[e.jsxs("h2",{className:i.title,children:["🔷 ",o.pageTitle]}),e.jsx("p",{className:i.subtitle,children:o.pageSub})]}),e.jsxs("div",{className:i.cases,children:[e.jsx(r,{title:o.whatIs,children:e.jsx("p",{style:C,children:o.whatIsBody})}),e.jsx(r,{title:o.req,children:e.jsx(l,{children:p.req})}),e.jsx(r,{title:o.install,children:e.jsx(l,{children:p.install})}),e.jsx(r,{title:o.auth,children:e.jsx(l,{children:p.auth})}),e.jsx(r,{title:o.commands,children:e.jsx(l,{children:p.commands})}),e.jsx(r,{title:o.files,children:e.jsx(l,{children:p.files})}),e.jsx(r,{title:o.mcp,children:e.jsx(l,{children:p.mcp})}),e.jsx(r,{title:o.vscode,children:e.jsx(l,{children:p.vscode})}),e.jsx(r,{title:o.workflows,children:e.jsx(l,{children:p.workflows})}),e.jsx(r,{title:o.debug,children:e.jsx(l,{children:p.debug})}),e.jsx(r,{title:o.links,children:e.jsxs("ul",{style:I,children:[e.jsx("li",{children:e.jsx("a",{href:"https://www.gemini-cnblog.com/blog/gemini-chinese-official.html",target:"_blank",rel:"noopener",children:"Gemini CLI 中文完整教程"})}),e.jsx("li",{children:e.jsx("a",{href:"https://github.com/google-gemini/gemini-cli",target:"_blank",rel:"noopener",children:"Gemini CLI GitHub"})}),e.jsx("li",{children:e.jsx("a",{href:"https://aistudio.google.com/apikey",target:"_blank",rel:"noopener",children:"获取免费 API Key"})}),e.jsx("li",{children:e.jsx("a",{href:"https://ai.google.dev/gemini-api/docs",target:"_blank",rel:"noopener",children:"Gemini API 官方文档"})})]})})]})]})}const p={req:`# Operating System
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
# Free tier: 100 requests/day`,install:`# ==========================================
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
npm update -g @google/gemini-cli`,auth:`# Step 1: Get your API key
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
# Should respond → authentication works!`,commands:`# ==========================================
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
gemini --exclude "node_modules,dist,.git" "Audit security"`,files:`# Gemini CLI automatically scans your working directory

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
  - Type safety problems"`,mcp:`# MCP extends Gemini CLI with external tools
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
gemini "Create a GitHub issue titled 'Add rate limiting'"`,vscode:`# ==========================================
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
#    - "Gemini: Find Bugs"`,workflows:`# ==========================================
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
  5. Verify all imports resolve correctly"`,debug:`# Issue: "GEMINI_API_KEY not set"
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
ls                             # verify files are visible`};function j(){const{lang:t}=d(),o={pageTitle:t==="zh-CN"?"Codex CLI 完整安装教程":t==="zh-TW"?"Codex CLI 完整安裝教學":"Codex CLI — Complete Setup Guide",pageSub:t==="zh-CN"?"OpenAI 开源 CLI 编程助手 · 多 Agent 并行 · 本地沙箱 · GPT 驱动":t==="zh-TW"?"OpenAI 開源 CLI 編程助手 · 多 Agent 並行 · 本地沙箱 · GPT 驅動":"OpenAI Open-Source CLI Coding Agent · Multi-Agent · Local Sandbox · GPT-Powered",whatIs:t==="zh-CN"?"什么是 Codex CLI？":t==="zh-TW"?"什麼是 Codex CLI？":"What is Codex CLI?",whatIsBody:t==="zh-CN"?"Codex CLI 是 OpenAI 官方开源的命令行 AI 编程助手。不同于简单的聊天机器人，Codex 能自主规划、执行和迭代任务。它运行在本地沙箱中，支持审批控制，支持多 Agent 并行工作，兼容任何 OpenAI 兼容 API——包括 Azure、Ollama（本地模型）和 DeepSeek。":t==="zh-TW"?"Codex CLI 是 OpenAI 官方開源的命令列 AI 編程助手。不同於簡單的聊天機器人，Codex 能自主規劃、執行和迭代任務。它運行在本地沙箱中，支援審批控制，支援多 Agent 並行工作，相容任何 OpenAI 相容 API——包括 Azure、Ollama（本地模型）和 DeepSeek。":"Codex CLI is OpenAI's official open-source command-line AI coding agent. Unlike a simple chat bot, Codex plans, executes, and iterates autonomously. It runs in a local sandbox with approval controls, supports multi-agent parallelism, and works with any OpenAI-compatible API — including Azure, Ollama (local models), and DeepSeek.",req:t==="zh-CN"?"系统要求":t==="zh-TW"?"系統要求":"System Requirements",install:t==="zh-CN"?"第1步：安装":t==="zh-TW"?"第1步：安裝":"Step 1: Installation",config:t==="zh-CN"?"第2步：API 配置（四种方式）":t==="zh-TW"?"第2步：API 配置（四種方式）":"Step 2: API Configuration (4 providers)",commands:t==="zh-CN"||t==="zh-TW"?"第3步：核心命令大全":"Step 3: Command Reference",safety:t==="zh-CN"?"第4步：审批模式与安全":t==="zh-TW"?"第4步：審批模式與安全":"Step 4: Approval Modes & Safety",agents:t==="zh-CN"?"第5步：多 Agent 并行模式":t==="zh-TW"?"第5步：多 Agent 並行模式":"Step 5: Multi-Agent Mode",ide:t==="zh-CN"||t==="zh-TW"?"第6步：IDE 集成":"Step 6: IDE Integration",workflows:t==="zh-CN"?"第7步：实战工作流":t==="zh-TW"?"第7步：實戰工作流":"Step 7: Real-World Workflows",debug:t==="zh-CN"?"第8步：常见问题排查":t==="zh-TW"?"第8步：常見問題排查":"Step 8: Troubleshooting",links:t==="zh-CN"?"链接与资源":t==="zh-TW"?"連結與資源":"Links & Resources"};return e.jsxs("div",{className:i.page,children:[e.jsxs("div",{className:i.head,children:[e.jsxs("h2",{className:i.title,children:["🟢 ",o.pageTitle]}),e.jsx("p",{className:i.subtitle,children:o.pageSub})]}),e.jsxs("div",{className:i.cases,children:[e.jsx(c,{title:o.whatIs,children:e.jsx("p",{style:z,children:o.whatIsBody})}),e.jsx(c,{title:o.req,children:e.jsx(m,{children:h.req})}),e.jsx(c,{title:o.install,children:e.jsx(m,{children:h.install})}),e.jsx(c,{title:o.config,children:e.jsx(m,{children:h.config})}),e.jsx(c,{title:o.commands,children:e.jsx(m,{children:h.commands})}),e.jsx(c,{title:o.safety,children:e.jsx(m,{children:h.safety})}),e.jsx(c,{title:o.agents,children:e.jsx(m,{children:h.agents})}),e.jsx(c,{title:o.ide,children:e.jsx(m,{children:h.ide})}),e.jsx(c,{title:o.workflows,children:e.jsx(m,{children:h.workflows})}),e.jsx(c,{title:o.debug,children:e.jsx(m,{children:h.debug})}),e.jsx(c,{title:o.links,children:e.jsxs("ul",{style:T,children:[e.jsx("li",{children:e.jsx("a",{href:"https://blog.csdn.net/2503_94434664/article/details/159251011",target:"_blank",rel:"noopener",children:"Codex CLI 完整教程"})}),e.jsx("li",{children:e.jsx("a",{href:"https://github.com/openai/codex",target:"_blank",rel:"noopener",children:"Codex CLI GitHub"})}),e.jsx("li",{children:e.jsx("a",{href:"https://platform.openai.com/api-keys",target:"_blank",rel:"noopener",children:"OpenAI API Keys"})}),e.jsx("li",{children:e.jsx("a",{href:"https://ollama.com/download",target:"_blank",rel:"noopener",children:"Ollama 下载（本地模型）"})}),e.jsx("li",{children:e.jsx("a",{href:"https://platform.deepseek.com/api_keys",target:"_blank",rel:"noopener",children:"DeepSeek API（低价替代）"})})]})})]})]})}const h={req:`# Operating System
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
git --version    # 2.30+`,install:`# ==========================================
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
npm update -g @openai/codex`,config:`# ==========================================
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
codex --model gpt-4.1 "Hello, confirm connection"`,commands:`# ==========================================
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
codex --include "src/**/*.ts" --exclude "**/*.test.ts" "Find dead code"`,safety:`# ==========================================
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
# Shows git-style diff. Review, then approve.`,agents:`# ==========================================
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
  "Build an e-commerce cart microservice"`,ide:`# ==========================================
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
# Ctrl+L → Codex chat panel`,workflows:`# ==========================================
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
  5. Update tests"`,debug:`# Issue: "OPENAI_API_KEY not set"
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
codex --agents 1 "..."          # single agent mode`},z={color:"var(--text-secondary)",lineHeight:1.8,fontSize:14},T={paddingLeft:20,color:"var(--text-secondary)",lineHeight:2.2};function c({title:t,children:o}){return e.jsxs("div",{style:{background:"var(--bg-card)",borderRadius:12,padding:22,boxShadow:"var(--shadow)",marginBottom:16},children:[e.jsx("h3",{style:{marginBottom:12,color:"var(--text)",fontSize:16},children:t}),o]})}function m({children:t}){return e.jsx("pre",{style:{background:"#0f172a",color:"#e2e8f0",borderRadius:8,padding:16,fontSize:13,lineHeight:1.6,overflowX:"auto",whiteSpace:"pre-wrap",wordBreak:"break-word",margin:0},children:e.jsx("code",{children:t})})}function N(){const{lang:t}=d(),o={pageTitle:t==="zh-CN"?"DeepSeek 完整教程":t==="zh-TW"?"DeepSeek 完整教學":"DeepSeek — Complete Guide",pageSub:t==="zh-CN"?"API接入 · 本地部署 · DeepThink深度推理 · 极致性价比":t==="zh-TW"?"API接入 · 本地部署 · DeepThink深度推理 · 極致性價比":"API Access · Local Deploy · DeepThink · Best Value",whatIs:t==="zh-CN"?"什么是 DeepSeek？":t==="zh-TW"?"什麼是 DeepSeek？":"What is DeepSeek?",whatIsBody:t==="zh-CN"?"DeepSeek（深度求索）是国产大模型中的性价比之王。V3版本在编程和数学上接近GPT-4，R1版本引入DeepThink深度推理能力。API价格仅为GPT-4的1/27，支持100万token超长上下文聊天。支持本地部署（Ollama），完全免费。":t==="zh-TW"?"DeepSeek（深度求索）是國產大模型中的性價比之王。V3版本在程式設計和數學上接近GPT-4，R1版本引入DeepThink深度推理能力。API價格僅為GPT-4的1/27，支持100萬token超長上下文聊天。":"DeepSeek is the best-value Chinese LLM. V3 rivals GPT-4 in coding and math, R1 adds DeepThink reasoning. API costs 1/27 of GPT-4, supports 1M token context. Available locally via Ollama, completely free.",step1:t==="zh-CN"?"第1步：网页版 & API":t==="zh-TW"?"第1步：網頁版 & API":"Step 1: Web & API",step2:t==="zh-CN"||t==="zh-TW"?"第2步：本地部署 (Ollama)":"Step 2: Local Deploy",step3:t==="zh-CN"||t==="zh-TW"?"第3步：DeepThink 深度推理":"Step 3: DeepThink Reasoning",step4:t==="zh-CN"||t==="zh-TW"?"第4步：VS Code 集成":"Step 4: VS Code Integration",links:t==="zh-CN"?"链接与资源":t==="zh-TW"?"連結與資源":"Links & Resources"};return e.jsxs("div",{className:i.page,children:[e.jsxs("div",{className:i.head,children:[e.jsxs("h2",{className:i.title,children:["🐋 ",o.pageTitle]}),e.jsx("p",{className:i.subtitle,children:o.pageSub})]}),e.jsxs("div",{className:i.cases,children:[e.jsx(r,{title:o.whatIs,children:e.jsx("p",{style:C,children:o.whatIsBody})}),e.jsx(r,{title:o.step1,children:e.jsx(l,{children:g.step1})}),e.jsx(r,{title:o.step2,children:e.jsx(l,{children:g.step2})}),e.jsx(r,{title:o.step3,children:e.jsx(l,{children:g.step3})}),e.jsx(r,{title:o.step4,children:e.jsx(l,{children:g.step4})}),e.jsx(r,{title:o.links,children:e.jsxs("ul",{style:I,children:[e.jsx("li",{children:e.jsx("a",{href:"https://chat.deepseek.com/",target:"_blank",rel:"noopener",children:"DeepSeek 网页版"})}),e.jsx("li",{children:e.jsx("a",{href:"https://platform.deepseek.com/",target:"_blank",rel:"noopener",children:"DeepSeek API 平台"})}),e.jsx("li",{children:e.jsx("a",{href:"https://ollama.com/library/deepseek-r1",target:"_blank",rel:"noopener",children:"Ollama DeepSeek-R1"})}),e.jsx("li",{children:e.jsx("a",{href:"https://github.com/deepseek-ai/DeepSeek-V3",target:"_blank",rel:"noopener",children:"DeepSeek-V3 GitHub"})})]})})]})]})}const g={step1:`👇 网页版直接使用：https://chat.deepseek.com/
👇 API 平台注册：https://platform.deepseek.com/ （新用户送 500万 tokens）

# 网页版（免费）— 注册即可用，支持文件上传、联网搜索

# API 接入（超低价）
# 新用户赠送 500万 tokens 免费额度

# API 价格（人民币）：
# DeepSeek-V3:  ¥2 / 百万 tokens（输入） ¥8 / 百万 tokens（输出）
# DeepSeek-R1:  ¥4 / 百万 tokens（输入） ¥16 / 百万 tokens（输出）
# 对比 GPT-4:   $30 / 百万 tokens（输入） $60 / 百万 tokens（输出）
# DeepSeek 约为 GPT-4 价格的 1/27 ！

# Python 调用 DeepSeek API：
import openai
client = openai.OpenAI(
    api_key="sk-xxxxxxxxxxxxxxxx",
    base_url="https://api.deepseek.com"
)
response = client.chat.completions.create(
    model="deepseek-chat",  # V3
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Explain quantum computing in simple terms."}
    ],
    max_tokens=1024,
    temperature=0.7,
    stream=False
)
print(response.choices[0].message.content)`,step2:`👇 下载 Ollama：https://ollama.com/
👇 LM Studio（图形界面）：https://lmstudio.ai/

# DeepSeek 本地部署（免费 · 离线 · 隐私）

# 方式 A：Ollama（推荐，一行命令）

# 下载 DeepSeek-R1（7B 蒸馏版，8GB 显存）：
ollama pull deepseek-r1:7b
# 运行：
ollama run deepseek-r1:7b
# 现在可以在终端直接聊天！

# 更大的模型：
ollama pull deepseek-r1:14b   # 16GB 显存
ollama pull deepseek-r1:32b   # 24GB 显存
ollama pull deepseek-r1:70b   # 48GB 显存

# 方式 B：LM Studio（图形界面）
# 下载: https://lmstudio.ai/
# 搜索 "DeepSeek" → 下载 → 一键运行
# 支持 GPU 加速，有聊天界面

# 方式 C：vLLM（生产环境）
pip install vllm
vllm serve deepseek-ai/DeepSeek-R1-Distill-Qwen-7B \\
  --max-model-len 32768 --gpu-memory-utilization 0.9

# 本地模型优势：
# - 完全免费，无需API付费
# - 数据不出本地，隐私安全
# - 离线可用，无网络也能用`,step3:`# DeepSeek-R1 DeepThink 深度推理模式

# R1 的独特能力：在回答前先"思考"
# 会展示完整的推理链（Chain of Thought）

# 触发 DeepThink 的提示词技巧：
"""
请一步一步思考这个问题：
[你的问题]

在回答之前，请：
1. 列出所有已知条件
2. 分析可能的解法
3. 验证每个解法的正确性
4. 给出最终答案并解释原因
"""

# Web 界面：直接勾选 "DeepThink (R1)" 模式
# API 调用：使用 model="deepseek-reasoner"

# Python 示例：
response = client.chat.completions.create(
    model="deepseek-reasoner",  # R1 DeepThink
    messages=[{"role": "user", "content": "Prove that sqrt(2) is irrational"}]
)
# 响应包含 reasoning_content（推理过程） 和 content（最终答案）

# 适用场景：
# - 数学证明、逻辑推理
# - 代码调试、复杂bug分析
# - 学术研究、论文审阅
# - 商业分析、战略决策`,step4:`# VS Code 集成 DeepSeek

# 方式 A：Continue 插件（免费开源）
# 1. VS Code → Extensions → 搜索 "Continue"
# 2. 安装后，在 config.json 中添加：
{
  "models": [{
    "title": "DeepSeek V3",
    "provider": "deepseek",
    "model": "deepseek-chat",
    "apiKey": "sk-xxxxxxxx"
  }, {
    "title": "DeepSeek R1",
    "provider": "deepseek",
    "model": "deepseek-reasoner",
    "apiKey": "sk-xxxxxxxx"
  }]
}

# 方式 B：Cline 插件（Agent模式）
# 1. VS Code → Extensions → "Cline"
# 2. 设置 API Provider → "DeepSeek"
# 3. 填入 API Key → 即可使用
# Cline 可以：读写文件、执行终端命令、搜索网络

# 方式 C：本地 Ollama + Continue
# 无需 API Key，完全免费：
{
  "models": [{
    "title": "DeepSeek-R1 7B (Local)",
    "provider": "ollama",
    "model": "deepseek-r1:7b"
  }]
}`};function O(){const{lang:t}=d(),o={pageTitle:t==="zh-CN"?"Claude Code 完整安装教程":t==="zh-TW"?"Claude Code 完整安裝教學":"Claude Code — Complete Setup Guide",pageSub:t==="zh-CN"?"Anthropic CLI · API接入 · MCP扩展 · 实战技巧":t==="zh-TW"?"Anthropic CLI · API接入 · MCP擴展 · 實戰技巧":"Anthropic CLI · API Setup · MCP Extensions · Pro Tips",whatIs:t==="zh-CN"?"什么是 Claude Code？":t==="zh-TW"?"什麼是 Claude Code？":"What is Claude Code?",whatIsBody:t==="zh-CN"?"Claude Code 是 Anthropic 官方推出的终端 AI 编程助手。它直接在终端运行，能理解整个代码库、读写文件、执行命令、管理 Git，还能通过 MCP 协议扩展无限能力。2025 年最热门 AI 编程工具之一，开发者必备。":t==="zh-TW"?"Claude Code 是 Anthropic 官方推出的終端 AI 編程助手。它直接在終端運行，能理解整個程式庫、讀寫檔案、執行命令、管理 Git，還能通過 MCP 協議擴展無限能力。":"Claude Code is Anthropic's official terminal AI coding agent. It runs in your terminal, understands your entire codebase, reads/writes files, executes commands, manages Git, and extends via MCP protocol. One of the hottest AI dev tools of 2025.",step1:t==="zh-CN"?"第1步：安装 (3种方式)":t==="zh-TW"?"第1步：安裝 (3種方式)":"Step 1: Installation",step2:t==="zh-CN"?"第2步：认证配置 (4种方式)":t==="zh-TW"?"第2步：認證配置 (4種方式)":"Step 2: Authentication",step3:t==="zh-CN"?"第3步：基础命令速查":t==="zh-TW"?"第3步：基礎命令速查":"Step 3: Command Reference",step4:t==="zh-CN"?"第4步：MCP 扩展配置":t==="zh-TW"?"第4步：MCP 擴展配置":"Step 4: MCP Extensions",step5:t==="zh-CN"?"第5步：实战工作流":t==="zh-TW"?"第5步：實戰工作流":"Step 5: Real Workflows",step6:t==="zh-CN"?"第6步：国内使用方案":t==="zh-TW"?"第6步：國內使用方案":"Step 6: China Access Tips",links:t==="zh-CN"?"链接与资源":t==="zh-TW"?"連結與資源":"Links & Resources"};return e.jsxs("div",{className:i.page,children:[e.jsxs("div",{className:i.head,children:[e.jsxs("h2",{className:i.title,children:["🟠 ",o.pageTitle]}),e.jsx("p",{className:i.subtitle,children:o.pageSub})]}),e.jsxs("div",{className:i.cases,children:[e.jsx(r,{title:o.whatIs,children:e.jsx("p",{style:C,children:o.whatIsBody})}),e.jsx(r,{title:o.step1,children:e.jsx(l,{children:u.step1})}),e.jsx(r,{title:o.step2,children:e.jsx(l,{children:u.step2})}),e.jsx(r,{title:o.step3,children:e.jsx(l,{children:u.step3})}),e.jsx(r,{title:o.step4,children:e.jsx(l,{children:u.step4})}),e.jsx(r,{title:o.step5,children:e.jsx(l,{children:u.step5})}),e.jsx(r,{title:o.step6,children:e.jsx(l,{children:u.step6})}),e.jsx(r,{title:o.links,children:e.jsxs("ul",{style:I,children:[e.jsx("li",{children:e.jsx("a",{href:"https://claude.ai/",target:"_blank",rel:"noopener",children:"Claude 官网"})}),e.jsx("li",{children:e.jsx("a",{href:"https://docs.anthropic.com/en/docs/claude-code",target:"_blank",rel:"noopener",children:"Claude Code 官方文档"})}),e.jsx("li",{children:e.jsx("a",{href:"https://github.com/modelcontextprotocol/servers",target:"_blank",rel:"noopener",children:"MCP 官方服务器列表"})})]})})]})]})}const u={step1:`👇 点击链接：https://claude.ai/ （下载安装包）
👇 API Key 获取：https://console.anthropic.com/

# ===== 方式 A：一键安装（推荐） =====
# macOS / Linux
curl -fsSL https://claude.ai/install.sh | bash

# Homebrew
brew install --cask claude-code

# Windows PowerShell
irm https://claude.ai/install.ps1 | iex

# ===== 方式 B：NPM 安装（需 Node.js ≥ 18） =====
npm install -g @anthropic-ai/claude-code
# ⚠️ 不要用 sudo！

# ===== 方式 C：npx 免安装运行 =====
npx @anthropic-ai/claude-code

# 验证安装
claude --version
claude doctor        # 诊断系统配置

# 更新
claude update        # 自动更新到最新版
npm update -g @anthropic-ai/claude-code`,step2:`👇 获取 API Key：https://console.anthropic.com/ （注册送 $5 额度）
👇 国内用 Kimi 中转：https://platform.moonshot.cn/

# ===== 方式 1：Anthropic 官方 API（按量计费） =====
export ANTHROPIC_API_KEY=sk-ant-xxxxx

# 持久化：
echo 'export ANTHROPIC_API_KEY=sk-ant-xxxxx' >> ~/.bashrc
source ~/.bashrc
# macOS zsh 用户用 ~/.zshrc，fish 用 ~/.config/fish/config.fish

# ===== 方式 2：Claude Pro/Max 订阅 =====
claude    # 首次启动自动引导浏览器 OAuth 认证
# 使用 claude.ai 账户凭据，无需 API Key

# ===== 方式 3：AWS Bedrock（企业） =====
export CLAUDE_CODE_USE_BEDROCK=1
export AWS_REGION=us-east-1
export AWS_PROFILE=your-profile

# ===== 方式 4：Google Vertex AI（企业） =====
export CLAUDE_CODE_USE_VERTEX=1
export CLOUD_ML_REGION=us-east5
export ANTHROPIC_VERTEX_PROJECT_ID=your-project`,step3:`# 启动
claude                        # 交互模式
claude -p "解释这个项目"       # 单次问答
claude --continue             # 继续上次对话
claude --resume [会话ID]      # 恢复指定会话

# 对话内命令
/init      # 初始化项目，生成 CLAUDE.md（告诉 AI 项目规范）
/clear     # 清除对话上下文
/compact   # 压缩上下文（免费用户重要！）
/cost      # 查看本次对话花费
/help      # 查看更多命令
ESC        # 终止当前操作
Ctrl+C x2  # 退出

# Git 相关
claude "Write a commit message for my staged changes"
claude "Review the changes in this branch"
claude commit    # 自动生成 commit message

# 代码操作
claude "Refactor src/utils.ts to use async/await"
claude "Add TypeScript types to the API responses"
claude "Find all SQL injection vulnerabilities"
claude "Write unit tests for src/auth.ts"`,step4:`👇 查看所有可用 MCP 服务：https://github.com/modelcontextprotocol/servers
👇 Brave Search API Key：https://brave.com/search/api/

# MCP 扩展 Claude Code 能力
# 配置文件位置:
#   用户级: ~/.claude.json        (所有项目)
#   项目级: .mcp.json 或 .claude/mcp.json

# ===== 一键添加 MCP 服务 =====
# 文件系统
claude mcp add filesystem -s user -- npx -y @modelcontextprotocol/server-filesystem ~/Projects

# GitHub
claude mcp add github -s user -e GITHUB_TOKEN=xxx -- npx -y @modelcontextprotocol/server-github

# 网络搜索
claude mcp add brave-search -s user -e BRAVE_API_KEY=xxx -- npx -y @modelcontextprotocol/server-brave-search

# 浏览器操控
claude mcp add puppeteer -s user -- npx -y @modelcontextprotocol/server-puppeteer

# 思维链推理
claude mcp add thinking -s user -- npx -y @modelcontextprotocol/server-sequential-thinking

# 数据库
claude mcp add sqlite -s user -- npx -y @modelcontextprotocol/server-sqlite

# ===== 手动编辑 .mcp.json =====
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/home/user/projects"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_xxx" }
    }
  }
}

# MCP 管理
claude mcp list      # 列出所有已配置的 MCP
claude mcp get github # 查看某个服务详情
claude mcp remove xxx # 删除
/mcp                 # 在对话中查看 MCP 状态`,step5:`# ===== 工作流 1：新项目快速上手 =====
git clone https://github.com/some/project.git
cd project
claude    # 启动后输入：
"""
Give me a comprehensive codebase overview:
1. Tech stack and architecture
2. Directory structure and key files
3. Entry points and data flow
4. Database schema
5. How to run and test
"""

# ===== 工作流 2：从零搭建项目 =====
claude "Scaffold a Next.js 14 + TypeScript + Tailwind blog:
  - App Router with /posts, /about, /contact
  - MDX for blog content
  - Dark mode toggle
  - SEO metadata
  - Responsive design"

# ===== 工作流 3：Debug 一条龙 =====
claude "We have a bug: users can't login after password reset.
  1. Trace the password reset flow
  2. Find where the token is invalidated
  3. Propose a fix and implement it"

# ===== 工作流 4：Code Review =====
claude "Review all changed files in this PR:
  - Security vulnerabilities
  - Performance issues
  - Missing error handling
  - Type safety problems
  - Suggest improvements"`,step6:`👇 Kimi API：https://platform.moonshot.cn/
👇 Kimi 兼容接口文档：https://platform.moonshot.cn/docs

# 国内访问 Claude Code 的方案

# ===== 方案 A：Kimi 兼容 API（推荐） =====
export ANTHROPIC_BASE_URL="https://api.moonshot.cn/anthropic"
export ANTHROPIC_AUTH_TOKEN="sk-xxxxx   # Kimi API Key"
# Kimi 提供 Anthropic 兼容接口，可直接用

# ===== 方案 B：开源代理（claude-code-proxy） =====
git clone https://github.com/1rgs/claude-code-proxy
cd claude-code-proxy && npm install
# 配置你的中转 API → 启动代理
export ANTHROPIC_BASE_URL="http://localhost:8082"
export ANTHROPIC_AUTH_TOKEN="anything"

# ===== 方案 C：OneAPI（多模型聚合） =====
# 部署 OneAPI: https://github.com/songquanpeng/one-api
# Claude Code 通过 OneAPI 使用各种国内模型
# 配置后设置环境变量指向 OneAPI 地址

# ===== 方案 D：Cloudflare Worker 中转 =====
# 部署一个 Worker 转发 Anthropic API 请求
# 解决网络直连问题

# 最佳实践：
# 1. 推荐方案 A/B，最简单
# 2. 无需全局代理，只代理 API 请求
# 3. API Key 保护好，不要泄露`};function E(){const{lang:t}=d(),o=(s,n,a)=>t==="zh-CN"?n:t==="zh-TW"?a:s;return e.jsxs("div",{className:i.page,children:[e.jsxs("div",{className:i.head,children:[e.jsxs("h2",{className:i.title,children:["🧰 ",o("Agent Frameworks","Agent 框架对比","Agent 框架對比")]}),e.jsx("p",{className:i.subtitle,children:o("Choose the right toolkit for building AI agents","选择适合你的 AI Agent 开发框架","選擇適合你的 AI Agent 開發框架")})]}),e.jsxs("div",{className:i.cases,children:[e.jsx(y,{t:o("🛠 Framework Comparison","🛠 框架对比","🛠 框架對比"),children:e.jsx(W,{h:["Framework","Language","Best For","Learning Curve"],r:[["LangChain","Python/JS",o("Most popular, huge ecosystem, 700+ integrations","最流行,庞大生态,700+集成","最流行,龐大生態,700+整合"),o("Medium","中等","中等")],["CrewAI","Python",o("Role-based multi-agent, simple API, rapid prototyping","角色化多Agent,简洁API,快速原型","角色化多Agent,簡潔API,快速原型"),o("Easy","简单","簡單")],["AutoGen","Python",o("Microsoft, multi-agent conversation, human-in-the-loop","微软, 多Agent对话, 人在回路","微軟, 多Agent對話, 人在迴路"),o("Medium","中等","中等")],["Dify","Low-code",o("Visual workflow builder, one-click deploy, Chinese-native","可视化工作流,一键部署,中文原生","可視化工作流,一鍵部署,中文原生"),o("Easy","简单","簡單")],["Coze","Low-code",o("ByteDance, bot publishing to WeChat/DingTalk/Feishu","字节跳动,发布到微信/钉钉/飞书","字節跳動,發布到微信/釘釘/飛書"),o("Easy","简单","簡單")],["n8n","Low-code",o("Self-hosted workflow automation, 400+ nodes, AI nodes","自托管工作流,400+节点,AI节点","自託管工作流,400+節點,AI節點"),o("Easy","简单","簡單")]]})}),e.jsx(y,{t:o("💡 Quick Start","💡 快速上手","💡 快速上手"),children:e.jsx(D,{children:`# CrewAI 示例 (最简单的多Agent框架):
pip install crewai

from crewai import Agent, Task, Crew

researcher = Agent(role="研究员", goal="搜索并分析最新AI趋势",
  backstory="资深科技研究员", allow_delegation=False)

writer = Agent(role="写作者", goal="把研究结果写成易读的报告",
  backstory="科技专栏作家", allow_delegation=False)

task1 = Task(description="研究2026年AI Agent的最新进展", agent=researcher)
task2 = Task(description="写一份500字的总结报告", agent=writer)

crew = Crew(agents=[researcher, writer], tasks=[task1, task2])
result = crew.kickoff()  # 两个Agent自动协作完成任务`})})]})]})}function y({t,children:o}){return e.jsxs("div",{style:{background:"var(--bg-card)",borderRadius:12,padding:22,boxShadow:"var(--shadow)",marginBottom:16},children:[e.jsx("h3",{style:{marginBottom:12,color:"var(--text)",fontSize:16},children:t}),o]})}function W({h:t,r:o}){return e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13},children:[e.jsx("thead",{children:e.jsx("tr",{children:t.map(s=>e.jsx("th",{style:{padding:"8px 12px",textAlign:"left",borderBottom:"2px solid var(--border)",color:"var(--text)",fontWeight:600},children:s},s))})}),e.jsx("tbody",{children:o.map((s,n)=>e.jsx("tr",{children:s.map((a,x)=>e.jsx("td",{style:{padding:"8px 12px",borderBottom:"1px solid var(--border)",color:"var(--text-secondary)"},children:a},x))},n))})]})}function D({children:t}){return e.jsx("pre",{style:{background:"#0f172a",color:"#e2e8f0",borderRadius:8,padding:16,fontSize:13,lineHeight:1.6,overflowX:"auto",whiteSpace:"pre-wrap",wordBreak:"break-word",margin:0},children:e.jsx("code",{children:t})})}function G(){const{lang:t}=d(),o=(s,n,a)=>t==="zh-CN"?n:t==="zh-TW"?a:s;return e.jsxs("div",{className:i.page,children:[e.jsxs("div",{className:i.head,children:[e.jsxs("h2",{className:i.title,children:["💬 ",o("Personal AI Assistants","个人 AI 助手","個人 AI 助手")]}),e.jsx("p",{className:i.subtitle,children:o("Build your own AI assistant for daily tasks","搭建你自己的 AI 助手处理日常事务","搭建你自己的 AI 助手處理日常事務")})]}),e.jsxs("div",{className:i.cases,children:[e.jsx(k,{t:o("🛠 Platforms","🛠 平台","🛠 平台"),children:e.jsx(M,{h:["Platform","Key Feature"],r:[["ChatGPT GPTs",o("No-code custom GPT, upload knowledge files, share or sell","零代码定制GPT,上传知识文件,可分享/出售","零程式碼定製GPT,上傳知識檔案,可分享/出售")],["Claude Projects",o("Custom instructions + knowledge base, team sharing, 200K context","自定义指令+知识库, 团队共享, 200K上下文","自定義指令+知識庫, 團隊共享, 200K上下文")],["Gemini Gems",o("Google ecosystem, personalized AI with custom instructions","Google生态,个性化AI,自定义指令","Google生態,個性化AI,自定義指令")],["Coze/Dify",o("Build complex bots with plugins, workflows, knowledge bases","插件+工作流+知识库,构建复杂Bot","插件+工作流+知識庫,構建複雜Bot")],["Replit Agent",o("AI builds full-stack apps from natural language descriptions","自然语言描述→AI构建全栈应用","自然語言描述→AI構建全棧應用")]]})}),e.jsx(k,{t:o("💡 Example Setups","💡 示例配置","💡 示例配置"),children:e.jsx(R,{children:`# 个人研究助手 (ChatGPT GPTs / Claude Project)
Instructions:
"你是我个人的研究助手。当我想了解一个新领域时:
1. 先给我一个200字的概述
2. 列出该领域最重要的5个概念,每个解释不超过3句话
3. 推荐3-5篇必读文章/论文(带链接)
4. 列出3个我需要思考的关键问题
5. 建议一个30天的学习计划"

Knowledge files: 上传你已有的相关领域笔记作为参考

# 个人日程管家 (Coze Bot → 飞书/钉钉)
功能:
- 每天早上8点推送: 今日日程 + 天气 + 通勤时间
- 语音输入: "帮我安排明天下午2点和张三开会"
- 自动检测时间冲突并建议替代时间
- 每周日晚生成"本周时间分配报告"`})})]})]})}function k({t,children:o}){return e.jsxs("div",{style:{background:"var(--bg-card)",borderRadius:12,padding:22,boxShadow:"var(--shadow)",marginBottom:16},children:[e.jsx("h3",{style:{marginBottom:12,color:"var(--text)",fontSize:16},children:t}),o]})}function M({h:t,r:o}){return e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13},children:[e.jsx("thead",{children:e.jsx("tr",{children:t.map(s=>e.jsx("th",{style:{padding:"8px 12px",textAlign:"left",borderBottom:"2px solid var(--border)",color:"var(--text)",fontWeight:600},children:s},s))})}),e.jsx("tbody",{children:o.map((s,n)=>e.jsx("tr",{children:s.map((a,x)=>e.jsx("td",{style:{padding:"8px 12px",borderBottom:"1px solid var(--border)",color:"var(--text-secondary)"},children:a},x))},n))})]})}function R({children:t}){return e.jsx("pre",{style:{background:"#0f172a",color:"#e2e8f0",borderRadius:8,padding:16,fontSize:13,lineHeight:1.6,overflowX:"auto",whiteSpace:"pre-wrap",wordBreak:"break-word",margin:0},children:e.jsx("code",{children:t})})}function L(){const{lang:t}=d(),o=(s,n,a)=>t==="zh-CN"?n:t==="zh-TW"?a:s;return e.jsxs("div",{className:i.page,children:[e.jsxs("div",{className:i.head,children:[e.jsxs("h2",{className:i.title,children:["⚡ ",o("Workflow Automation","工作流自动化","工作流自動化")]}),e.jsx("p",{className:i.subtitle,children:o("Connect AI with thousands of apps to automate workflows","连接 AI 和数千应用, 自动化你的工作流","連接 AI 和數千應用, 自動化你的工作流")})]}),e.jsxs("div",{className:i.cases,children:[e.jsx(b,{t:o("🛠 Automation Platforms","🛠 自动化平台","🛠 自動化平台"),children:e.jsx(_,{h:["Platform","Apps Connected","Best For"],r:[["n8n","400+",o("Self-hosted, open source, AI nodes, code-capable. Best for developers","自托管、开源、AI节点、可写代码。适合开发者","自託管、開源、AI節點、可寫程式碼。適合開發者")],["Make","2000+",o("Visual scenario builder, complex branching logic. Best for power users","可视化场景构建、复杂分支逻辑。适合高级用户","可視化場景構建、複雜分支邏輯。適合高級用戶")],["Zapier","7000+",o("Easiest to start, largest app library. Best for quick automations","最易上手、最大应用库。适合快速自动化","最易上手、最大應用庫。適合快速自動化")],["Dify","AI-native",o("LLM workflow builder, RAG pipeline, agent mode, one-click API","LLM工作流构建器,RAG管道,Agent模式,一键API","LLM工作流構建器,RAG管道,Agent模式,一鍵API")]]})}),e.jsx(b,{t:o("💡 Automation Ideas","💡 自动化创意","💡 自動化創意"),children:e.jsx(B,{children:`# 1. 自动日报生成
触发: 每天18:00
→ AI总结当日Slack/飞书消息
→ 提取各项目进度 + 关键决策
→ 生成Markdown日报 → 发送到指定频道

# 2. 智能客户支持分流
触发: 收到新客服邮件
→ AI分析邮件内容和紧急程度
→ 低优先级: 自动回复FAQ链接
→ 中优先级: 分配给对应客服 + 生成回复草稿
→ 高优先级: 立即通知负责人 + 标记urgent

# 3. 内容发布工作流
触发: 上传新文章到Google Docs
→ AI提取标题、摘要、关键词
→ 自动生成社交媒体文案(微博/Twitter/LinkedIn各一版)
→ 自动配图(从文章内容提取关键词→AI生成配图)
→ 定时发布到各平台`})})]})]})}function b({t,children:o}){return e.jsxs("div",{style:{background:"var(--bg-card)",borderRadius:12,padding:22,boxShadow:"var(--shadow)",marginBottom:16},children:[e.jsx("h3",{style:{marginBottom:12,color:"var(--text)",fontSize:16},children:t}),o]})}function _({h:t,r:o}){return e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13},children:[e.jsx("thead",{children:e.jsx("tr",{children:t.map(s=>e.jsx("th",{style:{padding:"8px 12px",textAlign:"left",borderBottom:"2px solid var(--border)",color:"var(--text)",fontWeight:600},children:s},s))})}),e.jsx("tbody",{children:o.map((s,n)=>e.jsx("tr",{children:s.map((a,x)=>e.jsx("td",{style:{padding:"8px 12px",borderBottom:"1px solid var(--border)",color:"var(--text-secondary)"},children:a},x))},n))})]})}function B({children:t}){return e.jsx("pre",{style:{background:"#0f172a",color:"#e2e8f0",borderRadius:8,padding:16,fontSize:13,lineHeight:1.6,overflowX:"auto",whiteSpace:"pre-wrap",wordBreak:"break-word",margin:0},children:e.jsx("code",{children:t})})}function K(){const{lang:t}=d(),o=(s,n,a)=>t==="zh-CN"?n:t==="zh-TW"?a:s;return e.jsxs("div",{className:i.page,children:[e.jsxs("div",{className:i.head,children:[e.jsxs("h2",{className:i.title,children:["🕸️ ",o("Multi-Agent Systems","多 Agent 协作","多 Agent 協作")]}),e.jsx("p",{className:i.subtitle,children:o("Multiple agents collaborating — each with a role — to solve complex problems","多个Agent分工协作,各自承担不同角色,共同解决复杂问题","多個Agent分工協作,各自承擔不同角色,共同解決複雜問題")})]}),e.jsxs("div",{className:i.cases,children:[e.jsx(w,{t:o("🧩 Design Patterns","🧩 设计模式","🧩 設計模式"),children:e.jsx(F,{h:["Pattern","How It Works","Best For"],r:[["Sequential",o("Agent A → Agent B → Agent C. Each passes output to the next","Agent A→Agent B→Agent C, 流水线式传递","Agent A→Agent B→Agent C, 流水線式傳遞"),o("Linear workflows: research→write→review","线性工作流:研究→撰写→审核","線性工作流:研究→撰寫→審核")],["Router",o("One dispatcher agent routes tasks to specialized agents","一个调度Agent将任务路由给不同专长Agent","一個調度Agent將任務路由給不同專長Agent"),o("Customer support: billing/tech/general","客服:账单/技术/通用分流","客服:帳單/技術/通用分流")],["Debate",o("Multiple agents debate different viewpoints, then synthesize","多个Agent从不同立场辩论,然后综合观点","多個Agent從不同立場辯論,然後綜合觀點"),o("Decision making, strategy planning","决策分析、战略规划","決策分析、戰略規劃")],["Hierarchical",o("Manager agent delegates to worker agents, reviews results","管理者Agent分配任务→执行Agent干活→管理者审核","管理者Agent分配任務→執行Agent幹活→管理者審核"),o("Complex projects with quality control","需要质量控制的复杂项目","需要品質控制的複雜項目")]]})}),e.jsx(w,{t:o("💡 Example: Research Team","💡 示例：研究团队","💡 示例：研究團隊"),children:e.jsx(H,{children:`# 5个Agent协作完成深度调研报告:

Manager Agent (调度者):
  "把用户的问题分解成子任务,分配给团队,整合结果"

Research Agent (研究员):
  "搜索最新论文、新闻、数据,提取关键信息"

Analyst Agent (分析师):
  "对研究结果进行批判性分析,找出pattern和矛盾点"

Writer Agent (写作者):
  "把分析结果写成结构化报告,引用Research的来源"

Fact-Checker Agent (核查员):
  "逐一验证Writer报告中的事实陈述,标注可信度"

# 流程: User Question
# → Manager 分解任务
# → [Research + Analyst 并行工作]
# → Writer 生成报告
# → Fact-Checker 审核
# → Manager 最终检查 → 交付用户`})})]})]})}function w({t,children:o}){return e.jsxs("div",{style:{background:"var(--bg-card)",borderRadius:12,padding:22,boxShadow:"var(--shadow)",marginBottom:16},children:[e.jsx("h3",{style:{marginBottom:12,color:"var(--text)",fontSize:16},children:t}),o]})}function F({h:t,r:o}){return e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13},children:[e.jsx("thead",{children:e.jsx("tr",{children:t.map(s=>e.jsx("th",{style:{padding:"8px 12px",textAlign:"left",borderBottom:"2px solid var(--border)",color:"var(--text)",fontWeight:600},children:s},s))})}),e.jsx("tbody",{children:o.map((s,n)=>e.jsx("tr",{children:s.map((a,x)=>e.jsx("td",{style:{padding:"8px 12px",borderBottom:"1px solid var(--border)",color:"var(--text-secondary)"},children:a},x))},n))})]})}function H({children:t}){return e.jsx("pre",{style:{background:"#0f172a",color:"#e2e8f0",borderRadius:8,padding:16,fontSize:13,lineHeight:1.6,overflowX:"auto",whiteSpace:"pre-wrap",wordBreak:"break-word",margin:0},children:e.jsx("code",{children:t})})}const A={padding:"10px 14px",textAlign:"left",fontSize:13,fontWeight:700,borderBottom:"2px solid var(--border)",color:"var(--text)",background:"var(--bg-card)"},f={padding:"9px 14px",fontSize:13,borderBottom:"1px solid var(--border)",color:"var(--text-secondary)"},V={...f,fontWeight:600,color:"var(--primary)",whiteSpace:"nowrap"},U=[{title:{en:"LLMs — International","zh-CN":"🔷 海外大模型","zh-TW":"🔷 海外大模型"},color:"#3b82f6",rows:[["GPT-4.1 / ChatGPT","OpenAI","多模态 · 综合第一","https://chat.openai.com/"],["Claude 4","Anthropic","200K上下文 · 深度推理 · 低幻觉","https://claude.ai/"],["Gemini 2.5 Pro","Google","100万上下文 · 原生多模态","https://gemini.google.com/"],["Grok 3","xAI (Musk)","实时X平台数据 · 幽默风格","https://x.com/i/grok"],["Llama 4","Meta","开源 · 100+语言 · 社区最大","https://www.llama.com/"],["Mistral Large","Mistral AI","MoE架构 · 1100 tok/s · 开源可商用","https://mistral.ai/"]]},{title:{en:"LLMs — Chinese","zh-CN":"🔶 国产大模型","zh-TW":"🔶 國產大模型"},color:"#f59e0b",rows:[["DeepSeek V3/R1","深度求索","1M上下文 · DeepThink推理 · 极致性价比","https://chat.deepseek.com/"],["通义千问 Qwen3","阿里","256K上下文 · 数学编程领先 · 开源","https://tongyi.aliyun.com/"],["文心一言 4.5","百度","中文评测第一 · 知识库深厚 · 生态完善","https://yiyan.baidu.com/"],["豆包 Seed-1.6","字节跳动","MoE架构 · 快速免费 · 亿级用户","https://www.doubao.com/"],["Kimi k2.5","月之暗面","200万字中文 · 长文档之王 · 联网搜索","https://kimi.moonshot.cn/"],["GLM-5","清华智谱","128K上下文 · 编程能力强 · 学术翻译","https://chatglm.cn/"],["混元 Turbo","腾讯","微信生态 · 游戏NPC智能","https://yuanbao.tencent.com/"],["星火 4.0","科大讯飞","语音识别第一 · 教育专长","https://xinghuo.xfyun.cn/"],["百川 M1","百川智能","医疗+金融垂直领域 · 视觉推理","https://www.baichuan-ai.com/"],["海螺 MiniMax","MiniMax","400万上下文 · 语音音乐生成","https://hailuoai.com/"],["阶跃星辰 Step","阶跃星辰","MoE·万亿参数·多模态","https://www.stepfun.com/"],["盘古 4.0","华为","行业专用 · 昇腾端侧部署","https://www.huaweicloud.com/"]]},{title:{en:"Model Switchers","zh-CN":"🔄 模型切换工具","zh-TW":"🔄 模型切換工具"},color:"#8b5cf6",rows:[["OpenRouter","美国","300+模型 · 统一API · 比价切换","https://openrouter.ai/"],["CCS","社区","多配置管理 · Claude Code切换 · 支持10+供应商","https://github.com/kaitranntt/ccs"],["claude-code-switch","社区","零依赖Shell · 9供应商 · 极简","https://github.com/maxgfr/claude-code-switch"],["Poe","Quora","一App同时用GPT/Claude/Gemini/DeepSeek","https://poe.com/"],["LMSYS Arena","社区","盲测对比 · Elo天梯榜 · 100+模型","https://chat.lmsys.org/"]]},{title:{en:"AI Coding Tools","zh-CN":"💻 AI 编程工具","zh-TW":"💻 AI 編程工具"},color:"#10b981",rows:[["Cursor","Cursor Inc","AI IDE · Agent模式 · 多模型 · $20/月","https://cursor.com/"],["GitHub Copilot","Microsoft","VS Code · 自动补全 · $10/月","https://github.com/features/copilot"],["Trae","字节跳动","中文最佳IDE · 免费Claude+DeepSeek","https://www.trae.ai/"],["Windsurf","Codeium","Cascade智能体 · 自动索引 · $15/月","https://codeium.com/windsurf"],["Claude Code","Anthropic","终端Agent · 读写整个代码库","https://docs.anthropic.com/en/docs/claude-code"],["通义灵码","阿里云","IDE插件 · 私有部署 · 免费","https://tongyi.aliyun.com/lingma/"],["CodeGeeX","智谱","20+语言 · AIPC版","https://codegeex.cn/"],["Devin","Cognition","首个AI软件工程师 · 端到端","https://www.cognition.ai/"],["Bolt.new","StackBlitz","提示词→全栈应用 · 浏览器","https://bolt.new/"],["Lovable","社区","GPT工程师 · 描述→SaaS","https://lovable.dev/"],["Replit Agent","Replit","浏览器IDE · 自然语言→部署","https://replit.com/"],["Aider","社区","终端 · Git集成 · SWE-bench顶尖","https://aider.chat/"],["Gemini CLI","Google","100万上下文 · 多模态 · CLI","https://github.com/google-gemini/gemini-cli"]]},{title:{en:"Autonomous Agents","zh-CN":"🦾 自主 Agent","zh-TW":"🦾 自主 Agent"},color:"#ef4444",rows:[["Manus","Manus","自主执行 · 多步骤任务自动完成","https://manus.im/"],["OpenClaw 龙虾","社区","开源 · 浏览器+文件系统操控","https://github.com/openclaw/openclaw"],["AutoGPT","社区","先驱 · 联网+文件 · 自主循环","https://github.com/Significant-Gravitas/AutoGPT"],["Coze 扣子","字节跳动","零代码Bot搭建 · 插件市场","https://www.coze.cn/"],["Dify","社区","开源 · RAG+Agent+工作流 · 自托管","https://dify.ai/"],["CrewAI","社区","角色化 · 多Agent团队协作","https://www.crewai.com/"],["AutoGen","Microsoft","多Agent对话协作框架","https://microsoft.github.io/autogen/"],["n8n","社区","工作流自动化 · AI节点 · 自托管","https://n8n.io/"]]},{title:{en:"AI API Hub","zh-CN":"🌐 AI API 资源","zh-TW":"🌐 AI API 資源"},color:"#06b6d4",rows:[["API 集合站","社区","AI API 接口聚合 · 多供应商参考","https://api.daheiai.com/"],["OpenRouter","社区","300+ 模型统一 API · 兼容 OpenAI · 比价切换","https://openrouter.ai/"],["API2D","社区","国内 OpenAI 兼容中转 · GPT/Claude/DeepSeek","https://api2d.com/"],["OhMyGPT","社区","国内 API 中转 · 多模型 · 按量计费","https://ohmygpt.com/"],["AIGC2D","社区","国内 API 中转 · 兼容 OpenAI 格式","https://aigc2d.com/"],["ChatAnywhere","社区","OpenAI API 国内中转 · 免翻墙 · 免费额度","https://api.chatanywhere.com.cn/"],["RapidAPI","RapidAPI","全球最大API平台 · 4万+接口 · 浏览器测试","https://rapidapi.com/"],["Apifox","Apifox","国产API管理 · Mock+测试+文档一体化","https://apifox.com/"],["DeepSeek API","深度求索","¥2/百万token · 兼容 OpenAI 格式","https://platform.deepseek.com/"],["Kimi API","月之暗面","200万字上下文 · 兼容 Anthropic 格式","https://platform.moonshot.cn/"],["通义千问 API","阿里云","256K上下文 · DashScope 平台","https://dashscope.aliyun.com/"],["文心一言 API","百度","中文最强 · 千帆大模型平台","https://console.bce.baidu.com/qianfan/"],["Anthropic API","Anthropic","Claude 官方 API · Console 控制台","https://console.anthropic.com/"],["OpenAI API","OpenAI","GPT-4.1 API · Platform 平台","https://platform.openai.com/"]]}];function q(){const{lang:t}=d(),o=(s,n,a)=>t==="zh-CN"?n:t==="zh-TW"?a:s;return e.jsxs("div",{className:i.page,children:[e.jsxs("div",{className:i.head,children:[e.jsxs("h2",{className:i.title,children:["🤖 ",o("Model Hub & API","大模型 · API大全","大模型 · API大全")]}),e.jsx("p",{className:i.subtitle,children:o("LLMs · Switchers · Coding · Agents · API Hub","大模型 · 模型切换 · AI编程 · Agent · API资源","大模型 · 模型切換 · AI編程 · Agent · API資源")})]}),U.map(s=>e.jsxs("div",{style:{marginBottom:28},children:[e.jsx("h3",{style:{fontSize:17,fontWeight:700,color:s.color,marginBottom:10},children:o(s.title.en,s.title["zh-CN"],s.title["zh-TW"])}),e.jsx("div",{style:{overflowX:"auto",borderRadius:10,border:"1px solid var(--border)"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:A,children:o("Name","名称","名稱")}),e.jsx("th",{style:A,children:o("Developer","开发商","開發商")}),e.jsx("th",{style:A,children:o("Highlights","核心特点","核心特點")})]})}),e.jsx("tbody",{children:s.rows.map((n,a)=>e.jsxs("tr",{style:{cursor:"pointer"},onClick:()=>window.open(n[3],"_blank"),children:[e.jsxs("td",{style:V,children:[n[0]," ↗"]}),e.jsx("td",{style:f,children:n[1]}),e.jsx("td",{style:f,children:n[2]})]},a))})]})})]},s.color))]})}function $(){const{lang:t}=d(),o=(s,n,a)=>t==="zh-CN"?n:t==="zh-TW"?a:s;return e.jsxs("div",{className:i.page,children:[e.jsxs("div",{className:i.head,children:[e.jsxs("h2",{className:i.title,children:["🔌 ",o("API Relay Hub","API中转站","API中轉站")]}),e.jsx("p",{className:i.subtitle,children:o("API proxies, relays, and aggregators","API中转、代理和聚合平台","API中轉、代理和聚合平台")})]}),e.jsx(P,{links:Y,lang:t,color:"#06b6d4"})]})}const Y=[{name:"OpenRouter",url:"https://openrouter.ai/",desc:{en:"300+ models · unified API · price compare",zh:"300+模型 · 统一API · 比价切换"},cat:"聚合",icon:"🚦"},{name:"API2D",url:"https://api2d.com/",desc:{en:"OpenAI-compatible relay · GPT/Claude/DeepSeek",zh:"OpenAI兼容中转 · GPT/Claude/DeepSeek"},cat:"中转",icon:"🔌"},{name:"OhMyGPT",url:"https://ohmygpt.com/",desc:{en:"Multi-model relay · pay-per-use · China optimized",zh:"多模型中转 · 按量计费 · 国内优化"},cat:"中转",icon:"⚡"},{name:"AIGC2D",url:"https://aigc2d.com/",desc:{en:"OpenAI-format relay · domestic access",zh:"OpenAI格式中转 · 国内直连"},cat:"中转",icon:"🔄"},{name:"ChatAnywhere",url:"https://api.chatanywhere.com.cn/",desc:{en:"OpenAI relay · CN optimized · free quota",zh:"OpenAI国内中转 · 免翻墙 · 免费额度"},cat:"中转",icon:"🌐"},{name:"DeepSeek API",url:"https://platform.deepseek.com/",desc:{en:"¥2/M tokens · OpenAI compatible · official",zh:"¥2/百万token · 兼容OpenAI · 官方"},cat:"官方",icon:"🐋"},{name:"Kimi API",url:"https://platform.moonshot.cn/",desc:{en:"2M chars ctx · Anthropic compatible",zh:"200万字上下文 · 兼容Anthropic格式"},cat:"官方",icon:"🌙"},{name:"通义千问 API",url:"https://dashscope.aliyun.com/",desc:{en:"256K ctx · Alibaba DashScope platform",zh:"256K上下文 · 阿里云DashScope"},cat:"官方",icon:"☁️"},{name:"文心一言 API",url:"https://console.bce.baidu.com/qianfan/",desc:{en:"Baidu Qianfan · Chinese language #1",zh:"百度千帆平台 · 中文能力第一"},cat:"官方",icon:"💎"},{name:"Anthropic API",url:"https://console.anthropic.com/",desc:{en:"Claude official · Console · $5 free",zh:"Claude官方 · 注册送$5额度"},cat:"官方",icon:"🟠"},{name:"OpenAI API",url:"https://platform.openai.com/",desc:{en:"GPT-4.1 official · Platform",zh:"GPT-4.1官方 · Platform平台"},cat:"官方",icon:"⚫"},{name:"火山引擎 API",url:"https://www.volcengine.com/",desc:{en:"ByteDance · Doubao/Seed models",zh:"字节跳动 · 豆包/Seed模型API"},cat:"官方",icon:"🌋"},{name:"RapidAPI",url:"https://rapidapi.com/",desc:{en:"40K+ APIs · browser test · worldwide",zh:"全球4万+API · 浏览器测试"},cat:"平台",icon:"⚡"},{name:"Apifox",url:"https://apifox.com/",desc:{en:"API management · mock+test+docs",zh:"API管理 · Mock+测试+文档一体化"},cat:"平台",icon:"🦊"}],v=[{key:"gemini",icon:"🔷",title:{en:"Gemini CLI","zh-CN":"Gemini 教程","zh-TW":"Gemini 教學"},Component:S},{key:"codex",icon:"🟢",title:{en:"Codex CLI","zh-CN":"Codex 教程","zh-TW":"Codex 教學"},Component:j},{key:"deepseek",icon:"🐋",title:{en:"DeepSeek Guide","zh-CN":"DeepSeek 教程","zh-TW":"DeepSeek 教學"},Component:N},{key:"claude-code",icon:"🟠",title:{en:"Claude Code","zh-CN":"Claude Code 教程","zh-TW":"Claude Code 教學"},Component:O},{key:"frameworks",icon:"🧰",title:{en:"Agent Frameworks","zh-CN":"智能体框架","zh-TW":"智能體框架"},Component:E},{key:"assistants",icon:"💬",title:{en:"AI Assistants","zh-CN":"个人助手","zh-TW":"個人助手"},Component:G},{key:"workflow",icon:"⚡",title:{en:"Workflow","zh-CN":"工作流","zh-TW":"工作流"},Component:L},{key:"multi-agent",icon:"🕸️",title:{en:"Multi-Agent","zh-CN":"多Agent协作","zh-TW":"多Agent協作"},Component:K},{key:"agent-tools",icon:"🤖",title:{en:"Models & API","zh-CN":"大模型 & API","zh-TW":"大模型 & API"},Component:q},{key:"api-relay",icon:"🔌",title:{en:"API Relay","zh-CN":"API中转","zh-TW":"API中轉"},Component:$}];function te(){const{lang:t}=d(),o=(s,n,a)=>t==="zh-CN"?n:t==="zh-TW"?a:s;return e.jsxs("div",{children:[e.jsxs("div",{id:"section-overview",style:{background:"linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)",borderRadius:14,padding:"28px 32px",marginBottom:32,color:"#fff",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:-20,right:-10,fontSize:100,opacity:.08},children:"🛠️"}),e.jsx("h2",{style:{fontSize:24,fontWeight:800,margin:"0 0 8px"},children:o("AI Tools & Models","AI工具 · 大模型","AI工具 · 大模型")}),e.jsx("p",{style:{fontSize:14,opacity:.85,margin:"0 0 20px",maxWidth:600,lineHeight:1.6},children:o("Set up AI coding tools, build agents, automate workflows. 7 step-by-step guides with code examples and direct tool links.","搭建AI编程环境、构建智能体、自动化工作流。7个手把手教程，含代码示例和工具直达链接。","搭建AI編程環境、構建智能體、自動化工作流。7個手把手教學，含程式碼範例和工具直達鏈接。")}),e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:v.map(s=>e.jsxs("span",{onClick:()=>{const n=document.getElementById(`section-${s.key}`);n&&n.scrollIntoView({behavior:"smooth",block:"start"})},style:{background:"rgba(255,255,255,0.15)",color:"#fff",padding:"4px 12px",borderRadius:16,fontSize:13,cursor:"pointer",fontWeight:500},children:[s.icon," ",s.title[t]]},s.key))})]}),v.map(({key:s,Component:n},a)=>e.jsxs("div",{id:`section-${s}`,style:{scrollMarginTop:80},children:[a>0&&e.jsx("div",{style:{height:2,background:"linear-gradient(90deg, var(--primary), transparent)",margin:"32px 0 40px",borderRadius:1}}),e.jsx(n,{})]},s))]})}export{te as default};
