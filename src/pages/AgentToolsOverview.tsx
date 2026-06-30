import { useT } from '../contexts/LanguageContext'
import styles from './Page.module.css'

const thStyle: React.CSSProperties = { padding: '10px 14px', textAlign: 'left', fontSize: 13, fontWeight: 700, borderBottom: '2px solid var(--border)', color: 'var(--text)', background: 'var(--bg-card)' }
const tdStyle: React.CSSProperties = { padding: '9px 14px', fontSize: 13, borderBottom: '1px solid var(--border)', color: 'var(--text-secondary)' }
const nameStyle: React.CSSProperties = { ...tdStyle, fontWeight: 600, color: 'var(--primary)', whiteSpace: 'nowrap' }

const tables = [
  { title:{en:'LLMs — International','zh-CN':'🔷 海外大模型','zh-TW':'🔷 海外大模型'}, color:'#3b82f6',
    rows:[
      ['GPT-4.1 / ChatGPT','OpenAI','多模态 · 综合第一','https://chat.openai.com/'],
      ['Claude 4','Anthropic','200K上下文 · 深度推理 · 低幻觉','https://claude.ai/'],
      ['Gemini 2.5 Pro','Google','100万上下文 · 原生多模态','https://gemini.google.com/'],
      ['Grok 3','xAI (Musk)','实时X平台数据 · 幽默风格','https://x.com/i/grok'],
      ['Llama 4','Meta','开源 · 100+语言 · 社区最大','https://www.llama.com/'],
      ['Mistral Large','Mistral AI','MoE架构 · 1100 tok/s · 开源可商用','https://mistral.ai/'],
    ]},
  { title:{en:'LLMs — Chinese','zh-CN':'🔶 国产大模型','zh-TW':'🔶 國產大模型'}, color:'#f59e0b',
    rows:[
      ['DeepSeek V3/R1','深度求索','1M上下文 · DeepThink推理 · 极致性价比','https://chat.deepseek.com/'],
      ['通义千问 Qwen3','阿里','256K上下文 · 数学编程领先 · 开源','https://tongyi.aliyun.com/'],
      ['文心一言 4.5','百度','中文评测第一 · 知识库深厚 · 生态完善','https://yiyan.baidu.com/'],
      ['豆包 Seed-1.6','字节跳动','MoE架构 · 快速免费 · 亿级用户','https://www.doubao.com/'],
      ['Kimi k2.5','月之暗面','200万字中文 · 长文档之王 · 联网搜索','https://kimi.moonshot.cn/'],
      ['GLM-5','清华智谱','128K上下文 · 编程能力强 · 学术翻译','https://chatglm.cn/'],
      ['混元 Turbo','腾讯','微信生态 · 游戏NPC智能','https://yuanbao.tencent.com/'],
      ['星火 4.0','科大讯飞','语音识别第一 · 教育专长','https://xinghuo.xfyun.cn/'],
      ['百川 M1','百川智能','医疗+金融垂直领域 · 视觉推理','https://www.baichuan-ai.com/'],
      ['海螺 MiniMax','MiniMax','400万上下文 · 语音音乐生成','https://hailuoai.com/'],
      ['阶跃星辰 Step','阶跃星辰','MoE·万亿参数·多模态','https://www.stepfun.com/'],
      ['盘古 4.0','华为','行业专用 · 昇腾端侧部署','https://www.huaweicloud.com/'],
    ]},
  { title:{en:'Model Switchers','zh-CN':'🔄 模型切换工具','zh-TW':'🔄 模型切換工具'}, color:'#8b5cf6',
    rows:[
      ['OpenRouter','美国','300+模型 · 统一API · 比价切换','https://openrouter.ai/'],
      ['CCS','社区','多配置管理 · Claude Code切换 · 支持10+供应商','https://github.com/kaitranntt/ccs'],
      ['claude-code-switch','社区','零依赖Shell · 9供应商 · 极简','https://github.com/maxgfr/claude-code-switch'],
      ['Poe','Quora','一App同时用GPT/Claude/Gemini/DeepSeek','https://poe.com/'],
      ['LMSYS Arena','社区','盲测对比 · Elo天梯榜 · 100+模型','https://chat.lmsys.org/'],
    ]},
  { title:{en:'AI Coding Tools','zh-CN':'💻 AI 编程工具','zh-TW':'💻 AI 編程工具'}, color:'#10b981',
    rows:[
      ['Cursor','Cursor Inc','AI IDE · Agent模式 · 多模型 · $20/月','https://cursor.com/'],
      ['GitHub Copilot','Microsoft','VS Code · 自动补全 · $10/月','https://github.com/features/copilot'],
      ['Trae','字节跳动','中文最佳IDE · 免费Claude+DeepSeek','https://www.trae.ai/'],
      ['Windsurf','Codeium','Cascade智能体 · 自动索引 · $15/月','https://codeium.com/windsurf'],
      ['Claude Code','Anthropic','终端Agent · 读写整个代码库','https://docs.anthropic.com/en/docs/claude-code'],
      ['通义灵码','阿里云','IDE插件 · 私有部署 · 免费','https://tongyi.aliyun.com/lingma/'],
      ['CodeGeeX','智谱','20+语言 · AIPC版','https://codegeex.cn/'],
      ['Devin','Cognition','首个AI软件工程师 · 端到端','https://www.cognition.ai/'],
      ['Bolt.new','StackBlitz','提示词→全栈应用 · 浏览器','https://bolt.new/'],
      ['Lovable','社区','GPT工程师 · 描述→SaaS','https://lovable.dev/'],
      ['Replit Agent','Replit','浏览器IDE · 自然语言→部署','https://replit.com/'],
      ['Aider','社区','终端 · Git集成 · SWE-bench顶尖','https://aider.chat/'],
      ['Gemini CLI','Google','100万上下文 · 多模态 · CLI','https://github.com/google-gemini/gemini-cli'],
    ]},
  { title:{en:'Autonomous Agents','zh-CN':'🦾 自主 Agent','zh-TW':'🦾 自主 Agent'}, color:'#ef4444',
    rows:[
      ['Manus','Manus','自主执行 · 多步骤任务自动完成','https://manus.im/'],
      ['OpenClaw 龙虾','社区','开源 · 浏览器+文件系统操控','https://github.com/openclaw/openclaw'],
      ['AutoGPT','社区','先驱 · 联网+文件 · 自主循环','https://github.com/Significant-Gravitas/AutoGPT'],
      ['Coze 扣子','字节跳动','零代码Bot搭建 · 插件市场','https://www.coze.cn/'],
      ['Dify','社区','开源 · RAG+Agent+工作流 · 自托管','https://dify.ai/'],
      ['CrewAI','社区','角色化 · 多Agent团队协作','https://www.crewai.com/'],
      ['AutoGen','Microsoft','多Agent对话协作框架','https://microsoft.github.io/autogen/'],
      ['n8n','社区','工作流自动化 · AI节点 · 自托管','https://n8n.io/'],
    ]},
  { title:{en:'AI API Hub','zh-CN':'🌐 AI API 资源','zh-TW':'🌐 AI API 資源'}, color:'#06b6d4',
    rows:[
      ['API 集合站','社区','AI API 接口聚合 · 多供应商参考','https://api.daheiai.com/'],
      ['OpenRouter','社区','300+ 模型统一 API · 兼容 OpenAI · 比价切换','https://openrouter.ai/'],
      ['API2D','社区','国内 OpenAI 兼容中转 · GPT/Claude/DeepSeek','https://api2d.com/'],
      ['OhMyGPT','社区','国内 API 中转 · 多模型 · 按量计费','https://ohmygpt.com/'],
      ['AIGC2D','社区','国内 API 中转 · 兼容 OpenAI 格式','https://aigc2d.com/'],
      ['ChatAnywhere','社区','OpenAI API 国内中转 · 免翻墙 · 免费额度','https://api.chatanywhere.com.cn/'],
      ['RapidAPI','RapidAPI','全球最大API平台 · 4万+接口 · 浏览器测试','https://rapidapi.com/'],
      ['Apifox','Apifox','国产API管理 · Mock+测试+文档一体化','https://apifox.com/'],
      ['DeepSeek API','深度求索','¥2/百万token · 兼容 OpenAI 格式','https://platform.deepseek.com/'],
      ['Kimi API','月之暗面','200万字上下文 · 兼容 Anthropic 格式','https://platform.moonshot.cn/'],
      ['通义千问 API','阿里云','256K上下文 · DashScope 平台','https://dashscope.aliyun.com/'],
      ['文心一言 API','百度','中文最强 · 千帆大模型平台','https://console.bce.baidu.com/qianfan/'],
      ['Anthropic API','Anthropic','Claude 官方 API · Console 控制台','https://console.anthropic.com/'],
      ['OpenAI API','OpenAI','GPT-4.1 API · Platform 平台','https://platform.openai.com/'],
    ]},
]

