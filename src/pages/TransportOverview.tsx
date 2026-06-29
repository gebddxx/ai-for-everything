import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

export default function TransportOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (
    <div className={styles.page}>
      <div className={styles.head}><h2 className={styles.title}>🚗 {L('AI in Transportation','AI 交通出行','AI 交通出行')}</h2><p className={styles.subtitle}>{L('How AI powers autonomous driving, smart traffic, and mobility services','AI如何驱动自动驾驶、智慧交通和出行服务','AI如何驅動自動駕駛、智慧交通和出行服務')}</p></div>
      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:'var(--border)',margin:'36px 0 20px'}} /><h3 style={{fontSize:17,fontWeight:700,color:'var(--text)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>{L('AI交通正在改变什么','AI is Transforming Transportation','AI正在改變交通')}</h3>
        <p style={{color:'var(--text-secondary)',lineHeight:1.8,fontSize:14,marginBottom:12}}>{L('交通是AI技术最大的应用场景之一，市场规模超万亿美元。Waymo和百度Apollo的无人出租车已累计服务数百万次；特斯拉FSD V12用端到端神经网络替代30万行C++代码；AI红绿灯优化将城市拥堵减少25%。中国在自动驾驶领域全球领先——北京、上海、广州等20+城市开放自动驾驶测试，百度萝卜快跑在武汉运营超500辆无人车。','交通是AI技術最大的應用場景之一，市場規模超兆美元。Waymo和百度Apollo的無人計程車已累計服務數百萬次；特斯拉FSD V12用端到端神經網絡替代30萬行C++代碼；AI紅綠燈優化將城市擁堵減少25%。中國在自動駕駛領域全球領先——北京、上海、廣州等20+城市開放自動駕駛測試。','Transportation is one of AI\'s largest application areas with a $1T+ market. Waymo and Baidu Apollo robotaxis have served millions of rides; Tesla FSD V12 replaced 300K lines of C++ with an end-to-end neural network; AI traffic light optimization reduces urban congestion by 25%. China leads globally in autonomous driving with 20+ cities open for testing.')}</p>
      </section>
      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:'var(--border)',margin:'36px 0 20px'}} /><h3 style={{fontSize:17,fontWeight:700,color:'var(--text)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>{L('前沿应用场景','Cutting-Edge Applications','前沿應用場景')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:12}}>
          {[{icon:'🚕',t:L('无人出租车','Robotaxi','無人計程車'),d:L('Waymo在旧金山/凤凰城/洛杉矶每周完成15万+次付费出行，2025年扩展到奥斯汀和亚特兰大。百度萝卜快跑在武汉运营超500辆，累计订单超600万。Cruise因安全事件暂停运营后重启。','Waymo completes 150K+ paid rides weekly across SF/Phoenix/LA, expanding to Austin and Atlanta in 2025. Baidu Apollo Go operates 500+ vehicles in Wuhan, 6M+ cumulative orders. Cruise resumed operations after safety pause.','Waymo在舊金山/鳳凰城/洛杉磯每週完成15萬+次付費出行。百度蘿蔔快跑在武漢運營超500輛，累計訂單超600萬。')},
          {icon:'🧠',t:L('端到端自动驾驶','End-to-End Autonomy','端到端自動駕駛'),d:L('特斯拉FSD V12完全用神经网络替代规则代码，训练数据超10亿英里。Wayve的LINGO-2用自然语言解释驾驶决策。华为ADS 3.0实现城市NOA不依赖高精地图，覆盖全国400+城市。','Tesla FSD V12 replaces rule-based code entirely with neural networks, trained on 1B+ miles. Wayve LINGO-2 explains driving decisions in natural language. Huawei ADS 3.0 achieves city NOA without HD maps, covering 400+ Chinese cities.','特斯拉FSD V12完全用神經網絡替代規則代碼，訓練數據超10億英里。華為ADS 3.0實現城市NOA不依賴高精地圖，覆蓋全國400+城市。')},
          {icon:'🚦',t:L('AI智慧交通','Smart Traffic','AI智慧交通'),d:L('AI实时分析路口摄像头数据动态调整红绿灯。杭州城市大脑将通行效率提升15%，救护车到达时间缩短50%。Google Green Light项目用AI优化70+城市交通信号，减少30%停车启动。','AI analyzes intersection cameras in real-time to dynamically adjust traffic lights. Hangzhou City Brain improved traffic efficiency by 15%, ambulance arrival time by 50%. Google Green Light optimizes signals in 70+ cities, reducing stops by 30%.','AI即時分析路口攝像頭數據動態調整紅綠燈。杭州城市大腦將通行效率提升15%。Google Green Light項目用AI優化70+城市交通信號。')},
          {icon:'🛵',t:L('AI出行与配送','Mobility & Delivery','AI出行與配送'),d:L('滴滴AI调度系统每天匹配数千万订单，将乘客等待时间缩短35%。美团无人机配送在深圳完成10万+订单。Uber用AI预测需求热点，司机空驶率降低20%。','Didi AI dispatch matches tens of millions of rides daily, reducing wait time by 35%. Meituan drones completed 100K+ deliveries in Shenzhen. Uber uses AI to predict demand hotspots, reducing driver empty miles by 20%.','滴滴AI調度系統每天匹配數千萬訂單，將乘客等待時間縮短35%。美團無人機配送在深圳完成10萬+訂單。')},
        ].map(item => (<div key={item.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 4px'}}>{item.icon} {item.t}</h4><p style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.7,margin:0}}>{item.d}</p></div>))}
        </div>
      </section>
      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:'var(--border)',margin:'36px 0 20px'}} /><h3 style={{fontSize:17,fontWeight:700,color:'var(--text)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>{L('关键数据','Key Metrics','關鍵數據')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:10}}>
          {[{v:'150K+/周',l:L('Waymo付费出行','Waymo Weekly Rides','Waymo付費出行')},{v:'↓25%',l:L('AI减少城市拥堵','Urban Congestion Drop','AI減少城市擁堵')},{v:'600万+',l:L('百度萝卜快跑累计订单','Baidu Apollo Orders','百度蘿蔔快跑訂單')},{v:'20+城',l:L('中国自动驾驶测试城市','China AV Test Cities','中國自動駕駛測試')}].map(m => (<div key={m.l} style={{textAlign:'center',padding:'16px 12px',background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><div style={{fontSize:24,fontWeight:800,color:'var(--primary)'}}>{m.v}</div><div style={{fontSize:12,color:'var(--text-secondary)',marginTop:4}}>{m.l}</div></div>))}
        </div>
      </section>
      <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12,marginTop:24}}>{L('行业工具导航','Industry Tool Directory','行業工具導航')}</h3>
      <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#3b82f6" />
    </div>
  )
}
const links: ToolLink[] = [
  {name:'Waymo',url:'https://waymo.com/',desc:{en:'Alphabet, L4 autonomous driving, 150K+ rides/week',zh:'Alphabet旗下,L4级无人驾驶,每周15万+单'},cat:'tools',icon:'🚕'},
  {name:'特斯拉FSD',url:'https://www.tesla.com/fsd',desc:{en:'End-to-end neural network driving, 1B+ miles trained',zh:'端到端神经网络驾驶,训练数据超10亿英里'},cat:'tools',icon:'⚡'},
  {name:'百度Apollo',url:'https://apollo.baidu.com/',desc:{en:'L4 robotaxi, Wuhan 500+ vehicles, open platform',zh:'L4无人驾驶开放平台,萝卜快跑武汉500+辆'},cat:'tools',icon:'🚗'},
  {name:'华为ADS',url:'https://www.huawei.com/',desc:{en:'ADS 3.0, mapless city NOA, 400+ cities covered',zh:'ADS 3.0智驾,无图城市领航,覆盖400+城'},cat:'tools',icon:'📡'},
  {name:'滴滴AI',url:'https://www.didiglobal.com/',desc:{en:'Ride-hailing AI dispatch, tens of millions daily',zh:'出行AI调度系统,每天匹配数千万订单'},cat:'tools',icon:'🚘'},
  {name:'Mobileye',url:'https://www.mobileye.com/',desc:{en:'Intel, ADAS + autonomous driving, 150M+ vehicles',zh:'英特尔旗下,ADAS+自动驾驶,装机超1.5亿辆'},cat:'tools',icon:'👁️'},
  {name:'Google Green Light',url:'https://sites.research.google/greenlight/',desc:{en:'AI traffic signal optimization, 70+ cities, -30% stops',zh:'AI交通信号优化,70+城市,减少30%停车'},cat:'tools',icon:'🚦'},
]
