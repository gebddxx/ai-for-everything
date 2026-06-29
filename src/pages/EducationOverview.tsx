import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

export default function EducationOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e

  return (
    <div className={styles.page}>
      <div className={styles.head}><h2 className={styles.title}>📚 {L('AI in Education','AI 教育科技','AI 教育科技')}</h2><p className={styles.subtitle}>{L('How AI is personalizing learning, automating grading, and empowering teachers','AI如何实现个性化学习、自动评分和教师赋能','AI如何實現個性化學習、自動評分和教師賦能')}</p></div>

      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:"var(--border)",margin:"36px 0 20px"}} /><h3 style={{fontSize:17,fontWeight:700,color:"var(--text)",marginBottom:16,display:"flex",alignItems:"center",gap:8}}>{L('AI教育正在改变什么','AI is Transforming Education','AI正在改變教育')}</h3>
        <p style={{color:'var(--text-secondary)',lineHeight:1.8,fontSize:14,marginBottom:12}}>{L('AI正在从根本上改变教育的方式。自适应学习系统可以为每个学生动态生成个性化学习路径，因材施教不再是口号；AI自动批改将老师从重复劳动中解放，Gradescope批改效率是人工的15倍；AI辅导老师24小时在线答疑，教育公平在技术推动下成为现实。中国AI教育市场年增速超30%，猿辅导和学而思的数亿用户正在使用AI个性化学习。','AI正在從根本上改變教育的方式。自適應學習系統可以為每個學生動態生成個性化學習路徑，因材施教不再是口號；AI自動批改將老師從重複勞動中解放；AI輔導老師24小時在線答疑，教育公平在技術推動下成為現實。中國AI教育市場年增速超30%。','AI is fundamentally transforming education. Adaptive learning systems dynamically generate personalized paths for each student; AI auto-grading frees teachers from repetitive work — Gradescope is 15x more efficient than manual grading; AI tutors provide 24/7 support, making educational equity a reality. China\'s AI education market grows 30%+ annually, with Yuanfudao and TAL\'s hundreds of millions of users benefiting from AI personalization.')}</p>
      </section>

      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:"var(--border)",margin:"36px 0 20px"}} /><h3 style={{fontSize:17,fontWeight:700,color:"var(--text)",marginBottom:16,display:"flex",alignItems:"center",gap:8}}>{L('前沿应用场景','Cutting-Edge Applications','前沿應用場景')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:12}}>
          {[
            {icon:'🧑‍🏫',t:L('AI个性化学习','Personalized Learning','AI個性化學習'),d:L('知识图谱+AI分析每个学生的薄弱点，推送针对性练习。Khanmigo用苏格拉底式对话引导学生思考而非直接给答案。松鼠AI覆盖3000+细分知识点，数千万学员个性化路径。','Knowledge graphs + AI identify each student\'s weaknesses and push targeted practice. Khanmigo uses Socratic dialogue to guide thinking. Squirrel AI covers 3000+ knowledge points with personalized paths for millions.','知識圖譜+AI分析每個學生的薄弱點，推送針對性練習。Khanmigo用蘇格拉底式對話引導學生思考。')},
            {icon:'✅',t:L('AI自动评分','Auto Grading','AI自動評分'),d:L('不仅能批改选择题，还能评估作文和编程作业。Gradescope的AI评分准确率超95%。中国批改网每年处理数千万篇英语作文，秒级给出评分和纠错建议。','Beyond multiple-choice — AI grades essays and coding assignments. Gradescope achieves 95%+ accuracy. Chinese Pigai.org processes tens of millions of English essays annually with instant scoring and corrections.','不僅能批改選擇題，還能評估作文和程式作業。Gradescope的AI評分準確率超95%。中國批改網每年處理數千萬篇英語作文。')},
            {icon:'🤖',t:L('AI智能辅导','AI Tutoring','AI智能輔導'),d:L('24/7 AI导师，比人类辅导便宜90%。Photomath拍照即解数学题并给出分步解析。Duolingo Max用GPT-4实现角色扮演语言练习，用户留存提升200%。','24/7 AI tutors at 1/10 the cost of human tutoring. Photomath instantly solves math problems with step-by-step explanations. Duolingo Max uses GPT-4 for role-play language practice, boosting retention by 200%.','24/7 AI導師，成本僅為人工輔導的1/10。Photomath拍照即解數學題並給出逐步解析。Duolingo Max用GPT-4實現角色扮演語言練習。')},
            {icon:'📝',t:L('AI课程生成','Content Generation','AI課程生成'),d:L('AI辅助教师快速生成教案、测验和教学资源。MagicSchool AI帮助教师每周节省10+小时备课时间。Diffit一键将任何文本适配到不同阅读水平，实现真正的分层教学。','AI helps teachers generate lesson plans, quizzes, and resources. MagicSchool AI saves teachers 10+ hours/week. Diffit adapts any text to different reading levels with one click — true differentiated instruction.','AI輔助教師快速生成教案、測驗和教學資源。MagicSchool AI幫助教師每週節省10+小時備課時間。')},
          ].map(item => (<div key={item.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 4px'}}>{item.icon} {item.t}</h4><p style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.7,margin:0}}>{item.d}</p></div>))}
        </div>
      </section>

      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:"var(--border)",margin:"36px 0 20px"}} /><h3 style={{fontSize:17,fontWeight:700,color:"var(--text)",marginBottom:16,display:"flex",alignItems:"center",gap:8}}>{L('关键数据','Key Metrics','關鍵數據')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:10}}>
          {[{v:'15×',l:L('AI批改vs人工效率','AI vs Manual Grading','AI vs 人工效率')},{v:'+200%',l:L('AI辅导语言学习留存提升','Language Retention Boost','語言學習留存提升')},{v:'30%+',l:L('中国AI教育年增速','China AI Edu Growth','中國AI教育年增速')},{v:'10h/周',l:L('AI为教师节省时间','Teacher Time Saved','教師時間節省')}].map(m => (<div key={m.l} style={{textAlign:'center',padding:'16px 12px',background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><div style={{fontSize:24,fontWeight:800,color:'var(--primary)'}}>{m.v}</div><div style={{fontSize:12,color:'var(--text-secondary)',marginTop:4}}>{m.l}</div></div>))}
        </div>
      </section>

      <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12,marginTop:24}}>{L('行业工具导航','Industry Tool Directory','行業工具導航')}</h3>
      <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#8b5cf6" />
    </div>
  )
}

