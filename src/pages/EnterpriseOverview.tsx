import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

export default function EnterpriseOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e

  return (
    <div className={styles.page}>
      <div className={styles.head}><h2 className={styles.title}>🏢 {L('AI 企業應用','AI in Enterprise','AI 企业应用')}</h2><p className={styles.subtitle}>{L('AI如何變革行銷、人力資源、法務和企業運營','How AI transforms marketing, HR, legal, and enterprise operations','AI如何变革营销、人力资源、法务和企业运营')}</p></div>

      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:"var(--border)",margin:"36px 0 20px"}} /><h3 style={{fontSize:17,fontWeight:700,color:"var(--text)",marginBottom:16,display:"flex",alignItems:"center",gap:8}}>{L('AI正在改變企業','AI企业应用正在改变什么','AI is Transforming Enterprise')}</h3>
        <p style={{color:'var(--text-secondary)',lineHeight:1.8,fontSize:14,marginBottom:12}}>{L('AI is reshaping every corporate function. In marketing, AI-driven personalization boosts conversion rates 3-5x; in HR, AI recruitment screening compresses resume review from hours to minutes; in legal, AI contract review replaces manual screening with 95% accuracy, 20x faster. Salesforce Einstein processes 100B+ AI predictions daily. Chinese leaders like Fxiaoke, Beisen and Fadada are driving enterprise AI transformation.','AI正在重塑企业的每一个职能部门。营销领域，AI驱动的个性化推荐将转化率提升3-5倍；HR方面，AI招聘筛选将简历筛选时间从数十小时压缩到分钟级；法务领域，AI合同审查以95%准确率替代人工初筛，效率提升20倍。Salesforce Einstein每天处理超过1000亿次AI预测，HubSpot AI帮助数百万企业实现营销自动化。中国企业如纷享销客、北森、法大大等也在各自的领域用AI推动企业数字化转型。','AI正在重塑企業的每一個職能部門。行銷領域，AI驅動的個性化推薦將轉換率提升3-5倍；HR方面，AI招聘篩選將履歷篩選時間從數十小時壓縮到分鐘級；法務領域，AI合同審查以95%準確率替代人工初篩，效率提升20倍。Salesforce Einstein每天處理超過1000億次AI預測。')}</p>
      </section>

      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:"var(--border)",margin:"36px 0 20px"}} /><h3 style={{fontSize:17,fontWeight:700,color:"var(--text)",marginBottom:16,display:"flex",alignItems:"center",gap:8}}>{L('前沿應用場景','前沿应用场景','Cutting-Edge Applications')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:12}}>
          {[
            {icon:'📢',t:L('AI行銷自動化','AI营销自动化','Marketing Automation'),d:L('AI分析客戶行為，自動生成個性化內容和投放策略。HubSpot AI的線索評分將銷售轉化提升40%。','AI分析客户行为，自动生成个性化内容和投放策略。HubSpot AI的线索评分将销售转化提升40%。Jasper AI帮助企业统一品牌语调，批量生成营销内容。纷享销客和销售易在中国CRM市场以AI驱动销售全流程。','AI analyzes customer behavior, auto-generates personalized content and targeting. HubSpot AI lead scoring boosts conversion 40%. Jasper unifies brand voice at scale. Fxiaoke and Xiaoshouyi lead China CRM with AI-driven sales.')},
            {icon:'👥',t:L('AI招聘與人才管理','AI招聘与人才管理','HR & Recruitment'),d:L('AI自動篩選履歷、安排面試、分析軟技能。Paradox AI的招聘機器人Olivia每年面試數百萬候選人。','AI自动筛选简历、安排面试、分析软技能。Paradox AI的招聘机器人Olivia每年面试数百万候选人。Eightfold AI用技能图谱匹配人才与岗位。北森和Moka在中国市场以AI驱动一体化人才管理。','AI auto-screens resumes, schedules interviews, analyzes soft skills. Paradox AI recruiter Olivia interviews millions annually. Eightfold matches talent with skill graphs. Beisen and Moka drive integrated HR management in China.')},
            {icon:'⚖️',t:L('AI法務與合規','AI法务与合规','Legal & Compliance'),d:L('AI自動審查合同條款、識別風險、生成法律文件。Harvey AI已成為全球頂級律所的標準配置。','AI自动审查合同条款、识别风险、生成法律文件。Harvey AI已成为全球顶级律所的标配工具。Ironclad用AI管理合同全生命周期。法大大和幂律智能在中国市场领先电子签章和AI合同审查。','AI auto-reviews contract terms, identifies risks, generates legal docs. Harvey AI is now standard at top global law firms. Ironclad manages full contract lifecycle. Fadada and PowerLaw AI lead China e-signature and contract AI.')},
            {icon:'📊',t:L('AI客戶成功','AI客户成功','Customer Success'),d:L('AI預測客戶流失、自動觸發挽留策略、智能路由工單。Salesforce Einstein每天1000億次AI預測驅動客戶洞察。','AI预测客户流失、自动触发挽留策略、智能路由工单。Salesforce Einstein每天1000亿次AI预测驱动客户洞察。Convertlab的AI营销云帮助品牌实现全渠道个性化触达。','AI predicts churn, triggers retention strategies, routes tickets intelligently. Salesforce Einstein drives 100B daily predictions for customer insights. Convertlab AI Marketing Cloud enables omnichannel personalization.')},
          ].map(item => (<div key={item.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 4px'}}>{item.icon} {item.t}</h4><p style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.7,margin:0}}>{item.d}</p></div>))}
        </div>
      </section>

      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:"var(--border)",margin:"36px 0 20px"}} /><h3 style={{fontSize:17,fontWeight:700,color:"var(--text)",marginBottom:16,display:"flex",alignItems:"center",gap:8}}>{L('關鍵數據','关键数据','Key Metrics')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:10}}>
          {[{v:'3-5×',l:L('AI推薦轉換率提升','AI推荐转化率提升','Conversion Boost')},{v:'20×',l:L('AI合同vs人工','AI合同审查vs人工','AI vs Manual Review')},{v:'100B/天',l:L('Salesforce AI預測','Salesforce AI预测量','Salesforce AI Predictions')},{v:'10h→min',l:L('履歷篩選時間','简历筛选时间缩短','Resume Screening Time')}].map(m => (<div key={m.l} style={{textAlign:'center',padding:'16px 12px',background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><div style={{fontSize:24,fontWeight:800,color:'var(--primary)'}}>{m.v}</div><div style={{fontSize:12,color:'var(--text-secondary)',marginTop:4}}>{m.l}</div></div>))}
        </div>
      </section>

      <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12,marginTop:24}}>{L('行業工具導航','行业工具导航','Industry Tool Directory')}</h3>
      <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#64748b" />
    </div>
  )
}

