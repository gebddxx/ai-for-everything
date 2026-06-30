import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'
export default function TransportOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  const LA = (en: string[], zh: string[], tw: string[]) => lang === 'zh-CN' ? zh : lang === 'zh-TW' ? tw : en
  return (<div className={styles.page}>
    <div style={{background:'linear-gradient(135deg,#1e3a5f 0%,#1e40af 50%,#2563eb 100%)',borderRadius:14,padding:'24px 28px',marginBottom:24,color:'#fff'}}>
      <h2 style={{fontSize:24,fontWeight:800,margin:'0 0 16px'}}>🚗 {L('AI in Transportation','AI 交通出行','AI 交通出行')}</h2>
      <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>{[{v:'150K/周',t:'无人出行'},{v:'↓25%',t:'城市拥堵'},{v:'600万+',t:'累计订单'},{v:'20+城',t:'自动驾驶测试'}].map(s=>(<div key={s.t} style={{textAlign:'center',background:'rgba(255,255,255,0.13)',borderRadius:10,padding:'14px 18px',minWidth:80}}><div style={{fontSize:28,fontWeight:800}}>{s.v}</div><div style={{fontSize:12,opacity:.8,marginTop:2}}>{s.t}</div></div>))}</div>
    </div>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12}}>🚦 {L('AI × Transport','AI × 交通','AI × 交通')}</h3>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:10,marginBottom:24}}>
      {[{icon:'🚕',t:L('无人出租车','无人出租车','無人計程車'),items:LA(['🤖 L4级 全无人驾驶','🌆 旧金山/凤凰城/LA','🇨🇳 武汉 500+辆运营'],['🤖 L4级 全无人驾驶','🌆 旧金山/凤凰城/LA','🇨🇳 武汉 500+辆运营'],['🤖 L4 full autonomy','🌆 SF/Phoenix/LA','🇨🇳 Wuhan 500+ vehicles'])},
        {icon:'🧠',t:L('端到端自动驾驶','端到端自动驾驶','端到端自動駕駛'),items:LA(['🧬 神经网络替代规则','🛣️ 训练 10亿+ 英里','🇨🇳 400+城 NOA覆盖'],['🧬 神经网络替代规则','🛣️ 训练 10亿+ 英里','🇨🇳 400+城 NOA覆盖'],['🧬 Neural over rules','🛣️ 1B+ miles trained','🇨🇳 400+ cities NOA'])},
        {icon:'🚦',t:L('智慧交通','智慧交通','智慧交通'),items:LA(['📹 实时摄像头分析','🚥 动态红绿灯优化','🚑 救护车到达 ↓50%'],['📹 实时摄像头分析','🚥 动态红绿灯优化','🚑 救护车到达 ↓50%'],['📹 Real-time camera AI','🚥 Dynamic signal control','🚑 Ambulance time ↓50%'])},
        {icon:'🛵',t:L('出行配送','出行配送','出行配送'),items:LA(['🚗 数千万单/天匹配','⏱️ 等车时间 ↓35%','🚁 无人机 10万+ 订单'],['🚗 数千万单/天匹配','⏱️ 等车时间 ↓35%','🚁 无人机 10万+ 订单'],['🚗 10M+ rides/day','⏱️ Wait time ↓35%','🚁 100K+ drone deliveries'])},
      ].map(c=>(<div key={c.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 10px'}}>{c.icon} {c.t}</h4><div style={{display:'flex',flexDirection:'column',gap:6}}>{c.items.map((item,i)=>(<div key={i} style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.5}}>{item}</div>))}</div></div>))}
    </div>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',margin:'28px 0 12px',paddingBottom:8,borderBottom:'2px solid var(--border)'}}>🔗 {L('Tools','工具导航','工具導航')}</h3>
    <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#3b82f6" />
  </div>)}
const links: ToolLink[] = [
  {name:'Waymo',url:'https://waymo.com/',desc:{en:'Alphabet L4, 150K+ rides/week',zh:'Alphabet L4无人驾驶'},cat:'工具',icon:'🚕'},
  {name:'特斯拉FSD',url:'https://www.tesla.com/',desc:{en:'End-to-end NN, 1B+ miles',zh:'端到端神经网络,10亿英里'},cat:'工具',icon:'⚡'},
  {name:'百度Apollo',url:'https://apollo.baidu.com/',desc:{en:'L4 robotaxi, Wuhan 500+',zh:'L4无人驾驶,武汉500+辆'},cat:'工具',icon:'🚗'},
  {name:'华为ADS',url:'https://www.huawei.com/',desc:{en:'Mapless city NOA, 400+ cities',zh:'无图城市领航,400+城'},cat:'工具',icon:'📡'},
  {name:'滴滴AI',url:'https://www.didiglobal.com/',desc:{en:'Ride-hailing AI dispatch',zh:'出行AI调度,数千万单/天'},cat:'工具',icon:'🚘'},
]
