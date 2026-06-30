# AI Navigator 架构文档

**纯前端静态 SPA** — 零后端、零数据库、零 API。

---

## 技术栈

React 18 + TypeScript 5 + Vite 5 + Recharts 2  
样式: CSS Modules + CSS Variables  
路由: 状态驱动（无 React Router）  
部署: GitHub Pages（gh-pages）  
跨平台: Windows / Linux / macOS 均可

## 数据来源

所有数据硬编码在 TypeScript 模块中，无运行时网络请求：

- `src/data/domains.ts` — 板块结构
- `src/data/searchIndex.ts` — 搜索索引（`scripts/build-search-index.cjs` 自动生成）
- `src/data/aiNews.ts` — AI 速报
- `src/data/logistics.ts` — 物流仪表盘数据
- `src/i18n/translations.ts` — 三语翻译
- 各 `src/pages/*.tsx` 组件内联的工具/教程数据

## 路由

无 React Router。两个 `useState` 驱动一切：

```
domain = null        → <Home />
domain = 'nav-tools' → <NavToolsOverview />
domain = 'ai-dev'    → <AiDevOverview />
domain = 'ai-news'   → <AiNews />
...
```

状态变化来源：点卡片、点侧边栏、滚动（IntersectionObserver）、hashchange。  
状态同步到 `window.location.hash`，支持浏览器前进/后退。

## 代码分割

四大领域页用 `React.lazy()` 动态加载，首次点击对应导航时才下载 chunk。首页和 AI 速报保持静态加载。

## 构建产物

```
dist/
├── index.html
├── assets/index-*.js              # 主入口
├── assets/vendor-react-*.js       # React 独立 chunk
├── assets/vendor-recharts-*.js    # Recharts 独立 chunk
├── assets/vendor-libs-*.js        # 其他依赖
└── assets/*Overview-*.js          # 懒加载领域页
```

## 构建命令

| 命令 | 作用 |
|:---|:---|
| `npm run dev` | 本地开发 localhost:5173 |
| `npm run build` | 生产构建到 dist/ |
| `npm run build-index` | 重新生成搜索索引 |
| `npm run deploy` | 构建 + 推送到 gh-pages 分支 |

## 项目结构

```
src/
├── main.tsx                 # 入口
├── App.tsx                  # 路由 + 全局布局
├── components/              # 可复用组件（Header/Sidebar/SearchBox/LinkNav 等）
├── contexts/                # ThemeContext + LanguageContext
├── data/                    # 静态数据
├── i18n/                    # 翻译
└── pages/                   # 页面组件（Home + 4 领域页 + 各子页）
```

## 与全栈应用的区别

- ❌ 无 React Router（两个 state 代替）
- ❌ 无后端（Express/Next.js 等）
- ❌ 无数据库
- ❌ 无 API 服务
- ❌ 无认证系统
- ❌ 无状态管理库（仅 React Context）
- ❌ 无 CSS 框架
- ❌ 无 CI/CD 流水线（手动 deploy）
