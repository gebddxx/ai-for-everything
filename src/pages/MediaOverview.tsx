import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'
export default function MediaOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  const LA = (en: string[], zh: string[], tw: string[]) => lang === 'zh-CN' ? zh : lang === 'zh-TW' ? tw : en
  return (<div className={styles.page}>
    <div style={{background:'linear-gradient(135deg,#4a044e 0%,#6b21a8 50%,#86198f 100%)',borderRadius:14,padding:'24px 28px',marginBottom:24,color:'#fff'}}>
      <h2 style={{fontSize:24,fontWeight:800,margin:'0 0 16px'}}>🎬 {L('AI in Media','AI 媒体娱乐','AI 媒體娛樂')}</h2>
      <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>{[{v:'$1B/年',t:'Netflix省流失'},{v:'50-70%',t:'美术成本↓'},{v:'3,700/季',t:'AI自动写稿'},{v:'$50B+',t:'2027市场'}].map(s=>(<div key={s.t} style={{textAlign:'center',background:'rgba(255,255,255,0.13)',borderRadius:10,padding:'14px 18px',minWidth:80}}><div style={{fontSize:28,fontWeight:800}}>{s.v}</div><div style={{fontSize:12,opacity:.8,marginTop:2}}>{s.t}</div></div>))}</div>
    </div>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12}}>🎮 {L('AI × Media','AI × 媒体','AI × 媒體')}</h3>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:10,marginBottom:24}}>
      {[{icon:'🎮',t:L('AI游戏','AI游戏','AI遊戲'),items:LA(['🤖 NPC实时对话 AI','🏗️ 自然语言→3D世界','💰 美术成本 ↓50-70%'],['🤖 NPC实时对话 AI','🏗️ 自然语言→3D世界','💰 美术成本 ↓50-70%'],['🤖 NPC real-time dialogue','🏗️ NL→3D world','💰 Art cost ↓50-70%'])},
        {icon:'🎥',t:L('影视制作','影视制作','影視製作'),items:LA(['✂️ AI特效+智能剪辑','🎬 好莱坞已用于大片','📊 票房预测 85%+准确'],['✂️ AI特效+智能剪辑','🎬 好莱坞已用于大片','📊 票房预测 85%+准确'],['✂️ AI VFX+smart editing','🎬 Used in Hollywood','📊 Box office 85%+ acc'])},
        {icon:'📰',t:L('AI新闻','AI新闻','AI新聞'),items:LA(['🤖 每季自动写 3700篇','📝 赛事报道自动生成','📈 98% 金融摘要准确'],['🤖 每季自动写 3700篇','📝 赛事报道自动生成','📈 98% 金融摘要准确'],['🤖 3,700 articles/quarter','📝 Auto sports coverage','📈 98% finance accuracy'])},
        {icon:'🎵',t:L('AI音乐','AI音乐','AI音樂'),items:LA(['🎹 文字→完整歌曲','🔊 AI DJ个性化电台','🎧 70% 歌曲来自推荐'],['🎹 文字→完整歌曲','🔊 AI DJ个性化电台','🎧 70% 歌曲来自推荐'],['🎹 Text→full songs','🔊 AI DJ personal radio','🎧 70% from recommendations'])},
      ].map(c=>(<div key={c.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 10px'}}>{c.icon} {c.t}</h4><div style={{display:'flex',flexDirection:'column',gap:6}}>{c.items.map((item,i)=>(<div key={i} style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.5}}>{item}</div>))}</div></div>))}
    </div>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',margin:'28px 0 12px',paddingBottom:8,borderBottom:'2px solid var(--border)'}}>🔗 {L('Tools','工具导航','工具導航')}</h3>
    <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#8b5cf6" />
  </div>)}
const links: ToolLink[] = [
  {name:'NVIDIA ACE',url:'https://www.nvidia.com/',desc:{en:'AI NPC platform, real-time dialogue',zh:'AI NPC平台,实时对话+动画'},cat:'工具',icon:'🎮'},
  {name:'Runway',url:'https://runwayml.com/',desc:{en:'AI video/VFX, Hollywood grade',zh:'AI视频/特效,好莱坞级'},cat:'工具',icon:'🎥'},
  {name:'Suno',url:'https://suno.com/',desc:{en:'AI music, text→full songs',zh:'AI音乐,文字→完整歌曲'},cat:'工具',icon:'🎵'},
  {name:'Descript',url:'https://www.descript.com/',desc:{en:'AI video/audio editing',zh:'AI视频/音频编辑'},cat:'工具',icon:'✂️'},
  {name:'字节跳动AI',url:'https://www.bytedance.com/',desc:{en:'Douyin/TikTok AI recs+editing',zh:'抖音/TikTok AI推荐+剪辑'},cat:'工具',icon:'🎬'},
]
