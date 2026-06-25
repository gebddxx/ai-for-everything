import { useT } from '../contexts/LanguageContext';import LinkNav,{type ToolLink}from'../components/LinkNav';import styles from'./Page.module.css'
const links:ToolLink[]=[
{n:'Figma AI',u:'https://www.figma.com/ai/',d:{en:'AI features in Figma: auto-layout, content, rename',zh:'Figma内置AI:自动布局,内容生成,智能重命名'},c:'ui',i:'🎨'},
{n:'Uizard',u:'https://uizard.io/',d:{en:'Screenshots→editable UI, wireframe→mockup',zh:'截图转可编辑UI,手绘草图→高保真原型'},c:'ui',i:'🧙'},
{n:'Galileo AI',u:'https://www.usegalileo.ai/',d:{en:'Text description → complete UI design',zh:'文字描述→完整UI设计稿,一键生成'},c:'ui',i:'🔭'},
{n:'v0.dev',u:'https://v0.dev/',d:{en:'Vercel, text→React UI code, copy-paste',zh:'Vercel出品,文字→React UI代码,复制即用'},c:'ui',i:'🟢'},
{n:'Miro AI',u:'https://miro.com/ai/',d:{en:'Whiteboard AI: generate diagrams, cluster ideas',zh:'白板AI:自动生成图表,聚合创意'},c:'ui',i:'📋'},
{n:'Framer AI',u:'https://www.framer.com/ai/',d:{en:'AI website builder, design→live site',zh:'AI建站工具,设计稿→上线网站'},c:'ui',i:'🟣'},
{n:'Canva',u:'https://www.canva.com/',d:{en:'Magic Design, BG remover, AI photo editor',zh:'魔法设计,背景移除,AI照片编辑,一站式'},c:'branding',i:'🖼️'},
{n:'Looka',u:'https://looka.com/',d:{en:'AI logo + brand kit: logo, colors, fonts, cards',zh:'AI Logo生成+品牌套件:配色/字体/名片'},c:'branding',i:'👁️'},
{n:'Brandmark',u:'https://brandmark.io/',d:{en:'AI logo & brand identity, full brand guide',zh:'AI Logo+品牌识别,导出完整品牌指南'},c:'branding',i:'🏷️'},
{n:'Adobe Express',u:'https://www.adobe.com/express/',d:{en:'AI templates, social media, quick designs',zh:'Adobe出品,AI模板,社媒图片快速设计'},c:'branding',i:'🔥'},
{n:'Designs.ai',u:'https://designs.ai/',d:{en:'All-in-one: logo, video, mockup, copywriting',zh:'全能设计:Logo/视频/原型/文案一站式'},c:'branding',i:'🎯'},
{n:'Visily',u:'https://www.visily.ai/',d:{en:'Screenshot→wireframe, team prototyping',zh:'截图→线框图,团队协作快速原型'},c:'mockup',i:'📱'},
{n:'Mockplus',u:'https://www.mockplus.com/',d:{en:'Wireframe→interactive prototype→dev handoff',zh:'线框图→交互原型→开发交付一站式'},c:'mockup',i:'🔧'},
]
export default function DesignOverview(){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>🎯 {L('AI Design & UI','AI 设计','AI 設計')}</h2><p className={styles.subtitle}>{L('13 design tools — UI/UX, branding, prototyping','13款设计工具——UI/UX、品牌、原型','13款設計工具——UI/UX、品牌、原型')}</p></div>
<LinkNav links={links} lang={lang as'en'|'zh-CN'|'zh-TW'} color="#e11d48" catNames={{ui:L('UI/UX Design','UI/UX 设计','UI/UX 設計'),branding:L('Branding & Logo','品牌与Logo','品牌與Logo'),mockup:L('Prototyping','原型设计','原型設計')}}/></div>)}
