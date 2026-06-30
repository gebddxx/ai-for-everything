import { useT } from '../contexts/LanguageContext';import LinkNav,{type ToolLink}from'../components/LinkNav';import styles from'./Page.module.css'
const links:ToolLink[]=[
{name:'Runway Gen-3',url:'https://runwayml.com/',desc:{en:'Best text-to-video, cinematic motion quality',zh:'文生视频最强,电影级运动质量'},cat:'视频',icon:'🎬'},
{name:'Pika Labs',url:'https://pika.art/',desc:{en:'Quick social clips, fun creative effects',zh:'快速社媒短视频,趣味创意特效'},cat:'视频',icon:'⚡'},
{name:'HeyGen',url:'https://www.heygen.com/',desc:{en:'AI avatar video, multi-language dubbing',zh:'AI数字人播报,多语种配音'},cat:'视频',icon:'🎙️'},
{name:'CapCut / 剪映',url:'https://www.capcut.com/',desc:{en:'ByteDance, AI mobile editing, auto captions',zh:'字节跳动剪映,AI手机剪辑,自动字幕'},cat:'视频',icon:'✂️'},
{name:'Opus Clip',url:'https://www.opus.pro/',desc:{en:'Long video→viral shorts, AI clipping',zh:'长视频自动切短视频,AI识别高光片段'},cat:'视频',icon:'🎞️'},
{name:'Descript',url:'https://www.descript.com/',desc:{en:'Edit video by editing text transcript',zh:'像编辑文档一样编辑视频,革命性体验'},cat:'视频',icon:'📝'},
{name:'Sora',url:'https://openai.com/sora/',desc:{en:'OpenAI text→video, photorealism, 60s output',zh:'OpenAI文生视频,照片级真实,最长60秒'},cat:'视频',icon:'🎥'},
{name:'智影',url:'https://zenvideo.qq.com/',desc:{en:'Tencent AI video tools, digital human studio',zh:'腾讯AI视频工具,数字人播报制作'},cat:'视频',icon:'🎬'},
{name:'万兴播爆',url:'https://www.wondershare.cn/',desc:{en:'Wondershare AI video, virtual human presenter',zh:'万兴AI虚拟人播报,外贸营销视频'},cat:'视频',icon:'📹'},
{name:'一帧秒创',url:'https://www.1frame.cn/',desc:{en:'AI short video creation, one-click editing',zh:'AI短视频创作,一键成片,新媒体神器'},cat:'视频',icon:'⏱️'},
{name:'可灵AI',url:'https://klingai.com/',desc:{en:'Kuaishou, top AI image+video gen, high quality',zh:'快手出品,AI生图+视频,画质极高'},cat:'视频',icon:'🎬'},
{name:'Vidu',url:'https://www.vidu.com/',desc:{en:'Top Chinese video model, affordable, Chinese-friendly',zh:'第一流国产视频大模型,价格亲民,中文友好'},cat:'视频',icon:'🎞️'},
{name:'PixVerse',url:'https://pixverse.ai/',desc:{en:'Chinese team, V3.5 fast video gen, viral effects',zh:'国内团队,V3.5快速出视频,毒液特效走红'},cat:'视频',icon:'✨'},
{name:'度加创作',url:'https://dujia.baidu.com/',desc:{en:'Baidu, hot topics→script→video pipeline',zh:'百度出品,热搜一键成稿→文稿一键成片'},cat:'视频',icon:'📰'},
{name:'万兴喵影',url:'https://www.wondershare.cn/',desc:{en:'AI auto clip, speech→subtitles, motion tracking',zh:'AI自动剪辑,语音转字幕,运动跟踪'},cat:'视频',icon:'🐱'},
]
export default function VideoGenOverview(){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>🎬 {L('Video Generation','视频工具','影片工具')}</h2><p className={styles.subtitle}>{L('15 AI video generation and editing tools','15款AI视频生成和编辑工具','15款AI影片生成和編輯工具')}</p></div>
<LinkNav links={links} lang={lang as'en'|'zh-CN'|'zh-TW'} color="#ec4899" /></div>)}
