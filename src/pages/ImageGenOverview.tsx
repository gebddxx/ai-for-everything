import { useT } from '../contexts/LanguageContext';import LinkNav,{type ToolLink}from'../components/LinkNav';import styles from'./Page.module.css'
const links:ToolLink[]=[
{name:'Midjourney',url:'https://www.midjourney.com/',desc:{en:'Best artistic quality, aesthetic images',zh:'艺术品质最高,审美感极佳,Discord使用'},cat:'绘画',icon:'🖼️'},
{name:'Stable Diffusion',url:'https://stability.ai/',desc:{en:'Open source, full control, local run, plugins',zh:'开源,完全可控,本地运行,插件生态丰富'},cat:'绘画',icon:'🎨'},
{name:'DALL·E 3',url:'https://openai.com/dall-e-3',desc:{en:'Natural language→image, ChatGPT built-in',zh:'自然语言直接生图,ChatGPT内置'},cat:'绘画',icon:'🎯'},
{name:'Adobe Firefly',url:'https://www.adobe.com/products/firefly.html',desc:{en:'Commercial-safe, Photoshop integration',zh:'版权安全,Photoshop深度集成'},cat:'绘画',icon:'🔥'},
{name:'Leonardo.ai',url:'https://leonardo.ai/',desc:{en:'Game assets, consistent style, fine-tuning',zh:'游戏资产生成,风格一致,可微调模型'},cat:'绘画',icon:'🦁'},
{name:'ComfyUI',url:'https://github.com/comfyanonymous/ComfyUI',desc:{en:'Node-based workflow, ultimate control',zh:'节点式工作流,终极定制,极客首选'},cat:'绘画',icon:'🔗'},
{name:'通义万相',url:'https://tongyi.aliyun.com/wanxiang/',desc:{en:'Alibaba AI image gen, text→image/video',zh:'阿里AI绘画,文字→图片/视频,中文理解强'},cat:'绘画',icon:'☁️'},
{name:'文心一格',url:'https://yige.baidu.com/',desc:{en:'Baidu AI art, text→Chinese-style images',zh:'百度AI绘画,文生图,国风艺术风格'},cat:'绘画',icon:'🖌️'},
{name:'堆友',url:'https://www.duiyouai.com/',desc:{en:'Alibaba 3D avatar & design asset generation',zh:'阿里3D头像/素材生成,设计师社区'},cat:'绘画',icon:'🎭'},
{name:'LiblibAI',url:'https://www.liblib.ai/',desc:{en:'Chinese AI model hub, 100K+ LoRA/checkpoints',zh:'国产AI模型平台,10万+LoRA/Checkpoint模型'},cat:'绘画',icon:'🧩'},
{name:'即梦AI',url:'https://jimeng.jianying.com/',desc:{en:'ByteDance, top Chinese image gen, Chinese posters',zh:'字节即梦AI,中文海报字,东方美学'},cat:'绘画',icon:'💫'},
{name:'创客贴AI',url:'https://www.chuangkit.com/',desc:{en:'Smart poster gen, one-click bg removal, watermark',zh:'智能海报生成,一键抠图,批量去水印'},cat:'绘画',icon:'🎨'},
{name:'美图WHEE',url:'https://whee.meitu.com/',desc:{en:'Meitu AI: text-to-image, image-to-image, video',zh:'美图AI:文生图/图生图/文生视频'},cat:'绘画',icon:'📸'},
{name:'Vega AI',url:'https://vegaai.net/',desc:{en:'Text/image/pose→image, style transfer',zh:'文生图/图生图/姿态生图,风格迁移'},cat:'绘画',icon:'🎯'},
{name:'佐糖',url:'https://zuotang.com/',desc:{en:'Old photo restore, lossless upscale, AI enhancement',zh:'老照片修复,无损放大,AI画质增强'},cat:'绘画',icon:'🔧'},
{name:'360智绘',url:'https://ai.360.com/',desc:{en:'360 AI painting, style transfer, LoRA training',zh:'360 AI绘画,风格迁移,LoRA模型训练'},cat:'绘画',icon:'🛡️'},
{name:'Recraft',url:'https://www.recraft.ai/',desc:{en:'Designer favorite, vector gen, style transfer',zh:'设计师最爱,矢量图生成,风格迁移'},cat:'绘画',icon:'✏️'},
{name:'Ideogram',url:'https://ideogram.ai/',desc:{en:'Text embedding in images, logo/badge gen',zh:'文字嵌入图像超强,Logo/徽章生成'},cat:'绘画',icon:'🔤'},
{name:'Flux',url:'https://blackforestlabs.ai/',desc:{en:'Ultra-realistic image gen, open source',zh:'图像逼真度极高,开源免费,社区模型丰富'},cat:'绘画',icon:'🌿'},
{name:'腾讯ARC',url:'https://arc.tencent.com/',desc:{en:'Tencent AI: portrait restore, cutout, face enhance',zh:'腾讯AI人像修复,人像抠图,画质增强'},cat:'绘画',icon:'🔧'},
{name:'妙鸭相机',url:'https://miaoya.ai/',desc:{en:'AI写真, 20+ portrait styles, one-click generation',zh:'AI写真生成,20+风格,上传照片一键生成写真'},cat:'绘画',icon:'📸'},
{name:'Remini',url:'https://remini.ai/',desc:{en:'AI photo enhancer, old photo restore, face detail',zh:'AI照片增强,老照片修复,面部细节还原'},cat:'绘画',icon:'✨'},
{name:'可灵AI',url:'https://klingai.com/',desc:{en:'Kuaishou, top AI image+video gen, high quality',zh:'快手出品,AI生图+视频,画质极高'},cat:'绘画',icon:'🎬'},
]
export default function ImageGenOverview(){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>🎨 {L('Image Generation','绘画工具','繪畫工具')}</h2><p className={styles.subtitle}>{L('23 AI image generation and editing tools','23款AI绘画和图片编辑工具','23款AI繪畫和圖片編輯工具')}</p></div>
<LinkNav links={links} lang={lang as'en'|'zh-CN'|'zh-TW'} color="#ec4899" /></div>)}
