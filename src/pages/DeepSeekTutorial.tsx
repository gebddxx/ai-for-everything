import { useT } from '../contexts/LanguageContext'
import styles from './Page.module.css'
import { pStyle, ulStyle, Card, Code } from '../components/TutorialCard'

export default function DeepSeekTutorial() {
  const { lang } = useT()
  const l = {
    pageTitle: lang === 'zh-CN' ? 'DeepSeek 完整教程' : lang === 'zh-TW' ? 'DeepSeek 完整教學' : 'DeepSeek — Complete Guide',
    pageSub: lang === 'zh-CN' ? 'API接入 · 本地部署 · DeepThink深度推理 · 极致性价比' : lang === 'zh-TW' ? 'API接入 · 本地部署 · DeepThink深度推理 · 極致性價比' : 'API Access · Local Deploy · DeepThink · Best Value',
    whatIs: lang === 'zh-CN' ? '什么是 DeepSeek？' : lang === 'zh-TW' ? '什麼是 DeepSeek？' : 'What is DeepSeek?',
    whatIsBody: lang === 'zh-CN' ? 'DeepSeek（深度求索）是国产大模型中的性价比之王。V3版本在编程和数学上接近GPT-4，R1版本引入DeepThink深度推理能力。API价格仅为GPT-4的1/27，支持100万token超长上下文聊天。支持本地部署（Ollama），完全免费。' : lang === 'zh-TW' ? 'DeepSeek（深度求索）是國產大模型中的性價比之王。V3版本在程式設計和數學上接近GPT-4，R1版本引入DeepThink深度推理能力。API價格僅為GPT-4的1/27，支持100萬token超長上下文聊天。' : 'DeepSeek is the best-value Chinese LLM. V3 rivals GPT-4 in coding and math, R1 adds DeepThink reasoning. API costs 1/27 of GPT-4, supports 1M token context. Available locally via Ollama, completely free.',
    step1: lang === 'zh-CN' ? '第1步：网页版 & API' : lang === 'zh-TW' ? '第1步：網頁版 & API' : 'Step 1: Web & API',
    step2: lang === 'zh-CN' ? '第2步：本地部署 (Ollama)' : lang === 'zh-TW' ? '第2步：本地部署 (Ollama)' : 'Step 2: Local Deploy',
    step3: lang === 'zh-CN' ? '第3步：DeepThink 深度推理' : lang === 'zh-TW' ? '第3步：DeepThink 深度推理' : 'Step 3: DeepThink Reasoning',
    step4: lang === 'zh-CN' ? '第4步：VS Code 集成' : lang === 'zh-TW' ? '第4步：VS Code 集成' : 'Step 4: VS Code Integration',
    links: lang === 'zh-CN' ? '链接与资源' : lang === 'zh-TW' ? '連結與資源' : 'Links & Resources',
  }
  return (
    <div className={styles.page}>
      <div className={styles.head}><h2 className={styles.title}>🐋 {l.pageTitle}</h2><p className={styles.subtitle}>{l.pageSub}</p></div>
      <div className={styles.cases}>
        <Card title={l.whatIs}><p style={pStyle}>{l.whatIsBody}</p></Card>
        <Card title={l.step1}><Code>{CODE.step1}</Code></Card>
        <Card title={l.step2}><Code>{CODE.step2}</Code></Card>
        <Card title={l.step3}><Code>{CODE.step3}</Code></Card>
        <Card title={l.step4}><Code>{CODE.step4}</Code></Card>
        <Card title={l.links}><ul style={ulStyle}>
          <li><a href="https://chat.deepseek.com/" target="_blank" rel="noopener">DeepSeek 网页版</a></li>
          <li><a href="https://platform.deepseek.com/" target="_blank" rel="noopener">DeepSeek API 平台</a></li>
          <li><a href="https://ollama.com/library/deepseek-r1" target="_blank" rel="noopener">Ollama DeepSeek-R1</a></li>
          <li><a href="https://github.com/deepseek-ai/DeepSeek-V3" target="_blank" rel="noopener">DeepSeek-V3 GitHub</a></li>
        </ul></Card>
      </div>
    </div>
  )
}

