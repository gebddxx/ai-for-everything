import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

export default function AgricultureOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e

  return (
    <div className={styles.page}>
      <div className={styles.head}><h2 className={styles.title}>🌾 {L('AI 智慧農業','AI in Agriculture','AI 智慧农业')}</h2><p className={styles.subtitle}>{L('AI如何實現精準農業、作物監測和自動收割','How AI enables precision farming, crop monitoring, and automated harvesting','AI如何实现精准农业、作物监测和自动收割')}</p></div>

      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:"var(--border)",margin:"36px 0 20px"}} /><h3 style={{fontSize:17,fontWeight:700,color:"var(--text)",marginBottom:16,display:"flex",alignItems:"center",gap:8}}>{L('AI正在改變農業','AI农业正在改变什么','AI is Transforming Agriculture')}</h3>
        <p style={{color:'var(--text-secondary)',lineHeight:1.8,fontSize:14,marginBottom:12}}>{L('Global population is projected to reach 10B by 2050 — food production must increase 70%. AI is key. Precision agriculture uses AI+drones to monitor crop health per square meter, reducing herbicide use by 90%; AI satellite imagery enables county-level yield forecasts globally; autonomous tractors operate 24/7 at 5x human efficiency. China leads in agri-drones: DJI Agriculture has covered 2B+ mu, XAG serves 5M+ farmers.','全球人口预计2050年达100亿，粮食产量需提升70%——AI是实现这一目标的关键。精准农业用AI+无人机识别每平方米的作物健康，将除草剂用量减少90%；AI卫星图像分析让全球粮食产量预测精确到县级；自动驾驶拖拉机24小时作业，效率是人工的5倍。中国作为农业大国，大疆农业无人机累计作业超20亿亩，极飞科技服务超500万农户。','全球人口預計2050年達100億，糧食產量需提升70%——AI是實現這一目標的關鍵。精準農業用AI+無人機識別每平方米的作物健康，將除草劑用量減少90%；AI衛星圖像分析讓全球糧食產量預測精確到縣級；自動駕駛拖拉機24小時作業，效率是人工的5倍。中国作為農業大國，大疆農業無人機累計作業超20億畝。')}</p>
      </section>

      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:"var(--border)",margin:"36px 0 20px"}} /><h3 style={{fontSize:17,fontWeight:700,color:"var(--text)",marginBottom:16,display:"flex",alignItems:"center",gap:8}}>{L('前沿應用場景','前沿应用场景','Cutting-Edge Applications')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:12}}>
          {[
            {icon:'🚜',t:L('精準農業','精准农业','Precision Farming'),d:L('GPS+AI實現釐米級精準播種、施肥和噴藥。John Deere See & Spray系統節省90%除草劑。Carbon Robotics雷射除草機器人每小時處理20萬株雜草。','GPS+AI实现厘米级精准播种、施肥和喷药。John Deere的See & Spray系统用计算机视觉识别杂草并精准喷洒，除草剂节省90%。Carbon Robotics的激光除草机器人每小时处理20万株杂草。','GPS+AI enables centimeter-level precision in seeding, fertilizing and spraying. John Deere See & Spray uses CV to identify weeds for targeted spraying, saving 90% herbicide. Carbon Robotics LaserWeeder handles 200K weeds/hour.')},
            {icon:'🛩️',t:L('AI作物監測','AI作物监测','Crop Monitoring'),d:L('衛星+無人機多光譜圖像+AI分析作物健康、病蟲害和水分。Plantix用手機拍照即識別200+種作物病蟲害，全球下載超3000萬。','卫星+无人机多光谱图像+AI分析作物健康、病虫害和水分。Climate FieldView已数字化2.5亿+英亩农田。Plantix用手机拍照即识别200+种作物病虫害，全球下载超3000万。','Satellite + drone multispectral imagery + AI analyze crop health, pests and water. Climate FieldView has digitized 250M+ acres. Plantix identifies 200+ crop diseases from a photo, with 30M+ global downloads.')},
            {icon:'🤖',t:L('AI自動收割','AI自动收割','Auto Harvesting'),d:L('計算機視覺引導機械臂精準採摘水果。Harvest CROO每天採摘8英畝草莓。Iron Ox的AI溫室機器人實現90%節水、零農藥種植。','计算机视觉引导机械臂精准采摘水果。Harvest CROO每天采摘8英亩草莓，Tortuga AgTech用AI实现水果采摘+产量预测一体化。Iron Ox的AI温室机器人实现90%节水、零农药种植。','CV-guided robotic arms precisely pick fruits. Harvest CROO picks 8 acres of strawberries daily. Tortuga AgTech integrates picking + yield forecasting. Iron Ox AI greenhouses achieve 90% water savings with zero pesticides.')},
            {icon:'📊',t:L('產量預測','产量预测','Yield Prediction'),d:L('AI融合氣象、土壤和衛星數據，提前數月預測產量。Descartes Labs用衛星圖像預測全球糧食產量。','AI融合气象、土壤和卫星数据，提前数月预测产量。Descartes Labs用卫星图像预测全球粮食产量。Gro Intelligence的AI平台让农产品交易商和保险公司做出数据驱动决策。中国的佳格天地利用卫星遥感+AI服务数百万亩农田。','AI fuses weather, soil and satellite data to predict yields months ahead. Descartes Labs forecasts global crop yields from satellite imagery. Gro Intelligence enables data-driven decisions for traders and insurers. Chinese Gago provides satellite+AI services for millions of acres.')},
          ].map(item => (<div key={item.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 4px'}}>{item.icon} {item.t}</h4><p style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.7,margin:0}}>{item.d}</p></div>))}
        </div>
      </section>

      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:"var(--border)",margin:"36px 0 20px"}} /><h3 style={{fontSize:17,fontWeight:700,color:"var(--text)",marginBottom:16,display:"flex",alignItems:"center",gap:8}}>{L('關鍵數據','关键数据','Key Metrics')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:10}}>
          {[{v:'↓90%',l:L('除草劑用量減少','除草剂用量减少','Herbicide Reduction')},{v:'20亿亩+',l:L('大疆農業無人機作業','大疆农业无人机累计作业','DJI Agri Coverage')},{v:'200K/h',l:L('雷射除草速度','激光除草速度','Laser Weeding Speed')},{v:'5×',l:L('自動駕駛vs人工','自动驾驶农机vs人工','Autonomous vs Manual')}].map(m => (<div key={m.l} style={{textAlign:'center',padding:'16px 12px',background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><div style={{fontSize:24,fontWeight:800,color:'var(--primary)'}}>{m.v}</div><div style={{fontSize:12,color:'var(--text-secondary)',marginTop:4}}>{m.l}</div></div>))}
        </div>
      </section>

      <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12,marginTop:24}}>{L('行業工具導航','行业工具导航','Industry Tool Directory')}</h3>
      <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#06b6d4" />
    </div>
  )
}

