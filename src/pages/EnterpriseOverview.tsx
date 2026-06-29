import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

export default function EnterpriseOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  const LA = (en: string[], zh: string[], tw: string[]) => lang === 'zh-CN' ? zh : lang === 'zh-TW' ? tw : en
  return (<div className={styles.page}>
    <div style={{background:'linear-gradient(135deg,#1e293b 0%,#334155 50%,#475569 100%)',borderRadius:14,padding:'24px 28px',marginBottom:24,color:'#fff'}}>
      <h2 style={{fontSize:24,fontWeight:800,margin:'0 0 16px'}}>🏢 {L('AI in Enterprise','AI 企业应用','AI 企業應用')}</h2>
      <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
        {[{v:'3-5×',t:'转化率提升'},{v:'20×',t:'合同审查加速'},{v:'100B/天',t:'AI预测量'},{v:'分秒',t:'简历筛选'}].map(s=>(<div key={s.t} style={{textAlign:'center',background:'rgba(255,255,255,0.13)',borderRadius:10,padding:'14px 18px',minWidth:80}}><div style={{fontSize:28,fontWeight:800}}>{s.v}</div><div style={{fontSize:12,opacity:.8,marginTop:2}}>{s.t}</div></div>))}
      </div>
    </div>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12}}>💼 {L('AI × Enterprise','AI × 企业','AI × 企業')}</h3>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:10,marginBottom:24}}>
      {[{icon:'📢',t:L('营销自动化','营销自动化','行銷自動化'),items:LA(['🎯 个性化推荐 转化 ↑3-5×','🤖 AI批量生成营销内容','📊 线索评分 转化 ↑40%'],['🎯 个性化推荐 转化 ↑3-5×','🤖 AI批量生成营销内容','📊 线索评分 转化 ↑40%'],['🎯 Personalization 3-5x conv','🤖 AI bulk content gen','📊 Lead scoring +40% conv'])},
        {icon:'👥',t:L('HR与招聘','HR与招聘','HR與招聘'),items:LA(['📋 AI自动筛选简历','🤖 面试机器人 百万级/年','🎯 技能图谱 人才匹配'],['📋 AI自动筛选简历','🤖 面试机器人 百万级/年','🎯 技能图谱 人才匹配'],['📋 AI resume screening','🤖 Bot interviews millions/yr','🎯 Skill graph matching'])},
        {icon:'⚖️',t:L('法务与合规','法务与合规','法務與合規'),items:LA(['📄 AI合同审查 20×加速','🔍 风险条款自动识别','🏛️ 全球顶级律所标配'],['📄 AI合同审查 20×加速','🔍 风险条款自动识别','🏛️ 全球顶级律所标配'],['📄 AI contract 20x faster','🔍 Auto risk clause detect','🏛️ Top law firm standard'])},
        {icon:'📊',t:L('客户成功','客户成功','客戶成功'),items:LA(['🔮 流失预测+自动挽留','📡 智能路由工单','💬 100B+/天 AI预测'],['🔮 流失预测+自动挽留','📡 智能路由工单','💬 100B+/天 AI预测'],['🔮 Churn predict+auto retain','📡 Smart ticket routing','💬 100B+ AI predictions/day'])},
      ].map(c=>(<div key={c.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 10px'}}>{c.icon} {c.t}</h4><div style={{display:'flex',flexDirection:'column',gap:6}}>{c.items.map((item,i)=>(<div key={i} style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.5}}>{item}</div>))}</div></div>))}
    </div>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',margin:'28px 0 12px',paddingBottom:8,borderBottom:'2px solid var(--border)'}}>🔗 {L('Tools','工具导航','工具導航')}</h3>
    <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#64748b" />
  </div>)}
const links: ToolLink[] = [
  {name:'HubSpot AI',url:'https://www.hubspot.com/',desc:{en:'AI CRM: content, lead scoring',zh:'AI CRM:智能内容/线索评分'},cat:'营销',icon:'🧡'},
  {name:'Salesforce Einstein',url:'https://www.salesforce.com/',desc:{en:'AI cloud, 100B+ predictions/day',zh:'AI全家桶,日处理1000亿+'},cat:'营销',icon:'☁️'},
  {name:'纷享销客',url:'https://www.fxiaoke.com/',desc:{en:'Chinese CRM leader, AI sales',zh:'国产CRM,AI销售助手'},cat:'营销',icon:'🦊'},
  {name:'Eightfold AI',url:'https://eightfold.ai/',desc:{en:'Talent intelligence, skill matching',zh:'人才智能平台,AI匹配'},cat:'HR',icon:'♾️'},
  {name:'北森',url:'https://www.beisen.com/',desc:{en:'Chinese HR SaaS leader',zh:'国产HR SaaS,一体化人才管理'},cat:'HR',icon:'🧑‍💼'},
  {name:'Harvey AI',url:'https://www.harvey.ai/',desc:{en:'AI for law firms, research',zh:'律所AI:合同/尽调/研究'},cat:'法务',icon:'⚖️'},
  {name:'Ironclad',url:'https://ironcladapp.com/',desc:{en:'AI contract lifecycle',zh:'AI合同全生命周期管理'},cat:'法务',icon:'🛡️'},
  {name:'法大大',url:'https://www.fadada.com/',desc:{en:'Chinese e-signature + AI',zh:'国产电子签章+AI审查'},cat:'法务',icon:'✍️'},
]
