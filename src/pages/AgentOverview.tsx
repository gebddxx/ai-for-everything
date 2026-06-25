import { useT } from '../contexts/LanguageContext';import LinkNav,{type ToolLink}from'../components/LinkNav';import styles from'./Page.module.css'
const links:ToolLink[]=[
{n:'LangChain',u:'https://www.langchain.com/',d:{en:'Most popular, 700+ integrations, Python/JS',zh:'最流行框架,700+集成,Python/JS双语言'},c:'frameworks',i:'🦜'},
{n:'CrewAI',u:'https://crewai.com/',d:{en:'Role-based multi-agent, simple API',zh:'角色化多Agent框架,API简洁易上手'},c:'frameworks',i:'👥'},
{n:'AutoGen',u:'https://microsoft.github.io/autogen/',d:{en:'Microsoft, multi-agent, human-in-loop',zh:'微软出品,多Agent对话,人在回路控制'},c:'frameworks',i:'🔄'},
{n:'Dify',u:'https://dify.ai/',d:{en:'Visual LLM workflow, RAG, agents, one-click API',zh:'可视化工作流,RAG管道,Agent模式,一键API'},c:'frameworks',i:'🧩'},
{n:'Coze',u:'https://www.coze.com/',d:{en:'ByteDance, publish bots to WeChat/DingTalk/Feishu',zh:'字节跳动出品,可发布到微信/钉钉/飞书'},c:'frameworks',i:'🤖'},
{n:'n8n',u:'https://n8n.io/',d:{en:'Self-hosted, 400+ nodes, AI workflow automation',zh:'自托管,400+节点,AI工作流自动化'},c:'frameworks',i:'🔗'},
{n:'Flowise',u:'https://flowiseai.com/',d:{en:'Drag-and-drop LLM chain builder, open source',zh:'拖拽式LLM链路构建器,开源免费'},c:'frameworks',i:'🌊'},
{n:'Langflow',u:'https://www.langflow.org/',d:{en:'Visual LangChain builder, low-code',zh:'可视化LangChain构建器,低代码'},c:'frameworks',i:'🧪'},
{n:'ChatGPT GPTs',u:'https://chat.openai.com/',d:{en:'No-code custom GPTs, upload knowledge, share',zh:'零代码定制GPT,上传知识库,可分享/出售'},c:'assistants',i:'⚫'},
{n:'Claude Projects',u:'https://claude.ai/',d:{en:'Custom instructions + knowledge base, team sharing',zh:'自定义指令+知识库,团队共享,200K上下文'},c:'assistants',i:'🟠'},
{n:'Gemini Gems',u:'https://gemini.google.com/',d:{en:'Google ecosystem, personalized AI assistants',zh:'谷歌生态,个性化AI助手,自定义指令'},c:'assistants',i:'💎'},
{n:'Replit Agent',u:'https://replit.com/',d:{en:'Natural language→full-stack app, auto-deploy',zh:'自然语言描述→全栈应用,自动部署'},c:'assistants',i:'⚡'},
{n:'Devin',u:'https://www.cognition.ai/',d:{en:'AI software engineer, autonomous coding',zh:'AI软件工程师,全自主编程,业界领先'},c:'assistants',i:'🧑‍💻'},
{n:'Bolt.new',u:'https://bolt.new/',d:{en:'StackBlitz, prompt→full-stack app in browser',zh:'浏览器内Prompt→全栈应用,即时预览'},c:'assistants',i:'⚡'},
{n:'Make',u:'https://www.make.com/',d:{en:'2000+ app integrations, visual scenario builder',zh:'2000+应用集成,可视化场景构建器'},c:'workflow',i:'🧶'},
{n:'Zapier',u:'https://zapier.com/',d:{en:'7000+ apps, easiest automation platform',zh:'7000+应用,最易上手的自动化平台'},c:'workflow',i:'⚡'},
{n:'AgentGPT',u:'https://agentgpt.reworkd.ai/',d:{en:'Autonomous AI agents in browser, goal-based',zh:'浏览器内自主AI Agent,目标驱动执行'},c:'multi',i:'🎯'},
{n:'BabyAGI',u:'https://github.com/yoheinakajima/babyagi',d:{en:'Classic autonomous task-driven agent',zh:'经典自主任务驱动Agent,AI Agent先驱'},c:'multi',i:'👶'},
{n:'ChatDev',u:'https://github.com/OpenBMB/ChatDev',d:{en:'Multi-agent software company simulation',zh:'多Agent模拟软件公司,自动协作开发'},c:'multi',i:'💼'},
{n:'MetaGPT',u:'https://github.com/geekan/MetaGPT',d:{en:'Multi-agent meta-programming framework',zh:'多Agent元编程框架,自动生成完整项目'},c:'multi',i:'🧠'},
]
export default function AgentOverview(){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>🤖 {L('AI Agents & Automation','AI 智能体','AI 智能體')}</h2><p className={styles.subtitle}>{L('20 tools — Frameworks, Assistants, Workflows','20款工具——框架、助手、自动化','20款工具——框架、助手、自動化')}</p></div>
<LinkNav links={links} lang={lang as'en'|'zh-CN'|'zh-TW'} color="#6366f1" catNames={{frameworks:L('Agent Frameworks','Agent 框架','Agent 框架'),assistants:L('AI Assistants','AI 助手','AI 助手'),workflow:L('Workflow Automation','工作流自动化','工作流自動化'),multi:L('Multi-Agent','多Agent 系统','多Agent 系統')}}/></div>)}
