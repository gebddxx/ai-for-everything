/**
 * Builds a comprehensive search index from all page files.
 * Run: node scripts/build-search-index.js
 * Output: src/data/searchIndex.ts (auto-generated)
 */
const fs = require('fs')
const path = require('path')

const pagesDir = path.join(__dirname, '..', 'src', 'pages')
const outputFile = path.join(__dirname, '..', 'src', 'data', 'searchIndex.ts')

// Map section keys to domains and page display names
const sectionMap = {
  // nav-tools
  'search': ['nav-tools', '搜索引擎', '🧭 导航工具集'],
  'chat': ['nav-tools', '对话助手', '🧭 导航工具集'],
  'writing': ['nav-tools', '写作工具', '🧭 导航工具集'],
  'image-gen': ['nav-tools', '绘画工具', '🧭 导航工具集'],
  'video-gen-tool': ['nav-tools', '视频工具', '🧭 导航工具集'],
  'audio-gen-tool': ['nav-tools', '音频工具', '🧭 导航工具集'],
  'design': ['nav-tools', '设计工具', '🧭 导航工具集'],
  '3d-game': ['nav-tools', '3D与游戏', '🧭 导航工具集'],
  'office': ['nav-tools', '办公提效', '🧭 导航工具集'],
  'agents': ['nav-tools', '智能体', '🧭 导航工具集'],
  'dev-tools': ['nav-tools', '开发工具', '🧭 导航工具集'],
  'social-media': ['nav-tools', '社区媒体', '🧭 导航工具集'],
  'image-resources': ['nav-tools', '图片专区', '🧭 导航工具集'],
  // ai-industries
  'logistics': ['ai-industries', '智慧物流', '🏭 AI行业应用'],
  'healthcare': ['ai-industries', '医疗健康', '🏭 AI行业应用'],
  'finance': ['ai-industries', '金融科技', '🏭 AI行业应用'],
  'education': ['ai-industries', '教育科技', '🏭 AI行业应用'],
  'manufacturing': ['ai-industries', '智能制造', '🏭 AI行业应用'],
  'agriculture': ['ai-industries', '智慧农业', '🏭 AI行业应用'],
  'enterprise': ['ai-industries', '企业应用', '🏭 AI行业应用'],
  'retail': ['ai-industries', '零售电商', '🏭 AI行业应用'],
  'transport': ['ai-industries', '交通出行', '🏭 AI行业应用'],
  'energy': ['ai-industries', '能源电力', '🏭 AI行业应用'],
  'media': ['ai-industries', '媒体娱乐', '🏭 AI行业应用'],
  'security': ['ai-industries', '网络安全', '🏭 AI行业应用'],
  'law': ['ai-industries', '法律科技', '🏭 AI行业应用'],
  'climate': ['ai-industries', '环保气候', '🏭 AI行业应用'],
  'govtech': ['ai-industries', '政务智慧城市', '🏭 AI行业应用'],
  // ai-dev
  'gemini': ['ai-dev', 'Gemini CLI 教程', '🛠️ AI工具 · 大模型'],
  'codex': ['ai-dev', 'Codex CLI 教程', '🛠️ AI工具 · 大模型'],
  'ccswitch': ['ai-dev', 'CCSwitch 教程', '🛠️ AI工具 · 大模型'],
  'frameworks': ['ai-dev', 'Agent 框架', '🛠️ AI工具 · 大模型'],
  'assistants': ['ai-dev', '个人 AI 助手', '🛠️ AI工具 · 大模型'],
  'workflow': ['ai-dev', '工作流自动化', '🛠️ AI工具 · 大模型'],
  'multi-agent': ['ai-dev', '多 Agent 协作', '🛠️ AI工具 · 大模型'],
  'audio-gen': ['aigc', '音频音乐生成教程', '🤖 AIGC教程'],
  'video-gen': ['aigc', '视频生成教程', '🤖 AIGC教程'],
  'novel': ['aigc', '小说写作教程', '🤖 AIGC教程'],
  'ppt-gen': ['aigc', 'PPT 生成教程', '🤖 AIGC教程'],
  'web-gen': ['aigc', '网页生成教程', '🤖 AIGC教程'],
  'app-gen': ['aigc', 'App 生成教程', '🤖 AIGC教程'],
  'software-gen': ['aigc', '软件/EXE 生成教程', '🤖 AIGC教程'],
}

