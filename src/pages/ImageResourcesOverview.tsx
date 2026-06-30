import { useT } from '../contexts/LanguageContext'
import { tText, type MultiLang } from '../i18n/translate'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

export default function ImageResourcesOverview() {
  const { lang } = useT()
  const L = (a: MultiLang, b?: string, c?: string) => { if (typeof a !== "string") return tText(a, lang); if (b !== undefined) return lang === "zh-CN" ? (b || a) : lang === "zh-TW" ? (c || b || a) : a; return tText(a, lang) }
  return (
    <div className={styles.page}>
      <div className={styles.head}><h2 className={styles.title}>🖼️ {L('Image Resources','图片专区','圖片專區')}</h2><p className={styles.subtitle}>{L('Free stock photos, color tools, image editors, AI cutout, logo design','免费图库、配色工具、图片编辑、AI抠图、Logo设计','免費圖庫、配色工具、圖片編輯、AI摳圖、Logo設計')}</p></div>
      <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#14b8a6" />
    </div>
  )
}

const links: ToolLink[] = [
  // Free Stock Photos
  {name:'Pixabay',url:'https://pixabay.com/',desc:{en:'Free stock photos, vectors, illustrations, CC0',zh:'免费高清图片/矢量/插画,CC0可商用'},cat:'免费图库',icon:'🖼️'},
  {name:'Pexels',url:'https://www.pexels.com/',desc:{en:'Free stock photos & videos, high quality, CC0',zh:'免费高清图片+视频,高质量,CC0可商用'},cat:'免费图库',icon:'📷'},
  {name:'Unsplash',url:'https://unsplash.com/',desc:{en:'Beautiful free images, photographer community',zh:'精美免费图片,摄影师社区,可商用'},cat:'免费图库',icon:'🌄'},
  {name:'Pxhere',url:'https://pxhere.com/',desc:{en:'Free CC0 photos, no attribution required',zh:'免费CC0图片,无需署名,可商用'},cat:'免费图库',icon:'🖼️'},
  {name:'必应图库',url:'https://www.bing.com/images/',desc:{en:'Bing image search, high quality results',zh:'必应图片搜索,高质量图片结果'},cat:'免费图库',icon:'🔍'},
  {name:'百度图片',url:'https://image.baidu.com/',desc:{en:'Baidu image search, largest Chinese image index',zh:'百度图片搜索,中文最大图片索引'},cat:'免费图库',icon:'🐻'},
  {name:'搜狗图片',url:'https://pic.sogou.com/',desc:{en:'Sogou image search, diverse sources',zh:'搜狗图片搜索,来源广泛'},cat:'免费图库',icon:'🔎'},
  {name:'Everypixel',url:'https://www.everypixel.com/',desc:{en:'AI-powered stock image search, 50+ sources',zh:'AI驱动图库搜索,聚合50+图源'},cat:'免费图库',icon:'🤖'},
  {name:'Depositphotos',url:'https://depositphotos.com/',desc:{en:'Premium stock photos, vectors, videos',zh:'高质量付费图库,图片/矢量/视频'},cat:'免费图库',icon:'📸'},
  {name:'Shutterstock',url:'https://www.shutterstock.com/',desc:{en:'World largest stock library, 400M+ images',zh:'全球最大图库,4亿+图片/视频/音乐'},cat:'免费图库',icon:'🏪'},
  {name:'大作',url:'https://www.bigbigwork.com/',desc:{en:'Designer inspiration search, multi-source aggregation',zh:'设计师灵感搜索,多站聚合,免翻墙'},cat:'免费图库',icon:'🎨'},
  // Chinese Stock Libraries
  {name:'花瓣',url:'https://huaban.com/',desc:{en:'Chinese Pinterest, design inspiration collection',zh:'中国版Pinterest,设计灵感采集'},cat:'免费图库',icon:'🌸'},
  {name:'图虫',url:'https://tuchong.com/',desc:{en:'Photography community, high quality stock photos',zh:'摄影社区+高质量图库,可商用授权'},cat:'免费图库',icon:'📷'},
  {name:'千图网',url:'https://www.58pic.com/',desc:{en:'Design material: templates, vectors, backgrounds',zh:'设计素材:模板/矢量/背景/字体'},cat:'免费图库',icon:'🖌️'},
  // Image Search
  {name:'Google 以图搜图',url:'https://images.google.com/',desc:{en:'Reverse image search, find similar images',zh:'以图搜图,找相似图片和来源'},cat:'图片搜索',icon:'🔍'},
  {name:'百度识图',url:'https://image.baidu.com/',desc:{en:'Baidu reverse image search, visual recognition',zh:'百度以图搜图,视觉识别找同款'},cat:'图片搜索',icon:'🐻'},
  {name:'必应视觉搜寻',url:'https://www.bing.com/visualsearch',desc:{en:'Bing visual search, object recognition in images',zh:'必应视觉搜索,图片物体识别'},cat:'图片搜索',icon:'👁️'},
  // AI Cutout
  {name:'稿定抠图',url:'https://www.gaoding.com/koutu',desc:{en:'AI cutout, remove background in one click',zh:'AI智能抠图,一键去背景'},cat:'AI抠图',icon:'✂️'},
  {name:'PicWish / 佐糖',url:'https://picwish.com/',desc:{en:'AI cutout + photo enhance, batch processing',zh:'AI抠图+修图,批量处理,老照片修复'},cat:'AI抠图',icon:'✨'},
  {name:'片刻抠图',url:'https://www.pianke.me/',desc:{en:'Quick AI background removal, precise edges',zh:'快速AI抠图,精准边缘处理'},cat:'AI抠图',icon:'🖌️'},
  {name:'Remove.bg',url:'https://www.remove.bg/',desc:{en:'AI background removal, 5 seconds, API available',zh:'AI去背景,5秒完成,提供API'},cat:'AI抠图',icon:'🎯'},
  // Online Editors
  {name:'在线PS软件',url:'https://www.photopea.com/',desc:{en:'Photopea, free online Photoshop alternative',zh:'免费在线PS,媲美Photoshop功能'},cat:'在线修图',icon:'🖥️'},
  {name:'美图秀秀',url:'https://www.meitu.com/',desc:{en:'Popular photo editor, beauty + filters + collage',zh:'全民修图神器,美颜/滤镜/拼图'},cat:'在线修图',icon:'💄'},
  {name:'Fotor',url:'https://www.fotor.com/',desc:{en:'Online photo editor + design, templates',zh:'在线修图+设计,海量模板'},cat:'在线修图',icon:'🖼️'},
  {name:'稿定设计',url:'https://www.gaoding.com/',desc:{en:'Design + editing, templates, marketing materials',zh:'设计+修图,10万+模板,营销素材'},cat:'在线修图',icon:'✏️'},
  {name:'创客贴',url:'https://www.chuangkit.com/',desc:{en:'Quick design, posters, social media graphics',zh:'快速设计,海报/公众号封面/社媒图'},cat:'在线修图',icon:'🎨'},
  {name:'图怪兽',url:'https://www.818ps.com/',desc:{en:'Online graphic design, daily updated templates',zh:'在线平面设计,每日更新模板'},cat:'在线修图',icon:'👾'},
  {name:'图司机',url:'https://www.tusij.com/',desc:{en:'Easy graphic design, marketing visuals',zh:'简易平面设计,营销视觉素材'},cat:'在线修图',icon:'🚗'},
  {name:'微词云',url:'https://www.weiciyun.com/',desc:{en:'Word cloud generator, text visualization',zh:'词云生成器,文本可视化工具'},cat:'在线修图',icon:'☁️'},
  {name:'PhotoMosh',url:'https://photomosh.com/',desc:{en:'Glitch art effects, real-time photo distortion',zh:'故障艺术特效,实时照片扭曲效果'},cat:'在线修图',icon:'🌀'},
  // Color Schemes
  {name:'Coolors',url:'https://coolors.co/',desc:{en:'Color palette generator, space bar to generate',zh:'配色方案生成,按空格键随机生成'},cat:'配色方案',icon:'🎨'},
  {name:'Adobe Color',url:'https://color.adobe.com/',desc:{en:'Color wheel, harmony rules, extract from image',zh:'色轮配色,和谐规则,从图片提取配色'},cat:'配色方案',icon:'🎯'},
  {name:'中国色',url:'https://www.zhongguose.com/',desc:{en:'Traditional Chinese color palette, poetic names',zh:'中国传统色配色卡,诗意色名'},cat:'配色方案',icon:'🏮'},
  {name:'ColorHunt',url:'https://colorhunt.co/',desc:{en:'Curated color palettes, trending + popular',zh:'精选配色方案,热门+流行趋势'},cat:'配色方案',icon:'🌈'},
  {name:'uiGradients',url:'https://uigradients.com/',desc:{en:'Beautiful gradient collection, copy CSS code',zh:'精美渐变集合,一键复制CSS代码'},cat:'配色方案',icon:'🌊'},
  // Logo Design
  {name:'Logo设计 (标小智)',url:'https://www.logosc.cn/',desc:{en:'AI logo maker, brand kit generation',zh:'AI智能Logo设计,品牌套件一键生成'},cat:'Logo设计',icon:'🏷️'},
  {name:'Canva Logo',url:'https://www.canva.com/create/logos/',desc:{en:'Free logo maker, thousands of templates',zh:'免费Logo制作,数千模板,拖拽编辑'},cat:'Logo设计',icon:'🎨'},
  {name:'Hatchful (Shopify)',url:'https://hatchful.shopify.com/',desc:{en:'Free logo generator, industry-specific templates',zh:'免费Logo生成,行业专属模板'},cat:'Logo设计',icon:'🛍️'},
  {name:'Looka',url:'https://looka.com/',desc:{en:'AI logo + brand kit: logo, colors, fonts',zh:'AI Logo+品牌套件:配色/字体/名片'},cat:'Logo设计',icon:'👁️'},
  // Other Image Tools
  {name:'iLoveIMG',url:'https://www.iloveimg.com/',desc:{en:'All-in-one: compress, resize, crop, convert',zh:'全能图片:压缩/调整/裁剪/转换格式'},cat:'实用工具',icon:'❤️'},
  {name:'图片转 PDF',url:'https://www.ilovepdf.com/',desc:{en:'Convert images to PDF, merge, split PDFs',zh:'图片转PDF,合并/拆分PDF'},cat:'实用工具',icon:'📄'},
  {name:'SVG 在线制作',url:'https://www.jyshare.com/front-end/63/',desc:{en:'Online SVG editor, vector graphics creation',zh:'在线SVG编辑,矢量图形创作'},cat:'实用工具',icon:'📐',source:'jyshare'},
  {name:'图片转 ICO',url:'https://www.jyshare.com/front-end/67/',desc:{en:'Convert images to ICO favicon format',zh:'图片转ICO图标,网站favicon'},cat:'实用工具',icon:'⭐',source:'jyshare'},
  {name:'Blobmaker',url:'https://www.blobmaker.app/',desc:{en:'Generate organic SVG blob shapes, copy SVG code',zh:'生成有机SVG blob形状,复制SVG代码'},cat:'实用工具',icon:'🫧'},
  {name:'背景图制作',url:'https://www.jyshare.com/front-end/68/',desc:{en:'Custom background generator: gradient, pattern, texture',zh:'自定义背景生成:渐变/纹理/图案'},cat:'实用工具',icon:'🎭',source:'jyshare'},
  {name:'智绘证件照',url:'https://www.zhenghun.com/',desc:{en:'AI ID photo maker, auto crop, background change',zh:'AI证件照,自动裁剪+换背景色'},cat:'实用工具',icon:'📸'},
  {name:'ARC Lab',url:'https://arc.tencent.com/',desc:{en:'Tencent AI: portrait restore, face enhancement',zh:'腾讯ARC:人像修复/画质增强/动漫化'},cat:'实用工具',icon:'🔬'},
  {name:'改图宝',url:'https://www.gaitubao.com/',desc:{en:'Online image editing: resize, crop, watermark, rotate',zh:'在线改图:调整/裁剪/水印/旋转'},cat:'实用工具',icon:'🔧'},
  {name:'图贴士',url:'https://www.tutieshi.com/',desc:{en:'Image tool collection: compress, convert, edit',zh:'图片工具合集:压缩/转换/编辑'},cat:'实用工具',icon:'📌'},
  {name:'鸭力巨大',url:'https://www.yalijuda.com/',desc:{en:'Image compression tool, batch processing',zh:'图片压缩工具,批量处理,极致压缩'},cat:'实用工具',icon:'🦆'},
  {name:'图可丽',url:'https://www.tukeli.com/',desc:{en:'Online photo editor, one-click beautify',zh:'在线修图,一键美化,滤镜特效'},cat:'实用工具',icon:'✨'},
  {name:'镝数图表',url:'https://www.dycharts.com/',desc:{en:'Online chart maker, data visualization',zh:'在线图表制作,数据可视化'},cat:'实用工具',icon:'📊'},
  {name:'文心一格',url:'https://yige.baidu.com/',desc:{en:'Baidu AI art, text→Chinese-style images',zh:'百度AI绘画,文生图,国风艺术风格'},cat:'实用工具',icon:'🖌️'},
  {name:'即梦AI',url:'https://jimeng.jianying.com/',desc:{en:'ByteDance AI image + video generation',zh:'字节跳动AI生图/视频,剪映生态'},cat:'实用工具',icon:'💫'},
  {name:'比格设计',url:'https://www.bigesheji.com/',desc:{en:'Online design, PPT templates, marketing visuals',zh:'在线设计,PPT模板,营销视觉'},cat:'实用工具',icon:'🎯'},
  {name:'爱设计',url:'https://www.isheji.com/',desc:{en:'Online graphic design, templates + AI tools',zh:'在线平面设计,模板+AI工具'},cat:'实用工具',icon:'❤️'},
]
