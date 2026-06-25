import { useT } from '../contexts/LanguageContext';import LinkNav,{type ToolLink}from'../components/LinkNav';import styles from'./Page.module.css'
const links:ToolLink[]=[
{name:'Aidoc',url:'https://www.aidoc.com/',desc:{en:'AI radiology: flag stroke, PE, C-spine in real-time',zh:'AI影像分析:实时识别脑卒中、肺栓塞、颈椎骨折'},cat:'imaging',icon:'🧠'},
{name:'Qure.ai',url:'https://qure.ai/',desc:{en:'Chest X-ray, CT head, MSK AI interpretation',zh:'胸部X光/头部CT/肌骨AI智能解读'},cat:'imaging',icon:'🫁'},
{name:'Butterfly Network',url:'https://www.butterflynetwork.com/',desc:{en:'AI-powered handheld ultrasound, point-of-care',zh:'AI手持超声设备,即时检测,基层可用'},cat:'imaging',icon:'🦋'},
{name:'Viz.ai',url:'https://www.viz.ai/',desc:{en:'AI stroke detection + care coordination platform',zh:'AI脑卒中检测+跨科室协同救治平台'},cat:'imaging',icon:'🧠'},
{name:'PathAI',url:'https://www.pathai.com/',desc:{en:'AI pathology: cancer diagnosis, clinical trials',zh:'AI病理分析:癌症诊断精准化,临床试验支持'},cat:'imaging',icon:'🔬'},
{name:'Lunit',url:'https://www.lunit.io/',desc:{en:'AI mammography + chest CT, 3D structure analysis',zh:'AI乳腺摄影+胸部CT,3D结构分析'},cat:'imaging',icon:'📊'},
{name:'Isomorphic Labs',url:'https://www.isomorphiclabs.com/',desc:{en:'AlphaFold-based AI drug discovery, DeepMind spin-off',zh:'AlphaFold驱动AI药物发现,DeepMind子公司'},cat:'drug',icon:'💊'},
{name:'Recursion Pharma',url:'https://www.recursion.com/',desc:{en:'AI drug repurposing, automated cell imaging',zh:'AI老药新用,自动化细胞成像筛选'},cat:'drug',icon:'🧪'},
{name:'Insilico Medicine',url:'https://insilico.com/',desc:{en:'End-to-end AI drug discovery, generative chemistry',zh:'端到端AI药物研发,生成式化学,抗衰老'},cat:'drug',icon:'🧬'},
{name:'BenevolentAI',url:'https://www.benevolent.com/',desc:{en:'AI knowledge graph for drug target discovery',zh:'AI知识图谱挖掘药物靶点,罕见病研发'},cat:'drug',icon:'🔗'},
{name:'Atomwise',url:'https://www.atomwise.com/',desc:{en:'AI virtual screening, structure-based drug design',zh:'AI虚拟筛选,基于结构的药物设计'},cat:'drug',icon:'⚛️'},
{name:'BioNTech InstaDeep',url:'https://www.instadeep.com/',desc:{en:'AI for immunotherapy design, mRNA optimization',zh:'AI免疫疗法设计,mRNA序列优化'},cat:'drug',icon:'🧬'},
{name:'Babylon Health',url:'https://www.babylonhealth.com/',desc:{en:'AI symptom checker + video consultation',zh:'AI症状自查+视频问诊,基础医疗数字化'},cat:'clinical',icon:'🏥'},
{name:'Ada Health',url:'https://ada.com/',desc:{en:'AI symptom assessment, personalized triage',zh:'AI症状评估,个性化分诊导航'},cat:'clinical',icon:'🩺'},
{name:'IDx-DR',url:'https://www.digitaldiagnostics.com/',desc:{en:'FDA-approved autonomous AI diagnosis for diabetic retinopathy',zh:'FDA批准的首个自主AI诊断:糖尿病性视网膜病变'},cat:'clinical',icon:'👁️'},
{name:'Paige AI',url:'https://paige.ai/',desc:{en:'AI prostate cancer detection, FDA breakthrough',zh:'AI前列腺癌检测,FDA突破性设备认定'},cat:'clinical',icon:'🔬'},
{name:'Buoy Health',url:'https://www.buoyhealth.com/',desc:{en:'AI triage & symptom navigator, Harvard innovation',zh:'AI分诊+症状导航,哈佛创新实验室孵化'},cat:'clinical',icon:'🛟'},
{name:'Woebot Health',url:'https://woebothealth.com/',desc:{en:'AI mental health companion, CBT-based chatbot',zh:'AI心理健康伴侣,认知行为疗法聊天机器人'},cat:'care',icon:'🧠'},
{name:'Care.ai',url:'https://care.ai/',desc:{en:'AI patient monitoring, fall prevention, vitals',zh:'AI患者监测:跌倒预防/生命体征/行为分析'},cat:'care',icon:'🛌'},
{name:'Medisafe',url:'https://www.medisafe.com/',desc:{en:'AI medication adherence, personalized reminders',zh:'AI用药依从性管理,个性化提醒'},cat:'care',icon:'💊'},
{name:'Twistle',url:'https://www.twistle.com/',desc:{en:'AI patient engagement, automated care journeys',zh:'AI患者互动,自动化护理路径'},cat:'care',icon:'💬'},
{name:'Sensely',url:'https://www.sensely.com/',desc:{en:'AI virtual nurse, symptom triage, multilingual',zh:'AI虚拟护士,症状分诊,多语种支持'},cat:'care',icon:'👩‍⚕️'},
]
export default function HealthcareOverview({ scrollTo }:{ scrollTo?: string }){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>🏥 {L('AI Healthcare','AI 医疗健康','AI 醫療健康')}</h2><p className={styles.subtitle}>{L('22 AI tools — Imaging, Drug Discovery, Clinical, Patient Care','22款AI医疗工具——医学影像、药物研发、临床决策、患者护理','22款AI醫療工具——醫學影像、藥物研發、臨床決策、患者護理')}</p></div>
<LinkNav links={links} lang={lang as'en'|'zh-CN'|'zh-TW'} color="#10b981" scrollTo={scrollTo} catNames={{imaging:L('Medical Imaging','医学影像','醫學影像'),drug:L('Drug Discovery','药物研发','藥物研發'),clinical:L('Clinical Decision','临床决策','臨床決策'),care:L('Patient Care','患者护理','患者護理')}}/></div>)}
