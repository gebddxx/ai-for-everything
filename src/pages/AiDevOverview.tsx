import { useT } from '../contexts/LanguageContext'
import GeminiTutorial from './GeminiTutorial'
import CodexTutorial from './CodexTutorial'
import CCSwitchTutorial from './CCSwitchTutorial'
import AgentFrameworks from './AgentFrameworks'
import AgentAssistants from './AgentAssistants'
import AgentWorkflow from './AgentWorkflow'
import AgentMultiAgent from './AgentMultiAgent'

const sections = [
  { key: 'gemini', icon: '🔷', title: { en: 'Gemini CLI', 'zh-CN': 'Gemini CLI', 'zh-TW': 'Gemini CLI' }, Component: GeminiTutorial },
  { key: 'codex', icon: '🟢', title: { en: 'Codex CLI', 'zh-CN': 'Codex CLI', 'zh-TW': 'Codex CLI' }, Component: CodexTutorial },
  { key: 'ccswitch', icon: '🔀', title: { en: 'CCSwitch', 'zh-CN': 'CCSwitch', 'zh-TW': 'CCSwitch' }, Component: CCSwitchTutorial },
  { key: 'frameworks', icon: '🧰', title: { en: 'Agent Frameworks', 'zh-CN': 'Agent框架', 'zh-TW': 'Agent框架' }, Component: AgentFrameworks },
  { key: 'assistants', icon: '💬', title: { en: 'AI Assistants', 'zh-CN': '个人助手', 'zh-TW': '個人助手' }, Component: AgentAssistants },
  { key: 'workflow', icon: '⚡', title: { en: 'Workflow', 'zh-CN': '工作流', 'zh-TW': '工作流' }, Component: AgentWorkflow },
  { key: 'multi-agent', icon: '🕸️', title: { en: 'Multi-Agent', 'zh-CN': '多Agent', 'zh-TW': '多Agent' }, Component: AgentMultiAgent },
]

export default function AiDevOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (
    <div>
      <div id="section-overview" style={{
        background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
        borderRadius: 14, padding: '28px 32px', marginBottom: 32, color: '#fff', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -20, right: -10, fontSize: 100, opacity: 0.08 }}>🛠️</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 8px' }}>{L('AI Dev & Agents', 'AI开发 · 智能体', 'AI開發 · 智能體')}</h2>
        <p style={{ fontSize: 14, opacity: 0.85, margin: '0 0 20px', maxWidth: 600, lineHeight: 1.6 }}>
          {L('Set up AI coding tools, build agents, automate workflows. 7 step-by-step guides with code examples and direct tool links.', '搭建AI编程环境、构建智能体、自动化工作流。7个手把手教程，含代码示例和工具直达链接。', '搭建AI編程環境、構建智能體、自動化工作流。7個手把手教學，含程式碼範例和工具直達鏈接。')}
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {sections.map(s => (<span key={s.key} onClick={() => { const el = document.getElementById(`section-${s.key}`); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }} style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', padding: '4px 12px', borderRadius: 16, fontSize: 13, cursor: 'pointer', fontWeight: 500 }}>{s.icon} {s.title[lang as 'en'|'zh-CN'|'zh-TW']}</span>))}
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
