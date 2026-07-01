import { useT } from '../contexts/LanguageContext';import styles from './Page.module.css'
export default function AgentAssistants(){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>💬 {L('Personal AI Assistants','个人 AI 助手','個人 AI 助手')}</h2><p className={styles.subtitle}>{L('Build your own AI assistant for daily tasks','搭建你自己的 AI 助手处理日常事务','搭建你自己的 AI 助手處理日常事務')}</p></div><div className={styles.cases}>
<C t={L('🛠 Platforms','🛠 平台','🛠 平台')}><T h={['Platform','Key Feature']} r={[
['ChatGPT GPTs',L('No-code custom GPT, upload knowledge files, share or sell','零代码定制GPT,上传知识文件,可分享/出售','零程式碼定製GPT,上傳知識檔案,可分享/出售')],
['Claude Projects',L('Custom instructions + knowledge base, team sharing, 200K context','自定义指令+知识库, 团队共享, 200K上下文','自定義指令+知識庫, 團隊共享, 200K上下文')],
['Gemini Gems',L('Google ecosystem, personalized AI with custom instructions','Google生态,个性化AI,自定义指令','Google生態,個性化AI,自定義指令')],
['Coze/Dify',L('Build complex bots with plugins, workflows, knowledge bases','插件+工作流+知识库,构建复杂Bot','插件+工作流+知識庫,構建複雜Bot')],
['Replit Agent',L('AI builds full-stack apps from natural language descriptions','自然语言描述→AI构建全栈应用','自然語言描述→AI構建全棧應用')],
]} /></C>
<C t={L('💡 Example Setups','💡 示例配置','💡 示例配置')}><Code>{`# 个人研究助手 (ChatGPT GPTs / Claude Project)
Instructions:
"你是我个人的研究助手。当我想了解一个新领域时:
1. 先给我一个200字的概述
2. 列出该领域最重要的5个概念,每个解释不超过3句话
3. 推荐3-5篇必读文章/论文(带链接)
4. 列出3个我需要思考的关键问题
5. 建议一个30天的学习计划"
Knowledge files: 上传你已有的相关领域笔记作为参考
# 个人日程管家 (Coze Bot → 飞书/钉钉)
功能:
- 每天早上8点推送: 今日日程 + 天气 + 通勤时间
- 语音输入: "帮我安排明天下午2点和张三开会"
- 自动检测时间冲突并建议替代时间
- 每周日晚生成"本周时间分配报告"`}</Code></C>
</div></div>)}
function C({t,children}:{t:string;children:React.ReactNode}){return <div style={{background:'var(--bg-card)',borderRadius:12,padding:22,boxShadow:'var(--shadow)',marginBottom:16}}><h3 style={{marginBottom:12,color:'var(--text)',fontSize:16}}>{t}</h3>{children}</div>}
function T({h,r}:{h:string[];r:string[][]}){return <table style={{width:'100%',borderCollapse:'collapse',fontSize:13}}><thead><tr>{h.map(x=><th key={x} style={{padding:'8px 12px',textAlign:'left',borderBottom:'2px solid var(--border)',color:'var(--text)',fontWeight:600}}>{x}</th>)}</tr></thead><tbody>{r.map((rr,i)=><tr key={i}>{rr.map((c,j)=><td key={j} style={{padding:'8px 12px',borderBottom:'1px solid var(--border)',color:'var(--text-secondary)'}}>{c}</td>)}</tr>)}</tbody></table>}
function Code({children}:{children:string}){return <pre style={{background:'#0f172a',color:'#e2e8f0',borderRadius:8,padding:16,fontSize:13,lineHeight:1.6,overflowX:'auto',whiteSpace:'pre-wrap',wordBreak:'break-word',margin:0}}><code>{children}</code></pre>}
