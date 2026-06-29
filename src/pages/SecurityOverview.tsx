import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

export default function SecurityOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (
    <div className={styles.page}>
      <div className={styles.head}><h2 className={styles.title}>🔒 {L('AI 網路安全','AI in Cybersecurity','AI 网络安全')}</h2><p className={styles.subtitle}>{L('AI如何防禦威脅、檢測攻擊和保障系統安全','How AI defends against threats, detects attacks, and secures systems','AI如何防御威胁、检测攻击和保障系统安全')}</p></div>
      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:'var(--border)',margin:'36px 0 20px'}} /><h3 style={{fontSize:17,fontWeight:700,color:'var(--text)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>{L('AI正在改變網路安全','AI安全正在改变什么','AI is Transforming Cybersecurity')}</h3>
        <p style={{color:'var(--text-secondary)',lineHeight:1.8,fontSize:14,marginBottom:12}}>{L('网络安全是一场AI对AI的军备竞赛。攻击者用AI生成钓鱼邮件和恶意代码，防御者用AI实时检测和响应。Darktrace的AI在数秒内识别勒索软件攻击并自动隔离；CrowdStrike的AI每天分析数万亿事件，将威胁检测时间从天缩短到分钟。中国360安全大脑用AI分析全球APT攻击，年均发现30+国家级黑客组织。全球AI安全市场预计2028年突破600亿美元。','網路安全是一場AI對AI的軍備競賽。攻擊者用AI生成釣魚郵件和惡意代碼，防禦者用AI即時檢測和響應。Darktrace的AI在數秒內識別勒索軟體攻擊並自動隔離；CrowdStrike的AI每天分析數兆事件。中國360安全大腦用AI分析全球APT攻擊。全球AI安全市場預計2028年突破600億美元。','Cybersecurity is an AI vs AI arms race. Attackers use AI to generate phishing emails and malware; defenders use AI for real-time detection and response. Darktrace AI identifies ransomware in seconds and auto-isolates; CrowdStrike AI analyzes trillions of events daily. China\'s 360 Security Brain uses AI to analyze global APT attacks. Global AI security market projected to exceed $60B by 2028.')}</p>
      </section>
      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:'var(--border)',margin:'36px 0 20px'}} /><h3 style={{fontSize:17,fontWeight:700,color:'var(--text)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>{L('前沿應用場景','前沿应用场景','Cutting-Edge Applications')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:12}}>
          {[{icon:'🛡️',t:L('AI威脅檢測','AI威胁检测','Threat Detection'),d:L('AI分析網路流量和行為模式即時發現異常。Darktrace的自學習AI無需規則即可檢測零日攻擊。CrowdStrike Falcon用AI每天處理數兆事件。','AI分析网络流量和行为模式实时发现异常。Darktrace的自主学习AI无需规则即可检测零日攻击。CrowdStrike Falcon用AI每天处理数万亿事件，将MTTD（平均检测时间）从数天压缩到1分钟。Vectra AI的Attack Signal Intelligence将告警准确率提升至98%。','AI analyzes network traffic and behavior for real-time anomaly detection. Darktrace self-learning AI detects zero-days without rules. CrowdStrike Falcon processes trillions of events daily, compressing MTTD from days to 1 minute. Vectra AI Attack Signal Intelligence achieves 98% alert accuracy.')},
          {icon:'📧',t:L('AI反釣魚與欺詐','AI反钓鱼与欺诈','Anti-Phishing & Fraud'),d:L('AI識別GPT生成的釣魚郵件，準確率超99%。Abnormal Security用AI分析郵件上下文和行為基線，攔截了傳統安全工具漏掉的80%的精準釣魚攻擊。','AI识别GPT生成的钓鱼邮件，准确率超99%。Abnormal Security用AI分析邮件上下文和行为基线，拦截了传统安全工具漏掉的80%的精准钓鱼攻击。中国微步在线用AI威胁情报服务金融和政府客户。','AI detects GPT-generated phishing emails with 99%+ accuracy. Abnormal Security uses AI to analyze email context and behavioral baselines, blocking 80% of targeted phishing missed by traditional tools. Chinese ThreatBook provides AI threat intelligence.')},
          {icon:'🤖',t:L('AI自動化響應','AI自动化响应(SOAR)','Automated Response'),d:L('AI在檢測到威脅後自動執行隔離、阻斷和修復。Palo Alto Cortex XSOAR用AI編排安全響應劇本，將事件處理時間從小時縮短到秒。','AI在检测到威胁后自动执行隔离、阻断和修复。Palo Alto Cortex XSOAR用AI编排安全响应剧本，将事件处理时间从小时缩短到秒。Google Chronicle的AI安全分析每秒处理PB级数据。','AI automatically isolates, blocks and remediates after threat detection. Palo Alto Cortex XSOAR orchestrates security response playbooks with AI, reducing incident handling from hours to seconds. Google Chronicle AI Security Analytics processes petabytes per second.')},
          {icon:'🔑',t:L('AI身份安全','AI身份安全','Identity Security'),d:L('AI分析登錄行為檢測帳號盜用。Microsoft Entra用AI每天阻止數億次身份攻擊。Okta的AI身份引擎實現自適應認證。','AI分析登录行为检测账号盗用。Microsoft Entra用AI每天阻止数亿次身份攻击，将MFA疲劳攻击减少90%。Okta的AI身份引擎实现自适应认证，高风险行为自动触发二次验证。','AI analyzes login behavior to detect account takeover. Microsoft Entra blocks hundreds of millions of identity attacks daily with AI, reducing MFA fatigue by 90%. Okta AI identity engine enables adaptive authentication with automatic step-up for risky behavior.')},
        ].map(item => (<div key={item.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 4px'}}>{item.icon} {item.t}</h4><p style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.7,margin:0}}>{item.d}</p></div>))}
        </div>
      </section>
      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:'var(--border)',margin:'36px 0 20px'}} /><h3 style={{fontSize:17,fontWeight:700,color:'var(--text)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>{L('關鍵數據','关键数据','Key Metrics')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:10}}>
          {[{v:'秒级',l:L('AI威脅檢測+隔離','AI威胁检测+隔离','Detection+Isolation')},{v:'99%+',l:L('AI識別GenAI釣魚','AI识别GenAI钓鱼','GenAI Phishing Detect')},{v:'90%',l:L('MFA攻擊減少','MFA攻击减少','MFA Attack Drop')},{v:'$60B+',l:L('2028年AI安全市場','2028年AI安全市场','2028 AI Security Mkt')}].map(m => (<div key={m.l} style={{textAlign:'center',padding:'16px 12px',background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><div style={{fontSize:24,fontWeight:800,color:'var(--primary)'}}>{m.v}</div><div style={{fontSize:12,color:'var(--text-secondary)',marginTop:4}}>{m.l}</div></div>))}
        </div>
      </section>
      <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12,marginTop:24}}>{L('行業工具導航','行业工具导航','Industry Tool Directory')}</h3>
      <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#ef4444" />
    </div>
  )
}
const links: ToolLink[] = [
  {name:'Darktrace',url:'https://darktrace.com/',desc:{en:'Self-learning AI, real-time threat detection, auto-response',zh:'自学习AI,实时威胁检测+自动响应,零日攻击'},cat:'tools',icon:'🛡️'},
  {name:'CrowdStrike',url:'https://www.crowdstrike.com/',desc:{en:'AI-native endpoint security, trillions of events/day',zh:'AI原生终端安全,每天分析数万亿事件'},cat:'tools',icon:'🦅'},
  {name:'Abnormal Security',url:'https://abnormalsecurity.com/',desc:{en:'AI email security, stops 80% missed phishing',zh:'AI邮件安全,拦截80%漏网精准钓鱼攻击'},cat:'tools',icon:'📧'},
  {name:'Palo Alto XSOAR',url:'https://www.paloaltonetworks.com/cortex/xsoar',desc:{en:'AI SOAR, security automation, incident response',zh:'AI安全编排自动化,事件响应从小时→秒'},cat:'tools',icon:'🏰'},
  {name:'Microsoft Entra',url:'https://www.microsoft.com/entra',desc:{en:'AI identity protection, blocks 100M+ attacks daily',zh:'AI身份保护,每天阻止数亿次攻击'},cat:'tools',icon:'🪟'},
  {name:'360安全大脑',url:'https://www.360.cn/',desc:{en:'Chinese AI security, global APT analysis, 30+ APT groups/yr',zh:'国产AI安全,全球APT分析,年均发现30+黑客组织'},cat:'tools',icon:'🧠'},
  {name:'微步在线',url:'https://www.threatbook.cn/',desc:{en:'Chinese AI threat intelligence, financial + gov clients',zh:'国产AI威胁情报,服务金融和政府客户'},cat:'tools',icon:'🔍'},
]
