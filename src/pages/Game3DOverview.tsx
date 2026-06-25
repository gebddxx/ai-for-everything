import { useT } from '../contexts/LanguageContext';import styles from './Page.module.css'
export default function Game3DOverview(){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
const links=[
{name:'Meshy',url:'https://www.meshy.ai/',dEn:'Text/image → 3D model in minutes, export to Blender/Unity',dZh:'文字/图片→3D模型，导出到Blender/Unity',cat:'3d'},
{name:'Luma AI',url:'https://lumalabs.ai/',dEn:'Capture real objects in 3D with phone, Genie text-to-3D',dZh:'手机扫描实物→3D，Genie文字生成3D',cat:'3d'},
{name:'Spline AI',url:'https://spline.design/ai',dEn:'Browser-based 3D design with AI style transfer & generation',dZh:'浏览器端3D设计+AI风格迁移和生成',cat:'3d'},
{name:'Tripo AI',url:'https://www.tripo3d.ai/',dEn:'Fast text/image to 3D, API available, game-ready output',dZh:'快速文/图生3D，提供API，输出可直接用于游戏',cat:'3d'},
{name:'Scenario',url:'https://www.scenario.com/',dEn:'Fine-tune AI on your art style, generate game assets in bulk',dZh:'用你的美术风格微调AI，批量生成游戏资产',cat:'game'},
{name:'Leonardo.ai',url:'https://leonardo.ai/',dEn:'Game asset generation, consistent character design, textures',dZh:'游戏资产生成，角色一致性设计，材质纹理',cat:'game'},
{name:'InWorld AI',url:'https://inworld.ai/',dEn:'AI NPC engine: personality, memory, real-time dialogue',dZh:'AI NPC引擎：人格、记忆、实时对话',cat:'npc'},
{name:'Convai',url:'https://convai.com/',dEn:'Conversational AI for virtual worlds, NPCs with awareness',dZh:'虚拟世界对话AI，NPC有环境感知能力',cat:'npc'},
{name:'Unity Muse',url:'https://muse.unity.com/',dEn:'Unity AI suite: sprite generation, texture creation, animation',dZh:'Unity AI套件：精灵图生成、纹理创建、动画',cat:'game'},
{name:'Blockade Labs',url:'https://skybox.blockadelabs.com/',dEn:'AI skybox & 360° environment generation for games',dZh:'AI天空盒+360°游戏环境生成',cat:'game'},
]
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>🎮 {L('AI 3D & Gaming','AI 3D 与游戏','AI 3D 與遊戲')}</h2><p className={styles.subtitle}>{L('3D modeling, game assets, NPC behavior — AI game dev tools','3D建模、游戏资产、NPC行为——AI游戏开发工具','3D建模、遊戲資產、NPC行為——AI遊戲開發工具')}</p></div>
<div className={styles.summary}>{L('Game development is one of the most AI-impacted creative fields. From generating 3D models from text descriptions to creating NPCs with believable personalities and memories, AI is making game creation faster and more accessible than ever.','游戏开发是AI影响最大的创意领域之一。从文字描述生3D模型，到创造有可信人格和记忆的NPC，AI正在让游戏创作变得前所未有的快速和平民化。','遊戲開發是AI影響最大的創意領域之一。從文字描述生3D模型，到創造有可信人格和記憶的NPC，AI正在讓遊戲創作變得前所未有的快速和平民化。')}</div>
<Dir links={links} lang={lang} catNames={{'3d':L('3D Generation','3D 生成','3D 生成'),game:L('Game Asset Creation','游戏资产生成','遊戲資產生態'),npc:L('NPC & AI Behavior','NPC 与 AI 行为','NPC 與 AI 行為')}} /></div>)}
function Dir({links,lang,catNames}:{links:{name:string;url:string;dEn:string;dZh:string;cat:string}[],lang:string,catNames:Record<string,string>}){const cats=[...new Set(links.map(l=>l.cat))]
return <div>{cats.map(cat=>(<div key={cat} style={{marginBottom:20}}><h3 style={{fontSize:15,fontWeight:700,color:'var(--text)',marginBottom:10}}>{catNames[cat]||cat}</h3><div style={{display:'flex',flexDirection:'column',gap:8}}>{links.filter(l=>l.cat===cat).map(l=>(<a key={l.name} href={l.url} target="_blank" rel="noopener" style={{display:'flex',alignItems:'center',gap:12,padding:'12px 16px',background:'var(--bg-card)',borderRadius:10,textDecoration:'none',border:'1px solid var(--border)',transition:'all .15s'}}><span style={{fontWeight:600,color:'var(--primary)',fontSize:14,minWidth:100}}>{l.name}</span><span style={{color:'var(--text-secondary)',fontSize:13,flex:1}}>{lang==='zh-CN'?l.dZh:l.dEn}</span><span style={{color:'var(--text-muted)',fontSize:16}}>↗</span></a>))}</div></div>))}</div>}
