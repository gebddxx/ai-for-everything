import { useT } from '../contexts/LanguageContext';import LinkNav,{type ToolLink}from'../components/LinkNav';import styles from'./Page.module.css'
const links:ToolLink[]=[
{name:'Khanmigo',url:'https://www.khanacademy.org/khan-labs',desc:{en:'Khan Academy AI tutor, GPT-4, Socratic dialogue',zh:'可汗学院AI导师,GPT-4驱动,苏格拉底式对话教学'},cat:'personalized',icon:'🧑‍🏫'},
{name:'Duolingo Max',url:'https://www.duolingo.com/max',desc:{en:'AI language learning, Explain My Answer, Roleplay',zh:'AI语言学习,GPT-4解释答案+角色扮演对话'},cat:'personalized',icon:'🦉'},
{name:'Century Tech',url:'https://www.century.tech/',desc:{en:'AI personalized learning paths, neuroscience-based',zh:'AI个性化学习路径,认知神经科学驱动'},cat:'personalized',icon:'🧠'},
{name:'DreamBox Learning',url:'https://www.dreambox.com/',desc:{en:'K-8 AI adaptive math, 50K+ learning paths',zh:'K-8数学AI自适应,5万+个性化学习路径'},cat:'personalized',icon:'📐'},
{name:'Carnegie Learning',url:'https://www.carnegielearning.com/',desc:{en:'AI math + literacy, MATHia cognitive tutor',zh:'AI数学+读写,MATHia认知导学系统'},cat:'personalized',icon:'📝'},
{name:'Squirrel AI',url:'https://www.squirrelai.com/',desc:{en:'AI adaptive tutoring, 10M+ student profiles',zh:'松鼠AI自适应辅导,超千万学生画像,知识图谱'},cat:'personalized',icon:'🐿️'},
{name:'学而思AI',url:'https://www.xueersi.com/',desc:{en:'TAL Education AI, K-12 personalized tutoring',zh:'好未来学而思AI,K-12个性化辅导'},cat:'personalized',icon:'📚'},
{name:'猿辅导AI',url:'https://www.yuanfudao.com/',desc:{en:'Yuanfudao AI tutoring, 600M+ users',zh:'猿辅导AI辅导,6亿+用户,拍照搜题'},cat:'personalized',icon:'🐵'},
{name:'作业帮',url:'https://www.zuoyebang.com/',desc:{en:'AI homework Q&A, photo search for answers',zh:'AI拍题搜答案,在线答疑,学习辅导'},cat:'personalized',icon:'📷'},
{name:'Gradescope',url:'https://www.gradescope.com/',desc:{en:'AI auto-grading: math, CS, chemistry, handwritten',zh:'AI自动评分:数学/编程/化学/手写作业'},cat:'grading',icon:'✅'},
{name:'Turnitin AI',url:'https://www.turnitin.com/products/ai-writing-detection/',desc:{en:'AI writing detection + plagiarism check',zh:'AI写作检测+查重,全球200M+学生使用'},cat:'grading',icon:'🔎'},
{name:'批改网',url:'https://www.pigai.org/',desc:{en:'Chinese AI essay grading, English writing correction',zh:'AI批改英语作文,语法/词汇/结构全面纠错'},cat:'grading',icon:'✍️'},
{name:'Quizlet Q-Chat',url:'https://quizlet.com/qchat',desc:{en:'AI tutor powered by GPT, quizzes & flashcards',zh:'AI问答导师,GPT驱动,自动生成测验和记忆卡'},cat:'tutoring',icon:'📚'},
{name:'CheggMate',url:'https://www.chegg.com/cheggmate',desc:{en:'24/7 AI homework help, step-by-step solutions',zh:'24/7 AI作业辅导,逐步解析,GPT-4驱动'},cat:'tutoring',icon:'🎓'},
{name:'Photomath',url:'https://photomath.com/',desc:{en:'AI scan math problem, step-by-step explanation',zh:'AI拍照解题,逐步解析,覆盖基础数学到微积分'},cat:'tutoring',icon:'📸'},
{name:'Socratic by Google',url:'https://socratic.org/',desc:{en:'Google AI homework helper, multi-subject',zh:'Google AI作业助手,多学科覆盖,视觉识别'},cat:'tutoring',icon:'🔵'},
{name:'Brainly AI',url:'https://brainly.com/',desc:{en:'AI-powered peer learning, 350M+ users',zh:'AI驱动的同伴学习社区,3.5亿+用户'},cat:'tutoring',icon:'🧩'},
{name:'科大讯飞教育',url:'https://www.iflytek.com/',desc:{en:'iFlytek AI education: voice assessment, tutoring',zh:'科大讯飞AI教育:语音评测+个性化教学'},cat:'tutoring',icon:'🎙️'},
{name:'MagicSchool AI',url:'https://www.magicschool.ai/',desc:{en:'AI lesson plans, rubrics, IEPs for teachers',zh:'AI备课:教案/评分标准/个性化教育计划'},cat:'content',icon:'✨'},
{name:'Curipod',url:'https://curipod.com/',desc:{en:'AI interactive lesson generation, polls & drawings',zh:'AI生成互动课程,投票/绘画/讨论一键融入'},cat:'content',icon:'🎨'},
{name:'Diffit',url:'https://web.diffit.me/',desc:{en:'AI differentiation: adapt any text to any reading level',zh:'AI差异化教学:将任何文本适配到不同阅读水平'},cat:'content',icon:'📖'},
{name:'Eduaide.ai',url:'https://www.eduaide.ai/',desc:{en:'AI instructional design, 100+ resource types',zh:'AI教学设计助手,100+教学资源模板'},cat:'content',icon:'🏫'},
{name:'Notion AI',url:'https://www.notion.so/product/ai',desc:{en:'AI note-taking, Q&A from lecture notes, summaries',zh:'AI笔记:课堂笔记问答/摘要/闪卡自动生成'},cat:'content',icon:'📝'},
{name:'希沃AI',url:'https://www.seewo.com/',desc:{en:'Chinese smart classroom, AI interactive whiteboard',zh:'国产智慧课堂,AI互动白板+教学工具'},cat:'content',icon:'🖥️'},
{name:'雨课堂',url:'https://www.yuketang.cn/',desc:{en:'Tsinghua, AI smart classroom tools, analytics',zh:'清华出品,AI智慧教学工具+数据分析'},cat:'content',icon:'☔'},
]
export default function EducationOverview({ scrollTo }:{ scrollTo?: string }){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>📚 {L('Education','教育科技','教育科技')}</h2><p className={styles.subtitle}>{L('25 AI tools — Personalized Learning, Tutoring, Grading, Content','25款AI教育工具——个性化学习、智能辅导、自动评分、内容生成','25款AI教育工具——個性化學習、智能輔導、自動評分、內容生成')}</p></div>
<LinkNav links={links} lang={lang as'en'|'zh-CN'|'zh-TW'} color="#8b5cf6" scrollTo={scrollTo} catNames={{personalized:L('Personalized Learning','个性化学习','個性化學習'),tutoring:L('AI Tutoring','AI辅导','AI輔導'),grading:L('Auto Grading','自动评分','自動評分'),content:L('Content Generation','内容生成','內容生成')}}/></div>)}
