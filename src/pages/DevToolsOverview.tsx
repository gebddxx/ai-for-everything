import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

export default function DevToolsOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (
    <div className={styles.page}>
      <div className={styles.head}><h2 className={styles.title}>🔧 {L('Dev Tools','开发工具','開發工具')}</h2><p className={styles.subtitle}>{L('87 online compilers, formatters, converters, and developer utilities','87款在线编译器、格式化、编码转换和开发者实用工具','87款在線編譯器、格式化、編碼轉換和開發者實用工具')}</p></div>
      <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#f59e0b" />
    </div>
  )
}

const links: ToolLink[] = [
  // === 在线编程 (jyshare) ===
  {name:'C 在线工具',url:'https://www.jyshare.com/compile/11/',desc:{en:'Online C compiler, run C code in browser',zh:'在线C语言编译器,浏览器运行C代码'},cat:'在线编程',icon:'🇨',source:'jyshare'},
  {name:'C++ 在线工具',url:'https://www.jyshare.com/compile/12/',desc:{en:'Online C++ compiler, quick test snippets',zh:'在线C++编译器,快速测试代码片段'},cat:'在线编程',icon:'🇨',source:'jyshare'},
  {name:'Java 在线工具',url:'https://www.jyshare.com/compile/10/',desc:{en:'Online Java compiler & runner',zh:'在线Java编译器,浏览器运行Java'},cat:'在线编程',icon:'☕',source:'jyshare'},
  {name:'Python3 在线',url:'https://www.jyshare.com/compile/9/',desc:{en:'Online Python3 interpreter, code + run instantly',zh:'在线Python3解释器,即写即运行'},cat:'在线编程',icon:'🐍',source:'jyshare'},
  {name:'PHP 在线工具',url:'https://www.jyshare.com/compile/1/',desc:{en:'Online PHP sandbox, test scripts quickly',zh:'在线PHP沙盒,快速测试脚本'},cat:'在线编程',icon:'🐘',source:'jyshare'},
  {name:'Lua 在线工具',url:'https://www.jyshare.com/compile/18/',desc:{en:'Online Lua interpreter, lightweight scripting',zh:'在线Lua解释器,轻量脚本调试'},cat:'在线编程',icon:'🌙',source:'jyshare'},
  {name:'Golang 在线',url:'https://www.jyshare.com/compile/21/',desc:{en:'Online Go compiler, concurrent programming test',zh:'在线Go编译器,并发编程测试'},cat:'在线编程',icon:'🔵',source:'jyshare'},
  {name:'Rust 在线工具',url:'https://www.jyshare.com/compile/24/',desc:{en:'Online Rust compiler, safe systems programming',zh:'在线Rust编译器,安全系统编程'},cat:'在线编程',icon:'🦀',source:'jyshare'},
  {name:'Ruby 在线工具',url:'https://www.jyshare.com/compile/3/',desc:{en:'Online Ruby interpreter, web dev scripting',zh:'在线Ruby解释器,Web开发脚本'},cat:'在线编程',icon:'💎',source:'jyshare'},
  {name:'Swift 在线工具',url:'https://www.jyshare.com/compile/16/',desc:{en:'Online Swift playground, iOS dev snippets',zh:'在线Swift游乐场,iOS开发代码'},cat:'在线编程',icon:'🍎',source:'jyshare'},
  {name:'Kotlin 在线',url:'https://www.jyshare.com/compile/17/',desc:{en:'Online Kotlin compiler, Android + JVM',zh:'在线Kotlin编译器,Android+JVM'},cat:'在线编程',icon:'🟣',source:'jyshare'},
  {name:'Scala 在线工具',url:'https://www.jyshare.com/compile/13/',desc:{en:'Online Scala compiler, functional + OOP',zh:'在线Scala编译器,函数式+面向对象'},cat:'在线编程',icon:'🔴',source:'jyshare'},
  {name:'R 在线工具',url:'https://www.jyshare.com/compile/15/',desc:{en:'Online R environment, statistics + plotting',zh:'在线R环境,统计分析+绘图'},cat:'在线编程',icon:'📊',source:'jyshare'},
  {name:'Bash/Shell 在线',url:'https://www.jyshare.com/compile/8/',desc:{en:'Online Linux terminal, test shell scripts',zh:'在线Linux终端,测试Shell脚本'},cat:'在线编程',icon:'💻',source:'jyshare'},
  {name:'CodePen',url:'https://codepen.io/',desc:{en:'HTML/CSS/JS online editor, live preview, community',zh:'HTML/CSS/JS在线编辑器,实时预览,社区分享'},cat:'在线编程',icon:'✏️'},
  {name:'JSFiddle',url:'https://jsfiddle.net/',desc:{en:'Online JS playground, test frameworks + libraries',zh:'在线JS沙盒,测试框架和库组合'},cat:'在线编程',icon:'🎻'},
  {name:'Replit',url:'https://replit.com/',desc:{en:'Online IDE, 50+ languages, instant deploy',zh:'在线IDE,50+语言,即时部署'},cat:'在线编程',icon:'🔄'},
  {name:'StackBlitz',url:'https://stackblitz.com/',desc:{en:'Online VS Code, full Node.js in browser',zh:'在线VS Code,浏览器内完整Node.js'},cat:'在线编程',icon:'⚡'},
  // === 前端工具 (jyshare) ===
  {name:'HTML/CSS/JS 编辑器',url:'https://www.jyshare.com/front-end/61/',desc:{en:'Online frontend editor, real-time preview',zh:'在线前端编辑器,实时预览效果'},cat:'前端工具',icon:'🌐',source:'jyshare'},
  {name:'HTML 代码压缩',url:'https://www.jyshare.com/front-end/55/',desc:{en:'HTML minifier, compress markup',zh:'HTML代码压缩,压缩标记语言'},cat:'前端工具',icon:'📄',source:'jyshare'},
  {name:'CSS 代码压缩',url:'https://www.jyshare.com/front-end/53/',desc:{en:'CSS minifier, compress stylesheets',zh:'CSS代码压缩,压缩样式表'},cat:'前端工具',icon:'🎨',source:'jyshare'},
  {name:'JS 代码压缩',url:'https://www.jyshare.com/front-end/51/',desc:{en:'JavaScript minifier, remove spaces & comments',zh:'JS代码压缩,去除空格和注释'},cat:'前端工具',icon:'📦',source:'jyshare'},
  {name:'HTML 实体转义',url:'https://www.jyshare.com/front-end/79/',desc:{en:'HTML entity encode/decode, escape special chars',zh:'HTML实体编码/解码,转义特殊字符'},cat:'前端工具',icon:'🔣',source:'jyshare'},
  {name:'前端代码格式化',url:'https://www.jyshare.com/front-end/68/',desc:{en:'Beautify HTML/CSS/JS code with indentation',zh:'美化HTML/CSS/JS代码,统一缩进'},cat:'前端工具',icon:'✨',source:'jyshare'},
  {name:'CSS 雪碧图生成',url:'https://www.jyshare.com/front-end/82/',desc:{en:'CSS sprite generator, merge icons into one image',zh:'CSS雪碧图生成,合并小图标为一张图'},cat:'前端工具',icon:'🖼️',source:'jyshare'},
  {name:'Can I Use',url:'https://caniuse.com/',desc:{en:'Browser compatibility tables for web features',zh:'浏览器兼容性查询,前端特性支持表'},cat:'前端工具',icon:'🌍'},
  {name:'Tailwind CSS Play',url:'https://play.tailwindcss.com/',desc:{en:'Online Tailwind CSS playground, instant preview',zh:'在线Tailwind CSS沙盒,即时预览'},cat:'前端工具',icon:'💨'},
  {name:'Sass/SCSS 编译',url:'https://www.jyshare.com/front-end/83/',desc:{en:'Online Sass/SCSS compiler, CSS preprocessor',zh:'在线Sass/SCSS编译,CSS预处理器'},cat:'前端工具',icon:'🎀',source:'jyshare'},
  // === JSON 工具 (jyshare) ===
  {name:'JSON 格式化',url:'https://www.jyshare.com/front-end/53/',desc:{en:'JSON beautifier, format messy JSON data',zh:'JSON格式化,美化混乱的JSON数据'},cat:'JSON工具',icon:'📋',source:'jyshare'},
  {name:'JSON 压缩',url:'https://www.jyshare.com/front-end/55/',desc:{en:'JSON minifier, compact JSON for production',zh:'JSON压缩,紧凑化用于生产环境'},cat:'JSON工具',icon:'🗜️',source:'jyshare'},
  {name:'JSON 验证',url:'https://www.jyshare.com/front-end/58/',desc:{en:'JSON validator, check syntax errors',zh:'JSON验证,检查语法错误'},cat:'JSON工具',icon:'✅',source:'jyshare'},
  {name:'JSON ↔ XML 转换',url:'https://www.jyshare.com/front-end/84/',desc:{en:'Convert between JSON and XML format',zh:'JSON与XML互转'},cat:'JSON工具',icon:'🔄',source:'jyshare'},
  {name:'JSON ↔ YAML 转换',url:'https://www.jyshare.com/front-end/85/',desc:{en:'Convert between JSON and YAML format',zh:'JSON与YAML互转'},cat:'JSON工具',icon:'📝',source:'jyshare'},
  {name:'JSON ↔ CSV 转换',url:'https://www.jyshare.com/front-end/86/',desc:{en:'Convert between JSON and CSV format',zh:'JSON与CSV互转'},cat:'JSON工具',icon:'📊',source:'jyshare'},
  {name:'JSON Crack',url:'https://jsoncrack.com/',desc:{en:'Visualize JSON as interactive tree/graph',zh:'JSON可视化,交互式树状/图形展示'},cat:'JSON工具',icon:'🔍'},
  // === XML 工具 (jyshare) ===
  {name:'XML 格式化',url:'https://www.jyshare.com/front-end/71/',desc:{en:'XML beautifier, indent and format XML',zh:'XML格式化,缩进美化XML'},cat:'XML工具',icon:'📋',source:'jyshare'},
  {name:'XML 压缩',url:'https://www.jyshare.com/front-end/72/',desc:{en:'XML minifier, remove whitespace',zh:'XML压缩,去除空白字符'},cat:'XML工具',icon:'🗜️',source:'jyshare'},
  {name:'XML ↔ JSON 互转',url:'https://www.jyshare.com/front-end/84/',desc:{en:'XML to JSON converter and vice versa',zh:'XML转JSON,JSON转XML'},cat:'XML工具',icon:'🔄',source:'jyshare'},
  // === SQL 工具 (jyshare) ===
  {name:'SQL 格式化',url:'https://www.jyshare.com/front-end/87/',desc:{en:'SQL beautifier, format SQL queries',zh:'SQL格式化,美化SQL查询语句'},cat:'SQL工具',icon:'🗄️',source:'jyshare'},
  {name:'SQL 压缩',url:'https://www.jyshare.com/front-end/88/',desc:{en:'SQL minifier, compact SQL code',zh:'SQL压缩,紧凑SQL代码'},cat:'SQL工具',icon:'🗜️',source:'jyshare'},
  // === 编码转换 (jyshare) ===
  {name:'Base64 编解码',url:'https://www.jyshare.com/front-end/56/',desc:{en:'Base64 encode/decode, text ↔ base64',zh:'Base64编码/解码,文本↔Base64互转'},cat:'编码转换',icon:'🔐',source:'jyshare'},
  {name:'URL 编解码',url:'https://www.jyshare.com/front-end/57/',desc:{en:'URL encode/decode, handle special chars',zh:'URL编码/解码,处理特殊字符'},cat:'编码转换',icon:'🔗',source:'jyshare'},
  {name:'Unicode 转换',url:'https://www.jyshare.com/front-end/35/',desc:{en:'Unicode encode/decode, text ↔ \\uXXXX',zh:'Unicode编码/解码,文本↔\\uXXXX'},cat:'编码转换',icon:'🔤',source:'jyshare'},
  {name:'时间戳转换',url:'https://www.jyshare.com/front-end/42/',desc:{en:'Unix timestamp ↔ human readable date',zh:'Unix时间戳↔人类可读日期互转'},cat:'编码转换',icon:'⏰',source:'jyshare'},
  {name:'MD5 加密',url:'https://www.jyshare.com/front-end/46/',desc:{en:'Online MD5 hash generator',zh:'在线MD5哈希生成'},cat:'编码转换',icon:'🔒',source:'jyshare'},
  {name:'SHA 加密',url:'https://www.jyshare.com/front-end/65/',desc:{en:'SHA-1/256/512 hash generator',zh:'SHA-1/256/512哈希生成'},cat:'编码转换',icon:'🔐',source:'jyshare'},
  {name:'进制转换',url:'https://www.jyshare.com/front-end/58/',desc:{en:'Binary/Octal/Decimal/Hex converter',zh:'二进制/八进制/十进制/十六进制互转'},cat:'编码转换',icon:'🔢',source:'jyshare'},
  {name:'中文简繁转换',url:'https://www.jyshare.com/front-end/59/',desc:{en:'Chinese simplified ↔ traditional converter',zh:'中文简体↔繁体转换'},cat:'编码转换',icon:'🈶',source:'jyshare'},
  {name:'Morse 电码转换',url:'https://www.jyshare.com/front-end/95/',desc:{en:'Text ↔ Morse code converter',zh:'文本↔摩斯电码转换'},cat:'编码转换',icon:'📡',source:'jyshare'},
  {name:'ASCII 码表查询',url:'https://www.jyshare.com/front-end/36/',desc:{en:'ASCII code lookup table, char ↔ code',zh:'ASCII码表查询,字符↔编码'},cat:'编码转换',icon:'📖',source:'jyshare'},
  {name:'Native/Unicode 转换',url:'https://www.jyshare.com/front-end/37/',desc:{en:'Native ↔ Unicode escape sequence',zh:'原生字符↔Unicode转义序列'},cat:'编码转换',icon:'🌐',source:'jyshare'},
  // === 文本工具 (jyshare) ===
  {name:'正则表达式测试',url:'https://www.jyshare.com/front-end/854/',desc:{en:'Online regex tester, match + highlight groups',zh:'在线正则测试,匹配+高亮分组结果'},cat:'文本工具',icon:'🔍',source:'jyshare'},
  {name:'UUID 生成器',url:'https://www.jyshare.com/front-end/59/',desc:{en:'UUID/GUID generator, v1/v4, batch mode',zh:'UUID生成器,v1/v4可选,支持批量'},cat:'文本工具',icon:'🆔',source:'jyshare'},
  {name:'随机密码生成',url:'https://www.jyshare.com/front-end/60/',desc:{en:'Random password generator, custom length+chars',zh:'随机密码生成,可设长度和字符集'},cat:'文本工具',icon:'🔑',source:'jyshare'},
  {name:'字数统计',url:'https://www.jyshare.com/front-end/75/',desc:{en:'Character & word counter, Chinese+English',zh:'字数和字符统计,中英文混合计数'},cat:'文本工具',icon:'📏',source:'jyshare'},
  {name:'文本去重排序',url:'https://www.jyshare.com/front-end/74/',desc:{en:'Remove duplicate lines, sort alphabetically',zh:'文本行去重/排序,字母/数字排列'},cat:'文本工具',icon:'📝',source:'jyshare'},
  {name:'文本大小写转换',url:'https://www.jyshare.com/front-end/76/',desc:{en:'UPPER/lower/Title/Camel case converter',zh:'大小写转换,大写/小写/首字母/驼峰'},cat:'文本工具',icon:'🔠',source:'jyshare'},
  {name:'文本 Diff 对比',url:'https://www.jyshare.com/front-end/77/',desc:{en:'Text diff tool, compare two texts side-by-side',zh:'文本差异对比,并排比较两个文本'},cat:'文本工具',icon:'↔️',source:'jyshare'},
  {name:'英文拼写检查',url:'https://www.jyshare.com/front-end/78/',desc:{en:'English spell checker, find typos',zh:'英文拼写检查,查找拼写错误'},cat:'文本工具',icon:'✅',source:'jyshare'},
  {name:'随机数生成器',url:'https://www.jyshare.com/front-end/38/',desc:{en:'Random number/string generator',zh:'随机数/随机字符串生成'},cat:'文本工具',icon:'🎲',source:'jyshare'},
  {name:'二维码生成器',url:'https://www.jyshare.com/front-end/43/',desc:{en:'QR code generator, custom size+color+logo',zh:'二维码生成,可设大小/颜色/Logo'},cat:'文本工具',icon:'📱',source:'jyshare'},
  {name:'条形码生成器',url:'https://www.jyshare.com/front-end/44/',desc:{en:'Barcode generator, multiple formats',zh:'条形码生成,多格式支持'},cat:'文本工具',icon:'📊',source:'jyshare'},
  {name:'Markdown 编辑器',url:'https://www.jyshare.com/front-end/91/',desc:{en:'Online Markdown editor, live preview, export',zh:'在线Markdown编辑器,实时预览,可导出'},cat:'文本工具',icon:'📝',source:'jyshare'},
  // === 图片工具 (jyshare) ===
  {name:'图片压缩',url:'https://www.jyshare.com/front-end/69/',desc:{en:'Online image compressor, reduce size, keep quality',zh:'在线图片压缩,减小体积保持画质'},cat:'图片工具',icon:'🖼️',source:'jyshare'},
  {name:'图片加水印',url:'https://www.jyshare.com/front-end/70/',desc:{en:'Add text/image watermark to photos',zh:'图片加水印,文字/图片水印'},cat:'图片工具',icon:'💧',source:'jyshare'},
  {name:'图片转 Base64',url:'https://www.jyshare.com/front-end/93/',desc:{en:'Convert image to Base64 data URI',zh:'图片转Base64,内嵌到HTML/CSS'},cat:'图片工具',icon:'📷',source:'jyshare'},
  {name:'图片转 PDF',url:'https://www.jyshare.com/front-end/92/',desc:{en:'Convert images to PDF document',zh:'图片转PDF文档'},cat:'图片工具',icon:'📄',source:'jyshare'},
  {name:'图片尺寸调整',url:'https://www.jyshare.com/front-end/94/',desc:{en:'Resize image, crop, scale proportionally',zh:'图片尺寸调整,裁剪/等比缩放'},cat:'图片工具',icon:'📐',source:'jyshare'},
  {name:'TinyPNG',url:'https://tinypng.com/',desc:{en:'Smart PNG/JPEG compression, best quality/size',zh:'智能PNG/JPEG压缩,最佳质量/体积比'},cat:'图片工具',icon:'🐼'},
  // === 颜色工具 (jyshare) ===
  {name:'色值转换/取色器',url:'https://www.jyshare.com/front-end/47/',desc:{en:'Color picker, HEX ↔ RGB ↔ HSL ↔ CMYK',zh:'取色器,HEX↔RGB↔HSL↔CMYK互转'},cat:'颜色工具',icon:'🎨',source:'jyshare'},
  {name:'在线调色板',url:'https://www.jyshare.com/front-end/48/',desc:{en:'Color palette generator, harmonious schemes',zh:'调色板生成,和谐配色方案'},cat:'颜色工具',icon:'🎯',source:'jyshare'},
  {name:'渐变色生成器',url:'https://www.jyshare.com/front-end/49/',desc:{en:'CSS gradient generator, linear + radial',zh:'CSS渐变色生成,线性+径向渐变'},cat:'颜色工具',icon:'🌈',source:'jyshare'},
  // === 单位换算 (jyshare) ===
  {name:'长度单位换算',url:'https://www.jyshare.com/front-end/62/',desc:{en:'Length converter: m/km/ft/inch/mile/yd',zh:'长度换算:米/千米/英尺/英寸/英里/码'},cat:'单位换算',icon:'📏',source:'jyshare'},
  {name:'重量单位换算',url:'https://www.jyshare.com/front-end/62/',desc:{en:'Weight converter: kg/g/lb/oz/ton',zh:'重量换算:千克/克/磅/盎司/吨'},cat:'单位换算',icon:'⚖️',source:'jyshare'},
  {name:'面积单位换算',url:'https://www.jyshare.com/front-end/62/',desc:{en:'Area converter: m²/km²/ft²/acre/hectare',zh:'面积换算:平方米/平方公里/英亩/公顷'},cat:'单位换算',icon:'📐',source:'jyshare'},
  {name:'温度单位换算',url:'https://www.jyshare.com/front-end/62/',desc:{en:'Temperature converter: ℃ ↔ ℉ ↔ K',zh:'温度换算:摄氏度↔华氏度↔开尔文'},cat:'单位换算',icon:'🌡️',source:'jyshare'},
  {name:'速度单位换算',url:'https://www.jyshare.com/front-end/62/',desc:{en:'Speed converter: km/h ↔ mph ↔ m/s',zh:'速度换算:km/h↔mph↔m/s'},cat:'单位换算',icon:'🏃',source:'jyshare'},
  {name:'存储单位换算',url:'https://www.jyshare.com/front-end/62/',desc:{en:'Data size: B/KB/MB/GB/TB/PB',zh:'存储换算:B/KB/MB/GB/TB/PB'},cat:'单位换算',icon:'💾',source:'jyshare'},
  // === 网络工具 ===
  {name:'IP 地址查询',url:'https://www.jyshare.com/front-end/39/',desc:{en:'IP lookup, geolocation + ISP info',zh:'IP地址查询,归属地+运营商信息'},cat:'网络工具',icon:'🌍',source:'jyshare'},
  {name:'HTTP 状态码查询',url:'https://www.jyshare.com/front-end/40/',desc:{en:'HTTP status code reference, 1xx-5xx',zh:'HTTP状态码参考,1xx-5xx完整列表'},cat:'网络工具',icon:'📡',source:'jyshare'},
  {name:'端口扫描',url:'https://www.jyshare.com/front-end/100/',desc:{en:'Online port scanner, check open ports',zh:'在线端口扫描,检查开放端口'},cat:'网络工具',icon:'🔌',source:'jyshare'},
  {name:'User-Agent 解析',url:'https://www.jyshare.com/front-end/96/',desc:{en:'Parse and decode User-Agent strings',zh:'User-Agent解析,浏览器/系统识别'},cat:'网络工具',icon:'🔎',source:'jyshare'},
  {name:'DNS 查询',url:'https://www.jyshare.com/front-end/98/',desc:{en:'DNS lookup, A/AAAA/MX/NS/TXT records',zh:'DNS查询,A/AAAA/MX/NS/TXT记录'},cat:'网络工具',icon:'🔗',source:'jyshare'},
  {name:'Ping 检测',url:'https://www.jyshare.com/front-end/99/',desc:{en:'Online ping test, check server latency',zh:'在线Ping检测,测试服务器延迟'},cat:'网络工具',icon:'📶',source:'jyshare'},
  // === 计算器工具 ===
  {name:'在线计算器',url:'https://www.jyshare.com/front-end/63/',desc:{en:'Online scientific calculator, basic + advanced math',zh:'在线科学计算器,基础+高级数学运算'},cat:'计算工具',icon:'🔢',source:'jyshare'},
  {name:'汇率换算器',url:'https://www.jyshare.com/front-end/64/',desc:{en:'Currency converter, real-time exchange rates, 150+ currencies',zh:'汇率换算器,实时汇率,150+货币转换'},cat:'计算工具',icon:'💱',source:'jyshare'},
  {name:'房贷计算器',url:'https://www.jyshare.com/front-end/66/',desc:{en:'Mortgage calculator, equal principal/interest, amortization',zh:'房贷计算器,等额本息/等额本金,还款明细'},cat:'计算工具',icon:'🏠',source:'jyshare'},
  {name:'个税计算器',url:'https://www.jyshare.com/front-end/67/',desc:{en:'Chinese income tax calculator, salary after tax',zh:'个税计算器,工资税后计算,五险一金'},cat:'计算工具',icon:'💰',source:'jyshare'},
  {name:'BMI 计算器',url:'https://www.jyshare.com/front-end/68/',desc:{en:'BMI calculator, body mass index, health reference',zh:'BMI计算器,身体质量指数,健康参考'},cat:'计算工具',icon:'⚕️',source:'jyshare'},
  {name:'日期计算器',url:'https://www.jyshare.com/front-end/69/',desc:{en:'Date calculator, days between dates, add/subtract days',zh:'日期计算器,日期间隔天数,日期加减'},cat:'计算工具',icon:'📅',source:'jyshare'},
  {name:'年龄计算器',url:'https://www.jyshare.com/front-end/70/',desc:{en:'Age calculator, precise to days, zodiac sign',zh:'年龄计算器,精确到天,星座生肖'},cat:'计算工具',icon:'🎂',source:'jyshare'},
  {name:'孕期计算器',url:'https://www.jyshare.com/front-end/71/',desc:{en:'Pregnancy calculator, due date, trimester tracker',zh:'孕期计算器,预产期,孕期周数追踪'},cat:'计算工具',icon:'🤰',source:'jyshare'},
  {name:'油耗计算器',url:'https://www.jyshare.com/front-end/72/',desc:{en:'Fuel consumption calculator, km/L, cost per km',zh:'油耗计算器,百公里油耗,每公里费用'},cat:'计算工具',icon:'⛽',source:'jyshare'},
]
