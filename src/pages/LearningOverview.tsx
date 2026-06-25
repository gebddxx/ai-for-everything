import { useT } from '../contexts/LanguageContext'
import styles from './Page.module.css'

const tools = [
  { key: 'reading', icon: '📝', titleEn: 'AI Reading Assistant', titleZh: 'AI 辅助阅读', descEn: 'Summarize articles, explain complex concepts, translate papers, and chat with your books. Read deeper, faster.', descZh: '总结文章、解释复杂概念、翻译论文、与书籍对话。读得更深、更快。' },
  { key: 'mindmap', icon: '🧠', titleEn: 'AI Mind Mapping', titleZh: 'AI 思维导图', descEn: 'Auto-generate mind maps from any text. Visualize book structure, lecture notes, and research papers in seconds.', descZh: '从任意文本自动生成思维导图。数秒内可视化书籍结构、讲座笔记和研究论文。' },
  { key: 'knowledge', icon: '🗂️', titleEn: 'Knowledge Base Builder', titleZh: 'AI 知识库', descEn: 'Build your personal second brain. Auto-tag, link, and retrieve knowledge. Never forget what you\'ve learned.', descZh: '构建你的个人第二大脑。自动标签、关联、检索知识。不再遗忘所学内容。' },
  { key: 'growth', icon: '📈', titleEn: 'Personal Growth', titleZh: '个人成长', descEn: 'Track learning progress, set goals, get AI-curated reading lists, and build sustainable learning habits.', descZh: '追踪学习进度、设定目标、获取 AI 推荐书单、建立可持续的学习习惯。' },
]

export default function LearningOverview() {
  const { lang } = useT()
  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>📖 {lang === 'zh-CN' ? 'AI 学习助手 · 全景总览' : lang === 'zh-TW' ? 'AI 學習助手 · 全景總覽' : 'AI for Learning · Overview'}</h2>
        <p className={styles.subtitle}>{lang === 'zh-CN' ? '你的 AI 第二大脑，助力终身学习与个人成长' : lang === 'zh-TW' ? '你的 AI 第二腦，助力終身學習與個人成長' : 'Your AI Second Brain for Lifelong Learning & Personal Growth'}</p>
      </div>

      <div className={styles.summary}>
        {lang === 'zh-CN'
          ? '学习不是考试，是一辈子的事。AI 学习助手专注于个人阅读、思考和成长的每个环节——从读懂一本书、理清知识结构、搭建个人知识库，到追踪成长轨迹。这里不教你怎么应付考试，而是帮你成为一个更好的终身学习者。'
          : 'Learning isn\'t about exams — it\'s a lifelong journey. AI for Learning focuses on every aspect of personal reading, thinking, and growth — from understanding a book deeply, organizing knowledge visually, building a personal knowledge base, to tracking your growth. This isn\'t about passing tests; it\'s about becoming a better lifelong learner.'}
      </div>

      <div className={styles.domainGrid}>
        {tools.map((t) => (
          <div key={t.key} className={styles.domainCard} style={{ borderTop: '4px solid #14b8a6' }}>
            <div className={styles.domainHead}>
              <span className={styles.domainIcon}>{t.icon}</span>
            </div>
            <h3 className={styles.domainTitle}>{lang === 'zh-CN' ? t.titleZh : t.titleEn}</h3>
            <p className={styles.domainDesc}>{lang === 'zh-CN' ? t.descZh : t.descEn}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
