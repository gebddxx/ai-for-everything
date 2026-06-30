import { useT } from '../contexts/LanguageContext'
import { tText, type MultiLang } from '../i18n/translate'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'
export default function RetailOverview() {
  const { lang } = useT()
  const L = (a: MultiLang, b?: string, c?: string) => { if (typeof a !== "string") return tText(a, lang); if (b !== undefined) return lang === "zh-CN" ? (b || a) : lang === "zh-TW" ? (c || b || a) : a; return tText(a, lang) }
  const LA = (en: string[], zh: string[], tw: string[]) => lang === "zh-CN" ? zh : lang === "zh-TW" ? tw : en
  return (<div className={styles.page}>
    <div style={{background:'linear-gradient(135deg,#9a3412 0%,#c2410c 50%,#ea580c 100%)',borderRadius:14,padding:'24px 28px',marginBottom:24,color:'#fff'}}>
      <h2 style={{fontSize:24,fontWeight:800,margin:'0 0 16px'}}>🛒 {L('AI in Retail','AI 零售电商','AI 零售電商')}</h2>
      <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>{[{v:'35%',t:'推荐贡献营收'},{v:'↓30%',t:'生鲜损耗'},{v:'5×',t:'结账加速'},{v:'$400B+',t:'价值潜力'}].map(s=>(<div key={s.t} style={{textAlign:'center',background:'rgba(255,255,255,0.13)',borderRadius:10,padding:'14px 18px',minWidth:80}}><div style={{fontSize:28,fontWeight:800}}>{s.v}</div><div style={{fontSize:12,opacity:.8,marginTop:2}}>{s.t}</div></div>))}</div>
    </div>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12}}>🛍️ {L('AI × Retail','AI × 零售','AI × 零售')}</h3>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:10,marginBottom:24}}>
      {[{icon:'🎯',t:L('AI推荐','AI推荐','AI推薦'),items:LA(['🧠 千人千面实时推荐','💰 35% 营收来自AI','📱 100亿+ 日请求量'],['🧠 千人千面实时推荐','💰 35% 营收来自AI','📱 100亿+ 日请求量'],['🧠 Real-time personalization','💰 35% revenue from AI','📱 10B+ daily requests'])},
        {icon:'📊',t:L('动态定价','动态定价','動態定價'),items:LA(['💹 实时调整数万SKU','🏷️ 库存+竞品+需求驱动','🚗 高峰期接单率 ↑40%'],['💹 实时调整数万SKU','🏷️ 库存+竞品+需求驱动','🚗 高峰期接单率 ↑40%'],['💹 Real-time SKU pricing','🏷️ Stock+competitor+demand','🚗 Peak fulfillment +40%'])},
        {icon:'🏪',t:L('无人零售','无人零售','無人零售'),items:LA(['👁️ CV追踪 即拿即走','🛒 20+ Amazon Go门店','⏱️ 结账速度 ↑5倍'],['👁️ CV追踪 即拿即走','🛒 20+ Amazon Go门店','⏱️ 结账速度 ↑5倍'],['👁️ CV tracking grab&go','🛒 20+ Amazon Go stores','⏱️ Checkout 5x faster'])},
        {icon:'📦',t:L('AI供应链','AI供应链','AI供應鏈'),items:LA(['🔮 区域需求预测','📦 库存周转 ↓2周','⚡ 设计→上架 3天'],['🔮 区域需求预测','📦 库存周转 ↓2周','⚡ 设计→上架 3天'],['🔮 Regional demand forecast','📦 Inventory turn ↓2 wks','⚡ Design→shelf 3 days'])},
      ].map(c=>(<div key={c.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 10px'}}>{c.icon} {c.t}</h4><div style={{display:'flex',flexDirection:'column',gap:6}}>{c.items.map((item,i)=>(<div key={i} style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.5}}>{item}</div>))}</div></div>))}
    </div>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',margin:'28px 0 12px',paddingBottom:8,borderBottom:'2px solid var(--border)'}}>🔗 {L('Tools','工具导航','工具導航')}</h3>
    <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#f97316" />
  </div>)}
const links: ToolLink[] = [
  {name:'Shopify Magic',url:'https://www.shopify.com/',desc:{en:'AI product description, email gen',zh:'AI商品描述/邮件生成'},cat:'工具',icon:'🛍️'},
  {name:'Dynamic Yield',url:'https://www.dynamicyield.com/',desc:{en:'McDonalds, AI personalization',zh:'麦当劳御用,AI个性化'},cat:'工具',icon:'🎯'},
  {name:'有赞AI',url:'https://www.youzan.com/',desc:{en:'Chinese retail SaaS, AI CRM',zh:'国产零售SaaS,AI客户管理'},cat:'工具',icon:'🛒'},
  {name:'微盟AI',url:'https://www.weimob.com/',desc:{en:'Chinese smart retail, AI ops',zh:'国产智慧零售,AI私域运营'},cat:'工具',icon:'🏬'},
]
