import { useT } from '../contexts/LanguageContext';import LinkNav,{type ToolLink}from'../components/LinkNav';import styles from'./Page.module.css'
const links:ToolLink[]=[
{name:'Feedzai',url:'https://www.feedzai.com/',desc:{en:'AI fraud detection, real-time transaction scoring',zh:'AI欺诈检测,实时交易评分,全球最大金融AI公司之一'},cat:'fraud',icon:'🛡️'},
{name:'DataVisor',url:'https://www.datavisor.com/',desc:{en:'Unsupervised ML fraud detection, account takeover',zh:'无监督机器学习反欺诈,识别账户盗用和团伙作案'},cat:'fraud',icon:'🔍'},
{name:'Featurespace',url:'https://www.featurespace.com/',desc:{en:'Adaptive behavioral analytics for real-time fraud',zh:'自适应行为分析,实时识别异常交易模式'},cat:'fraud',icon:'📈'},
{name:'Sift',url:'https://www.sift.com/',desc:{en:'AI fraud + trust: account takeover, payment fraud',zh:'AI欺诈防护+信任评估:账户盗用/支付欺诈'},cat:'fraud',icon:'🧹'},
{name:'Quantexa',url:'https://www.quantexa.com/',desc:{en:'AI entity resolution + network analytics for fraud',zh:'AI实体解析+关系网络分析,反洗钱/欺诈'},cat:'fraud',icon:'🕸️'},
{name:'Socure',url:'https://www.socure.com/',desc:{en:'AI identity verification, KYC, fraud risk score',zh:'AI身份验证,KYC合规,欺诈风险评分'},cat:'fraud',icon:'🪪'},
{name:'同盾科技',url:'https://www.tongdun.cn/',desc:{en:'Chinese AI risk control leader, anti-fraud',zh:'国产AI风控领导者,智能反欺诈决策引擎'},cat:'fraud',icon:'🛡️'},
{name:'第四范式',url:'https://www.4paradigm.com/',desc:{en:'Chinese enterprise AI, anti-fraud + risk solutions',zh:'国产企业AI,反欺诈+智能风控解决方案'},cat:'fraud',icon:'4️⃣'},
{name:'Alpaca',url:'https://alpaca.markets/',desc:{en:'AI-powered algo trading API, commission-free',zh:'AI算法交易API,免佣金,开发者友好'},cat:'trading',icon:'🦙'},
{name:'Kavout',url:'https://www.kavout.com/',desc:{en:'AI stock ranking, Kai Score for predictive analytics',zh:'AI股票评分, Kai Score预测分析选股'},cat:'trading',icon:'📊'},
{name:'Trade Ideas',url:'https://www.trade-ideas.com/',desc:{en:'AI trade signal, Holly AI real-time scanning',zh:'AI交易信号,Holly AI实时扫描美股'},cat:'trading',icon:'💡'},
{name:'Numerai',url:'https://numer.ai/',desc:{en:'Crowdsourced AI hedge fund, encrypted data science',zh:'众包AI对冲基金,加密数据科学竞赛'},cat:'trading',icon:'🔢'},
{name:'Bloomberg GPT',url:'https://www.bloomberg.com/company/press/bloomberggpt/',desc:{en:'50B-param LLM trained on financial data',zh:'500亿参数金融大模型,彭博终端AI升级'},cat:'trading',icon:'💼'},
{name:'FinChat.io',url:'https://finchat.io/',desc:{en:'AI financial analyst, earnings, transcripts, models',zh:'AI金融分析师,财报/电话会/估值模型'},cat:'trading',icon:'💬'},
{name:'同花顺AI',url:'https://www.10jqka.com.cn/',desc:{en:'Chinese stock analysis, AI Q&A, financial reports',zh:'同花顺AI选股,财报分析,智能问答'},cat:'trading',icon:'📈'},
{name:'东方财富AI',url:'https://www.eastmoney.com/',desc:{en:'Chinese fintech, AI stock research, big data',zh:'东方财富AI研报,大数据选股,智能诊股'},cat:'trading',icon:'💰'},
{name:'Zest AI',url:'https://www.zest.ai/',desc:{en:'AI credit underwriting, fair lending compliance',zh:'AI信贷审批,公平借贷合规,替代信用评分'},cat:'risk',icon:'🎯'},
{name:'Upstart',url:'https://www.upstart.com/',desc:{en:'AI lending platform, 1600+ variables risk model',zh:'AI借贷平台,1600+变量风险模型,无FICO也能贷'},cat:'risk',icon:'🚀'},
{name:'Ayasdi',url:'https://www.ayasdi.com/',desc:{en:'AI stress testing, anti-money laundering',zh:'AI压力测试,反洗钱AML,拓扑数据分析'},cat:'risk',icon:'🔬'},
{name:'BlackRock Aladdin',url:'https://www.blackrock.com/aladdin/',desc:{en:'AI risk analytics, portfolio management, 21T+ assets',zh:'AI风险分析平台,管理21万亿+美元资产'},cat:'risk',icon:'🗿'},
{name:'蚂蚁风控',url:'https://www.antgroup.com/',desc:{en:'Ant Group AI risk engine, real-time credit scoring',zh:'蚂蚁集团AI风控引擎,实时信用评分'},cat:'risk',icon:'🐜'},
{name:'百融云创',url:'https://www.brgroup.com/',desc:{en:'Chinese AI credit scoring, banking risk solutions',zh:'国产AI信用评估,银行风控解决方案'},cat:'risk',icon:'☁️'},
{name:'Betterment',url:'https://www.betterment.com/',desc:{en:'AI robo-advisor, tax-loss harvesting, goal-based',zh:'AI智能投顾,税收优化,目标导向投资'},cat:'wealth',icon:'💰'},
{name:'Wealthfront',url:'https://www.wealthfront.com/',desc:{en:'AI automated investing, self-driving money',zh:'AI自动化投资,自动驾驶理财,现金流管理'},cat:'wealth',icon:'🏦'},
{name:'Addepar',url:'https://addepar.com/',desc:{en:'AI wealth data aggregation, portfolio analytics',zh:'AI财富数据聚合,多资产组合分析'},cat:'wealth',icon:'📋'},
{name:'Personetics',url:'https://personetics.com/',desc:{en:'AI personalized financial insights for banks',zh:'AI个性化财务洞察,银行智能推送'},cat:'wealth',icon:'🧠'},
{name:'蚂蚁财富',url:'https://www.antfortune.com/',desc:{en:'Ant Group, AI wealth management, fund selection',zh:'蚂蚁集团,AI理财,智能选基,帮你投'},cat:'wealth',icon:'🐜'},
{name:'微众银行AI',url:'https://www.webank.com/',desc:{en:'WeBank AI, digital banking, inclusive finance',zh:'微众银行AI,数字银行,普惠金融科技'},cat:'wealth',icon:'🏦'},
]
export default function FinanceOverview({ scrollTo }:{ scrollTo?: string }){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>💰 {L('Finance','金融科技','金融科技')}</h2><p className={styles.subtitle}>{L('28 AI tools — Fraud, Trading, Risk, Wealth','28款AI金融工具——反欺诈、算法交易、风险评估、智能理财','28款AI金融工具——反欺詐、算法交易、風險評估、智能理財')}</p></div>
<LinkNav links={links} lang={lang as'en'|'zh-CN'|'zh-TW'} color="#f59e0b" scrollTo={scrollTo} catNames={{fraud:L('Fraud Detection','欺诈检测','欺詐檢測'),trading:L('Algo Trading','算法交易','算法交易'),risk:L('Risk Assessment','风险评估','風險評估'),wealth:L('Wealth Management','智能理财','智能理財')}}/></div>)}
