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
    status: 'planned',
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
    status: 'planned',
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
    status: 'planned',
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
    status: 'planned',
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
    status: 'planned',
    subModules: [
      { key: 'overview', icon: '🌾', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽' } },
      { key: 'precision', icon: '🎯', title: { en: 'Precision Farming', 'zh-CN': '精准农业', 'zh-TW': '精準農業' } },
      { key: 'monitoring', icon: '🛰️', title: { en: 'Crop Monitoring', 'zh-CN': '作物监测', 'zh-TW': '作物監測' } },
      { key: 'yield', icon: '📊', title: { en: 'Yield Prediction', 'zh-CN': '产量预测', 'zh-TW': '產量預測' } },
      { key: 'harvest', icon: '🚜', title: { en: 'Auto Harvesting', 'zh-CN': '自动收割', 'zh-TW': '自動收割' } },
    ],
  },
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
]
