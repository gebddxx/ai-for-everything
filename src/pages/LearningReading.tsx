import { useT } from '../contexts/LanguageContext'
import styles from './Page.module.css'

export default function LearningReading() {
  const { lang } = useT()
  const l = {
    title: lang === 'zh-CN' ? 'AI 辅助阅读' : lang === 'zh-TW' ? 'AI 輔助閱讀' : 'AI Reading Assistant',
    sub: lang === 'zh-CN' ? '读得更深、更快、更广' : lang === 'zh-TW' ? '讀得更深、更快、更廣' : 'Read deeper, faster, wider',
  }

  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>📝 {l.title}</h2>
        <p className={styles.subtitle}>{l.sub}</p>
      </div>

      <div className={styles.cases}>
        <Card title={lang === 'zh-CN' ? '核心理念' : 'Core Idea'}>
          <p style={pS}>
            {lang === 'zh-CN'
              ? 'AI 辅助阅读不是让 AI 替你读书，而是让 AI 帮你更好地理解、吸收和运用书中的知识。AI 是你的阅读伙伴——帮你总结要点、解释难点、翻译外文、关联已知知识、生成问题引导思考。你把精力留给深度思考，把机械劳动交给 AI。'
              : 'AI-assisted reading isn\'t about AI reading for you. It\'s about AI helping you understand, absorb, and apply knowledge better. AI is your reading companion — summarizing key points, explaining difficult concepts, translating foreign texts, connecting to what you already know, and generating questions to guide your thinking. You focus on deep thinking; AI handles the mechanical work.'}
          </p>
        </Card>

        <Card title={lang === 'zh-CN' ? '🛠 推荐工具' : '🛠 Recommended Tools'}>
          <table style={tblS}>
            <thead><tr><th style={thS}>Tool</th><th style={thS}>{lang === 'zh-CN' ? '用途' : 'Use Case'}</th><th style={thS}>{lang === 'zh-CN' ? '特点' : 'Features'}</th></tr></thead>
            <tbody>
              <tr><td style={tdS}>Claude / ChatGPT</td><td style={tdS}>{lang === 'zh-CN' ? '对话式阅读伴侣' : 'Conversational reading companion'}</td><td style={tdS}>{lang === 'zh-CN' ? '上传PDF/EPUB，逐章对话，提问讨论' : 'Upload PDF/EPUB, chat chapter by chapter, ask & discuss'}</td></tr>
              <tr><td style={tdS}>NotebookLM</td><td style={tdS}>{lang === 'zh-CN' ? '深度文档分析' : 'Deep document analysis'}</td><td style={tdS}>{lang === 'zh-CN' ? '上传多份文档，AI 自动生成摘要、FAQ、时间线' : 'Upload multiple docs, AI generates summaries, FAQs, timelines'}</td></tr>
              <tr><td style={tdS}>Readwise Reader</td><td style={tdS}>{lang === 'zh-CN' ? '高亮与回顾' : 'Highlight & review'}</td><td style={tdS}>{lang === 'zh-CN' ? '高亮自动同步，AI 摘要，间隔重复回顾' : 'Auto-sync highlights, AI summaries, spaced repetition review'}</td></tr>
              <tr><td style={tdS}>沉浸式翻译</td><td style={tdS}>{lang === 'zh-CN' ? '双语阅读' : 'Bilingual reading'}</td><td style={tdS}>{lang === 'zh-CN' ? '网页/PDF 双语对照，AI 翻译，生词标注' : 'Web/PDF side-by-side bilingual, AI translation, vocabulary markup'}</td></tr>
              <tr><td style={tdS}>Zotero + AI 插件</td><td style={tdS}>{lang === 'zh-CN' ? '学术阅读管理' : 'Academic reading management'}</td><td style={tdS}>{lang === 'zh-CN' ? '文献管理 + AI 摘要 + 引用图谱' : 'Reference management + AI summary + citation graph'}</td></tr>
              <tr><td style={tdS}>Speechify</td><td style={tdS}>{lang === 'zh-CN' ? 'AI 语音朗读' : 'AI text-to-speech'}</td><td style={tdS}>{lang === 'zh-CN' ? '自然语音朗读任意文本，边听边读' : 'Natural voice reads any text, listen while you read'}</td></tr>
            </tbody>
          </table>
        </Card>

        <Card title={lang === 'zh-CN' ? '💡 实践工作流' : '💡 Practical Workflows'}>
          <h4 style={h4S}>{lang === 'zh-CN' ? '工作流 1：深度阅读一本书' : 'Workflow 1: Deep read a book'}</h4>
          <Code>{`# 1. 读前准备
上传书籍 PDF 到 Claude → "请给我这本书的5个核心论点，以及作者的主要论证框架"

# 2. 逐章精读
每读完一章 → "总结本章3个要点，并解释XX概念为什么重要"
遇到不懂的概念 → "用通俗的例子解释XX，并关联到我已经知道的YY"

# 3. 批判思考
"作者的这个论点有什么局限性？反方观点是什么？"
"这个理论在2026年的今天还适用吗？最新研究怎么说？"

# 4. 输出内化
读完 → "基于这本书，帮我列一个行动计划"
"用费曼技巧向一个12岁小孩解释这本书的核心思想"`}</Code>

          <h4 style={h4S}>{lang === 'zh-CN' ? '工作流 2：快速扫读论文/报告' : 'Workflow 2: Quick scan papers/reports'}</h4>
          <Code>{`# NotebookLM 工作流:
1. 上传论文 PDF（可同时上传多篇）
2. 让 AI 生成: "Audio Overview"（播客式摘要，通勤时听）
3. 查看自动生成的: 摘要、FAQ、关键术语表
4. 追问: "Methodology 部分的关键假设是什么？"
5. 导出笔记到 Notion/Obsidian`}</Code>

          <h4 style={h4S}>{lang === 'zh-CN' ? '工作流 3：跨语言阅读' : 'Workflow 3: Cross-language reading'}</h4>
          <Code>{`# 沉浸式翻译 + AI 工作流:
1. 安装"沉浸式翻译"浏览器插件
2. 打开任意英文文章 → 自动双语对照显示
3. 遇到关键段落 → 选中 → "用中文解释这段话的深层含义"
4. 把翻译后的笔记保存到知识库
5. 定期用 AI 对比中英文表达差异，提升语言能力`}</Code>
        </Card>

        <Card title={lang === 'zh-CN' ? '🎯 常用 AI 阅读 Prompt 模板' : '🎯 Prompt Templates'}>
          <Code>{`# 总结类
"用3句话总结这篇文章的核心观点，每句话不超过30个字"
"把这篇论文的 Abstract 改写成一个普通人看得懂的版本"

# 解释类
"用费曼技巧解释这个概念的底层逻辑，并举3个生活例子"
"这个理论和[你已经知道的某概念]有什么联系和区别？"

# 批判类
"这篇文章的论证有什么逻辑漏洞？数据和结论之间是否存在跳跃？"
"如果你是反方，你会怎么反驳作者的论点？"

# 输出类
"基于这篇文章的观点，我可以在工作中怎么应用？写3个具体行动"
"用思维导图的结构重新组织这段内容的要点"`}</Code>
        </Card>

        <Card title={lang === 'zh-CN' ? '📊 阅读追踪建议' : '📊 Reading Tracking'}>
          <p style={pS}>
            {lang === 'zh-CN'
              ? '建立阅读习惯的关键是可量化。建议用 Notion 或 Obsidian 建立阅读日志，记录：书名/文章名、阅读日期、AI 对话摘要、关键收获（3点）、行动计划。每月用 AI 分析阅读日志，找出知识盲区和兴趣变化趋势。'
              : 'The key to building a reading habit is measurability. Use Notion or Obsidian to keep a reading journal: book/article name, date, AI conversation summary, 3 key takeaways, action plan. Monthly, use AI to analyze your journal and identify knowledge gaps and interest trends.'}
          </p>
        </Card>
      </div>
    </div>
  )
}

const pS: React.CSSProperties = { color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: 14 }
const tblS: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', fontSize: 13 }
const thS: React.CSSProperties = { padding: '8px 12px', textAlign: 'left', borderBottom: '2px solid var(--border)', color: 'var(--text)', fontWeight: 600 }
const tdS: React.CSSProperties = { padding: '8px 12px', borderBottom: '1px solid var(--border)', color: 'var(--text-secondary)' }
const h4S: React.CSSProperties = { marginTop: 20, marginBottom: 8, color: 'var(--text)', fontSize: 14 }

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return <div style={{ background: 'var(--bg-card)', borderRadius: 12, padding: 22, boxShadow: 'var(--shadow)', marginBottom: 16 }}><h3 style={{ marginBottom: 12, color: 'var(--text)', fontSize: 16 }}>{title}</h3>{children}</div>
}

function Code({ children }: { children: string }) {
  return <pre style={{ background: '#0f172a', color: '#e2e8f0', borderRadius: 8, padding: 16, fontSize: 13, lineHeight: 1.6, overflowX: 'auto', whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: 0 }}><code>{children}</code></pre>
}
