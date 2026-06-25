import { useT } from '../contexts/LanguageContext';import LinkNav,{type ToolLink}from'../components/LinkNav';import styles from'./Page.module.css'
const links:ToolLink[]=[
{name:'John Deere AI',url:'https://www.deere.com/',desc:{en:'See & Spray: AI weed detection, autonomous tractors',zh:'See & Spray:AI杂草识别精准喷洒,自动驾驶拖拉机'},cat:'precision',icon:'🚜'},
{name:'Blue River Technology',url:'https://www.bluerivertechnology.com/',desc:{en:'Computer vision for precision spraying, 90% herbicide reduction',zh:'计算机视觉精准喷洒,除草剂用量减少90%'},cat:'precision',icon:'💧'},
{name:'FarmBot',url:'https://farm.bot/',desc:{en:'Open-source CNC farming robot, precision planting',zh:'开源CNC农业机器人,精准播种/浇水/除草'},cat:'precision',icon:'🤖'},
{name:'Carbon Robotics',url:'https://carbonrobotics.com/',desc:{en:'LaserWeeder: AI laser weed control, 200K plants/hour',zh:'LaserWeeder:AI激光除草,每小时20万株'},cat:'precision',icon:'⚡'},
{name:'Taranis',url:'https://www.taranis.ag/',desc:{en:'AI crop intelligence: drone imagery, sub-millimeter',zh:'AI作物智能:无人机图像,亚毫米级识别'},cat:'monitoring',icon:'🛩️'},
{name:'Climate FieldView',url:'https://climate.com/',desc:{en:'Bayer, AI field monitoring, 250M+ acres mapped',zh:'拜耳旗下,AI农田监测,2.5亿+英亩数字化'},cat:'monitoring',icon:'🌦️'},
{name:'Ceres Imaging',url:'https://www.ceresimaging.net/',desc:{en:'AI aerial spectral imaging, irrigation optimization',zh:'AI航空光谱成像,灌溉优化,病虫害早期发现'},cat:'monitoring',icon:'📷'},
{name:'Arable',url:'https://www.arable.com/',desc:{en:'AI in-field sensor, crop + weather + soil analytics',zh:'AI田间传感器,作物/气象/土壤一站式分析'},cat:'monitoring',icon:'🌱'},
{name:'Plantix',url:'https://plantix.net/',desc:{en:'AI crop disease diagnosis via photo, 30M+ downloads',zh:'AI拍照识别作物病虫害,3000万+下载'},cat:'monitoring',icon:'📱'},
{name:'Farmwise',url:'https://farmwise.io/',desc:{en:'AI weeding robots, computer vision + deep learning',zh:'AI除草机器人,计算机视觉+深度学习'},cat:'monitoring',icon:'🌿'},
{name:'CropX',url:'https://www.cropx.com/',desc:{en:'AI soil sensing + irrigation management platform',zh:'AI土壤传感+灌溉管理,节水30-50%'},cat:'monitoring',icon:'💧'},
{name:'Gro Intelligence',url:'https://www.gro-intelligence.com/',desc:{en:'AI agricultural data platform, climate + yield models',zh:'AI农业数据平台,气候+产量+市场预测'},cat:'yield',icon:'📊'},
{name:'Cainthus',url:'https://www.cainthus.com/',desc:{en:'AI cow facial recognition, feed + health monitoring',zh:'AI奶牛面部识别,饲料+健康监测'},cat:'yield',icon:'🐄'},
{name:'Descartes Labs',url:'https://descarteslabs.com/',desc:{en:'AI satellite imagery, crop yield forecasting',zh:'AI卫星图像分析,作物产量预测,供应链洞察'},cat:'yield',icon:'🛰️'},
{name:'AgroScout',url:'https://agroscout.com/',desc:{en:'Drone + AI crop monitoring, early pest detection',zh:'无人机+AI作物监测,病虫害早期检测'},cat:'yield',icon:'🔭'},
{name:'Harvest CROO',url:'https://www.harvestcroo.com/',desc:{en:'AI robotic strawberry harvester, 8 acres/day',zh:'AI草莓采摘机器人,每天8英亩'},cat:'harvest',icon:'🍓'},
{name:'Abundant Robotics',url:'https://www.abundantrobotics.com/',desc:{en:'AI apple harvesting, vacuum-based picker',zh:'AI苹果采摘机器人,真空吸取不伤果'},cat:'harvest',icon:'🍎'},
{name:'Tortuga AgTech',url:'https://www.tortugaagtech.com/',desc:{en:'AI fruit-picking + forecasting + pest management',zh:'AI水果采摘+产量预测+病虫害管理一体化'},cat:'harvest',icon:'🐢'},
{name:'Iron Ox',url:'https://ironox.com/',desc:{en:'AI-controlled greenhouse robots, 90% less water',zh:'AI智能温室机器人,节水90%'},cat:'harvest',icon:'🏡'},
{name:'Bowery Farming',url:'https://boweryfarming.com/',desc:{en:'AI vertical farming, computer vision + automation',zh:'AI垂直农业,计算机视觉+自动化,零农药'},cat:'harvest',icon:'🌿'},
]
export default function AgricultureOverview({ scrollTo }:{ scrollTo?: string }){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>🌾 {L('AI Agriculture','AI 智慧农业','AI 智慧農業')}</h2><p className={styles.subtitle}>{L('20 AI tools — Precision Farming, Monitoring, Yield, Harvest','20款AI农业工具——精准农业、作物监测、产量预测、自动收割','20款AI農業工具——精準農業、作物監測、產量預測、自動收割')}</p></div>
<LinkNav links={links} lang={lang as'en'|'zh-CN'|'zh-TW'} color="#06b6d4" scrollTo={scrollTo} catNames={{precision:L('Precision Farming','精准农业','精準農業'),monitoring:L('Crop Monitoring','作物监测','作物監測'),yield:L('Yield Prediction','产量预测','產量預測'),harvest:L('Auto Harvesting','自动收割','自動收割')}}/></div>)}
