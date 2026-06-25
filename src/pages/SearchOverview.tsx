import { useT } from '../contexts/LanguageContext';import LinkNav,{type ToolLink}from'../components/LinkNav';import styles from'./Page.module.css'
const links:ToolLink[]=[
{n:'Perplexity AI',u:'https://www.perplexity.ai/',d:{en:'AI answer engine with real-time citations',zh:'AI搜索引擎,实时引用来源,答案可追溯'},c:'search',i:'🔍'},
{n:'Google Gemini DS',u:'https://gemini.google.com/',d:{en:'Google AI with Deep Research mode',zh:'谷歌AI深度研究模式,自动调研多步骤问题'},c:'search',i:'🔵'},
{n:'Microsoft Copilot',u:'https://copilot.microsoft.com/',d:{en:'Bing AI, GPT-4 Turbo, free',zh:'微软Bing AI,基于GPT-4 Turbo,免费使用'},c:'search',i:'🟦'},
{n:'Phind',u:'https://www.phind.com/',d:{en:'Developer-focused AI search engine',zh:'面向开发者的AI搜索,理解代码上下文'},c:'search',i:'🟠'},
{n:'You.com',u:'https://you.com/',d:{en:'Privacy-first AI search with apps',zh:'注重隐私的AI搜索,集成多种应用'},c:'search',i:'💜'},
{n:'Kagi',u:'https://kagi.com/',d:{en:'Ad-free paid search, AI summaries',zh:'无广告付费搜索,AI智能摘要'},c:'search',i:'🟡'},
{n:'Brave Search',u:'https://search.brave.com/',d:{en:'Privacy search + AI summarizer',zh:'隐私优先搜索+AI摘要,不追踪用户'},c:'search',i:'🦁'},
{n:'Exa',u:'https://exa.ai/',d:{en:'AI search API, semantic search',zh:'AI搜索API,语义级搜索,适合开发者集成'},c:'search',i:'📡'},
{n:'秘塔AI',u:'https://metaso.cn/',d:{en:'Chinese AI search, multi-step reasoning',zh:'国产AI搜索,深度多步推理,学术级研究'},c:'search',i:'🗼'},
{n:'天工AI',u:'https://www.tiangong.cn/',d:{en:'AI search, multimodal',zh:'昆仑万维出品,多模态AI搜索'},c:'search',i:'☁️'},
{n:'Consensus',u:'https://consensus.app/',d:{en:'AI search over 200M+ research papers',zh:'AI搜索2亿+学术论文,提取研究结论'},c:'research',i:'📜'},
{n:'Elicit',u:'https://elicit.com/',d:{en:'AI research assistant, find & extract data',zh:'AI研究助手,查找论文并自动提取数据'},c:'research',i:'📊'},
{n:'Semantic Scholar',u:'https://www.semanticscholar.org/',d:{en:'Free AI scientific literature search',zh:'免费AI学术文献搜索,覆盖各学科'},c:'research',i:'🎓'},
{n:'Scite.ai',u:'https://scite.ai/',d:{en:'Smart citations: see if papers support/contradict',zh:'智能引用分析,看论文是支持还是反驳某观点'},c:'research',i:'✅'},
{n:'Research Rabbit',u:'https://www.researchrabbit.ai/',d:{en:'Citation-based literature mapping',zh:'基于引用的文献图谱,发现相关研究'},c:'research',i:'🐰'},
{n:'Connected Papers',u:'https://www.connectedpapers.com/',d:{en:'Visual graph of related academic papers',zh:'学术论文关联可视化图谱'},c:'research',i:'🕸️'},
{n:'Explainpaper',u:'https://www.explainpaper.com/',d:{en:'Upload PDF → AI explains confusing parts',zh:'上传论文PDF,AI解释难懂段落'},c:'research',i:'📝'},
{n:'Scholarcy',u:'https://www.scholarcy.com/',d:{en:'Auto-summarize papers into flashcards',zh:'自动将论文总结为知识卡片'},c:'research',i:'📋'},
{n:'Feedly AI',u:'https://feedly.com/ai/',d:{en:'AI-curated news, track topics & trends',zh:'AI策展新闻流,追踪话题和趋势'},c:'discovery',i:'📰'},
{n:'Glasp',u:'https://glasp.co/',d:{en:'Social highlighting + AI summary',zh:'社交化网页高亮+AI摘要,知识共享'},c:'discovery',i:'💡'},
{n:'Raindrop.io',u:'https://raindrop.io/',d:{en:'Smart bookmark manager with AI tagging',zh:'智能书签管理,AI自动打标签分类'},c:'discovery',i:'💧'},
{n:'Mem.ai',u:'https://mem.ai/',d:{en:'AI-organized notes, auto-collection',zh:'AI自动整理笔记,智能关联和检索'},c:'discovery',i:'🧠'},
{n:'Pocket',u:'https://getpocket.com/',d:{en:'Save articles, AI-recommended reads',zh:'稍后阅读,AI推荐你可能感兴趣的文章'},c:'discovery',i:'📌'},
{n:'Inoreader',u:'https://www.inoreader.com/',d:{en:'AI RSS reader, monitor keywords',zh:'AI增强RSS阅读器,关键词监控'},c:'discovery',i:'📡'},
]
export default function SearchOverview(){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>🔍 {L('AI Search & Discovery','AI 搜索发现','AI 搜索發現')}</h2><p className={styles.subtitle}>{L('24 AI-powered search, research & discovery tools','24款AI搜索、研究和发现工具','24款AI搜尋、研究和發現工具')}</p></div>
<LinkNav links={links} lang={lang as'en'|'zh-CN'|'zh-TW'} color="#0ea5e9" catNames={{search:L('AI Search Engines','AI 搜索引擎','AI 搜尋引擎'),research:L('AI Research Tools','AI 研究工具','AI 研究工具'),discovery:L('Content Discovery','内容发现','內容發現')}}/></div>)}
