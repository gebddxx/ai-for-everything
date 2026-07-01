import { useT } from '../contexts/LanguageContext'
import { tText, type MultiLang } from '../i18n/translate'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'
export default function EducationOverview() {
  const { lang } = useT()
  const L = (a: MultiLang, b?: string, c?: string) => { if (typeof a !== "string") return tText(a, lang); if (b !== undefined) return lang === "zh-CN" ? (b || a) : lang === "zh-TW" ? (c || b || a) : a; return tText(a, lang) }
  const LA = (en: string[], zh: string[], tw: string[]) => lang === "zh-CN" ? zh : lang === "zh-TW" ? tw : en
  return (<div className={styles.page}>
    <div style={{background:'linear-gradient(135deg,#4c1d95 0%,#5b21b6 50%,#6d28d9 100%)',borderRadius:14,padding:'24px 28px',marginBottom:24,color:'#fff'}}>
      <h2 style={{fontSize:24,fontWeight:800,margin:'0 0 16px'}}>📚 {L('AI in Education','AI 教育科技','AI 教育科技')}</h2>
      <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
        {[{v:'15×',t:'批改vs人工'},{v:'+200%',t:'学习留存'},{v:'30%+',t:'年增速'},{v:'10h/周',t:'教师省时'}].map(s=>(<div key={s.t} style={{textAlign:'center',background:'rgba(255,255,255,0.13)',borderRadius:10,padding:'14px 18px',minWidth:80}}><div style={{fontSize:28,fontWeight:800}}>{s.v}</div><div style={{fontSize:12,opacity:.8,marginTop:2}}>{s.t}</div></div>))}
      </div>
    </div>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12}}>📖 {L('AI × Education','AI × 教育','AI × 教育')}</h3>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:10,marginBottom:24}}>
      {[{icon:'🧑‍🏫',t:L('个性化学习','个性化学习','個性化學習'),items:LA(['🎯 知识图谱 3000+知识点','🤖 苏格拉底式对话引导','👥 千万学员 个性路径'],['🎯 知识图谱 3000+知识点','🤖 苏格拉底式对话引导','👥 千万学员 个性路径'],['🎯 Knowledge graph 3K+ nodes','🤖 Socratic dialogue guidance','👥 10M+ personalized paths'])},
        {icon:'✅',t:L('AI自动评分','AI自动评分','AI自動評分'),items:LA(['📝 作文+编程+手写','⚡ 秒级出分 95%+准确','🌍 数千万篇/年批改量'],['📝 作文+编程+手写','⚡ 秒级出分 95%+准确','🌍 数千万篇/年批改量'],['📝 Essays+code+handwriting','⚡ Instant 95%+ accuracy','🌍 10M+ graded annually'])},
        {icon:'🤖',t:L('AI智能辅导','AI智能辅导','AI智能輔導'),items:LA(['📸 拍照→分步解题','🗣️ GPT-4 角色扮演练口语','💸 成本仅人工 1/10'],['📸 拍照→分步解题','🗣️ GPT-4 角色扮演练口语','💸 成本仅人工 1/10'],['📸 Photo→step solution','🗣️ GPT-4 roleplay practice','💸 1/10 human cost'])},
        {icon:'📝',t:L('AI课程生成','AI课程生成','AI課程生成'),items:LA(['✨ 一键生成教案/测验','📖 文本适配任意阅读水平','⏰ 教师周省 10+ 小时'],['✨ 一键生成教案/测验','📖 文本适配任意阅读水平','⏰ 教师周省 10+ 小时'],['✨ 1-click lesson+quiz','📖 Adapt text to any level','⏰ Save 10+ hrs/week'])},
      ].map(c=>(<div key={c.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 10px'}}>{c.icon} {c.t}</h4><div style={{display:'flex',flexDirection:'column',gap:6}}>{c.items.map((item,i)=>(<div key={i} style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.5}}>{item}</div>))}</div></div>))}
    </div>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',margin:'28px 0 12px',paddingBottom:8,borderBottom:'2px solid var(--border)'}}>🔗 {L('Tools','工具导航','工具導航')}</h3>
    <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#8b5cf6" />
  </div>)}
const links: ToolLink[] = [
  {name:'Khanmigo',url:'https://www.khanacademy.org/',desc:{en:'Khan Academy AI, GPT-4 Socratic tutor',zh:'可汗学院AI导师,GPT-4苏格拉底式'},cat:'学习',icon:'🧑‍🏫'},
  {name:'Squirrel AI',url:'https://www.squirrelai.com/',desc:{en:'AI adaptive, 10M+ profiles, 3K+ nodes',zh:'松鼠AI自适应,千万学员,3000+知识点'},cat:'学习',icon:'🐿️'},
  {name:'学而思AI',url:'https://www.xueersi.com/',desc:{en:'TAL Education, K-12 personalized',zh:'好未来,K-12个性化AI辅导'},cat:'学习',icon:'📚'},
  {name:'Duolingo Max',url:'https://www.duolingo.com/',desc:{en:'GPT-4 language, roleplay convos',zh:'GPT-4语言学习,角色扮演对话'},cat:'学习',icon:'🦉'},
  {name:'Photomath',url:'https://photomath.com/',desc:{en:'AI scan math→step solution',zh:'AI拍照→分步解题,微积分'},cat:'辅导',icon:'📸'},
  {name:'作业帮',url:'https://www.zuoyebang.com/',desc:{en:'AI homework Q&A, photo search',zh:'AI拍题+答疑+直播辅导'},cat:'辅导',icon:'📷'},
  {name:'Gradescope',url:'https://www.gradescope.com/',desc:{en:'AI auto-grade: math, CS, chem, handwriting',zh:'AI自动评分:数学/编程/化学/手写'},cat:'批改',icon:'✅'},
  {name:'批改网',url:'https://www.pigai.org/',desc:{en:'Chinese AI essay grading, instant',zh:'AI批改英语作文,秒出分'},cat:'批改',icon:'✍️'},
  {name:'MagicSchool AI',url:'https://www.magicschool.ai/',desc:{en:'AI lesson plans, rubrics, IEPs',zh:'AI备课:教案/评分/个性化计划'},cat:'内容',icon:'✨'},
  {name:'希沃AI',url:'https://www.seewo.com/',desc:{en:'Chinese smart classroom, whiteboard',zh:'国产智慧课堂,AI互动白板'},cat:'内容',icon:'🖥️'},
]
