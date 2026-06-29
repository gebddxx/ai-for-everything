import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

export default function ManufacturingOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e

  return (
    <div className={styles.page}>
      <div className={styles.head}><h2 className={styles.title}>🏗️ {L('AI 智慧製造','AI in Manufacturing','AI 智能制造')}</h2><p className={styles.subtitle}>{L('AI如何驅動預測性維護、質量檢測和數字孿生','How AI powers predictive maintenance, quality inspection, and digital twins','AI如何驱动预测性维护、质量检测和数字孪生')}</p></div>

      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:"var(--border)",margin:"36px 0 20px"}} /><h3 style={{fontSize:17,fontWeight:700,color:"var(--text)",marginBottom:16,display:"flex",alignItems:"center",gap:8}}>{L('AI正在改變製造','AI制造正在改变什么','AI is Transforming Manufacturing')}</h3>
        <p style={{color:'var(--text-secondary)',lineHeight:1.8,fontSize:14,marginBottom:12}}>{L('AI is driving the fourth industrial revolution. Predictive maintenance analyzes vibration, temperature and sensor data to warn of failures weeks in advance, reducing downtime by 30-50%; AI visual inspection replaces human QC with 99.9% accuracy; digital twins simulate and optimize entire factories in virtual environments. China leads globally in manufacturing AI adoption. McKinsey estimates AI can add $1.4T in value to global manufacturing.','AI正在推动第四次工业革命的深入。预测性维护系统通过分析设备振动、温度等传感器数据，提前数周预警故障，减少停机时间30-50%；AI视觉质检以99.9%的准确率替代人工目检；数字孪生技术在虚拟环境中模拟和优化整个工厂运作。中国制造业AI应用全球领先，海尔卡奥斯和树根互联等工业互联网平台已连接数百万台设备。据McKinsey，AI可为全球制造业增加1.4万亿美元价值。','AI正在推動第四次工業革命的深入。預測性維護系統通過分析設備振動、溫度等感測器數據，提前數周預警故障，減少停機時間30-50%；AI視覺質檢以99.9%的準確率替代人工目檢；數字孿生技術在虛擬環境中模擬和優化整個工廠運作。中国製造業AI應用全球領先。據McKinsey，AI可為全球製造業增加1.4兆美元價值。')}</p>
      </section>

      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:"var(--border)",margin:"36px 0 20px"}} /><h3 style={{fontSize:17,fontWeight:700,color:"var(--text)",marginBottom:16,display:"flex",alignItems:"center",gap:8}}>{L('前沿應用場景','前沿应用场景','Cutting-Edge Applications')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:12}}>
          {[
            {icon:'🔊',t:L('預測性維護','预测性维护','Predictive Maintenance'),d:L('AI分析振動、超聲波和電流信號，在設備故障前發出預警。Augury的AI系統將工廠意外停機減少70%。','AI分析振动、超声波和电流信号，在设备故障前发出预警。Augury的AI系统将工厂意外停机减少70%。C3 AI为壳牌部署的预测维护方案每年节省数千万美元。中国天泽智云服务三一重工等客户，实现从被动维修到主动预测的转变。','AI analyzes vibration, ultrasound and current signals to predict equipment failure. Augury reduces unplanned downtime by 70%. C3 AI saves Shell millions annually. Chinese CyberInsight serves SANY and others, shifting from reactive to predictive maintenance.')},
            {icon:'👁️',t:L('AI視覺質檢','AI视觉质检','Visual Quality Inspection'),d:L('计算机视觉在生产线上实时检测产品缺陷。Landing AI（吴恩达创立）的平台将质检准确率提升至99.9%。中国思谋科技和阿丘科技在3C、汽车和半导体行业部署AI视觉检测，替代人工目检。','Computer vision detects product defects in real-time on production lines. Andrew Ng\'s Landing AI achieves 99.9% QC accuracy. Chinese SmartMore and Aqrose deploy AI visual inspection across 3C, automotive and semiconductor industries.','計算機視覺在生產線上即時檢測產品缺陷。Landing AI（吳恩達創立）將質檢準確率提升至99.9%。')},
            {icon:'🔄',t:L('數字孿生','数字孪生','Digital Twin'),d:L('在虛擬空間中1:1複刻工廠，即時監控+仿真優化。西門子Xcelerator和NVIDIA Omniverse構建物理級精確的工廠模型。','在虚拟空间中1:1复刻工厂，实时监控+仿真优化。西门子Xcelerator和NVIDIA Omniverse构建了物理级精确的工厂模型。海尔卡奥斯平台连接数百万设备，实现大规模定制生产。','1:1 virtual replicas of factories for real-time monitoring + simulation. Siemens Xcelerator and NVIDIA Omniverse build physics-accurate factory models. Haier COSMOPlat connects millions of devices for mass customization.')},
            {icon:'📦',t:L('智慧供應鏈','智能供应链','Smart Supply Chain'),d:L('AI即時優化原材料採購、庫存和物流。Kinaxis的並行計劃引擎將供應鏈回應速度提升10倍。','AI实时优化原材料采购、库存和物流。Kinaxis的并行计划引擎将供应链响应速度提升10倍。准时达（富士康旗下）用AI管理全球制造物流。Flexport的AI货运平台将跨境物流可视化。','AI optimizes procurement, inventory and logistics in real-time. Kinaxis parallel planning boosts supply chain responsiveness by 10x. Jusda (Foxconn) manages global manufacturing logistics with AI. Flexport visualizes cross-border freight.')},
          ].map(item => (<div key={item.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 4px'}}>{item.icon} {item.t}</h4><p style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.7,margin:0}}>{item.d}</p></div>))}
        </div>
      </section>

      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:"var(--border)",margin:"36px 0 20px"}} /><h3 style={{fontSize:17,fontWeight:700,color:"var(--text)",marginBottom:16,display:"flex",alignItems:"center",gap:8}}>{L('關鍵數據','关键数据','Key Metrics')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:10}}>
          {[{v:'↓30-50%',l:L('意外停機減少','意外停机减少','Downtime Reduction')},{v:'99.9%',l:L('AI質檢準確率','AI质检准确率','AI QC Accuracy')},{v:'$1.4T',l:L('AI製造業價值','AI制造业价值(McKinsey)','AI Mfg Value (McKinsey)')},{v:'10×',l:L('供應鏈回應速度','供应链响应速度提升','Supply Chain Speed')}].map(m => (<div key={m.l} style={{textAlign:'center',padding:'16px 12px',background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><div style={{fontSize:24,fontWeight:800,color:'var(--primary)'}}>{m.v}</div><div style={{fontSize:12,color:'var(--text-secondary)',marginTop:4}}>{m.l}</div></div>))}
        </div>
      </section>

      <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12,marginTop:24}}>{L('行業工具導航','行业工具导航','Industry Tool Directory')}</h3>
      <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#ef4444" />
    </div>
  )
}

