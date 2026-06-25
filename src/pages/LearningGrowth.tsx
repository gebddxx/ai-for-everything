import { useT } from '../contexts/LanguageContext'
import styles from './Page.module.css'

export default function LearningGrowth() {
  const { lang } = useT()
  const l = {
    title: lang === 'zh-CN' ? 'AI 助力个人成长' : lang === 'zh-TW' ? 'AI 助力個人成長' : 'AI for Personal Growth',
    sub: lang === 'zh-CN' ? '追踪成长、设定目标、养成习惯' : lang === 'zh-TW' ? '追蹤成長、設定目標、養成習慣' : 'Track growth, set goals, build habits',
  }

  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>📈 {l.title}</h2>
        <p className={styles.subtitle}>{l.sub}</p>
      </div>
      <div className={styles.cases}>
        <Card title={lang === 'zh-CN' ? '核心理念' : 'Core Idea'}>
          <p style={pS}>
            {lang === 'zh-CN'
              ? '个人成长不是一时冲动，而是系统性的持续改进。AI 可以帮助你：量化追踪成长轨迹、智能推荐学习路径、发现能力盲区、生成个性化复盘报告。把 AI 当作你的成长教练——它不会评判你，但会诚实反馈你的进步和不足。'
              : 'Personal growth isn\'t about bursts of motivation — it\'s systematic, continuous improvement. AI can help: quantify your growth trajectory, intelligently recommend learning paths, identify skill blind spots, and generate personalized review reports. Treat AI as your growth coach — it won\'t judge you, but it will give honest feedback on your progress and gaps.'}
          </p>
        </Card>

        <Card title={lang === 'zh-CN' ? '📊 成长追踪框架' : '📊 Growth Tracking Framework'}>
          <Code>{`# 每周复盘模板 (AI 辅助)
## 本周关键成果 (3个)
- [ ]
- [ ]
- [ ]

## 学习投入
- 阅读: ___ 小时 ( ___ 本书 / ___ 篇文章)
- 课程: ___ 小时
- 实践项目: ___ 小时

## 反思 (发给 AI 帮你深度分析)
1. 本周最大的收获是什么？为什么？
2. 遇到的最大挑战是什么？怎么解决的？
3. 有什么事情花了时间但收获不大？
4. 下周最该停止做什么？开始做什么？继续做什么？

## AI 分析
把以上内容发给 AI → "帮我分析本周的学习模式，
找出时间利用的优化空间，并建议下周的3个改进重点"`}</Code>
        </Card>

        <Card title={lang === 'zh-CN' ? '🎯 AI 目标设定与拆解' : '🎯 AI Goal Setting & Decomposition'}>
          <Code>{`# 用 AI 做 OKR 拆解:
我: "我今年的目标是成为全栈开发者，请帮我拆解成季度 OKR"

AI 输出示例:
Q1: 前端基础
  - O: 能独立完成中等复杂度的 React 项目
  - KR1: 完成 React 官方教程 + 3个练习项目
  - KR2: 阅读 "React Design Patterns" 并输出笔记
  - KR3: 贡献1个开源项目 PR

Q2: 后端入门
  - O: 掌握 Express/Node.js 后端开发基础
  - KR1: 完成 Full Stack Open 课程 Part 1-7
  - KR2: 搭建个人博客的后端 API
  ...

# 月度检查 (每月1号):
把本月学习记录发给 AI →
"对比我的季度 OKR，本月的进展如何？哪些目标滞后了？
接下来30天应该优先做什么？"`}</Code>
        </Card>

        <Card title={lang === 'zh-CN' ? '📚 AI 推荐书单' : '📚 AI-Curated Reading Lists'}>
          <p style={pS}>
            {lang === 'zh-CN'
              ? '与其盲目跟风"必读书单"，不如让 AI 根据你的知识背景和当前目标生成个性化书单：'
              : 'Instead of blindly following "must-read" lists, let AI generate personalized reading plans based on your knowledge background and current goals:'}
          </p>
          <Code>{`# Prompt 模板:
"我目前的背景: [你的知识水平]
我想深入的方向: [具体领域]
我读过且喜欢的: [3-5本/文章]
我读过但觉得一般的: [2-3本]

请推荐5本书，按"入门→进阶→深入"排序，
每本书说明: 为什么适合现在的我 / 需要什么前置知识"

# AI 还可以帮你:
- "这3本书的阅读顺序是什么？哪些章节可以跳过？"
- "读完XX之后，我应该读哪本作为延伸？"
- "有哪些TED演讲/播客可以补充这个话题？"`}</Code>
        </Card>

        <Card title={lang === 'zh-CN' ? '🔄 习惯养成系统' : '🔄 Habit Building System'}>
          <Code>{`# AI 辅助习惯追踪:

# 1. 习惯设计 (跟 AI 讨论)
"我想养成每天阅读30分钟的习惯，帮我分析:
- 什么时间最可能坚持？
- 有什么潜在的障碍？
- 怎么设计环境让习惯更容易发生？
- 如果中断了怎么恢复？"

# 2. 每日打卡 (简化版)
用 Notion / Obsidian 创建每日打卡表:
| 习惯 | 一 | 二 | 三 | 四 | 五 | 六 | 日 |
| 阅读30min | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ |
| 运动20min | ✅ | ❌ | ✅ | ✅ | ❌ | ✅ | ✅ |

# 3. 月度 AI 分析
把打卡数据发给 AI →
"分析我这个月的习惯数据:
- 哪个习惯坚持最好？为什么？
- 哪个最差？瓶颈在哪里？
- 下个月应该怎么调整？"`}</Code>
        </Card>

        <Card title={lang === 'zh-CN' ? '🧭 年度成长复盘' : '🧭 Annual Growth Review'}>
          <p style={pS}>
            {lang === 'zh-CN'
              ? '每年末尾，花2-3小时和 AI 做一次深度年度复盘。把这一年的日记、笔记、项目记录发给 AI，让它帮你发现你都没意识到的成长轨迹。'
              : 'At the end of each year, spend 2-3 hours doing a deep annual review with AI. Share your journals, notes, and project records — let AI discover growth patterns you didn\'t even notice.'}
          </p>
          <Code>{`# 年度复盘 AI Prompt:
"以下是2026年我的:
- 每月复盘总结
- 读完的书和学习笔记
- 完成的项目
- 重要的决策和转折点

请帮我:
1. 用3个关键词总结我的2026年
2. 列出我的5个最大成长和最需要改进的领域
3. 我的时间主要花在了哪里？这个分配合理吗？
4. 基于这一年的轨迹，2027年最应该聚焦的3个方向是什么？
5. 有什么我可能没意识到的模式和趋势？"`}</Code>
        </Card>

        <Card title={lang === 'zh-CN' ? '🛠 推荐工具' : '🛠 Tools'}>
          <table style={tblS}>
            <thead><tr><th style={thS}>Tool</th><th style={thS}>{lang === 'zh-CN' ? '用途' : 'Use Case'}</th></tr></thead>
            <tbody>
              <tr><td style={tdS}>Notion</td><td style={tdS}>{lang === 'zh-CN' ? '目标追踪、习惯打卡、周/月复盘模板' : 'Goal tracking, habit check-in, weekly/monthly review templates'}</td></tr>
              <tr><td style={tdS}>Streaks / Habitica</td><td style={tdS}>{lang === 'zh-CN' ? '游戏化习惯养成，可视化连续打卡天数' : 'Gamified habit building, visualize streak days'}</td></tr>
              <tr><td style={tdS}>Readwise</td><td style={tdS}>{lang === 'zh-CN' ? '自动同步阅读高亮，每日回顾推送' : 'Auto-sync reading highlights, daily review push'}</td></tr>
              <tr><td style={tdS}>Claude / ChatGPT</td><td style={tdS}>{lang === 'zh-CN' ? '复盘分析、目标拆解、书单推荐、成长教练对话' : 'Review analysis, goal decomposition, reading recs, coaching conversations'}</td></tr>
              <tr><td style={tdS}>Oura / Apple Watch</td><td style={tdS}>{lang === 'zh-CN' ? '身体数据追踪：睡眠、运动、心率，量化健康' : 'Body data: sleep, exercise, heart rate — quantify your health'}</td></tr>
            </tbody>
          </table>
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
