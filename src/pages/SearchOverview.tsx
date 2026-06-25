import { useT } from '../contexts/LanguageContext';import styles from './Page.module.css'
export default function SearchOverview(){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
const links:{name:string;url:string;descEn:string;descZh:string;cat:string}[]=[
{name:'Perplexity AI',url:'https://www.perplexity.ai/',descEn:'AI-powered answer engine with real-time citations',descZh:'AI搜索引擎，带实时来源引用',cat:'search'},
{name:'Phind',url:'https://www.phind.com/',descEn:'AI search engine for developers, code-aware answers',descZh:'面向开发者的AI搜索，理解代码上下文',cat:'search'},
{name:'You.com',url:'https://you.com/',descEn:'Privacy-focused AI search with app integrations',descZh:'注重隐私的AI搜索，集成多种应用',cat:'search'},
{name:'Kagi',url:'https://kagi.com/',descEn:'Ad-free, paid search engine with AI summaries',descZh:'无广告付费搜索引擎，AI摘要',cat:'search'},
{name:'Consensus',url:'https://consensus.app/',descEn:'AI search over 200M+ academic papers',descZh:'AI搜索2亿+学术论文，提取结论',cat:'research'},
{name:'Elicit',url:'https://elicit.com/',descEn:'AI research assistant, find papers and extract data',descZh:'AI研究助手，查找论文并提取数据',cat:'research'},
{name:'Semantic Scholar',url:'https://www.semanticscholar.org/',descEn:'Free AI-powered scientific literature search',descZh:'免费AI科学文献搜索',cat:'research'},
{name:'Explainpaper',url:'https://www.explainpaper.com/',descEn:'Upload a paper, AI explains confusing passages',descZh:'上传论文，AI解释难懂段落',cat:'research'},
{name:'Feedly AI',url:'https://feedly.com/ai/',descEn:'AI-curated news feed, track topics and trends',descZh:'AI策展新闻流，追踪话题和趋势',cat:'discovery'},
{name:'Artifact',url:'https://artifact.news/',descEn:'AI-powered news app (from Instagram co-founders)',descZh:'AI驱动的新闻App',cat:'discovery'},
{name:'Glasp',url:'https://glasp.co/',descEn:'Social web highlighter with AI summaries',descZh:'社交网页高亮+AI摘要',cat:'discovery'},
{name:'TweetDeck AI alternatives',url:'https://x.com/',descEn:'X (Twitter) with Grok AI for real-time trend discovery',descZh:'X(Twitter)+Grok AI 实时趋势发现',cat:'discovery'},
]
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>🔍 {L('AI Search & Discovery','AI 搜索发现','AI 搜索發現')}</h2><p className={styles.subtitle}>{L('AI-powered search, research, and discovery tools','AI驱动的搜索、研究和发现工具','AI驅動的搜尋、研究和發現工具')}</p></div>
<div className={styles.summary}>{L('AI is fundamentally changing how we find information. Instead of returning 10 blue links, AI search engines understand your intent, synthesize answers from multiple sources, and cite their references. These tools will save you hours of manual searching and reading.','AI正在从根本上改变我们找信息的方式。AI搜索引擎不再返回10条蓝色链接，而是理解你的意图、综合多个来源、给出带引用的答案。这些工具能帮你省下大量的手动搜索和阅读时间。','AI正在從根本上改變我們找資訊的方式。AI搜尋引擎不再返回10條藍色連結，而是理解你的意圖、綜合多個來源、給出帶引用的答案。這些工具能幫你省下大量的手動搜尋和閱讀時間。')}</div>
<Dir links={links} lang={lang} />
</div>)}
function Dir({links,lang}:{links:{name:string;url:string;descEn:string;descZh:string;cat:string}[],lang:string}){const cats=[...new Set(links.map(l=>l.cat))];const catNames:Record<string,string>={search:lang==='zh-CN'?'🔍 AI 搜索引擎':lang==='zh-TW'?'🔍 AI 搜尋引擎':'🔍 AI Search Engines',research:lang==='zh-CN'?'📑 AI 研究工具':lang==='zh-TW'?'📑 AI 研究工具':'📑 AI Research Tools',discovery:lang==='zh-CN'?'🛎️ 内容发现':lang==='zh-TW'?'🛎️ 內容發現':'🛎️ Content Discovery'}
return <div>{cats.map(cat=>(<div key={cat} style={{marginBottom:20}}><h3 style={{fontSize:15,fontWeight:700,color:'var(--text)',marginBottom:10}}>{catNames[cat]||cat}</h3><div style={{display:'flex',flexDirection:'column',gap:8}}>{links.filter(l=>l.cat===cat).map(l=>(<a key={l.name} href={l.url} target="_blank" rel="noopener" style={{display:'flex',alignItems:'center',gap:12,padding:'12px 16px',background:'var(--bg-card)',borderRadius:10,textDecoration:'none',border:'1px solid var(--border)',transition:'all .15s'}}><span style={{fontWeight:600,color:'var(--primary)',fontSize:14,minWidth:120}}>{l.name}</span><span style={{color:'var(--text-secondary)',fontSize:13,flex:1}}>{lang==='zh-CN'?l.descZh:l.descEn}</span><span style={{color:'var(--text-muted)',fontSize:16}}>↗</span></a>))}</div></div>))}</div>}
