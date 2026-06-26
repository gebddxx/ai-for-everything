# 🌐 AI for Everything

> AI Empowering Every Industry — a panoramic data dashboard showcasing AI applications across logistics, healthcare, education, finance, manufacturing, agriculture, and beyond.

## ✨ Live Demo

**[gebddxx.github.io/ai-for-everything](https://gebddxx.github.io/ai-for-everything/)**

## 📦 Domains

| Domain | Status |
|:---|:---|
| 📦 AI Logistics | ✅ Live — 6 sub-modules with full data |
| 🏥 AI Healthcare | 🚧 Planned |
| 📚 AI Education | 🚧 Planned |
| 💰 AI Finance | 🚧 Planned |
| 🏗️ AI Manufacturing | 🚧 Planned |
| 🌾 AI Agriculture | 🚧 Planned |

## ✨ Features

- 🌐 **Multi-Domain Hub** — One dashboard for all AI industry verticals
- 🏭 **AI Logistics** — Smart warehousing, transport dispatch, last-mile delivery, demand forecasting, operations automation
- 🌙 **Dark Mode** — One-click toggle with preference saved
- 🌍 **i18n** — English / 简体中文 / 繁體中文 with one-click switch
- 📊 **Charts** — Bar charts, pie charts, and mind maps (Recharts)
- 📱 **Responsive** — Desktop / tablet / mobile
- 🧭 **Breadcrumb** — Always know where you are
- 📂 **Tree Sidebar** — Expandable domain/sub-module navigation

## 🛠 Tech Stack

| Category | Tech |
|:---|:---|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Charts | Recharts |
| Styling | CSS Modules + CSS Variables |
| i18n | Custom context-based (no extra deps) |
| Deployment | GitHub Pages |

## 🚀 Getting Started

```bash
npm install
npm run dev        # → http://localhost:5173
```

## 📦 Deploy

```bash
npm run deploy     # builds and pushes to gh-pages
```

## 📁 Project Structure

```
ai-for-everything/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── README.md
└── src/
    ├── main.tsx
    ├── App.tsx                       # Router: Home + domain pages
    ├── App.module.css                # Global styles + CSS variables
    ├── contexts/
    │   ├── ThemeContext.tsx           # Dark/light theme
    │   └── LanguageContext.tsx        # i18n (en / zh-CN / zh-TW)
    ├── i18n/
    │   └── translations.ts           # All UI strings in 3 languages
    ├── data/
    │   ├── domains.ts                # 6 domains + sub-module definitions
    │   └── logistics.ts              # Logistics stats & charts data
    ├── components/
    │   ├── Header.tsx                # Title bar + lang + theme toggles
    │   ├── Sidebar.tsx               # Tree-style expandable navigation
    │   ├── Breadcrumb.tsx            # Home > Domain > Page trail
    │   ├── StatCard.tsx              # Metric card
    │   ├── BarChart.tsx              # Bar chart (Recharts)
    │   ├── PieChart.tsx              # Ring chart (Recharts)
    │   └── MindMap.tsx               # CSS mind map for overview
    └── pages/
        ├── Home.tsx                  # AI for Everything landing page
        ├── Overview.tsx              # Logistics overview dashboard
        ├── Warehouse.tsx             # Smart Warehousing
        ├── Transport.tsx             # Transport Dispatch
        ├── Delivery.tsx              # Last-Mile Delivery
        ├── Prediction.tsx            # Prediction & Decision
        ├── Operation.tsx             # Operations & Service
        └── DomainPlaceholder.tsx     # Placeholder for planned domains
```

## 🧩 Adding a New Domain

1. Add entry in `src/data/domains.ts` with `key`, `title`, `icon`, `desc`, `color`, `subModules`
2. Create pages under `src/pages/<domain>/` (or use `DomainPlaceholder`)
3. Add routing in `App.tsx` if custom pages needed
4. Deploy — done!

## 📄 License

MIT
