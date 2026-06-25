import { useT } from '../contexts/LanguageContext';import styles from './Page.module.css'
export default function DesignOverview(){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
const links=[
{name:'Figma AI',url:'https://www.figma.com/ai/',dEn:'AI features in Figma: auto-layout, rename layers, generate content',dZh:'Figma内置AI：自动布局、重命名图层、生成内容',cat:'ui'},
{name:'Uizard',url:'https://uizard.io/',dEn:'Turn screenshots into editable UI designs, wireframe → mockup',dZh:'截图转可编辑UI，手绘草图→高保真原型',cat:'ui'},
{name:'Galileo AI',url:'https://www.usegalileo.ai/',dEn:'Text-to-UI: describe your app, get a complete design',dZh:'文字描述→完整UI设计稿',cat:'ui'},
{name:'v0.dev',url:'https://v0.dev/',dEn:'Vercel, generate React UI from text prompts with copy-paste code',dZh:'Vercel出品，文字描述→React UI代码，复制即用',cat:'ui'},
{name:'Canva AI',url:'https://www.canva.com/ai-image-generator/',dEn:'Magic Design, AI image gen, background remover, all-in-one',dZh:'魔法设计、AI生图、背景移除，一站式设计平台',cat:'branding'},
{name:'Looka',url:'https://looka.com/',dEn:'AI logo maker + brand kit: logo, colors, fonts, business cards',dZh:'AI Logo生成器+品牌套件：Logo、配色、字体、名片',cat:'branding'},
{name:'Brandmark',url:'https://brandmark.io/',dEn:'AI logo & brand identity in minutes, export full brand guide',dZh:'AI Logo+品牌识别，导出完整品牌指南',cat:'branding'},
{name:'Namify',url:'https://namify.tech/',dEn:'AI business/brand name generator with domain availability',dZh:'AI品牌名称生成器，检查域名可用性',cat:'branding'},
{name:'Visily',url:'https://www.visily.ai/',dEn:'Screenshot→wireframe, team collaboration, rapid prototyping',dZh:'截图→线框图，团队协作快速原型',cat:'mockup'},
{name:'Mockplus',url:'https://www.mockplus.com/',dEn:'All-in-one prototyping: wireframe→interactive prototype→dev handoff',dZh:'一站式原型设计：线框图→交互原型→开发交付',cat:'mockup'},
]
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>🎯 {L('AI Design & UI','AI 设计','AI 設計')}</h2><p className={styles.subtitle}>{L('UI/UX, branding, prototyping — AI-powered design tools','UI/UX、品牌、原型——AI驱动的设计工具','UI/UX、品牌、原型——AI驅動的設計工具')}</p></div>
<div className={styles.summary}>{L('AI is transforming design from a manual craft into a collaborative dialogue. Describe what you want, and AI generates UI mockups, logos, and brand kits. These tools dramatically accelerate the design process from idea to prototype.','AI正在把设计从手工技艺变成对话协作。描述你想要什么，AI就能生成UI稿、Logo和品牌套件。这些工具能大幅加速从创意到原型的设计流程。','AI正在把設計從手工技藝變成對話協作。描述你想要什麼，AI就能生成UI稿、Logo和品牌套件。這些工具能大幅加速從創意到原型的設計流程。')}</div>
<Dir links={links} lang={lang} catNames={{ui:L('UI/UX Design','UI/UX 设计','UI/UX 設計'),branding:L('Branding & Logo','品牌与Logo','品牌與Logo'),mockup:L('Prototyping','原型设计','原型設計')}} /></div>)}
function Dir({links,lang,catNames}:{links:{name:string;url:string;dEn:string;dZh:string;cat:string}[],lang:string,catNames:Record<string,string>}){const cats=[...new Set(links.map(l=>l.cat))]
return <div>{cats.map(cat=>(<div key={cat} style={{marginBottom:20}}><h3 style={{fontSize:15,fontWeight:700,color:'var(--text)',marginBottom:10}}>{catNames[cat]||cat}</h3><div style={{display:'flex',flexDirection:'column',gap:8}}>{links.filter(l=>l.cat===cat).map(l=>(<a key={l.name} href={l.url} target="_blank" rel="noopener" style={{display:'flex',alignItems:'center',gap:12,padding:'12px 16px',background:'var(--bg-card)',borderRadius:10,textDecoration:'none',border:'1px solid var(--border)',transition:'all .15s'}}><span style={{fontWeight:600,color:'var(--primary)',fontSize:14,minWidth:100}}>{l.name}</span><span style={{color:'var(--text-secondary)',fontSize:13,flex:1}}>{lang==='zh-CN'?l.dZh:l.dEn}</span><span style={{color:'var(--text-muted)',fontSize:16}}>↗</span></a>))}</div></div>))}</div>}
