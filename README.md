# 🌐 AI Navigator

> 一站式 AI 工具导航 + 行业应用洞察 + AIGC 实操教程 — 不是零散的链接集合，而是一张完整的 AI 世界地图。

## ✨ Live

**[gebddxx.github.io/ai-for-everything](https://gebddxx.github.io/ai-for-everything/)**

## 🗺️ 站点结构

```
🏠 首页
├── 🧭 导航工具集       200+ 工具 · 7 大分类
│   ├── 搜索引擎（42 工具）
│   ├── 对话助手（47 平台 — LLM + 编程 + 数字人）
│   ├── 创意工具（71 工具 — 写作 · 绘画 · 视频 · 音频）
│   ├── 设计工具（UI/UX · 品牌 · 原型）
│   ├── 3D 与游戏（3D 建模 · 游戏资产 · NPC AI）
│   ├── 办公提效（42 工具 — PPT · 文档 · 会议 · 邮件 · 翻译 · 数据）
│   └── 智能体（框架 · 助手 · 工作流）
│
├── 🏭 AI 行业应用       16 大行业 · 详细案例 + 数据
│   ├── 智慧物流 · 医疗健康 · 金融科技 · 教育科技
│   ├── 智能制造 · 智慧农业 · 企业应用 · 零售电商
│   ├── 交通出行 · 能源电力 · 媒体娱乐 · 网络安全
│   └── 法律科技 · 环保气候 · 政务智慧城市
│
├── 🤖 AIGC 教程         14 个手把手教程
│   ├── AI 编程（Gemini CLI · Codex CLI · CCSwitch）
│   ├── 智能体（框架 · 助手 · 工作流 · 多 Agent）
│   └── 内容生成（音频 · 视频 · 小说 · PPT · 网页 · App · 软件）
│
└── 📰 AI 速报           每 4 小时更新 · 1,370+ 期
```

## ✨ 功能

- 🏠 **首页仪表盘** — 时段问候 + 数据概览 + 轮播提示 + 快速导航
- 🧭 **工具导航** — 300+ 精选工具，连续滚动浏览，无分类隔断
- 🏭 **行业应用** — 16 大行业，每个含 AI 变革分析、前沿场景、关键数据、工具目录
- 🤖 **AIGC 教程** — 14 个实操教程，含代码示例和工具直达链接
- 📰 **AI 速报** — 精选 AI 行业快讯，每 4 小时更新
- 📂 **侧边栏导航** — 手风琴展开 + 滚动自动高亮 + 点击平滑跳转
- 🌙 **暗色模式** — 一键切换，偏好保存
- 🌍 **三语支持** — EN / 简中 / 繁中 一键切换
- 📱 **响应式** — 桌面 / 平板 / 手机

## 🏗 架构概览

这是一个 **纯前端静态单页应用（SPA）**。

| 维度 | 说明 |
|:---|:---|
| **类型** | 静态站点，无后端服务、无数据库、无 API |
| **部署产物** | `dist/` 目录 — 纯 HTML + CSS + JS，可部署到任何静态托管（GitHub Pages、Netlify、Vercel 等） |
| **数据来源** | 所有内容在构建时/运行时以 TypeScript 模块形式嵌入，无服务端依赖 |
| **平台兼容** | Windows / Linux / macOS 均可开发与部署 |
| **运行方式** | `npm run dev` 启动本地 Vite 开发服务器，`npm run build` 构建静态文件 |

### 数据流

```
TypeScript 源文件（.ts / .tsx）
  ├── src/data/domains.ts       ← 板块结构定义
  ├── src/data/searchIndex.ts   ← 搜索索引（npm run build-index 生成）
  ├── src/data/aiNews.ts        ← AI 速报内容
  ├── src/data/logistics.ts     ← 物流仪表盘数据
  ├── src/pages/*.tsx           ← 各页面组件内联的工具/教程数据
  └── src/i18n/translations.ts  ← 多语言翻译
       ↓
  React 运行时                  ← 状态驱动路由（无 React Router）
       ↓
  纯静态 HTML/CSS/JS            ← 部署到 GitHub Pages
```

> **不是 SSR、不是 API 后端、不是全栈应用。** 浏览器打开即用，无服务器渲染开销。

## 🛠 技术栈

| 类别 | 技术 |
|:---|:---|
| 框架 | React 18 + TypeScript |
| 构建 | Vite 5 |
| 图表 | Recharts |
| 样式 | CSS Modules + CSS Variables |
| 国际化 | 自定义 Context（无额外依赖） |
| 路由 | 状态驱动（无 React Router） |
| 部署 | GitHub Pages（gh-pages） |

## 🚀 本地开发

```bash
npm install
npm run dev        # → http://localhost:5173
```

## 📦 部署

```bash
npm run deploy     # vite build → gh-pages
```

## 📁 项目结构

```
src/
├── App.tsx                    # 路由核心（状态驱动: domain + activePage）
├── main.tsx                   # 入口
│
├── components/
│   ├── Header.tsx             # 顶栏（📦logo 可点回首页）
│   ├── Sidebar.tsx            # 侧边栏（🏠首页 + 3 板块手风琴）
│   ├── Breadcrumb.tsx         # 面包屑
│   ├── LinkNav.tsx            # 工具链接网格（连续排列无分类隔断）
│   ├── NewsTicker.tsx         # 首页轮播提示条
│   ├── TutorialCard.tsx       # 教程共享组件（Card + Code）
│   ├── StatCard.tsx           # 指标卡片（物流仪表盘）
│   ├── PieChart.tsx           # 饼图（Recharts）
│   ├── BarChart.tsx           # 柱状图（Recharts）
│   └── MindMap.tsx            # 思维导图
│
├── contexts/
│   ├── LanguageContext.tsx    # 三语切换 (en / zh-CN / zh-TW)
│   └── ThemeContext.tsx       # 明暗主题
│
├── data/
│   ├── domains.ts             # 3 大板块 + 子模块定义
│   ├── aiNews.ts              # AI 速报数据
│   └── logistics.ts           # 物流仪表盘数据
│
├── i18n/
│   └── translations.ts       # 物流模块集中翻译
│
└── pages/
    ├── Home.tsx               # 第 0 页 · 登录首页
    ├── AiNews.tsx             # AI 速报页
    ├── NavToolsOverview.tsx   # 🧭 导航工具集总览
    ├── IndustriesOverview.tsx # 🏭 AI 行业应用总览
    ├── AigcOverview.tsx       # 🤖 AIGC 教程总览
    ├── *Overview.tsx          # 7 个工具目录 + 15 个行业页
    └── *Tutorial.tsx          # 14 个教程页
```

## 🧩 调用链路

```
main.tsx
  └─ App (ThemeProvider → LanguageProvider → AppContent)
       │                            ↑
       │  两个核心 state:           │  变化途径:
       │    domain: string|null     │   ① 首页点卡片 → handleEnterDomain(key)
       │    activePage: string      │   ② 侧边栏点子项 → handleSelectPage(key)
       │                            │   ③ 滚动 → IntersectionObserver
       │                            │   ④ 点 logo → handleBack()
       │
       ├─ Header          ← 📦logo onClick → handleBack()
       │
       ├─ Sidebar         ← 手风琴导航 + 滚动自动高亮
       │   ├─ 🏠 首页      → onHome() → setDomain(null)
       │   ├─ 🧭 导航工具集 → onSelectDomain('nav-tools')
       │   │   ├─ 总览     → scrollTo #section-overview
       │   │   ├─ 搜索引擎 → scrollTo #section-search
       │   │   └─ ...
       │   ├─ 🏭 AI行业   → onSelectDomain('ai-industries')
       │   └─ 🤖 AIGC    → onSelectDomain('aigc')
       │
       └─ renderPage()    ← 根据 (domain, activePage) 决定渲染
            │
            ├─ null → <Home />
            │          └─ Hero横幅 + 统计 + 轮播 + 3张导航卡片
            │               └─ onClick → onEnter('nav-tools'|'ai-industries'|'aigc')
            │
            ├─ 'nav-tools' → <NavToolsOverview />
            │                 ├─ 总览横幅 + 分类标签（点击 scrollIntoView）
            │                 └─ 内联 7 子页:
            │                      Search/Chat/Creative/Design/Game3D/Office/Agent
            │                        └─ 每页 → <LinkNav links={...} /> 连续网格
            │
            ├─ 'ai-industries' → <IndustriesOverview />
            │                     ├─ 总览横幅 + 15 行业标签
            │                     └─ 内联 15 行业页:
            │                          每个 = 行业分析 + 4 场景卡片 + 指标 + 工具目录
            │
            ├─ 'aigc' → <AigcOverview />
            │            ├─ 总览横幅 + 14 教程标签
            │            └─ 内联 14 教程页:
            │                 每个 = 工具表 + 直达链接 + Card/Code 教程
            │
            └─ 'ai-news' → <AiNews />
                             └─ 20 期快讯卡片 + 加载更多
```

**无 URL Router**，两个 state（`domain` + `activePage`）驱动一切。

