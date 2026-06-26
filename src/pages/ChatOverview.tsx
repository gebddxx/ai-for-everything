import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

const links: ToolLink[] = [
  { name:'ChatGPT',url:'https://chat.openai.com/',desc:{en:'GPT-4.1, DALL·E, plugins, GPTs, Code Interpreter',zh:'OpenAI旗舰模型,支持插件生态和多模态'},cat:'llm',icon:'⚫'},
  { name:'Claude',url:'https://claude.ai/',desc:{en:'Anthropic, 200K context, Artifacts, Projects',zh:'Anthropic出品,200K超长上下文,深度思考首选'},cat:'llm',icon:'🟠'},
  { name:'Gemini',url:'https://gemini.google.com/',desc:{en:'Google AI, 1M context, Google apps integration',zh:'谷歌AI助手,100万token上下文,集成谷歌全家桶'},cat:'llm',icon:'🔵'},
  { name:'DeepSeek',url:'https://chat.deepseek.com/',desc:{en:'Whale logo, 1M context, extremely affordable',zh:'国产开源大模型,鲸鱼Logo,百万上下文,高性价比'},cat:'llm',icon:'🐋'},
  { name:'Kimi',url:'https://kimi.moonshot.cn/',desc:{en:'Moonshot AI, 2M Chinese chars, long-text king',zh:'月之暗面出品,200万字中文超长文本理解'},cat:'llm',icon:'🌙'},
  { name:'通义千问',url:'https://tongyi.aliyun.com/',desc:{en:'Alibaba AI, strong Chinese, multimodal',zh:'阿里云出品,中文能力强,支持多模态'},cat:'llm',icon:'☁️'},
  { name:'文心一言',url:'https://yiyan.baidu.com/',desc:{en:'Baidu Ernie Bot, deep Chinese knowledge',zh:'百度文心大模型,深厚的中文知识库'},cat:'llm',icon:'💎'},
  { name:'豆包',url:'https://www.doubao.com/',desc:{en:'ByteDance AI, girl mascot, fast & free',zh:'字节跳动AI助手,女孩形象,速度快,免费好用'},cat:'llm',icon:'👧'},
  { name:'腾讯元宝',url:'https://yuanbao.tencent.com/',desc:{en:'Tencent AI, WeChat integration',zh:'腾讯混元大模型,微信生态深度集成'},cat:'llm',icon:'💬'},
  { name:'讯飞星火',url:'https://xinghuo.xfyun.cn/',desc:{en:'iFlytek, strong voice + text, education focus',zh:'科大讯飞出品,语音+文本双强,教育场景专长'},cat:'llm',icon:'🔥'},
  { name:'360智脑',url:'https://ai.360.com/',desc:{en:'360 AI, integrated browser & search',zh:'360出品,集成浏览器和搜索,安全导向'},cat:'llm',icon:'🛡️'},
  { name:'智谱清言',url:'https://chatglm.cn/',desc:{en:'Zhipu AI, GLM series, code & reasoning strong',zh:'清华智谱,GLM系列模型,编程推理能力强'},cat:'llm',icon:'🧠'},
  { name:'百川智能',url:'https://www.baichuan-ai.com/',desc:{en:'Baichuan AI, medical & legal domain models',zh:'百川大模型,医疗/法律等垂直领域模型'},cat:'llm',icon:'💧'},
  { name:'MiniMax海螺',url:'https://hailuoai.com/',desc:{en:'MiniMax AI, strong voice & music generation',zh:'MiniMax出品,语音合成和音乐生成能力突出'},cat:'llm',icon:'🐚'},
  { name:'阶跃星辰',url:'https://www.stepfun.com/',desc:{en:'StepFun AI, multi-modal, strong reasoning',zh:'阶跃星辰,多模态+强推理,万亿参数'},cat:'llm',icon:'⭐'},
  { name:'零一万物',url:'https://www.01.ai/',desc:{en:'Kai-Fu Lee, Yi series, cost-effective',zh:'李开复创办,Yi系列模型,高性价比'},cat:'llm',icon:'🔮'},
  { name:'天工AI',url:'https://www.tiangong.cn/',desc:{en:'Kunlun Wanwei, AI search + chat',zh:'昆仑万维出品,搜索+聊天一体化'},cat:'llm',icon:'☁️'},
  { name:'Poe',url:'https://poe.com/',desc:{en:'Quora, access GPT-4/Claude/Gemini in one app',zh:'Quora出品,一个App同时用GPT-4/Claude/Gemini'},cat:'llm',icon:'📬'},
  { name:'HuggingChat',url:'https://huggingface.co/chat/',desc:{en:'Free open-source chat, community models',zh:'免费开源聊天,社区模型,无需注册'},cat:'llm',icon:'🤗'},
  { name:'Perplexity',url:'https://www.perplexity.ai/',desc:{en:'Search + chat combo, real-time citations',zh:'搜索+对话二合一,实时引用来源'},cat:'llm',icon:'🔍'},
  { name:'Grok',url:'https://x.com/i/grok',desc:{en:'xAI, real-time X data, witty personality',zh:'马斯克xAI出品,实时获取X平台数据'},cat:'llm',icon:'❌'},
  { name:'Mistral Le Chat',url:'https://chat.mistral.ai/',desc:{en:'European LLM, fast, multilingual',zh:'欧洲大模型,速度快,多语言支持好'},cat:'llm',icon:'🌬️'},
  { name:'Coze',url:'https://www.coze.com/',desc:{en:'ByteDance AI bot builder, plugins + workflows',zh:'字节跳动AI Bot搭建平台,插件+工作流'},cat:'llm',icon:'🤖'},
  { name:'Character.AI',url:'https://character.ai/',desc:{en:'Create & chat with AI personas',zh:'创建AI角色并对话,支持名人/虚拟角色'},cat:'role',icon:'🎭'},
  { name:'Replika',url:'https://replika.ai/',desc:{en:'AI companion for emotional support',zh:'AI情感伴侣,提供陪伴和倾诉'},cat:'role',icon:'💝'},
  { name:'Pi',url:'https://pi.ai/',desc:{en:'Inflection AI, empathetic conversational AI',zh:'富有同理心的AI对话伙伴'},cat:'role',icon:'π'},
  { name:'星野',url:'https://www.xingye.com/',desc:{en:'Chinese AI character chat, immersive roleplay',zh:'国产AI角色聊天,沉浸式角色扮演'},cat:'role',icon:'🌠'},
  { name:'筑梦岛',url:'https://www.muachat.com/',desc:{en:'AI virtual companion, diverse character library',zh:'AI虚拟陪伴,丰富角色库,情感对话'},cat:'role',icon:'🏝️'},
  { name:'OpenRouter',url:'https://openrouter.ai/',desc:{en:'Unified API for 200+ models, price comparison',zh:'200+模型统一API,比价和切换一站式'},cat:'compare',icon:'🚦'},
  { name:'LMSYS Arena',url:'https://chat.lmsys.org/',desc:{en:'Blind test LLMs, Elo leaderboard',zh:'盲测大模型,查看Elo天梯排名'},cat:'compare',icon:'⚔️'},
  { name:'Artificial Analysis',url:'https://artificialanalysis.ai/',desc:{en:'LLM quality, speed & price benchmarks',zh:'大模型质量/速度/价格全面基准测试'},cat:'compare',icon:'📊'},
  { name:'HuggingFace Leaderboard',url:'https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard',desc:{en:'Open LLM rankings, community-voted',zh:'开源大模型排行榜,社区投票评选'},cat:'compare',icon:'🏆'},
  { name:'SuperCLUE',url:'https://www.superclueai.com/',desc:{en:'Chinese LLM benchmark, comprehensive evaluation',zh:'中文大模型评测基准,综合性中文能力评估'},cat:'compare',icon:'🏅'},
  { name:'C-Eval',url:'https://cevalbenchmark.com/',desc:{en:'Chinese LLM evaluation benchmark, 52 subjects',zh:'中文大模型评测,覆盖52个学科'},cat:'compare',icon:'📏'},
  { name:'Trae',url:'https://www.trae.ai/',desc:{en:'ByteDance AI IDE, Chinese-friendly, free Claude 3.7',zh:'字节跳动AI编程IDE,中文友好,免费Claude 3.7'},cat:'code',icon:'💻'},
  { name:'通义灵码',url:'https://tongyi.aliyun.com/lingma/',desc:{en:'Alibaba AI code assistant, code completion + review',zh:'阿里云AI代码助手,代码补全+评审+测试'},cat:'code',icon:'🧩'},
  { name:'CodeGeeX',url:'https://codegeex.cn/',desc:{en:'Tsinghua, 20+ languages, cross-language conversion',zh:'清华出品,支持20+语言,跨语言代码转换'},cat:'code',icon:'🔧'},
  { name:'MarsCode',url:'https://www.marscode.cn/',desc:{en:'ByteDance AI code tool, IDE plugin, cloud IDE',zh:'字节豆包AI代码工具,IDE插件+云端IDE'},cat:'code',icon:'🚀'},
  { name:'百度Comate',url:'https://comate.baidu.com/',desc:{en:'Baidu AI code gen, error detection, auto-comment',zh:'百度AI代码助手,代码生成+错误检测+注释'},cat:'code',icon:'🐻'},
  { name:'Coze',url:'https://www.coze.com/',desc:{en:'ByteDance, zero-code AI bot builder, plugins+API',zh:'字节跳动,零代码AI Bot搭建平台,插件+API'},cat:'llm',icon:'🤖'},
  { name:'Dify',url:'https://dify.ai/',desc:{en:'Open-source LLM app platform, RAG+Agent framework',zh:'开源LLM应用开发平台,RAG+Agent框架'},cat:'llm',icon:'🔮'},
  { name:'扣子',url:'https://www.coze.cn/',desc:{en:'Coze China, AI bot marketplace, WeChat integration',zh:'Coze国内版,AI Bot商店,微信/飞书集成'},cat:'llm',icon:'🧩'},
  { name:'腾讯智影',url:'https://zenvideo.qq.com/',desc:{en:'Tencent AI digital human, lip-sync, short video creation',zh:'腾讯AI数字人,口型同步<0.1秒,短视频创作'},cat:'digital',icon:'🎭'},
  { name:'硅基智能',url:'https://www.guiji.ai/',desc:{en:'2D hyper-realistic digital human, 30s cloning, API/SDK',zh:'2D超写实数字人,30秒克隆形象声音,API接入'},cat:'digital',icon:'🤖'},
  { name:'D-ID',url:'https://www.d-id.com/',desc:{en:'AI avatar video, 100+ language lip-sync, e-learning',zh:'AI数字人视频,100+语种口型同步,教育/营销'},cat:'digital',icon:'🎬'},
  { name:'商汤如影',url:'https://www.sensetime.com/',desc:{en:'SenseTime, 3D digital human, 98% expression accuracy',zh:'商汤出品,3D数字人,表情自然度98%,企业级'},cat:'digital',icon:'🧬'},
  { name:'PromptPilot',url:'https://promptpilot.volcengine.com/',desc:{en:'ByteDance, prompt optimizer, multi-model benchmark',zh:'字节跳动提示词优化平台,自动生成+评测+迭代'},cat:'code',icon:'✈️'},
]

export default function ChatOverview({ scrollTo }: { scrollTo?: string }) {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>💬 {L('Chat & Assistants','对话助手','對話助手')}</h2>
        <p className={styles.subtitle}>{L('48 platforms — LLMs, coding, digital humans, role-play, benchmarks','48个平台——大模型、编程、数字人、角色扮演、评测','48個平台——大模型、編程、數字人、角色扮演、評測')}</p>
      </div>
      <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#22c55e" scrollTo={scrollTo} catNames={{
        llm: L('LLM Platforms','大模型平台','大模型平台'),
        code: L('AI Coding','AI 编程','AI 編程'),
        role: L('Character & Role-Play','角色扮演','角色扮演'),
        compare: L('Benchmarks','模型评测','模型評測'),
      }} />
    </div>
  )
}
