export type Lang = 'en' | 'zh-CN' | 'zh-TW' | 'ja' | 'ko' | 'es'

export const LANGS: { key: Lang; label: string }[] = [
  { key: 'en', label: 'EN' },
  { key: 'zh-CN', label: '简中' },
  { key: 'zh-TW', label: '繁中' },
  { key: 'ja', label: '日本語' },
  { key: 'ko', label: '한국어' },
  { key: 'es', label: 'Español' },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type T = any

export const t: Record<Lang, Record<string, T>> = {
  en: {
    header: { title: 'AI Navigator', badge: 'Tool Hub' },
    sidebar: {
      overview: 'Overview',
      warehouse: 'Smart Warehousing',
      transport: 'Transport Dispatch',
      delivery: 'Last-Mile Delivery',
      prediction: 'Prediction & Decision',
      operation: 'Operations & Service',
    },
    overview: {
      title: 'Logistics · Panoramic Overview',
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
    header: { title: 'AI Navigator', badge: '工具导航' },
    sidebar: {
      overview: '总览',
      warehouse: '智能仓储',
      transport: '运输调度',
      delivery: '末端配送',
      prediction: '预测决策',
      operation: '运营客服',
    },
    overview: {
      title: '物流 · 全景总览',
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
    header: { title: 'AI Navigator', badge: '工具導航' },
    sidebar: {
      overview: '總覽',
      warehouse: '智慧倉儲',
      transport: '運輸調度',
      delivery: '末端配送',
      prediction: '預測決策',
      operation: '運營客服',
    },
    overview: {
      title: '物流 · 全景總覽',
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
  'ja': {
    header: { title: 'AI Navigator', badge: 'ツール案内' },
    sidebar: {
      overview: '概要',
      warehouse: 'スマート倉庫',
      transport: '輸送管理',
      delivery: 'ラストワンマイル',
      prediction: '予測・意思決定',
      operation: '運用・サービス',
    },
    overview: {
      title: '物流 · 全体概要',
      subtitle: '5つの核心シナリオ',
      summary: 'AIはスマート倉庫からラストワンマイル配送まで、物流チェーンのあらゆる場面に浸透しています。以下の5つのシナリオが業界を再構築しています。各エリアの主要指標を以下に示します。',
      pieTitle: 'AI投資効率分布',
      highlightsTitle: 'ベンチマーク事例一覧',
      mindmapTitle: 'モジュールマップ — 全体像',
      mindmapTip: '← サイドバーからモジュールを選択 →',
    },
    modules: {
      warehouse: {
        title: 'スマート倉庫',
        subtitle: 'コンピュータビジョン · AMR · 知的アルゴリズム',
        stats: [
          { label: '運用コスト削減', value: '20%', sub: '' },
          { label: '石炭物流容量', value: '500万トン', sub: '従来200万トン' },
          { label: 'ピッキング方式', value: 'Goods-to-Person', sub: '手動検索から置き換え' },
        ],
        cases: [
          { title: 'Goods-to-Person ピッキング', items: [
            { company: '九州通', detail: 'ロボットが棚を作業者に運び、従来の「人探し」方式を置き換え。' },
            { company: 'Amazon', detail: 'AI最適化ロボット経路、運用コスト20%削減。' },
          ]},
          { title: 'スマート運用管理', items: [
            { company: '玉湖冷鏈', detail: 'AIが冷蔵庫運用作業を管理、期限間近商品を警告。' },
            { company: '中科富創', detail: '物流LLMにより石炭物流パーク完全無人化、容量200万→500万トン。' },
          ]},
        ],
      },
      transport: {
        title: 'スマート輸送管理',
        subtitle: '意思決定AI · ルート最適化 · ビッグデータ',
        stats: [
          { label: 'トラック積載率', value: '97%', sub: '最適化前90%' },
          { label: '燃料費削減', value: '15%', sub: '' },
          { label: '日削減便数', value: '10+', sub: '香港スーパーチェーン' },
        ],
        cases: [
          { title: '動的ルート計画', items: [
            { company: '多點', detail: '知能管理システムが香港スーパーの日削減便10回以上を実現。' },
            { company: 'エクスプレス企業', detail: 'AIがリアルタイム交通データと組み合わせ最適配送ルートを計画。' },
          ]},
          { title: 'スマート積載計画', items: [
            { company: 'アクセンチュア', detail: 'AIがパレット配置を最適化、積載率90%→97%、燃料費15%削減。' },
          ]},
        ],
        chartTitle: '最適化前後比較',
      },
      delivery: {
        title: 'ラストワンマイル配送',
        subtitle: '自動運転 · ドローン技術 · スマート管理',
        stats: [
          { label: 'ドローン配送', value: '数十万件', sub: '深圳エリア' },
          { label: '配送モード', value: 'AGV+ドローン', sub: '団地/コミュニティ/コールドチェーン' },
        ],
        cases: [
          { title: '無人車配送', items: [
            { company: '多城市団地', detail: '無人車は団地・コミュニティ配送で成熟、非接触ラストワンマイルを実現。' },
          ]},
          { title: 'ドローン配送', items: [
            { company: '美団', detail: '深圳で数十万件のドローン配送を完了、地上交通制約を突破。' },
            { company: '玉湖冷鏈', detail: '成都団地でドローンコールドチェーン配送を試験運用。' },
          ]},
        ],
        chartTitle: '配送モード比較',
      },
      prediction: {
        title: '全チェーン予測・意思決定',
        subtitle: '生成AI · 機械学習 · 予測モデル',
        stats: [
          { label: '予測精度向上', value: '+40%', sub: '' },
          { label: '欠品率低減', value: '35%-45%', sub: '' },
          { label: 'リスク早期警告', value: '3-5日', sub: 'J&Tエクスプレス' },
        ],
        cases: [
          { title: '需要予測', items: [
            { company: 'アクセンチュア', detail: 'AIが販売履歴、市場動向、天候を分析、予測精度40%向上、欠品率35-45%低減。' },
            { company: '小売企業', detail: '事前在庫配置を指導、過剰在庫と欠品リスクを低減。' },
          ]},
          { title: 'サプライチェーンリスク管理', items: [
            { company: 'J&Tエクスプレス', detail: 'AIモデルがクレーム3-5日前にリスク便を特定、事前対応を可能に。' },
          ]},
        ],
        chartTitle: '従来方式 vs AI予測',
      },
      operation: {
        title: '運用・サービス',
        subtitle: '大規模言語モデル · NLP · RPA',
        stats: [
          { label: 'AI日次処理量', value: '3,000件', sub: '手動200件/日' },
          { label: 'AI精度', value: '99.99%', sub: '手動精度92%' },
          { label: '効率向上', value: '15倍', sub: 'データ入力' },
        ],
        cases: [
          { title: 'スマートデータ入力', items: [
            { company: '牛卡福', detail: 'AIが微信、表計算、画像から注文情報を自動認識。日処理3000件、精度99.99%。' },
          ]},
          { title: 'デジタル社員・スマートCS', items: [
            { company: '韻達', detail: '「小達」CSボットが自動応答、24時間365日稼働。' },
            { company: '物流企業', detail: 'AIデジタル社員が照合、請求、レポート作成を自動化。' },
          ]},
        ],
        chartTitle: '手動 vs AI 効率比較',
      },
    },
    mindmap: {
      hub: 'AI 物流',
      cases: '{n}件の事例',
    },
    overviewStats: [
      { label: '倉庫運用コスト', value: '↓20%', sub: 'Amazon AI最適化' },
      { label: 'トラック積載率', value: '97%', sub: '最適化前90%' },
      { label: 'ドローン配送', value: '10万+件', sub: '美団深圳' },
      { label: '予測精度', value: '+40%', sub: 'アクセンチュア' },
      { label: 'AIデータ入力精度', value: '99.99%', sub: '牛卡福' },
      { label: 'リスク早期警告', value: '3-5日', sub: 'J&Tエクスプレス' },
    ],
    overviewHighlights: [
      { module: 'スマート倉庫', company: '中科富創', result: '容量：200万→500万トン' },
      { module: '輸送管理', company: 'アクセンチュア', result: '積載率：90%→97%' },
      { module: 'ラストワンマイル', company: '美団ドローン', result: '深圳10万+件' },
      { module: '予測', company: 'J&Tエクスプレス', result: '3-5日前警告' },
      { module: '運用', company: '牛卡福', result: '効率15倍向上' },
    ],
  },

  "ko": {
    header: { title: "AI Navigator", badge: "도구 안내" },
    sidebar: { overview: "개요", warehouse: "스마트 창고", transport: "운송 관리", delivery: "라스트마일", prediction: "예측 · 의사결정", operation: "운영 · 서비스" },
    overview: { title: "물류 · 전체 개요", subtitle: "5가지 핵심 시나리오", summary: "AI는 물류 체인의 모든 부분에 깊이 침투했습니다.", pieTitle: "AI 투자 효율 분포", highlightsTitle: "벤치마크 사례", mindmapTitle: "모듈 맵", mindmapTip: "← 사이드바에서 선택" },
    modules: {
      warehouse: { title: "스마트 창고", subtitle: "CV · AMR · 알고리즘", stats: [{ label: "비용 절감", value: "20%", sub: "" }, { label: "용량", value: "500만 톤", sub: "기존 200만" }, { label: "피킹", value: "Goods-to-Person", sub: "" }], cases: [{ title: "피킹", items: [{ company: "九州通", detail: "로봇이 선반 운반." }, { company: "Amazon", detail: "비용 20% 절감." }] }] },
      transport: { title: "스마트 운송", subtitle: "AI · 경로 · 빅데이터", stats: [{ label: "적재율", value: "97%", sub: "전 90%" }, { label: "연료비", value: "↓15%", sub: "" }, { label: "감축", value: "10+회/일", sub: "홍콩" }], cases: [{ title: "경로 계획", items: [{ company: "多點", detail: "일 10회 감축." }, { company: "택배", detail: "AI 최적 경로." }] }], chartTitle: "전후 비교" },
      delivery: { title: "라스트마일", subtitle: "자율주행 · 드론", stats: [{ label: "드론 배송", value: "수십만 건", sub: "선전" }, { label: "모드", value: "AGV+드론", sub: "단지" }], cases: [{ title: "무인차", items: [{ company: "다수 도시", detail: "성숙 단계." }] }, { title: "드론", items: [{ company: "美團", detail: "수십만 건." }] }], chartTitle: "모드 비교" },
      prediction: { title: "예측 · 의사결정", subtitle: "생성AI · ML", stats: [{ label: "예측 정확도", value: "+40%", sub: "" }, { label: "결품률", value: "↓35-45%", sub: "" }, { label: "조기 경고", value: "3-5일", sub: "J&T" }], cases: [{ title: "수요 예측", items: [{ company: "Accenture", detail: "정확도 +40%." }] }, { title: "리스크", items: [{ company: "J&T", detail: "3-5일 전 식별." }] }], chartTitle: "전통 vs AI" },
      operation: { title: "운영 · 서비스", subtitle: "LLM · NLP · RPA", stats: [{ label: "일일 처리", value: "3,000건", sub: "수동 200" }, { label: "정확도", value: "99.99%", sub: "수동 92%" }, { label: "효율", value: "15배", sub: "" }], cases: [{ title: "데이터 입력", items: [{ company: "牛卡福", detail: "AI 자동 인식." }] }, { title: "디지털 직원", items: [{ company: "韻達", detail: "CS 봇 24/7." }] }], chartTitle: "수동 vs AI" },
    },
    mindmap: { hub: "AI 물류", cases: "{n}개 사례" },
    overviewStats: [{ label: "창고 비용", value: "↓20%", sub: "Amazon" }, { label: "적재율", value: "97%", sub: "전 90%" }, { label: "드론", value: "10만+건", sub: "美團" }, { label: "예측", value: "+40%", sub: "Accenture" }, { label: "정확도", value: "99.99%", sub: "牛卡福" }, { label: "경고", value: "3-5일", sub: "J&T" }],
    overviewHighlights: [{ module: "창고", company: "中科富創", result: "200만→500만 톤" }, { module: "운송", company: "Accenture", result: "90%→97%" }, { module: "라스트마일", company: "美團", result: "10만+건" }, { module: "예측", company: "J&T", result: "3-5일" }, { module: "운영", company: "牛卡福", result: "15배" }],
  },
  "es": {
    header: { title: "AI Navigator", badge: "Guía de herramientas" },
    sidebar: { overview: "Visión general", warehouse: "Almacén", transport: "Transporte", delivery: "Última milla", prediction: "Predicción", operation: "Operaciones" },
    overview: { title: "Logística · Panorama", subtitle: "5 escenarios clave", summary: "IA integrada en toda la cadena logística.", pieTitle: "Inversión IA", highlightsTitle: "Casos", mindmapTitle: "Mapa", mindmapTip: "← Seleccione" },
    modules: {
      warehouse: { title: "Almacén inteligente", subtitle: "Visión · AMR · Algoritmos", stats: [{ label: "Reducción costes", value: "20%", sub: "" }, { label: "Capacidad", value: "5M ton", sub: "antes 2M" }, { label: "Picking", value: "G2P", sub: "" }], cases: [{ title: "Picking", items: [{ company: "九州通", detail: "Robots llevan estantes." }, { company: "Amazon", detail: "Costes -20%." }] }] },
      transport: { title: "Transporte inteligente", subtitle: "IA · Rutas · Big Data", stats: [{ label: "Carga", value: "97%", sub: "antes 90%" }, { label: "Combustible", value: "↓15%", sub: "" }, { label: "Viajes", value: "10+/día", sub: "HK" }], cases: [{ title: "Rutas", items: [{ company: "多點", detail: "10+ viajes menos." }, { company: "Mensajería", detail: "Rutas óptimas." }] }], chartTitle: "Antes vs Después" },
      delivery: { title: "Última milla", subtitle: "Autónomo · Drones", stats: [{ label: "Entregas dron", value: "100K+", sub: "Shenzhen" }, { label: "Modos", value: "AGV+Dron", sub: "Parques" }], cases: [{ title: "Autónomo", items: [{ company: "Ciudades", detail: "Maduro." }] }, { title: "Dron", items: [{ company: "美團", detail: "100K+." }] }], chartTitle: "Comparativa" },
      prediction: { title: "Predicción", subtitle: "IA · ML", stats: [{ label: "Precisión", value: "+40%", sub: "" }, { label: "Rotura stock", value: "↓35-45%", sub: "" }, { label: "Alerta", value: "3-5 días", sub: "J&T" }], cases: [{ title: "Demanda", items: [{ company: "Accenture", detail: "Precisión +40%." }] }, { title: "Riesgos", items: [{ company: "J&T", detail: "Alerta 3-5 días." }] }], chartTitle: "Tradicional vs IA" },
      operation: { title: "Operaciones", subtitle: "LLM · NLP · RPA", stats: [{ label: "Volumen", value: "3,000/día", sub: "Manual 200" }, { label: "Precisión", value: "99.99%", sub: "Manual 92%" }, { label: "Eficiencia", value: "15×", sub: "" }], cases: [{ title: "Ingreso", items: [{ company: "牛卡福", detail: "IA reconoce pedidos." }] }, { title: "Digital", items: [{ company: "韻達", detail: "Bot CS 24/7." }] }], chartTitle: "Manual vs IA" },
    },
    mindmap: { hub: "IA Logística", cases: "{n} casos" },
    overviewStats: [{ label: "Coste almacén", value: "↓20%", sub: "Amazon" }, { label: "Carga", value: "97%", sub: "antes 90%" }, { label: "Dron", value: "100K+", sub: "美團" }, { label: "Precisión", value: "+40%", sub: "Accenture" }, { label: "Precisión IA", value: "99.99%", sub: "牛卡福" }, { label: "Alerta", value: "3-5 días", sub: "J&T" }],
    overviewHighlights: [{ module: "Almacén", company: "中科富創", result: "2M→5M ton" }, { module: "Transporte", company: "Accenture", result: "90%→97%" }, { module: "Última milla", company: "美團", result: "100K+" }, { module: "Predicción", company: "J&T", result: "3-5 días" }, { module: "Operaciones", company: "牛卡福", result: "15×" }],
  }

}