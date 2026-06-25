import styles from './Page.module.css'

export default function CodexTutorial() {
  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>🟢 Codex CLI Setup Guide</h2>
        <p className={styles.subtitle}>OpenAI Open-Source CLI Agent — GPT-Powered · Local Sandbox · Multi-Agent</p>
      </div>

      <div className={styles.cases}>

        <TutorialCard title="📋 Prerequisites">
          <CodeBlock>{`# Node.js 18+ required
node -v     # >= 18.0.0

# OpenAI API Key (or Azure / Ollama / any OpenAI-compatible endpoint)
# https://platform.openai.com/api-keys

# Git (for version control integration)
git --version`}</CodeBlock>
        </TutorialCard>

        <TutorialCard title="1️⃣ Install Codex CLI">
          <CodeBlock>{`# Global install via npm
npm install -g @openai/codex

# Or use npx without installing
npx @openai/codex

# Verify
codex --version`}</CodeBlock>
        </TutorialCard>

        <TutorialCard title="2️⃣ Configure API Key">
          <CodeBlock>{`# Set OpenAI key
export OPENAI_API_KEY="sk-your-key-here"

# Or for Azure OpenAI:
export AZURE_OPENAI_API_KEY="your-azure-key"
export AZURE_OPENAI_ENDPOINT="https://your-resource.openai.azure.com"

# Or use local Ollama (free, no API key needed):
export OPENAI_BASE_URL="http://localhost:11434/v1"
export OPENAI_API_KEY="ollama"  # any value for Ollama`}</CodeBlock>
        </TutorialCard>

        <TutorialCard title="3️⃣ Basic Usage">
          <CodeBlock>{`# Start interactive session
codex

# One-shot task (codex plans + executes autonomously)
codex "Create a REST API endpoint for user login in Express"

# Work on a specific file
codex src/auth.ts "Add rate limiting to this login function"

# Specify model
codex --model gpt-4.1 "Refactor the database layer"

# With approval mode (asks before destructive actions)
codex --approval-mode default "Delete unused imports project-wide"`}</CodeBlock>
        </TutorialCard>

        <TutorialCard title="4️⃣ Security: Sandbox Execution">
          <CodeBlock>{`# Codex runs in a local sandbox by default
# Approve/deny each command before execution

# Approval modes:
codex --approval-mode auto         # Auto-approve safe ops
codex --approval-mode default      # Ask for confirmation (recommended)
codex --approval-mode never        # Never auto-approve

# View execution plan before running:
codex --plan "Migrate from JS to TS"

# Dry run (see what it WOULD do without doing it):
codex --dry-run "Add tests for all API routes"`}</CodeBlock>
        </TutorialCard>

        <TutorialCard title="5️⃣ Advanced: Multi-Agent Mode">
          <CodeBlock>{`# Codex can spawn sub-agents for parallel tasks
codex --agents 3 "Write unit tests, integration tests, and e2e tests"

# Custom agent roles:
codex \\
  --agent "architect:plan the system design" \\
  --agent "developer:implement the plan" \\
  --agent "reviewer:code review the implementation" \\
  "Build a chat app with WebSocket support"

# Works with any OpenAI-compatible model:
codex --model deepseek-chat \\
  --base-url https://api.deepseek.com/v1 \\
  "Write a Python script to analyze CSV data"`}</CodeBlock>
        </TutorialCard>

        <TutorialCard title="6️⃣ IDE Integration">
          <CodeBlock>{`# VS Code: install "OpenAI Codex" extension
code --install-extension openai.codex-vscode

# JetBrains: install Codex plugin from marketplace

# Features in IDE:
# - Alt+Enter → "Fix with Codex"
# - Select code → Ctrl+Shift+I → "Explain with Codex"
# - Write comment → Tab → Codex generates implementation
# - Right-click → "Codex: Generate Tests"`}</CodeBlock>
        </TutorialCard>

        <TutorialCard title="🔗 References">
          <ul style={{ paddingLeft: 20, color: 'var(--text-secondary)', lineHeight: 2 }}>
            <li><a href="https://blog.csdn.net/2503_94434664/article/details/159251011" target="_blank" rel="noopener">Codex CLI 教程</a></li>
            <li><a href="https://github.com/openai/codex" target="_blank" rel="noopener">Codex CLI GitHub</a></li>
            <li><a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener">OpenAI API Keys</a></li>
          </ul>
        </TutorialCard>

      </div>
    </div>
  )
}

function TutorialCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: 'var(--bg-card)', borderRadius: 12, padding: 22,
      boxShadow: 'var(--shadow)', marginBottom: 16,
    }}>
      <h3 style={{ marginBottom: 12, color: 'var(--text)', fontSize: 16 }}>{title}</h3>
      {children}
    </div>
  )
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre style={{
      background: '#0f172a', color: '#e2e8f0', borderRadius: 8,
      padding: 16, fontSize: 13, lineHeight: 1.6, overflowX: 'auto',
      whiteSpace: 'pre-wrap', wordBreak: 'break-word',
    }}>
      <code>{children}</code>
    </pre>
  )
}
