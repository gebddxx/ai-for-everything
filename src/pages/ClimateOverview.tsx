import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'
export default function ClimateOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  const LA = (en: string[], zh: string[], tw: string[]) => lang === 'zh-CN' ? zh : lang === 'zh-TW' ? tw : en
  return (<div className={styles.page}>
    <div style={{background:'linear-gradient(135deg,#14532d 0%,#166534 50%,#15803d 100%)',borderRadius:14,padding:'24px 28px',marginBottom:24,color:'#fff'}}>
      <h2 style={{fontSize:24,fontWeight:800,margin:'0 0 16px'}}>🌍 {L('AI for Climate','AI 环保气候','AI 環保氣候')}</h2>
      <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>{[{v:'5-10%',t:'2030减排'},{v:'10,000×',t:'天气预报加速'},{v:'70K+',t:'追踪排放源'},{v:'700+',t:'AI环保项目'}].map(s=>(<div key={s.t} style={{textAlign:'center',background:'rgba(255,255,255,0.13)',borderRadius:10,padding:'14px 18px',minWidth:80}}><div style={{fontSize:28,fontWeight:800}}>{s.v}</div><div style={{fontSize:12,opacity:.8,marginTop:2}}>{s.t}</div></div>))}</div>
    </div>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12}}>🌱 {L('AI × Climate','AI × 气候','AI × 氣候')}</h3>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:10,marginBottom:24}}>
      {[{icon:'🛰️',t:L('碳追踪','碳追踪','碳追蹤'),items:LA(['🛸 卫星+AI 全球监测','📍 7万+ 排放源追踪','🏭 精确定位工厂泄漏'],['🛸 卫星+AI 全球监测','📍 7万+ 排放源追踪','🏭 精确定位工厂泄漏'],['🛸 Satellite+AI global','📍 70K+ emission sources','🏭 Pinpoint factory leaks'])},
        {icon:'🌪️',t:L('AI气象','AI气象','AI氣象'),items:LA(['⚡ 1.4秒 全球7天预报','📊 90%指标超传统','🌧️ 短时降雨 +20%准确'],['⚡ 1.4秒 全球7天预报','📊 90%指标超传统','🌧️ 短时降雨 +20%准确'],['⚡ 1.4s global 7-day','📊 90% beat traditional','🌧️ Rainfall +20% accurate'])},
        {icon:'🌳',t:L('生态保护','生态保护','生態保護'),items:LA(['📱 旧手机+AI 监测砍伐','🌲 2500+km²雨林保护','🐅 AI+无人机 追踪种群'],['📱 旧手机+AI 监测砍伐','🌲 2500+km²雨林保护','🐅 AI+无人机 追踪种群'],['📱 Old phones+AI logging','🌲 2500+km² rainforest','🐅 AI+drones track species'])},
        {icon:'♻️',t:L('废物管理','废物管理','廢物管理'),items:LA(['🤖 AI分拣 80吨/时','✅ 99% 分拣准确率','🌍 20国 250亿+件/年'],['🤖 AI分拣 80吨/时','✅ 99% 分拣准确率','🌍 20国 250亿+件/年'],['🤖 80 tons/hr sorting','✅ 99% accuracy','🌍 20 countries 25B+ items'])},
      ].map(c=>(<div key={c.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 10px'}}>{c.icon} {c.t}</h4><div style={{display:'flex',flexDirection:'column',gap:6}}>{c.items.map((item,i)=>(<div key={i} style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.5}}>{item}</div>))}</div></div>))}
    </div>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',margin:'28px 0 12px',paddingBottom:8,borderBottom:'2px solid var(--border)'}}>🔗 {L('Tools','工具导航','工具導航')}</h3>
    <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#10b981" />
  </div>)}
const links: ToolLink[] = [
  {name:'Climate TRACE',url:'https://climatetrace.org/',desc:{en:'AI+satellite carbon tracking, 70K+',zh:'AI+卫星碳排放追踪,7万+排放源'},cat:'工具',icon:'🛰️'},
  {name:'华为盘古气象',url:'https://www.huaweicloud.com/',desc:{en:'AI weather, 1.4s 7-day forecast',zh:'AI气象,1.4秒7天全球预报'},cat:'工具',icon:'🌪️'},
  {name:'Google GraphCast',url:'https://deepmind.google/',desc:{en:'AI weather, 90% beat ECMWF',zh:'AI天气预报,90%指标超传统'},cat:'工具',icon:'🔵'},
  {name:'GHGSat',url:'https://www.ghgsat.com/',desc:{en:'AI satellite methane detection',zh:'AI卫星甲烷检测,精确到工厂'},cat:'工具',icon:'🛸'},
  {name:'Rainforest Connection',url:'https://rfcx.org/',desc:{en:'AI rainforest, old phones+acoustic',zh:'AI雨林保护,旧手机+声学AI'},cat:'工具',icon:'🌳'},
]
