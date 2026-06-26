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
  // aigc
  'gemini': ['aigc', 'Gemini CLI 教程', '🤖 AIGC教程'],
  'codex': ['aigc', 'Codex CLI 教程', '🤖 AIGC教程'],
  'ccswitch': ['aigc', 'CCSwitch 教程', '🤖 AIGC教程'],
  'frameworks': ['aigc', 'Agent 框架', '🤖 AIGC教程'],
  'assistants': ['aigc', '个人 AI 助手', '🤖 AIGC教程'],
  'workflow': ['aigc', '工作流自动化', '🤖 AIGC教程'],
  'multi-agent': ['aigc', '多 Agent 协作', '🤖 AIGC教程'],
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
  'CreativeOverview.tsx': 'creative',
  'DesignOverview.tsx': 'design',
  'Game3DOverview.tsx': '3d-game',
  'OfficeOverview.tsx': 'office',
  'AgentOverview.tsx': 'agents',
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
    entries.push(`  { name:'${name}', keywords:['${kw.join("','")}'], domain:'${domain}', section:'${key}' },`)
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
      const keywords = extractKeywords(name, [desc]).filter(k => k.length > 0).slice(0, 8)
      entries.push(`  { name:'${name.replace(/'/g, "\\'")}', keywords:[${keywords.map(k => `'${k.replace(/'/g, "\\'")}'`).join(',')}], domain:'${domain}', section:'${section}' },`)
      totalTools++
    }
  }

  entries.push(`]`)
  fs.writeFileSync(outputFile, entries.join('\n'), 'utf-8')
  console.log(`Generated ${outputFile} with ${entries.length - 8} entries (${totalTools} tools)`)
  console.log('To update the index after adding new tools, run: node scripts/build-search-index.cjs')
}

main()
