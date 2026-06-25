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
    key: 'vibe-coding',
    title: { en: 'AI Vibe Coding', 'zh-CN': 'AI Vibe Coding', 'zh-TW': 'AI Vibe Coding' },
    icon: '💻',
    desc: {
      en: 'Set up AI-powered coding environments: Gemini CLI, Codex CLI, and CCSwitch with Claude + DeepSeek. Step-by-step tutorials to get you coding with AI.',
      'zh-CN': '搭建 AI 编程环境：Gemini CLI、Codex CLI、CCSwitch + Claude + DeepSeek。手把手教程，让你用 AI 写代码。',
      'zh-TW': '搭建 AI 編程環境：Gemini CLI、Codex CLI、CCSwitch + Claude + DeepSeek。手把手教學，讓你用 AI 寫程式。',
    },
    color: '#a855f7',
    status: 'done',
    subModules: [
      { key: 'overview', icon: '💻', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽' } },
      { key: 'gemini', icon: '🔷', title: { en: 'Gemini CLI', 'zh-CN': 'Gemini CLI', 'zh-TW': 'Gemini CLI' } },
      { key: 'codex', icon: '🟢', title: { en: 'Codex CLI', 'zh-CN': 'Codex CLI', 'zh-TW': 'Codex CLI' } },
      { key: 'ccswitch', icon: '🔀', title: { en: 'CCSwitch + Claude + DeepSeek', 'zh-CN': 'CCSwitch + Claude + DeepSeek', 'zh-TW': 'CCSwitch + Claude + DeepSeek' } },
    ],
  },
  {
    key: 'learning',
    title: { en: 'AI for Learning', 'zh-CN': 'AI 学习助手', 'zh-TW': 'AI 學習助手' },
    icon: '📖',
    desc: {
      en: 'AI-powered personal learning toolkit: intelligent reading assistant, auto mind-mapping, knowledge base builder, and personal growth tracker. Your AI second brain for lifelong learning.',
      'zh-CN': 'AI 驱动的个人学习工具箱：智能阅读助手、自动思维导图、知识库搭建、个人成长追踪。你的 AI 第二大脑，助力终身学习。',
      'zh-TW': 'AI 驅動的個人學習工具箱：智慧閱讀助手、自動思維導圖、知識庫搭建、個人成長追蹤。你的 AI 第二腦，助力終身學習。',
    },
    color: '#14b8a6',
    status: 'done',
    subModules: [
      { key: 'overview', icon: '📖', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽' } },
      { key: 'reading', icon: '📝', title: { en: 'AI Reading Assistant', 'zh-CN': 'AI 辅助阅读', 'zh-TW': 'AI 輔助閱讀' } },
      { key: 'mindmap', icon: '🧠', title: { en: 'AI Mind Mapping', 'zh-CN': 'AI 思维导图', 'zh-TW': 'AI 思維導圖' } },
      { key: 'knowledge', icon: '🗂️', title: { en: 'Knowledge Base Builder', 'zh-CN': 'AI 知识库', 'zh-TW': 'AI 知識庫' } },
      { key: 'growth', icon: '📈', title: { en: 'Personal Growth', 'zh-CN': '个人成长', 'zh-TW': '個人成長' } },
    ],
  },
  {
    key: 'creative',
    title: { en: 'AI Creative Studio', 'zh-CN': 'AI 创意工坊', 'zh-TW': 'AI 創意工坊' },
    icon: '🎨',
    desc: {
      en: 'AI-powered content creation: writing, image generation, video production, and audio/music. Unleash your creativity with cutting-edge generative AI tools.',
      'zh-CN': 'AI 驱动的内容创作：智能写作、图像生成、视频制作、音频音乐。用最前沿的生成式 AI 释放你的创造力。',
      'zh-TW': 'AI 驅動的內容創作：智慧寫作、圖像生成、影片製作、音頻音樂。用最前沿的生成式 AI 釋放你的創造力。',
    },
    color: '#ec4899',
    status: 'done',
    subModules: [
      { key: 'overview', icon: '🎨', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽' } },
      { key: 'writing', icon: '✍️', title: { en: 'AI Writing', 'zh-CN': 'AI 写作', 'zh-TW': 'AI 寫作' } },
      { key: 'image', icon: '🖼️', title: { en: 'AI Image Generation', 'zh-CN': 'AI 绘画', 'zh-TW': 'AI 繪畫' } },
      { key: 'video', icon: '🎬', title: { en: 'AI Video Creation', 'zh-CN': 'AI 视频', 'zh-TW': 'AI 影片' } },
      { key: 'audio', icon: '🎵', title: { en: 'AI Audio & Music', 'zh-CN': 'AI 音频音乐', 'zh-TW': 'AI 音頻音樂' } },
    ],
  },
  {
    key: 'office',
    title: { en: 'AI Office & Productivity', 'zh-CN': 'AI 办公提效', 'zh-TW': 'AI 辦公提效' },
    icon: '📋',
    desc: {
      en: 'AI supercharges your daily work: auto-generate presentations, analyze spreadsheets, summarize meetings, and manage emails. Work smarter, not harder.',
      'zh-CN': 'AI 为日常工作提效：自动生成 PPT、分析表格数据、总结会议纪要、智能管理邮件。更聪明地工作，而非更拼命。',
      'zh-TW': 'AI 為日常工作提效：自動生成 PPT、分析表格數據、總結會議紀錄、智慧管理郵件。更聰明地工作，而非更拼命。',
    },
    color: '#f97316',
    status: 'done',
    subModules: [
      { key: 'overview', icon: '📋', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽' } },
      { key: 'ppt', icon: '📊', title: { en: 'AI PPT & Slides', 'zh-CN': 'AI 演示文稿', 'zh-TW': 'AI 演示文稿' } },
      { key: 'docs', icon: '📄', title: { en: 'AI Documents', 'zh-CN': 'AI 文档处理', 'zh-TW': 'AI 文檔處理' } },
      { key: 'meeting', icon: '🎙️', title: { en: 'AI Meeting Assistant', 'zh-CN': 'AI 会议助手', 'zh-TW': 'AI 會議助手' } },
      { key: 'email', icon: '📧', title: { en: 'AI Email & Comms', 'zh-CN': 'AI 邮件沟通', 'zh-TW': 'AI 郵件溝通' } },
    ],
  },
  {
    key: 'agents',
    title: { en: 'AI Agents & Automation', 'zh-CN': 'AI 智能体', 'zh-TW': 'AI 智能體' },
    icon: '🤖',
    desc: {
      en: 'Build and deploy autonomous AI agents that plan, reason, use tools, and complete complex workflows. From personal assistants to enterprise automation.',
      'zh-CN': '构建和部署能自主规划、推理、使用工具的 AI 智能体。从个人助手到企业自动化，让 AI 替你干活。',
      'zh-TW': '構建和部署能自主規劃、推理、使用工具的 AI 智能體。從個人助手到企業自動化，讓 AI 替你幹活。',
    },
    color: '#6366f1',
    status: 'done',
    subModules: [
      { key: 'overview', icon: '🤖', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽' } },
      { key: 'frameworks', icon: '🧰', title: { en: 'Agent Frameworks', 'zh-CN': 'Agent 框架', 'zh-TW': 'Agent 框架' } },
      { key: 'assistants', icon: '💬', title: { en: 'Personal AI Assistants', 'zh-CN': '个人 AI 助手', 'zh-TW': '個人 AI 助手' } },
      { key: 'workflow', icon: '⚡', title: { en: 'Workflow Automation', 'zh-CN': '工作流自动化', 'zh-TW': '工作流自動化' } },
      { key: 'multi-agent', icon: '🕸️', title: { en: 'Multi-Agent Systems', 'zh-CN': '多 Agent 协作', 'zh-TW': '多 Agent 協作' } },
    ],
  },
  {
    key: 'search',
    title: { en: 'AI Search & Discovery', 'zh-CN': 'AI 搜索发现', 'zh-TW': 'AI 搜索發現' },
    icon: '🔍',
    desc: { en: 'AI-powered search engines, research tools, and content discovery platforms that find, summarize, and connect information across the web.', 'zh-CN': 'AI 搜索引擎、研究工具、内容发现平台——找信息、做调研、追踪前沿动态的智能助手。', 'zh-TW': 'AI 搜尋引擎、研究工具、內容發現平台——找資訊、做調研、追蹤前沿動態的智慧助手。' },
    color: '#0ea5e9', status: 'done',
    subModules: [
      { key: 'overview', icon: '🔍', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽' } },
      { key: 'search-engines', icon: '🌐', title: { en: 'AI Search Engines', 'zh-CN': 'AI 搜索引擎', 'zh-TW': 'AI 搜尋引擎' } },
      { key: 'research', icon: '📑', title: { en: 'AI Research Tools', 'zh-CN': 'AI 研究工具', 'zh-TW': 'AI 研究工具' } },
      { key: 'discovery', icon: '🛎️', title: { en: 'Content Discovery', 'zh-CN': '内容发现', 'zh-TW': '內容發現' } },
    ],
  },
  {
    key: 'chat',
    title: { en: 'AI Chat & Assistants', 'zh-CN': 'AI 对话助手', 'zh-TW': 'AI 對話助手' },
    icon: '💬',
    desc: { en: 'Compare and access the best AI chatbots and conversational platforms. From general-purpose LLMs to specialized role-playing bots.', 'zh-CN': '对比和访问最好的 AI 聊天机器人平台——从通用大模型到垂直领域的专业对话助手。', 'zh-TW': '對比和訪問最好的 AI 聊天機器人平台——從通用大模型到垂直領域的專業對話助手。' },
    color: '#22c55e', status: 'done',
    subModules: [
      { key: 'overview', icon: '💬', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽' } },
      { key: 'llm-platforms', icon: '🧠', title: { en: 'LLM Platforms', 'zh-CN': '大模型平台', 'zh-TW': '大模型平台' } },
      { key: 'role-play', icon: '🎭', title: { en: 'Character & Role-Play', 'zh-CN': '角色扮演 AI', 'zh-TW': '角色扮演 AI' } },
      { key: 'comparison', icon: '⚖️', title: { en: 'Model Comparison', 'zh-CN': '模型对比', 'zh-TW': '模型對比' } },
    ],
  },
  {
    key: 'design',
    title: { en: 'AI Design & UI', 'zh-CN': 'AI 设计', 'zh-TW': 'AI 設計' },
    icon: '🎯',
    desc: { en: 'AI-powered design tools for UI/UX, logos, branding, product mockups, and creative visual assets. Design faster with intelligent assistants.', 'zh-CN': 'AI 驱动的设计工具：UI/UX、Logo、品牌、产品原型。用智能助手加速设计流程。', 'zh-TW': 'AI 驅動的設計工具：UI/UX、Logo、品牌、產品原型。用智慧助手加速設計流程。' },
    color: '#e11d48', status: 'done',
    subModules: [
      { key: 'overview', icon: '🎯', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽' } },
      { key: 'ui-ux', icon: '🖌️', title: { en: 'UI/UX Design', 'zh-CN': 'UI/UX 设计', 'zh-TW': 'UI/UX 設計' } },
      { key: 'branding', icon: '🏷️', title: { en: 'Branding & Logo', 'zh-CN': '品牌与Logo', 'zh-TW': '品牌與Logo' } },
      { key: 'mockup', icon: '📱', title: { en: 'Mockup & Prototype', 'zh-CN': '原型设计', 'zh-TW': '原型設計' } },
    ],
  },
  {
    key: '3d-game',
    title: { en: 'AI 3D & Gaming', 'zh-CN': 'AI 3D 与游戏', 'zh-TW': 'AI 3D 與遊戲' },
    icon: '🎮',
    desc: { en: 'AI tools for 3D modeling, game asset generation, level design, NPC behavior, and procedural content creation.', 'zh-CN': 'AI 3D 建模、游戏资产生成、关卡设计、NPC 行为、程序化内容创作。', 'zh-TW': 'AI 3D 建模、遊戲資產生態、關卡設計、NPC 行為、程式化內容創作。' },
    color: '#7c3aed', status: 'done',
    subModules: [
      { key: 'overview', icon: '🎮', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽' } },
      { key: '3d-model', icon: '🧊', title: { en: '3D Generation', 'zh-CN': '3D 生成', 'zh-TW': '3D 生成' } },
      { key: 'game-assets', icon: '🗡️', title: { en: 'Game Assets', 'zh-CN': '游戏资产', 'zh-TW': '遊戲資產' } },
      { key: 'npc', icon: '👾', title: { en: 'NPC & Behavior', 'zh-CN': 'NPC 与行为', 'zh-TW': 'NPC 與行為' } },
    ],
  },
  {
    key: 'enterprise',
    title: { en: 'AI for Enterprise', 'zh-CN': 'AI 企业应用', 'zh-TW': 'AI 企業應用' },
    icon: '🏢',
    desc: { en: 'Enterprise-grade AI solutions: marketing automation, sales intelligence, HR tech, legal AI, and customer success platforms.', 'zh-CN': '企业级 AI 解决方案：营销自动化、销售智能、HR 科技、法律 AI、客户成功。', 'zh-TW': '企業級 AI 解決方案：行銷自動化、銷售智慧、HR 科技、法律 AI、客戶成功。' },
    color: '#64748b', status: 'done',
    subModules: [
      { key: 'overview', icon: '🏢', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽' } },
      { key: 'marketing', icon: '📢', title: { en: 'Marketing & Sales', 'zh-CN': '营销销售', 'zh-TW': '行銷銷售' } },
      { key: 'hr', icon: '👥', title: { en: 'HR & Recruitment', 'zh-CN': '人力资源', 'zh-TW': '人力資源' } },
      { key: 'legal', icon: '⚖️', title: { en: 'Legal & Compliance', 'zh-CN': '法律合规', 'zh-TW': '法律合規' } },
    ],
  },
  {
    key: 'logistics',
    title: { en: 'AI Logistics', 'zh-CN': 'AI 物流', 'zh-TW': 'AI 物流' },
    icon: '📦',
    desc: {
      en: 'Smart warehousing, transport dispatch, last-mile delivery, demand forecasting, and intelligent customer service.',
      'zh-CN': '智能仓储、运输调度、末端配送、需求预测、智能客服 — 五大场景全面覆盖。',
      'zh-TW': '智慧倉儲、運輸調度、末端配送、需求預測、智慧客服 — 五大場景全面覆蓋。',
    },
    color: '#3b82f6',
    status: 'done',
    subModules: [
      { key: 'overview', icon: '📦', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽' } },
      { key: 'warehouse', icon: '🏭', title: { en: 'Smart Warehousing', 'zh-CN': '智能仓储', 'zh-TW': '智慧倉儲' } },
      { key: 'transport', icon: '🚛', title: { en: 'Transport Dispatch', 'zh-CN': '运输调度', 'zh-TW': '運輸調度' } },
      { key: 'delivery', icon: '🚁', title: { en: 'Last-Mile Delivery', 'zh-CN': '末端配送', 'zh-TW': '末端配送' } },
      { key: 'prediction', icon: '📊', title: { en: 'Prediction & Decision', 'zh-CN': '预测决策', 'zh-TW': '預測決策' } },
      { key: 'operation', icon: '🤖', title: { en: 'Operations & Service', 'zh-CN': '运营客服', 'zh-TW': '運營客服' } },
    ],
  },
  {
    key: 'healthcare',
    title: { en: 'AI Healthcare', 'zh-CN': 'AI 医疗', 'zh-TW': 'AI 醫療' },
    icon: '🏥',
    desc: {
      en: 'Medical imaging, drug discovery, clinical decision support, and patient care automation.',
      'zh-CN': '医学影像、药物研发、临床决策支持、患者护理自动化。',
      'zh-TW': '醫學影像、藥物研發、臨床決策支持、患者護理自動化。',
    },
    color: '#10b981',
    status: 'done',
    subModules: [
      { key: 'overview', icon: '🏥', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽' } },
      { key: 'imaging', icon: '🩻', title: { en: 'Medical Imaging', 'zh-CN': '医学影像', 'zh-TW': '醫學影像' } },
      { key: 'drug', icon: '💊', title: { en: 'Drug Discovery', 'zh-CN': '药物研发', 'zh-TW': '藥物研發' } },
      { key: 'clinical', icon: '🩺', title: { en: 'Clinical Decision', 'zh-CN': '临床决策', 'zh-TW': '臨床決策' } },
      { key: 'care', icon: '❤️', title: { en: 'Patient Care', 'zh-CN': '患者护理', 'zh-TW': '患者護理' } },
    ],
  },
  {
    key: 'education',
    title: { en: 'AI Education', 'zh-CN': 'AI 教育', 'zh-TW': 'AI 教育' },
    icon: '📚',
    desc: {
      en: 'Personalized learning, intelligent tutoring, automated grading, and educational content generation.',
      'zh-CN': '个性化学习、智能辅导、自动评分、教育内容生成。',
      'zh-TW': '個性化學習、智能輔導、自動評分、教育內容生成。',
    },
    color: '#8b5cf6',
    status: 'done',
    subModules: [
      { key: 'overview', icon: '📚', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽' } },
      { key: 'personalized', icon: '🎯', title: { en: 'Personalized Learning', 'zh-CN': '个性化学习', 'zh-TW': '個性化學習' } },
      { key: 'tutoring', icon: '🧑‍🏫', title: { en: 'AI Tutoring', 'zh-CN': 'AI辅导', 'zh-TW': 'AI輔導' } },
      { key: 'grading', icon: '✅', title: { en: 'Auto Grading', 'zh-CN': '自动评分', 'zh-TW': '自動評分' } },
      { key: 'content', icon: '📝', title: { en: 'Content Generation', 'zh-CN': '内容生成', 'zh-TW': '內容生成' } },
    ],
  },
  {
    key: 'finance',
    title: { en: 'AI Finance', 'zh-CN': 'AI 金融', 'zh-TW': 'AI 金融' },
    icon: '💰',
    desc: {
      en: 'Fraud detection, algorithmic trading, risk assessment, and intelligent wealth management.',
      'zh-CN': '欺诈检测、算法交易、风险评估、智能理财。',
      'zh-TW': '欺詐檢測、算法交易、風險評估、智能理財。',
    },
    color: '#f59e0b',
    status: 'done',
    subModules: [
      { key: 'overview', icon: '💰', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽' } },
      { key: 'fraud', icon: '🔒', title: { en: 'Fraud Detection', 'zh-CN': '欺诈检测', 'zh-TW': '欺詐檢測' } },
      { key: 'trading', icon: '📈', title: { en: 'Algo Trading', 'zh-CN': '算法交易', 'zh-TW': '算法交易' } },
      { key: 'risk', icon: '⚠️', title: { en: 'Risk Assessment', 'zh-CN': '风险评估', 'zh-TW': '風險評估' } },
      { key: 'wealth', icon: '💎', title: { en: 'Wealth Management', 'zh-CN': '智能理财', 'zh-TW': '智能理財' } },
    ],
  },
  {
    key: 'manufacturing',
    title: { en: 'AI Manufacturing', 'zh-CN': 'AI 制造', 'zh-TW': 'AI 製造' },
    icon: '🏗️',
    desc: {
      en: 'Predictive maintenance, quality inspection, supply chain optimization, and digital twins.',
      'zh-CN': '预测性维护、质量检测、供应链优化、数字孪生。',
      'zh-TW': '預測性維護、質量檢測、供應鏈優化、數字孿生。',
    },
    color: '#ef4444',
    status: 'done',
    subModules: [
      { key: 'overview', icon: '🏗️', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽' } },
      { key: 'maintenance', icon: '🔧', title: { en: 'Predictive Maintenance', 'zh-CN': '预测性维护', 'zh-TW': '預測性維護' } },
      { key: 'quality', icon: '🔍', title: { en: 'Quality Inspection', 'zh-CN': '质量检测', 'zh-TW': '質量檢測' } },
      { key: 'supplychain', icon: '🔗', title: { en: 'Supply Chain', 'zh-CN': '供应链优化', 'zh-TW': '供應鏈優化' } },
      { key: 'digitaltwin', icon: '🔄', title: { en: 'Digital Twins', 'zh-CN': '数字孪生', 'zh-TW': '數字孿生' } },
    ],
  },
  {
    key: 'agriculture',
    title: { en: 'AI Agriculture', 'zh-CN': 'AI 农业', 'zh-TW': 'AI 農業' },
    icon: '🌾',
    desc: {
      en: 'Precision farming, crop monitoring, yield prediction, and automated harvesting.',
      'zh-CN': '精准农业、作物监测、产量预测、自动收割。',
      'zh-TW': '精準農業、作物監測、產量預測、自動收割。',
    },
    color: '#06b6d4',
    status: 'done',
    subModules: [
      { key: 'overview', icon: '🌾', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽' } },
      { key: 'precision', icon: '🎯', title: { en: 'Precision Farming', 'zh-CN': '精准农业', 'zh-TW': '精準農業' } },
      { key: 'monitoring', icon: '🛰️', title: { en: 'Crop Monitoring', 'zh-CN': '作物监测', 'zh-TW': '作物監測' } },
      { key: 'yield', icon: '📊', title: { en: 'Yield Prediction', 'zh-CN': '产量预测', 'zh-TW': '產量預測' } },
      { key: 'harvest', icon: '🚜', title: { en: 'Auto Harvesting', 'zh-CN': '自动收割', 'zh-TW': '自動收割' } },
    ],
  },
]
