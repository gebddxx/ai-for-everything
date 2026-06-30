import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'
export default function EnergyOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  const LA = (en: string[], zh: string[], tw: string[]) => lang === 'zh-CN' ? zh : lang === 'zh-TW' ? tw : en
  return (<div className={styles.page}>
    <div style={{background:'linear-gradient(135deg,#713f12 0%,#854d0e 50%,#a16207 100%)',borderRadius:14,padding:'24px 28px',marginBottom:24,color:'#fff'}}>
      <h2 style={{fontSize:24,fontWeight:800,margin:'0 0 16px'}}>⚡ {L('AI in Energy','AI 能源电力','AI 能源電力')}</h2>
      <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>{[{v:'↓40%',t:'冷却能耗'},{v:'92%+',t:'风电预测'},{v:'5-10%',t:'2030减排'},{v:'11亿',t:'电网覆盖'}].map(s=>(<div key={s.t} style={{textAlign:'center',background:'rgba(255,255,255,0.13)',borderRadius:10,padding:'14px 18px',minWidth:80}}><div style={{fontSize:28,fontWeight:800}}>{s.v}</div><div style={{fontSize:12,opacity:.8,marginTop:2}}>{s.t}</div></div>))}</div>
    </div>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12}}>🔌 {L('AI × Energy','AI × 能源','AI × 能源')}</h3>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:10,marginBottom:24}}>
      {[{icon:'🔋',t:L('智能电网','智能电网','智慧電網'),items:LA(['⚡ 实时供需平衡调度','📊 TB级数据处理','👥 11亿用户覆盖'],['⚡ 实时供需平衡调度','📊 TB级数据处理','👥 11亿用户覆盖'],['⚡ Real-time supply-demand','📊 Terabytes processed','👥 1.1B users covered'])},
        {icon:'💨',t:L('新能源预测','新能源预测','新能源預測'),items:LA(['🌬️ 气象+地形+设备融合','📈 功率预测 92%+准确','💰 减少数亿元弃风损失'],['🌬️ 气象+地形+设备融合','📈 功率预测 92%+准确','💰 减少数亿元弃风损失'],['🌬️ Weather+terrain+equip','📈 92%+ forecast accuracy','💰 $100M+ curtailment saved'])},
        {icon:'🏭',t:L('碳减排','碳减排','碳減排'),items:LA(['🪨 水泥燃料 ↓8%','🔥 燃气轮机优化 CO2↓','🏭 火电每度煤耗 ↓3g'],['🪨 水泥燃料 ↓8%','🔥 燃气轮机优化 CO2↓','🏭 火电每度煤耗 ↓3g'],['🪨 Cement fuel ↓8%','🔥 Turbine CO2 optimized','🏭 Coal per kWh ↓3g'])},
        {icon:'⚡',t:L('AI储能','AI储能','AI儲能'),items:LA(['🔮 电价波动预测','💰 自动充放电套利','🌍 40+ 全球市场运营'],['🔮 电价波动预测','💰 自动充放电套利','🌍 40+ 全球市场运营'],['🔮 Price fluctuation predict','💰 Auto charge/discharge','🌍 40+ markets'])},
      ].map(c=>(<div key={c.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 10px'}}>{c.icon} {c.t}</h4><div style={{display:'flex',flexDirection:'column',gap:6}}>{c.items.map((item,i)=>(<div key={i} style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.5}}>{item}</div>))}</div></div>))}
    </div>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',margin:'28px 0 12px',paddingBottom:8,borderBottom:'2px solid var(--border)'}}>🔗 {L('Tools','工具导航','工具導航')}</h3>
    <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#f59e0b" />
  </div>)}
const links: ToolLink[] = [
  {name:'AutoGrid',url:'https://www.auto-grid.com/',desc:{en:'AI energy optimization, 50+ utilities',zh:'AI能源优化,50+电力公司'},cat:'工具',icon:'🔋'},
  {name:'Tesla Autobidder',url:'https://www.tesla.com/',desc:{en:'AI energy trading, GWh storage',zh:'AI能源交易,管理GWh储能'},cat:'工具',icon:'⚡'},
  {name:'Carbon Re',url:'https://carbonre.com/',desc:{en:'AI cement/steel decarbonization',zh:'AI水泥/钢铁脱碳'},cat:'工具',icon:'🏭'},
  {name:'国家电网AI',url:'https://www.sgcc.com.cn/',desc:{en:'AI power dispatch, 1.1B users',zh:'AI电力调度,11亿用户'},cat:'工具',icon:'🇨🇳'},
  {name:'Fluence',url:'https://fluenceenergy.com/',desc:{en:'AI storage platform, 40+ markets',zh:'AI储能平台,40+市场'},cat:'工具',icon:'🔋'},
]
