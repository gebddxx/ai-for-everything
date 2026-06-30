import { useT } from '../contexts/LanguageContext'
import { tText, type MultiLang } from '../i18n/translate'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'
export default function SecurityOverview() {
  const { lang } = useT()
  const L = (a: MultiLang, b?: string, c?: string) => { if (typeof a !== "string") return tText(a, lang); if (b !== undefined) return lang === "zh-CN" ? (b || a) : lang === "zh-TW" ? (c || b || a) : a; return tText(a, lang) }
  const LA = (en: string[], zh: string[], tw: string[]) => lang === "zh-CN" ? zh : lang === "zh-TW" ? tw : en
  return (<div className={styles.page}>
    <div style={{background:'linear-gradient(135deg,#450a0a 0%,#7f1d1d 50%,#991b1b 100%)',borderRadius:14,padding:'24px 28px',marginBottom:24,color:'#fff'}}>
      <h2 style={{fontSize:24,fontWeight:800,margin:'0 0 16px'}}>🔒 {L('AI in Cybersecurity','AI 网络安全','AI 網路安全')}</h2>
      <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>{[{v:'秒级',t:'检测+隔离'},{v:'99%+',t:'钓鱼识别'},{v:'90%',t:'MFA攻击↓'},{v:'$60B+',t:'2028市场'}].map(s=>(<div key={s.t} style={{textAlign:'center',background:'rgba(255,255,255,0.13)',borderRadius:10,padding:'14px 18px',minWidth:80}}><div style={{fontSize:28,fontWeight:800}}>{s.v}</div><div style={{fontSize:12,opacity:.8,marginTop:2}}>{s.t}</div></div>))}</div>
    </div>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12}}>🛡️ {L('AI × Security','AI × 安全','AI × 安全')}</h3>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:10,marginBottom:24}}>
      {[{icon:'🛡️',t:L('威胁检测','威胁检测','威脅檢測'),items:LA(['🧠 自学习AI 无需规则','⚠️ 零日攻击秒级发现','📊 数万亿事件/天分析'],['🧠 自学习AI 无需规则','⚠️ 零日攻击秒级发现','📊 数万亿事件/天分析'],['🧠 Self-learning no rules','⚠️ Zero-day in seconds','📊 Trillions events/day'])},
        {icon:'📧',t:L('反钓鱼','反钓鱼','反釣魚'),items:LA(['🤖 识别GPT生成钓鱼','✅ 99%+ 准确率','🛡️ 拦截80%漏网攻击'],['🤖 识别GPT生成钓鱼','✅ 99%+ 准确率','🛡️ 拦截80%漏网攻击'],['🤖 Detect GPT phishing','✅ 99%+ accuracy','🛡️ Block 80% missed'])},
        {icon:'🤖',t:L('自动化响应','自动化响应','自動化響應'),items:LA(['⚡ 检测→隔离→修复','⏱️ 小时→秒 响应时间','📋 AI编排安全剧本'],['⚡ 检测→隔离→修复','⏱️ 小时→秒 响应时间','📋 AI编排安全剧本'],['⚡ Detect→isolate→fix','⏱️ Hours→seconds','📋 AI security playbooks'])},
        {icon:'🔑',t:L('身份安全','身份安全','身份安全'),items:LA(['👤 登录行为AI分析','🛡️ 数亿次/天攻击阻断','🔐 自适应认证'],['👤 登录行为AI分析','🛡️ 数亿次/天攻击阻断','🔐 自适应认证'],['👤 Login behavior AI','🛡️ 100M+ blocked/day','🔐 Adaptive auth'])},
      ].map(c=>(<div key={c.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 10px'}}>{c.icon} {c.t}</h4><div style={{display:'flex',flexDirection:'column',gap:6}}>{c.items.map((item,i)=>(<div key={i} style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.5}}>{item}</div>))}</div></div>))}
    </div>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',margin:'28px 0 12px',paddingBottom:8,borderBottom:'2px solid var(--border)'}}>🔗 {L('Tools','工具导航','工具導航')}</h3>
    <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#ef4444" />
  </div>)}
const links: ToolLink[] = [
  {name:'Darktrace',url:'https://darktrace.com/',desc:{en:'Self-learning AI, real-time threat',zh:'自学习AI,实时威胁检测+自动响应'},cat:'工具',icon:'🛡️'},
  {name:'CrowdStrike',url:'https://www.crowdstrike.com/',desc:{en:'AI-native endpoint, trillions/day',zh:'AI原生终端安全,数万亿事件/天'},cat:'工具',icon:'🦅'},
  {name:'Abnormal Security',url:'https://abnormalsecurity.com/',desc:{en:'AI email, stops 80% missed phishing',zh:'AI邮件安全,拦截80%漏网钓鱼'},cat:'工具',icon:'📧'},
  {name:'Palo Alto XSOAR',url:'https://www.paloaltonetworks.com/',desc:{en:'AI SOAR, security automation',zh:'AI安全编排,小时→秒响应'},cat:'工具',icon:'🏰'},
  {name:'360安全大脑',url:'https://www.360.cn/',desc:{en:'Chinese AI security, APT analysis',zh:'国产AI安全,全球APT分析'},cat:'工具',icon:'🧠'},
  {name:'微步在线',url:'https://www.threatbook.cn/',desc:{en:'Chinese AI threat intelligence',zh:'国产AI威胁情报'},cat:'工具',icon:'🔍'},
]
