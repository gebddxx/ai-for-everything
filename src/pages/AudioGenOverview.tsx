import { useT } from '../contexts/LanguageContext';import LinkNav,{type ToolLink}from'../components/LinkNav';import styles from'./Page.module.css'
const links:ToolLink[]=[
{name:'Suno',url:'https://suno.com/',desc:{en:'Full songs from text, multiple genres',zh:'文字描述生成完整歌曲,多风格支持'},cat:'音频',icon:'☀️'},
{name:'Udio',url:'https://www.udio.com/',desc:{en:'High-quality AI music generation',zh:'高质量AI音乐生成,音质出众'},cat:'音频',icon:'🎵'},
{name:'ElevenLabs',url:'https://elevenlabs.io/',desc:{en:'Best TTS, voice cloning, 29 languages',zh:'最自然的AI语音,声音克隆,29种语言'},cat:'音频',icon:'🔊'},
{name:'AIVA',url:'https://www.aiva.ai/',desc:{en:'Classical/ambient composition, sheet music export',zh:'古典/氛围音乐创作,可导出乐谱'},cat:'音频',icon:'🎼'},
{name:'Adobe Podcast',url:'https://podcast.adobe.com/',desc:{en:'AI noise reduction, mic enhance, transcription',zh:'AI降噪,麦克风增强,自动转写'},cat:'音频',icon:'🎧'},
{name:'Murf.ai',url:'https://murf.ai/',desc:{en:'Professional AI voiceovers for videos/presentations',zh:'专业AI配音,适合视频和演示'},cat:'音频',icon:'🎤'},
{name:'魔音工坊',url:'https://www.moyin.com/',desc:{en:'Chinese TTS, 100+ voice styles, professional dubbing',zh:'专业中文配音,100+音色,短视频/有声书'},cat:'音频',icon:'🎙️'},
{name:'讯飞智作',url:'https://peiyin.xunfei.cn/',desc:{en:'iFlytek AI dubbing, voice cloning, multi-dialect',zh:'科大讯飞AI配音,声音克隆,多方言支持'},cat:'音频',icon:'🗣️'},
{name:'音色工坊',url:'https://yinse.tech/',desc:{en:'AI singing voice synthesis, cover songs',zh:'AI歌声合成,AI翻唱,个性化声音'},cat:'音频',icon:'🎶'},
{name:'海绵音乐',url:'https://haimian.music.163.com/',desc:{en:'Netease AI music, easy entry, casual creation',zh:'网易AI音乐,门槛低,随手创作歌曲'},cat:'音频',icon:'🧽'},
{name:'网易天音',url:'https://tianyin.music.163.com/',desc:{en:'Netease AI composition, multi-genre arrangement',zh:'网易AI编曲,海量风格智能配乐'},cat:'音频',icon:'🎼'},
{name:'TME Studio',url:'https://y.qq.com/tme_studio/',desc:{en:'Tencent Music AI, intelligent music generation',zh:'腾讯音乐AI,智能音乐生成'},cat:'音频',icon:'🎹'},
{name:'海螺AI',url:'https://hailuoai.com/',desc:{en:'MiniMax, natural TTS, precise voice cloning',zh:'MiniMax出品,文本朗读自然,声音克隆精准'},cat:'音频',icon:'🐚'},
{name:'TTSMaker',url:'https://ttsmaker.com/',desc:{en:'Text-to-speech, 50+ languages, 300+ voice packs',zh:'文本转语音,50+语种,300+语音包'},cat:'音频',icon:'🗣️'},
{name:'LALAL.AI',url:'https://www.lalal.ai/',desc:{en:'Vocal/instrument separation, lossless quality',zh:'人声/伴奏分离,音质无损'},cat:'音频',icon:'🎵'},
]
export default function AudioGenOverview(){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>🎵 {L('Audio & Music','音频工具','音頻工具')}</h2><p className={styles.subtitle}>{L('15 AI music, TTS and audio production tools','15款AI音乐、语音合成和音频制作工具','15款AI音樂、語音合成和音頻製作工具')}</p></div>
<LinkNav links={links} lang={lang as'en'|'zh-CN'|'zh-TW'} color="#ec4899" /></div>)}
