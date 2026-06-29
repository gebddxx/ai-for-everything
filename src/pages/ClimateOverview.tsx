import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'
export default function ClimateOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (<div className={styles.page}>
    <div className={styles.head}><h2 className={styles.title}>🌍 {L('AI 環保氣候','AI for Climate','AI 环保气候')}</h2><p className={styles.subtitle}>{L('AI如何應對氣候變化：碳追踪、氣象預測、生物多樣性保護','How AI fights climate change: carbon tracking, weather prediction, biodiversity','AI如何应对气候变化：碳追踪、气象预测、生物多样性保护')}</p></div>
    <section className={styles.chart} style={{marginBottom:20}}>
      <div style={{height:1,background:'var(--border)',margin:'36px 0 20px'}} /><h3 style={{fontSize:17,fontWeight:700,color:'var(--text)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>{L('AI正在應對氣候變化','AI环保正在改变什么','AI is Fighting Climate Change')}</h3>
      <p style={{color:'var(--text-secondary)',lineHeight:1.8,fontSize:14,marginBottom:12}}>{L('AI is a key technology in fighting climate change. Google DeepMind boosted wind power value by 20% with AI; AI precisely tracks global carbon emissions and monitors deforestation and methane leaks from space; AI weather forecasting improved typhoon path accuracy by 30%. BCG reports AI can reduce global GHG emissions by 5-10% by 2030 — equivalent to the EU annual emissions.','AI是应对气候变化的关键技术。Google DeepMind用AI将风电价值提升20%；AI精确追踪全球碳排放，从太空监测森林砍伐和甲烷泄漏；AI气象预测将台风路径预报精度提升30%，为防灾争取宝贵时间；AI优化工业流程每年可减少数十亿吨碳排放。波士顿咨询报告指出，AI到2030年可帮助全球减少5-10%温室气体排放，相当于欧盟全年排放量。','AI是應對氣候變化的關鍵技術。Google DeepMind用AI將風電價值提升20%；AI精確追蹤全球碳排放，從太空監測森林砍伐和甲烷洩漏；AI氣象預測將颱風路徑預報精度提升30%。波士頓諮詢報告指出，AI到2030年可幫助全球減少5-10%溫室氣體排放，相當於歐盟全年排放量。')}</p>
    </section>
    <section className={styles.chart} style={{marginBottom:20}}>
      <div style={{height:1,background:'var(--border)',margin:'36px 0 20px'}} /><h3 style={{fontSize:17,fontWeight:700,color:'var(--text)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>{L('前沿應用場景','前沿应用场景','Cutting-Edge Applications')}</h3>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:12}}>
        {[{icon:'🛰️',t:L('AI碳追蹤','AI碳追踪','Carbon Tracking'),d:L('衛星+AI監測全球碳排放和甲烷洩漏。Climate TRACE用AI和衛星數據追蹤全球7萬+排放源。GHGSat的AI衛星能精確定位單個工廠的甲烷洩漏。','卫星+AI监测全球碳排放和甲烷泄漏。Climate TRACE用AI和卫星数据追踪全球7万+排放源。GHGSat的AI卫星能精确定位单个工厂的甲烷泄漏。Kayrros用AI分析卫星图像发现全球1,800+超级排放源。','Satellite+AI monitors global carbon emissions and methane leaks. Climate TRACE uses AI and satellite data to track 70K+ emission sources. GHGSat AI satellites pinpoint methane leaks at individual factories. Kayrros discovered 1,800+ super-emitters globally using AI.')},
        {icon:'🌪️',t:L('AI氣象預測','AI气象预测','Weather Prediction'),d:L('AI將天氣預報精度和速度大幅提升。華為盤古氣象大模型用AI在1.4秒完成7天全球天氣預報，比傳統方法快1萬倍。Google GraphCast在90%指標上優於歐洲中期天氣預報中心。','AI将天气预报精度和速度大幅提升。华为盘古气象大模型用AI在1.4秒完成7天全球天气预报，比传统方法快1万倍。Google GraphCast在90%的指标上优于欧洲中期天气预报中心。DeepMind的降水预测模型将短时降雨预报准确率提升20%。','AI dramatically improves weather forecast accuracy and speed. Huawei Pangu-Weather completes 7-day global forecast in 1.4 seconds — 10,000x faster than traditional methods. Google GraphCast outperforms ECMWF on 90% of metrics. DeepMind precipitation model boosts short-term rainfall accuracy by 20%.')},
        {icon:'🌳',t:L('AI生態保護','AI生态保护','Biodiversity'),d:L('AI分析聲學和圖像數據監測瀕危物種。Rainforest Connection用舊手機+AI監測非法砍伐。微軟AI for Earth資助700+環保AI項目。中國用AI+無人機監測東北虎種群動態。','AI分析声学和图像数据监测濒危物种。Rainforest Connection用旧手机+AI监测非法砍伐，保护2500+平方公里雨林。微软AI for Earth资助700+环保AI项目。中国用AI+无人机监测东北虎种群动态。','AI analyzes acoustic and image data to monitor endangered species. Rainforest Connection uses old phones+AI to detect illegal logging, protecting 2,500+ sq km of rainforest. Microsoft AI for Earth funds 700+ conservation AI projects. China uses AI+drones to monitor Siberian tiger populations.')},
        {icon:'♻️',t:L('AI廢物管理','AI废物管理','Waste Management'),d:L('計算機視覺+機器人自動分揀垃圾。AMP Robotics用AI每小時分揀80噸可回收物，準確率99%。Greyparrot的AI廢物分析系統部署在20國。','计算机视觉+机器人自动分拣垃圾。AMP Robotics用AI每小时分拣80吨可回收物，准确率99%。Greyparrot的AI废物分析系统部署在20国，年分析250亿+废品。中国盈峰环境用AI垃圾分类和收运优化。','CV+robots auto-sort waste. AMP Robotics sorts 80 tons of recyclables per hour at 99% accuracy with AI. Greyparrot AI waste analytics deployed in 20 countries, analyzing 25B+ waste items annually. Chinese Infore Environment uses AI for waste classification and collection optimization.')},
      ].map(item => (<div key={item.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 4px'}}>{item.icon} {item.t}</h4><p style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.7,margin:0}}>{item.d}</p></div>))}
      </div>
    </section>
    <section className={styles.chart} style={{marginBottom:20}}>
      <div style={{height:1,background:'var(--border)',margin:'36px 0 20px'}} /><h3 style={{fontSize:17,fontWeight:700,color:'var(--text)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>{L('關鍵數據','关键数据','Key Metrics')}</h3>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:10}}>
        {[{v:'5-10%',l:L('2030年AI減排','2030年AI减排','2030 AI Carbon Cut')},{v:'10,000×',l:L('AI天氣預報加速','AI天气预报加速','AI Forecast Speed')},{v:'70K+',l:L('AI追蹤排放源','AI追踪排放源','Emission Sources')},{v:'700+',l:L('微軟AI環保項目','微软AI环保项目','MS AI Earth Proj')}].map(m => (<div key={m.l} style={{textAlign:'center',padding:'16px 12px',background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><div style={{fontSize:24,fontWeight:800,color:'var(--primary)'}}>{m.v}</div><div style={{fontSize:12,color:'var(--text-secondary)',marginTop:4}}>{m.l}</div></div>))}
      </div>
    </section>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12,marginTop:24}}>{L('行業工具導航','行业工具导航','Industry Tool Directory')}</h3>
    <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#10b981" />
  </div>)}
const links: ToolLink[] = [
  {name:'Climate TRACE',url:'https://climatetrace.org/',desc:{en:'AI+satellite global carbon tracking, 70K+ sources',zh:'AI+卫星全球碳排放追踪,覆盖7万+排放源'},cat:'tools',icon:'🛰️'},
  {name:'华为盘古气象',url:'https://www.huaweicloud.com/',desc:{en:'AI weather model, 7-day global forecast in 1.4s',zh:'AI气象大模型,1.4秒完成7天全球预报'},cat:'tools',icon:'🌪️'},
  {name:'Google GraphCast',url:'https://deepmind.google/',desc:{en:'AI weather, 90% metrics beat ECMWF',zh:'AI天气预报,90%指标超欧洲中期天气预报中心'},cat:'tools',icon:'🔵'},
  {name:'GHGSat',url:'https://www.ghgsat.com/',desc:{en:'AI satellite methane detection, per-facility level',zh:'AI卫星甲烷检测,精确到单个工厂级别'},cat:'tools',icon:'🛸'},
  {name:'AMP Robotics',url:'https://www.amprobotics.com/',desc:{en:'AI waste sorting, 80 tons/hr, 99% accuracy',zh:'AI垃圾分拣,每小时80吨,准确率99%'},cat:'tools',icon:'🤖'},
  {name:'Rainforest Connection',url:'https://rfcx.org/',desc:{en:'AI rainforest protection, old phones + acoustic AI',zh:'AI雨林保护,旧手机+声学AI监测非法砍伐'},cat:'tools',icon:'🌳'},
]
