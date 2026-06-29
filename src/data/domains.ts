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
      en: '⚠️ General tools — NOT all AI. 300+ useful tools in 12 categories: search, chat, writing, design, office, dev, social media, images. Convenient collection for easy access.',
      'zh-CN': '⚠️ 普通工具网站合集（非AI专属）。300+实用工具，12大分类：搜索、对话、写作、设计、办公、开发、社区、图片等。仅为方便整理，不限于AI。',
      'zh-TW': '⚠️ 普通工具網站合集（非AI專屬）。300+實用工具，12大分類：搜索、對話、寫作、設計、辦公、開發、社群、圖片等。僅為方便整理，不限於AI。',
    },
    color: '#3b82f6',
    status: 'done',
    subModules: [
      { key: 'overview', icon: '🧭', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽' } },
      { key: 'search', icon: '🔍', title: { en: 'Search Engines', 'zh-CN': '搜索引擎', 'zh-TW': '搜索引擎' } },
      { key: 'chat', icon: '💬', title: { en: 'Chat & LLMs', 'zh-CN': '对话助手', 'zh-TW': '對話助手' } },
      { key: 'writing', icon: '✍️', title: { en: 'Writing', 'zh-CN': '写作工具', 'zh-TW': '寫作工具' } },
      { key: 'image-gen', icon: '🎨', title: { en: 'Image Generation', 'zh-CN': '绘画工具', 'zh-TW': '繪畫工具' } },
      { key: 'video-gen-tool', icon: '🎬', title: { en: 'Video Tools', 'zh-CN': '视频工具', 'zh-TW': '影片工具' } },
      { key: 'audio-gen-tool', icon: '🎵', title: { en: 'Audio & Music', 'zh-CN': '音频工具', 'zh-TW': '音頻工具' } },
      { key: 'design', icon: '🎯', title: { en: 'Design & UI', 'zh-CN': '设计工具', 'zh-TW': '設計工具' } },
      { key: '3d-game', icon: '🎮', title: { en: '3D & Gaming', 'zh-CN': '3D与游戏', 'zh-TW': '3D與遊戲' } },
      { key: 'office', icon: '📋', title: { en: 'Office & Productivity', 'zh-CN': '办公提效', 'zh-TW': '辦公提效' } },
      { key: 'dev-tools', icon: '🔧', title: { en: 'Dev Tools', 'zh-CN': '开发工具', 'zh-TW': '開發工具' } },
      { key: 'social-media', icon: '📱', title: { en: 'Social & Community', 'zh-CN': '社区媒体', 'zh-TW': '社群媒體' } },
      { key: 'image-resources', icon: '🖼️', title: { en: 'Image Resources', 'zh-CN': '图片专区', 'zh-TW': '圖片專區' } },
    ],
  },
  {
    key: 'ai-industries',
    title: { en: 'AI in Industries', 'zh-CN': 'AI行业应用', 'zh-TW': 'AI行業應用' },
    icon: '🏭',
    desc: {
      en: 'See how AI is transforming 16 major industries — logistics, healthcare, finance, education, manufacturing, agriculture, enterprise, retail, transportation, energy, media, cybersecurity, and more. Real cases, key metrics, and tool directories for each sector.',
      'zh-CN': '看AI如何变革16大行业——物流、医疗、金融、教育、制造、农业、企业、零售、交通、能源、媒体、安全等。每个行业都有真实案例、关键指标和精选工具。',
      'zh-TW': '看AI如何變革16大行業——物流、醫療、金融、教育、製造、農業、企業、零售、交通、能源、媒體、安全、法律、環保、政務等。每個行業都有真實案例、關鍵指標和精選工具。',
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
    title: { en: 'AIGC · Content Gen', 'zh-CN': 'AIGC · AI生成', 'zh-TW': 'AIGC · AI生成' },
    icon: '🤖',
    desc: {
      en: 'Hands-on tutorials for generating audio, video, novels, PPTs, web pages, apps, and software with AI. Step-by-step guides with code and direct tool links.',
      'zh-CN': 'AI生成音频、视频、小说、PPT、网页、App、软件的实操教程。每步都有代码和工具直达链接。',
      'zh-TW': 'AI生成音頻、視頻、小說、PPT、網頁、App、軟體的實操教學。每步都有程式碼和工具直達鏈接。',
    },
    color: '#a855f7',
    status: 'done',
    subModules: [
      { key: 'overview', icon: '🤖', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽' } },
      { key: 'audio-gen', icon: '🎵', title: { en: 'Audio', 'zh-CN': '音频生成', 'zh-TW': '音頻生成' } },
      { key: 'video-gen', icon: '🎬', title: { en: 'Video', 'zh-CN': '视频生成', 'zh-TW': '影片生成' } },
      { key: 'novel', icon: '📝', title: { en: 'Novel', 'zh-CN': '小说写作', 'zh-TW': '小說寫作' } },
      { key: 'ppt-gen', icon: '📊', title: { en: 'PPT', 'zh-CN': 'PPT生成', 'zh-TW': 'PPT生成' } },
      { key: 'web-gen', icon: '🌐', title: { en: 'Web Page', 'zh-CN': '网页生成', 'zh-TW': '網頁生成' } },
      { key: 'app-gen', icon: '📱', title: { en: 'Mobile App', 'zh-CN': 'App生成', 'zh-TW': 'App生成' } },
      { key: 'software-gen', icon: '💻', title: { en: 'Desktop Software', 'zh-CN': '桌面软件生成', 'zh-TW': '桌面軟體生成' } },
    ],
  },
  {
    key: 'ai-dev',
    title: { en: 'AI Tools & Models', 'zh-CN': 'AI工具 · 大模型', 'zh-TW': 'AI工具 · 大模型' },
    icon: '🛠️',
    desc: {
      en: 'AI coding tools, CLI setup guides, agent frameworks, workflow automation, and major LLM models.',
      'zh-CN': 'AI编程工具、命令行教程、智能体搭建、工作流自动化、国内外主流大模型一览。',
      'zh-TW': 'AI編程工具、命令列教學、智能體搭建、工作流自動化、國內外主流大模型一覽。',
    },
    color: '#6366f1',
    status: 'done',
    subModules: [
      { key: 'overview', icon: '🛠️', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽' } },
      { key: 'gemini', icon: '🔷', title: { en: 'Gemini CLI', 'zh-CN': 'Gemini 教程', 'zh-TW': 'Gemini 教學' } },
      { key: 'codex', icon: '🟢', title: { en: 'Codex CLI', 'zh-CN': 'Codex 教程', 'zh-TW': 'Codex 教學' } },
      { key: 'deepseek', icon: '🐋', title: { en: 'DeepSeek Guide', 'zh-CN': 'DeepSeek 教程', 'zh-TW': 'DeepSeek 教學' } },
      { key: 'claude-code', icon: '🟠', title: { en: 'Claude Code', 'zh-CN': 'Claude Code 教程', 'zh-TW': 'Claude Code 教學' } },
      { key: 'frameworks', icon: '🧰', title: { en: 'Agent Frameworks', 'zh-CN': '智能体框架', 'zh-TW': '智能體框架' } },
      { key: 'assistants', icon: '💬', title: { en: 'AI Assistants', 'zh-CN': '个人助手', 'zh-TW': '個人助手' } },
      { key: 'workflow', icon: '⚡', title: { en: 'Workflow', 'zh-CN': '工作流', 'zh-TW': '工作流' } },
      { key: 'multi-agent', icon: '🕸️', title: { en: 'Multi-Agent', 'zh-CN': '多Agent协作', 'zh-TW': '多Agent協作' } },
      { key: 'agent-tools', icon: '🤖', title: { en: 'Model Hub', 'zh-CN': '大模型 & API', 'zh-TW': '大模型 & API' } },
    ],
  },
]
