import { useT } from '../contexts/LanguageContext'
import styles from './Page.module.css'

export default function LearningMindmap() {
  const { lang } = useT()
  const l = {
    title: lang === 'zh-CN' ? 'AI 思维导图' : lang === 'zh-TW' ? 'AI 思維導圖' : 'AI Mind Mapping',
    sub: lang === 'zh-CN' ? '把混乱的信息变成清晰的结构' : lang === 'zh-TW' ? '把混亂的資訊變成清晰的結構' : 'Turn chaos into clarity',
  }

  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>🧠 {l.title}</h2>
        <p className={styles.subtitle}>{l.sub}</p>
      </div>
      <div className={styles.cases}>
        <Card title={lang === 'zh-CN' ? '核心理念' : 'Core Idea'}>
          <p style={pS}>
            {lang === 'zh-CN'
              ? '思维导图是知识内化的最强工具之一。但手动画图费时费力。AI 可以：1）从任意文本自动提取层级结构生成导图；2）帮你发现知识点之间的隐藏联系；3）将散乱的笔记整理成树形结构；4）一键切换多种视图（大纲/导图/卡片）。你的任务是思考，AI 负责排版和可视化。'
              : 'Mind maps are one of the most powerful tools for knowledge internalization. But drawing them manually is time-consuming. AI can: 1) auto-extract hierarchical structure from any text and generate maps; 2) discover hidden connections between knowledge points; 3) organize scattered notes into tree structures; 4) switch between multiple views (outline/map/cards) with one click. Your job is thinking; AI handles layout and visualization.'}
          </p>
        </Card>
        <Card title={lang === 'zh-CN' ? '🛠 推荐工具' : '🛠 Recommended Tools'}>
          <table style={tblS}>
            <thead><tr><th style={thS}>Tool</th><th style={thS}>{lang === 'zh-CN' ? '特点' : 'Features'}</th></tr></thead>
            <tbody>
              <tr><td style={tdS}>XMind + AI</td><td style={tdS}>{lang === 'zh-CN' ? '输入主题 → AI 自动生成完整导图，支持多种布局' : 'Input topic → AI auto-generates full map, multiple layouts'}</td></tr>
              <tr><td style={tdS}>Miro AI</td><td style={tdS}>{lang === 'zh-CN' ? '白板 + AI，适合团队脑暴和复杂项目可视化' : 'Whiteboard + AI, great for team brainstorming & complex projects'}</td></tr>
              <tr><td style={tdS}>Mapify (ChatGPT 插件)</td><td style={tdS}>{lang === 'zh-CN' ? '粘贴文章/视频链接 → 一键生成导图，支持导出' : 'Paste article/video link → one-click mind map, exportable'}</td></tr>
              <tr><td style={tdS}>Obsidian + Excalidraw</td><td style={tdS}>{lang === 'zh-CN' ? '本地化方案，笔记 + 手绘导图 + AI 插件' : 'Local-first: notes + hand-drawn maps + AI plugins'}</td></tr>
              <tr><td style={tdS}>Heptabase</td><td style={tdS}>{lang === 'zh-CN' ? '卡片式知识管理，自动建立卡片关联图谱' : 'Card-based knowledge management, auto-connection graph'}</td></tr>
              <tr><td style={tdS}>Claude Artifacts</td><td style={tdS}>{lang === 'zh-CN' ? '对话中直接生成交互式导图/流程图' : 'Generate interactive diagrams directly in conversation'}</td></tr>
            </tbody>
          </table>
        </Card>
        <Card title={lang === 'zh-CN' ? '💡 实践工作流' : '💡 Practical Workflows'}>
          <h4 style={h4S}>{lang === 'zh-CN' ? '工作流 1：从一本书生成知识导图' : 'Workflow 1: Book → Knowledge Map'}</h4>
          <Code>{`# 步骤 1: 提取结构
把书的目录 + 每章小结发给 Claude:
"请把以下内容整理成思维导图结构，使用 Markdown 缩进格式:
- 一级：章的标题
- 二级：核心概念
- 三级：关键论据/例子"

# 步骤 2: 导入导图工具
把 Claude 输出的 Markdown 复制到 XMind / Miro →
自动识别层级 → 生成可视化导图

# 步骤 3: 补充思考
在导图上手动添加:
- 自己的疑问（标记为?）
- 与其他书的关联（标记为→）
- 行动计划（标记为!）`}</Code>
          <h4 style={h4S}>{lang === 'zh-CN' ? '工作流 2：视频/播客 → 导图笔记' : 'Workflow 2: Video/Podcast → Mind Map Notes'}</h4>
          <Code>{`# 1. 用 AI 转录工具获取文字稿
#    - YouTube: 下载字幕或用 whisper 转写
#    - 播客: 用 Otter.ai / 飞书妙记 转写

# 2. 发给 AI 提取结构
"把以下播客文字稿整理成思维导图:
中心主题: [播客标题]
分支1: 嘉宾背景和核心观点
分支2: 3个关键讨论点
分支3: 给我的启发和行动建议"

# 3. 导入导图工具 → 可视化 → 保存到知识库`}</Code>
          <h4 style={h4S}>{lang === 'zh-CN' ? '工作流 3：学习笔记 → 知识网络' : 'Workflow 3: Notes → Knowledge Network'}</h4>
          <Code>{`# Obsidian 工作流:
1. 在 Obsidian 中写 Markdown 笔记
2. 用 [[]] 建立笔记之间的链接
3. 打开图谱视图 → 查看知识网络
4. 找到孤立的笔记 → 思考它们可以连接到哪里
5. 用 AI 插件自动建议笔记之间的关联`}</Code>
        </Card>
        <Card title={lang === 'zh-CN' ? '🎯 AI 导图 Prompt 模板' : '🎯 Prompt Templates'}>
          <Code>{`# 从文本生成导图
"把以下内容整理成 Markdown 缩进格式的思维导图，最多3层，每层不超过8个字"

# 从多份材料综合
"以下3篇文章讨论的是同一个主题，请综合它们的观点，生成一个综合思维导图"

# 找知识盲区
"这是我的学习笔记的导图结构，请找出缺少的关键概念或应该有但没覆盖的分支"

# 生成复习卡片
"把这个思维导图转成 Anki 卡片格式: 正面=问题，背面=答案"`}</Code>
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
