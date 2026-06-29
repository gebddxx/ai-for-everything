import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

export default function MediaOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (
    <div className={styles.page}>
      <div className={styles.head}><h2 className={styles.title}>🎬 {L('AI in Media','AI 媒体娱乐','AI 媒體娛樂')}</h2><p className={styles.subtitle}>{L('How AI reshapes content creation, gaming, film and music','AI如何重塑内容创作、游戏、影视和音乐','AI如何重塑內容創作、遊戲、影視和音樂')}</p></div>
      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:'var(--border)',margin:'36px 0 20px'}} /><h3 style={{fontSize:17,fontWeight:700,color:'var(--text)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>{L('AI媒体正在改变什么','AI is Transforming Media','AI正在改變媒體')}</h3>
        <p style={{color:'var(--text-secondary)',lineHeight:1.8,fontSize:14,marginBottom:12}}>{L('AI正在从根本上改变内容的生产和消费方式。Netflix用AI个性化推荐每年节省10亿美元的流失成本；好莱坞用AI进行剧本评估和票房预测，将制片风险降低30%；游戏行业用AI生成开放世界、NPC对话和实时渲染；新闻机构用AI自动撰写财经和体育报道。中国在短视频AI应用全球领先——抖音和快手的AI推荐驱动数亿日活，字节跳动用AI自动剪辑和字幕生成，将视频制作时间缩短80%。全球AI媒体市场规模预计2027年突破500亿美元。','AI正在從根本上改變內容的生產和消費方式。Netflix用AI個性化推薦每年節省10億美元流失成本；好萊塢用AI進行劇本評估和票房預測；遊戲行業用AI生成開放世界和NPC對話；新聞機構用AI自動撰寫財經和體育報導。中國在短視頻AI應用全球領先——抖音和快手的AI推薦驅動數億日活。全球AI媒體市場規模預計2027年突破500億美元。','AI is fundamentally changing content production and consumption. Netflix saves $1B annually in churn reduction with AI recommendations; Hollywood uses AI for script evaluation and box office prediction; gaming uses AI for open world generation and NPC dialogue; news agencies auto-generate finance and sports reports. China leads in short-video AI — Douyin and Kuaishou AI recommendations drive hundreds of millions of DAU. Global AI media market projected to exceed $50B by 2027.')}</p>
      </section>
      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:'var(--border)',margin:'36px 0 20px'}} /><h3 style={{fontSize:17,fontWeight:700,color:'var(--text)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>{L('前沿应用场景','Cutting-Edge Applications','前沿應用場景')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:12}}>
          {[{icon:'🎮',t:L('AI游戏','AI Gaming','AI遊戲'),d:L('生成式AI正在重新定义游戏开发。NVIDIA ACE用AI为NPC赋予实时对话能力。Roblox的AI工具让创作者用自然语言生成3D世界。腾讯AILab的绝悟AI在王者荣耀中击败职业选手。AI游戏资产生成将美术成本降低50-70%。','Generative AI redefines game development. NVIDIA ACE gives NPCs real-time conversational ability. Roblox AI tools let creators generate 3D worlds from natural language. Tencent AI Lab Juewu beat pro players in Honor of Kings. AI game asset generation cuts art costs by 50-70%.','生成式AI正在重新定義遊戲開發。NVIDIA ACE用AI為NPC賦予即時對話能力。Roblox的AI工具讓創作者用自然語言生成3D世界。')},
          {icon:'🎥',t:L('AI影视制作','Film & Video','AI影視製作'),d:L('AI辅助剧本分析、特效生成和智能剪辑。Runway的AI工具已被好莱坞用于《瞬息全宇宙》特效。Adobe Premiere Pro的AI自动生成字幕和场景检测。中国博纳影业用AI进行票房预测和营销策略优化，准确率达85%+。','AI assists script analysis, VFX and smart editing. Runway AI tools were used in Hollywood\'s "Everything Everywhere All At Once". Adobe Premiere AI auto-generates captions and scene detection. Chinese Bona Film uses AI for box office prediction at 85%+ accuracy.','AI輔助劇本分析、特效生成和智慧剪輯。Runway的AI工具已被好萊塢用於《瞬息全宇宙》特效。Adobe Premiere Pro的AI自動生成字幕和場景檢測。')},
          {icon:'📰',t:L('AI新闻与内容','News & Content','AI新聞與內容'),d:L('美联社用AI每季度自动生成3700篇财报新闻。华盛顿邮报的Heliograf AI在里约奥运会期间自动撰写赛事报道。今日头条AI写作每天生成数万篇资讯。Bloomberg用GPT自动生成金融新闻摘要，准确率98%。','AP generates 3,700 quarterly earnings reports with AI. Washington Post Heliograf AI auto-wrote Olympic event coverage. Toutiao AI generates tens of thousands of articles daily. Bloomberg uses GPT for financial news summaries at 98% accuracy.','美聯社用AI每季度自動生成3700篇財報新聞。今日頭條AI寫作每天生成數萬篇資訊。Bloomberg用GPT自動生成金融新聞摘要。')},
          {icon:'🎵',t:L('AI音乐与音频','Music & Audio','AI音樂與音頻'),d:L('AI作曲和声音合成正在改变音乐产业。Suno和Udio让普通用户用文字生成完整歌曲。环球音乐用AI检测版权侵权。Spotify的AI DJ根据用户口味生成个性化电台。网易云音乐的AI推荐驱动70%的歌曲发现。','AI composition and voice synthesis are transforming music. Suno and Udio let anyone generate full songs from text. Universal Music uses AI for copyright detection. Spotify AI DJ generates personalized radio. NetEase Cloud Music AI drives 70% of song discovery.','AI作曲和聲音合成正在改變音樂產業。Suno和Udio讓普通用戶用文字生成完整歌曲。Spotify的AI DJ根據用戶口味生成個性化電台。')},
        ].map(item => (<div key={item.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 4px'}}>{item.icon} {item.t}</h4><p style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.7,margin:0}}>{item.d}</p></div>))}
        </div>
      </section>
      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:'var(--border)',margin:'36px 0 20px'}} /><h3 style={{fontSize:17,fontWeight:700,color:'var(--text)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>{L('关键数据','Key Metrics','關鍵數據')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:10}}>
          {[{v:'$1B',l:L('Netflix AI年省流失成本','Netflix Annual AI Save','Netflix年省流失成本')},{v:'50-70%',l:L('AI降低游戏美术成本','Game Art Cost Drop','AI降低遊戲美術成本')},{v:'3,700/季',l:L('美联社AI自动写稿','AP AI Articles/Qtr','美聯社AI自動寫稿')},{v:'$50B+',l:L('2027年AI媒体市场','2027 AI Media Market','2027年AI媒體市場')}].map(m => (<div key={m.l} style={{textAlign:'center',padding:'16px 12px',background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><div style={{fontSize:24,fontWeight:800,color:'var(--primary)'}}>{m.v}</div><div style={{fontSize:12,color:'var(--text-secondary)',marginTop:4}}>{m.l}</div></div>))}
        </div>
      </section>
      <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12,marginTop:24}}>{L('行业工具导航','Industry Tool Directory','行業工具導航')}</h3>
      <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#8b5cf6" />
    </div>
  )
}
const links: ToolLink[] = [
  {name:'NVIDIA ACE',url:'https://www.nvidia.com/ace/',desc:{en:'AI NPC platform, real-time dialogue + animation',zh:'AI NPC平台,实时对话+动画,数字人微服务'},cat:'tools',icon:'🎮'},
  {name:'Runway',url:'https://runwayml.com/',desc:{en:'AI video/VFX, used in Hollywood productions',zh:'AI视频/特效,好莱坞级,Gen-3电影画质'},cat:'tools',icon:'🎥'},
  {name:'Suno',url:'https://suno.com/',desc:{en:'AI music generation, full songs from text prompts',zh:'AI音乐生成,文字描述→完整歌曲'},cat:'tools',icon:'🎵'},
  {name:'Descript',url:'https://www.descript.com/',desc:{en:'AI video/audio editing, edit by editing text',zh:'AI视频/音频编辑,像编辑文档一样编辑视频'},cat:'tools',icon:'✂️'},
  {name:'Spotify AI',url:'https://www.spotify.com/',desc:{en:'AI DJ, personalized playlists, discovery engine',zh:'AI DJ,个性化电台,音乐发现引擎'},cat:'tools',icon:'🟢'},
  {name:'字节跳动AI',url:'https://www.bytedance.com/',desc:{en:'Douyin/TikTok AI recs, auto editing, caption gen',zh:'抖音/TikTok AI推荐+自动剪辑+字幕生成'},cat:'tools',icon:'🎬'},
]
