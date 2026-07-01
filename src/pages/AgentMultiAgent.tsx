import { useT } from '../contexts/LanguageContext';import styles from './Page.module.css'
export default function AgentMultiAgent(){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>🕸️ {L('Multi-Agent Systems','多 Agent 协作','多 Agent 協作')}</h2><p className={styles.subtitle}>{L('Multiple agents collaborating — each with a role — to solve complex problems','多个Agent分工协作,各自承担不同角色,共同解决复杂问题','多個Agent分工協作,各自承擔不同角色,共同解決複雜問題')}</p></div><div className={styles.cases}>
<C t={L('🧩 Design Patterns','🧩 设计模式','🧩 設計模式')}><T h={['Pattern','How It Works','Best For']} r={[
['Sequential',L('Agent A → Agent B → Agent C. Each passes output to the next','Agent A→Agent B→Agent C, 流水线式传递','Agent A→Agent B→Agent C, 流水線式傳遞'),L('Linear workflows: research→write→review','线性工作流:研究→撰写→审核','線性工作流:研究→撰寫→審核')],
['Router',L('One dispatcher agent routes tasks to specialized agents','一个调度Agent将任务路由给不同专长Agent','一個調度Agent將任務路由給不同專長Agent'),L('Customer support: billing/tech/general','客服:账单/技术/通用分流','客服:帳單/技術/通用分流')],
['Debate',L('Multiple agents debate different viewpoints, then synthesize','多个Agent从不同立场辩论,然后综合观点','多個Agent從不同立場辯論,然後綜合觀點'),L('Decision making, strategy planning','决策分析、战略规划','決策分析、戰略規劃')],
['Hierarchical',L('Manager agent delegates to worker agents, reviews results','管理者Agent分配任务→执行Agent干活→管理者审核','管理者Agent分配任務→執行Agent幹活→管理者審核'),L('Complex projects with quality control','需要质量控制的复杂项目','需要品質控制的複雜項目')],
]} /></C>
<C t={L('💡 Example: Research Team','💡 示例：研究团队','💡 示例：研究團隊')}><Code>{`# 5个Agent协作完成深度调研报告:
Manager Agent (调度者):
  "把用户的问题分解成子任务,分配给团队,整合结果"
Research Agent (研究员):
  "搜索最新论文、新闻、数据,提取关键信息"
Analyst Agent (分析师):
  "对研究结果进行批判性分析,找出pattern和矛盾点"
Writer Agent (写作者):
  "把分析结果写成结构化报告,引用Research的来源"
Fact-Checker Agent (核查员):
  "逐一验证Writer报告中的事实陈述,标注可信度"
# 流程: User Question
# → Manager 分解任务
# → [Research + Analyst 并行工作]
# → Writer 生成报告
# → Fact-Checker 审核
# → Manager 最终检查 → 交付用户`}</Code></C>
</div></div>)}
function C({t,children}:{t:string;children:React.ReactNode}){return <div style={{background:'var(--bg-card)',borderRadius:12,padding:22,boxShadow:'var(--shadow)',marginBottom:16}}><h3 style={{marginBottom:12,color:'var(--text)',fontSize:16}}>{t}</h3>{children}</div>}
function T({h,r}:{h:string[];r:string[][]}){return <table style={{width:'100%',borderCollapse:'collapse',fontSize:13}}><thead><tr>{h.map(x=><th key={x} style={{padding:'8px 12px',textAlign:'left',borderBottom:'2px solid var(--border)',color:'var(--text)',fontWeight:600}}>{x}</th>)}</tr></thead><tbody>{r.map((rr,i)=><tr key={i}>{rr.map((c,j)=><td key={j} style={{padding:'8px 12px',borderBottom:'1px solid var(--border)',color:'var(--text-secondary)'}}>{c}</td>)}</tr>)}</tbody></table>}
function Code({children}:{children:string}){return <pre style={{background:'#0f172a',color:'#e2e8f0',borderRadius:8,padding:16,fontSize:13,lineHeight:1.6,overflowX:'auto',whiteSpace:'pre-wrap',wordBreak:'break-word',margin:0}}><code>{children}</code></pre>}
