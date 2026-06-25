import styles from './Page.module.css'

export default function GeminiTutorial() {
  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>🔷 Gemini CLI Setup Guide</h2>
        <p className={styles.subtitle}>Google Official CLI Agent — Open Source · MCP Support · Terminal-Native</p>
      </div>

      <div className={styles.cases}>

        <TutorialCard title="📋 Prerequisites">
          <CodeBlock>{`# Node.js 18+ required
node -v     # should be >= 18.0.0
npm -v      # should be >= 9.0.0

# Also need a Google API Key:
# https://aistudio.google.com/apikey`}</CodeBlock>
        </TutorialCard>

        <TutorialCard title="1️⃣ Install Gemini CLI">
          <CodeBlock>{`# Global install via npm
npm install -g @google/gemini-cli

# Verify installation
gemini --version`}</CodeBlock>
        </TutorialCard>

        <TutorialCard title="2️⃣ Authentication">
          <CodeBlock>{`# Set your API key
export GEMINI_API_KEY="your-api-key-here"

# Or add to ~/.bashrc / ~/.zshrc for persistence
echo 'export GEMINI_API_KEY="your-api-key-here"' >> ~/.bashrc

# For fish shell:
set -Ux GEMINI_API_KEY "your-api-key-here"`}</CodeBlock>
        </TutorialCard>

        <TutorialCard title="3️⃣ Basic Usage">
          <CodeBlock>{`# Interactive mode — opens a REPL in your terminal
gemini

# One-shot: ask a question about your codebase
gemini "Explain the architecture of this project"

# Generate code with context from your files
gemini "Add input validation to src/auth.ts"

# Use specific model
gemini --model gemini-2.5-pro "Refactor this function"`}</CodeBlock>
        </TutorialCard>

        <TutorialCard title="4️⃣ MCP (Model Context Protocol) Integration">
          <CodeBlock>{`# Create MCP config: ~/.gemini/mcp.json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-filesystem", "."]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-github"]
    }
  }
}

# Gemini CLI auto-discovers MCP servers from this config
# Now it can read/write files, manage GitHub repos, etc.`}</CodeBlock>
        </TutorialCard>

        <TutorialCard title="5️⃣ VS Code Integration">
          <CodeBlock>{`# Install Gemini Code Assist extension
# VS Code Marketplace → search "Gemini Code Assist"
# Or via CLI:
code --install-extension google.geminicodeassist

# Features:
# - Inline code completion
# - Chat panel for code questions
# - Code generation from comments
# - Refactoring suggestions`}</CodeBlock>
        </TutorialCard>

        <TutorialCard title="🛠 Common Workflows">
          <CodeBlock>{`# Code review
gemini "Review src/ for security issues and suggest fixes"

# Documentation generation
gemini "Generate JSDoc comments for all functions in src/utils/"

# Test generation
gemini "Write unit tests for src/components/Header.tsx"

# Migration assistance
gemini "Help me migrate from JS to TS for this project"

# Explain complex code
gemini "Explain what this regex does: /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/"`}</CodeBlock>
        </TutorialCard>

        <TutorialCard title="🔗 References">
          <ul style={{ paddingLeft: 20, color: 'var(--text-secondary)', lineHeight: 2 }}>
            <li><a href="https://www.gemini-cnblog.com/blog/gemini-chinese-official.html" target="_blank" rel="noopener">Gemini CLI 中文教程</a></li>
            <li><a href="https://github.com/google-gemini/gemini-cli" target="_blank" rel="noopener">Gemini CLI GitHub</a></li>
            <li><a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">Get API Key</a></li>
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
