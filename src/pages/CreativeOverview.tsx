import { useT } from '../contexts/LanguageContext';import LinkNav,{type ToolLink}from'../components/LinkNav';import styles from'./Page.module.css'
const links:ToolLink[]=[
{n:'ChatGPT',u:'https://chat.openai.com/',d:{en:'Best general writer, GPT-4.1, long-form thinking',zh:'全能写作助手,GPT-4.1驱动,长篇深度写作'},c:'writing',i:'⚫'},
{n:'Claude',u:'https://claude.ai/',d:{en:'Best for deep writing, 200K context, nuanced editing',zh:'深度写作首选,200K上下文,精细润色'},c:'writing',i:'🟠'},
{n:'Jasper AI',u:'https://www.jasper.ai/',d:{en:'Marketing copy, brand voice, SEO optimization',zh:'营销文案专家,品牌语调统一,SEO优化'},c:'writing',i:'✨'},
{n:'Notion AI',u:'https://www.notion.so/',d:{en:'Workspace-integrated AI, one-click write',zh:'工作区内置AI,一键写作,无缝集成'},c:'writing',i:'📝'},
{n:'Copy.ai',u:'https://www.copy.ai/',d:{en:'90+ templates, social media & ads',zh:'90+模板,社媒广告文案一键生成'},c:'writing',i:'📋'},
{n:'Writesonic',u:'https://writesonic.com/',d:{en:'SEO articles, product descriptions, landing pages',zh:'SEO长文,产品描述,落地页批量生成'},c:'writing',i:'✍️'},
{n:'Grammarly',u:'https://www.grammarly.com/',d:{en:'Grammar, tone, clarity, plagiarism check',zh:'语法纠错,语调调整,清晰度建议,查重'},c:'writing',i:'✅'},
{n:'DeepL Write',u:'https://www.deepl.com/write',d:{en:'Multilingual style & phrasing polish',zh:'多语种写作润色,表达更地道'},c:'writing',i:'🌍'},
{n:'Midjourney',u:'https://www.midjourney.com/',d:{en:'Best artistic quality, aesthetic images',zh:'艺术品质最高,审美感极佳,Discord使用'},c:'image',i:'🖼️'},
{n:'Stable Diffusion',u:'https://stability.ai/',d:{en:'Open source, full control, local run, plugins',zh:'开源,完全可控,本地运行,插件生态丰富'},c:'image',i:'🎨'},
{n:'DALL·E 3',u:'https://openai.com/dall-e-3',d:{en:'Natural language→image, ChatGPT built-in',zh:'自然语言直接生图,ChatGPT内置'},c:'image',i:'🎯'},
{n:'Adobe Firefly',u:'https://www.adobe.com/products/firefly.html',d:{en:'Commercial-safe, Photoshop integration',zh:'版权安全,Photoshop深度集成'},c:'image',i:'🔥'},
{n:'Leonardo.ai',u:'https://leonardo.ai/',d:{en:'Game assets, consistent style, fine-tuning',zh:'游戏资产生成,风格一致,可微调模型'},c:'image',i:'🦁'},
{n:'ComfyUI',u:'https://github.com/comfyanonymous/ComfyUI',d:{en:'Node-based workflow, ultimate control',zh:'节点式工作流,终极定制,极客首选'},c:'image',i:'🔗'},
{n:'Runway Gen-3',u:'https://runwayml.com/',d:{en:'Best text-to-video, cinematic motion quality',zh:'文生视频最强,电影级运动质量'},c:'video',i:'🎬'},
{n:'Pika Labs',u:'https://pika.art/',d:{en:'Quick social clips, fun creative effects',zh:'快速社媒短视频,趣味创意特效'},c:'video',i:'⚡'},
{n:'HeyGen',u:'https://www.heygen.com/',d:{en:'AI avatar video, multi-language dubbing',zh:'AI数字人播报,多语种配音'},c:'video',i:'🎙️'},
{n:'CapCut',u:'https://www.capcut.com/',d:{en:'AI mobile editing, auto captions, effects',zh:'字节跳动剪映,AI手机剪辑,自动字幕'},c:'video',i:'✂️'},
{n:'Opus Clip',u:'https://www.opus.pro/',d:{en:'Long video→viral shorts, AI clipping',zh:'长视频自动切短视频,AI识别高光片段'},c:'video',i:'🎞️'},
{n:'Descript',u:'https://www.descript.com/',d:{en:'Edit video by editing text transcript',zh:'像编辑文档一样编辑视频,革命性体验'},c:'video',i:'📝'},
{n:'Suno',u:'https://suno.com/',d:{en:'Full songs from text, multiple genres',zh:'文字描述生成完整歌曲,多风格支持'},c:'audio',i:'☀️'},
{n:'Udio',u:'https://www.udio.com/',d:{en:'High-quality AI music generation',zh:'高质量AI音乐生成,音质出众'},c:'audio',i:'🎵'},
{n:'ElevenLabs',u:'https://elevenlabs.io/',d:{en:'Best TTS, voice cloning, 29 languages',zh:'最自然的AI语音,声音克隆,29种语言'},c:'audio',i:'🔊'},
{n:'AIVA',u:'https://www.aiva.ai/',d:{en:'Classical/ambient composition, sheet music export',zh:'古典/氛围音乐创作,可导出乐谱'},c:'audio',i:'🎼'},
{n:'Adobe Podcast',u:'https://podcast.adobe.com/',d:{en:'AI noise reduction, mic enhance, transcription',zh:'AI降噪,麦克风增强,自动转写'},c:'audio',i:'🎧'},
{n:'Murf.ai',u:'https://murf.ai/',d:{en:'Professional AI voiceovers for videos/presentations',zh:'专业AI配音,适合视频和演示'},c:'audio',i:'🎤'},
]
export default function CreativeOverview(){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>🎨 {L('AI Creative Studio','AI 创意工坊','AI 創意工坊')}</h2><p className={styles.subtitle}>{L('26 tools — Writing, Image, Video, Audio','26款工具——写作、绘画、视频、音频','26款工具——寫作、繪畫、影片、音頻')}</p></div>
<LinkNav links={links} lang={lang as'en'|'zh-CN'|'zh-TW'} color="#ec4899" catNames={{writing:L('AI Writing','AI 写作','AI 寫作'),image:L('AI Image','AI 绘画','AI 繪畫'),video:L('AI Video','AI 视频','AI 影片'),audio:L('AI Audio & Music','AI 音频音乐','AI 音頻音樂')}}/></div>)}
