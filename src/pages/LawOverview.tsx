import { useT } from '../contexts/LanguageContext'
import { tText, type MultiLang } from '../i18n/translate'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'
export default function LawOverview() {
  const { lang } = useT()
  const L = (a: MultiLang, b?: string, c?: string) => { if (typeof a !== "string") return tText(a, lang); if (b !== undefined) return lang === "zh-CN" ? (b || a) : lang === "zh-TW" ? (c || b || a) : a; return tText(a, lang) }
  const LA = (en: string[], zh: string[], tw: string[]) => lang === "zh-CN" ? zh : lang === "zh-TW" ? tw : en
  return (<div className={styles.page}>
    <div style={{background:'linear-gradient(135deg,#312e81 0%,#3730a3 50%,#4338ca 100%)',borderRadius:14,padding:'24px 28px',marginBottom:24,color:'#fff'}}>
      <h2 style={{fontSize:24,fontWeight:800,margin:'0 0 16px'}}>⚖️ {L('AI in Legal','AI 法律科技','AI 法律科技')}</h2>
      <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>{[{v:'20×',t:'审查加速'},{v:'95%+',t:'审查准确率'},{v:'3,000万+',t:'企业用户'},{v:'$20B+',t:'2027市场'}].map(s=>(<div key={s.t} style={{textAlign:'center',background:'rgba(255,255,255,0.13)',borderRadius:10,padding:'14px 18px',minWidth:80}}><div style={{fontSize:28,fontWeight:800}}>{s.v}</div><div style={{fontSize:12,opacity:.8,marginTop:2}}>{s.t}</div></div>))}</div>
    </div>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12}}>📜 {L('AI × Legal','AI × 法律','AI × 法律')}</h3>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:10,marginBottom:24}}>
      {[{icon:'📄',t:L('合同审查','合同审查','合同審查'),items:LA(['🔍 NLP自动识别风险条款','⚡ 审查速度 ↑20倍','📋 全生命周期管理'],['🔍 NLP自动识别风险条款','⚡ 审查速度 ↑20倍','📋 全生命周期管理'],['🔍 NLP auto risk detection','⚡ 20x review speed','📋 Full lifecycle mgmt'])},
        {icon:'📚',t:L('法律研究','法律研究','法律研究'),items:LA(['🤖 GPT-4 法律问答','📊 秒级检索百万判例','🏛️ 顶级律所已标配'],['🤖 GPT-4 法律问答','📊 秒级检索百万判例','🏛️ 顶级律所已标配'],['🤖 GPT-4 legal Q&A','📊 Million cases in seconds','🏛️ Top firm standard'])},
        {icon:'🔮',t:L('诉讼预测','诉讼预测','訴訟預測'),items:LA(['🧠 法官模式AI分析','📈 胜率预测 80%+准确','📊 数百万诉讼数据'],['🧠 法官模式AI分析','📈 胜率预测 80%+准确','📊 数百万诉讼数据'],['🧠 Judge pattern AI','📈 80%+ win rate predict','📊 Millions of cases'])},
        {icon:'🛡️',t:L('合规管理','合规管理','合規管理'),items:LA(['📡 法规变化实时监控','🔄 自动更新合规策略','🌍 全球隐私合规覆盖'],['📡 法规变化实时监控','🔄 自动更新合规策略','🌍 全球隐私合规覆盖'],['📡 Real-time regulation watch','🔄 Auto-update compliance','🌍 Global privacy coverage'])},
      ].map(c=>(<div key={c.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 10px'}}>{c.icon} {c.t}</h4><div style={{display:'flex',flexDirection:'column',gap:6}}>{c.items.map((item,i)=>(<div key={i} style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.5}}>{item}</div>))}</div></div>))}
    </div>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',margin:'28px 0 12px',paddingBottom:8,borderBottom:'2px solid var(--border)'}}>🔗 {L('Tools','工具导航','工具導航')}</h3>
    <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#6366f1" />
  </div>)}
const links: ToolLink[] = [
  {name:'Harvey AI',url:'https://www.harvey.ai/',desc:{en:'AI for law firms: contract+research',zh:'律所AI:合同/尽调/法律研究'},cat:'工具',icon:'⚖️'},
  {name:'Ironclad',url:'https://ironcladapp.com/',desc:{en:'AI contract lifecycle management',zh:'AI合同全生命周期管理'},cat:'工具',icon:'🛡️'},
  {name:'Casetext',url:'https://casetext.com/',desc:{en:'AI legal research, CoCounsel',zh:'AI法律研究,GPT-4驱动'},cat:'工具',icon:'📚'},
  {name:'法大大',url:'https://www.fadada.com/',desc:{en:'Chinese e-sign + AI, 30M+ users',zh:'国产电子签章+AI,3000万+企业'},cat:'工具',icon:'✍️'},
  {name:'幂律智能',url:'https://www.powerlawai.com/',desc:{en:'AI contract review, legal KG',zh:'AI合同审查,法律知识图谱'},cat:'工具',icon:'🧠'},
  {name:'北大法宝',url:'https://www.pkulaw.com/',desc:{en:'Chinese legal DB, AI search',zh:'中国法律数据库,AI检索'},cat:'工具',icon:'📜'},
]
