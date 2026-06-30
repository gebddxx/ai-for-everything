export interface NewsItem {
  id: number
  date: string
  time: string
  summary: string
  tags: string[]
  count: number
}

export const newsIssues: NewsItem[] = [
  { id: 1379, date: '2026-06-26', time: '08:01', summary: 'OpenAI正式发布Codex移动版并支持DigitalOcean云端开发环境；Hugging Face推出一键部署vLLM功能；德国法院裁定AI生成内容责任归属部署方；Vercel分享编码代理设计标准；Gemini侧边栏实用性获用户认可。', tags: ['openai','huggingface','vllm','gemini','qwen'], count: 8 },
  { id: 1378, date: '2026-06-26', time: '04:02', summary: 'OpenAI内部全面使用Codex代理重塑工作，Cursor发布研究揭示模型作弊基准测试；LlamaIndex开源LiteParse、Fireworks评测Claude Code+GLM-5.2领先，以及Gemini学习笔记本免费推出。', tags: ['openai','meta','claude','zhipu','langchain'], count: 8 },
  { id: 1377, date: '2026-06-26', time: '00:01', summary: '本周多款AI工具与模型密集更新：腾讯推出Agent邮箱，Vercel发布AI SDK 7，Manus集成Semrush，同时Ornith-1.0多规模模型和Weaviate 1.38等也有重要更新。', tags: ['zhipu','meta'], count: 7 },
  { id: 1376, date: '2026-06-25', time: '20:02', summary: 'NVIDIA发布Nemotron扩散语言模型创新架构，Stanford发布OpenThoughts-Agent-v2多项基准领先，同时3D生成技术取得突破性进展。', tags: ['nvidia','openai'], count: 8 },
  { id: 1375, date: '2026-06-25', time: '16:01', summary: '中国AI应用首次出现3亿美元ARR独角兽、OpenAI发布双向AI语音模型Bidi 1、Anthropic指控阿里巴巴不当提取AI能力，以及多个开发者工具更新和实用工作流分享。', tags: ['zhipu','openai','claude','alibaba','gemma'], count: 8 },
  { id: 1374, date: '2026-06-25', time: '12:01', summary: 'Wan-2.7 I2V在图像到视频竞技场排名第五；Gemma4非审查版发布并支持MTP提速35%-53%；整合16家LLM免费额度项目每月可节省17亿Token费用。', tags: ['gemma','openai'], count: 7 },
  { id: 1373, date: '2026-06-25', time: '08:01', summary: 'GLM-5.2 (Max)在Code Arena前端大赛中登顶，击败所有Claude Opus变体；Mirendil获a16z领投2亿美元种子轮，专注AI研发。', tags: ['zhipu','kimi','fireworks'], count: 7 },
  { id: 1372, date: '2026-06-25', time: '04:01', summary: 'OpenAI更新GPT-5.5 Instant提升对话体验，Google为Gemini 3.5 Flash引入计算机使用能力，字节火山引擎分享AI开发系统化原型驱动方法论。', tags: ['openai','gemini','nvidia','zhipu','fireworks'], count: 8 },
  { id: 1371, date: '2026-06-25', time: '00:01', summary: 'OpenAI发布首款自研AI芯片Jalapeño，字节跳动推出AI音乐模型SeedMusic 1.0，百度详解Unlimited OCR参考滑动窗口注意力技术。Microsoft开源基因组医学工具Talos，Runway新增广告本地化功能。', tags: ['openai','baidu','runway'], count: 7 },
  { id: 1370, date: '2026-06-24', time: '20:00', summary: 'Qwen-AgentWorld开源并超越Claude Opus 4.8和GPT-5.4，Kimi API上线AWS Marketplace，微信Agent被评历史最大更新。', tags: ['openai','claude','qwen','kimi','zhipu'], count: 7 },
  { id: 1369, date: '2026-06-24', time: '16:01', summary: 'Claude Code获权威认可称为LLM第三次变革，阿里开源Open Code Review一周获5k Star，同时物理AI在货运领域实现商业闭环、仙工智能IPO等事件凸显行业加速落地。', tags: ['claude','qwen','alibaba'], count: 8 },
  { id: 1368, date: '2026-06-24', time: '12:01', summary: '字节跳动推出豆包专业版开启付费模式，定价68元起；芯片安全法案获多家公司支持，要求AI芯片配备位置追踪机制。', tags: ['doubao'], count: 6 },
  { id: 1367, date: '2026-06-24', time: '08:01', summary: 'Cursor连发多项新功能、LangChain推出代理改进工具LangSmith Engine和语音代理教程、Fireworks AI发布FireConnect集成开放模型，Cerebras公布上市后首份财报。', tags: ['langchain','fireworks','cerebras'], count: 5 },
  { id: 1366, date: '2026-06-24', time: '04:01', summary: 'OpenAI公布过去6个月API端30+新模型与功能，Google推出Managed Agents与统一可观测性分析，NVIDIA开源DFlash推测解码引擎提升推理吞吐15倍，Manus和linzumi等新工具也带来实用更新。', tags: ['openai','gemini','nvidia'], count: 8 },
  { id: 1365, date: '2026-06-24', time: '00:01', summary: 'OpenAI Codex推出Record and Replay功能可自动执行重复任务，Krea 2开源模型发布。CUGA教程和LangChain trace judge提供了实用的Agent开发与监控方案。', tags: ['openai','huggingface','langchain','gemma','qwen'], count: 8 },
  { id: 1364, date: '2026-06-23', time: '20:01', summary: '火山引擎Force大会全面转向Coding和Agent，Seedance 2.0 4K上线即梦，腾讯工程师分享大模型实战七条经验，中国特斯拉将采用豆包端到端语音模型，社区成功本地运行504B模型达前沿水平。', tags: ['hunyuan','doubao'], count: 8 },
  { id: 1363, date: '2026-06-23', time: '16:01', summary: '字节跳动发布豆包音频模型Seed Audio 1.0实现智能声音生成；英伟达发布机器人全栈操作系统；NVIDIA Cosmos 3 Super在文生图基准中排名领先。', tags: ['doubao','nvidia','claude'], count: 5 },
  { id: 1362, date: '2026-06-23', time: '12:01', summary: '字节火山引擎大会一口气发布Seedance 2.5、豆包2.1 Pro等多款新品，百度开源Unlimited OCR采用滑动注意力创新，微软开源FastContext助力编码Agent，社区热议Codex损害SSD问题及欧盟AI法案水印要求。', tags: ['doubao','baidu','openai','zhipu','qwen'], count: 8 },
  { id: 1361, date: '2026-06-23', time: '08:01', summary: 'GLM-5.2在真实bug修复中表现优于Opus 4.8，成本更低且代码质量更高；Google推出Gemini SparkAI代理Beta版；DeepSeek以600亿美元估值融资74亿美元；社区将Moebius 0.2B图像修复模型移植到浏览器。', tags: ['zhipu','gemini','langchain','deepseek','claude'], count: 8 },
  { id: 1360, date: '2026-06-23', time: '04:02', summary: 'OpenAI扩展Daybreak安全平台，发布GPT-5.5-Cyber模型与Codex Security插件；Google推出Interactions API统一Gemini交互，NVIDIA开源ArtiFixer3D补全模型，ElevenLabs发布Ads Engine等多项产品更新。', tags: ['openai','nvidia','gemini','zhipu','langchain'], count: 8 },
]
