import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

export default function AgentToolsOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (<div className={styles.page}>
    <div className={styles.head}><h2 className={styles.title}>🤖 {L('AI Agents Directory','智能体目录','智能體目錄')}</h2><p className={styles.subtitle}>{L('40+ autonomous AI agents — from coding to task automation','40+ 自主AI智能体——从编程到任务自动化','40+ 自主AI智能體——從編程到任務自動化')}</p></div>
    <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#6366f1" />
  </div>)
}

const links: ToolLink[] = [
  // 通用智能体平台
  {name:'ChatGPT Tasks',url:'https://chat.openai.com/',desc:{en:'OpenAI, GPT-4.1, scheduled tasks + browsing',zh:'OpenAI GPT-4.1,定时任务+联网搜索'},cat:'平台',icon:'⚫'},
  {name:'Claude',url:'https://claude.ai/',desc:{en:'Anthropic, 200K context, Artifacts, Projects',zh:'Anthropic,200K上下文,Artifacts+Projects'},cat:'平台',icon:'🟠'},
  {name:'Gemini',url:'https://gemini.google.com/',desc:{en:'Google, 1M context, Google apps, Deep Research',zh:'谷歌,100万上下文,深度研究+谷歌全家桶'},cat:'平台',icon:'🔵'},
  {name:'DeepSeek',url:'https://chat.deepseek.com/',desc:{en:'1M context, DeepThink R1, extremely affordable',zh:'百万上下文,DeepThink深度推理,高性价比'},cat:'平台',icon:'🐋'},
  // 自主执行智能体
  {name:'Manus',url:'https://manus.im/',desc:{en:'Autonomous agent, prompt→execution, multi-step tasks',zh:'自主智能体,提示词→自动执行,多步骤任务'},cat:'自主',icon:'🤖'},
  {name:'OpenClaw 龙虾',url:'https://github.com/openclaw/openclaw',desc:{en:'Open-source AI agent, browser ops, file system access',zh:'开源AI智能体,操控浏览器+文件系统自动执行'},cat:'自主',icon:'🦞'},
  {name:'AutoGPT',url:'https://github.com/Significant-Gravitas/AutoGPT',desc:{en:'Pioneer autonomous agent, GPT-4, internet+file access',zh:'自主智能体先驱,GPT-4驱动,联网+文件操作'},cat:'自主',icon:'🤖'},
  {name:'AgentGPT',url:'https://agentgpt.reworkd.ai/',desc:{en:'Browser-based AutoGPT, deploy agents without code',zh:'浏览器端AutoGPT,无需代码部署智能体'},cat:'自主',icon:'🧠'},
  {name:'SuperAGI',url:'https://superagi.com/',desc:{en:'Open-source autonomous agent framework, tool library',zh:'开源自主智能体框架,工具库+市场'},cat:'自主',icon:'🦸'},
  {name:'BabyAGI',url:'https://github.com/yoheinakajima/babyagi',desc:{en:'Minimal autonomous task-driven agent, 140 lines',zh:'极简自主任务驱动智能体,仅140行代码'},cat:'自主',icon:'👶'},
  // AI编程智能体
  {name:'Cursor',url:'https://cursor.com/',desc:{en:'AI-first IDE, agent mode, multi-file edits',zh:'AI编程IDE,Agent模式,多文件编辑'},cat:'编程',icon:'🖱️'},
  {name:'GitHub Copilot',url:'https://github.com/features/copilot',desc:{en:'VS Code AI, agent mode in Copilot Chat',zh:'VS Code AI补全,Agent模式对话编程'},cat:'编程',icon:'🐙'},
  {name:'Devin',url:'https://www.cognition.ai/',desc:{en:'First AI software engineer, full app from prompt',zh:'首个AI软件工程师,提示词→完整应用'},cat:'编程',icon:'🧑‍💻'},
  {name:'Replit Agent',url:'https://replit.com/',desc:{en:'Browser IDE + AI agent, prototype→deploy',zh:'浏览器IDE+AI Agent,原型→部署'},cat:'编程',icon:'🔄'},
  {name:'Claude Code',url:'https://docs.anthropic.com/en/docs/claude-code',desc:{en:'Terminal AI agent, reads/writes codebase, CLI',zh:'终端AI智能体,读写代码库,命令行操作'},cat:'编程',icon:'💻'},
  {name:'Windsurf',url:'https://codeium.com/windsurf',desc:{en:'AI IDE with Cascade agent, multi-file flow',zh:'AI IDE,Cascade智能体,多文件流式编辑'},cat:'编程',icon:'🌊'},
  {name:'Bolt.new',url:'https://bolt.new/',desc:{en:'StackBlitz agent, prompt→fullstack app, browser',zh:'StackBlitz智能体,提示词→全栈应用,浏览器即用'},cat:'编程',icon:'⚡'},
  {name:'Lovable',url:'https://lovable.dev/',desc:{en:'GPT Engineer, build SaaS from description',zh:'GPT工程师,文字描述→完整SaaS应用'},cat:'编程',icon:'❤️'},
  // 企业智能体
  {name:'Salesforce Agentforce',url:'https://www.salesforce.com/agentforce/',desc:{en:'Enterprise AI agents, CRM automation, 24/7',zh:'企业AI智能体,CRM自动化,7×24h服务'},cat:'企业',icon:'☁️'},
  {name:'Microsoft Copilot',url:'https://copilot.microsoft.com/',desc:{en:'Office 365 AI agent, Word/Excel/PPT/Teams',zh:'Office 365 AI,Word/Excel/PPT/Teams全集成'},cat:'企业',icon:'🪟'},
  {name:'钉钉AI Agent',url:'https://www.dingtalk.com/',desc:{en:'DingTalk AI workspace, enterprise agent builder',zh:'钉钉AI工作平台,企业智能体搭建'},cat:'企业',icon:'💙'},
  {name:'飞书智能伙伴',url:'https://www.feishu.cn/',desc:{en:'Feishu AI agent, docs+meeting+automation',zh:'飞书AI智能体,文档/会议/审批自动化'},cat:'企业',icon:'🐦'},
  {name:'Coze 扣子',url:'https://www.coze.cn/',desc:{en:'ByteDance, zero-code AI bot builder, plugins+API',zh:'字节跳动,零代码AI Bot搭建,插件+API'},cat:'企业',icon:'🤖'},
  {name:'Dify',url:'https://dify.ai/',desc:{en:'Open-source LLM app, RAG+Agent framework',zh:'开源LLM应用,RAG+Agent框架,工作流'},cat:'企业',icon:'🔮'},
  // 多Agent框架
  {name:'CrewAI',url:'https://www.crewai.com/',desc:{en:'Multi-agent orchestration, role-based team AI',zh:'多Agent编排,角色化团队AI协作'},cat:'框架',icon:'👥'},
  {name:'LangGraph',url:'https://www.langchain.com/langgraph',desc:{en:'LangChain, stateful multi-agent workflows',zh:'LangChain出品,有状态多Agent工作流'},cat:'框架',icon:'🦜'},
  {name:'AutoGen',url:'https://microsoft.github.io/autogen/',desc:{en:'Microsoft, multi-agent conversation framework',zh:'微软出品,多Agent对话协作框架'},cat:'框架',icon:'🪟'},
  {name:'MetaGPT',url:'https://github.com/geekan/MetaGPT',desc:{en:'Multi-agent meta-programming, software company AI',zh:'多Agent元编程,模拟软件公司AI团队'},cat:'框架',icon:'🏢'},
  {name:'Swarm (OpenAI)',url:'https://github.com/openai/swarm',desc:{en:'Lightweight multi-agent orchestration, OpenAI',zh:'轻量级多Agent编排,OpenAI实验性框架'},cat:'框架',icon:'🕸️'},
  {name:'n8n',url:'https://n8n.io/',desc:{en:'Open-source workflow automation, AI agent nodes',zh:'开源工作流自动化,AI Agent节点'},cat:'框架',icon:'⚡'},
  // 垂直领域
  {name:'Perplexity',url:'https://www.perplexity.ai/',desc:{en:'AI search agent, real-time research + citations',zh:'AI搜索智能体,实时研究+来源引用'},cat:'专业',icon:'🔍'},
  {name:'Harvey AI',url:'https://www.harvey.ai/',desc:{en:'Legal AI agent, contract review + research',zh:'法律AI智能体,合同审查+法律研究'},cat:'专业',icon:'⚖️'},
  {name:'Amazon Q',url:'https://aws.amazon.com/q/',desc:{en:'AWS AI agent, code+infra+business intelligence',zh:'AWS AI智能体,代码/基础设施/商业智能'},cat:'专业',icon:'☁️'},
  {name:'Adept ACT-1',url:'https://www.adept.ai/',desc:{en:'AI agent trained to use any software interface',zh:'AI智能体,训练用于操作任意软件界面'},cat:'专业',icon:'🖥️'},
]
