import styles from './Page.module.css'

export default function CCSwitchTutorial() {
  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>🔀 CCSwitch + Claude + DeepSeek</h2>
        <p className={styles.subtitle}>Multi-Model Router — Claude for Deep Work · DeepSeek for Speed · Smart Fallback</p>
      </div>

      <div className={styles.cases}>

        <TutorialCard title="💡 Why CCSwitch?">
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            CCSwitch is a lightweight proxy/router that sits between your IDE and multiple AI APIs.
            It intelligently routes requests to Claude (best for complex reasoning), DeepSeek (fast & cheap),
            or falls back automatically. Think of it as a{" "}
            <strong>reverse proxy for LLMs</strong> that optimizes cost, speed, and quality.
          </p>
        </TutorialCard>

        <TutorialCard title="📋 Prerequisites">
          <CodeBlock>{`# Python 3.10+ required
python --version

# API keys needed:
# - Claude API: https://console.anthropic.com/
# - DeepSeek API: https://platform.deepseek.com/

# Git
git --version`}</CodeBlock>
        </TutorialCard>

        <TutorialCard title="1️⃣ Install CCSwitch">
          <CodeBlock>{`# Install via pip
pip install ccswitch

# Or from source
git clone https://github.com/ccswitch/ccswitch.git
cd ccswitch
pip install -e .

# Verify
ccswitch --version`}</CodeBlock>
        </TutorialCard>

        <TutorialCard title="2️⃣ Configure API Keys & Routing Rules">
          <CodeBlock>{`# Create config: ~/.ccswitch/config.yaml
providers:
  claude:
    api_key: "sk-ant-xxx"
    base_url: "https://api.anthropic.com"
    models:
      - claude-fable-5        # latest Claude
      - claude-opus-4-8       # heavy reasoning
      - claude-sonnet-4-6     # balanced

  deepseek:
    api_key: "sk-ds-xxx"
    base_url: "https://api.deepseek.com"
    models:
      - deepseek-v4-pro      # strongest
      - deepseek-chat         # fast & cheap

# Routing rules (priority top → down)
rules:
  - pattern: "refactor|optimize|review|security"
    provider: claude
    model: claude-opus-4-8

  - pattern: "generate|boilerplate|CRUD|test"
    provider: deepseek
    model: deepseek-chat

  - pattern: "explain|summarize|document"
    provider: deepseek
    model: deepseek-v4-pro

  # Default fallback
  - provider: claude
    model: claude-sonnet-4-6`}</CodeBlock>
        </TutorialCard>

        <TutorialCard title="3️⃣ Start CCSwitch Proxy">
          <CodeBlock>{`# Start local proxy on port 8080
ccswitch serve --port 8080

# Output:
# ✓ Claude API connected (claude-opus-4-8)
# ✓ DeepSeek API connected (deepseek-chat)
# ✓ Proxy listening on http://localhost:8080/v1

# Test the proxy:
curl http://localhost:8080/v1/models`}</CodeBlock>
        </TutorialCard>

        <TutorialCard title="4️⃣ Connect VS Code / Cursor / Claude Code">
          <CodeBlock>{`# ==========================================
# For Claude Code (Anthropic CLI)
# ==========================================
export ANTHROPIC_BASE_URL="http://localhost:8080/v1"
claude

# Now Claude Code routes through CCSwitch:
# - Complex requests → Claude API
# - Simple requests → DeepSeek
# - Both share the same session!

# ==========================================
# For VS Code / Cline / Continue
# ==========================================
# Settings → Configure API Provider → OpenAI Compatible
# Base URL: http://localhost:8080/v1
# API Key: ccswitch (any value works)

# ==========================================
# For Cursor
# ==========================================
# Settings → Models → Add Model
# Provider: OpenAI Compatible
# Base URL: http://localhost:8080/v1
# API Key: ccswitch`}</CodeBlock>
        </TutorialCard>

        <TutorialCard title="5️⃣ Cost Optimization Strategies">
          <CodeBlock>{`# Strategy 1: Task-based routing (in config.yaml)
rules:
  - pattern: ".*"               # default
    provider: deepseek          # cheap for most tasks
    model: deepseek-chat

  - pattern: "debug|bug|error|fix"
    provider: claude            # Claude for tricky bugs
    model: claude-opus-4-8

# Strategy 2: Token budget monitor
ccswitch serve --max-daily-tokens 1000000  # $ cap per day

# Strategy 3: Usage dashboard
ccswitch dashboard              # Opens http://localhost:8080/dashboard
# Shows: tokens used, cost per provider, routing stats`}</CodeBlock>
        </TutorialCard>

        <TutorialCard title="6️⃣ Production Tips">
          <CodeBlock>{`# Run as systemd service (Linux)
sudo tee /etc/systemd/system/ccswitch.service << 'EOF'
[Unit]
Description=CCSwitch AI Router
After=network.target

[Service]
Type=simple
User=your-user
ExecStart=/usr/local/bin/ccswitch serve --port 8080
Restart=on-failure

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl enable --now ccswitch

# Now all your dev tools can use http://localhost:8080/v1
# as the single AI endpoint — CCSwitch handles the rest.`}</CodeBlock>
        </TutorialCard>

        <TutorialCard title="📊 Quick Comparison">
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border)' }}>
                  <th style={{ padding: 8, textAlign: 'left' }}>Method</th>
                  <th style={{ padding: 8, textAlign: 'left' }}>Cost</th>
                  <th style={{ padding: 8, textAlign: 'left' }}>Best For</th>
                  <th style={{ padding: 8, textAlign: 'left' }}>Setup</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: 8 }}>🔷 Gemini CLI</td>
                  <td style={{ padding: 8 }}>Free tier available</td>
                  <td style={{ padding: 8 }}>Google ecosystem</td>
                  <td style={{ padding: 8 }}>Easy</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: 8 }}>🟢 Codex CLI</td>
                  <td style={{ padding: 8 }}>API pay-per-use</td>
                  <td style={{ padding: 8 }}>Multi-agent tasks</td>
                  <td style={{ padding: 8 }}>Easy</td>
                </tr>
                <tr>
                  <td style={{ padding: 8 }}>🔀 CCSwitch</td>
                  <td style={{ padding: 8 }}>Optimized (route to cheap model)</td>
                  <td style={{ padding: 8 }}>Cost control + flexibility</td>
                  <td style={{ padding: 8 }}>Medium</td>
                </tr>
              </tbody>
            </table>
          </div>
        </TutorialCard>

        <TutorialCard title="🔗 References">
          <ul style={{ paddingLeft: 20, color: 'var(--text-secondary)', lineHeight: 2 }}>
            <li><a href="https://blog.csdn.net/m0_74204940/article/details/160633548" target="_blank" rel="noopener">CCSwitch + Claude + DeepSeek 教程</a></li>
            <li><a href="https://console.anthropic.com/" target="_blank" rel="noopener">Anthropic Console (Claude API)</a></li>
            <li><a href="https://platform.deepseek.com/" target="_blank" rel="noopener">DeepSeek Platform</a></li>
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
