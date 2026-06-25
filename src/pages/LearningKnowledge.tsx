import { useT } from '../contexts/LanguageContext'
import styles from './Page.module.css'

export default function LearningKnowledge() {
  const { lang } = useT()
  const l = {
    title: lang === 'zh-CN' ? 'AI 知识库搭建' : lang === 'zh-TW' ? 'AI 知識庫搭建' : 'Knowledge Base Builder',
    sub: lang === 'zh-CN' ? '打造你的 AI 第二大脑' : lang === 'zh-TW' ? '打造你的 AI 第二腦' : 'Build your AI second brain',
  }

  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>🗂️ {l.title}</h2>
        <p className={styles.subtitle}>{l.sub}</p>
      </div>
      <div className={styles.cases}>
        <Card title={lang === 'zh-CN' ? '核心理念：什么是第二大脑？' : 'Core Idea: What is a Second Brain?'}>
          <p style={pS}>
            {lang === 'zh-CN'
              ? '第二大脑（Second Brain）是由 Tiago Forte 提出的个人知识管理方法论。核心理念：大脑用来思考，不是用来存储的。你的"第二大脑"是一个外部的、可搜索的、持续进化的知识系统。AI 时代，第二大脑不再是静态的笔记仓库——它可以通过 AI 自动整理、关联、检索甚至生成新的洞察。'
              : 'The Second Brain is a personal knowledge management methodology by Tiago Forte. Core idea: your brain is for thinking, not storing. Your "second brain" is an external, searchable, continuously evolving knowledge system. In the AI era, it\'s no longer a static note warehouse — AI can auto-organize, connect, retrieve, and even generate new insights.'}
          </p>
        </Card>
        <Card title={lang === 'zh-CN' ? '📐 CODE 方法论' : '📐 The CODE Method'}>
          <table style={tblS}>
            <thead><tr><th style={thS}>{lang === 'zh-CN' ? '步骤' : 'Step'}</th><th style={thS}>{lang === 'zh-CN' ? '含义' : 'Meaning'}</th><th style={thS}>{lang === 'zh-CN' ? 'AI 怎么做' : 'How AI helps'}</th></tr></thead>
            <tbody>
              <tr><td style={tdS}><strong>C</strong>apture</td><td style={tdS}>{lang === 'zh-CN' ? '收集：快速捕获有价值的信息' : 'Quickly capture valuable info'}</td><td style={tdS}>{lang === 'zh-CN' ? 'AI 自动提取网页/PDF 要点，语音转文字记录灵感' : 'AI auto-extracts web/PDF key points, voice-to-text for ideas'}</td></tr>
              <tr><td style={tdS}><strong>O</strong>rganize</td><td style={tdS}>{lang === 'zh-CN' ? '整理：把信息放进合适的文件夹/标签' : 'Put info into right folders/tags'}</td><td style={tdS}>{lang === 'zh-CN' ? 'AI 自动分类、打标签、生成摘要' : 'AI auto-classifies, tags, and generates summaries'}</td></tr>
              <tr><td style={tdS}><strong>D</strong>istill</td><td style={tdS}>{lang === 'zh-CN' ? '提炼：把长内容压缩为核心要点' : 'Compress long content into key points'}</td><td style={tdS}>{lang === 'zh-CN' ? 'AI 逐层提炼：文章→摘要→3要点→1句话' : 'AI progressive distillation: article→summary→3 points→1 sentence'}</td></tr>
              <tr><td style={tdS}><strong>E</strong>xpress</td><td style={tdS}>{lang === 'zh-CN' ? '表达：把知识输出为作品' : 'Output knowledge as creative work'}</td><td style={tdS}>{lang === 'zh-CN' ? 'AI 辅助写作、生成大纲、润色表达' : 'AI-assisted writing, outline generation, expression polishing'}</td></tr>
            </tbody>
          </table>
        </Card>
        <Card title={lang === 'zh-CN' ? '🛠 推荐工具栈' : '🛠 Recommended Tool Stack'}>
          <Code>{`# 方案 A: Obsidian (本地优先，免费，插件丰富)
# 核心插件:
- Dataview: 把笔记当成数据库查询
- Templater: 自动模板，新建笔记自动填充结构
- Smart Connections: AI 自动推荐相关笔记
- Text Generator: GPT 集成，选中文字一键 AI 处理
- Excalidraw: 手绘图表嵌入笔记

# 方案 B: Notion (云端，协作好，AI 原生)
# 核心功能:
- Notion AI: 内置 AI 写作、总结、翻译
- Database 视图: 表格/看板/日历/画廊多视图切换
- 关联数据库: 在不同页面之间建立关系
- 模板市场: 一键使用他人做好的知识库模板

# 方案 C: Logseq (开源，大纲式，双向链接)
# 特点:
- 所有内容都是大纲节点
- 自动双向链接图谱
- 本地 Markdown 存储，数据完全归你
- AI 插件正在快速发展

# 方案 D: 混合方案 (最灵活)
Obsidian (长文笔记 + 深度思考)
+ Notion (项目管理 + 协作)
+ Readwise (阅读高亮自动同步)
+ Claude/ChatGPT (AI 处理引擎)`}</Code>
        </Card>
        <Card title={lang === 'zh-CN' ? '💡 PARA 文件夹结构' : '💡 PARA Folder Structure'}>
          <p style={pS}>
            {lang === 'zh-CN'
              ? 'PARA 是第二大脑的标准文件夹结构，简单但极其有效：'
              : 'PARA is the standard folder structure for second brain — simple but extremely effective:'}
          </p>
          <Code>{`📁 P - Projects (项目)
  正在进行的、有明确 deadline 的事
  例: "2026年读书计划"、"学习 Rust 语言"

📁 A - Areas (领域)
  长期负责、没有结束日期的事
  例: "个人财务"、"健康"、"编程技能"、"读书笔记"

📁 R - Resources (资源)
  感兴趣但不紧急的主题
  例: "认知科学"、"咖啡知识"、"摄影技巧"

📁 Archives (归档)
  已完成或不再活跃的项目/领域
  例: "2025年读书计划"、"旧工作项目文档"`}</Code>
        </Card>
        <Card title={lang === 'zh-CN' ? '🤖 AI 自动化工作流' : '🤖 AI Automation Workflows'}>
          <Code>{`# 工作流 1: 自动日报 → 知识库
1. 每天结束时用语音记录3句话: 学到了什么/做了什么/明天计划
2. AI 转文字 → 提取关键概念 → 自动关联到相关笔记
3. 周末 AI 生成"本周知识回顾"

# 工作流 2: 网页摘抄 → 知识卡片
1. 浏览器插件一键摘抄选中文字
2. AI 自动: 生成标题 → 提取3个要点 → 打标签 → 保存到 Obsidian
3. 自动关联: "这篇和你的XX笔记可能相关，要链接吗？"

# 工作流 3: 知识回顾与检索
"搜索我的知识库中所有关于[主题]的笔记，按时间排序"
"我最近三个月在[领域]学到了什么？总结3个最大的收获"
"我的知识库中哪些概念被多次引用但还没有专门笔记？"

# 工作流 4: 从聊天记录提取知识
1. 把与 AI 的有价值对话导出为 Markdown
2. AI 自动提取: 关键问答对 → 结构化笔记 → 存入知识库
3. 定期回顾 AI 对话历史，发现反复出现的问题模式`}</Code>
        </Card>
        <Card title={lang === 'zh-CN' ? '🔑 关键原则' : '🔑 Key Principles'}>
          <p style={pS}>
            {lang === 'zh-CN'
              ? '1. 不要追求完美结构 — 先用起来再优化。2. 笔记的价值在于未来的你能否找到并使用—可检索比好看重要。3. 每记一条笔记问自己："未来的我会在什么场景下需要这条信息？"4. AI 是助手不是替代—你自己的思考过程才是知识内化的关键。5. 定期回顾和清理，知识库需要新陈代谢。'
              : '1. Don\'t chase perfect structure — start messy and optimize later. 2. A note\'s value is whether future-you can find and use it — searchability beats aesthetics. 3. For every note, ask: "In what scenario will future-me need this?" 4. AI is an assistant, not a replacement — your own thinking process is key to internalization. 5. Regularly review and prune — knowledge bases need metabolism.'}
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

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return <div style={{ background: 'var(--bg-card)', borderRadius: 12, padding: 22, boxShadow: 'var(--shadow)', marginBottom: 16 }}><h3 style={{ marginBottom: 12, color: 'var(--text)', fontSize: 16 }}>{title}</h3>{children}</div>
}
function Code({ children }: { children: string }) {
  return <pre style={{ background: '#0f172a', color: '#e2e8f0', borderRadius: 8, padding: 16, fontSize: 13, lineHeight: 1.6, overflowX: 'auto', whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: 0 }}><code>{children}</code></pre>
}
