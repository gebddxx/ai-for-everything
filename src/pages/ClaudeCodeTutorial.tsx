import { useT } from '../contexts/LanguageContext'
import styles from './Page.module.css'
import { pStyle, ulStyle, Card, Code } from '../components/TutorialCard'
export default function ClaudeCodeTutorial() {
  const { lang } = useT()
  const l = {
    pageTitle: lang === 'zh-CN' ? 'Claude Code 完整安装教程' : lang === 'zh-TW' ? 'Claude Code 完整安裝教學' : 'Claude Code — Complete Setup Guide',
    pageSub: lang === 'zh-CN' ? 'Anthropic CLI · API接入 · MCP扩展 · 实战技巧' : lang === 'zh-TW' ? 'Anthropic CLI · API接入 · MCP擴展 · 實戰技巧' : 'Anthropic CLI · API Setup · MCP Extensions · Pro Tips',
    whatIs: lang === 'zh-CN' ? '什么是 Claude Code？' : lang === 'zh-TW' ? '什麼是 Claude Code？' : 'What is Claude Code?',
    whatIsBody: lang === 'zh-CN' ? 'Claude Code 是 Anthropic 官方推出的终端 AI 编程助手。它直接在终端运行，能理解整个代码库、读写文件、执行命令、管理 Git，还能通过 MCP 协议扩展无限能力。2025 年最热门 AI 编程工具之一，开发者必备。' : lang === 'zh-TW' ? 'Claude Code 是 Anthropic 官方推出的終端 AI 編程助手。它直接在終端運行，能理解整個程式庫、讀寫檔案、執行命令、管理 Git，還能通過 MCP 協議擴展無限能力。' : 'Claude Code is Anthropic\'s official terminal AI coding agent. It runs in your terminal, understands your entire codebase, reads/writes files, executes commands, manages Git, and extends via MCP protocol. One of the hottest AI dev tools of 2025.',
    step1: lang === 'zh-CN' ? '第1步：安装 (3种方式)' : lang === 'zh-TW' ? '第1步：安裝 (3種方式)' : 'Step 1: Installation',
    step2: lang === 'zh-CN' ? '第2步：认证配置 (4种方式)' : lang === 'zh-TW' ? '第2步：認證配置 (4種方式)' : 'Step 2: Authentication',
    step3: lang === 'zh-CN' ? '第3步：基础命令速查' : lang === 'zh-TW' ? '第3步：基礎命令速查' : 'Step 3: Command Reference',
    step4: lang === 'zh-CN' ? '第4步：MCP 扩展配置' : lang === 'zh-TW' ? '第4步：MCP 擴展配置' : 'Step 4: MCP Extensions',
    step5: lang === 'zh-CN' ? '第5步：实战工作流' : lang === 'zh-TW' ? '第5步：實戰工作流' : 'Step 5: Real Workflows',
    step6: lang === 'zh-CN' ? '第6步：国内使用方案' : lang === 'zh-TW' ? '第6步：國內使用方案' : 'Step 6: China Access Tips',
    links: lang === 'zh-CN' ? '链接与资源' : lang === 'zh-TW' ? '連結與資源' : 'Links & Resources',
  }
  return (<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>🟠 {l.pageTitle}</h2><p className={styles.subtitle}>{l.pageSub}</p></div><div className={styles.cases}>
    <Card title={l.whatIs}><p style={pStyle}>{l.whatIsBody}</p></Card>
    <Card title={l.step1}><Code>{CODE.step1}</Code></Card>
    <Card title={l.step2}><Code>{CODE.step2}</Code></Card>
    <Card title={l.step3}><Code>{CODE.step3}</Code></Card>
    <Card title={l.step4}><Code>{CODE.step4}</Code></Card>
    <Card title={l.step5}><Code>{CODE.step5}</Code></Card>
    <Card title={l.step6}><Code>{CODE.step6}</Code></Card>
    <Card title={l.links}><ul style={ulStyle}>
      <li><a href="https://claude.ai/" target="_blank" rel="noopener">Claude 官网</a></li>
      <li><a href="https://docs.anthropic.com/en/docs/claude-code" target="_blank" rel="noopener">Claude Code 官方文档</a></li>
      <li><a href="https://github.com/modelcontextprotocol/servers" target="_blank" rel="noopener">MCP 官方服务器列表</a></li>
          </ul></Card>
  </div></div>)
}
const CODE = {
  step1: `👇 点击链接：https://claude.ai/ （下载安装包）
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
npm update -g @anthropic-ai/claude-code`,
  step2: `👇 获取 API Key：https://console.anthropic.com/ （注册送 $5 额度）
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
export ANTHROPIC_VERTEX_PROJECT_ID=your-project`,
  step3: `# 启动
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
claude "Write unit tests for src/auth.ts"`,
  step4: `👇 查看所有可用 MCP 服务：https://github.com/modelcontextprotocol/servers
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
/mcp                 # 在对话中查看 MCP 状态`,
  step5: `# ===== 工作流 1：新项目快速上手 =====
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
  - Suggest improvements"`,
  step6: `👇 Kimi API：https://platform.moonshot.cn/
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
# 3. API Key 保护好，不要泄露`,
}
