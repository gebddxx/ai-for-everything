import { useT } from '../contexts/LanguageContext';import LinkNav,{type ToolLink}from'../components/LinkNav';import styles from'./Page.module.css'
const links:ToolLink[]=[
{n:'Meshy',u:'https://www.meshy.ai/',d:{en:'Text/image→3D model, export Blender/Unity',zh:'文字/图片→3D模型,导出Blender/Unity'},c:'3d',i:'🧊'},
{n:'Luma AI',u:'https://lumalabs.ai/',d:{en:'Phone scan→3D, Genie text-to-3D',zh:'手机扫描实物→3D,Genie文字生成3D'},c:'3d',i:'📸'},
{n:'Spline AI',u:'https://spline.design/ai',d:{en:'Browser 3D design, AI style transfer',zh:'浏览器端3D设计,AI风格迁移'},c:'3d',i:'🔮'},
{n:'Tripo AI',u:'https://www.tripo3d.ai/',d:{en:'Fast text/image→3D, API, game-ready',zh:'快速文/图生3D,提供API,游戏级输出'},c:'3d',i:'📐'},
{n:'CSM AI',u:'https://csm.ai/',d:{en:'3D world generation from images/text',zh:'图片/文字→3D世界生成'},c:'3d',i:'🌍'},
{n:'Skybox AI',u:'https://skybox.blockadelabs.com/',d:{en:'360° skybox & HDR environment generation',zh:'360°天空盒+HDR环境生成'},c:'3d',i:'🌌'},
{n:'Leonardo.ai',u:'https://leonardo.ai/',d:{en:'Game asset gen, consistent characters, textures',zh:'游戏资产生成,角色一致性,材质纹理'},c:'game',i:'🦁'},
{n:'Scenario',u:'https://www.scenario.com/',d:{en:'Fine-tune AI on your style, bulk assets',zh:'按你的美术风格微调AI,批量生成资产'},c:'game',i:'🎨'},
{n:'Layer.ai',u:'https://www.layer.ai/',d:{en:'Game-ready 3D assets, style-consistent',zh:'游戏级3D资产,风格统一'},c:'game',i:'📦'},
{n:'Unity Muse',u:'https://muse.unity.com/',d:{en:'Unity AI: sprites, textures, animation',zh:'Unity AI套件:精灵图/纹理/动画生成'},c:'game',i:'🎮'},
{n:'Anything World',u:'https://anything.world/',d:{en:'Animate 3D models with AI auto-rigging',zh:'AI自动绑定骨骼,让3D模型动起来'},c:'game',i:'🦴'},
{n:'InWorld AI',u:'https://inworld.ai/',d:{en:'AI NPC engine: personality, memory, dialogue',zh:'AI NPC引擎:人格设定/记忆/实时对话'},c:'npc',i:'🧠'},
{n:'Convai',u:'https://convai.com/',d:{en:'NPCs with environment awareness, real-time voice',zh:'NPC有环境感知能力,实时语音对话'},c:'npc',i:'🗣️'},
{n:'Ready Player Me',u:'https://readyplayer.me/',d:{en:'Cross-game avatar platform, AI-generated',zh:'跨游戏虚拟化身平台,AI生成'},c:'npc',i:'🧑'},
]
export default function Game3DOverview(){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>🎮 {L('AI 3D & Gaming','AI 3D 与游戏','AI 3D 與遊戲')}</h2><p className={styles.subtitle}>{L('14 tools — 3D modeling, game assets, NPC AI','14款工具——3D建模、游戏资产、NPC AI','14款工具——3D建模、遊戲資產、NPC AI')}</p></div>
<LinkNav links={links} lang={lang as'en'|'zh-CN'|'zh-TW'} color="#7c3aed" catNames={{'3d':L('3D Generation','3D 生成','3D 生成'),game:L('Game Assets','游戏资产生成','遊戲資產生態'),npc:L('NPC AI','NPC AI 与行为','NPC AI 與行為')}}/></div>)}
