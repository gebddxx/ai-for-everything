import { useT } from '../contexts/LanguageContext'
import styles from './Page.module.css'

export default function CCSwitchTutorial() {
  const { lang } = useT()
  const l = {
    pageTitle: lang === 'zh-CN' ? 'CCSwitch + Claude + DeepSeek 完整教程' : lang === 'zh-TW' ? 'CCSwitch + Claude + DeepSeek 完整教學' : 'CCSwitch + Claude + DeepSeek — Complete Guide',
    pageSub: lang === 'zh-CN' ? '多模型 AI 路由器 · Claude 做深度推理 · DeepSeek 快速生成 · 智能成本控制' : lang === 'zh-TW' ? '多模型 AI 路由器 · Claude 做深度推理 · DeepSeek 快速生成 · 智慧成本控制' : 'Multi-Model AI Router · Claude for Deep Reasoning · DeepSeek for Speed · Smart Cost Control',
    whatIs: lang === 'zh-CN' ? '什么是 CCSwitch？' : lang === 'zh-TW' ? '什麼是 CCSwitch？' : 'What is CCSwitch?',
    whatIsBody: lang === 'zh-CN' ? 'CCSwitch 是一个轻量级代理/路由器，运行在你的编程工具（VS Code、Cursor、Claude Code、Cline、Continue）和多个 AI API 之间。它智能地将每个请求路由到最佳模型：复杂推理和调试用 Claude，快速廉价的模板生成用 DeepSeek。两全其美——需要时用 Claude 的智能，其余情况用 DeepSeek 的速度和低成本。你可以把它理解为 LLM 的反向代理，同时优化成本、速度和质量。' : lang === 'zh-TW' ? 'CCSwitch 是一個輕量級代理/路由器，運行在你的編程工具（VS Code、Cursor、Claude Code、Cline、Continue）和多個 AI API 之間。它智慧地將每個請求路由到最佳模型：複雜推理和調試用 Claude，快速廉價的模板生成用 DeepSeek。兩全其美——需要時用 Claude 的智慧，其餘情況用 DeepSeek 的速度和低成本。你可以把它理解為 LLM 的反向代理，同時優化成本、速度和品質。' : 'CCSwitch is a lightweight proxy/router that sits between your coding tools (VS Code, Cursor, Claude Code, Cline, Continue) and multiple AI APIs. It intelligently routes each request to the best model: Claude for complex reasoning and debugging, DeepSeek for fast and cheap boilerplate generation. You get the best of both worlds — Claude\'s intelligence when you need it, DeepSeek\'s speed and low cost for everything else. Think of it as a reverse proxy for LLMs that optimizes cost, speed, and quality simultaneously.',
    req: lang === 'zh-CN' ? '系统要求' : lang === 'zh-TW' ? '系統要求' : 'Prerequisites',
    install: lang === 'zh-CN' ? '第1步：安装' : lang === 'zh-TW' ? '第1步：安裝' : 'Step 1: Installation',
    keys: lang === 'zh-CN' ? '第2步：获取 API Keys' : lang === 'zh-TW' ? '第2步：獲取 API Keys' : 'Step 2: Get API Keys',
    config: lang === 'zh-CN' ? '第3步：配置文件详解' : lang === 'zh-TW' ? '第3步：配置檔案詳解' : 'Step 3: Configuration',
    start: lang === 'zh-CN' ? '第4步：启动代理服务器' : lang === 'zh-TW' ? '第4步：啟動代理伺服器' : 'Step 4: Start Proxy Server',
    tools: lang === 'zh-CN' ? '第5步：连接编程工具' : lang === 'zh-TW' ? '第5步：連接編程工具' : 'Step 5: Connect Coding Tools',
    dashboard: lang === 'zh-CN' ? '第6步：用量看板与监控' : lang === 'zh-TW' ? '第6步：用量看板與監控' : 'Step 6: Dashboard & Monitoring',
    advanced: lang === 'zh-CN' ? '第7步：高级路由策略' : lang === 'zh-TW' ? '第7步：高級路由策略' : 'Step 7: Advanced Routing Strategies',
    cost: lang === 'zh-CN' ? '第8步：成本对比分析' : lang === 'zh-TW' ? '第8步：成本對比分析' : 'Step 8: Cost Comparison',
    debug: lang === 'zh-CN' ? '第9步：常见问题排查' : lang === 'zh-TW' ? '第9步：常見問題排查' : 'Step 9: Troubleshooting',
    links: lang === 'zh-CN' ? '链接与资源' : lang === 'zh-TW' ? '連結與資源' : 'Links & Resources',
  }

  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>🔀 {l.pageTitle}</h2>
        <p className={styles.subtitle}>{l.pageSub}</p>
      </div>
      <div className={styles.cases}>
        <Card title={l.whatIs}><p style={pStyle}>{l.whatIsBody}</p></Card>
        <Card title={l.req}><Code>{C.req}</Code></Card>
        <Card title={l.install}><Code>{C.install}</Code></Card>
        <Card title={l.keys}><Code>{C.keys}</Code></Card>
        <Card title={l.config}><Code>{C.config}</Code></Card>
        <Card title={l.start}><Code>{C.start}</Code></Card>
        <Card title={l.tools}><Code>{C.tools}</Code></Card>
        <Card title={l.dashboard}><Code>{C.dashboard}</Code></Card>
        <Card title={l.advanced}><Code>{C.advanced}</Code></Card>
        <Card title={l.cost}><Code>{C.cost}</Code></Card>
        <Card title={l.debug}><Code>{C.debug}</Code></Card>
        <Card title={l.links}>
          <ul style={ulStyle}>
            <li><a href="https://blog.csdn.net/m0_74204940/article/details/160633548" target="_blank" rel="noopener">CCSwitch + Claude + DeepSeek 完整教程</a></li>
            <li><a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noopener">Anthropic Console — Claude API Keys</a></li>
            <li><a href="https://platform.deepseek.com/api_keys" target="_blank" rel="noopener">DeepSeek Platform — API Keys</a></li>
            <li><a href="https://github.com/ccswitch/ccswitch" target="_blank" rel="noopener">CCSwitch GitHub</a></li>
          </ul>
        </Card>
      </div>
    </div>
  )
}