const links: ToolLink[] = [
  {name:'John Deere AI',url:'https://www.deere.com/',desc:{en:'See & Spray AI weed detection, autonomous tractors',zh:'See & Spray:AI杂草识别精准喷洒,自动驾驶拖拉机'},cat:'精准农业',icon:'🚜'},
  {name:'Carbon Robotics',url:'https://carbonrobotics.com/',desc:{en:'LaserWeeder: AI laser weed control, 200K plants/hour',zh:'LaserWeeder:AI激光除草,每小时20万株'},cat:'精准农业',icon:'⚡'},
  {name:'极飞科技',url:'https://www.xa.com/',desc:{en:'Chinese agri-drone leader, AI precision spraying',zh:'国产农业无人机龙头,AI精准喷洒/播种'},cat:'精准农业',icon:'🛸'},
  {name:'大疆农业',url:'https://ag.dji.com/',desc:{en:'DJI agriculture drones, AI crop spraying, 2B+ mu',zh:'大疆农业无人机,AI植保喷洒,累超20亿亩'},cat:'精准农业',icon:'🚁'},
  {name:'Climate FieldView',url:'https://climate.com/',desc:{en:'Bayer AI field monitoring, 250M+ acres mapped',zh:'拜耳旗下,AI农田监测,2.5亿+英亩数字化'},cat:'作物监测',icon:'🌦️'},
  {name:'Taranis',url:'https://www.taranis.ag/',desc:{en:'AI crop intelligence: drone imagery, sub-millimeter',zh:'AI作物智能:无人机图像,亚毫米级识别'},cat:'作物监测',icon:'🛩️'},
  {name:'Plantix',url:'https://plantix.net/',desc:{en:'AI crop disease diagnosis via photo, 30M+ downloads',zh:'AI拍照识别作物病虫害,3000万+下载'},cat:'作物监测',icon:'📱'},
  {name:'佳格天地',url:'https://www.gagogroup.cn/',desc:{en:'Chinese satellite agri-analytics, crop monitoring',zh:'国产卫星农业大数据,作物监测+气象分析'},cat:'作物监测',icon:'🛰️'},
  {name:'Descartes Labs',url:'https://descarteslabs.com/',desc:{en:'AI satellite imagery, crop yield forecasting',zh:'AI卫星图像分析,作物产量预测,供应链洞察'},cat:'产量预测',icon:'🛰️'},
  {name:'Gro Intelligence',url:'https://www.gro-intelligence.com/',desc:{en:'AI agricultural data platform, climate + yield models',zh:'AI农业数据平台,气候+产量+市场预测'},cat:'产量预测',icon:'📊'},
  {name:'麦飞科技',url:'https://www.maifei.com/',desc:{en:'Chinese AI agriculture, remote sensing + pest forecast',zh:'国产AI农业,遥感+病虫害预测'},cat:'产量预测',icon:'🌾'},
  {name:'Harvest CROO',url:'https://www.harvestcroo.com/',desc:{en:'AI robotic strawberry harvester, 8 acres/day',zh:'AI草莓采摘机器人,每天8英亩'},cat:'自动收割',icon:'🍓'},
  {name:'Iron Ox',url:'https://ironox.com/',desc:{en:'AI-controlled greenhouses, 90% less water, zero pesticide',zh:'AI智能温室,节水90%,零农药种植'},cat:'自动收割',icon:'🏡'},
  {name:'丰疆智能',url:'https://www.fjdynamics.com/',desc:{en:'Chinese smart agri robots, autonomous tractors',zh:'国产智能农业机器人,自动驾驶农机'},cat:'自动收割',icon:'🤖'},
  {name:'中科原动力',url:'https://www.self-driving.com.cn/',desc:{en:'Chinese autonomous farm machinery AI',zh:'国产自动驾驶农机AI,无人作业系统'},cat:'自动收割',icon:'🚜'},
]
