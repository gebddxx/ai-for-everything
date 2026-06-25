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
    key: 'nav-hub',
    title: { en: 'Navigation Hub', 'zh-CN': '导航合集', 'zh-TW': '導航合集' },
    icon: '🧭',
    desc: {
      en: 'Curated directories of 300+ tools across 14 categories — search, chat, creative, design, enterprise, healthcare, finance, education, manufacturing, agriculture, and more.',
      'zh-CN': '精选300+工具导航目录，覆盖搜索、对话、创意、设计、企业、医疗、金融、教育、制造、农业等14个领域。',
      'zh-TW': '精選300+工具導航目錄，覆蓋搜索、對話、創意、設計、企業、醫療、金融、教育、製造、農業等14個領域。',
    },
    color: '#3b82f6',
    status: 'done',
    subModules: [
      { key: 'overview', icon: '🧭', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽' } },
      { key: 'search', icon: '🔍', title: { en: 'Search & Discovery', 'zh-CN': '搜索发现', 'zh-TW': '搜索發現' } },
      { key: 'chat', icon: '💬', title: { en: 'Chat & Assistants', 'zh-CN': '对话助手', 'zh-TW': '對話助手' } },
      { key: 'creative', icon: '🎨', title: { en: 'Creative Studio', 'zh-CN': '创意工坊', 'zh-TW': '創意工坊' } },
      { key: 'design', icon: '🎯', title: { en: 'Design & UI', 'zh-CN': '设计工具', 'zh-TW': '設計工具' } },
      { key: '3d-game', icon: '🎮', title: { en: '3D & Gaming', 'zh-CN': '3D与游戏', 'zh-TW': '3D與遊戲' } },
      { key: 'enterprise', icon: '🏢', title: { en: 'Enterprise Tools', 'zh-CN': '企业应用', 'zh-TW': '企業應用' } },
      { key: 'healthcare', icon: '🏥', title: { en: 'Healthcare', 'zh-CN': '医疗健康', 'zh-TW': '醫療健康' } },
      { key: 'finance', icon: '💰', title: { en: 'Finance', 'zh-CN': '金融科技', 'zh-TW': '金融科技' } },
      { key: 'education', icon: '📚', title: { en: 'Education', 'zh-CN': '教育科技', 'zh-TW': '教育科技' } },
      { key: 'manufacturing', icon: '🏗️', title: { en: 'Manufacturing', 'zh-CN': '智能制造', 'zh-TW': '智慧製造' } },
      { key: 'agriculture', icon: '🌾', title: { en: 'Agriculture', 'zh-CN': '智慧农业', 'zh-TW': '智慧農業' } },
      { key: 'office', icon: '📋', title: { en: 'Office & Productivity', 'zh-CN': '办公提效', 'zh-TW': '辦公提效' } },
      { key: 'agents', icon: '🤖', title: { en: 'Agents & Automation', 'zh-CN': '智能体', 'zh-TW': '智能體' } },
      { key: 'logistics', icon: '📦', title: { en: 'Logistics', 'zh-CN': '智慧物流', 'zh-TW': '智慧物流' } },
    ],
  },
  {
    key: 'aigc',
    title: { en: 'AIGC Tutorials', 'zh-CN': 'AIGC教程', 'zh-TW': 'AIGC教學' },
    icon: '🤖',
    desc: {
      en: 'Step-by-step tutorials for generating audio, video, novels, PPTs, web pages, apps, and software with AI. Plus guides on AI coding and building agents.',
      'zh-CN': 'AI生成音频、视频、小说、PPT、网页、App、软件的实操教程。还有AI编程和智能体搭建指南。',
      'zh-TW': 'AI生成音頻、視頻、小說、PPT、網頁、App、軟體的實操教學。還有AI編程和智能體搭建指南。',
    },
    color: '#a855f7',
    status: 'done',
    subModules: [
      { key: 'overview', icon: '🤖', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽' } },
      { key: 'gemini', icon: '🔷', title: { en: 'Gemini CLI Guide', 'zh-CN': 'Gemini CLI 教程', 'zh-TW': 'Gemini CLI 教學' } },
      { key: 'codex', icon: '🟢', title: { en: 'Codex CLI Guide', 'zh-CN': 'Codex CLI 教程', 'zh-TW': 'Codex CLI 教學' } },
      { key: 'ccswitch', icon: '🔀', title: { en: 'CCSwitch + Claude + DeepSeek', 'zh-CN': 'CCSwitch 多模型协作', 'zh-TW': 'CCSwitch 多模型協作' } },
      { key: 'frameworks', icon: '🧰', title: { en: 'Agent Frameworks', 'zh-CN': 'Agent 框架', 'zh-TW': 'Agent 框架' } },
      { key: 'assistants', icon: '💬', title: { en: 'Personal AI Assistants', 'zh-CN': '个人 AI 助手', 'zh-TW': '個人 AI 助手' } },
      { key: 'workflow', icon: '⚡', title: { en: 'Workflow Automation', 'zh-CN': '工作流自动化', 'zh-TW': '工作流自動化' } },
      { key: 'multi-agent', icon: '🕸️', title: { en: 'Multi-Agent Systems', 'zh-CN': '多 Agent 协作', 'zh-TW': '多 Agent 協作' } },
      { key: 'audio-gen', icon: '🎵', title: { en: 'Audio & Music Generation', 'zh-CN': '音频音乐生成', 'zh-TW': '音頻音樂生成' } },
      { key: 'video-gen', icon: '🎬', title: { en: 'Video Generation', 'zh-CN': '视频生成', 'zh-TW': '影片生成' } },
      { key: 'novel', icon: '📝', title: { en: 'Novel & Writing', 'zh-CN': '小说写作', 'zh-TW': '小說寫作' } },
      { key: 'ppt-gen', icon: '📊', title: { en: 'PPT Generation', 'zh-CN': 'PPT 生成', 'zh-TW': 'PPT 生成' } },
      { key: 'web-gen', icon: '🌐', title: { en: 'Web Page Generation', 'zh-CN': '网页生成', 'zh-TW': '網頁生成' } },
      { key: 'app-gen', icon: '📱', title: { en: 'App Generation', 'zh-CN': 'App 生成', 'zh-TW': 'App 生成' } },
      { key: 'software-gen', icon: '💻', title: { en: 'Software/EXE Generation', 'zh-CN': '软件/EXE 生成', 'zh-TW': '軟體/EXE 生成' } },
    ],
  },
]
