import { useT } from '../contexts/LanguageContext'
import styles from './Page.module.css'

export default function NovelWritingTutorial() {
  const { lang } = useT()
  const l = {
    pageTitle: lang === 'zh-CN' ? 'AI 小说写作教程' : lang === 'zh-TW' ? 'AI 小說寫作教學' : 'AI Novel Writing — Complete Guide',
    pageSub: lang === 'zh-CN' ? '从灵感到完稿 · AI辅助长文创作全流程' : lang === 'zh-TW' ? '從靈感到完稿 · AI輔助長文創作全流程' : 'From Idea to Manuscript · Full AI-Assisted Writing Pipeline',
    whatIs: lang === 'zh-CN' ? 'AI辅助写作概览' : lang === 'zh-TW' ? 'AI輔助寫作概覽' : 'Overview',
    whatIsBody: lang === 'zh-CN' ? 'Claude的200K上下文可一次性处理整本小说，ChatGPT擅长头脑风暴和对话生成，DeepSeek以极低成本支持百万token。本教程手把手教你用AI完成：世界观构建、人物设定、情节大纲、逐章写作、润色校对、投稿排版全流程。' : lang === 'zh-TW' ? 'Claude的200K上下文可一次性處理整本小說，ChatGPT擅長頭腦風暴和對話生成，DeepSeek以極低成本支持百萬token。本教學手把手教你用AI完成：世界觀構建、人物設定、情節大綱、逐章寫作、潤色校對、投稿排版全流程。' : 'Claude\'s 200K context handles entire novels at once, ChatGPT excels at brainstorming and dialogue, and DeepSeek supports a million tokens at low cost. This guide walks you through worldbuilding, character development, plotting, chapter-by-chapter writing, editing, and formatting.',
    tools: lang === 'zh-CN' ? '推荐AI写作工具' : lang === 'zh-TW' ? '推薦AI寫作工具' : 'Recommended Writing Tools',
    step1: lang === 'zh-CN' ? '第1步：世界观与人物设定' : lang === 'zh-TW' ? '第1步：世界觀與人物設定' : 'Step 1: Worldbuilding & Characters',
    step2: lang === 'zh-CN' ? '第2步：大纲与章节规划' : lang === 'zh-TW' ? '第2步：大綱與章節規劃' : 'Step 2: Outline & Chapter Planning',
    step3: lang === 'zh-CN' ? '第3步：逐章写作' : lang === 'zh-TW' ? '第3步：逐章寫作' : 'Step 3: Chapter Writing',
    step4: lang === 'zh-CN' ? '第4步：润色与校对' : lang === 'zh-TW' ? '第4步：潤色與校對' : 'Step 4: Editing & Proofreading',
    step5: lang === 'zh-CN' ? '第5步：排版与发布' : lang === 'zh-TW' ? '第5步：排版與發佈' : 'Step 5: Formatting & Publishing',
    tips: lang === 'zh-CN' ? '进阶技巧' : lang === 'zh-TW' ? '進階技巧' : 'Pro Tips',
    links: lang === 'zh-CN' ? '资源链接' : lang === 'zh-TW' ? '資源連結' : 'Resources',
  }
  const pStyle: React.CSSProperties = { color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: 14 }
  const ulStyle: React.CSSProperties = { paddingLeft: 20, color: 'var(--text-secondary)', lineHeight: 2.2 }

  return (
    <div className={styles.page}>
      <div className={styles.head}><h2 className={styles.title}>📝 {l.pageTitle}</h2><p className={styles.subtitle}>{l.pageSub}</p></div>
      <div className={styles.cases}>
        <Card title={l.whatIs}><p style={pStyle}>{l.whatIsBody}</p></Card>
        <Card title={l.tools}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead><tr style={{ borderBottom: '2px solid var(--border)' }}><th style={{ padding: 8, textAlign: 'left' }}>Tool</th><th style={{ padding: 8, textAlign: 'left' }}>Best For</th><th style={{ padding: 8, textAlign: 'left' }}>Context</th></tr></thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>Claude</td><td style={{ padding: 8 }}>Deep writing, nuanced editing</td><td style={{ padding: 8 }}>200K tokens</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>ChatGPT</td><td style={{ padding: 8 }}>Brainstorming, dialogue gen</td><td style={{ padding: 8 }}>128K tokens</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>DeepSeek</td><td style={{ padding: 8 }}>Ultra-long context, low cost</td><td style={{ padding: 8 }}>1M tokens</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>Kimi</td><td style={{ padding: 8 }}>Chinese long text champion</td><td style={{ padding: 8 }}>2M Chinese chars</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: 8 }}>Notion AI</td><td style={{ padding: 8 }}>Organized writing workspace</td><td style={{ padding: 8 }}>-</td></tr>
              <tr><td style={{ padding: 8 }}>Grammarly</td><td style={{ padding: 8 }}>Grammar, tone, clarity</td><td style={{ padding: 8 }}>-</td></tr>
            </tbody>
          </table>
        </Card>
        <Card title={l.tools}><p style={pStyle}>👇 点击下方链接直接打开AI写作工具</p><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:8}}><a href="https://claude.ai/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>🟠 Claude — 200K上下文深度写作</a><a href="https://chat.openai.com/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>⚫ ChatGPT — 头脑风暴+对话生成</a><a href="https://chat.deepseek.com/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>🐋 DeepSeek — 百万token，低成本长文</a><a href="https://kimi.moonshot.cn/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>🌙 Kimi — 200万字中文长文本</a><a href="https://xiezuocat.com/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>🐱 秘塔写作猫 — 中文纠错润色</a><a href="https://caiyunai.com/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>🌈 彩云小梦 — AI续写小说剧本</a><a href="https://www.grammarly.com/" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>✅ Grammarly — 语法校对+语调优化</a><a href="https://www.deepl.com/write" target="_blank" rel="noopener" style={{padding:'10px 14px',background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:8,textDecoration:'none',color:'var(--text)',fontSize:14,fontWeight:600,display:'flex',alignItems:'center',gap:8}}>🌍 DeepL Write — 多语种润色</a></div></Card>
