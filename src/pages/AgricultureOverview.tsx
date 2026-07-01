import { useT } from '../contexts/LanguageContext'
import { tText, type MultiLang } from '../i18n/translate'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'
export default function AgricultureOverview() {
  const { lang } = useT()
  const L = (a: MultiLang, b?: string, c?: string) => { if (typeof a !== "string") return tText(a, lang); if (b !== undefined) return lang === "zh-CN" ? (b || a) : lang === "zh-TW" ? (c || b || a) : a; return tText(a, lang) }
  const LA = (en: string[], zh: string[], tw: string[]) => lang === "zh-CN" ? zh : lang === "zh-TW" ? tw : en
  return (<div className={styles.page}>
    <div style={{background:'linear-gradient(135deg,#164e63 0%,#155e75 50%,#0e7490 100%)',borderRadius:14,padding:'24px 28px',marginBottom:24,color:'#fff'}}>
      <h2 style={{fontSize:24,fontWeight:800,margin:'0 0 16px'}}>🌾 {L('AI in Agriculture','AI 智慧农业','AI 智慧農業')}</h2>
      <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
        {[{v:'↓90%',t:'除草剂'},{v:'20亿亩',t:'无人机作业'},{v:'200K/h',t:'激光除草'},{v:'5×',t:'效率vs人工'}].map(s=>(<div key={s.t} style={{textAlign:'center',background:'rgba(255,255,255,0.13)',borderRadius:10,padding:'14px 18px',minWidth:80}}><div style={{fontSize:28,fontWeight:800}}>{s.v}</div><div style={{fontSize:12,opacity:.8,marginTop:2}}>{s.t}</div></div>))}
      </div>
    </div>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12}}>🌱 {L('AI × Agriculture','AI × 农业','AI × 農業')}</h3>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:10,marginBottom:24}}>
      {[{icon:'🚜',t:L('精准农业','精准农业','精準農業'),items:LA(['🎯 厘米级播种/施肥','🌿 除草剂 ↓90%','⚡ 激光除草 20万株/时'],['🎯 厘米级播种/施肥','🌿 除草剂 ↓90%','⚡ 激光除草 20万株/时'],['🎯 cm-level precision','🌿 Herbicide ↓90%','⚡ 200K weeds/hr laser'])},
        {icon:'🛩️',t:L('AI作物监测','AI作物监测','AI作物監測'),items:LA(['🛰️ 卫星+无人机 光谱','📱 拍照识别 200+病虫害','🌍 2.5亿+ 英亩数字化'],['🛰️ 卫星+无人机 光谱','📱 拍照识别 200+病虫害','🌍 2.5亿+ 英亩数字化'],['🛰️ Satellite+drone spectral','📱 Photo-detect 200+ diseases','🌍 250M+ acres digitized'])},
        {icon:'🤖',t:L('AI自动收割','AI自动收割','AI自動收割'),items:LA(['🍓 草莓 8英亩/天','🦾 机械臂精准采摘','🏡 温室 90%节水 零农药'],['🍓 草莓 8英亩/天','🦾 机械臂精准采摘','🏡 温室 90%节水 零农药'],['🍓 8 acres/day strawberries','🦾 Robotic precision pick','🏡 90% water save'])},
        {icon:'📊',t:L('产量预测','产量预测','產量預測'),items:LA(['🌦️ 气象+土壤+卫星','📈 提前数月预测','🛰️ 县级精度 全球覆盖'],['🌦️ 气象+土壤+卫星','📈 提前数月预测','🛰️ 县级精度 全球覆盖'],['🌦️ Weather+soil+satellite','📈 Months-ahead forecast','🛰️ County-level global'])},
      ].map(c=>(<div key={c.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 10px'}}>{c.icon} {c.t}</h4><div style={{display:'flex',flexDirection:'column',gap:6}}>{c.items.map((item,i)=>(<div key={i} style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.5}}>{item}</div>))}</div></div>))}
    </div>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',margin:'28px 0 12px',paddingBottom:8,borderBottom:'2px solid var(--border)'}}>🔗 {L('Tools','工具导航','工具導航')}</h3>
    <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#06b6d4" />
  </div>)}
const links: ToolLink[] = [
  {name:'John Deere AI',url:'https://www.deere.com/',desc:{en:'See & Spray AI weed detection',zh:'AI杂草识别,精准喷洒,自动驾驶'},cat:'精准',icon:'🚜'},
  {name:'Carbon Robotics',url:'https://carbonrobotics.com/',desc:{en:'LaserWeeder: 200K plants/hour',zh:'激光除草,每小时20万株'},cat:'精准',icon:'⚡'},
  {name:'大疆农业',url:'https://ag.dji.com/',desc:{en:'DJI agri drones, 2B+ mu',zh:'大疆农业无人机,20亿亩+'},cat:'精准',icon:'🚁'},
  {name:'极飞科技',url:'https://www.xa.com/',desc:{en:'Chinese agri-drone leader',zh:'国产农业无人机龙头'},cat:'精准',icon:'🛸'},
  {name:'Climate FieldView',url:'https://climate.com/',desc:{en:'Bayer AI, 250M+ acres',zh:'拜耳AI农田监测,2.5亿+英亩'},cat:'监测',icon:'🌦️'},
  {name:'Plantix',url:'https://plantix.net/',desc:{en:'AI crop disease via photo, 30M+',zh:'AI拍照识病虫害,3000万+下载'},cat:'监测',icon:'📱'},
  {name:'Descartes Labs',url:'https://descarteslabs.com/',desc:{en:'AI satellite yield forecast',zh:'AI卫星产量预测'},cat:'预测',icon:'🛰️'},
  {name:'Iron Ox',url:'https://ironox.com/',desc:{en:'AI greenhouses, 90% water save',zh:'AI温室,90%节水,零农药'},cat:'收割',icon:'🏡'},
  {name:'丰疆智能',url:'https://www.fjdynamics.com/',desc:{en:'Chinese smart agri robots',zh:'国产智能农业机器人'},cat:'收割',icon:'🤖'},
]
