import { useT } from '../contexts/LanguageContext';import LinkNav,{type ToolLink}from'../components/LinkNav';import styles from'./Page.module.css'
const links:ToolLink[]=[
{name:'Figma AI',url:'https://www.figma.com/ai/',desc:{en:'AI features in Figma: auto-layout, content, rename',zh:'Figma内置AI:自动布局,内容生成,智能重命名'},cat:'ui',icon:'🎨'},
{name:'Uizard',url:'https://uizard.io/',desc:{en:'Screenshots→editable UI, wireframe→mockup',zh:'截图转可编辑UI,手绘草图→高保真原型'},cat:'ui',icon:'🧙'},
{name:'Galileo AI',url:'https://www.usegalileo.ai/',desc:{en:'Text description → complete UI design',zh:'文字描述→完整UI设计稿,一键生成'},cat:'ui',icon:'🔭'},
{name:'v0.dev',url:'https://v0.dev/',desc:{en:'Vercel, text→React UI code, copy-paste',zh:'Vercel出品,文字→React UI代码,复制即用'},cat:'ui',icon:'🟢'},
{name:'Miro AI',url:'https://miro.com/ai/',desc:{en:'Whiteboard AI: generate diagrams, cluster ideas',zh:'白板AI:自动生成图表,聚合创意'},cat:'ui',icon:'📋'},
{name:'Framer AI',url:'https://www.framer.com/ai/',desc:{en:'AI website builder, design→live site',zh:'AI建站工具,设计稿→上线网站'},cat:'ui',icon:'🟣'},
{name:'即时设计',url:'https://js.design/',desc:{en:'Chinese Figma alternative, AI design helper',zh:'国产Figma替代,AI设计助手,协同时代'},cat:'ui',icon:'⚡'},
{name:'MasterGo',url:'https://mastergo.com/',desc:{en:'Collaborative UI design, AI components',zh:'协作UI设计平台,AI组件生成,团队效率'},cat:'ui',icon:'🎯'},
{name:'墨刀',url:'https://modao.cc/',desc:{en:'MockingBot, rapid prototyping for mobile/web',zh:'国产原型设计利器,移动/Web快速原型'},cat:'ui',icon:'🔪'},
{name:'Pixso',url:'https://pixso.cn/',desc:{en:'All-in-one design collaboration, AI features',zh:'万兴旗下,一体化设计协作,AI功能丰富'},cat:'ui',icon:'🧩'},
{name:'Canva',url:'https://www.canva.com/',desc:{en:'Magic Design, BG remover, AI photo editor',zh:'魔法设计,背景移除,AI照片编辑,一站式'},cat:'branding',icon:'🖼️'},
{name:'Looka',url:'https://looka.com/',desc:{en:'AI logo + brand kit: logo, colors, fonts, cards',zh:'AI Logo生成+品牌套件:配色/字体/名片'},cat:'branding',icon:'👁️'},
{name:'Brandmark',url:'https://brandmark.io/',desc:{en:'AI logo & brand identity, full brand guide',zh:'AI Logo+品牌识别,导出完整品牌指南'},cat:'branding',icon:'🏷️'},
{name:'Adobe Express',url:'https://www.adobe.com/express/',desc:{en:'AI templates, social media, quick designs',zh:'Adobe出品,AI模板,社媒图片快速设计'},cat:'branding',icon:'🔥'},
{name:'Designs.ai',url:'https://designs.ai/',desc:{en:'All-in-one: logo, video, mockup, copywriting',zh:'全能设计:Logo/视频/原型/文案一站式'},cat:'branding',icon:'🎯'},
{name:'稿定设计',url:'https://www.gaoding.com/',desc:{en:'Chinese Canva, 100K+ templates, AI editing',zh:'国产Canva,10万+模板,AI智能编辑'},cat:'branding',icon:'✂️'},
{name:'创客贴',url:'https://www.chuangkit.com/',desc:{en:'Quick design tool, social media posters',zh:'快速设计工具,社媒海报/公众号封面'},cat:'branding',icon:'🎨'},
{name:'标小智',url:'https://www.logosc.cn/',desc:{en:'AI logo maker for Chinese market, brand kit',zh:'AI智能Logo设计,品牌套件一键生成'},cat:'branding',icon:'🏷️'},
{name:'Visily',url:'https://www.visily.ai/',desc:{en:'Screenshot→wireframe, team prototyping',zh:'截图→线框图,团队协作快速原型'},cat:'mockup',icon:'📱'},
{name:'Mockplus',url:'https://www.mockplus.com/',desc:{en:'Wireframe→interactive prototype→dev handoff',zh:'线框图→交互原型→开发交付一站式'},cat:'mockup',icon:'🔧'},
{name:'Axure',url:'https://www.axure.com/',desc:{en:'Professional prototyping with conditional logic',zh:'专业原型设计,条件逻辑+动态面板'},cat:'mockup',icon:'📐'},
{name:'Principle',url:'https://principleformac.com/',desc:{en:'Interactive animation prototyping',zh:'交互动画原型,Mac端精品工具'},cat:'mockup',icon:'✨'},
{name:'FlutterFlow',url:'https://flutterflow.io/',desc:{en:'AI-powered Flutter app builder, visual drag-drop',zh:'AI驱动的Flutter应用构建器,可视化拖拽'},cat:'mockup',icon:'🪽'},
{name:'Bolt.new',url:'https://bolt.new/',desc:{en:'StackBlitz, prompt→fullstack web app live',zh:'StackBlitz出品,提示词→全栈Web应用即刻运行'},cat:'mockup',icon:'⚡'},
{name:'Lovable',url:'https://lovable.dev/',desc:{en:'GPT Engineer, build web apps from description',zh:'AI工程师,用文字描述直接生成Web应用'},cat:'mockup',icon:'❤️'},
]
export default function DesignOverview({ scrollTo }:{ scrollTo?: string }){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>🎯 {L('Design & UI','设计工具','設計工具')}</h2><p className={styles.subtitle}>{L('25 design tools — UI/UX, branding, prototyping','25款设计工具——UI/UX、品牌、原型','25款設計工具——UI/UX、品牌、原型')}</p></div>
<LinkNav links={links} lang={lang as'en'|'zh-CN'|'zh-TW'} color="#e11d48" scrollTo={scrollTo} catNames={{ui:L('UI/UX Design','UI/UX 设计','UI/UX 設計'),branding:L('Branding & Logo','品牌与Logo','品牌與Logo'),mockup:L('Prototyping','原型设计','原型設計')}}/></div>)}
