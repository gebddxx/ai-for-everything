import { useT } from '../contexts/LanguageContext';import LinkNav,{type ToolLink}from'../components/LinkNav';import styles from'./Page.module.css'
const links:ToolLink[]=[
{name:'Perplexity AI',url:'https://www.perplexity.ai/',desc:{en:'AI answer engine with real-time citations',zh:'AI搜索引擎,实时引用来源,答案可追溯'},cat:'search',icon:'🔍'},
{name:'Google Gemini DS',url:'https://gemini.google.com/',desc:{en:'Google AI with Deep Research mode',zh:'谷歌AI深度研究模式,自动调研多步骤问题'},cat:'search',icon:'🔵'},
{name:'Microsoft Copilot',url:'https://copilot.microsoft.com/',desc:{en:'Bing AI, GPT-4 Turbo, free',zh:'微软Bing AI,基于GPT-4 Turbo,免费使用'},cat:'search',icon:'🟦'},
{name:'Phind',url:'https://www.phind.com/',desc:{en:'Developer-focused AI search engine',zh:'面向开发者的AI搜索,理解代码上下文'},cat:'search',icon:'🟠'},
{name:'You.com',url:'https://you.com/',desc:{en:'Privacy-first AI search with apps',zh:'注重隐私的AI搜索,集成多种应用'},cat:'search',icon:'💜'},
{name:'Kagi',url:'https://kagi.com/',desc:{en:'Ad-free paid search, AI summaries',zh:'无广告付费搜索,AI智能摘要'},cat:'search',icon:'🟡'},
{name:'Brave Search',url:'https://search.brave.com/',desc:{en:'Privacy search + AI summarizer',zh:'隐私优先搜索+AI摘要,不追踪用户'},cat:'search',icon:'🦁'},
{name:'Exa',url:'https://exa.ai/',desc:{en:'AI search API, semantic search',zh:'AI搜索API,语义级搜索,适合开发者集成'},cat:'search',icon:'📡'},
{name:'秘塔AI',url:'https://metaso.cn/',desc:{en:'Chinese AI search, multi-step reasoning',zh:'国产AI搜索,深度多步推理,学术级研究'},cat:'search',icon:'🗼'},
{name:'天工AI',url:'https://www.tiangong.cn/',desc:{en:'AI search, multimodal',zh:'昆仑万维出品,多模态AI搜索'},cat:'search',icon:'☁️'},
{name:'Consensus',url:'https://consensus.app/',desc:{en:'AI search over 200M+ research papers',zh:'AI搜索2亿+学术论文,提取研究结论'},cat:'research',icon:'📜'},
{name:'Elicit',url:'https://elicit.com/',desc:{en:'AI research assistant, find & extract data',zh:'AI研究助手,查找论文并自动提取数据'},cat:'research',icon:'📊'},
{name:'Semantic Scholar',url:'https://www.semanticscholar.org/',desc:{en:'Free AI scientific literature search',zh:'免费AI学术文献搜索,覆盖各学科'},cat:'research',icon:'🎓'},
{name:'Scite.ai',url:'https://scite.ai/',desc:{en:'Smart citations: see if papers support/contradict',zh:'智能引用分析,看论文是支持还是反驳某观点'},cat:'research',icon:'✅'},
{name:'Research Rabbit',url:'https://www.researchrabbit.ai/',desc:{en:'Citation-based literature mapping',zh:'基于引用的文献图谱,发现相关研究'},cat:'research',icon:'🐰'},
{name:'Connected Papers',url:'https://www.connectedpapers.com/',desc:{en:'Visual graph of related academic papers',zh:'学术论文关联可视化图谱'},cat:'research',icon:'🕸️'},
{name:'Explainpaper',url:'https://www.explainpaper.com/',desc:{en:'Upload PDF → AI explains confusing parts',zh:'上传论文PDF,AI解释难懂段落'},cat:'research',icon:'📝'},
{name:'Scholarcy',url:'https://www.scholarcy.com/',desc:{en:'Auto-summarize papers into flashcards',zh:'自动将论文总结为知识卡片'},cat:'research',icon:'📋'},
{name:'Feedly AI',url:'https://feedly.com/ai/',desc:{en:'AI-curated news, track topics & trends',zh:'AI策展新闻流,追踪话题和趋势'},cat:'discovery',icon:'📰'},
{name:'Glasp',url:'https://glasp.co/',desc:{en:'Social highlighting + AI summary',zh:'社交化网页高亮+AI摘要,知识共享'},cat:'discovery',icon:'💡'},
{name:'Raindrop.io',url:'https://raindrop.io/',desc:{en:'Smart bookmark manager with AI tagging',zh:'智能书签管理,AI自动打标签分类'},cat:'discovery',icon:'💧'},
{name:'Mem.ai',url:'https://mem.ai/',desc:{en:'AI-organized notes, auto-collection',zh:'AI自动整理笔记,智能关联和检索'},cat:'discovery',icon:'🧠'},
{name:'Pocket',url:'https://getpocket.com/',desc:{en:'Save articles, AI-recommended reads',zh:'稍后阅读,AI推荐你可能感兴趣的文章'},cat:'discovery',icon:'📌'},
{name:'Inoreader',url:'https://www.inoreader.com/',desc:{en:'AI RSS reader, monitor keywords',zh:'AI增强RSS阅读器,关键词监控'},cat:'discovery',icon:'📡'},
]
export default function SearchOverview(){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>🔍 {L('AI Search & Discovery','AI 搜索发现','AI 搜索發現')}</h2><p className={styles.subtitle}>{L('24 AI-powered search, research & discovery tools','24款AI搜索、研究和发现工具','24款AI搜尋、研究和發現工具')}</p></div>
<LinkNav links={links} lang={lang as'en'|'zh-CN'|'zh-TW'} color="#0ea5e9" catNames={{search:L('AI Search Engines','AI 搜索引擎','AI 搜尋引擎'),research:L('AI Research Tools','AI 研究工具','AI 研究工具'),discovery:L('Content Discovery','内容发现','內容發現')}}/></div>)}
