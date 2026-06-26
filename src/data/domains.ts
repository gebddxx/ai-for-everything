export interface SubModule {
  key: string
  icon: string
  title: { en: string; 'zh-CN': string; 'zh-TW': string }
}

export interface Domain {
  key: string
  title: { en: string; 'zh-CN': string; 'zh-TW': string }
  icon: string
  desc: { en: string; 'zh-CN': string; 'zh-TW': string }
  color: string
  status: 'done' | 'wip' | 'planned'
  subModules: SubModule[]
}

export const domains: Domain[] = [
  {
    key: 'nav-tools',
    title: { en: 'Tool Directory', 'zh-CN': '导航工具集', 'zh-TW': '導航工具集' },
    icon: '🧭',
    desc: {
      en: 'Curated directories of 200+ useful tools across 8 categories — search engines, chatbots, design, creative, office, 3D/gaming, AI agents, and more. One-stop find for everything you need.',
      'zh-CN': '精选200+实用工具导航，覆盖搜索、对话、设计、创意、办公、3D/游戏、智能体等8大分类。一站式找到你需要的工具。',
      'zh-TW': '精選200+實用工具導航，覆蓋搜索、對話、設計、創意、辦公、3D/遊戲、智能體等8大分類。一站式找到你需要的工具。',
    },
    color: '#3b82f6',
    status: 'done',
    subModules: [
      { key: 'overview', icon: '🧭', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽' } },
      { key: 'search', icon: '🔍', title: { en: 'Search Engines', 'zh-CN': '搜索引擎', 'zh-TW': '搜索引擎' } },
      { key: 'chat', icon: '💬', title: { en: 'Chat & LLMs', 'zh-CN': '对话助手', 'zh-TW': '對話助手' } },
      { key: 'creative', icon: '🎨', title: { en: 'Creative Tools', 'zh-CN': '创意工具', 'zh-TW': '創意工具' } },
      { key: 'design', icon: '🎯', title: { en: 'Design & UI', 'zh-CN': '设计工具', 'zh-TW': '設計工具' } },
      { key: '3d-game', icon: '🎮', title: { en: '3D & Gaming', 'zh-CN': '3D与游戏', 'zh-TW': '3D與遊戲' } },
      { key: 'office', icon: '📋', title: { en: 'Office & Productivity', 'zh-CN': '办公提效', 'zh-TW': '辦公提效' } },
      { key: 'agents', icon: '🤖', title: { en: 'Agents & Automation', 'zh-CN': '智能体', 'zh-TW': '智能體' } },
    ],
  },
  {
    key: 'ai-industries',
    title: { en: 'AI in Industries', 'zh-CN': 'AI行业应用', 'zh-TW': 'AI行業應用' },
    icon: '🏭',
    desc: {
      en: 'See how AI is transforming 16 major industries — logistics, healthcare, finance, education, manufacturing, agriculture, enterprise, retail, transportation, energy, media, cybersecurity, and more. Real cases, key metrics, and tool directories for each sector.',
      'zh-CN': '看AI如何变革16大行业——物流、医疗、金融、教育、制造、农业、企业、零售、交通、能源、媒体、安全等。每个行业都有真实案例、关键指标和精选工具。',
      'zh-TW': '看AI如何變革13大行業——物流、醫療、金融、教育、製造、農業、企業、零售、交通、能源、媒體、安全等。每個行業都有真實案例、關鍵指標和精選工具。',
    },
    color: '#10b981',
    status: 'done',
    subModules: [
      { key: 'overview', icon: '🏭', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽' } },
      { key: 'logistics', icon: '📦', title: { en: 'Logistics', 'zh-CN': '智慧物流', 'zh-TW': '智慧物流' } },
      { key: 'healthcare', icon: '🏥', title: { en: 'Healthcare', 'zh-CN': '医疗健康', 'zh-TW': '醫療健康' } },
      { key: 'finance', icon: '💰', title: { en: 'Finance', 'zh-CN': '金融科技', 'zh-TW': '金融科技' } },
      { key: 'education', icon: '📚', title: { en: 'Education', 'zh-CN': '教育科技', 'zh-TW': '教育科技' } },
      { key: 'manufacturing', icon: '🏗️', title: { en: 'Manufacturing', 'zh-CN': '智能制造', 'zh-TW': '智慧製造' } },
      { key: 'agriculture', icon: '🌾', title: { en: 'Agriculture', 'zh-CN': '智慧农业', 'zh-TW': '智慧農業' } },
      { key: 'enterprise', icon: '🏢', title: { en: 'Enterprise', 'zh-CN': '企业应用', 'zh-TW': '企業應用' } },
      { key: 'retail', icon: '🛒', title: { en: 'Retail & E-commerce', 'zh-CN': '零售电商', 'zh-TW': '零售電商' } },
      { key: 'transport', icon: '🚗', title: { en: 'Transportation', 'zh-CN': '交通出行', 'zh-TW': '交通出行' } },
      { key: 'energy', icon: '⚡', title: { en: 'Energy', 'zh-CN': '能源电力', 'zh-TW': '能源電力' } },
      { key: 'media', icon: '🎬', title: { en: 'Media & Entertainment', 'zh-CN': '媒体娱乐', 'zh-TW': '媒體娛樂' } },
      { key: 'security', icon: '🔒', title: { en: 'Cybersecurity', 'zh-CN': '网络安全', 'zh-TW': '網路安全' } },
      { key: 'law', icon: '⚖️', title: { en: 'Legal Tech', 'zh-CN': '法律科技', 'zh-TW': '法律科技' } },
      { key: 'climate', icon: '🌍', title: { en: 'Climate & Environment', 'zh-CN': '环保气候', 'zh-TW': '環保氣候' } },
      { key: 'govtech', icon: '🏛️', title: { en: 'GovTech & Smart City', 'zh-CN': '政务智慧城市', 'zh-TW': '政務智慧城市' } },
    ],
  },
  {
    key: 'aigc',
    title: { en: 'AIGC Tutorials', 'zh-CN': 'AIGC教程', 'zh-TW': 'AIGC教學' },
    icon: '🤖',
    desc: {
      en: 'Hands-on tutorials for generating audio, video, novels, PPTs, web pages, apps, and software with AI. Plus guides on AI coding and building intelligent agents. Step-by-step, code included.',
      'zh-CN': 'AI生成音频、视频、小说、PPT、网页、App、软件的实操教程。还有AI编程和智能体搭建指南。每一步都有代码和截图。',
      'zh-TW': 'AI生成音頻、視頻、小說、PPT、網頁、App、軟體的實操教學。還有AI編程和智能體搭建指南。每一步都有程式碼和截圖。',
    },
    color: '#a855f7',
    status: 'done',
    subModules: [
      { key: 'overview', icon: '🤖', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽' } },
      { key: 'audio-gen', icon: '🎵', title: { en: 'Audio & Music', 'zh-CN': '音频音乐生成', 'zh-TW': '音頻音樂生成' } },
      { key: 'video-gen', icon: '🎬', title: { en: 'Video Generation', 'zh-CN': '视频生成', 'zh-TW': '影片生成' } },
      { key: 'novel', icon: '📝', title: { en: 'Novel & Writing', 'zh-CN': '小说写作', 'zh-TW': '小說寫作' } },
      { key: 'ppt-gen', icon: '📊', title: { en: 'PPT Generation', 'zh-CN': 'PPT 生成', 'zh-TW': 'PPT 生成' } },
      { key: 'web-gen', icon: '🌐', title: { en: 'Web Page Gen', 'zh-CN': '网页生成', 'zh-TW': '網頁生成' } },
      { key: 'app-gen', icon: '📱', title: { en: 'App Generation', 'zh-CN': 'App 生成', 'zh-TW': 'App 生成' } },
      { key: 'software-gen', icon: '💻', title: { en: 'Software/EXE', 'zh-CN': '软件/EXE生成', 'zh-TW': '軟體/EXE生成' } },
      { key: 'gemini', icon: '🔷', title: { en: 'Gemini CLI Guide', 'zh-CN': 'Gemini CLI 教程', 'zh-TW': 'Gemini CLI 教學' } },
      { key: 'codex', icon: '🟢', title: { en: 'Codex CLI Guide', 'zh-CN': 'Codex CLI 教程', 'zh-TW': 'Codex CLI 教學' } },
      { key: 'ccswitch', icon: '🔀', title: { en: 'CCSwitch Multi-Model', 'zh-CN': 'CCSwitch 多模型协作', 'zh-TW': 'CCSwitch 多模型協作' } },
      { key: 'frameworks', icon: '🧰', title: { en: 'Agent Frameworks', 'zh-CN': 'Agent 框架', 'zh-TW': 'Agent 框架' } },
      { key: 'assistants', icon: '💬', title: { en: 'Personal AI Assistants', 'zh-CN': '个人 AI 助手', 'zh-TW': '個人 AI 助手' } },
      { key: 'workflow', icon: '⚡', title: { en: 'Workflow Automation', 'zh-CN': '工作流自动化', 'zh-TW': '工作流自動化' } },
      { key: 'multi-agent', icon: '🕸️', title: { en: 'Multi-Agent Systems', 'zh-CN': '多 Agent 协作', 'zh-TW': '多 Agent 協作' } },
    ],
  },
]
