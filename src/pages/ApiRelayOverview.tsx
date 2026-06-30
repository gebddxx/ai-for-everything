import { useT } from '../contexts/LanguageContext'
import { tText, type MultiLang } from '../i18n/translate'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

export default function ApiRelayOverview() {
  const { lang } = useT()
  const L = (a: MultiLang, b?: string, c?: string) => { if (typeof a !== "string") return tText(a, lang); if (b !== undefined) return lang === "zh-CN" ? (b || a) : lang === "zh-TW" ? (c || b || a) : a; return tText(a, lang) }
  return (<div className={styles.page}>
    <div className={styles.head}><h2 className={styles.title}>🔌 {L('API Relay Hub','API中转站','API中轉站')}</h2><p className={styles.subtitle}>{L('API proxies, relays, and aggregators','API中转、代理和聚合平台','API中轉、代理和聚合平台')}</p></div>
    <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#06b6d4" />
  </div>)
}

const links: ToolLink[] = [
  {name:'OpenRouter',url:'https://openrouter.ai/',desc:{en:'300+ models · unified API · price compare',zh:'300+模型 · 统一API · 比价切换'},cat:'聚合',icon:'🚦'},
  {name:'API2D',url:'https://api2d.com/',desc:{en:'OpenAI-compatible relay · GPT/Claude/DeepSeek',zh:'OpenAI兼容中转 · GPT/Claude/DeepSeek'},cat:'中转',icon:'🔌'},
  {name:'OhMyGPT',url:'https://ohmygpt.com/',desc:{en:'Multi-model relay · pay-per-use · China optimized',zh:'多模型中转 · 按量计费 · 国内优化'},cat:'中转',icon:'⚡'},
  {name:'AIGC2D',url:'https://aigc2d.com/',desc:{en:'OpenAI-format relay · domestic access',zh:'OpenAI格式中转 · 国内直连'},cat:'中转',icon:'🔄'},
  {name:'ChatAnywhere',url:'https://api.chatanywhere.com.cn/',desc:{en:'OpenAI relay · CN optimized · free quota',zh:'OpenAI国内中转 · 免翻墙 · 免费额度'},cat:'中转',icon:'🌐'},
  {name:'DeepSeek API',url:'https://platform.deepseek.com/',desc:{en:'¥2/M tokens · OpenAI compatible · official',zh:'¥2/百万token · 兼容OpenAI · 官方'},cat:'官方',icon:'🐋'},
  {name:'Kimi API',url:'https://platform.moonshot.cn/',desc:{en:'2M chars ctx · Anthropic compatible',zh:'200万字上下文 · 兼容Anthropic格式'},cat:'官方',icon:'🌙'},
  {name:'通义千问 API',url:'https://dashscope.aliyun.com/',desc:{en:'256K ctx · Alibaba DashScope platform',zh:'256K上下文 · 阿里云DashScope'},cat:'官方',icon:'☁️'},
  {name:'文心一言 API',url:'https://console.bce.baidu.com/qianfan/',desc:{en:'Baidu Qianfan · Chinese language #1',zh:'百度千帆平台 · 中文能力第一'},cat:'官方',icon:'💎'},
  {name:'Anthropic API',url:'https://console.anthropic.com/',desc:{en:'Claude official · Console · $5 free',zh:'Claude官方 · 注册送$5额度'},cat:'官方',icon:'🟠'},
  {name:'OpenAI API',url:'https://platform.openai.com/',desc:{en:'GPT-4.1 official · Platform',zh:'GPT-4.1官方 · Platform平台'},cat:'官方',icon:'⚫'},
  {name:'火山引擎 API',url:'https://www.volcengine.com/',desc:{en:'ByteDance · Doubao/Seed models',zh:'字节跳动 · 豆包/Seed模型API'},cat:'官方',icon:'🌋'},
  {name:'RapidAPI',url:'https://rapidapi.com/',desc:{en:'40K+ APIs · browser test · worldwide',zh:'全球4万+API · 浏览器测试'},cat:'平台',icon:'⚡'},
  {name:'Apifox',url:'https://apifox.com/',desc:{en:'API management · mock+test+docs',zh:'API管理 · Mock+测试+文档一体化'},cat:'平台',icon:'🦊'},
]