const links: ToolLink[] = [
  {name:'HubSpot AI',url:'https://www.hubspot.com/',desc:{en:'AI CRM: content, lead scoring, chatbots',zh:'AI CRM:智能内容/线索评分/聊天机器人'},cat:'营销销售',icon:'🧡'},
  {name:'Salesforce Einstein',url:'https://www.salesforce.com/ai/',desc:{en:'AI across Sales/Service/Marketing cloud, 100B+/day',zh:'Salesforce AI全家桶,日处理1000亿+预测'},cat:'营销销售',icon:'☁️'},
  {name:'Jasper AI',url:'https://www.jasper.ai/',desc:{en:'Enterprise content, brand voice, team collab',zh:'企业级内容创作,品牌语调统一,团队协作'},cat:'营销销售',icon:'✨'},
  {name:'纷享销客',url:'https://www.fxiaoke.com/',desc:{en:'Chinese CRM leader, AI sales assistant, connected CRM',zh:'国产CRM领导者,AI销售助手,连接型CRM'},cat:'营销销售',icon:'🦊'},
  {name:'销售易',url:'https://www.xiaoshouyi.com/',desc:{en:'Neocrm, AI-powered Chinese sales CRM',zh:'国产CRM,AI销售自动化,客户全生命周期'},cat:'营销销售',icon:'📊'},
  {name:'Eightfold AI',url:'https://eightfold.ai/',desc:{en:'Talent intelligence, skill matching, retention',zh:'人才智能平台:AI匹配/技能分析/留存预测'},cat:'人力资源',icon:'♾️'},
  {name:'Paradox AI',url:'https://www.paradox.ai/',desc:{en:'AI recruiter Olivia: screen, schedule, onboard',zh:'AI招聘助手Olivia:筛选/排面试/入职'},cat:'人力资源',icon:'👩‍💼'},
  {name:'北森',url:'https://www.beisen.com/',desc:{en:'Chinese HR SaaS leader, AI talent management',zh:'国产HR SaaS领导者,一体化人才管理云'},cat:'人力资源',icon:'🧑‍💼'},
  {name:'Moka',url:'https://www.mokahr.com/',desc:{en:'Chinese ATS + smart recruitment platform',zh:'国产智能招聘系统,简历解析+AI筛选'},cat:'人力资源',icon:'📋'},
  {name:'Harvey AI',url:'https://www.harvey.ai/',desc:{en:'AI for law firms: contract, due diligence, research',zh:'律所AI:合同分析/尽职调查/法律研究'},cat:'法律合规',icon:'⚖️'},
  {name:'Ironclad',url:'https://ironcladapp.com/',desc:{en:'AI contract lifecycle: draft→review→negotiate',zh:'AI合同全生命周期:起草→审核→谈判'},cat:'法律合规',icon:'🛡️'},
  {name:'法大大',url:'https://www.fadada.com/',desc:{en:'Chinese e-signature + AI contract review',zh:'国产电子签章领导者,AI合同智能审查'},cat:'法律合规',icon:'✍️'},
  {name:'幂律智能',url:'https://www.powerlawai.com/',desc:{en:'AI contract review, due diligence for China legal',zh:'AI合同审查,尽职调查,法律知识图谱'},cat:'法律合规',icon:'🧠'},
  {name:'Casetext',url:'https://casetext.com/',desc:{en:'AI legal research, CoCounsel assistant',zh:'AI法律研究,CoCounsel智能助手'},cat:'法律合规',icon:'📚'},
  {name:'Convertlab',url:'https://www.convertlab.com/',desc:{en:'Chinese CDP + marketing automation platform',zh:'国产CDP+营销自动化,AI营销云'},cat:'营销销售',icon:'🔄'},
]