<Card title={l.step1}><Code>{CODE.step1}</Code></Card>
        <Card title={l.step2}><Code>{CODE.step2}</Code></Card>
        <Card title={l.step3}><Code>{CODE.step3}</Code></Card>
        <Card title={l.step4}><Code>{CODE.step4}</Code></Card>
        <Card title={l.step5}><Code>{CODE.step5}</Code></Card>
        <Card title={l.tips}><p style={pStyle}>{lang === 'zh-CN' ? '1. 用Claude Projects功能管理长篇——将所有章节、人物卡、设定文档放在一个Project里，AI永远不会忘记 2. 网文小说需要日更3000-6000字，用Claude生成粗稿+人工修改，效率提升3-5倍 3. 设定卡模板：姓名/年龄/外貌/性格/MBTI/动机/背景故事/口头禅/与他人的关系 4. 对话生成技巧：给每个角色独特的"声音"——不同的词汇量、句式长度、口头禅 5. 用Grammarly/DeepL Write做最后的语言润色' : '1. Use Claude Projects — keep all chapters, character sheets, world docs in one Project for continuous context 2. Web novel daily updates (3000-6000 words): Claude draft → human polish, 3-5x faster 3. Character sheet template: name/age/appearance/personality/MBTI/motivation/backstory/catchphrase/relationships 4. Dialogue: give each character a unique "voice" — different vocabulary, sentence length, mannerisms 5. Final polish with Grammarly or DeepL Write'}</p></Card>
        <Card title={l.links}><ul style={ulStyle}><li><a href="https://claude.ai/" target="_blank" rel="noopener">Claude — 200K deep writing</a></li><li><a href="https://chat.openai.com/" target="_blank" rel="noopener">ChatGPT — versatile writing</a></li><li><a href="https://chat.deepseek.com/" target="_blank" rel="noopener">DeepSeek — 1M token context</a></li><li><a href="https://kimi.moonshot.cn/" target="_blank" rel="noopener">Kimi — Chinese long text</a></li><li><a href="https://www.grammarly.com/" target="_blank" rel="noopener">Grammarly — proofreading</a></li></ul></Card>
      </div>
    </div>
  )
}

