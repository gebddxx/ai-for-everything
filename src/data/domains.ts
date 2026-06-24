export interface Domain {
  key: string
  title: { en: string; 'zh-CN': string; 'zh-TW': string }
  icon: string
  desc: { en: string; 'zh-CN': string; 'zh-TW': string }
  color: string
  status: 'done' | 'wip' | 'planned'
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
  },
]
