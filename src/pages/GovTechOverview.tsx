import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'
export default function GovTechOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (<div className={styles.page}>
    <div className={styles.head}><h2 className={styles.title}>🏛️ {L('AI 政務智慧城市','AI in Government','AI 政务智慧城市')}</h2><p className={styles.subtitle}>{L('AI如何驅動智慧城市、數位政務和公共服務','How AI powers smart cities, digital government, and public services','AI如何驱动智慧城市、数字政务和公共服务')}</p></div>
    <section className={styles.chart} style={{marginBottom:20}}>
      <div style={{height:1,background:'var(--border)',margin:'36px 0 20px'}} /><h3 style={{fontSize:17,fontWeight:700,color:'var(--text)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>{L('AI正在改變政務','AI政务正在改变什么','AI is Transforming Government')}</h3>
      <p style={{color:'var(--text-secondary)',lineHeight:1.8,fontSize:14,marginBottom:12}}>{L('AI is making cities smarter and governments more efficient. Hangzhou City Brain reduced traffic congestion by 15% and ambulance arrival time by 50% with AI; Shenzhen AI government enables instant approval for 300+ services; AI-assisted policy simulation shifts decision-making from experience-driven to data-driven. China leads globally in govtech AI — national e-government platform has 1B+ registered users. Global smart city AI market projected to exceed $300B by 2028.','AI正在让城市更智慧、政府更高效。杭州城市大脑用AI将交通拥堵减少15%，救护车到达时间缩短50%；深圳AI政务实现300+事项秒批秒办；AI辅助政策模拟让决策从经验驱动转向数据驱动。中国在政务AI领域全球领先——全国一体化政务服务平台注册用户超10亿。全球智慧城市AI市场预计2028年突破3000亿美元。','AI正在讓城市更智慧、政府更高效。杭州城市大腦用AI將交通擁堵減少15%，救護車到達時間縮短50%；深圳AI政務實現300+事項秒批秒辦；AI輔助政策模擬讓決策從經驗驅動轉向數據驅動。中國在政務AI領域全球領先——全國一體化政務服務平台註冊用戶超10億。全球智慧城市AI市場預計2028年突破3000億美元。')}</p>
    </section>
    <section className={styles.chart} style={{marginBottom:20}}>
      <div style={{height:1,background:'var(--border)',margin:'36px 0 20px'}} /><h3 style={{fontSize:17,fontWeight:700,color:'var(--text)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>{L('前沿應用場景','前沿应用场景','Cutting-Edge Applications')}</h3>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:12}}>
        {[{icon:'🏙️',t:L('AI智慧城市','AI智慧城市','Smart City'),d:L('杭州城市大腦整合全城攝像頭、信號燈和公交數據。深圳AI系統管理全市5萬+路燈、10萬+井蓋。新加坡用AI預測登革熱爆發，準確率85%。','杭州城市大脑整合全城摄像头、信号灯和公交数据，AI实时优化交通流。深圳AI系统管理全市5万+路灯、10万+井盖。雄安新区从零规划AI原生智慧城市，所有基础设施数字孪生。新加坡用AI预测登革热爆发，准确率85%。','Hangzhou City Brain integrates cameras, signals and transit data, AI optimizes traffic in real-time. Shenzhen AI manages 50K+ streetlights and 100K+ manholes. Xiongan plans AI-native smart city from scratch. Singapore uses AI to predict dengue outbreaks at 85% accuracy.')},
        {icon:'📋',t:L('AI數位政務','AI数字政务','Digital Government'),d:L('AI政務助手實現秒批秒辦。深圳300+事項可在AI輔助下自動審批。浙江最多跑一次改革用AI打通部門數據壁壘。愛沙尼亞99%政務服務在線完成。','AI政务助手实现秒批秒办。深圳300+事项可在AI辅助下自动审批。浙江最多跑一次改革用AI打通部门数据壁垒，群众办事从跑多次变成一次不跑。爱沙尼亚99%的政务服务在线完成，X-Road AI平台连接全国数据。','AI government assistants enable instant approvals. Shenzhen auto-approves 300+ services with AI. Zhejiang "run once" reform uses AI to break data silos, reducing citizen visits to zero. Estonia completes 99% of government services online with X-Road AI platform.')},
        {icon:'📊',t:L('AI政策模擬','AI政策模拟','Policy Simulation'),d:L('AI構建經濟和社會模型模擬政策效果。新加坡用AI模型預測房價調控政策影響。歐盟用AI進行氣候政策影響評估。','AI构建经济和社会模型模拟政策效果。新加坡用AI模型预测房价调控政策影响。欧盟Joint Research Centre用AI进行气候政策影响评估。中国国务院发展研究中心用AI进行宏观经济预测和情景分析。','AI builds economic and social models to simulate policy impacts. Singapore uses AI models to predict housing policy effects. EU Joint Research Centre uses AI for climate policy impact assessment. China DRC uses AI for macroeconomic forecasting and scenario analysis.')},
        {icon:'🚨',t:L('AI應急管理','AI应急管理','Emergency Response'),d:L('AI預測自然災害並優化救援資源分配。日本用AI地震預警系統在地震發生前10-30秒發送警報。FEMA用AI分析災後衛星圖像評估損失。','AI预测自然灾害并优化救援资源分配。日本用AI地震预警系统在地震发生前10-30秒发送警报。FEMA用AI分析灾后卫星图像评估损失。中国应急管理部用AI监控全国安全生产风险，实时分析数百万个传感器数据。','AI predicts natural disasters and optimizes rescue resource allocation. Japan AI earthquake warning sends alerts 10-30 seconds before shaking. FEMA uses AI to analyze post-disaster satellite imagery for damage assessment. China MEM uses AI to monitor national safety risks from millions of sensors.')},
      ].map(item => (<div key={item.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 4px'}}>{item.icon} {item.t}</h4><p style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.7,margin:0}}>{item.d}</p></div>))}
      </div>
    </section>
    <section className={styles.chart} style={{marginBottom:20}}>
      <div style={{height:1,background:'var(--border)',margin:'36px 0 20px'}} /><h3 style={{fontSize:17,fontWeight:700,color:'var(--text)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>{L('關鍵數據','关键数据','Key Metrics')}</h3>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:10}}>
        {[{v:'↓15%',l:L('AI減少交通擁堵','AI减少交通拥堵','Traffic Drop')},{v:'300+',l:L('深圳秒批秒辦','深圳秒批秒办事项','Shenzhen AI Svcs')},{v:'10亿+',l:L('中國政務平台用戶','中国政务平台用户','CN E-Gov Users')},{v:'$300B+',l:L('2028智慧城市AI市場','2028智慧城市AI市场','2028 Smart City Mkt')}].map(m => (<div key={m.l} style={{textAlign:'center',padding:'16px 12px',background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><div style={{fontSize:24,fontWeight:800,color:'var(--primary)'}}>{m.v}</div><div style={{fontSize:12,color:'var(--text-secondary)',marginTop:4}}>{m.l}</div></div>))}
      </div>
    </section>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12,marginTop:24}}>{L('行業工具導航','行业工具导航','Industry Tool Directory')}</h3>
    <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#0ea5e9" />
  </div>)}
const links: ToolLink[] = [
  {name:'杭州城市大脑',url:'https://www.hangzhou.gov.cn/',desc:{en:'AI smart city, traffic -15%, ambulance -50% time',zh:'AI智慧城市,交通拥堵-15%,救护车-50%时间'},cat:'tools',icon:'🏙️'},
  {name:'Palantir',url:'https://www.palantir.com/',desc:{en:'AI gov data platform, defense+intelligence+health',zh:'AI政务数据平台,国防+情报+公共卫生'},cat:'tools',icon:'🔮'},
  {name:'深圳AI政务',url:'https://www.sz.gov.cn/',desc:{en:'AI e-government, 300+ services auto-approved',zh:'AI政务,300+事项秒批秒办'},cat:'tools',icon:'📋'},
  {name:'X-Road',url:'https://x-road.global/',desc:{en:'Estonia AI data exchange, 99% services online',zh:'爱沙尼亚AI数据交换平台,99%政务服务在线'},cat:'tools',icon:'🔗'},
  {name:'智慧雄安',url:'https://www.xiongan.gov.cn/',desc:{en:'AI-native smart city, full digital twin, from scratch',zh:'AI原生智慧城市,全数字孪生,从零规划'},cat:'tools',icon:'🏗️'},
]