const CODE = {
  step1: `👇 网页版直接使用：https://chat.deepseek.com/
👇 API 平台注册：https://platform.deepseek.com/ （新用户送 500万 tokens）

# 网页版（免费）— 注册即可用，支持文件上传、联网搜索

# API 接入（超低价）
# 新用户赠送 500万 tokens 免费额度

# API 价格（人民币）：
# DeepSeek-V3:  ¥2 / 百万 tokens（输入） ¥8 / 百万 tokens（输出）
# DeepSeek-R1:  ¥4 / 百万 tokens（输入） ¥16 / 百万 tokens（输出）
# 对比 GPT-4:   $30 / 百万 tokens（输入） $60 / 百万 tokens（输出）
# DeepSeek 约为 GPT-4 价格的 1/27 ！

# Python 调用 DeepSeek API：
import openai
client = openai.OpenAI(
    api_key="sk-xxxxxxxxxxxxxxxx",
    base_url="https://api.deepseek.com"
)
response = client.chat.completions.create(
    model="deepseek-chat",  # V3
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Explain quantum computing in simple terms."}
    ],
    max_tokens=1024,
    temperature=0.7,
    stream=False
)
print(response.choices[0].message.content)`,

  step2: `👇 下载 Ollama：https://ollama.com/
👇 LM Studio（图形界面）：https://lmstudio.ai/

# DeepSeek 本地部署（免费 · 离线 · 隐私）

# 方式 A：Ollama（推荐，一行命令）

# 下载 DeepSeek-R1（7B 蒸馏版，8GB 显存）：
ollama pull deepseek-r1:7b
# 运行：
ollama run deepseek-r1:7b
# 现在可以在终端直接聊天！

# 更大的模型：
ollama pull deepseek-r1:14b   # 16GB 显存
ollama pull deepseek-r1:32b   # 24GB 显存
ollama pull deepseek-r1:70b   # 48GB 显存

# 方式 B：LM Studio（图形界面）
# 下载: https://lmstudio.ai/
# 搜索 "DeepSeek" → 下载 → 一键运行
# 支持 GPU 加速，有聊天界面

# 方式 C：vLLM（生产环境）
pip install vllm
vllm serve deepseek-ai/DeepSeek-R1-Distill-Qwen-7B \\
  --max-model-len 32768 --gpu-memory-utilization 0.9

# 本地模型优势：
# - 完全免费，无需API付费
# - 数据不出本地，隐私安全
# - 离线可用，无网络也能用`,

  step3: `# DeepSeek-R1 DeepThink 深度推理模式

# R1 的独特能力：在回答前先"思考"
# 会展示完整的推理链（Chain of Thought）

# 触发 DeepThink 的提示词技巧：
"""
请一步一步思考这个问题：
[你的问题]

在回答之前，请：
1. 列出所有已知条件
2. 分析可能的解法
3. 验证每个解法的正确性
4. 给出最终答案并解释原因
"""

# Web 界面：直接勾选 "DeepThink (R1)" 模式
# API 调用：使用 model="deepseek-reasoner"

# Python 示例：
response = client.chat.completions.create(
    model="deepseek-reasoner",  # R1 DeepThink
    messages=[{"role": "user", "content": "Prove that sqrt(2) is irrational"}]
)
# 响应包含 reasoning_content（推理过程） 和 content（最终答案）

# 适用场景：
# - 数学证明、逻辑推理
# - 代码调试、复杂bug分析
# - 学术研究、论文审阅
# - 商业分析、战略决策`,

  step4: `# VS Code 集成 DeepSeek

# 方式 A：Continue 插件（免费开源）
# 1. VS Code → Extensions → 搜索 "Continue"
# 2. 安装后，在 config.json 中添加：
{
  "models": [{
    "title": "DeepSeek V3",
    "provider": "deepseek",
    "model": "deepseek-chat",
    "apiKey": "sk-xxxxxxxx"
  }, {
    "title": "DeepSeek R1",
    "provider": "deepseek",
    "model": "deepseek-reasoner",
    "apiKey": "sk-xxxxxxxx"
  }]
}

# 方式 B：Cline 插件（Agent模式）
# 1. VS Code → Extensions → "Cline"
# 2. 设置 API Provider → "DeepSeek"
# 3. 填入 API Key → 即可使用
# Cline 可以：读写文件、执行终端命令、搜索网络

# 方式 C：本地 Ollama + Continue
# 无需 API Key，完全免费：
{
  "models": [{
    "title": "DeepSeek-R1 7B (Local)",
    "provider": "ollama",
    "model": "deepseek-r1:7b"
  }]
}`,
}
