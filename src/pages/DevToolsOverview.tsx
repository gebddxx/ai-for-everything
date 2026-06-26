import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

export default function DevToolsOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (
    <div className={styles.page}>
      <div className={styles.head}><h2 className={styles.title}>🔧 {L('Dev Tools','开发工具','開發工具')}</h2><p className={styles.subtitle}>{L('Online compilers, formatters, converters, and utilities for developers','在线编译器、格式化、编码转换和开发者实用工具','在線編譯器、格式化、編碼轉換和開發者實用工具')}</p></div>
      <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#f59e0b" />
    </div>
  )
}

const links: ToolLink[] = [
  // 在线编程
  {name:'C 在线工具',url:'https://www.jyshare.com/compile/11/',desc:{en:'Online C compiler, run C code in browser',zh:'在线C语言编译器,浏览器运行C代码'},cat:'code',icon:'🇨'},
  {name:'C++ 在线工具',url:'https://www.jyshare.com/compile/12/',desc:{en:'Online C++ compiler, quick test snippets',zh:'在线C++编译器,快速测试代码片段'},cat:'code',icon:'🇨'},
  {name:'Java 在线工具',url:'https://www.jyshare.com/compile/10/',desc:{en:'Online Java compiler & runner',zh:'在线Java编译器,浏览器运行Java'},cat:'code',icon:'☕'},
  {name:'Python3 在线工具',url:'https://www.jyshare.com/compile/9/',desc:{en:'Online Python3 interpreter, code + run instantly',zh:'在线Python3解释器,即写即运行'},cat:'code',icon:'🐍'},
  {name:'PHP 在线工具',url:'https://www.jyshare.com/compile/1/',desc:{en:'Online PHP sandbox, test scripts quickly',zh:'在线PHP沙盒,快速测试脚本'},cat:'code',icon:'🐘'},
  {name:'Lua 在线工具',url:'https://www.jyshare.com/compile/18/',desc:{en:'Online Lua interpreter, lightweight scripting',zh:'在线Lua解释器,轻量脚本调试'},cat:'code',icon:'🌙'},
  {name:'Golang 在线工具',url:'https://www.jyshare.com/compile/21/',desc:{en:'Online Go compiler, concurrent programming test',zh:'在线Go编译器,并发编程测试'},cat:'code',icon:'🔵'},
  {name:'Rust 在线工具',url:'https://www.jyshare.com/compile/24/',desc:{en:'Online Rust compiler, safe systems programming',zh:'在线Rust编译器,安全系统编程'},cat:'code',icon:'🦀'},
  {name:'CodePen',url:'https://codepen.io/',desc:{en:'HTML/CSS/JS online editor, live preview, community',zh:'HTML/CSS/JS在线编辑器,实时预览,社区分享'},cat:'code',icon:'✏️'},
  {name:'JSFiddle',url:'https://jsfiddle.net/',desc:{en:'Online JS playground, test frameworks + libraries',zh:'在线JS沙盒,测试框架和库组合'},cat:'code',icon:'🎻'},
  // 前端工具
  {name:'HTML/CSS/JS 在线编辑器',url:'https://www.jyshare.com/front-end/61/',desc:{en:'Online frontend editor, real-time preview',zh:'在线前端编辑器,实时预览效果'},cat:'frontend',icon:'🌐'},
  {name:'JS 代码压缩',url:'https://www.jyshare.com/front-end/51/',desc:{en:'JavaScript minifier, remove spaces & comments',zh:'JS代码压缩,去除空格和注释'},cat:'frontend',icon:'📦'},
  {name:'CSS 代码压缩',url:'https://www.jyshare.com/front-end/53/',desc:{en:'CSS minifier, compress stylesheets',zh:'CSS代码压缩,压缩样式表'},cat:'frontend',icon:'🎨'},
  {name:'HTML 代码压缩',url:'https://www.jyshare.com/front-end/55/',desc:{en:'HTML minifier, compress markup',zh:'HTML代码压缩,压缩标记语言'},cat:'frontend',icon:'📄'},
  {name:'Can I Use',url:'https://caniuse.com/',desc:{en:'Browser compatibility tables for web features',zh:'浏览器兼容性查询,前端特性支持表'},cat:'frontend',icon:'🌍'},
  {name:'Tailwind CSS Play',url:'https://play.tailwindcss.com/',desc:{en:'Online Tailwind CSS playground, instant preview',zh:'在线Tailwind CSS沙盒,即时预览'},cat:'frontend',icon:'💨'},
  // JSON 工具
  {name:'JSON 格式化',url:'https://www.jyshare.com/front-end/53/',desc:{en:'JSON beautifier, format messy JSON data',zh:'JSON格式化,美化混乱的JSON数据'},cat:'json',icon:'📋'},
  {name:'JSON 压缩',url:'https://www.jyshare.com/front-end/55/',desc:{en:'JSON minifier, compact JSON for production',zh:'JSON压缩,紧凑化用于生产环境'},cat:'json',icon:'🗜️'},
  {name:'JSON 转 XML',url:'https://www.jyshare.com/front-end/58/',desc:{en:'Convert JSON to XML format',zh:'JSON转XML格式转换'},cat:'json',icon:'🔄'},
  {name:'JSON Crack',url:'https://jsoncrack.com/',desc:{en:'Visualize JSON as interactive tree/graph',zh:'JSON可视化,交互式树状/图形展示'},cat:'json',icon:'🔍'},
  // 编码转换
  {name:'Base64 编解码',url:'https://www.jyshare.com/front-end/56/',desc:{en:'Base64 encode/decode, text ↔ base64',zh:'Base64编码/解码,文本↔Base64互转'},cat:'encode',icon:'🔐'},
  {name:'URL 编解码',url:'https://www.jyshare.com/front-end/57/',desc:{en:'URL encode/decode, handle special chars',zh:'URL编码/解码,处理特殊字符'},cat:'encode',icon:'🔗'},
  {name:'时间戳转换',url:'https://www.jyshare.com/front-end/42/',desc:{en:'Unix timestamp converter, human readable ↔ timestamp',zh:'Unix时间戳转换,人类可读↔时间戳'},cat:'encode',icon:'⏰'},
  {name:'MD5 加密',url:'https://www.jyshare.com/front-end/46/',desc:{en:'Online MD5 hash generator',zh:'在线MD5哈希生成'},cat:'encode',icon:'🔒'},
  {name:'进制转换',url:'https://www.jyshare.com/front-end/58/',desc:{en:'Binary/Octal/Decimal/Hex converter',zh:'二进制/八进制/十进制/十六进制互转'},cat:'encode',icon:'🔢'},
  {name:'中文简繁转换',url:'https://www.jyshare.com/front-end/59/',desc:{en:'Chinese simplified ↔ traditional converter',zh:'中文简体↔繁体转换'},cat:'encode',icon:'🈶'},
  {name:'Unicode 编码转换',url:'https://www.jyshare.com/front-end/61/',desc:{en:'Unicode encode/decode, text ↔ \\uXXXX',zh:'Unicode编码/解码,文本↔\\uXXXX'},cat:'encode',icon:'🌐'},
  // 文本+正则
  {name:'正则表达式测试',url:'https://www.jyshare.com/front-end/854/',desc:{en:'Online regex tester, match/highlight groups',zh:'在线正则测试,匹配+高亮分组结果'},cat:'text',icon:'🔍'},
  {name:'UUID 生成器',url:'https://www.jyshare.com/front-end/59/',desc:{en:'Generate UUID/GUID, v1/v4, batch mode',zh:'UUID生成器,v1/v4可选,支持批量'},cat:'text',icon:'🆔'},
  {name:'随机密码生成',url:'https://www.jyshare.com/front-end/60/',desc:{en:'Random password generator, custom length+chars',zh:'随机密码生成,可设长度和字符集'},cat:'text',icon:'🔑'},
  {name:'字数统计',url:'https://www.jyshare.com/front-end/75/',desc:{en:'Character & word counter, Chinese+English',zh:'字数和字符统计,中英文混合计数'},cat:'text',icon:'📏'},
  {name:'文本去重/排序',url:'https://www.jyshare.com/front-end/74/',desc:{en:'Remove duplicate lines, sort alphabetically',zh:'文本行去重/排序,字母顺序排列'},cat:'text',icon:'📝'},
  {name:'二维码生成器',url:'https://www.jyshare.com/front-end/43/',desc:{en:'QR code generator, custom size+color+logo',zh:'二维码生成,可设大小/颜色/Logo'},cat:'text',icon:'📱'},
  // 其他实用
  {name:'IP 地址查询',url:'https://www.jyshare.com/front-end/39/',desc:{en:'IP lookup, geolocation + ISP info',zh:'IP地址查询,归属地+运营商信息'},cat:'other',icon:'🌍'},
  {name:'色值转换/取色器',url:'https://www.jyshare.com/front-end/47/',desc:{en:'Color picker, HEX ↔ RGB ↔ HSL conversion',zh:'取色器,HEX↔RGB↔HSL互转'},cat:'other',icon:'🎨'},
  {name:'图片压缩',url:'https://www.jyshare.com/front-end/69/',desc:{en:'Online image compressor, reduce size, keep quality',zh:'在线图片压缩,减小体积保持画质'},cat:'other',icon:'🖼️'},
  {name:'单位换算',url:'https://www.jyshare.com/front-end/62/',desc:{en:'Unit converter: length/weight/area/temperature',zh:'单位换算:长度/重量/面积/温度等'},cat:'other',icon:'⚖️'},
  {name:'思维导图',url:'https://www.jyshare.com/front-end/97/',desc:{en:'Online mind map, Markdown→mind map, shareable',zh:'在线思维导图,Markdown→脑图,可分享'},cat:'other',icon:'🧠'},
  {name:'流程图在线',url:'https://www.draw.io/',desc:{en:'Free online diagramming, flowcharts + UML',zh:'免费在线流程图+UML图,draw.io'},cat:'other',icon:'📐'},
]
