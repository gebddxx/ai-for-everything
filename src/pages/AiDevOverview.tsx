import { useT } from '../contexts/LanguageContext'
import { tText, type MultiLang, domainTitle } from '../i18n/translate'
import GeminiTutorial from './GeminiTutorial'
import CodexTutorial from './CodexTutorial'
import DeepSeekTutorial from './DeepSeekTutorial'
import ClaudeCodeTutorial from './ClaudeCodeTutorial'
import AgentFrameworks from './AgentFrameworks'
import AgentAssistants from './AgentAssistants'
import AgentWorkflow from './AgentWorkflow'
import AgentMultiAgent from './AgentMultiAgent'
import AgentToolsOverview from './AgentToolsOverview'
import ApiRelayOverview from './ApiRelayOverview'

const sections = [
  { key: 'gemini', icon: '🔷', title: { en: 'Gemini CLI', 'zh-CN': 'Gemini 教程', 'zh-TW': 'Gemini 教學', ja: 'Gemini チュートリアル', ko: 'Gemini 튜토리얼', es: 'Gemini' }, Component: GeminiTutorial },
  { key: 'codex', icon: '🟢', title: { en: 'Codex CLI', 'zh-CN': 'Codex 教程', 'zh-TW': 'Codex 教學', ja: 'Codex チュートリアル', ko: 'Codex 튜토리얼', es: 'Codex' }, Component: CodexTutorial },
  { key: 'deepseek', icon: '🐋', title: { en: 'DeepSeek Guide', 'zh-CN': 'DeepSeek 教程', 'zh-TW': 'DeepSeek 教學', ja: 'DeepSeek ガイド', ko: 'DeepSeek 가이드', es: 'DeepSeek' }, Component: DeepSeekTutorial },
  { key: 'claude-code', icon: '🟠', title: { en: 'Claude Code', 'zh-CN': 'Claude Code 教程', 'zh-TW': 'Claude Code 教學' }, Component: ClaudeCodeTutorial },
  { key: 'frameworks', icon: '🧰', title: { en: 'Agent Frameworks', 'zh-CN': '智能体框架', 'zh-TW': '智能體框架', ja: 'エージェントFW', ko: '에이전트 FW', es: 'Frameworks' }, Component: AgentFrameworks },
  { key: 'assistants', icon: '💬', title: { en: 'AI Assistants', 'zh-CN': '个人助手', 'zh-TW': '個人助手', ja: 'AIアシスタント', ko: 'AI 어시스턴트', es: 'Asistentes' }, Component: AgentAssistants },
  { key: 'workflow', icon: '⚡', title: { en: 'Workflow', 'zh-CN': '工作流', 'zh-TW': '工作流' }, Component: AgentWorkflow },
  { key: 'multi-agent', icon: '🕸️', title: { en: 'Multi-Agent', 'zh-CN': '多Agent协作', 'zh-TW': '多Agent協作', ja: 'マルチエージェント', ko: '멀티 에이전트', es: 'Multi-agente' }, Component: AgentMultiAgent },
  { key: 'agent-tools', icon: '🤖', title: { en: 'Models & API', 'zh-CN': '大模型 & API', 'zh-TW': '大模型 & API', ja: '大モデル & API', ko: '대모델 & API', es: 'Modelos' }, Component: AgentToolsOverview },
  { key: 'api-relay', icon: '🔌', title: { en: 'API Relay', 'zh-CN': 'API中转', 'zh-TW': 'API中轉', ja: 'API中継', ko: 'API 중계', es: 'API Relay' }, Component: ApiRelayOverview },
]

export default function AiDevOverview() {
  const { lang } = useT()
  const L = (a: MultiLang, b?: string, c?: string) => {
    if (typeof a !== 'string') return tText(a, lang)
    return lang === 'zh-CN' ? (b || a) : lang === 'zh-TW' ? (c || b || a) : a
  }
  return (
    <div>
      <div id="section-overview" style={{
        background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
        borderRadius: 14, padding: '28px 32px', marginBottom: 32, color: '#fff', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -20, right: -10, fontSize: 100, opacity: 0.08 }}>🛠️</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 8px' }}>{L({ en: 'AI Tools & Models', 'zh-CN': 'AI工具 · 大模型', 'zh-TW': 'AI工具 · 大模型', ja: 'AIツール · 大モデル', ko: 'AI 도구 · 대모델', es: 'Herramientas IA · Modelos' })}</h2>
        <p style={{ fontSize: 14, opacity: 0.85, margin: '0 0 20px', maxWidth: 600, lineHeight: 1.6 }}>
          {L({ en: 'Set up AI coding tools, build agents, automate workflows. 7 step-by-step guides with code examples and direct tool links.', 'zh-CN': '搭建AI编程环境、构建智能体、自动化工作流。7个手把手教程，含代码示例和工具直达链接。', 'zh-TW': '搭建AI編程環境、構建智能體、自動化工作流。7個手把手教學，含程式碼範例和工具直達鏈接。', ja: 'AIコーディングツールのセットアップ、エージェント構築、ワークフロー自動化。', ko: 'AI 코딩 도구 설정, 에이전트 구축, 워크플로우 자동화.', es: 'Configure herramientas de IA, construya agentes y automatice flujos de trabajo.' })}
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {sections.map(s => (<span key={s.key} onClick={() => { const el = document.getElementById(`section-${s.key}`); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }} style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', padding: '4px 12px', borderRadius: 16, fontSize: 13, cursor: 'pointer', fontWeight: 500 }}>{s.icon} {domainTitle(s.title, lang)}</span>))}
        </div>
      </div>
      {sections.map(({ key, Component }, i) => (
        <div key={key} id={`section-${key}`} style={{ scrollMarginTop: 80 }}>
          {i > 0 && <div style={{ height: 2, background: 'linear-gradient(90deg, var(--primary), transparent)', margin: '32px 0 40px', borderRadius: 1 }} />}
          <Component />
        </div>
      ))}
    </div>
  )
}
