import { useT } from '../contexts/LanguageContext';import styles from './Page.module.css'
export default function ChatOverview(){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
const links=[
{name:'ChatGPT',url:'https://chat.openai.com/',dEn:'Most popular LLM chatbot, GPT-4.1, plugins, GPTs',dZh:'最流行的LLM聊天机器人，GPT-4.1，插件和GPTs生态',cat:'llm'},
{name:'Claude',url:'https://claude.ai/',dEn:'Anthropic, 200K context, best for long docs & deep thinking',dZh:'Anthropic出品，200K上下文，长文档和深度思考最佳',cat:'llm'},
{name:'Gemini',url:'https://gemini.google.com/',dEn:'Google AI, integrated with Google apps, 1M context',dZh:'Google AI，集成Google全家桶，100万token上下文',cat:'llm'},
{name:'DeepSeek Chat',url:'https://chat.deepseek.com/',dEn:'Strong open-source LLM, very affordable, 1M context',dZh:'国产最强开源LLM，极高性价比，100万token上下文',cat:'llm'},
{name:'Kimi',url:'https://kimi.moonshot.cn/',dEn:'Moonshot AI, best Chinese long-text understanding',dZh:'月之暗面，中文长文本理解最佳，200万字上下文',cat:'llm'},
{name:'通义千问',url:'https://tongyi.aliyun.com/',dEn:'Alibaba AI, strong Chinese, multimodal',dZh:'阿里AI，中文能力强，多模态支持',cat:'llm'},
{name:'文心一言',url:'https://yiyan.baidu.com/',dEn:'Baidu AI, Ernie Bot, deep Chinese knowledge',dZh:'百度AI，文心大模型，深厚的中文知识库',cat:'llm'},
{name:'豆包',url:'https://www.doubao.com/',dEn:'ByteDance AI chatbot, fast and free',dZh:'字节跳动AI助手，速度快，免费',cat:'llm'},
{name:'Character.AI',url:'https://character.ai/',dEn:'Create and chat with AI characters/celebrities',dZh:'创建和与AI角色/名人对话',cat:'role'},
{name:'Replika',url:'https://replika.ai/',dEn:'AI companion for emotional support & conversation',dZh:'AI伴侣，情感支持和对话',cat:'role'},
{name:'Poe',url:'https://poe.com/',dEn:'Quora, access multiple LLMs in one app, create bots',dZh:'Quora出品，一个App访问多个LLM，可创建Bot',cat:'llm'},
{name:'OpenRouter',url:'https://openrouter.ai/',dEn:'Unified API for 200+ models, compare prices & quality',dZh:'200+模型统一API，对比价格和质量',cat:'compare'},
{name:'LMSYS Chatbot Arena',url:'https://chat.lmsys.org/',dEn:'Blind test LLMs, see Elo rankings',dZh:'盲测LLM，看Elo排行榜',cat:'compare'},
{name:'HuggingChat',url:'https://huggingface.co/chat/',dEn:'Free open-source chat, HuggingFace community',dZh:'免费开源聊天，HuggingFace社区',cat:'llm'},
]
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>💬 {L('AI Chat & Assistants','AI 对话助手','AI 對話助手')}</h2><p className={styles.subtitle}>{L('LLM platforms, chatbots, and conversational AI tools','大模型平台、聊天机器人、对话AI工具','大模型平台、聊天機器人、對話AI工具')}</p></div>
<div className={styles.summary}>{L('The AI chatbot landscape is exploding. From general-purpose LLMs to specialized role-playing bots, there\'s an AI for every conversation. This directory helps you find and compare the best options.','AI聊天机器人正在爆发式增长。从通用大模型到专业角色扮演机器人，每种对话场景都有对应的AI。这个目录帮你发现和对比最佳选择。','AI聊天機器人正在爆發式增長。從通用大模型到專業角色扮演機器人，每種對話場景都有對應的AI。這個目錄幫你發現和對比最佳選擇。')}</div>
<Dir links={links} lang={lang} catNames={{llm:L('Large Language Models','大模型平台','大模型平台'),role:L('Character & Role-Play AI','角色扮演AI','角色扮演AI'),compare:L('Model Comparison','模型对比','模型對比')}} />
</div>)}
function Dir({links,lang,catNames}:{links:{name:string;url:string;dEn:string;dZh:string;cat:string}[],lang:string,catNames:Record<string,string>}){const cats=[...new Set(links.map(l=>l.cat))]
return <div>{cats.map(cat=>(<div key={cat} style={{marginBottom:20}}><h3 style={{fontSize:15,fontWeight:700,color:'var(--text)',marginBottom:10}}>{catNames[cat]||cat}</h3><div style={{display:'flex',flexDirection:'column',gap:8}}>{links.filter(l=>l.cat===cat).map(l=>(<a key={l.name} href={l.url} target="_blank" rel="noopener" style={{display:'flex',alignItems:'center',gap:12,padding:'12px 16px',background:'var(--bg-card)',borderRadius:10,textDecoration:'none',border:'1px solid var(--border)',transition:'all .15s'}}><span style={{fontWeight:600,color:'var(--primary)',fontSize:14,minWidth:120}}>{l.name}</span><span style={{color:'var(--text-secondary)',fontSize:13,flex:1}}>{lang==='zh-CN'?l.dZh:l.dEn}</span><span style={{color:'var(--text-muted)',fontSize:16}}>↗</span></a>))}</div></div>))}</div>}
