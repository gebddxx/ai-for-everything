import { useT } from '../contexts/LanguageContext';import LinkNav,{type ToolLink}from'../components/LinkNav';import styles from'./Page.module.css'
const links:ToolLink[]=[
{n:'HubSpot AI',u:'https://www.hubspot.com/',d:{en:'AI CRM: content, lead scoring, chatbots',zh:'AI CRM:智能内容/线索评分/聊天机器人'},c:'marketing',i:'🧡'},
{n:'Salesforce Einstein',u:'https://www.salesforce.com/ai/',d:{en:'AI across Sales/Service/Marketing cloud',zh:'Salesforce AI全家桶,覆盖销售/服务/营销'},c:'marketing',i:'☁️'},
{n:'Jasper AI',u:'https://www.jasper.ai/',d:{en:'Enterprise content, brand voice, team collab',zh:'企业级内容创作,品牌语调统一,团队协作'},c:'marketing',i:'✨'},
{n:'Clay',u:'https://www.clay.com/',d:{en:'AI sales prospecting + data enrichment',zh:'AI销售线索挖掘+数据充实'},c:'marketing',i:'🧱'},
{n:'Copy.ai',u:'https://www.copy.ai/',d:{en:'GTM automation, AI workflows for sales',zh:'GTM自动化,AI销售工作流'},c:'marketing',i:'📋'},
{n:'Writesonic',u:'https://writesonic.com/',d:{en:'AI content for marketing, SEO, social media',zh:'AI营销内容:SEO文章/社媒/落地页'},c:'marketing',i:'✍️'},
{n:'AdCreative.ai',u:'https://www.adcreative.ai/',d:{en:'AI ad creative generation, A/B optimized',zh:'AI广告创意生成,A/B测试优化'},c:'marketing',i:'📢'},
{n:'Eightfold AI',u:'https://eightfold.ai/',d:{en:'Talent intelligence, skill matching, retention',zh:'人才智能平台:AI匹配/技能分析/留存预测'},c:'hr',i:'♾️'},
{n:'Paradox AI',u:'https://www.paradox.ai/',d:{en:'AI recruiter Olivia: screen, schedule, onboard',zh:'AI招聘助手Olivia:筛选/排面试/入职'},c:'hr',i:'👩‍💼'},
{n:'Metaview',u:'https://www.metaview.ai/',d:{en:'AI interview notes, auto-summarize moments',zh:'AI面试记录,自动总结关键时刻'},c:'hr',i:'📝'},
{n:'HireVue',u:'https://www.hirevue.com/',d:{en:'AI video interview analysis, soft skills scoring',zh:'AI视频面试分析,软技能评分'},c:'hr',i:'🎥'},
{n:'Textio',u:'https://textio.com/',d:{en:'AI-augmented writing for job descriptions',zh:'AI增强写作:优化招聘JD和绩效评估'},c:'hr',i:'📄'},
{n:'Harvey AI',u:'https://www.harvey.ai/',d:{en:'AI for law firms: contract, due diligence, research',zh:'律所AI:合同分析/尽职调查/法律研究'},c:'legal',i:'⚖️'},
{n:'Ironclad',u:'https://ironcladapp.com/',d:{en:'AI contract lifecycle: draft→review→negotiate',zh:'AI合同全生命周期:起草→审核→谈判'},c:'legal',i:'🛡️'},
{n:'EvenUp',u:'https://www.evenuplaw.com/',d:{en:'AI demand letters + settlement estimation',zh:'AI生成索赔函+和解金额估算'},c:'legal',i:'📨'},
{n:'Casetext',u:'https://casetext.com/',d:{en:'AI legal research, CoCounsel assistant',zh:'AI法律研究,CoCounsel智能助手'},c:'legal',i:'📚'},
{n:'Spellbook',u:'https://www.spellbook.legal/',d:{en:'AI contract drafting in Word, GPT-4 powered',zh:'AI合同起草,Word插件,GPT-4驱动'},c:'legal',i:'📖'},
{n:'DoNotPay',u:'https://donotpay.com/',d:{en:'AI consumer rights, dispute resolution',zh:'AI消费者权益,自动争议解决'},c:'legal',i:'🚫'},
]
export default function EnterpriseOverview(){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>🏢 {L('AI for Enterprise','AI 企业应用','AI 企業應用')}</h2><p className={styles.subtitle}>{L('18 enterprise tools — Marketing, HR, Legal','18款企业工具——营销、HR、法律','18款企業工具——行銷、HR、法律')}</p></div>
<LinkNav links={links} lang={lang as'en'|'zh-CN'|'zh-TW'} color="#64748b" catNames={{marketing:L('Marketing & Sales','营销销售','行銷銷售'),hr:L('HR & Recruitment','人力资源','人力資源'),legal:L('Legal & Compliance','法律合规','法律合規')}}/></div>)}
