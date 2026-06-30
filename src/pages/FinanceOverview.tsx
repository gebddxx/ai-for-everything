import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

export default function FinanceOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  const LA = (en: string[], zh: string[], tw: string[]) => lang === 'zh-CN' ? zh : lang === 'zh-TW' ? tw : en
  return (<div className={styles.page}>
    <div style={{background:'linear-gradient(135deg,#78350f 0%,#92400e 50%,#b45309 100%)',borderRadius:14,padding:'24px 28px',marginBottom:24,color:'#fff'}}>
      <h2 style={{fontSize:24,fontWeight:800,margin:'0 0 16px'}}>💰 {L('AI in Finance','AI 金融科技','AI 金融科技')}</h2>
      <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
        {[{v:'↓70%',t:'欺诈误报'},{v:'70%+',t:'AI交易占比'},{v:'秒级',t:'信贷审批'},{v:'$1.2T',t:'2027价值潜力'}].map(s=>(<div key={s.t} style={{textAlign:'center',background:'rgba(255,255,255,0.13)',borderRadius:10,padding:'14px 18px',minWidth:80}}><div style={{fontSize:28,fontWeight:800}}>{s.v}</div><div style={{fontSize:12,opacity:.8,marginTop:2}}>{s.t}</div></div>))}
      </div>
    </div>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12}}>🔬 {L('AI × Finance','AI × 金融','AI × 金融')}</h3>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:10,marginBottom:24}}>
      {[{icon:'🛡️',t:L('智能反欺诈','智能反欺诈','智能反欺詐'),items:LA(['🔍 实时分析 数万笔/秒','⚠️ 毫秒级异常识别','📉 误报率 ↓70%'],['🔍 实时分析 数万笔/秒','⚠️ 毫秒级异常识别','📉 误报率 ↓70%'],['🔍 Real-time 10K+ tx/sec','⚠️ Millisecond anomaly flag','📉 False positives ↓70%'])},
        {icon:'📊',t:L('算法交易','算法交易','算法交易'),items:LA(['⚡ 微秒级策略执行','📈 美股70%+ AI驱动','🏆 年化回报 66%'],['⚡ 微秒级策略执行','📈 美股70%+ AI驱动','🏆 年化回报 66%'],['⚡ Microsecond execution','📈 70%+ US stock AI-driven','🏆 66% annualized returns'])},
        {icon:'🎯',t:L('AI信用评估','AI信用评估','AI信用評估'),items:LA(['📋 1600+ 变量分析','✅ 违约率 ↓75%','👥 信贷覆盖扩大'],['📋 1600+ 变量分析','✅ 违约率 ↓75%','👥 信贷覆盖扩大'],['📋 1600+ variables','✅ Default rate ↓75%','👥 Expanded credit access'])},
        {icon:'🏦',t:L('智能理财','智能理财','智能理財'),items:LA(['🤖 个性化资产配置','💰 管理 $700B+','📊 21万亿+ 风险分析'],['🤖 个性化资产配置','💰 管理 $700B+','📊 21万亿+ 风险分析'],['🤖 Personalized allocation','💰 $700B+ managed','📊 21T+ risk analysis'])},
      ].map(c=>(<div key={c.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 10px'}}>{c.icon} {c.t}</h4><div style={{display:'flex',flexDirection:'column',gap:6}}>{c.items.map((item,i)=>(<div key={i} style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.5}}>{item}</div>))}</div></div>))}
    </div>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',margin:'28px 0 12px',paddingBottom:8,borderBottom:'2px solid var(--border)'}}>🔗 {L('Tools','工具导航','工具導航')}</h3>
    <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#f59e0b" />
  </div>)}
const links: ToolLink[] = [
  {name:'Feedzai',url:'https://www.feedzai.com/',desc:{en:'AI fraud detection, $800B+ daily processed',zh:'AI欺诈检测,日处理$800B+交易'},cat:'反欺诈',icon:'🛡️'},
  {name:'同盾科技',url:'https://www.tongdun.cn/',desc:{en:'Chinese AI risk control #1',zh:'国产AI风控领导者'},cat:'反欺诈',icon:'🛡️'},
  {name:'Alpaca',url:'https://alpaca.markets/',desc:{en:'AI algo trading API, commission-free',zh:'AI算法交易API,免佣金'},cat:'交易',icon:'🦙'},
  {name:'同花顺AI',url:'https://www.10jqka.com.cn/',desc:{en:'Chinese stock AI, Q&A, reports',zh:'同花顺AI选股,智能问答'},cat:'交易',icon:'📈'},
  {name:'Zest AI',url:'https://www.zest.ai/',desc:{en:'AI credit underwriting, fair lending',zh:'AI信贷审批,公平借贷'},cat:'风控',icon:'🎯'},
  {name:'Upstart',url:'https://www.upstart.com/',desc:{en:'AI lending, 1600+ variables',zh:'AI借贷,1600+变量模型'},cat:'风控',icon:'🚀'},
  {name:'Betterment',url:'https://www.betterment.com/',desc:{en:'AI robo-advisor, tax optimization',zh:'AI智能投顾,税收优化'},cat:'理财',icon:'💰'},
  {name:'蚂蚁财富',url:'https://www.antfortune.com/',desc:{en:'Ant Group, AI wealth mgmt',zh:'蚂蚁集团,AI理财'},cat:'理财',icon:'🐜'},
]