const links: ToolLink[] = [
  {name:'Khanmigo',url:'https://www.khanacademy.org/khan-labs',desc:{en:'Khan Academy AI tutor, GPT-4, Socratic dialogue',zh:'可汗学院AI导师,GPT-4驱动,苏格拉底式对话教学'},cat:'个性化学习',icon:'🧑‍🏫'},
  {name:'Squirrel AI',url:'https://www.squirrelai.com/',desc:{en:'AI adaptive tutoring, 10M+ student profiles, knowledge graph',zh:'松鼠AI自适应辅导,千万学员,3000+知识点图谱'},cat:'个性化学习',icon:'🐿️'},
  {name:'学而思AI',url:'https://www.xueersi.com/',desc:{en:'TAL Education, K-12 personalized AI tutoring',zh:'好未来学而思AI,K-12个性化辅导,AI互动课'},cat:'个性化学习',icon:'📚'},
  {name:'猿辅导AI',url:'https://www.yuanfudao.com/',desc:{en:'AI tutoring, 600M+ users, photo search for answers',zh:'猿辅导AI辅导,6亿+用户,拍照搜题AI解析'},cat:'个性化学习',icon:'🐵'},
  {name:'Duolingo Max',url:'https://www.duolingo.com/max',desc:{en:'GPT-4 language learning, roleplay conversations',zh:'GPT-4语言学习,角色扮演对话,语法解析'},cat:'个性化学习',icon:'🦉'},
  {name:'Photomath',url:'https://photomath.com/',desc:{en:'AI scan math→step-by-step solution, calculus+',zh:'AI拍照解题,逐步解析,基础数学到微积分'},cat:'AI辅导',icon:'📸'},
  {name:'Socratic',url:'https://socratic.org/',desc:{en:'Google AI homework helper, multi-subject, visual recog',zh:'Google AI作业助手,多学科覆盖,视觉识别'},cat:'AI辅导',icon:'🔵'},
  {name:'作业帮',url:'https://www.zuoyebang.com/',desc:{en:'AI homework Q&A, photo search, live tutoring',zh:'AI拍题搜答案,在线答疑,直播辅导'},cat:'AI辅导',icon:'📷'},
  {name:'科大讯飞教育',url:'https://www.iflytek.com/',desc:{en:'iFlytek AI: voice assessment, personalized teaching',zh:'科大讯飞AI教育:语音评测+个性化教学'},cat:'AI辅导',icon:'🎙️'},
  {name:'Gradescope',url:'https://www.gradescope.com/',desc:{en:'AI auto-grading: math, CS, chemistry, handwritten',zh:'AI自动评分:数学/编程/化学/手写作业'},cat:'自动评分',icon:'✅'},
  {name:'批改网',url:'https://www.pigai.org/',desc:{en:'Chinese AI essay grading, instant English correction',zh:'AI批改英语作文,语法/词汇/结构全面纠错,秒出分'},cat:'自动评分',icon:'✍️'},
  {name:'Turnitin AI',url:'https://www.turnitin.com/',desc:{en:'AI writing detection + plagiarism check, 200M+ users',zh:'AI写作检测+查重,全球2亿+学生使用'},cat:'自动评分',icon:'🔎'},
  {name:'MagicSchool AI',url:'https://www.magicschool.ai/',desc:{en:'AI lesson plans, rubrics, IEPs, teacher assistant',zh:'AI备课:教案/评分标准/个性化教育计划,教师神器'},cat:'内容生成',icon:'✨'},
  {name:'Diffit',url:'https://web.diffit.me/',desc:{en:'AI adapt any text to any reading level instantly',zh:'AI差异化教学:任意文本适配不同阅读水平'},cat:'内容生成',icon:'📖'},
  {name:'希沃AI',url:'https://www.seewo.com/',desc:{en:'Chinese smart classroom, AI interactive whiteboard',zh:'国产智慧课堂,AI互动白板+教学工具'},cat:'内容生成',icon:'🖥️'},
  {name:'雨课堂',url:'https://www.yuketang.cn/',desc:{en:'Tsinghua AI smart classroom tools, learning analytics',zh:'清华出品,AI智慧教学工具+学习数据分析'},cat:'内容生成',icon:'☔'},
]