// Map pages to their section keys
const pageToSection = {
  'SearchOverview.tsx': 'search',
  'ChatOverview.tsx': 'chat',
  'WritingOverview.tsx': 'writing',
  'ImageGenOverview.tsx': 'image-gen',
  'VideoGenOverview.tsx': 'video-gen-tool',
  'AudioGenOverview.tsx': 'audio-gen-tool',
  'CreativeOverview.tsx': 'creative',  // dead mapping (no file)
  'DesignOverview.tsx': 'design',
  'Game3DOverview.tsx': '3d-game',
  'OfficeOverview.tsx': 'office',
  'AgentOverview.tsx': 'agents',           // dead mapping (no file)
  'DevToolsOverview.tsx': 'dev-tools',
  'SocialMediaOverview.tsx': 'social-media',
  'ImageResourcesOverview.tsx': 'image-resources',
  'HealthcareOverview.tsx': 'healthcare',
  'FinanceOverview.tsx': 'finance',
  'EducationOverview.tsx': 'education',
  'ManufacturingOverview.tsx': 'manufacturing',
  'AgricultureOverview.tsx': 'agriculture',
  'EnterpriseOverview.tsx': 'enterprise',
  'RetailOverview.tsx': 'retail',
  'TransportOverview.tsx': 'transport',
  'EnergyOverview.tsx': 'energy',
  'MediaOverview.tsx': 'media',
  'SecurityOverview.tsx': 'security',
  'LawOverview.tsx': 'law',
  'ClimateOverview.tsx': 'climate',
  'GovTechOverview.tsx': 'govtech',
  'GeminiTutorial.tsx': 'gemini',
  'CodexTutorial.tsx': 'codex',
  'CCSwitchTutorial.tsx': 'ccswitch',
  'AgentFrameworks.tsx': 'frameworks',
  'AgentAssistants.tsx': 'assistants',
  'AgentWorkflow.tsx': 'workflow',
  'AgentMultiAgent.tsx': 'multi-agent',
  'AudioGenTutorial.tsx': 'audio-gen',
  'VideoGenTutorial.tsx': 'video-gen',
  'NovelWritingTutorial.tsx': 'novel',
  'PptGenTutorial.tsx': 'ppt-gen',
  'WebGenTutorial.tsx': 'web-gen',
  'AppGenTutorial.tsx': 'app-gen',
  'SoftwareGenTutorial.tsx': 'software-gen',
}

function extractNames(text) {
  const names = []
  // Try to extract from LinkNav link entries
  const linkRegex = /\{name:'([^']+)'/g
  let match
  while ((match = linkRegex.exec(text)) !== null) {
    names.push(match[1])
  }
  // Also extract from tutorials (tool names mentioned in descriptions)
  // and from page titles (h2)
  return names
}

function extractDescs(text) {
  const descs = []
  const zhRegex = /zh:'([^']*)'/g
  let match
  while ((match = zhRegex.exec(text)) !== null) {
    descs.push(match[1])
  }
  return descs
}

function extractKeywords(name, descs) {
  const kw = new Set()
  kw.add(name.toLowerCase())
  // Split Chinese name into chars for fuzzy matching
  name.split('').forEach(c => { if (/[一-鿿]/.test(c)) kw.add(c) })
  kw.add(name.replace(/\s+/g, '').toLowerCase()) // no spaces
  // From descriptions: extract key terms (first 10 chars of each phrase)
  descs.forEach(d => {
    if (d) kw.add(d.replace(/\s+/g, '').substring(0, 20))
  })
  return [...kw]
}