const CODE = {
  step1: `# Worldbuilding & Character Creation
# Use this prompt with Claude/ChatGPT:

"""
You are a professional fantasy/sci-fi author. Help me build:

1. World Setting (300 words):
   - Time period / era
   - Geography and key locations
   - Magic/technology system rules
   - Social structure and politics
   - Major conflicts

2. Main Characters (5 characters):
   For each:
   - Name, age, appearance
   - Personality (MBTI if applicable)
   - Core motivation and internal conflict
   - Backstory (2-3 key events that shaped them)
   - Catchphrase or speech pattern
   - Relationships with other characters

3. Tone & Style:
   - Genre: [fantasy/sci-fi/romance/mystery/literary]
   - Target audience: [YA/adult/middle grade]
   - Writing style: [descriptive/dialogue-heavy/minimalist]
   - Comparative titles: [2-3 similar books]

My genre is: [YOUR GENRE]
My core idea is: [YOUR ONE-LINE PREMISE]
"""`,

  step2: `# Outline & Chapter Planning
# Use this prompt:

"""
Based on the world and characters I've created, develop a
detailed novel outline:

1. Three-Act Structure:
   - Act 1 (Setup): Inciting incident, call to adventure
   - Act 2 (Confrontation): Rising stakes, midpoint twist
   - Act 3 (Resolution): Climax, resolution

2. Chapter Breakdown (30 chapters):
   For each chapter provide:
   - Chapter number and title
   - POV character
   - Scene goal (what the character wants)
   - Conflict (what stands in their way)
   - Outcome (how it ends — hook for next chapter)
   - Estimated word count: 2000-3000 words

3. Pacing Map:
   Mark each chapter as:
   🌊 Slow (character development, worldbuilding)
   ⚡ Medium (plot advancement)
   🔥 Fast (action, reveals, cliffhangers)

Make the outline feel like a page-turner.
"""`,

  step3: `# Chapter Writing — The Core Loop
# For EACH chapter, use this workflow:

# 1. Pre-write (5 min):
#    Feed the chapter outline to Claude:
#    "Write Chapter [N]: [Title]. POV: [Character].
#     Goal: [Scene goal]. Conflict: [obstacle].
#     Ending hook: [cliffhanger or reveal]."
#
# 2. Generate Draft (Claude/ChatGPT):
#    "Write 2000-2500 words. Show, don't tell.
#     Use sensory details (smell, sound, touch).
#     Vary sentence rhythm — mix short punchy lines
#     with flowing descriptive passages."
#
# 3. Dialogue pass:
#    "Review all dialogue in this chapter. Does each
#     character sound distinct? Remove any dialogue
#     that sounds like it could be said by anyone."
#
# 4. Continuity check (every 10 chapters):
#    Upload all previous chapters → Claude scans for:
#    - Timeline inconsistencies
#    - Character appearance/name drift
#    - Forgotten plot threads
#    - Continuity errors

# Web Novel Daily Update Workflow:
# Claude generates 3000 words (15 min) →
# Human edits for voice/style (30 min) →
# Grammarly spell check (5 min) →
# Post to platform`,

  step4: `# Editing & Proofreading Pipeline

# Pass 1 — Structural Edit (Claude, full manuscript):
# "Review this manuscript and identify:
#  - Chapters that drag (too slow)
#  - Plot holes or inconsistencies
#  - Characters who disappear without resolution
#  - Scenes that could be cut without losing anything"

# Pass 2 — Line Edit (Chapter by chapter):
# "Edit this chapter for:
#  - Overused words (flag words used 5+ times)
#  - Filter words (remove: saw, heard, felt, realized, noticed)
#  - Adverb abuse (replace weak verb+adverb with strong verb)
#  - Show vs Tell violations (mark with ~~ where telling)
#  - Sentence variety score (1-10)"

# Pass 3 — Copy Edit:
# - Grammarly Premium: grammar, tone, clarity, plagiarism
# - DeepL Write: style and phrasing polish (multilingual)
# - ProWritingAid: 25+ reports (pacing, dialogue, readability)

# Pass 4 — Beta Reader AI:
# "Read this chapter as a critical beta reader. Rate:
#  - Hook strength (1-10)
#  - Character likability (1-10)
#  - Pacing (1-10)
#  - Would you turn the page? (Yes/No + why)"`,

  step5: `# Formatting & Publishing

# Ebook Formatting:
# 1. Write in Markdown → use Pandoc to convert:
#    pandoc novel.md -o novel.epub --toc
#    pandoc novel.md -o novel.pdf --pdf-engine=xelatex
#
# 2. Use Reedsy (reedsy.com) — free online book editor
#    with professional formatting templates
#
# 3. Amazon KDP: export as .docx → upload to KDP
#    Use Kindle Create for enhanced formatting

# Web Novel Platforms (Chinese):
# - 起点中文网 (qidian.com) — Tencent, largest
# - 番茄小说 (fanqienovel.com) — ByteDance, free model
# - 晋江文学城 (jjwxc.net) — romance focused
# - 七猫 (qimao.com) — free reading app

# Web Novel Platforms (English):
# - Royal Road (royalroad.com)
# - Wattpad (wattpad.com)
# - Webnovel (webnovel.com)

# AI policy: Most platforms now allow AI-assisted writing
# but require disclosure. Check each platform's TOS.`,
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return <div style={{ background: 'var(--bg-card)', borderRadius: 12, padding: 22, boxShadow: 'var(--shadow)', marginBottom: 16 }}><h3 style={{ marginBottom: 12, color: 'var(--text)', fontSize: 16 }}>{title}</h3>{children}</div>
}

function Code({ children }: { children: string }) {
  return <pre style={{ background: '#0f172a', color: '#e2e8f0', borderRadius: 8, padding: 16, fontSize: 13, lineHeight: 1.6, overflowX: 'auto', whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: 0 }}><code>{children}</code></pre>
}
