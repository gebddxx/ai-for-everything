import { useT } from '../contexts/LanguageContext'
import { tText, type MultiLang } from '../i18n/translate'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'
export default function GovTechOverview() {
  const { lang } = useT()
  const L = (a: MultiLang, b?: string, c?: string) => { if (typeof a !== "string") return tText(a, lang); if (b !== undefined) return lang === "zh-CN" ? (b || a) : lang === "zh-TW" ? (c || b || a) : a; return tText(a, lang) }
  const LA = (en: string[], zh: string[], tw: string[]) => lang === "zh-CN" ? zh : lang === "zh-TW" ? tw : en
  return (<div className={styles.page}>
    <div style={{background:'linear-gradient(135deg,#0c4a6e 0%,#0369a1 50%,#0284c7 100%)',borderRadius:14,padding:'24px 28px',marginBottom:24,color:'#fff'}}>
      <h2 style={{fontSize:24,fontWeight:800,margin:'0 0 16px'}}>🏛️ {L('AI in Government','AI 政务智慧城市','AI 政務智慧城市')}</h2>
      <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>{[{v:'↓15%',t:'交通拥堵'},{v:'300+',t:'秒批事项'},{v:'10亿+',t:'政务用户'},{v:'$300B+',t:'2028市场'}].map(s=>(<div key={s.t} style={{textAlign:'center',background:'rgba(255,255,255,0.13)',borderRadius:10,padding:'14px 18px',minWidth:80}}><div style={{fontSize:28,fontWeight:800}}>{s.v}</div><div style={{fontSize:12,opacity:.8,marginTop:2}}>{s.t}</div></div>))}</div>
    </div>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12}}>🏙️ {L('AI × Government','AI × 政务','AI × 政務')}</h3>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:10,marginBottom:24}}>
      {[{icon:'🏙️',t:L('智慧城市','智慧城市','智慧城市'),items:LA(['📹 全城摄像头+信号灯AI','🚗 交通拥堵 ↓15%','🚑 救护车到达 ↓50%'],['📹 全城摄像头+信号灯AI','🚗 交通拥堵 ↓15%','🚑 救护车到达 ↓50%'],['📹 City-wide camera+signal AI','🚗 Traffic ↓15%','🚑 Ambulance time ↓50%'])},
        {icon:'📋',t:L('数字政务','数字政务','數位政務'),items:LA(['⚡ 300+事项秒批秒办','🔗 数据打通 一次不跑','🌐 99%服务在线完成'],['⚡ 300+事项秒批秒办','🔗 数据打通 一次不跑','🌐 99%服务在线完成'],['⚡ 300+ instant approvals','🔗 Data silos broken','🌐 99% services online'])},
        {icon:'📊',t:L('政策模拟','政策模拟','政策模擬'),items:LA(['🤖 AI经济+社会模型','📈 政策效果预测','🏛️ 数据驱动决策'],['🤖 AI经济+社会模型','📈 政策效果预测','🏛️ 数据驱动决策'],['🤖 AI economic+social models','📈 Policy impact predict','🏛️ Data-driven decisions'])},
        {icon:'🚨',t:L('应急管理','应急管理','應急管理'),items:LA(['🌊 自然灾害AI预测','⚠️ 地震前10-30秒预警','🛰️ 灾后卫星图像评估'],['🌊 自然灾害AI预测','⚠️ 地震前10-30秒预警','🛰️ 灾后卫星图像评估'],['🌊 Natural disaster AI predict','⚠️ 10-30s quake warning','🛰️ Post-disaster satellite'])},
      ].map(c=>(<div key={c.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 10px'}}>{c.icon} {c.t}</h4><div style={{display:'flex',flexDirection:'column',gap:6}}>{c.items.map((item,i)=>(<div key={i} style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.5}}>{item}</div>))}</div></div>))}
    </div>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',margin:'28px 0 12px',paddingBottom:8,borderBottom:'2px solid var(--border)'}}>🔗 {L('Tools','工具导航','工具導航')}</h3>
    <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#0ea5e9" />
  </div>)}
const links: ToolLink[] = [
  {name:'杭州城市大脑',url:'https://www.hangzhou.gov.cn/',desc:{en:'AI smart city, traffic -15%',zh:'AI智慧城市,交通-15%'},cat:'工具',icon:'🏙️'},
  {name:'Palantir',url:'https://www.palantir.com/',desc:{en:'AI gov data platform',zh:'AI政务数据平台'},cat:'工具',icon:'🔮'},
  {name:'深圳AI政务',url:'https://www.sz.gov.cn/',desc:{en:'AI e-government, 300+ services',zh:'AI政务,300+事项秒批'},cat:'工具',icon:'📋'},
  {name:'X-Road',url:'https://x-road.global/',desc:{en:'Estonia AI data exchange',zh:'爱沙尼亚AI数据交换'},cat:'工具',icon:'🔗'},
  {name:'智慧雄安',url:'https://www.xiongan.gov.cn/',desc:{en:'AI-native smart city',zh:'AI原生智慧城市'},cat:'工具',icon:'🏗️'},
]
