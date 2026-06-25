import { useT } from '../contexts/LanguageContext'
import styles from './Page.module.css'

const methods = [
  { key: 'gemini', icon: '🔷', title: 'Gemini CLI', desc: 'Google official CLI agent. Open source, MCP support, terminal-native.', link: 'https://www.gemini-cnblog.com/blog/gemini-chinese-official.html' },
  { key: 'codex', icon: '🟢', title: 'Codex CLI', desc: 'OpenAI open-source CLI coding agent. GPT-powered, local sandbox execution.', link: 'https://blog.csdn.net/2503_94434664/article/details/159251011' },
  { key: 'ccswitch', icon: '🔀', title: 'CCSwitch + Claude + DeepSeek', desc: 'Multi-model switcher. Route between Claude and DeepSeek for cost/performance balance.', link: 'https://blog.csdn.net/m0_74204940/article/details/160633548' },
]

export default function VibeOverview() {
  const { t, lang } = useT()

  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>💻 AI Vibe Coding</h2>
        <p className={styles.subtitle}>
          {lang === 'zh-CN' ? '三种方法搭建你的 AI 编程环境'
            : lang === 'zh-TW' ? '三種方法搭建你的 AI 編程環境'
            : 'Three ways to set up your AI-powered coding environment'}
        </p>
      </div>

      <div className={styles.summary}>
        {lang === 'zh-CN'
          ? 'AI Vibe Coding 是当下最火的开发范式——用自然语言描述需求，AI 帮你写代码。下面整理了三种主流方案：Google 官方的 Gemini CLI、OpenAI 开源的 Codex CLI、以及通过 CCSwitch 组合 Claude + DeepSeek。选择最适合你的方式开始吧。'
          : lang === 'zh-TW'
            ? 'AI Vibe Coding 是當下最火的開發範式——用自然語言描述需求，AI 幫你寫程式。下面整理了三種主流方案：Google 官方的 Gemini CLI、OpenAI 開源的 Codex CLI、以及通過 CCSwitch 組合 Claude + DeepSeek。選擇最適合你的方式開始吧。'
            : 'AI Vibe Coding is the hottest dev paradigm right now — describe what you want in natural language, and AI writes the code. Here are three mainstream approaches: Google\'s official Gemini CLI, OpenAI\'s open-source Codex CLI, and CCSwitch combining Claude + DeepSeek. Pick the one that fits you best.'}
      </div>

      <div className={styles.domainGrid}>
        {methods.map((m) => (
          <div key={m.key} className={styles.domainCard} style={{ borderTop: '4px solid #a855f7' }}>
            <div className={styles.domainHead}>
              <span className={styles.domainIcon}>{m.icon}</span>
            </div>
            <h3 className={styles.domainTitle}>{m.title}</h3>
            <p className={styles.domainDesc}>{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
