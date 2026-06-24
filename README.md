# 📦 AI Logistics Dashboard

> Visualizing AI applications across five core logistics scenarios — data-driven insights at a glance.

## ✨ Features

- 🏠 **Overview** — Key metrics summary + ring chart + benchmark cases
- 🏭 **Smart Warehousing** — Goods-to-person picking, smart ops management, 20% cost reduction
- 🚛 **Smart Transport Dispatch** — Dynamic route planning, smart load planning, load rate 90%→97%
- 🚁 **Last-Mile Delivery** — AGV + drone delivery, 100K+ orders validated
- 📊 **Prediction & Decision** — Demand forecasting + supply chain risk control, accuracy +40%
- 🤖 **Operations & Service** — Intelligent order entry + digital employees, 15× efficiency gain
- 🌙 **Dark Mode** — One-click toggle with preference saved
- 📱 **Responsive** — Desktop / tablet / mobile

## 🛠 Tech Stack

| Category | Tech |
|:---|:---|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Charts | Recharts |
| Styling | CSS Modules + CSS Variables (dark theme) |
| Deployment | GitHub Pages |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:5173
```

## 📦 Deploy

```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
ai-logistics/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── README.md
├── rdm.md                          # Original research document (Chinese)
└── src/
    ├── main.tsx                    # Entry point
    ├── App.tsx                     # Layout + theme provider
    ├── App.module.css              # Global styles + CSS variables
    ├── contexts/
    │   └── ThemeContext.tsx         # Dark/light theme context
    ├── data/
    │   └── logistics.ts            # Structured data (English)
    ├── components/
    │   ├── Header.tsx              # Top bar + theme toggle
    │   ├── Sidebar.tsx             # Side navigation
    │   ├── StatCard.tsx            # Metric card
    │   ├── BarChart.tsx            # Bar chart wrapper
    │   └── PieChart.tsx            # Ring chart wrapper
    └── pages/
        ├── Overview.tsx            # Dashboard home
        ├── Warehouse.tsx           # Smart Warehousing
        ├── Transport.tsx           # Smart Transport Dispatch
        ├── Delivery.tsx            # Last-Mile Delivery
        ├── Prediction.tsx          # Prediction & Decision
        └── Operation.tsx           # Operations & Service
```

## 📊 Data Source

Based on [rdm.md](rdm.md) — a research report on AI in logistics, covering cases from Amazon, Meituan, J&T Express, Accenture, Niukafu, and more.

## 📄 License

MIT
