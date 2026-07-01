export interface SubModule {
  key: string
  icon: string
  title: { en: string; 'zh-CN': string; 'zh-TW': string; ja?: string; ko?: string; es?: string }
}
export interface Domain {
  key: string
  title: { en: string; 'zh-CN': string; 'zh-TW': string; ja?: string; ko?: string; es?: string }
  icon: string
  desc: { en: string; 'zh-CN': string; 'zh-TW': string; ja?: string; ko?: string; es?: string }
  color: string
  status: 'done' | 'wip' | 'planned'
  subModules: SubModule[]
}
export const domains: Domain[] = [
  {
    key: 'nav-tools',
    title: { en: 'Tool Directory', 'zh-CN': '导航工具集', 'zh-TW': '導航工具集', ja: 'ツール集', ko: '도구 모음', es: 'Directorio' },
    icon: '🧭',
    desc: {
      en: '⚠️ General tools — NOT all AI. 300+ useful tools in 8 categories: search, chat, writing, design, office, dev, social media, images. Convenient collection for easy access.',
      'zh-CN': '⚠️ 普通工具网站合集（非AI专属）。300+实用工具，8大分类：搜索、对话、写作、设计、办公、开发、社区、图片等。仅为方便整理，不限于AI。',
      'zh-TW': '⚠️ 普通工具網站合集（非AI專屬）。300+實用工具，12大分類：搜索、對話、寫作、設計、辦公、開發、社群、圖片等。僅為方便整理，不限於AI。', ja: '300以上の便利ツールを8カテゴリーに収録。', ko: '300개 이상 도구, 8개 카테고리.', es: '300+ herramientas en 8 categorías.',
    },
    color: '#3b82f6',
    status: 'done',
    subModules: [
      { key: 'overview', icon: '🧭', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽', ja: '概要', ko: '개요', es: 'Visión general' } },
      { key: 'search', icon: '🔍', title: { en: 'Search Engines', 'zh-CN': '搜索引擎', 'zh-TW': '搜索引擎', ja: '検索エンジン', ko: '검색 엔진', es: 'Buscadores' } },
      { key: 'chat', icon: '💬', title: { en: 'Chat & LLMs', 'zh-CN': '对话助手', 'zh-TW': '對話助手', ja: 'チャット・LLM', ko: '채팅 · LLM', es: 'Chat · LLM' } },
      { key: 'design', icon: '🎯', title: { en: 'Design & UI', 'zh-CN': '设计工具', 'zh-TW': '設計工具', ja: 'デザイン・UI', ko: '디자인 · UI', es: 'Diseño · UI' } },
      { key: '3d-game', icon: '🎮', title: { en: '3D & Gaming', 'zh-CN': '3D与游戏', 'zh-TW': '3D與遊戲', ja: '3D・ゲーム', ko: '3D · 게임', es: '3D · Juegos' } },
      { key: 'office', icon: '📋', title: { en: 'Office & Productivity', 'zh-CN': '办公提效', 'zh-TW': '辦公提效', ja: '業務効率化', ko: '사무 효율', es: 'Oficina' } },
      { key: 'dev-tools', icon: '🔧', title: { en: 'Dev Tools', 'zh-CN': '开发工具', 'zh-TW': '開發工具', ja: '開発ツール', ko: '개발 도구', es: 'Desarrollo' } },
      { key: 'social-media', icon: '📱', title: { en: 'Social & Community', 'zh-CN': '社区媒体', 'zh-TW': '社群媒體', ja: 'SNS・コミュニティ', ko: 'SNS · 커뮤니티', es: 'Redes sociales' } },
      { key: 'image-resources', icon: '🖼️', title: { en: 'Image Resources', 'zh-CN': '图片专区', 'zh-TW': '圖片專區', ja: '画像素材', ko: '이미지 자료', es: 'Imágenes' } },
    ],
  },
  {
    key: 'ai-industries',
    title: { en: 'AI in Industries', 'zh-CN': 'AI行业应用', 'zh-TW': 'AI行業應用', ja: 'AI業界応用', ko: 'AI 산업 응용', es: 'IA en industrias' },
    icon: '🏭',
    desc: {
      en: 'See how AI is transforming 16 major industries — logistics, healthcare, finance, education, manufacturing, agriculture, enterprise, retail, transportation, energy, media, cybersecurity, and more. Real cases, key metrics, and tool directories for each sector.',
      'zh-CN': '看AI如何变革16大行业——物流、医疗、金融、教育、制造、农业、企业、零售、交通、能源、媒体、安全等。每个行业都有真实案例、关键指标和精选工具。',
      'zh-TW': '看AI如何變革16大行業——物流、醫療、金融、教育、製造、農業、企業、零售、交通、能源、媒體、安全、法律、環保、政務等。每個行業都有真實案例、關鍵指標和精選工具。', ja: '16主要産業のAI活用事例を詳細分析。', ko: '16개 주요 산업 AI 활용 사례 분석.', es: 'IA en 16 industrias con casos reales.',
    },
    color: '#10b981',
    status: 'done',
    subModules: [
      { key: 'overview', icon: '🏭', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽' } },
      { key: 'logistics', icon: '📦', title: { en: 'Logistics', 'zh-CN': '智慧物流', 'zh-TW': '智慧物流', ja: 'スマート物流', ko: '스마트 물류', es: 'Logística' } },
      { key: 'healthcare', icon: '🏥', title: { en: 'Healthcare', 'zh-CN': '医疗健康', 'zh-TW': '醫療健康', ja: '医療健康', ko: '의료 건강', es: 'Salud' } },
      { key: 'finance', icon: '💰', title: { en: 'Finance', 'zh-CN': '金融科技', 'zh-TW': '金融科技', ja: '金融科技', ko: '금융 테크', es: 'Fintech' } },
      { key: 'education', icon: '📚', title: { en: 'Education', 'zh-CN': '教育科技', 'zh-TW': '教育科技', ja: '教育科技', ko: '교육 테크', es: 'Edtech' } },
      { key: 'manufacturing', icon: '🏗️', title: { en: 'Manufacturing', 'zh-CN': '智能制造', 'zh-TW': '智慧製造', ja: 'スマート製造', ko: '스마트 제조', es: 'Manufactura' } },
      { key: 'agriculture', icon: '🌾', title: { en: 'Agriculture', 'zh-CN': '智慧农业', 'zh-TW': '智慧農業', ja: 'スマート農業', ko: '스마트 농업', es: 'Agricultura' } },
      { key: 'enterprise', icon: '🏢', title: { en: 'Enterprise', 'zh-CN': '企业应用', 'zh-TW': '企業應用', ja: '企業応用', ko: '기업 응용', es: 'Empresas' } },
      { key: 'retail', icon: '🛒', title: { en: 'Retail & E-commerce', 'zh-CN': '零售电商', 'zh-TW': '零售電商', ja: '小売・EC', ko: '소매 · EC', es: 'E-commerce' } },
      { key: 'transport', icon: '🚗', title: { en: 'Transportation', 'zh-CN': '交通出行', 'zh-TW': '交通出行', ja: '交通出行', ko: '교통 출행', es: 'Transporte' } },
      { key: 'energy', icon: '⚡', title: { en: 'Energy', 'zh-CN': '能源电力', 'zh-TW': '能源電力', ja: 'エネルギー', ko: '에너지', es: 'Energía' } },
      { key: 'media', icon: '🎬', title: { en: 'Media & Entertainment', 'zh-CN': '媒体娱乐', 'zh-TW': '媒體娛樂', ja: 'メディア・娯楽', ko: '미디어 · 엔터', es: 'Medios' } },
      { key: 'security', icon: '🔒', title: { en: 'Cybersecurity', 'zh-CN': '网络安全', 'zh-TW': '網路安全', ja: 'サイバーセキュリティ', ko: '사이버 보안', es: 'Ciberseguridad' } },
      { key: 'law', icon: '⚖️', title: { en: 'Legal Tech', 'zh-CN': '法律科技', 'zh-TW': '法律科技', ja: '法律科技', ko: '법률 테크', es: 'Legal' } },
      { key: 'climate', icon: '🌍', title: { en: 'Climate & Environment', 'zh-CN': '环保气候', 'zh-TW': '環保氣候', ja: '環境・気候', ko: '환경 · 기후', es: 'Clima' } },
      { key: 'govtech', icon: '🏛️', title: { en: 'GovTech & Smart City', 'zh-CN': '政务智慧城市', 'zh-TW': '政務智慧城市', ja: '行政・スマートシティ', ko: '행정 · 스마트시티', es: 'Gobierno' } },
    ],
  },
  {
    key: 'aigc',
    title: { en: 'AIGC · Content Gen', 'zh-CN': 'AIGC · AI生成', 'zh-TW': 'AIGC · AI生成', ja: 'AIGC · AI生成', ko: 'AIGC · AI 생성', es: 'AIGC · Generación' },
    icon: '🤖',
    desc: {
      en: 'Hands-on tutorials for generating audio, video, novels, PPTs, web pages, apps, and software with AI. Step-by-step guides with code and direct tool links.',
      'zh-CN': 'AI生成音频、视频、小说、PPT、网页、App、软件的实操教程。每步都有代码和工具直达链接。',
      'zh-TW': 'AI生成音頻、視頻、小說、PPT、網頁、App、軟體的實操教學。每步都有程式碼和工具直達鏈接。', ja: '音声・動画・小説・PPT等をAI生成する実践的チュートリアル。', ko: '오디오, 비디오, 소설, PPT 등을 AI로 생성.', es: 'Tutoriales para generar contenido con IA.',
    },
    color: '#a855f7',
    status: 'done',
    subModules: [
      { key: 'overview', icon: '🤖', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽' } },
      { key: 'audio-gen', icon: '🎵', title: { en: 'Audio', 'zh-CN': '音频生成', 'zh-TW': '音頻生成', ja: '音声生成', ko: '오디오 생성', es: 'Audio' } },
      { key: 'video-gen', icon: '🎬', title: { en: 'Video', 'zh-CN': '视频生成', 'zh-TW': '影片生成', ja: '動画生成', ko: '비디오 생성', es: 'Video' } },
      { key: 'novel', icon: '📝', title: { en: 'Novel', 'zh-CN': '小说写作', 'zh-TW': '小說寫作', ja: '小説作成', ko: '소설 작성', es: 'Novela' } },
      { key: 'ppt-gen', icon: '📊', title: { en: 'PPT', 'zh-CN': 'PPT生成', 'zh-TW': 'PPT生成', ja: 'PPT生成', ko: 'PPT 생성', es: 'PPT' } },
      { key: 'web-gen', icon: '🌐', title: { en: 'Web Page', 'zh-CN': '网页生成', 'zh-TW': '網頁生成', ja: 'Webページ生成', ko: '웹페이지 생성', es: 'Web' } },
      { key: 'app-gen', icon: '📱', title: { en: 'Mobile App', 'zh-CN': 'App生成', 'zh-TW': 'App生成', ja: 'アプリ生成', ko: '앱 생성', es: 'App' } },
      { key: 'software-gen', icon: '💻', title: { en: 'Desktop Software', 'zh-CN': '桌面软件生成', 'zh-TW': '桌面軟體生成', ja: 'ソフトウェア生成', ko: '소프트웨어 생성', es: 'Software' } },
      { key: 'writing', icon: '✍️', title: { en: 'Writing Tools', 'zh-CN': 'AI写作工具', 'zh-TW': 'AI寫作工具', ja: 'AI執筆ツール', ko: 'AI 작성 도구', es: 'Escritura IA' } },
      { key: 'image-gen', icon: '🎨', title: { en: 'Image Tools', 'zh-CN': 'AI绘画工具', 'zh-TW': 'AI繪畫工具', ja: 'AI画像ツール', ko: 'AI 이미지 도구', es: 'Imagen IA' } },
      { key: 'video-gen-tool', icon: '🎬', title: { en: 'Video Tools', 'zh-CN': 'AI视频工具', 'zh-TW': 'AI影片工具', ja: 'AI動画ツール', ko: 'AI 비디오 도구', es: 'Video IA' } },
      { key: 'audio-gen-tool', icon: '🎵', title: { en: 'Audio Tools', 'zh-CN': 'AI音频工具', 'zh-TW': 'AI音頻工具', ja: 'AI音声ツール', ko: 'AI 오디오 도구', es: 'Audio IA' } },
    ],
  },
  {
    key: 'ai-dev',
    title: { en: 'AI Tools & Models', 'zh-CN': 'AI工具 · 大模型', 'zh-TW': 'AI工具 · 大模型', ja: 'AIツール · 大モデル', ko: 'AI 도구 · 대모델', es: 'IA · Modelos' },
    icon: '🛠️',
    desc: {
      en: 'AI coding tools, CLI setup guides, agent frameworks, workflow automation, and major LLM models.',
      'zh-CN': 'AI编程工具、命令行教程、智能体搭建、工作流自动化、国内外主流大模型一览。',
      'zh-TW': 'AI編程工具、命令列教學、智能體搭建、工作流自動化、國內外主流大模型一覽。', ja: 'AIコーディング・CLI・エージェント構築・ワークフロー自動化。', ko: 'AI 코딩, CLI, 에이전트, 워크플로우.', es: 'Herramientas de IA, agentes y automatización.',
    },
    color: '#6366f1',
    status: 'done',
    subModules: [
      { key: 'overview', icon: '🛠️', title: { en: 'Overview', 'zh-CN': '总览', 'zh-TW': '總覽' } },
      { key: 'gemini', icon: '🔷', title: { en: 'Gemini CLI', 'zh-CN': 'Gemini 教程', 'zh-TW': 'Gemini 教學', ja: 'Gemini チュートリアル', ko: 'Gemini 튜토리얼', es: 'Tutorial Gemini' } },
      { key: 'codex', icon: '🟢', title: { en: 'Codex CLI', 'zh-CN': 'Codex 教程', 'zh-TW': 'Codex 教學', ja: 'Codex チュートリアル', ko: 'Codex 튜토리얼', es: 'Tutorial Codex' } },
      { key: 'deepseek', icon: '🐋', title: { en: 'DeepSeek Guide', 'zh-CN': 'DeepSeek 教程', 'zh-TW': 'DeepSeek 教學', ja: 'DeepSeek ガイド', ko: 'DeepSeek 가이드', es: 'Guía DeepSeek' } },
      { key: 'claude-code', icon: '🟠', title: { en: 'Claude Code', 'zh-CN': 'Claude Code 教程', 'zh-TW': 'Claude Code 教學', ja: 'Claude Code', ko: 'Claude Code', es: 'Claude Code' } },
      { key: 'frameworks', icon: '🧰', title: { en: 'Agent Frameworks', 'zh-CN': '智能体框架', 'zh-TW': '智能體框架', ja: 'エージェントFW', ko: '에이전트 FW', es: 'Frameworks' } },
      { key: 'assistants', icon: '💬', title: { en: 'AI Assistants', 'zh-CN': '个人助手', 'zh-TW': '個人助手', ja: 'AIアシスタント', ko: 'AI 어시스턴트', es: 'Asistentes' } },
      { key: 'workflow', icon: '⚡', title: { en: 'Workflow', 'zh-CN': '工作流', 'zh-TW': '工作流', ja: 'ワークフロー', ko: '워크플로우', es: 'Workflow' } },
      { key: 'multi-agent', icon: '🕸️', title: { en: 'Multi-Agent', 'zh-CN': '多Agent协作', 'zh-TW': '多Agent協作', ja: 'マルチエージェント', ko: '멀티 에이전트', es: 'Multi-agente' } },
      { key: 'agent-tools', icon: '🤖', title: { en: 'Model Hub', 'zh-CN': '大模型 & API', 'zh-TW': '大模型 & API', ja: '大モデル & API', ko: '대모델 & API', es: 'Modelos & API' } },
      { key: 'api-relay', icon: '🔌', title: { en: 'API Relay', 'zh-CN': 'API中转', 'zh-TW': 'API中轉', ja: 'API中継', ko: 'API 중계', es: 'API Relay' } },
    ],
  },
]