const C = {
  req: `# Operating System
- macOS 12+ / Linux (Ubuntu 20.04+) / Windows 10+ (WSL2)
- Python 3.10 or higher

# Check:
python3 --version     # >= 3.10
pip --version         # >= 23.x

# API Keys needed:
# Claude API:   https://console.anthropic.com/settings/keys
# DeepSeek API: https://platform.deepseek.com/api_keys

# Git (optional):
git --version`,

  install: `# ==========================================
# Method A: pip install (recommended)
# ==========================================
pip install ccswitch
ccswitch --version && ccswitch --help

# ==========================================
# Method B: pipx (isolated environment)
# ==========================================
brew install pipx        # macOS
sudo apt install pipx    # Linux
pipx install ccswitch

# ==========================================
# Method C: From source
# ==========================================
git clone https://github.com/ccswitch/ccswitch.git
cd ccswitch && pip install -e .

# Upgrade:
pip install --upgrade ccswitch`,

  keys: `# ==========================================
# Claude API Key (Anthropic):
# ==========================================
# 1. https://console.anthropic.com/ → Sign up / Log in
# 2. Settings → API Keys → Create Key
# 3. Copy key (starts with "sk-ant-...")
# Pricing: ~$3/M input tokens (Sonnet), ~$15/M (Opus)

# ==========================================
# DeepSeek API Key:
# ==========================================
# 1. https://platform.deepseek.com/ → Sign up / Log in
# 2. API Keys → Create Key
# 3. Copy key (starts with "sk-ds-...")
# Pricing: ~$0.14/M input tokens (V3), ~$0.28/M (R1)
# This is 20-100x cheaper than Claude Opus!

# Store keys securely:
mkdir -p ~/.ccswitch
cat > ~/.ccswitch/secrets.env << 'EOF'
CLAUDE_API_KEY=sk-ant-api03-xxxxxxxxxxxxxxxxxxxxxxxxxxxx
DEEPSEEK_API_KEY=sk-ds-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
EOF
chmod 600 ~/.ccswitch/secrets.env`,

  config: `# Create config:
mkdir -p ~/.ccswitch

cat > ~/.ccswitch/config.yaml << 'CONFIG'
providers:
  claude:
    api_key: "$\{CLAUDE_API_KEY}"
    base_url: "https://api.anthropic.com"
    timeout: 120
    max_retries: 3
    models:
      - id: claude-opus-4-8
        description: "Complex debugging & architecture"
      - id: claude-sonnet-4-6
        description: "Balanced quality/cost"
      - id: claude-haiku-4-5
        description: "Fastest Claude"

  deepseek:
    api_key: "$\{DEEPSEEK_API_KEY}"
    base_url: "https://api.deepseek.com"
    timeout: 90
    max_retries: 2
    models:
      - id: deepseek-v4-pro
        description: "Strongest DeepSeek"
      - id: deepseek-chat
        description: "Fast & extremely cheap"

# Routing rules (evaluated top → bottom)
rules:
  - name: "complex-debugging"
    pattern: "debug|bug|crash|memory leak|security vulnerability"
    provider: claude
    model: claude-opus-4-8

  - name: "architecture-design"
    pattern: "architecture|design pattern|refactor|migrate|schema"
    provider: claude
    model: claude-opus-4-8

  - name: "code-review"
    pattern: "review|audit|security|best practice"
    provider: claude
    model: claude-sonnet-4-6

  - name: "boilerplate-crud"
    pattern: "generate|boilerplate|CRUD|scaffold|create endpoint|test"
    provider: deepseek
    model: deepseek-chat

  - name: "documentation"
    pattern: "document|JSDoc|README|comment|explain|summarize"
    provider: deepseek
    model: deepseek-v4-pro

  - name: "default"
    pattern: ".*"
    provider: claude
    model: claude-sonnet-4-6

budget:
  daily_limit_usd: 10.0
  warning_threshold_usd: 7.0
  per_request_limit_usd: 2.0

server:
  host: "127.0.0.1"
  port: 8080
  cors: true
  log_level: "info"
  dashboard: true
CONFIG`,

  start: `# Load secrets and start:
source ~/.ccswitch/secrets.env
ccswitch serve --port 8080

# You should see:
# ═══════════════════════════════════════
#   CCSwitch v1.x — AI Router
# ═══════════════════════════════════════
# ✓ Claude API connected (3 models)
# ✓ DeepSeek API connected (2 models)
# ✓ 6 routing rules loaded
# ✓ Budget: $10.00/day
# ✓ Dashboard: http://localhost:8080/dashboard
# ✓ Proxy listening on http://localhost:8080/v1

# Verify:
curl http://localhost:8080/v1/models

# Run as background service:
nohup ccswitch serve --port 8080 > ~/.ccswitch/ccswitch.log 2>&1 &

# Or use tmux:
tmux new -s ccswitch
ccswitch serve --port 8080
# Ctrl+B, D to detach. "tmux attach -t ccswitch" to reattach.

# Or systemd (Linux auto-start):
sudo tee /etc/systemd/system/ccswitch.service << 'SVC'
[Unit]
Description=CCSwitch AI Router
After=network.target
[Service]
Type=simple
User=your-username
EnvironmentFile=/home/your-username/.ccswitch/secrets.env
ExecStart=/usr/local/bin/ccswitch serve --port 8080
Restart=on-failure
RestartSec=5
[Install]
WantedBy=multi-user.target
SVC
sudo systemctl daemon-reload
sudo systemctl enable --now ccswitch`,

  tools: `# ==========================================
# Claude Code (Anthropic CLI)
# ==========================================
export ANTHROPIC_BASE_URL="http://localhost:8080/v1"
claude
# Now: "Refactor this" → Claude Opus | "Generate CRUD" → DeepSeek

# ==========================================
# VS Code — Cline Extension
# ==========================================
# 1. Extensions → "Cline" → Install
# 2. Settings: API Provider = OpenAI Compatible
#    Base URL: http://localhost:8080/v1
#    API Key: ccswitch
#    Model: auto

# ==========================================
# VS Code — Continue Extension
# ==========================================
# Edit ~/.continue/config.json:
{
  "models": [{
    "title": "CCSwitch Auto",
    "provider": "openai",
    "model": "auto",
    "apiBase": "http://localhost:8080/v1",
    "apiKey": "ccswitch"
  }]
}

# ==========================================
# Cursor Editor
# ==========================================
# Settings → Models → Add Model
# Provider: OpenAI Compatible
# Base URL: http://localhost:8080/v1
# API Key: ccswitch
# Model: auto

# Works with ANY tool that accepts OpenAI-compatible API:
# Base URL: http://localhost:8080/v1
# API Key: ccswitch
# Model: auto (or specify: claude-opus-4-8 / deepseek-chat)`,

  dashboard: `# ==========================================
# Web Dashboard:
# ==========================================
# Open: http://localhost:8080/dashboard
# Shows real-time: tokens, cost, requests, latency, budget

# ==========================================
# CLI Stats:
# ==========================================
ccswitch stats             # Quick summary
ccswitch stats --today     # Today's usage
ccswitch stats --week      # This week
ccswitch stats --detail    # Per-request breakdown

# Sample output:
# ═══════════════════════════════
#  Today's Usage (June 25, 2026)
# ═══════════════════════════════
#  Claude Opus:      12 req   $1.24
#  Claude Sonnet:    45 req   $2.10
#  DeepSeek Chat:   230 req   $0.08
#  DeepSeek V4:      18 req   $0.03
#  ───────────────────────────────
#  TOTAL:           305 req   $3.45 / $10.00
#  Savings vs all-Claude:     $18.20
# ═══════════════════════════════

# Alerts:
# [WARN] Budget 70% consumed ($7.00 / $10.00)
# [WARN] Budget 90% consumed ($9.00 / $10.00)
# [STOP] Daily budget reached. Blocked until tomorrow.`,

  advanced: `# ==========================================
# Strategy 1: Time-based routing
# ==========================================
rules:
  - name: "business-hours"
    pattern: ".*"
    provider: deepseek
    model: deepseek-chat
    time_range: "09:00-18:00"        # work hours → fast & cheap

  - name: "deep-work"
    pattern: ".*"
    provider: claude
    model: claude-opus-4-8
    time_range: "18:00-09:00"        # deep work → best quality

# ==========================================
# Strategy 2: Token-length routing
# ==========================================
rules:
  - name: "small-tasks"
    pattern: ".*"
    provider: deepseek
    model: deepseek-chat
    max_context_tokens: 4000          # small → cheap

  - name: "large-tasks"
    pattern: ".*"
    provider: claude
    model: claude-sonnet-4-6          # large → Claude

# ==========================================
# Strategy 3: Tiered fallback
# ==========================================
rules:
  - name: "try-cheap-first"
    pattern: ".*"
    provider: deepseek
    model: deepseek-chat
    fallback:
      provider: claude
      model: claude-sonnet-4-6
      fallback:
        provider: claude
        model: claude-opus-4-8        # ultimate fallback`,

  cost: `# ==========================================
# Scenario: Typical coding day (300 requests)
# ==========================================
# Mix: 20% complex debug, 40% code gen, 40% simple Q&A

# WITHOUT CCSwitch (all-Claude Opus):
# 300 × ~$0.06 avg = $18.00/day → $540.00/month

# WITHOUT CCSwitch (all-Claude Sonnet):
# 300 × ~$0.015 avg = $4.50/day → $135.00/month

# WITH CCSwitch (smart routing):
# 60 complex → Claude Opus  → 60 × $0.06  = $3.60
# 240 simple → DeepSeek     → 240 × $0.001 = $0.24
# Daily:  $3.84
# Monthly: $115.20
# Savings vs all-Opus:  79% ($424.80/month saved!)
# Savings vs all-Sonnet: 15% ($19.80/month saved!)

# The CCSwitch advantage:
# ✓ Same Claude quality for hard problems
# ✓ DeepSeek speed for everything else
# ✓ One endpoint for all your tools
# ✓ Automatic, invisible routing
# ✓ Real-time cost monitoring`,

  debug: `# Problem: CCSwitch won't start
ps aux | grep ccswitch          # already running?
lsof -i :8080                   # port in use?
ccswitch serve --port 8081      # use different port

# Problem: Claude API 401
curl https://api.anthropic.com/v1/messages \\
  -H "x-api-key: $CLAUDE_API_KEY" \\
  -H "anthropic-version: 2023-06-01" \\
  -H "content-type: application/json" \\
  -d '{"model":"claude-sonnet-4-6","max_tokens":10,"messages":[{"role":"user","content":"hi"}]}'

# Problem: DeepSeek API 401
curl https://api.deepseek.com/v1/models \\
  -H "Authorization: Bearer $DEEPSEEK_API_KEY"

# Problem: "Budget exceeded"
# Increase limit in config.yaml or wait until tomorrow
ccswitch stats --reset-budget

# Problem: Tools can't connect
# Make sure URL includes /v1: http://localhost:8080/v1
curl http://localhost:8080/v1/models`,
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
