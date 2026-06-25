import { useT } from '../contexts/LanguageContext';import LinkNav,{type ToolLink}from'../components/LinkNav';import styles from'./Page.module.css'
const links:ToolLink[]=[
{n:'Gamma',u:'https://gamma.app/',d:{en:'Best AI presentation, one-click design, export PPTX',zh:'最好用的AI PPT,一键设计,在线展示,导出PPTX'},c:'ppt',i:'📊'},
{n:'Beautiful.ai',u:'https://www.beautiful.ai/',d:{en:'Smart templates, auto-layout, brand consistency',zh:'智能模板,自动排版,品牌风格统一'},c:'ppt',i:'💎'},
{n:'Tome',u:'https://tome.app/',d:{en:'Storytelling slides, interactive embeds',zh:'叙事型幻灯片,支持交互式嵌入'},c:'ppt',i:'📖'},
{n:'SlidesAI',u:'https://www.slidesai.io/',d:{en:'Google Slides plugin, text→slides',zh:'Google Slides插件,文字直接生成幻灯片'},c:'ppt',i:'📄'},
{n:'ChatPPT',u:'https://www.chatppt.com/',d:{en:'Chinese-native AI PPT, WeChat mini-program',zh:'中文原生AI PPT,微信小程序可用'},c:'ppt',i:'💬'},
{n:'NotebookLM',u:'https://notebooklm.google.com/',d:{en:'Deep doc analysis, audio overviews, FAQs',zh:'谷歌出品,深度文档分析,可生成播客式音频'},c:'docs',i:'📓'},
{n:'ChatPDF',u:'https://www.chatpdf.com/',d:{en:'Upload PDF→chat, extract tables & data',zh:'上传PDF即可对话,提取表格和数据'},c:'docs',i:'📑'},
{n:'ChatDOC',u:'https://chatdoc.com/',d:{en:'PDF Q&A, table extraction, formula recognition',zh:'PDF专业问答,表格提取,公式识别'},c:'docs',i:'📋'},
{n:'WPS AI',u:'https://www.wps.com/ai/',d:{en:'Chinese office suite, built-in AI writing',zh:'金山WPS内置AI,文档/表格/演示全支持'},c:'docs',i:'📎'},
{n:'Otter.ai',u:'https://otter.ai/',d:{en:'Real-time transcription, speaker ID, Slack sync',zh:'实时会议转写,说话人识别,Slack同步'},c:'meeting',i:'🦦'},
{n:'Fireflies.ai',u:'https://fireflies.ai/',d:{en:'Auto-join meetings, searchable transcripts',zh:'自动加入会议,可搜索的转录记录'},c:'meeting',i:'🪲'},
{n:'飞书妙记',u:'https://www.feishu.cn/',d:{en:'Best Chinese meeting AI, auto-chapter, To-Do',zh:'中文会议AI最佳,自动分段,待办提取'},c:'meeting',i:'🐦'},
{n:'通义听悟',u:'https://tongyi.aliyun.com/',d:{en:'Alibaba meeting AI, real-time translation',zh:'阿里出品,实时翻译,多人语音分离'},c:'meeting',i:'☁️'},
{n:'Fathom',u:'https://fathom.video/',d:{en:'Free AI notetaker, highlight moments',zh:'免费AI会议记录,高亮关键时刻'},c:'meeting',i:'🎥'},
{n:'Superhuman',u:'https://superhuman.com/',d:{en:'AI triage, instant reply, follow-up reminders',zh:'AI邮件分类,即时回复,跟进提醒'},c:'email',i:'⚡'},
{n:'Shortwave',u:'https://www.shortwave.com/',d:{en:'AI thread summaries, smart scheduling',zh:'AI长邮件线程总结,智能日程安排'},c:'email',i:'📡'},
{n:'Spark Mail',u:'https://sparkmailapp.com/',d:{en:'AI priority inbox, templates, team email',zh:'AI优先级收件箱,模板库,团队协作'},c:'email',i:'💌'},
{n:'Missive',u:'https://missiveapp.com/',d:{en:'Team email + chat, AI draft & summarize',zh:'团队邮件+聊天,AI起草和总结'},c:'email',i:'✉️'},
]
export default function OfficeOverview(){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>📋 {L('AI Office & Productivity','AI 办公提效','AI 辦公提效')}</h2><p className={styles.subtitle}>{L('18 tools — PPT, Docs, Meetings, Email','18款工具——PPT、文档、会议、邮件','18款工具——PPT、文檔、會議、郵件')}</p></div>
<LinkNav links={links} lang={lang as'en'|'zh-CN'|'zh-TW'} color="#f97316" catNames={{ppt:L('AI PPT','AI 演示文稿','AI 演示文稿'),docs:L('AI Documents','AI 文档处理','AI 文檔處理'),meeting:L('AI Meeting','AI 会议助手','AI 會議助手'),email:L('AI Email','AI 邮件沟通','AI 郵件溝通')}}/></div>)}
