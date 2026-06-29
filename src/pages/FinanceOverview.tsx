import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

export default function FinanceOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e

  return (
    <div className={styles.page}>
      <div className={styles.head}><h2 className={styles.title}>💰 {L('AI 金融科技','AI in Finance','AI 金融科技')}</h2><p className={styles.subtitle}>{L('AI如何變革反欺詐、算法交易、風險管理和智能理財','How AI is transforming fraud detection, trading, risk, and wealth management','AI如何变革反欺诈、算法交易、风险管理和智能理财')}</p></div>

      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:'var(--border)',margin:'36px 0 20px'}} /><h3 style={{fontSize:17,fontWeight:700,color:'var(--text)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>{L('AI正在改變金融','AI金融正在改变什么','AI is Transforming Finance')}</h3>
        <p style={{color:'var(--text-secondary)',lineHeight:1.8,fontSize:14,marginBottom:12}}>{L('金融是AI应用最成熟的行业之一。AI反欺诈系统每秒分析数万笔交易，将误报率降低70%；算法交易已占据美股70%以上交易量；AI信贷审批将放款时间从数天压缩到秒级；智能投顾管理资产规模突破万亿美元。据德勤报告，到2027年AI将为全球金融业增加1.2万亿美元价值。','金融是AI應用最成熟的行業之一。AI反欺詐系統每秒分析數萬筆交易，將誤報率降低70%；演算法交易已佔據美股70%以上交易量；AI信貸審批將放款時間從數天壓縮到秒級；智能投顧管理資產規模突破萬億美元。據德勤報告，到2027年AI將為全球金融業增加1.2兆美元價值。','Finance is one of AI\'s most mature verticals. AI fraud detection analyzes tens of thousands of transactions per second, reducing false positives by 70%; algorithmic trading accounts for 70%+ of US stock volume; AI credit approval compresses lending from days to seconds; robo-advisors manage over $1T in assets. Deloitte projects AI will add $1.2T in value to global finance by 2027.')}</p>
      </section>

      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:'var(--border)',margin:'36px 0 20px'}} /><h3 style={{fontSize:17,fontWeight:700,color:'var(--text)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>{L('前沿應用場景','前沿应用场景','Cutting-Edge Applications')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:12}}>
          {[
            {icon:'🛡️',t:L('智能反欺詐','智能反欺诈','Fraud Detection'),d:L('AI即時分析交易行為模式，毫秒級識別異常。Feedzai每天處理超8000億美元交易。','AI实时分析交易行为模式，毫秒级识别异常。Feedzai每天处理超8000亿美元交易，DataVisor用无监督学习发现未知欺诈模式。中国银联AI系统年拦截欺诈交易超千亿。','AI analyzes transaction patterns in real-time, flagging anomalies in milliseconds. Feedzai processes $800B+ daily. China UnionPay AI blocks over ¥100B in fraudulent transactions annually.')},
            {icon:'📊',t:L('算法交易','算法交易','Algorithmic Trading'),d:L('高频交易AI在微秒级别执行策略。Renaissance Technologies的大奖章基金用AI实现年化66%回报。Numerai通过加密数据科学竞赛构建众包AI对冲基金。','High-frequency trading AI executes strategies in microseconds. Renaissance\'s Medallion Fund achieved 66% annualized returns with AI. Numerai crowdsources hedge fund signals via encrypted data science.','高頻交易AI在微秒級別執行策略。Renaissance的大獎章基金用AI實現年化66%回報。')},
            {icon:'🎯',t:L('AI信用評估','AI信用评估','Credit Assessment'),d:L('替代传统FICO评分，分析1600+变量评估信用。Upstart的AI借贷平台将违约率降低75%，同时扩大信贷覆盖面。蚂蚁集团芝麻信用服务超10亿用户。','Replacing traditional FICO scores with 1600+ variable models. Upstart reduces default rates by 75% while expanding credit access. Ant Group\'s Sesame Credit serves 1B+ users.','替代傳統FICO評分，分析1600+變數評估信用。Upstart的AI借貸平台將違約率降低75%。')},
            {icon:'🏦',t:L('智能財富管理','智能财富管理','Wealth Management'),d:L('AI驅動個性化資產配置和稅收優化。Betterment和Wealthfront管理超7000億美元。','AI驱动个性化资产配置和税收优化。Betterment和Wealthfront管理超7000亿美元。BlackRock的Aladdin平台用AI分析全球21万亿+美元资产风险。','AI-driven personalized asset allocation and tax optimization. Betterment + Wealthfront manage $700B+. BlackRock Aladdin uses AI to analyze $21T+ in global assets.')},
          ].map(item => (<div key={item.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 4px'}}>{item.icon} {item.t}</h4><p style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.7,margin:0}}>{item.d}</p></div>))}
        </div>
      </section>

      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:'var(--border)',margin:'36px 0 20px'}} /><h3 style={{fontSize:17,fontWeight:700,color:'var(--text)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>{L('關鍵數據','关键数据','Key Metrics')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:10}}>
          {[{v:'↓70%',l:L('欺詐誤報率降低','欺诈误报率降低','False Positive Reduction')},{v:'70%+',l:L('美股AI交易佔比','美股AI交易占比','US Stock AI Trading Share')},{v:'秒级',l:L('AI信貸審批速度','AI信贷审批速度','AI Loan Approval Speed')},{v:'$1.2T',l:L('2027年AI金融價值','2027年AI金融价值(德勤)','2027 AI Finance Value (Deloitte)')}].map(m => (<div key={m.l} style={{textAlign:'center',padding:'16px 12px',background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><div style={{fontSize:24,fontWeight:800,color:'var(--primary)'}}>{m.v}</div><div style={{fontSize:12,color:'var(--text-secondary)',marginTop:4}}>{m.l}</div></div>))}
        </div>
      </section>

      <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12,marginTop:24}}>{L('行業工具導航','行业工具导航','Industry Tool Directory')}</h3>
      <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#f59e0b" />
    </div>
  )
}

const links: ToolLink[] = [
  {name:'Feedzai',url:'https://www.feedzai.com/',desc:{en:'AI fraud detection, real-time transaction scoring',zh:'AI欺诈检测,实时交易评分,日处理$800B+'},cat:'反欺诈',icon:'🛡️'},
  {name:'DataVisor',url:'https://www.datavisor.com/',desc:{en:'Unsupervised ML fraud detection, account takeover',zh:'无监督机器学习反欺诈,识别账户盗用和团伙作案'},cat:'反欺诈',icon:'🔍'},
  {name:'Sift',url:'https://www.sift.com/',desc:{en:'AI fraud + trust: account takeover, payment fraud',zh:'AI欺诈防护+信任评估:账户盗用/支付欺诈'},cat:'反欺诈',icon:'🧹'},
  {name:'同盾科技',url:'https://www.tongdun.cn/',desc:{en:'Chinese AI risk control leader, anti-fraud',zh:'国产AI风控领导者,智能反欺诈决策引擎'},cat:'反欺诈',icon:'🛡️'},
  {name:'Alpaca',url:'https://alpaca.markets/',desc:{en:'AI-powered algo trading API, commission-free',zh:'AI算法交易API,免佣金,开发者友好'},cat:'算法交易',icon:'🦙'},
  {name:'Kavout',url:'https://www.kavout.com/',desc:{en:'AI stock ranking, Kai Score for predictive analytics',zh:'AI股票评分,Kai Score预测分析选股'},cat:'算法交易',icon:'📊'},
  {name:'Numerai',url:'https://numer.ai/',desc:{en:'Crowdsourced AI hedge fund, encrypted data science',zh:'众包AI对冲基金,加密数据科学竞赛'},cat:'算法交易',icon:'🔢'},
  {name:'同花顺AI',url:'https://www.10jqka.com.cn/',desc:{en:'Chinese stock analysis, AI Q&A, financial reports',zh:'同花顺AI选股,财报分析,智能问答'},cat:'算法交易',icon:'📈'},
  {name:'Zest AI',url:'https://www.zest.ai/',desc:{en:'AI credit underwriting, fair lending compliance',zh:'AI信贷审批,公平借贷合规,替代信用评分'},cat:'风险评估',icon:'🎯'},
  {name:'Upstart',url:'https://www.upstart.com/',desc:{en:'AI lending platform, 1600+ variables risk model',zh:'AI借贷平台,1600+变量风险模型'},cat:'风险评估',icon:'🚀'},
  {name:'BlackRock Aladdin',url:'https://www.blackrock.com/aladdin/',desc:{en:'AI risk analytics, portfolio management, 21T+ assets',zh:'AI风险分析平台,管理21万亿+美元资产'},cat:'风险评估',icon:'🗿'},
  {name:'蚂蚁风控',url:'https://www.antgroup.com/',desc:{en:'Ant Group AI risk engine, real-time credit scoring',zh:'蚂蚁集团AI风控引擎,实时信用评分'},cat:'风险评估',icon:'🐜'},
  {name:'Betterment',url:'https://www.betterment.com/',desc:{en:'AI robo-advisor, tax-loss harvesting, goal-based',zh:'AI智能投顾,税收优化,目标导向投资'},cat:'智能理财',icon:'💰'},
  {name:'Wealthfront',url:'https://www.wealthfront.com/',desc:{en:'AI automated investing, self-driving money',zh:'AI自动化投资,自动驾驶理财,现金流管理'},cat:'智能理财',icon:'🏦'},
  {name:'蚂蚁财富',url:'https://www.antfortune.com/',desc:{en:'Ant Group, AI wealth management, fund selection',zh:'蚂蚁集团,AI理财,智能选基,帮你投'},cat:'智能理财',icon:'🐜'},
  {name:'微众银行AI',url:'https://www.webank.com/',desc:{en:'WeBank AI, digital banking, inclusive finance',zh:'微众银行AI,数字银行,普惠金融科技'},cat:'智能理财',icon:'🏦'},
]
