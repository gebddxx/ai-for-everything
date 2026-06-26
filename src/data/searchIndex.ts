export interface SearchEntry {
  name: string        // display name
  keywords: string[]  // searchable keywords (name, aliases, synonyms)
  domain: string|null // target domain key (null = home)
  section?: string    // target section key for scroll
}

// Build comprehensive search index
export const searchIndex: SearchEntry[] = [
  // Home
  { name:'首页', keywords:['home','主页','首页','主页','shouye'], domain:null },
  { name:'AI速报', keywords:['news','速报','快讯','AI新闻','新闻','xinwen'], domain:'ai-news' },

  // Nav-tools sections
  { name:'搜索引擎', keywords:['search','搜索','搜索引擎','百度','谷歌','sousuo'], domain:'nav-tools', section:'search' },
  { name:'对话助手', keywords:['chat','对话','聊天','LLM','大模型','大语言模型','GPT','Claude','duihua'], domain:'nav-tools', section:'chat' },
  { name:'写作工具', keywords:['writing','写作','写文章','文案','作文','小说','xiezuo'], domain:'nav-tools', section:'writing' },
  { name:'绘画工具', keywords:['image','绘画','画图','生图','AI绘画','AI画图','huihua','画画','图片生成'], domain:'nav-tools', section:'image-gen' },
  { name:'视频工具', keywords:['video','视频','短视频','视频生成','视频编辑','shipin'], domain:'nav-tools', section:'video-gen-tool' },
  { name:'音频工具', keywords:['audio','音频','音乐','配音','语音','声音','yinpin','yinyue'], domain:'nav-tools', section:'audio-gen-tool' },
  { name:'设计工具', keywords:['design','设计','UI','UX','Logo','品牌','原型','sheji'], domain:'nav-tools', section:'design' },
  { name:'3D与游戏', keywords:['3d','游戏','3D建模','游戏资产','NPC','sanwei'], domain:'nav-tools', section:'3d-game' },
  { name:'办公提效', keywords:['office','办公','PPT','文档','会议','邮件','翻译','数据','bangong'], domain:'nav-tools', section:'office' },
  { name:'智能体', keywords:['agent','智能体','Agent','机器人','自动化','zhinengti'], domain:'nav-tools', section:'agents' },
  { name:'开发工具', keywords:['dev','开发','编程','编译器','JSON','编码','格式','kaifa','biancheng','代码'], domain:'nav-tools', section:'dev-tools' },
  { name:'社区媒体', keywords:['social','社区','媒体','社交','论坛','短视频','视频平台','shequ','meiti'], domain:'nav-tools', section:'social-media' },
  { name:'图片专区', keywords:['image','图片','图库','抠图','配色','修图','Logo','tupian','tuku'], domain:'nav-tools', section:'image-resources' },

  // AI Industries
  { name:'智慧物流', keywords:['logistics','物流','仓储','运输','配送','wuliu'], domain:'ai-industries', section:'logistics' },
  { name:'医疗健康', keywords:['healthcare','医疗','健康','医院','诊断','药物','yiliao'], domain:'ai-industries', section:'healthcare' },
  { name:'金融科技', keywords:['finance','金融','理财','投资','银行','反欺诈','交易','jinrong'], domain:'ai-industries', section:'finance' },
  { name:'教育科技', keywords:['education','教育','学习','辅导','批改','jiaoyu','xuexi'], domain:'ai-industries', section:'education' },
  { name:'智能制造', keywords:['manufacturing','制造','工厂','质检','预测维护','zhizao'], domain:'ai-industries', section:'manufacturing' },
  { name:'智慧农业', keywords:['agriculture','农业','种植','收割','农','nongye'], domain:'ai-industries', section:'agriculture' },
  { name:'企业应用', keywords:['enterprise','企业','营销','HR','法务','qiye'], domain:'ai-industries', section:'enterprise' },
  { name:'零售电商', keywords:['retail','零售','电商','购物','推荐','lingshou'], domain:'ai-industries', section:'retail' },
  { name:'交通出行', keywords:['transport','交通','出行','自动驾驶','无人车','jiaotong'], domain:'ai-industries', section:'transport' },
  { name:'能源电力', keywords:['energy','能源','电力','电网','光伏','风电','nengyuan'], domain:'ai-industries', section:'energy' },
  { name:'媒体娱乐', keywords:['media','媒体','娱乐','游戏','影视','音乐','yule'], domain:'ai-industries', section:'media' },
  { name:'网络安全', keywords:['security','安全','网络','威胁','防火墙','anquan'], domain:'ai-industries', section:'security' },
  { name:'法律科技', keywords:['law','法律','法务','合同','律师','falu','falv'], domain:'ai-industries', section:'law' },
  { name:'环保气候', keywords:['climate','环保','气候','碳','排放','huanbao'], domain:'ai-industries', section:'climate' },
  { name:'政务智慧城市', keywords:['govtech','政务','智慧城市','政府','城市','zhengwu'], domain:'ai-industries', section:'govtech' },

  // AIGC tutorials
  { name:'Gemini CLI 教程', keywords:['gemini','Google','CLI','命令行','编程助手'], domain:'aigc', section:'gemini' },
  { name:'Codex CLI 教程', keywords:['codex','OpenAI','CLI','编程','代码'], domain:'aigc', section:'codex' },
  { name:'CCSwitch 教程', keywords:['ccswitch','多模型','Claude','DeepSeek','协作'], domain:'aigc', section:'ccswitch' },
  { name:'Agent 框架', keywords:['agent','框架','框架','LangChain','AutoGen','CrewAI'], domain:'aigc', section:'frameworks' },
  { name:'个人 AI 助手', keywords:['assistant','助手','ChatGPT','定制','Bot'], domain:'aigc', section:'assistants' },
  { name:'工作流自动化', keywords:['workflow','工作流','自动化','n8n','Zapier'], domain:'aigc', section:'workflow' },
  { name:'多 Agent 协作', keywords:['multi-agent','多Agent','协作','团队','multi'], domain:'aigc', section:'multi-agent' },
  { name:'音频音乐生成教程', keywords:['audio tutorial','音频生成','音乐教程','Suno','配音教程'], domain:'aigc', section:'audio-gen' },
  { name:'视频生成教程', keywords:['video tutorial','视频生成','Runway','Sora','视频教程'], domain:'aigc', section:'video-gen' },
  { name:'小说写作教程', keywords:['novel','小说','写作教程','创作','长篇'], domain:'aigc', section:'novel' },
  { name:'PPT 生成教程', keywords:['ppt','PPT','演示','幻灯片','Gamma'], domain:'aigc', section:'ppt-gen' },
  { name:'网页生成教程', keywords:['web','网页','网站','前端','HTML'], domain:'aigc', section:'web-gen' },
  { name:'App 生成教程', keywords:['app','应用','手机','Flutter','iOS'], domain:'aigc', section:'app-gen' },
  { name:'软件/EXE 生成教程', keywords:['software','软件','EXE','桌面','打包'], domain:'aigc', section:'software-gen' },

  // Deep tool-level — popular tools people might search for
  { name:'以图搜图 / Google识图', keywords:['以图识图','以图搜图','识图','找图','搜图','图片搜索','reverse image','shitu','sougou image'], domain:'nav-tools', section:'image-resources' },
  { name:'AI抠图 / 去背景', keywords:['抠图','去背景','背景消除','Remove.bg','koutu'], domain:'nav-tools', section:'image-resources' },
  { name:'在线PS / Photopea', keywords:['PS','Photoshop','在线PS','修图','P图','photopea','xiutu'], domain:'nav-tools', section:'image-resources' },
  { name:'Logo 设计', keywords:['logo','Logo','商标','标志','品牌设计','logosc','biaozhi'], domain:'nav-tools', section:'image-resources' },
  { name:'配色方案', keywords:['配色','调色','色板','颜色','色彩','Coolors','peise'], domain:'nav-tools', section:'image-resources' },
  { name:'免费图库', keywords:['图库','免费图片','Pixabay','Unsplash','Pexels','tuku','mianfei tupian'], domain:'nav-tools', section:'image-resources' },
  { name:'二维码生成', keywords:['二维码','QR码','QR code','条形码','erweima'], domain:'nav-tools', section:'dev-tools' },
  { name:'JSON 格式化', keywords:['json','JSON','格式化','校验','解析'], domain:'nav-tools', section:'dev-tools' },
  { name:'Base64 编解码', keywords:['base64','编码','解码','base64'], domain:'nav-tools', section:'dev-tools' },
  { name:'时间戳转换', keywords:['timestamp','时间戳','Unix','日期转换','shijianchuo'], domain:'nav-tools', section:'dev-tools' },
  { name:'正则表达式', keywords:['regex','正则','正则表达式','zhengze','匹配'], domain:'nav-tools', section:'dev-tools' },
  { name:'在线编译器', keywords:['compiler','编译器','在线编程','C语言','Python在线','Java在线','bianyiqi'], domain:'nav-tools', section:'dev-tools' },
  { name:'Midjourney', keywords:['midjourney','MJ','AI绘画','AI画图','midjourney'], domain:'nav-tools', section:'image-gen' },
  { name:'Stable Diffusion', keywords:['stable diffusion','SD','AI画图','开源绘画','ComfyUI'], domain:'nav-tools', section:'image-gen' },
  { name:'Suno AI音乐', keywords:['suno','AI音乐','作曲','写歌','AI music'], domain:'nav-tools', section:'audio-gen-tool' },
  { name:'ElevenLabs 语音', keywords:['elevenlabs','语音合成','TTS','声音克隆','shengyin kelong'], domain:'nav-tools', section:'audio-gen-tool' },
  { name:'ChatGPT', keywords:['chatgpt','GPT','OpenAI','对话','AI对话'], domain:'nav-tools', section:'chat' },
  { name:'Claude', keywords:['claude','Anthropic','写作','对话'], domain:'nav-tools', section:'chat' },
  { name:'DeepSeek', keywords:['deepseek','深度求索','对话','写作','编程'], domain:'nav-tools', section:'chat' },
  { name:'Kimi', keywords:['kimi','月之暗面','长文本','对话'], domain:'nav-tools', section:'chat' },
  { name:'豆包', keywords:['doubao','字节','豆包','AI助手'], domain:'nav-tools', section:'chat' },
  { name:'文心一言', keywords:['文心一言','ERNIE','百度','AI对话','yiyan'], domain:'nav-tools', section:'chat' },
  { name:'通义千问', keywords:['tongyi','通义','阿里','AI对话','qianwen'], domain:'nav-tools', section:'chat' },
  { name:'知乎', keywords:['zhihu','知乎','问答','社区'], domain:'nav-tools', section:'social-media' },
  { name:'小红书', keywords:['xiaohongshu','小红书','种草','分享'], domain:'nav-tools', section:'social-media' },
  { name:'B站 / 哔哩哔哩', keywords:['bilibili','B站','哔哩哔哩','弹幕','视频'], domain:'nav-tools', section:'social-media' },
  { name:'抖音', keywords:['douyin','抖音','短视频','TikTok'], domain:'nav-tools', section:'social-media' },
  { name:'微博', keywords:['weibo','微博','热搜','话题'], domain:'nav-tools', section:'social-media' },
]
