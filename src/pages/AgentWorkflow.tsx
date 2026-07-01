import { useT } from '../contexts/LanguageContext';import styles from './Page.module.css'
export default function AgentWorkflow(){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>⚡ {L('Workflow Automation','工作流自动化','工作流自動化')}</h2><p className={styles.subtitle}>{L('Connect AI with thousands of apps to automate workflows','连接 AI 和数千应用, 自动化你的工作流','連接 AI 和數千應用, 自動化你的工作流')}</p></div><div className={styles.cases}>
<C t={L('🛠 Automation Platforms','🛠 自动化平台','🛠 自動化平台')}><T h={['Platform','Apps Connected','Best For']} r={[
['n8n','400+',L('Self-hosted, open source, AI nodes, code-capable. Best for developers','自托管、开源、AI节点、可写代码。适合开发者','自託管、開源、AI節點、可寫程式碼。適合開發者')],
['Make','2000+',L('Visual scenario builder, complex branching logic. Best for power users','可视化场景构建、复杂分支逻辑。适合高级用户','可視化場景構建、複雜分支邏輯。適合高級用戶')],
['Zapier','7000+',L('Easiest to start, largest app library. Best for quick automations','最易上手、最大应用库。适合快速自动化','最易上手、最大應用庫。適合快速自動化')],
['Dify','AI-native',L('LLM workflow builder, RAG pipeline, agent mode, one-click API','LLM工作流构建器,RAG管道,Agent模式,一键API','LLM工作流構建器,RAG管道,Agent模式,一鍵API')],
]} /></C>
<C t={L('💡 Automation Ideas','💡 自动化创意','💡 自動化創意')}><Code>{`# 1. 自动日报生成
触发: 每天18:00
→ AI总结当日Slack/飞书消息
→ 提取各项目进度 + 关键决策
→ 生成Markdown日报 → 发送到指定频道
# 2. 智能客户支持分流
触发: 收到新客服邮件
→ AI分析邮件内容和紧急程度
→ 低优先级: 自动回复FAQ链接
→ 中优先级: 分配给对应客服 + 生成回复草稿
→ 高优先级: 立即通知负责人 + 标记urgent
# 3. 内容发布工作流
触发: 上传新文章到Google Docs
→ AI提取标题、摘要、关键词
→ 自动生成社交媒体文案(微博/Twitter/LinkedIn各一版)
→ 自动配图(从文章内容提取关键词→AI生成配图)
→ 定时发布到各平台`}</Code></C>
</div></div>)}
function C({t,children}:{t:string;children:React.ReactNode}){return <div style={{background:'var(--bg-card)',borderRadius:12,padding:22,boxShadow:'var(--shadow)',marginBottom:16}}><h3 style={{marginBottom:12,color:'var(--text)',fontSize:16}}>{t}</h3>{children}</div>}
function T({h,r}:{h:string[];r:string[][]}){return <table style={{width:'100%',borderCollapse:'collapse',fontSize:13}}><thead><tr>{h.map(x=><th key={x} style={{padding:'8px 12px',textAlign:'left',borderBottom:'2px solid var(--border)',color:'var(--text)',fontWeight:600}}>{x}</th>)}</tr></thead><tbody>{r.map((rr,i)=><tr key={i}>{rr.map((c,j)=><td key={j} style={{padding:'8px 12px',borderBottom:'1px solid var(--border)',color:'var(--text-secondary)'}}>{c}</td>)}</tr>)}</tbody></table>}
function Code({children}:{children:string}){return <pre style={{background:'#0f172a',color:'#e2e8f0',borderRadius:8,padding:16,fontSize:13,lineHeight:1.6,overflowX:'auto',whiteSpace:'pre-wrap',wordBreak:'break-word',margin:0}}><code>{children}</code></pre>}
