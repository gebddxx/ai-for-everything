import { useT } from '../contexts/LanguageContext';import styles from './Page.module.css'
export default function AgentFrameworks(){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>🧰 {L('Agent Frameworks','Agent 框架对比','Agent 框架對比')}</h2><p className={styles.subtitle}>{L('Choose the right toolkit for building AI agents','选择适合你的 AI Agent 开发框架','選擇適合你的 AI Agent 開發框架')}</p></div><div className={styles.cases}>
<C t={L('🛠 Framework Comparison','🛠 框架对比','🛠 框架對比')}><T h={['Framework','Language','Best For','Learning Curve']} r={[
['LangChain','Python/JS',L('Most popular, huge ecosystem, 700+ integrations','最流行,庞大生态,700+集成','最流行,龐大生態,700+整合'),L('Medium','中等','中等')],
['CrewAI','Python',L('Role-based multi-agent, simple API, rapid prototyping','角色化多Agent,简洁API,快速原型','角色化多Agent,簡潔API,快速原型'),L('Easy','简单','簡單')],
['AutoGen','Python',L('Microsoft, multi-agent conversation, human-in-the-loop','微软, 多Agent对话, 人在回路','微軟, 多Agent對話, 人在迴路'),L('Medium','中等','中等')],
['Dify','Low-code',L('Visual workflow builder, one-click deploy, Chinese-native','可视化工作流,一键部署,中文原生','可視化工作流,一鍵部署,中文原生'),L('Easy','简单','簡單')],
['Coze','Low-code',L('ByteDance, bot publishing to WeChat/DingTalk/Feishu','字节跳动,发布到微信/钉钉/飞书','字節跳動,發布到微信/釘釘/飛書'),L('Easy','简单','簡單')],
['n8n','Low-code',L('Self-hosted workflow automation, 400+ nodes, AI nodes','自托管工作流,400+节点,AI节点','自託管工作流,400+節點,AI節點'),L('Easy','简单','簡單')],
]} /></C>
<C t={L('💡 Quick Start','💡 快速上手','💡 快速上手')}><Code>{`# CrewAI 示例 (最简单的多Agent框架):
pip install crewai
from crewai import Agent, Task, Crew
researcher = Agent(role="研究员", goal="搜索并分析最新AI趋势",
  backstory="资深科技研究员", allow_delegation=False)
writer = Agent(role="写作者", goal="把研究结果写成易读的报告",
  backstory="科技专栏作家", allow_delegation=False)
task1 = Task(description="研究2026年AI Agent的最新进展", agent=researcher)
task2 = Task(description="写一份500字的总结报告", agent=writer)
crew = Crew(agents=[researcher, writer], tasks=[task1, task2])
result = crew.kickoff()  # 两个Agent自动协作完成任务`}</Code></C>
</div></div>)}
function C({t,children}:{t:string;children:React.ReactNode}){return <div style={{background:'var(--bg-card)',borderRadius:12,padding:22,boxShadow:'var(--shadow)',marginBottom:16}}><h3 style={{marginBottom:12,color:'var(--text)',fontSize:16}}>{t}</h3>{children}</div>}
function T({h,r}:{h:string[];r:string[][]}){return <table style={{width:'100%',borderCollapse:'collapse',fontSize:13}}><thead><tr>{h.map(x=><th key={x} style={{padding:'8px 12px',textAlign:'left',borderBottom:'2px solid var(--border)',color:'var(--text)',fontWeight:600}}>{x}</th>)}</tr></thead><tbody>{r.map((rr,i)=><tr key={i}>{rr.map((c,j)=><td key={j} style={{padding:'8px 12px',borderBottom:'1px solid var(--border)',color:'var(--text-secondary)'}}>{c}</td>)}</tr>)}</tbody></table>}
function Code({children}:{children:string}){return <pre style={{background:'#0f172a',color:'#e2e8f0',borderRadius:8,padding:16,fontSize:13,lineHeight:1.6,overflowX:'auto',whiteSpace:'pre-wrap',wordBreak:'break-word',margin:0}}><code>{children}</code></pre>}
