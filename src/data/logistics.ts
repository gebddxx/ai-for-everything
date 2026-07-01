// Structured data extracted from rdm.md
export interface StatItem {
  label: string;
  value: string;
  sub?: string;
  trend?: 'up' | 'down';
}
export interface CaseCard {
  title: string;
  items: { company: string; detail: string }[];
}
export interface ChartData {
  name: string;
  [key: string]: string | number;
}
export interface PageData {
  title: string;
  subtitle: string;
  icon: string;
  stats: StatItem[];
  cases: CaseCard[];
  chart?: {
    data: ChartData[];
    bars: { key: string; label: string; color: string }[];
  };
}
export const pages: Record<string, PageData> = {
  warehouse: {
    title: 'Smart Warehousing',
    subtitle: 'Computer Vision · AMR · Intelligent Algorithms',
    icon: '🏭',
    stats: [
      { label: 'Op Cost Reduction', value: '20%', trend: 'down' },
      { label: 'Coal Logistics Capacity', value: '5M tons', sub: 'was 2M tons', trend: 'up' },
      { label: 'JD Health Picking', value: '"Goods-to-Person"', sub: 'Replaced manual search' },
    ],
    cases: [
      {
        title: 'Goods-to-Person Picking',
        items: [
          { company: 'JD Health (九州通)', detail: 'Robots bring shelves to pickers, replacing the traditional "person-to-goods" model in pharmaceutical logistics.' },
          { company: 'Amazon', detail: 'AI-optimized robot routing reduced operational costs by 20%.' },
        ],
      },
      {
        title: 'Smart Operations Management',
        items: [
          { company: 'Yuhu Cold Chain (玉湖冷链)', detail: 'AI schedules cold storage operations and alerts on near-expiry goods, ensuring cold chain quality.' },
          { company: 'Zhongke Fuchuang (中科富创)', detail: 'Logistics LLM achieved fully unmanned coal logistics park, scaling capacity from 2M to nearly 5M tons.' },
        ],
      },
    ],
  },
  transport: {
    title: 'Smart Transport Dispatch',
    subtitle: 'Decision AI · Route Optimization · Big Data Analytics',
    icon: '🚛',
    stats: [
      { label: 'Truck Load Rate', value: '97%', sub: 'was 90% before', trend: 'up' },
      { label: 'Fuel Cost Reduction', value: '15%', trend: 'down' },
      { label: 'Daily Trips Saved', value: '10+', sub: 'HK supermarket chain', trend: 'down' },
    ],
    cases: [
      {
        title: 'Dynamic Route Planning',
        items: [
          { company: 'Dmall (多点)', detail: 'Intelligent dispatch system helped a Hong Kong supermarket chain reduce 10+ trips per day.' },
          { company: 'Express/Retail Companies', detail: 'AI combines real-time traffic data to plan optimal delivery routes.' },
        ],
      },
      {
        title: 'Smart Load Planning',
        items: [
          { company: 'Accenture', detail: 'AI optimizes pallet loading layouts — truck load rate up from 90% to 97%, fuel costs down 15%.' },
        ],
      },
    ],
    chart: {
      data: [
        { name: 'Load Rate (%)', Before: 90, After: 97 },
        { name: 'Fuel Cost Index', Before: 100, After: 85 },
      ],
      bars: [
        { key: 'Before', label: 'Before', color: '#94a3b8' },
        { key: 'After', label: 'After', color: '#3b82f6' },
      ],
    },
  },
  delivery: {
    title: 'Last-Mile Delivery',
    subtitle: 'Autonomous Driving · Drone Tech · Smart Dispatch',
    icon: '🚁',
    stats: [
      { label: 'Meituan Drone Orders', value: 'Hundreds of thousands', sub: 'Shenzhen area' },
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
          { company: 'Meituan (美团)', detail: 'Completed hundreds of thousands of drone food deliveries in Shenzhen, bypassing ground traffic.' },
          { company: 'Yuhu Cold Chain (玉湖冷链)', detail: 'Piloted drone cold-chain delivery at Chengdu campus — fresh produce delivered by air.' },
        ],
      },
    ],
    chart: {
      data: [
        { name: 'AGV', 'Scenarios': 3 },
        { name: 'Drone', 'Scenarios': 2 },
        { name: 'Manual', 'Scenarios': 5 },
      ],
      bars: [
        { key: 'Scenarios', label: 'Scenarios Covered', color: '#8b5cf6' },
      ],
    },
  },
  prediction: {
    title: 'Prediction & Decision',
    subtitle: 'Generative AI · Machine Learning · Forecasting Models',
    icon: '📊',
    stats: [
      { label: 'Forecast Accuracy Gain', value: '+40%', trend: 'up' },
      { label: 'Stockout Rate Drop', value: '35%-45%', trend: 'down' },
      { label: 'Risk Early Warning', value: '3-5 days', sub: 'J&T Express' },
    ],
    cases: [
      {
        title: 'Demand Forecasting',
        items: [
          { company: 'Accenture', detail: 'AI analyzes sales history, market trends, and weather data — forecast accuracy up 40%, stockout rate down 35%-45%.' },
          { company: 'Retail Enterprises', detail: 'Pre-position inventory across warehouses to reduce both overstock and stockout risks.' },
        ],
      },
      {
        title: 'Supply Chain Risk Control',
        items: [
          { company: 'J&T Express (极兔速递)', detail: 'AI model identifies at-risk shipments 3-5 days before customer complaints, enabling proactive intervention.' },
        ],
      },
    ],
    chart: {
      data: [
        { name: 'Forecast Accuracy (%)', Traditional: 60, 'AI-Powered': 84 },
        { name: 'Stockout Rate (%)', Traditional: 30, 'AI-Powered': 18 },
        { name: 'Risk Response (days)', Traditional: 0.5, 'AI-Powered': 4 },
      ],
      bars: [
        { key: 'Traditional', label: 'Traditional', color: '#94a3b8' },
        { key: 'AI-Powered', label: 'AI-Powered', color: '#10b981' },
      ],
    },
  },
  operation: {
    title: 'Operations & Service',
    subtitle: 'LLM · NLP · RPA',
    icon: '🤖',
    stats: [
      { label: 'AI Daily Throughput', value: '3,000 orders', sub: 'Manual: 200/day' },
      { label: 'AI Accuracy', value: '99.99%', sub: 'Manual: 92%' },
      { label: 'Efficiency Gain', value: '15×', sub: 'Order entry scenario' },
    ],
    cases: [
      {
        title: 'Intelligent Order Entry',
        items: [
          { company: 'Niukafu (牛卡福)', detail: 'AI auto-recognizes orders from WeChat, spreadsheets, and images — 3,000 orders/day at 99.99% accuracy vs. manual 200/day at 92%.' },
        ],
      },
      {
        title: 'Digital Employees & Smart CS',
        items: [
          { company: 'Yunda (韵达)', detail: '"Xiaoda" customer-service bot understands and responds to inquiries automatically, 24/7.' },
          { company: 'Logistics Enterprises', detail: 'AI digital employees automate reconciliation, invoicing, and reporting tasks.' },
        ],
      },
    ],
    chart: {
      data: [
        { name: 'Daily Volume (orders)', Manual: 200, AI: 3000 },
        { name: 'Accuracy (%)', Manual: 92, AI: 99.99 },
      ],
      bars: [
        { key: 'Manual', label: 'Manual', color: '#94a3b8' },
        { key: 'AI', label: 'AI', color: '#f59e0b' },
      ],
    },
  },
};
export const pageKeys = Object.keys(pages);
// Overview dashboard summary data
export const overview = {
  title: 'Overview',
  subtitle: 'AI Logistics Panorama · Five Core Scenarios',
  icon: '📦',
  summary: 'AI is deeply embedded across the logistics chain — from smart warehousing to last-mile delivery. These five scenarios are reshaping the entire industry. Below is a summary of key metrics from each area.',
  stats: [
    { label: 'Warehouse Op Cost', value: '↓20%', sub: 'Amazon AI optimization', trend: 'down' as const },
    { label: 'Truck Load Rate', value: '97%', sub: 'Up from 90%', trend: 'up' as const },
    { label: 'Drone Deliveries', value: '100K+', sub: 'Meituan Shenzhen' },
    { label: 'Forecast Accuracy', value: '+40%', sub: 'Accenture', trend: 'up' as const },
    { label: 'AI Entry Accuracy', value: '99.99%', sub: 'Niukafu', trend: 'up' as const },
    { label: 'Risk Early Warning', value: '3-5 days', sub: 'J&T Express' },
  ],
  pieData: [
    { name: 'Smart Warehousing', value: 20, color: '#3b82f6' },
    { name: 'Transport Dispatch', value: 22, color: '#10b981' },
    { name: 'Last-Mile Delivery', value: 18, color: '#8b5cf6' },
    { name: 'Prediction & Decision', value: 25, color: '#f59e0b' },
    { name: 'Operations & Service', value: 15, color: '#ef4444' },
  ],
  highlights: [
    { module: 'Smart Warehouse', company: 'Zhongke Fuchuang', result: 'Capacity: 2M → 5M tons' },
    { module: 'Transport', company: 'Accenture', result: 'Load rate: 90% → 97%' },
    { module: 'Last-Mile', company: 'Meituan Drones', result: '100K+ orders in Shenzhen' },
    { module: 'Prediction', company: 'J&T Express', result: '3-5 day early warning' },
    { module: 'Operations', company: 'Niukafu', result: '15× efficiency gain' },
  ],
};
