import { useT } from '../contexts/LanguageContext'
import { tText, type MultiLang } from '../i18n/translate'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'
export default function ManufacturingOverview() {
  const { lang } = useT()
  const L = (a: MultiLang, b?: string, c?: string) => { if (typeof a !== "string") return tText(a, lang); if (b !== undefined) return lang === "zh-CN" ? (b || a) : lang === "zh-TW" ? (c || b || a) : a; return tText(a, lang) }
  const LA = (en: string[], zh: string[], tw: string[]) => lang === "zh-CN" ? zh : lang === "zh-TW" ? tw : en
  return (<div className={styles.page}>
    <div style={{background:'linear-gradient(135deg,#7f1d1d 0%,#991b1b 50%,#b91c1c 100%)',borderRadius:14,padding:'24px 28px',marginBottom:24,color:'#fff'}}>
      <h2 style={{fontSize:24,fontWeight:800,margin:'0 0 16px'}}>🏗️ {L('AI in Manufacturing','AI 智能制造','AI 智慧製造')}</h2>
      <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
        {[{v:'↓30-50%',t:'意外停机'},{v:'99.9%',t:'质检准确率'},{v:'$1.4T',t:'价值潜力'},{v:'10×',t:'供应链响应'}].map(s=>(<div key={s.t} style={{textAlign:'center',background:'rgba(255,255,255,0.13)',borderRadius:10,padding:'14px 18px',minWidth:80}}><div style={{fontSize:28,fontWeight:800}}>{s.v}</div><div style={{fontSize:12,opacity:.8,marginTop:2}}>{s.t}</div></div>))}
      </div>
    </div>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12}}>⚙️ {L('AI × Manufacturing','AI × 制造','AI × 製造')}</h3>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:10,marginBottom:24}}>
      {[{icon:'🔊',t:L('预测性维护','预测性维护','預測性維護'),items:LA(['📊 振动+超声波+电流分析','⚠️ 提前数周预警故障','📉 意外停机 ↓70%'],['📊 振动+超声波+电流分析','⚠️ 提前数周预警故障','📉 意外停机 ↓70%'],['📊 Vibration+ultrasound+current','⚠️ Weeks-ahead failure alert','📉 Unplanned downtime ↓70%'])},
        {icon:'👁️',t:L('AI视觉质检','AI视觉质检','AI視覺質檢'),items:LA(['🔍 产线实时缺陷检测','✅ 准确率 99.9%','🏭 3C/汽车/半导体应用'],['🔍 产线实时缺陷检测','✅ 准确率 99.9%','🏭 3C/汽车/半导体应用'],['🔍 Real-time defect detection','✅ 99.9% accuracy','🏭 3C/auto/semiconductor'])},
        {icon:'🔄',t:L('数字孪生','数字孪生','數字孿生'),items:LA(['🖥️ 1:1 虚拟工厂复刻','📡 实时监控+仿真优化','🏭 百万设备连接'],['🖥️ 1:1 虚拟工厂复刻','📡 实时监控+仿真优化','🏭 百万设备连接'],['🖥️ 1:1 virtual factory','📡 Real-time sim+optimize','🏭 Million devices connected'])},
        {icon:'📦',t:L('智能供应链','智能供应链','智慧供應鏈'),items:LA(['🛒 实时采购+库存优化','⚡ 响应速度 ↑10倍','🚢 全球物流可视化'],['🛒 实时采购+库存优化','⚡ 响应速度 ↑10倍','🚢 全球物流可视化'],['🛒 Real-time procurement','⚡ 10x responsiveness','🚢 Global logistics visibility'])},
      ].map(c=>(<div key={c.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 10px'}}>{c.icon} {c.t}</h4><div style={{display:'flex',flexDirection:'column',gap:6}}>{c.items.map((item,i)=>(<div key={i} style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.5}}>{item}</div>))}</div></div>))}
    </div>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',margin:'28px 0 12px',paddingBottom:8,borderBottom:'2px solid var(--border)'}}>🔗 {L('Tools','工具导航','工具導航')}</h3>
    <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#ef4444" />
  </div>)}
const links: ToolLink[] = [
  {name:'Augury',url:'https://www.augury.com/',desc:{en:'AI vibration+ultrasound, machine health',zh:'AI振动+超声波分析,机器健康'},cat:'维护',icon:'🔊'},
  {name:'C3 AI',url:'https://c3.ai/',desc:{en:'Enterprise AI: PdM, energy',zh:'企业AI:预测维护+能源管理'},cat:'维护',icon:'🏭'},
  {name:'Landing AI',url:'https://landing.ai/',desc:{en:'Andrew Ng, visual inspection',zh:'吴恩达创办,AI视觉质检'},cat:'质检',icon:'🔍'},
  {name:'思谋科技',url:'https://www.smartedges.cn/',desc:{en:'Chinese AI visual inspection #1',zh:'国产AI视觉质检领导者'},cat:'质检',icon:'👁️'},
  {name:'Siemens Xcelerator',url:'https://www.sw.siemens.com/',desc:{en:'Digital twin, factory simulation',zh:'工业元宇宙+数字孪生'},cat:'孪生',icon:'🏗️'},
  {name:'Nvidia Omniverse',url:'https://www.nvidia.com/omniverse/',desc:{en:'AI digital twin, future factory',zh:'AI数字孪生,物理级模拟'},cat:'孪生',icon:'🟢'},
  {name:'Kinaxis',url:'https://www.kinaxis.com/',desc:{en:'AI concurrent supply chain',zh:'AI并行供应链计划'},cat:'供应链',icon:'⚡'},
  {name:'Flexport',url:'https://www.flexport.com/',desc:{en:'AI freight forwarding + SC OS',zh:'AI货运代理+供应链OS'},cat:'供应链',icon:'🚢'},
]
