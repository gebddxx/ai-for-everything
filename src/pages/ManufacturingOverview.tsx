import { useT } from '../contexts/LanguageContext';import LinkNav,{type ToolLink}from'../components/LinkNav';import styles from'./Page.module.css'
const links:ToolLink[]=[
{name:'Augury',url:'https://www.augury.com/',desc:{en:'AI vibration + ultrasound analytics, machine health',zh:'AI振动+超声波分析,机器健康监测,预测故障'},cat:'maintenance',icon:'🔊'},
{name:'Falkonry',url:'https://falkonry.com/',desc:{en:'AI pattern recognition for predictive maintenance',zh:'AI模式识别预测性维护,无需数据科学家'},cat:'maintenance',icon:'🦅'},
{name:'Uptake',url:'https://www.uptake.com/',desc:{en:'AI industrial analytics, fleet-level PdM',zh:'AI工业分析平台,车队级预测性维护'},cat:'maintenance',icon:'📈'},
{name:'SparkCognition',url:'https://www.sparkcognition.com/',desc:{en:'AI for oil & gas, aerospace, defense PdM',zh:'AI预测性维护:石油天然气/航空航天/国防'},cat:'maintenance',icon:'✨'},
{name:'C3 AI Reliability',url:'https://c3.ai/',desc:{en:'Enterprise AI suite: predictive maintenance, energy',zh:'企业AI套件:预测性维护/能源管理/异常检测'},cat:'maintenance',icon:'🏭'},
{name:'天泽智云',url:'https://www.cyber-insight.com/',desc:{en:'Chinese industrial AI, predictive maintenance',zh:'国产工业AI,预测性维护+智能诊断'},cat:'maintenance',icon:'☁️'},
{name:'Instrumental',url:'https://www.instrumental.com/',desc:{en:'AI visual inspection on assembly lines',zh:'AI视觉检测,产线上自动识别装配缺陷'},cat:'quality',icon:'👁️'},
{name:'Landing AI',url:'https://landing.ai/',desc:{en:'Andrew Ng, visual inspection platform, LandingLens',zh:'吴恩达创办,AI视觉质检平台LandingLens'},cat:'quality',icon:'🔍'},
{name:'Elementary Robotics',url:'https://www.elementary.ai/',desc:{en:'AI quality + traceability, 3D vision inspection',zh:'AI质量检测+可追溯,3D视觉全检'},cat:'quality',icon:'🤖'},
{name:'DarwinAI',url:'https://www.darwinai.ca/',desc:{en:'Explainable AI for defect detection, PCB inspection',zh:'可解释AI缺陷检测,PCB电路板智能质检'},cat:'quality',icon:'🧬'},
{name:'思谋科技',url:'https://www.smartedges.cn/',desc:{en:'Chinese AI visual inspection leader, manufacturing',zh:'国产AI视觉质检领导者,智能制造全栈方案'},cat:'quality',icon:'👁️'},
{name:'阿丘科技',url:'https://www.aqrose.com/',desc:{en:'Chinese AI industrial vision, defect detection',zh:'国产AI工业视觉,缺陷检测+分拣定位'},cat:'quality',icon:'🔎'},
{name:'Llamasoft (Coupa)',url:'https://www.coupa.com/',desc:{en:'AI supply chain design, digital twin simulation',zh:'AI供应链设计,数字孪生仿真,what-if分析'},cat:'supplychain',icon:'🦙'},
{name:'FourKites',url:'https://www.fourkites.com/',desc:{en:'AI real-time supply chain visibility, ETA prediction',zh:'AI实时供应链可视化,ETA精准预测'},cat:'supplychain',icon:'🛰️'},
{name:'Flexport',url:'https://www.flexport.com/',desc:{en:'AI-powered freight forwarding & supply chain OS',zh:'AI驱动的货运代理+供应链操作系统'},cat:'supplychain',icon:'🚢'},
{name:'Kinaxis',url:'https://www.kinaxis.com/',desc:{en:'AI concurrent supply chain planning, RapidResponse',zh:'AI并行供应链计划,RapidResponse平台'},cat:'supplychain',icon:'⚡'},
{name:'Project44',url:'https://www.project44.com/',desc:{en:'AI supply chain visibility, multi-modal tracking',zh:'AI供应链可视化,多式联运实时追踪'},cat:'supplychain',icon:'📦'},
{name:'准时达',url:'https://www.zhunshida.com/',desc:{en:'Foxconn supply chain AI, global logistics',zh:'富士康供应链AI,全球制造物流智慧管理'},cat:'supplychain',icon:'🏭'},
{name:'Siemens Xcelerator',url:'https://www.sw.siemens.com/',desc:{en:'Industrial metaverse, digital twin, factory simulation',zh:'工业元宇宙,数字孪生,工厂全生命周期仿真'},cat:'digitaltwin',icon:'🏗️'},
{name:'Nvidia Omniverse',url:'https://www.nvidia.com/omniverse/',desc:{en:'AI digital twin platform, factory of the future',zh:'AI数字孪生平台,未来工厂,物理级精确模拟'},cat:'digitaltwin',icon:'🟢'},
{name:'Tulip Interfaces',url:'https://tulip.co/',desc:{en:'No-code IIoT platform, digital work instructions',zh:'无代码工业物联网平台,数字化作业指导'},cat:'digitaltwin',icon:'🌷'},
{name:'Cognitive3D',url:'https://www.cognitive3d.com/',desc:{en:'Spatial analytics for digital twin & VR training',zh:'空间分析数字孪生+VR培训,3D行为洞察'},cat:'digitaltwin',icon:'🧠'},
{name:'Drishti',url:'https://www.drishti.com/',desc:{en:'AI video analytics for manual assembly lines',zh:'AI视频分析手动装配线,动作识别+效率优化'},cat:'digitaltwin',icon:'📹'},
{name:'树根互联',url:'https://www.rootcloud.com/',desc:{en:'Sany Rootcloud, IIoT + digital twin platform',zh:'三一重工旗下,工业互联网+数字孪生平台'},cat:'digitaltwin',icon:'🌳'},
{name:'海尔卡奥斯',url:'https://www.cosmoplat.com/',desc:{en:'Haier COSMOPlat, industrial internet + AI',zh:'海尔工业互联网平台,大规模定制+AI'},cat:'digitaltwin',icon:'🏭'},
]
export default function ManufacturingOverview({ scrollTo }:{ scrollTo?: string }){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>🏗️ {L('Manufacturing','智能制造','智慧製造')}</h2><p className={styles.subtitle}>{L('25 AI tools — Maintenance, Quality, Supply Chain, Digital Twin','25款AI制造工具——预测维护、质检、供应链、数字孪生','25款AI製造工具——預測維護、質檢、供應鏈、數字孿生')}</p></div>
<LinkNav links={links} lang={lang as'en'|'zh-CN'|'zh-TW'} color="#ef4444" scrollTo={scrollTo} catNames={{maintenance:L('Predictive Maintenance','预测性维护','預測性維護'),quality:L('Quality Inspection','质量检测','質量檢測'),supplychain:L('Supply Chain','供应链优化','供應鏈優化'),digitaltwin:L('Digital Twins','数字孪生','數字孿生')}}/></div>)}
