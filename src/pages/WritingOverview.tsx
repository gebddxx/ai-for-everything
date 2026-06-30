import { useT } from '../contexts/LanguageContext';import LinkNav,{type ToolLink}from'../components/LinkNav';import styles from'./Page.module.css'
const links:ToolLink[]=[
{name:'ChatGPT',url:'https://chat.openai.com/',desc:{en:'Best general writer, GPT-4.1, long-form thinking',zh:'全能写作助手,GPT-4.1驱动,长篇深度写作'},cat:'写作',icon:'⚫'},
{name:'Claude',url:'https://claude.ai/',desc:{en:'Best for deep writing, 200K context, nuanced editing',zh:'深度写作首选,200K上下文,精细润色'},cat:'写作',icon:'🟠'},
{name:'Jasper AI',url:'https://www.jasper.ai/',desc:{en:'Marketing copy, brand voice, SEO optimization',zh:'营销文案专家,品牌语调统一,SEO优化'},cat:'写作',icon:'✨'},
{name:'Notion AI',url:'https://www.notion.so/',desc:{en:'Workspace-integrated AI, one-click write',zh:'工作区内置AI,一键写作,无缝集成'},cat:'写作',icon:'📝'},
{name:'Copy.ai',url:'https://www.copy.ai/',desc:{en:'90+ templates, social media & ads',zh:'90+模板,社媒广告文案一键生成'},cat:'写作',icon:'📋'},
{name:'Writesonic',url:'https://writesonic.com/',desc:{en:'SEO articles, product descriptions, landing pages',zh:'SEO长文,产品描述,落地页批量生成'},cat:'写作',icon:'✍️'},
{name:'Grammarly',url:'https://www.grammarly.com/',desc:{en:'Grammar, tone, clarity, plagiarism check',zh:'语法纠错,语调调整,清晰度建议,查重'},cat:'写作',icon:'✅'},
{name:'DeepL Write',url:'https://www.deepl.com/write',desc:{en:'Multilingual style & phrasing polish',zh:'多语种写作润色,表达更地道'},cat:'写作',icon:'🌍'},
{name:'火山写作',url:'https://www.huoshan.com/',desc:{en:'ByteDance AI writing, Chinese content optimization',zh:'字节跳动AI写作,中文内容优化'},cat:'写作',icon:'🌋'},
{name:'秘塔写作猫',url:'https://xiezuocat.com/',desc:{en:'Chinese AI writing, grammar check, style polish',zh:'AI写作助手,中文纠错/润色/改写/续写'},cat:'写作',icon:'🐱'},
{name:'文心写作',url:'https://yiyan.baidu.com/',desc:{en:'Baidu AI writing, deep Chinese language mastery',zh:'百度AI写作,深厚中文语言功力'},cat:'写作',icon:'💎'},
{name:'Effidit',url:'https://effidit.qq.com/',desc:{en:'Tencent AI writing assistant, smart compose',zh:'腾讯AI写作助手,智能补全和纠错'},cat:'写作',icon:'💬'},
{name:'深言达意',url:'https://www.shenyandayi.com/',desc:{en:'Find the perfect word/phrase, academic rewriting',zh:'找词找句,学术改写,精准表达'},cat:'写作',icon:'🔤'},
{name:'笔灵AI',url:'https://www.bilingai.com/',desc:{en:'One-click work plans, proposals, reports',zh:'一键生成工作计划、文案方案、报告'},cat:'写作',icon:'✒️'},
{name:'彩云小梦',url:'https://caiyunai.com/',desc:{en:'AI novel continuation, multi-style, drama scripts',zh:'AI续写小说/剧本,多风格支持'},cat:'写作',icon:'🌈'},
{name:'光速写作',url:'https://www.guangsu.com/',desc:{en:'Zuoyebang AI, full-text gen + PPT creation',zh:'作业帮旗下,全文生成+PPT制作'},cat:'写作',icon:'⚡'},
{name:'讯飞写作',url:'https://writing.xfyun.cn/',desc:{en:'iFlytek AI writing, templates + dialogue writing',zh:'科大讯飞AI写作,模板写作+素材推荐'},cat:'写作',icon:'📝'},
]
export default function WritingOverview(){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>✍️ {L('Writing','写作工具','寫作工具')}</h2><p className={styles.subtitle}>{L('17 AI writing, editing and content creation tools','17款AI写作、润色和内容创作工具','17款AI寫作、潤色和內容創作工具')}</p></div>
<LinkNav links={links} lang={lang as'en'|'zh-CN'|'zh-TW'} color="#ec4899" /></div>)}