function main() {
  const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'))
  const entries = []

  // Add top-level entries
  entries.push(`// Auto-generated search index. Rebuild with: node scripts/build-search-index.js`)
  entries.push(`export interface SearchEntry {`)
  entries.push(`  name: string`)
  entries.push(`  keywords: string[]`)
  entries.push(`  domain: string|null`)
  entries.push(`  section?: string`)
  entries.push(`}`)
  entries.push(``)
  entries.push(`export const searchIndex: SearchEntry[] = [`)

  // Add home + ai-news
  entries.push(`  { name:'首页', keywords:['home','首页','主页','shouye'], domain:null },`)
  entries.push(`  { name:'AI速报', keywords:['news','速报','快讯','AI新闻','xinwen'], domain:'ai-news' },`)

  // Add section-level entries from sectionMap
  const addedSections = new Set()
  for (const [key, [domain, name, group]] of Object.entries(sectionMap)) {
    if (addedSections.has(key)) continue
    addedSections.add(key)
    const kw = [name.toLowerCase(), name.replace(/\s+/g, '')]
    const uniqueKw = [...new Set(kw)]
    entries.push(`  { name:'${name}', keywords:['${uniqueKw.join("','")}'], domain:'${domain}', section:'${key}' },`)
  }

  // Section keywords — applied to all tools within each section
  const sectionKeywords = {
    'social-media': ['社交','社区','媒体','论坛','短视频','视频','平台','抖音','B站','shequ','meiti'],
    'image-resources': ['图片','图库','抠图','配色','修图','Logo','tupian','tuku','koutu','peise'],
    'dev-tools': ['开发','编程','编译器','JSON','编码','计算','计算器','汇率','房贷','个税','BMI','日期','年龄','孕期','油耗','kaifa','biancheng','jisuanqi'],
    'search': ['搜索','搜索引擎','百度','谷歌','sousuo','search'],
    'chat': ['对话','聊天','大模型','GPT','Claude','AI助手','duihua'],
    'writing': ['写作','文案','小说','ai写作','写文章','xiezuo','AI写作','AI写'],
    'image-gen': ['绘画','画图','生图','图片生成','huihua','AI绘画','AI画图'],
    'video-gen-tool': ['视频','视频生成','视频编辑','shipin','短视频'],
    'audio-gen-tool': ['音频','音乐','配音','语音','声音','yinpin','yinyue','AI音乐','AI配音'],
    'design': ['设计','UI','Logo','品牌','原型','sheji'],
    '3d-game': ['3D','游戏','3D建模','游戏资产','NPC','三维'],
    'office': ['办公','PPT','文档','会议','邮件','翻译','数据','bangong'],
    'agents': ['智能体','Agent','机器人','自动化','zhinengti','AI'],
    'logistics': ['物流','仓储','运输','配送','wuliu'],
    'healthcare': ['医疗','健康','医院','诊断','药物','yiliao'],
    'finance': ['金融','理财','投资','银行','反欺诈','交易','jinrong'],
    'education': ['教育','学习','辅导','批改','jiaoyu','xuexi'],
    'manufacturing': ['制造','工厂','质检','维护','zhizao'],
    'agriculture': ['农业','种植','收割','农','nongye'],
    'enterprise': ['企业','营销','HR','法务','qiye'],
    'retail': ['零售','电商','购物','推荐','lingshou'],
    'transport': ['交通','出行','自动驾驶','无人车','jiaotong'],
    'energy': ['能源','电力','电网','光伏','风电','nengyuan'],
    'media': ['媒体','娱乐','游戏','影视','音乐','yule'],
    'security': ['安全','网络','威胁','防火墙','anquan'],
    'law': ['法律','法务','合同','律师','falu','falv'],
    'climate': ['环保','气候','碳','排放','huanbao'],
    'govtech': ['政务','智慧城市','政府','城市','zhengwu'],
  }

  // Process each file for tool-level entries
  let totalTools = 0
  for (const file of files) {
    const section = pageToSection[file]
    if (!section) continue

    const content = fs.readFileSync(path.join(pagesDir, file), 'utf-8')
    const names = extractNames(content)
    const descs = extractDescs(content)
    const [domain] = sectionMap[section] || ['nav-tools']

    const seen = new Set()
    for (let i = 0; i < names.length; i++) {
      const name = names[i]
      if (seen.has(name)) continue
      seen.add(name)

      const desc = descs.find(d => d.includes(name.substring(0, 2))) || descs[i] || ''
      const keywords = extractKeywords(name, [desc]).filter(k => k.length > 0)
      // Add section-level keywords
      if (sectionKeywords[section]) {
        keywords.push(...sectionKeywords[section])
      }
      const uniqueKw = [...new Set(keywords)].slice(0, 16)
      entries.push(`  { name:'${name.replace(/'/g, "\\'")}', keywords:[${uniqueKw.map(k => `'${k.replace(/'/g, "\\'")}'`).join(',')}], domain:'${domain}', section:'${section}' },`)
      totalTools++
    }
  }

  entries.push(`]`)
  fs.writeFileSync(outputFile, entries.join('\n'), 'utf-8')
  console.log(`Generated ${outputFile} with ${entries.length - 8} entries (${totalTools} tools)`)
  console.log('To update the index after adding new tools, run: node scripts/build-search-index.cjs')
}

main()
