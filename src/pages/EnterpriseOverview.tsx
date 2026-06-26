import { useT } from '../contexts/LanguageContext';import LinkNav,{type ToolLink}from'../components/LinkNav';import styles from'./Page.module.css'
const links:ToolLink[]=[
{name:'HubSpot AI',url:'https://www.hubspot.com/',desc:{en:'AI CRM: content, lead scoring, chatbots',zh:'AI CRM:智能内容/线索评分/聊天机器人'},cat:'marketing',icon:'🧡'},
{name:'Salesforce Einstein',url:'https://www.salesforce.com/ai/',desc:{en:'AI across Sales/Service/Marketing cloud',zh:'Salesforce AI全家桶,覆盖销售/服务/营销'},cat:'marketing',icon:'☁️'},
{name:'Jasper AI',url:'https://www.jasper.ai/',desc:{en:'Enterprise content, brand voice, team collab',zh:'企业级内容创作,品牌语调统一,团队协作'},cat:'marketing',icon:'✨'},
{name:'Clay',url:'https://www.clay.com/',desc:{en:'AI sales prospecting + data enrichment',zh:'AI销售线索挖掘+数据充实'},cat:'marketing',icon:'🧱'},
{name:'Copy.ai',url:'https://www.copy.ai/',desc:{en:'GTM automation, AI workflows for sales',zh:'GTM自动化,AI销售工作流'},cat:'marketing',icon:'📋'},
{name:'Writesonic',url:'https://writesonic.com/',desc:{en:'AI content for marketing, SEO, social media',zh:'AI营销内容:SEO文章/社媒/落地页'},cat:'marketing',icon:'✍️'},
{name:'AdCreative.ai',url:'https://www.adcreative.ai/',desc:{en:'AI ad creative generation, A/B optimized',zh:'AI广告创意生成,A/B测试优化'},cat:'marketing',icon:'📢'},
{name:'纷享销客',url:'https://www.fxiaoke.com/',desc:{en:'Chinese CRM leader, AI sales assistant',zh:'国产CRM领导者,AI销售助手,连接型CRM'},cat:'marketing',icon:'🦊'},
{name:'销售易',url:'https://www.xiaoshouyi.com/',desc:{en:'Neocrm, AI-powered Chinese sales CRM',zh:'国产CRM,AI销售自动化,客户全生命周期'},cat:'marketing',icon:'📊'},
{name:'Convertlab',url:'https://www.convertlab.com/',desc:{en:'Chinese CDP + marketing automation platform',zh:'国产CDP+营销自动化,AI营销云'},cat:'marketing',icon:'🔄'},
{name:'Eightfold AI',url:'https://eightfold.ai/',desc:{en:'Talent intelligence, skill matching, retention',zh:'人才智能平台:AI匹配/技能分析/留存预测'},cat:'hr',icon:'♾️'},
{name:'Paradox AI',url:'https://www.paradox.ai/',desc:{en:'AI recruiter Olivia: screen, schedule, onboard',zh:'AI招聘助手Olivia:筛选/排面试/入职'},cat:'hr',icon:'👩‍💼'},
{name:'Metaview',url:'https://www.metaview.ai/',desc:{en:'AI interview notes, auto-summarize moments',zh:'AI面试记录,自动总结关键时刻'},cat:'hr',icon:'📝'},
{name:'HireVue',url:'https://www.hirevue.com/',desc:{en:'AI video interview analysis, soft skills scoring',zh:'AI视频面试分析,软技能评分'},cat:'hr',icon:'🎥'},
{name:'Textio',url:'https://textio.com/',desc:{en:'AI-augmented writing for job descriptions',zh:'AI增强写作:优化招聘JD和绩效评估'},cat:'hr',icon:'📄'},
{name:'北森',url:'https://www.beisen.com/',desc:{en:'Chinese HR SaaS leader, AI talent management',zh:'国产HR SaaS领导者,一体化人才管理云'},cat:'hr',icon:'🧑‍💼'},
{name:'Moka',url:'https://www.mokahr.com/',desc:{en:'Chinese ATS + smart recruitment platform',zh:'国产智能招聘系统,简历解析+AI筛选'},cat:'hr',icon:'📋'},
{name:'薪人薪事',url:'https://www.xinrenxinshi.com/',desc:{en:'AI-powered Chinese HRM, payroll & attendance',zh:'AI人力资源管理系统,薪酬/考勤/绩效一体化'},cat:'hr',icon:'💰'},
{name:'Harvey AI',url:'https://www.harvey.ai/',desc:{en:'AI for law firms: contract, due diligence, research',zh:'律所AI:合同分析/尽职调查/法律研究'},cat:'legal',icon:'⚖️'},
{name:'Ironclad',url:'https://ironcladapp.com/',desc:{en:'AI contract lifecycle: draft→review→negotiate',zh:'AI合同全生命周期:起草→审核→谈判'},cat:'legal',icon:'🛡️'},
{name:'EvenUp',url:'https://www.evenuplaw.com/',desc:{en:'AI demand letters + settlement estimation',zh:'AI生成索赔函+和解金额估算'},cat:'legal',icon:'📨'},
{name:'Casetext',url:'https://casetext.com/',desc:{en:'AI legal research, CoCounsel assistant',zh:'AI法律研究,CoCounsel智能助手'},cat:'legal',icon:'📚'},
{name:'Spellbook',url:'https://www.spellbook.legal/',desc:{en:'AI contract drafting in Word, GPT-4 powered',zh:'AI合同起草,Word插件,GPT-4驱动'},cat:'legal',icon:'📖'},
{name:'DoNotPay',url:'https://donotpay.com/',desc:{en:'AI consumer rights, dispute resolution',zh:'AI消费者权益,自动争议解决'},cat:'legal',icon:'🚫'},
{name:'法大大',url:'https://www.fadada.com/',desc:{en:'Chinese e-signature + AI contract review',zh:'国产电子签章领导者,AI合同智能审查'},cat:'legal',icon:'✍️'},
{name:'幂律智能',url:'https://www.powerlawai.com/',desc:{en:'AI contract review, due diligence for China legal',zh:'AI合同审查,尽职调查,法律知识图谱'},cat:'legal',icon:'🧠'},
{name:'智合',url:'https://www.zhihe.com/',desc:{en:'Chinese legal tech platform, AI case search',zh:'法律科技平台,AI案例检索与分析'},cat:'legal',icon:'⚡'},
]
export default function EnterpriseOverview({ scrollTo }:{ scrollTo?: string }){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>🏢 {L('Enterprise Tools','企业应用','企業應用')}</h2><p className={styles.subtitle}>{L('28 enterprise tools — Marketing, HR, Legal','28款企业工具——营销、HR、法律','28款企業工具——行銷、HR、法律')}</p></div>
<LinkNav links={links} lang={lang as'en'|'zh-CN'|'zh-TW'} color="#64748b" scrollTo={scrollTo} catNames={{marketing:L('Marketing & Sales','营销销售','行銷銷售'),hr:L('HR & Recruitment','人力资源','人力資源'),legal:L('Legal & Compliance','法律合规','法律合規')}}/></div>)}
