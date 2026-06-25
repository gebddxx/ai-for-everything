import { useT } from '../contexts/LanguageContext';import LinkNav,{type ToolLink}from'../components/LinkNav';import styles from'./Page.module.css'
const links:ToolLink[]=[
{name:'Meshy',url:'https://www.meshy.ai/',desc:{en:'Text/image→3D model, export Blender/Unity',zh:'文字/图片→3D模型,导出Blender/Unity'},cat:'3d',icon:'🧊'},
{name:'Luma AI',url:'https://lumalabs.ai/',desc:{en:'Phone scan→3D, Genie text-to-3D',zh:'手机扫描实物→3D,Genie文字生成3D'},cat:'3d',icon:'📸'},
{name:'Spline AI',url:'https://spline.design/ai',desc:{en:'Browser 3D design, AI style transfer',zh:'浏览器端3D设计,AI风格迁移'},cat:'3d',icon:'🔮'},
{name:'Tripo AI',url:'https://www.tripo3d.ai/',desc:{en:'Fast text/image→3D, API, game-ready',zh:'快速文/图生3D,提供API,游戏级输出'},cat:'3d',icon:'📐'},
{name:'CSM AI',url:'https://csm.ai/',desc:{en:'3D world generation from images/text',zh:'图片/文字→3D世界生成'},cat:'3d',icon:'🌍'},
{name:'Skybox AI',url:'https://skybox.blockadelabs.com/',desc:{en:'360° skybox & HDR environment generation',zh:'360°天空盒+HDR环境生成'},cat:'3d',icon:'🌌'},
{name:'Leonardo.ai',url:'https://leonardo.ai/',desc:{en:'Game asset gen, consistent characters, textures',zh:'游戏资产生成,角色一致性,材质纹理'},cat:'game',icon:'🦁'},
{name:'Scenario',url:'https://www.scenario.com/',desc:{en:'Fine-tune AI on your style, bulk assets',zh:'按你的美术风格微调AI,批量生成资产'},cat:'game',icon:'🎨'},
{name:'Layer.ai',url:'https://www.layer.ai/',desc:{en:'Game-ready 3D assets, style-consistent',zh:'游戏级3D资产,风格统一'},cat:'game',icon:'📦'},
{name:'Unity Muse',url:'https://muse.unity.com/',desc:{en:'Unity AI: sprites, textures, animation',zh:'Unity AI套件:精灵图/纹理/动画生成'},cat:'game',icon:'🎮'},
{name:'Anything World',url:'https://anything.world/',desc:{en:'Animate 3D models with AI auto-rigging',zh:'AI自动绑定骨骼,让3D模型动起来'},cat:'game',icon:'🦴'},
{name:'InWorld AI',url:'https://inworld.ai/',desc:{en:'AI NPC engine: personality, memory, dialogue',zh:'AI NPC引擎:人格设定/记忆/实时对话'},cat:'npc',icon:'🧠'},
{name:'Convai',url:'https://convai.com/',desc:{en:'NPCs with environment awareness, real-time voice',zh:'NPC有环境感知能力,实时语音对话'},cat:'npc',icon:'🗣️'},
{name:'Ready Player Me',url:'https://readyplayer.me/',desc:{en:'Cross-game avatar platform, AI-generated',zh:'跨游戏虚拟化身平台,AI生成'},cat:'npc',icon:'🧑'},
]
export default function Game3DOverview(){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>🎮 {L('AI 3D & Gaming','AI 3D 与游戏','AI 3D 與遊戲')}</h2><p className={styles.subtitle}>{L('14 tools — 3D modeling, game assets, NPC AI','14款工具——3D建模、游戏资产、NPC AI','14款工具——3D建模、遊戲資產、NPC AI')}</p></div>
<LinkNav links={links} lang={lang as'en'|'zh-CN'|'zh-TW'} color="#7c3aed" catNames={{'3d':L('3D Generation','3D 生成','3D 生成'),game:L('Game Assets','游戏资产生成','遊戲資產生態'),npc:L('NPC AI','NPC AI 与行为','NPC AI 與行為')}}/></div>)}
