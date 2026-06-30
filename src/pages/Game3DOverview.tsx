import { useT } from '../contexts/LanguageContext';import LinkNav,{type ToolLink}from'../components/LinkNav';import styles from'./Page.module.css'
const links:ToolLink[]=[
{name:'Meshy',url:'https://www.meshy.ai/',desc:{en:'Text/image→3D model, export Blender/Unity',zh:'文字/图片→3D模型,导出Blender/Unity'},cat:'3D生成',icon:'🧊'},
{name:'Luma AI',url:'https://lumalabs.ai/',desc:{en:'Phone scan→3D, Genie text-to-3D',zh:'手机扫描实物→3D,Genie文字生成3D'},cat:'3D生成',icon:'📸'},
{name:'Spline AI',url:'https://spline.design/ai',desc:{en:'Browser 3D design, AI style transfer',zh:'浏览器端3D设计,AI风格迁移'},cat:'3D生成',icon:'🔮'},
{name:'Tripo AI',url:'https://www.tripo3d.ai/',desc:{en:'Fast text/image→3D, API, game-ready',zh:'快速文/图生3D,提供API,游戏级输出'},cat:'3D生成',icon:'📐'},
{name:'CSM AI',url:'https://csm.ai/',desc:{en:'3D world generation from images/text',zh:'图片/文字→3D世界生成'},cat:'3D生成',icon:'🌍'},
{name:'Skybox AI',url:'https://skybox.blockadelabs.com/',desc:{en:'360° skybox & HDR environment generation',zh:'360°天空盒+HDR环境生成'},cat:'3D生成',icon:'🌌'},
{name:'Rodin',url:'https://hyperhuman.deemos.com/',desc:{en:'Instant 3D avatar & object generation',zh:'瞬间3D头像/物体生成,高精度材质'},cat:'3D生成',icon:'🗿'},
{name:'Wonder3D',url:'https://www.xxiv.ai/',desc:{en:'Single image→consistent multi-view 3D',zh:'单张图片→一致性多视角3D模型'},cat:'3D生成',icon:'3️⃣'},
{name:'Leonardo.ai',url:'https://leonardo.ai/',desc:{en:'Game asset gen, consistent characters, textures',zh:'游戏资产生成,角色一致性,材质纹理'},cat:'游戏资产',icon:'🦁'},
{name:'Scenario',url:'https://www.scenario.com/',desc:{en:'Fine-tune AI on your style, bulk assets',zh:'按你的美术风格微调AI,批量生成资产'},cat:'游戏资产',icon:'🎨'},
{name:'Layer.ai',url:'https://www.layer.ai/',desc:{en:'Game-ready 3D assets, style-consistent',zh:'游戏级3D资产,风格统一'},cat:'游戏资产',icon:'📦'},
{name:'Unity Muse',url:'https://muse.unity.com/',desc:{en:'Unity AI: sprites, textures, animation',zh:'Unity AI套件:精灵图/纹理/动画生成'},cat:'游戏资产',icon:'🎮'},
{name:'Anything World',url:'https://anything.world/',desc:{en:'Animate 3D models with AI auto-rigging',zh:'AI自动绑定骨骼,让3D模型动起来'},cat:'游戏资产',icon:'🦴'},
{name:'Promethean AI',url:'https://www.prometheanai.com/',desc:{en:'AI assistant for 3D world building & level design',zh:'AI助手辅助3D世界搭建和关卡设计'},cat:'游戏资产',icon:'🏛️'},
{name:'Cocos AI',url:'https://www.cocos.com/',desc:{en:'Chinese game engine, AI content pipeline',zh:'国产游戏引擎Cocos,AI内容管线'},cat:'游戏资产',icon:'🐼'},
{name:'InWorld AI',url:'https://inworld.ai/',desc:{en:'AI NPC engine: personality, memory, dialogue',zh:'AI NPC引擎:人格设定/记忆/实时对话'},cat:'NPC AI',icon:'🧠'},
{name:'Convai',url:'https://convai.com/',desc:{en:'NPCs with environment awareness, real-time voice',zh:'NPC有环境感知能力,实时语音对话'},cat:'NPC AI',icon:'🗣️'},
{name:'Ready Player Me',url:'https://readyplayer.me/',desc:{en:'Cross-game avatar platform, AI-generated',zh:'跨游戏虚拟化身平台,AI生成'},cat:'NPC AI',icon:'🧑'},
{name:'CharacterX',url:'https://characterx.ai/',desc:{en:'AI social characters with memory & personality',zh:'AI社交角色,有记忆和个性的虚拟伙伴'},cat:'NPC AI',icon:'🫂'},
{name:'超参数科技',url:'https://www.chaocanshu.com/',desc:{en:'AI game NPCs, LUI framework, Tencent-backed',zh:'游戏AI NPC引擎,腾讯投资,动态叙事'},cat:'NPC AI',icon:'🧬'},
{name:'启元世界',url:'https://www.inspirai.com/',desc:{en:'General AI for gaming, adaptive NPC behavior',zh:'通用游戏AI,自适应NPC行为,深度强化学习'},cat:'NPC AI',icon:'🌐'},
{name:'Rct AI',url:'https://rct.ai/',desc:{en:'AI-driven dynamic game narrative & NPC',zh:'AI驱动的动态游戏叙事和NPC行为'},cat:'NPC AI',icon:'📖'},
]
export default function Game3DOverview({ scrollTo }:{ scrollTo?: string }){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>🎮 {L('3D & Gaming','3D 与游戏','3D 與遊戲')}</h2><p className={styles.subtitle}>{L('22 tools — 3D modeling, game assets, NPC AI','22款工具——3D建模、游戏资产、NPC AI','22款工具——3D建模、遊戲資產、NPC AI')}</p></div>
<LinkNav links={links} lang={lang as'en'|'zh-CN'|'zh-TW'} color="#7c3aed" scrollTo={scrollTo} catNames={{'3d':L('3D Generation','3D 生成','3D 生成'),game:L('Game Assets','游戏资产生成','遊戲資產生態'),npc:L('NPC AI','NPC AI 与行为','NPC AI 與行為')}}/></div>)}
