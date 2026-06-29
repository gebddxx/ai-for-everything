import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

export default function AgentToolsOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (<div className={styles.page}>
    <div className={styles.head}><h2 className={styles.title}>🤖 {L('AI Ecosystem','AI 生态全景','AI 生態全景')}</h2><p className={styles.subtitle}>{L('LLMs · Model Switchers · Coding Tools · Autonomous Agents','大模型 · 模型切换 · AI编程 · 自主Agent','大模型 · 模型切換 · AI編程 · 自主Agent')}</p></div>
    <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#6366f1" />
  </div>)
}

const links: ToolLink[] = [
  // ====== 大模型 LLMs ======
  {name:'GPT-4.1 / ChatGPT',url:'https://chat.openai.com/',desc:{en:'OpenAI · multimodal · #1 overall',zh:'OpenAI · 多模态 · 综合第一'},cat:'🔷 海外大模型',icon:'⚫'},
  {name:'Claude 4',url:'https://claude.ai/',desc:{en:'Anthropic · 200K ctx · deep reasoning',zh:'Anthropic · 200K上下文 · 深度推理'},cat:'🔷 海外大模型',icon:'🟠'},
  {name:'Gemini 2.5',url:'https://gemini.google.com/',desc:{en:'Google · 1M ctx · native multimodal',zh:'谷歌 · 100万上下文 · 原生多模态'},cat:'🔷 海外大模型',icon:'🔵'},
  {name:'Grok 3',url:'https://x.com/i/grok',desc:{en:'xAI (Musk) · real-time X data',zh:'马斯克xAI · 实时X平台数据'},cat:'🔷 海外大模型',icon:'❌'},
  {name:'Llama 4',url:'https://www.llama.com/',desc:{en:'Meta · open-source · 100+ languages',zh:'Meta · 开源 · 100+语言'},cat:'🔷 海外大模型',icon:'🦙'},
  {name:'Mistral Large',url:'https://mistral.ai/',desc:{en:'France · MoE · 1100 tok/s · open',zh:'法国 · MoE架构 · 极速推理 · 开源'},cat:'🔷 海外大模型',icon:'🌬️'},
  {name:'DeepSeek V3/R1',url:'https://chat.deepseek.com/',desc:{en:'深度求索 · 1M ctx · DeepThink · 极致性价比',zh:'深度求索 · 1M上下文 · 深度推理 · 极致性价比'},cat:'🔶 国产大模型',icon:'🐋'},
  {name:'通义千问 Qwen',url:'https://tongyi.aliyun.com/',desc:{en:'Alibaba · 256K ctx · math/code top',zh:'阿里 · 256K上下文 · 数学编程领先'},cat:'🔶 国产大模型',icon:'☁️'},
  {name:'文心一言 ERNIE',url:'https://yiyan.baidu.com/',desc:{en:'Baidu · MMLU Chinese #1 · deep CN knowledge',zh:'百度 · 中文评测第一 · 知识库深厚'},cat:'🔶 国产大模型',icon:'💎'},
  {name:'豆包 Seed',url:'https://www.doubao.com/',desc:{en:'ByteDance · MoE · fast+free · 亿级用户',zh:'字节跳动 · MoE架构 · 快速免费 · 亿级用户'},cat:'🔶 国产大模型',icon:'👧'},
  {name:'Kimi k2.5',url:'https://kimi.moonshot.cn/',desc:{en:'Moonshot · 200万chars · long-doc king',zh:'月之暗面 · 200万字中文 · 长文档之王'},cat:'🔶 国产大模型',icon:'🌙'},
  {name:'GLM-5 智谱',url:'https://chatglm.cn/',desc:{en:'Zhipu (Tsinghua) · 128K ctx · code strong',zh:'清华智谱 · 128K上下文 · 编程能力强'},cat:'🔶 国产大模型',icon:'🧠'},
  {name:'混元 腾讯元宝',url:'https://yuanbao.tencent.com/',desc:{en:'Tencent · WeChat eco · game NPC AI',zh:'腾讯 · 微信生态 · 游戏NPC智能'},cat:'🔶 国产大模型',icon:'💬'},
  {name:'星火 讯飞',url:'https://xinghuo.xfyun.cn/',desc:{en:'iFlytek · voice leader · education expert',zh:'科大讯飞 · 语音识别第一 · 教育专长'},cat:'🔶 国产大模型',icon:'🔥'},
  {name:'百川 M1',url:'https://www.baichuan-ai.com/',desc:{en:'Baichuan · medical/finance vertical',zh:'百川 · 医疗+金融垂直领域'},cat:'🔶 国产大模型',icon:'💧'},
  {name:'海螺 MiniMax',url:'https://hailuoai.com/',desc:{en:'MiniMax · 400万ctx · voice+music',zh:'MiniMax · 400万上下文 · 语音音乐强'},cat:'🔶 国产大模型',icon:'🐚'},
  {name:'阶跃星辰 Step',url:'https://www.stepfun.com/',desc:{en:'StepFun · MoE · multi-modal · trillion params',zh:'阶跃星辰 · MoE架构 · 万亿参数'},cat:'🔶 国产大模型',icon:'⭐'},
  {name:'盘古 华为',url:'https://www.huaweicloud.com/',desc:{en:'Huawei · industry-specific · edge deploy',zh:'华为 · 行业专用 · 昇腾端侧部署'},cat:'🔶 国产大模型',icon:'🏔️'},
  // ====== 模型切换工具 ======
  {name:'OpenRouter',url:'https://openrouter.ai/',desc:{en:'300+ models · unified API · price compare',zh:'300+模型 · 统一API · 比价切换'},cat:'🔄 模型切换',icon:'🚦'},
  {name:'CCS (Claude Code Switch)',url:'https://github.com/kaitranntt/ccs',desc:{en:'Multi-profile · OpenRouter+Gemini+GLM+...',zh:'多配置管理 · 支持OpenRouter/DeepSeek/Kimi等'},cat:'🔄 模型切换',icon:'🔀'},
  {name:'claude-code-switch',url:'https://github.com/maxgfr/claude-code-switch',desc:{en:'Zero-dep shell · 9 providers · minimal',zh:'零依赖Shell脚本 · 9个供应商 · 极简'},cat:'🔄 模型切换',icon:'⚡'},
  {name:'Poe',url:'https://poe.com/',desc:{en:'Quora · GPT+Claude+Gemini in one app',zh:'Quora · 一个App同时用多种模型'},cat:'🔄 模型切换',icon:'📬'},
  {name:'LMSYS Chatbot Arena',url:'https://chat.lmsys.org/',desc:{en:'Blind test · Elo leaderboard · 100+ models',zh:'盲测对比 · Elo天梯榜 · 100+模型'},cat:'🔄 模型切换',icon:'⚔️'},
  // ====== AI编程工具 ======
  {name:'Cursor',url:'https://cursor.com/',desc:{en:'AI IDE · Agent mode · multi-model · $20/mo',zh:'AI IDE · Agent模式 · 多模型 · $20/月'},cat:'💻 AI编程',icon:'🖱️'},
  {name:'GitHub Copilot',url:'https://github.com/features/copilot',desc:{en:'VS Code · auto-complete · agent chat · $10/mo',zh:'VS Code · 自动补全 · Agent对话 · $10/月'},cat:'💻 AI编程',icon:'🐙'},
  {name:'Trae',url:'https://www.trae.ai/',desc:{en:'ByteDance · Chinese #1 IDE · free Claude',zh:'字节 · 中文最佳IDE · 免费Claude+DeepSeek'},cat:'💻 AI编程',icon:'💻'},
  {name:'Windsurf Cascade',url:'https://codeium.com/windsurf',desc:{en:'AI IDE · Cascade agent · auto-index · $15/mo',zh:'AI IDE · Cascade智能体 · 自动索引 · $15/月'},cat:'💻 AI编程',icon:'🌊'},
  {name:'Claude Code',url:'https://docs.anthropic.com/en/docs/claude-code',desc:{en:'Terminal agent · reads+edits codebase',zh:'终端Agent · 读写整个代码库'},cat:'💻 AI编程',icon:'💻'},
  {name:'通义灵码',url:'https://tongyi.aliyun.com/lingma/',desc:{en:'Alibaba · plugin · private deploy · free',zh:'阿里 · IDE插件 · 支持私有部署 · 免费'},cat:'💻 AI编程',icon:'🧩'},
  {name:'CodeGeeX',url:'https://codegeex.cn/',desc:{en:'Zhipu · 20+ languages · AIPC edition',zh:'智谱 · 20+语言 · AIPC版'},cat:'💻 AI编程',icon:'🔧'},
  {name:'Devin',url:'https://www.cognition.ai/',desc:{en:'1st AI software engineer · end-to-end',zh:'首个AI软件工程师 · 端到端开发'},cat:'💻 AI编程',icon:'🧑‍💻'},
  {name:'Bolt.new',url:'https://bolt.new/',desc:{en:'StackBlitz · prompt→fullstack · browser',zh:'StackBlitz · 提示词→全栈应用 · 浏览器'},cat:'💻 AI编程',icon:'⚡'},
  {name:'Lovable',url:'https://lovable.dev/',desc:{en:'GPT Engineer · desc→SaaS app',zh:'GPT工程师 · 描述→SaaS应用'},cat:'💻 AI编程',icon:'❤️'},
  {name:'Replit Agent',url:'https://replit.com/',desc:{en:'Browser IDE · natural lang→app · deploy',zh:'浏览器IDE · 自然语言→应用 · 一键部署'},cat:'💻 AI编程',icon:'🔄'},
  {name:'Aider',url:'https://aider.chat/',desc:{en:'Terminal · Git-integrated · SWE-bench top',zh:'终端 · Git集成 · SWE-bench顶尖'},cat:'💻 AI编程',icon:'🤖'},
  {name:'Gemini CLI',url:'https://github.com/google-gemini/gemini-cli',desc:{en:'Google · 1M ctx · multi-modal · CLI',zh:'谷歌 · 100万上下文 · 多模态 · 命令行'},cat:'💻 AI编程',icon:'🔷'},
  // ====== 自主Agent ======
  {name:'Manus',url:'https://manus.im/',desc:{en:'Autonomous · multi-step · task execution',zh:'自主执行 · 多步骤任务自动完成'},cat:'🦾 自主Agent',icon:'🤖'},
  {name:'OpenClaw 龙虾',url:'https://github.com/openclaw/openclaw',desc:{en:'Open-source · browser+file ops · AI agent',zh:'开源 · 浏览器+文件系统操控'},cat:'🦾 自主Agent',icon:'🦞'},
  {name:'AutoGPT',url:'https://github.com/Significant-Gravitas/AutoGPT',desc:{en:'Pioneer · web+files · autonomous loop',zh:'先驱 · 联网+文件 · 自主循环执行'},cat:'🦾 自主Agent',icon:'🤖'},
  {name:'Coze 扣子',url:'https://www.coze.cn/',desc:{en:'ByteDance · zero-code bot builder · market',zh:'字节 · 零代码Bot搭建 · 插件市场'},cat:'🦾 自主Agent',icon:'🧩'},
  {name:'Dify',url:'https://dify.ai/',desc:{en:'Open-source · RAG+Agent+workflow · self-host',zh:'开源 · RAG+Agent+工作流 · 可自托管'},cat:'🦾 自主Agent',icon:'🔮'},
  {name:'CrewAI',url:'https://www.crewai.com/',desc:{en:'Role-based · multi-agent orchestration',zh:'角色化 · 多Agent团队协作'},cat:'🦾 自主Agent',icon:'👥'},
  {name:'AutoGen',url:'https://microsoft.github.io/autogen/',desc:{en:'Microsoft · multi-agent conversation framework',zh:'微软 · 多Agent对话协作框架'},cat:'🦾 自主Agent',icon:'🪟'},
  {name:'n8n',url:'https://n8n.io/',desc:{en:'Workflow automation · AI nodes · self-host',zh:'工作流自动化 · AI节点 · 自托管'},cat:'🦾 自主Agent',icon:'⚡'},
]
