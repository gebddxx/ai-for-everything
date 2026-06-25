import { useT } from '../contexts/LanguageContext';import LinkNav,{type ToolLink}from'../components/LinkNav';import styles from'./Page.module.css'
const links:ToolLink[]=[
{name:'LangChain',url:'https://www.langchain.com/',desc:{en:'Most popular, 700+ integrations, Python/JS',zh:'最流行框架,700+集成,Python/JS双语言'},cat:'frameworks',icon:'🦜'},
{name:'CrewAI',url:'https://crewai.com/',desc:{en:'Role-based multi-agent, simple API',zh:'角色化多Agent框架,API简洁易上手'},cat:'frameworks',icon:'👥'},
{name:'AutoGen',url:'https://microsoft.github.io/autogen/',desc:{en:'Microsoft, multi-agent, human-in-loop',zh:'微软出品,多Agent对话,人在回路控制'},cat:'frameworks',icon:'🔄'},
{name:'Dify',url:'https://dify.ai/',desc:{en:'Visual LLM workflow, RAG, agents, one-click API',zh:'可视化工作流,RAG管道,Agent模式,一键API'},cat:'frameworks',icon:'🧩'},
{name:'Coze',url:'https://www.coze.com/',desc:{en:'ByteDance, publish bots to WeChat/DingTalk/Feishu',zh:'字节跳动出品,可发布到微信/钉钉/飞书'},cat:'frameworks',icon:'🤖'},
{name:'n8n',url:'https://n8n.io/',desc:{en:'Self-hosted, 400+ nodes, AI workflow automation',zh:'自托管,400+节点,AI工作流自动化'},cat:'frameworks',icon:'🔗'},
{name:'Flowise',url:'https://flowiseai.com/',desc:{en:'Drag-and-drop LLM chain builder, open source',zh:'拖拽式LLM链路构建器,开源免费'},cat:'frameworks',icon:'🌊'},
{name:'Langflow',url:'https://www.langflow.org/',desc:{en:'Visual LangChain builder, low-code',zh:'可视化LangChain构建器,低代码'},cat:'frameworks',icon:'🧪'},
{name:'ChatGPT GPTs',url:'https://chat.openai.com/',desc:{en:'No-code custom GPTs, upload knowledge, share',zh:'零代码定制GPT,上传知识库,可分享/出售'},cat:'assistants',icon:'⚫'},
{name:'Claude Projects',url:'https://claude.ai/',desc:{en:'Custom instructions + knowledge base, team sharing',zh:'自定义指令+知识库,团队共享,200K上下文'},cat:'assistants',icon:'🟠'},
{name:'Gemini Gems',url:'https://gemini.google.com/',desc:{en:'Google ecosystem, personalized AI assistants',zh:'谷歌生态,个性化AI助手,自定义指令'},cat:'assistants',icon:'💎'},
{name:'Replit Agent',url:'https://replit.com/',desc:{en:'Natural language→full-stack app, auto-deploy',zh:'自然语言描述→全栈应用,自动部署'},cat:'assistants',icon:'⚡'},
{name:'Devin',url:'https://www.cognition.ai/',desc:{en:'AI software engineer, autonomous coding',zh:'AI软件工程师,全自主编程,业界领先'},cat:'assistants',icon:'🧑‍💻'},
{name:'Bolt.new',url:'https://bolt.new/',desc:{en:'StackBlitz, prompt→full-stack app in browser',zh:'浏览器内Prompt→全栈应用,即时预览'},cat:'assistants',icon:'⚡'},
{name:'Make',url:'https://www.make.com/',desc:{en:'2000+ app integrations, visual scenario builder',zh:'2000+应用集成,可视化场景构建器'},cat:'workflow',icon:'🧶'},
{name:'Zapier',url:'https://zapier.com/',desc:{en:'7000+ apps, easiest automation platform',zh:'7000+应用,最易上手的自动化平台'},cat:'workflow',icon:'⚡'},
{name:'AgentGPT',url:'https://agentgpt.reworkd.ai/',desc:{en:'Autonomous AI agents in browser, goal-based',zh:'浏览器内自主AI Agent,目标驱动执行'},cat:'multi',icon:'🎯'},
{name:'BabyAGI',url:'https://github.com/yoheinakajima/babyagi',desc:{en:'Classic autonomous task-driven agent',zh:'经典自主任务驱动Agent,AI Agent先驱'},cat:'multi',icon:'👶'},
{name:'ChatDev',url:'https://github.com/OpenBMB/ChatDev',desc:{en:'Multi-agent software company simulation',zh:'多Agent模拟软件公司,自动协作开发'},cat:'multi',icon:'💼'},
{name:'MetaGPT',url:'https://github.com/geekan/MetaGPT',desc:{en:'Multi-agent meta-programming framework',zh:'多Agent元编程框架,自动生成完整项目'},cat:'multi',icon:'🧠'},
]
export default function AgentOverview({ scrollTo }:{ scrollTo?: string }){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>🤖 {L('Agents & Automation','智能体','智能體')}</h2><p className={styles.subtitle}>{L('20 tools — Frameworks, Assistants, Workflows','20款工具——框架、助手、自动化','20款工具——框架、助手、自動化')}</p></div>
<LinkNav links={links} lang={lang as'en'|'zh-CN'|'zh-TW'} color="#6366f1" scrollTo={scrollTo} catNames={{frameworks:L('Agent Frameworks','Agent 框架','Agent 框架'),assistants:L('AI Assistants','AI 助手','AI 助手'),workflow:L('Workflow Automation','工作流自动化','工作流自動化'),multi:L('Multi-Agent','多Agent 系统','多Agent 系統')}}/></div>)}