const links: ToolLink[] = [
  {name:'Augury',url:'https://www.augury.com/',desc:{en:'AI vibration+ultrasound analytics, machine health',zh:'AI振动+超声波分析,机器健康监测,预测故障'},cat:'预测维护',icon:'🔊'},
  {name:'Uptake',url:'https://www.uptake.com/',desc:{en:'AI industrial analytics, fleet-level PdM',zh:'AI工业分析平台,车队级预测性维护'},cat:'预测维护',icon:'📈'},
  {name:'C3 AI',url:'https://c3.ai/',desc:{en:'Enterprise AI: predictive maintenance, energy mgmt',zh:'企业AI套件:预测性维护/能源管理/异常检测'},cat:'预测维护',icon:'🏭'},
  {name:'天泽智云',url:'https://www.cyber-insight.com/',desc:{en:'Chinese industrial AI, predictive maintenance',zh:'国产工业AI,预测性维护+智能诊断'},cat:'预测维护',icon:'☁️'},
  {name:'Landing AI',url:'https://landing.ai/',desc:{en:'Andrew Ng, visual inspection, LandingLens platform',zh:'吴恩达创办,AI视觉质检平台LandingLens'},cat:'质量检测',icon:'🔍'},
  {name:'思谋科技',url:'https://www.smartedges.cn/',desc:{en:'Chinese AI visual inspection leader, manufacturing',zh:'国产AI视觉质检领导者,智能制造全栈方案'},cat:'质量检测',icon:'👁️'},
  {name:'阿丘科技',url:'https://www.aqrose.com/',desc:{en:'Chinese AI industrial vision, defect detection',zh:'国产AI工业视觉,缺陷检测+分拣定位'},cat:'质量检测',icon:'🔎'},
  {name:'Instrumental',url:'https://www.instrumental.com/',desc:{en:'AI visual inspection on assembly lines',zh:'AI视觉检测,产线上自动识别装配缺陷'},cat:'质量检测',icon:'👁️'},
  {name:'Siemens Xcelerator',url:'https://www.sw.siemens.com/',desc:{en:'Industrial metaverse, digital twin, factory simulation',zh:'工业元宇宙,数字孪生,工厂全生命周期仿真'},cat:'数字孪生',icon:'🏗️'},
  {name:'Nvidia Omniverse',url:'https://www.nvidia.com/omniverse/',desc:{en:'AI digital twin platform, future factory',zh:'AI数字孪生平台,未来工厂,物理级精确模拟'},cat:'数字孪生',icon:'🟢'},
  {name:'树根互联',url:'https://www.rootcloud.com/',desc:{en:'SANY Rootcloud, IIoT + digital twin platform',zh:'三一重工旗下,工业互联网+数字孪生平台'},cat:'数字孪生',icon:'🌳'},
  {name:'海尔卡奥斯',url:'https://www.cosmoplat.com/',desc:{en:'Haier COSMOPlat, industrial internet + AI',zh:'海尔工业互联网平台,大规模定制+AI'},cat:'数字孪生',icon:'🏭'},
  {name:'Kinaxis',url:'https://www.kinaxis.com/',desc:{en:'AI concurrent supply chain planning, RapidResponse',zh:'AI并行供应链计划,RapidResponse平台'},cat:'供应链',icon:'⚡'},
  {name:'Flexport',url:'https://www.flexport.com/',desc:{en:'AI-powered freight forwarding & supply chain OS',zh:'AI驱动的货运代理+供应链操作系统'},cat:'供应链',icon:'🚢'},
  {name:'FourKites',url:'https://www.fourkites.com/',desc:{en:'AI real-time supply chain visibility, ETA prediction',zh:'AI实时供应链可视化,ETA精准预测'},cat:'供应链',icon:'🛰️'},
  {name:'准时达',url:'https://www.zhunshida.com/',desc:{en:'Foxconn supply chain AI, global logistics',zh:'富士康供应链AI,全球制造物流智慧管理'},cat:'供应链',icon:'🏭'},
]
