export type Lang = 'en' | 'zh-CN' | 'zh-TW'

export const LANGS: { key: Lang; label: string }[] = [
  { key: 'en', label: 'EN' },
  { key: 'zh-CN', label: '简中' },
  { key: 'zh-TW', label: '繁中' },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type T = any

export const t: Record<Lang, Record<string, T>> = {
  en: {
    header: { title: 'AI for Everything', badge: 'AI-Powered' },
    sidebar: {
      overview: 'Overview',
      warehouse: 'Smart Warehousing',
      transport: 'Transport Dispatch',
      delivery: 'Last-Mile Delivery',
      prediction: 'Prediction & Decision',
      operation: 'Operations & Service',
    },
    overview: {
      title: 'AI Logistics · Panoramic Overview',
      subtitle: 'Five Core Scenarios',
      summary: 'AI is deeply embedded across the logistics chain — from smart warehousing to last-mile delivery. These five scenarios are reshaping the entire industry. Below is a summary of key metrics from each area.',
      pieTitle: 'AI Investment Efficiency Distribution',
      highlightsTitle: 'Benchmark Cases at a Glance',
      mindmapTitle: 'Module Map — How It All Connects',
      mindmapTip: '← Select a module from the sidebar to explore full details →',
    },
    modules: {
      warehouse: {
        title: 'Smart Warehousing',
        subtitle: 'Computer Vision · AMR · Intelligent Algorithms',
        stats: [
          { label: 'Op Cost Reduction', value: '20%', sub: '' },
          { label: 'Coal Logistics Capacity', value: '5M tons', sub: 'was 2M tons' },
          { label: 'Picking Model', value: 'Goods-to-Person', sub: 'Replaced manual search' },
        ],
        cases: [
          {
            title: 'Goods-to-Person Picking',
            items: [
              { company: 'JD Health', detail: 'Robots bring shelves to pickers, replacing the traditional person-to-goods model in pharmaceutical logistics.' },
              { company: 'Amazon', detail: 'AI-optimized robot routing reduced operational costs by 20%.' },
            ],
          },
          {
            title: 'Smart Operations Management',
            items: [
              { company: 'Yuhu Cold Chain', detail: 'AI schedules cold storage ops and alerts on near-expiry goods, ensuring cold chain quality.' },
              { company: 'Zhongke Fuchuang', detail: 'Logistics LLM achieved fully unmanned coal logistics park, scaling capacity from 2M to nearly 5M tons.' },
            ],
          },
        ],
      },
      transport: {
        title: 'Smart Transport Dispatch',
        subtitle: 'Decision AI · Route Optimization · Big Data Analytics',
        stats: [
          { label: 'Truck Load Rate', value: '97%', sub: 'was 90% before' },
          { label: 'Fuel Cost Reduction', value: '15%', sub: '' },
          { label: 'Daily Trips Saved', value: '10+', sub: 'HK supermarket chain' },
        ],
        cases: [
          {
            title: 'Dynamic Route Planning',
            items: [
              { company: 'Dmall', detail: 'Intelligent dispatch helped a Hong Kong supermarket chain reduce 10+ trips per day.' },
              { company: 'Express/Retail', detail: 'AI combines real-time traffic data to plan optimal delivery routes.' },
            ],
          },
          {
            title: 'Smart Load Planning',
            items: [
              { company: 'Accenture', detail: 'AI optimizes pallet loading layouts — load rate up from 90% to 97%, fuel costs down 15%.' },
            ],
          },
        ],
        chartTitle: 'Before vs After Comparison',
      },
      delivery: {
        title: 'Last-Mile Delivery',
        subtitle: 'Autonomous Driving · Drone Tech · Smart Dispatch',
        stats: [
          { label: 'Drone Orders', value: '100K+', sub: 'Shenzhen area' },
          { label: 'Delivery Modes', value: 'AGV + Drone', sub: 'Parks / Communities / Cold Chain' },
        ],
        cases: [
          {
            title: 'Autonomous Vehicle Delivery',
            items: [
              { company: 'Multiple City Parks', detail: 'AGVs are now mature for campus and community delivery, enabling contactless last-mile handoff.' },
            ],
          },
          {
            title: 'Drone Delivery',
            items: [
              { company: 'Meituan', detail: 'Completed 100K+ drone food deliveries in Shenzhen, bypassing ground traffic.' },
              { company: 'Yuhu Cold Chain', detail: 'Piloted drone cold-chain delivery at Chengdu campus — fresh produce delivered by air.' },
            ],
          },
        ],
        chartTitle: 'Delivery Mode Coverage Comparison',
      },
      prediction: {
        title: 'Prediction & Decision',
        subtitle: 'Generative AI · ML · Forecasting Models',
        stats: [
          { label: 'Forecast Accuracy Gain', value: '+40%', sub: '' },
          { label: 'Stockout Rate Drop', value: '35%-45%', sub: '' },
          { label: 'Risk Early Warning', value: '3-5 days', sub: 'J&T Express' },
        ],
        cases: [
          {
            title: 'Demand Forecasting',
            items: [
              { company: 'Accenture', detail: 'AI analyzes sales history, market trends, and weather — forecast accuracy +40%, stockout rate -35%~45%.' },
              { company: 'Retail Enterprises', detail: 'Pre-position inventory across warehouses to reduce both overstock and stockout risks.' },
            ],
          },
          {
            title: 'Supply Chain Risk Control',
            items: [
              { company: 'J&T Express', detail: 'AI model identifies at-risk shipments 3-5 days before customer complaints, enabling proactive intervention.' },
            ],
          },
        ],
        chartTitle: 'Traditional vs AI-Powered Comparison',
      },
      operation: {
        title: 'Operations & Service',
        subtitle: 'LLM · NLP · RPA',
        stats: [
          { label: 'AI Daily Throughput', value: '3,000 orders', sub: 'Manual: 200/day' },
          { label: 'AI Accuracy', value: '99.99%', sub: 'Manual: 92%' },
          { label: 'Efficiency Gain', value: '15×', sub: 'Order entry scenario' },
        ],
        cases: [
          {
            title: 'Intelligent Order Entry',
            items: [
              { company: 'Niukafu', detail: 'AI auto-recognizes orders from WeChat, spreadsheets, and images — 3K orders/day at 99.99% accuracy vs. manual 200/day at 92%.' },
            ],
          },
          {
            title: 'Digital Employees & Smart CS',
            items: [
              { company: 'Yunda', detail: '"Xiaoda" CS bot understands and responds to inquiries automatically, 24/7.' },
              { company: 'Logistics Enterprises', detail: 'AI digital employees automate reconciliation, invoicing, and reporting tasks.' },
            ],
          },
        ],
        chartTitle: 'Manual vs AI Efficiency Comparison',
      },
    },
    mindmap: {
      hub: 'AI LOGISTICS',
      cases: '{n} key cases',
    },
    overviewStats: [
      { label: 'Warehouse Op Cost', value: '↓20%', sub: 'Amazon AI' },
      { label: 'Truck Load Rate', value: '97%', sub: 'Up from 90%' },
      { label: 'Drone Deliveries', value: '100K+', sub: 'Meituan Shenzhen' },
      { label: 'Forecast Accuracy', value: '+40%', sub: 'Accenture' },
      { label: 'AI Entry Accuracy', value: '99.99%', sub: 'Niukafu' },
      { label: 'Risk Early Warning', value: '3-5 days', sub: 'J&T Express' },
    ],
    overviewHighlights: [
      { module: 'Smart Warehouse', company: 'Zhongke Fuchuang', result: 'Capacity: 2M → 5M tons' },
      { module: 'Transport', company: 'Accenture', result: 'Load rate: 90% → 97%' },
      { module: 'Last-Mile', company: 'Meituan Drones', result: '100K+ orders in Shenzhen' },
      { module: 'Prediction', company: 'J&T Express', result: '3-5 day early warning' },
      { module: 'Operations', company: 'Niukafu', result: '15× efficiency gain' },
    ],
  },

  'zh-CN': {
    header: { title: 'AI for Everything', badge: 'AI驱动' },
    sidebar: {
      overview: '总览',
      warehouse: '智能仓储',
      transport: '运输调度',
      delivery: '末端配送',
      prediction: '预测决策',
      operation: '运营客服',
    },
    overview: {
      title: 'AI物流 · 全景总览',
      subtitle: '五大核心场景',
      summary: 'AI已深入物流链条各个环节——从智能仓储到最后一公里配送，五大场景正在重塑整个行业。以下是各环节关键指标汇总。',
      pieTitle: 'AI投入效能分布',
      highlightsTitle: '标杆案例速览',
      mindmapTitle: '模块导图 — 全景一览',
      mindmapTip: '← 从侧边栏选择模块查看详细信息 →',
    },
    modules: {
      warehouse: {
        title: '智能仓储',
        subtitle: '计算机视觉 · AMR · 智能算法',
        stats: [
          { label: '运营成本降低', value: '20%', sub: '' },
          { label: '煤炭物流运能', value: '500万吨', sub: '原200万吨' },
          { label: '拣选模式', value: '货到人', sub: '替代传统人找货' },
        ],
        cases: [
          {
            title: '货到人拣选',
            items: [
              { company: '九州通', detail: '机器人把货架搬到分拣员面前，替代了传统的"人找货"模式。' },
              { company: '亚马逊', detail: 'AI优化机器人路径，运营成本降低20%。' },
            ],
          },
          {
            title: '智能运营管理',
            items: [
              { company: '玉湖冷链', detail: 'AI调度冷库作业、预警临期商品，保障冷链品质。' },
              { company: '中科富创', detail: '物流大模型让煤炭物流园实现全程无人化，运能从200万吨跃升至近500万吨。' },
            ],
          },
        ],
      },
      transport: {
        title: '智能运输调度',
        subtitle: '决策式AI · 路径优化 · 大数据分析',
        stats: [
          { label: '卡车装载率', value: '97%', sub: '优化前90%' },
          { label: '燃油成本降低', value: '15%', sub: '' },
          { label: '每日减少车次', value: '10+', sub: '香港某连锁超市' },
        ],
        cases: [
          {
            title: '动态路线规划',
            items: [
              { company: '多点', detail: '智能调度系统帮助香港某连锁超市每天减少10趟以上车次。' },
              { company: '快递/零售企业', detail: 'AI结合实时路况为车辆规划最优配送路线。' },
            ],
          },
          {
            title: '智能配载与装车',
            items: [
              { company: '埃森哲', detail: 'AI优化货物托盘摆放方案，卡车装载率从90%提升至97%，降低15%燃油成本。' },
            ],
          },
        ],
        chartTitle: '优化前后对比',
      },
      delivery: {
        title: '最后一公里配送',
        subtitle: '自动驾驶 · 无人机技术 · 智能调度',
        stats: [
          { label: '无人机配送', value: '数十万单', sub: '深圳区域' },
          { label: '配送模式', value: '无人车+无人机', sub: '园区/社区/冷链' },
        ],
        cases: [
          {
            title: '无人车配送',
            items: [
              { company: '多城市园区', detail: '无人车在园区、社区配送已较为成熟，实现非接触式末端交付。' },
            ],
          },
          {
            title: '无人机配送',
            items: [
              { company: '美团', detail: '在深圳完成数十万单无人机外卖配送，突破地面交通限制。' },
              { company: '玉湖冷链', detail: '在成都园区探索无人机冷链配送场景，生鲜直达。' },
            ],
          },
        ],
        chartTitle: '配送模式覆盖场景对比',
      },
      prediction: {
        title: '全链路预测与决策',
        subtitle: '生成式AI · 机器学习 · 预测模型',
        stats: [
          { label: '预测准确率提升', value: '+40%', sub: '' },
          { label: '缺货率降低', value: '35%-45%', sub: '' },
          { label: '风控提前预警', value: '3-5天', sub: '极兔速递' },
        ],
        cases: [
          {
            title: '需求预测',
            items: [
              { company: '埃森哲', detail: 'AI分析历史销售、市场趋势、天气等数据，预测准确率提高40%，缺货率降低35%-45%。' },
              { company: '零售企业', detail: '提前指导商家备货分仓，降低库存积压和断货风险。' },
            ],
          },
          {
            title: '供应链风控',
            items: [
              { company: '极兔速递', detail: 'AI模型能在客户投诉前3-5天就识别出有风险的运单，提前介入处理。' },
            ],
          },
        ],
        chartTitle: '传统方式 vs AI预测 对比',
      },
      operation: {
        title: '运营与客服',
        subtitle: '大语言模型 · NLP · RPA',
        stats: [
          { label: 'AI日处理量', value: '3,000单', sub: '人工仅200单/天' },
          { label: 'AI准确率', value: '99.99%', sub: '人工准确率92%' },
          { label: '效率提升', value: '15倍', sub: '录单场景' },
        ],
        cases: [
          {
            title: '智能录单',
            items: [
              { company: '牛卡福', detail: 'AI自动识别微信、表格、图片中的订单信息并录入，日处理3000单、准确率99.99%；人工仅200单、准确率92%。' },
            ],
          },
          {
            title: '数字员工与智能客服',
            items: [
              { company: '韵达', detail: '"小达"客服机器人自动理解和应答客户问题，7×24小时在线。' },
              { company: '物流企业', detail: 'AI数字员工自动完成对账、开票、报表等重复性工作。' },
            ],
          },
        ],
        chartTitle: '人工 vs AI 效率对比',
      },
    },
    mindmap: {
      hub: 'AI 物流',
      cases: '{n}个案例',
    },
    overviewStats: [
      { label: '仓储运营成本', value: '↓20%', sub: '亚马逊AI优化' },
      { label: '卡车装载率', value: '97%', sub: '优化前90%' },
      { label: '无人机配送', value: '10万+单', sub: '美团深圳' },
      { label: '预测准确率', value: '+40%', sub: '埃森哲' },
      { label: 'AI录单准确率', value: '99.99%', sub: '牛卡福' },
      { label: '风控提前预警', value: '3-5天', sub: '极兔速递' },
    ],
    overviewHighlights: [
      { module: '智能仓储', company: '中科富创', result: '运能：200万→500万吨' },
      { module: '运输调度', company: '埃森哲', result: '装载率：90%→97%' },
      { module: '末端配送', company: '美团无人机', result: '深圳完成10万+单' },
      { module: '预测决策', company: '极兔速递', result: '提前3-5天预警' },
      { module: '运营客服', company: '牛卡福', result: '效率提升15倍' },
    ],
  },

  'zh-TW': {
    header: { title: 'AI for Everything', badge: 'AI驅動' },
    sidebar: {
      overview: '總覽',
      warehouse: '智慧倉儲',
      transport: '運輸調度',
      delivery: '末端配送',
      prediction: '預測決策',
      operation: '運營客服',
    },
    overview: {
      title: 'AI物流 · 全景總覽',
      subtitle: '五大核心場景',
      summary: 'AI已深入物流鏈條各個環節——從智慧倉儲到最後一公里配送，五大場景正在重塑整個行業。以下是各環節關鍵指標彙總。',
      pieTitle: 'AI投入效能分佈',
      highlightsTitle: '標杆案例速覽',
      mindmapTitle: '模組導圖 — 全景一覽',
      mindmapTip: '← 從側邊欄選擇模組查看詳細資訊 →',
    },
    modules: {
      warehouse: {
        title: '智慧倉儲',
        subtitle: '電腦視覺 · AMR · 智慧演算法',
        stats: [
          { label: '運營成本降低', value: '20%', sub: '' },
          { label: '煤炭物流運能', value: '500萬噸', sub: '原200萬噸' },
          { label: '揀選模式', value: '貨到人', sub: '替代傳統人找貨' },
        ],
        cases: [
          {
            title: '貨到人揀選',
            items: [
              { company: '九州通', detail: '機器人把貨架搬到分揀員面前，替代了傳統的「人找貨」模式。' },
              { company: '亞馬遜', detail: 'AI優化機器人路徑，運營成本降低20%。' },
            ],
          },
          {
            title: '智慧運營管理',
            items: [
              { company: '玉湖冷鏈', detail: 'AI調度冷庫作業、預警臨期商品，保障冷鏈品質。' },
              { company: '中科富創', detail: '物流大模型讓煤炭物流園實現全程無人化，運能從200萬噸躍升至近500萬噸。' },
            ],
          },
        ],
      },
      transport: {
        title: '智慧運輸調度',
        subtitle: '決策式AI · 路徑優化 · 大數據分析',
        stats: [
          { label: '卡車裝載率', value: '97%', sub: '優化前90%' },
          { label: '燃油成本降低', value: '15%', sub: '' },
          { label: '每日減少車次', value: '10+', sub: '香港某連鎖超市' },
        ],
        cases: [
          {
            title: '動態路線規劃',
            items: [
              { company: '多點', detail: '智慧調度系統幫助香港某連鎖超市每天減少10趟以上車次。' },
              { company: '快遞/零售企業', detail: 'AI結合即時路況為車輛規劃最優配送路線。' },
            ],
          },
          {
            title: '智慧配載與裝車',
            items: [
              { company: '埃森哲', detail: 'AI優化貨物托盤擺放方案，卡車裝載率從90%提升至97%，降低15%燃油成本。' },
            ],
          },
        ],
        chartTitle: '優化前後對比',
      },
      delivery: {
        title: '最後一公里配送',
        subtitle: '自動駕駛 · 無人機技術 · 智慧調度',
        stats: [
          { label: '無人機配送', value: '數十萬單', sub: '深圳區域' },
          { label: '配送模式', value: '無人車+無人機', sub: '園區/社區/冷鏈' },
        ],
        cases: [
          {
            title: '無人車配送',
            items: [
              { company: '多城市園區', detail: '無人車在園區、社區配送已較為成熟，實現非接觸式末端交付。' },
            ],
          },
          {
            title: '無人機配送',
            items: [
              { company: '美團', detail: '在深圳完成數十萬單無人機外賣配送，突破地面交通限制。' },
              { company: '玉湖冷鏈', detail: '在成都園區探索無人機冷鏈配送場景，生鮮直達。' },
            ],
          },
        ],
        chartTitle: '配送模式覆蓋場景對比',
      },
      prediction: {
        title: '全鏈路預測與決策',
        subtitle: '生成式AI · 機器學習 · 預測模型',
        stats: [
          { label: '預測準確率提升', value: '+40%', sub: '' },
          { label: '缺貨率降低', value: '35%-45%', sub: '' },
          { label: '風控提前預警', value: '3-5天', sub: '極兔速遞' },
        ],
        cases: [
          {
            title: '需求預測',
            items: [
              { company: '埃森哲', detail: 'AI分析歷史銷售、市場趨勢、天氣等資料，預測準確率提高40%，缺貨率降低35%-45%。' },
              { company: '零售企業', detail: '提前指導商家備貨分倉，降低庫存積壓和斷貨風險。' },
            ],
          },
          {
            title: '供應鏈風控',
            items: [
              { company: '極兔速遞', detail: 'AI模型能在客戶投訴前3-5天就識別出有風險的運單，提前介入處理。' },
            ],
          },
        ],
        chartTitle: '傳統方式 vs AI預測 對比',
      },
      operation: {
        title: '運營與客服',
        subtitle: '大語言模型 · NLP · RPA',
        stats: [
          { label: 'AI日處理量', value: '3,000單', sub: '人工僅200單/天' },
          { label: 'AI準確率', value: '99.99%', sub: '人工準確率92%' },
          { label: '效率提升', value: '15倍', sub: '錄單場景' },
        ],
        cases: [
          {
            title: '智慧錄單',
            items: [
              { company: '牛卡福', detail: 'AI自動識別微信、表格、圖片中的訂單資訊並錄入，日處理3000單、準確率99.99%；人工僅200單、準確率92%。' },
            ],
          },
          {
            title: '數位員工與智慧客服',
            items: [
              { company: '韻達', detail: '「小達」客服機器人自動理解和應答客戶問題，7×24小時線上。' },
              { company: '物流企業', detail: 'AI數位員工自動完成對帳、開票、報表等重複性工作。' },
            ],
          },
        ],
        chartTitle: '人工 vs AI 效率對比',
      },
    },
    mindmap: {
      hub: 'AI 物流',
      cases: '{n}個案例',
    },
    overviewStats: [
      { label: '倉儲運營成本', value: '↓20%', sub: '亞馬遜AI優化' },
      { label: '卡車裝載率', value: '97%', sub: '優化前90%' },
      { label: '無人機配送', value: '10萬+單', sub: '美團深圳' },
      { label: '預測準確率', value: '+40%', sub: '埃森哲' },
      { label: 'AI錄單準確率', value: '99.99%', sub: '牛卡福' },
      { label: '風控提前預警', value: '3-5天', sub: '極兔速遞' },
    ],
    overviewHighlights: [
      { module: '智慧倉儲', company: '中科富創', result: '運能：200萬→500萬噸' },
      { module: '運輸調度', company: '埃森哲', result: '裝載率：90%→97%' },
      { module: '末端配送', company: '美團無人機', result: '深圳完成10萬+單' },
      { module: '預測決策', company: '極兔速遞', result: '提前3-5天預警' },
      { module: '運營客服', company: '牛卡福', result: '效率提升15倍' },
    ],
  },
}
