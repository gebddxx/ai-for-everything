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
  { name:'Poe',url:'https://poe.com/',desc:{en:'Quora, access GPT-4/Claude/Gemini in one app',zh:'Quora出品,一个App同时用GPT-4/Claude/Gemini'},cat:'llm',icon:'📬'},
  { name:'HuggingChat',url:'https://huggingface.co/chat/',desc:{en:'Free open-source chat, community models',zh:'免费开源聊天,社区模型,无需注册'},cat:'llm',icon:'🤗'},
  { name:'Perplexity',url:'https://www.perplexity.ai/',desc:{en:'Search + chat combo, real-time citations',zh:'搜索+对话二合一,实时引用来源'},cat:'llm',icon:'🔍'},
  { name:'Grok',url:'https://x.com/i/grok',desc:{en:'xAI, real-time X data, witty personality',zh:'马斯克xAI出品,实时获取X平台数据'},cat:'llm',icon:'❌'},
  { name:'Mistral Le Chat',url:'https://chat.mistral.ai/',desc:{en:'European LLM, fast, multilingual',zh:'欧洲大模型,速度快,多语言支持好'},cat:'llm',icon:'🌬️'},
  { name:'Character.AI',url:'https://character.ai/',desc:{en:'Create & chat with AI personas',zh:'创建AI角色并对话,支持名人/虚拟角色'},cat:'role',icon:'🎭'},
  { name:'Replika',url:'https://replika.ai/',desc:{en:'AI companion for emotional support',zh:'AI情感伴侣,提供陪伴和倾诉'},cat:'role',icon:'💝'},
  { name:'Pi',url:'https://pi.ai/',desc:{en:'Inflection AI, empathetic conversational AI',zh:'富有同理心的AI对话伙伴'},cat:'role',icon:'π'},
  { name:'OpenRouter',url:'https://openrouter.ai/',desc:{en:'Unified API for 200+ models, price comparison',zh:'200+模型统一API,比价和切换一站式'},cat:'compare',icon:'🚦'},
  { name:'LMSYS Arena',url:'https://chat.lmsys.org/',desc:{en:'Blind test LLMs, Elo leaderboard',zh:'盲测大模型,查看Elo天梯排名'},cat:'compare',icon:'⚔️'},
  { name:'Artificial Analysis',url:'https://artificialanalysis.ai/',desc:{en:'LLM quality, speed & price benchmarks',zh:'大模型质量/速度/价格全面基准测试'},cat:'compare',icon:'📊'},
  { name:'HuggingFace Leaderboard',url:'https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard',desc:{en:'Open LLM rankings, community-voted',zh:'开源大模型排行榜,社区投票评选'},cat:'compare',icon:'🏆'},
]

export default function ChatOverview({ scrollTo }: { scrollTo?: string }) {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>💬 {L('AI Chat & Assistants','AI 对话助手','AI 對話助手')}</h2>
        <p className={styles.subtitle}>{L('23 LLM platforms, role-play bots & model comparison tools','23个大模型平台、角色扮演和模型对比工具','23個大模型平台、角色扮演和模型對比工具')}</p>
      </div>
      <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#22c55e" scrollTo={scrollTo} catNames={{
        llm: L('LLM Platforms','大模型平台','大模型平台'),
        role: L('Character & Role-Play','角色扮演','角色扮演'),
        compare: L('Model Comparison','模型对比','模型對比'),
      }} />
    </div>
  )
}
