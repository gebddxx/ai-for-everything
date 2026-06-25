import { useT } from '../contexts/LanguageContext';import LinkNav,{type ToolLink}from'../components/LinkNav';import styles from'./Page.module.css'
const links:ToolLink[]=[
{name:'ChatGPT',url:'https://chat.openai.com/',desc:{en:'Best general writer, GPT-4.1, long-form thinking',zh:'全能写作助手,GPT-4.1驱动,长篇深度写作'},cat:'writing',icon:'⚫'},
{name:'Claude',url:'https://claude.ai/',desc:{en:'Best for deep writing, 200K context, nuanced editing',zh:'深度写作首选,200K上下文,精细润色'},cat:'writing',icon:'🟠'},
{name:'Jasper AI',url:'https://www.jasper.ai/',desc:{en:'Marketing copy, brand voice, SEO optimization',zh:'营销文案专家,品牌语调统一,SEO优化'},cat:'writing',icon:'✨'},
{name:'Notion AI',url:'https://www.notion.so/',desc:{en:'Workspace-integrated AI, one-click write',zh:'工作区内置AI,一键写作,无缝集成'},cat:'writing',icon:'📝'},
{name:'Copy.ai',url:'https://www.copy.ai/',desc:{en:'90+ templates, social media & ads',zh:'90+模板,社媒广告文案一键生成'},cat:'writing',icon:'📋'},
{name:'Writesonic',url:'https://writesonic.com/',desc:{en:'SEO articles, product descriptions, landing pages',zh:'SEO长文,产品描述,落地页批量生成'},cat:'writing',icon:'✍️'},
{name:'Grammarly',url:'https://www.grammarly.com/',desc:{en:'Grammar, tone, clarity, plagiarism check',zh:'语法纠错,语调调整,清晰度建议,查重'},cat:'writing',icon:'✅'},
{name:'DeepL Write',url:'https://www.deepl.com/write',desc:{en:'Multilingual style & phrasing polish',zh:'多语种写作润色,表达更地道'},cat:'writing',icon:'🌍'},
{name:'Midjourney',url:'https://www.midjourney.com/',desc:{en:'Best artistic quality, aesthetic images',zh:'艺术品质最高,审美感极佳,Discord使用'},cat:'image',icon:'🖼️'},
{name:'Stable Diffusion',url:'https://stability.ai/',desc:{en:'Open source, full control, local run, plugins',zh:'开源,完全可控,本地运行,插件生态丰富'},cat:'image',icon:'🎨'},
{name:'DALL·E 3',url:'https://openai.com/dall-e-3',desc:{en:'Natural language→image, ChatGPT built-in',zh:'自然语言直接生图,ChatGPT内置'},cat:'image',icon:'🎯'},
{name:'Adobe Firefly',url:'https://www.adobe.com/products/firefly.html',desc:{en:'Commercial-safe, Photoshop integration',zh:'版权安全,Photoshop深度集成'},cat:'image',icon:'🔥'},
{name:'Leonardo.ai',url:'https://leonardo.ai/',desc:{en:'Game assets, consistent style, fine-tuning',zh:'游戏资产生成,风格一致,可微调模型'},cat:'image',icon:'🦁'},
{name:'ComfyUI',url:'https://github.com/comfyanonymous/ComfyUI',desc:{en:'Node-based workflow, ultimate control',zh:'节点式工作流,终极定制,极客首选'},cat:'image',icon:'🔗'},
{name:'Runway Gen-3',url:'https://runwayml.com/',desc:{en:'Best text-to-video, cinematic motion quality',zh:'文生视频最强,电影级运动质量'},cat:'video',icon:'🎬'},
{name:'Pika Labs',url:'https://pika.art/',desc:{en:'Quick social clips, fun creative effects',zh:'快速社媒短视频,趣味创意特效'},cat:'video',icon:'⚡'},
{name:'HeyGen',url:'https://www.heygen.com/',desc:{en:'AI avatar video, multi-language dubbing',zh:'AI数字人播报,多语种配音'},cat:'video',icon:'🎙️'},
{name:'CapCut',url:'https://www.capcut.com/',desc:{en:'AI mobile editing, auto captions, effects',zh:'字节跳动剪映,AI手机剪辑,自动字幕'},cat:'video',icon:'✂️'},
{name:'Opus Clip',url:'https://www.opus.pro/',desc:{en:'Long video→viral shorts, AI clipping',zh:'长视频自动切短视频,AI识别高光片段'},cat:'video',icon:'🎞️'},
{name:'Descript',url:'https://www.descript.com/',desc:{en:'Edit video by editing text transcript',zh:'像编辑文档一样编辑视频,革命性体验'},cat:'video',icon:'📝'},
{name:'Suno',url:'https://suno.com/',desc:{en:'Full songs from text, multiple genres',zh:'文字描述生成完整歌曲,多风格支持'},cat:'audio',icon:'☀️'},
{name:'Udio',url:'https://www.udio.com/',desc:{en:'High-quality AI music generation',zh:'高质量AI音乐生成,音质出众'},cat:'audio',icon:'🎵'},
{name:'ElevenLabs',url:'https://elevenlabs.io/',desc:{en:'Best TTS, voice cloning, 29 languages',zh:'最自然的AI语音,声音克隆,29种语言'},cat:'audio',icon:'🔊'},
{name:'AIVA',url:'https://www.aiva.ai/',desc:{en:'Classical/ambient composition, sheet music export',zh:'古典/氛围音乐创作,可导出乐谱'},cat:'audio',icon:'🎼'},
{name:'Adobe Podcast',url:'https://podcast.adobe.com/',desc:{en:'AI noise reduction, mic enhance, transcription',zh:'AI降噪,麦克风增强,自动转写'},cat:'audio',icon:'🎧'},
{name:'Murf.ai',url:'https://murf.ai/',desc:{en:'Professional AI voiceovers for videos/presentations',zh:'专业AI配音,适合视频和演示'},cat:'audio',icon:'🎤'},
]
export default function CreativeOverview({ scrollTo }:{ scrollTo?: string }){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>🎨 {L('AI Creative Studio','AI 创意工坊','AI 創意工坊')}</h2><p className={styles.subtitle}>{L('26 tools — Writing, Image, Video, Audio','26款工具——写作、绘画、视频、音频','26款工具——寫作、繪畫、影片、音頻')}</p></div>
<LinkNav links={links} lang={lang as'en'|'zh-CN'|'zh-TW'} color="#ec4899" scrollTo={scrollTo} catNames={{writing:L('AI Writing','AI 写作','AI 寫作'),image:L('AI Image','AI 绘画','AI 繪畫'),video:L('AI Video','AI 视频','AI 影片'),audio:L('AI Audio & Music','AI 音频音乐','AI 音頻音樂')}}/></div>)}