export default function AgentToolsOverview() {
  const { lang } = useT()
  const T = (en:string,zh:string,tw:string) => lang==='zh-CN'?zh:lang==='zh-TW'?tw:en

  return (<div className={styles.page}>
    <div className={styles.head}><h2 className={styles.title}>🤖 {T('Model Hub & API','大模型 · API大全','大模型 · API大全')}</h2><p className={styles.subtitle}>{T('LLMs · Switchers · Coding · Agents · API Hub','大模型 · 模型切换 · AI编程 · Agent · API资源','大模型 · 模型切換 · AI編程 · Agent · API資源')}</p></div>

    {tables.map(t => (
      <div key={t.color} style={{ marginBottom: 28 }}>
        <h3 style={{ fontSize: 17, fontWeight: 700, color: t.color, marginBottom: 10 }}>{T(t.title.en, t.title['zh-CN'], t.title['zh-TW'])}</h3>
        <div style={{ overflowX: 'auto', borderRadius: 10, border: '1px solid var(--border)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead><tr>
              <th style={thStyle}>{T('Name','名称','名稱')}</th>
              <th style={thStyle}>{T('Developer','开发商','開發商')}</th>
              <th style={thStyle}>{T('Highlights','核心特点','核心特點')}</th>
            </tr></thead>
            <tbody>
              {t.rows.map((row, i) => (
                <tr key={i} style={{ cursor: 'pointer' }} onClick={() => window.open(row[3], '_blank')}>
                  <td style={nameStyle}>{row[0]} ↗</td>
                  <td style={tdStyle}>{row[1]}</td>
                  <td style={tdStyle}>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ))}
  </div>)
}
