// 从 rdm.md 提取的结构化数据

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
    title: '智能仓储',
    subtitle: '计算机视觉 · AMR · 智能算法',
    icon: '🏭',
    stats: [
      { label: '运营成本降低', value: '20%', trend: 'down' },
      { label: '煤炭物流运能', value: '500万吨', sub: '原200万吨', trend: 'up' },
      { label: '九州通拣选效率', value: '"货到人"模式', sub: '替代传统人找货' },
    ],
    cases: [
      {
        title: '"货到人"拣选',
        items: [
          { company: '九州通', detail: '医药物流中心用机器人把货架搬到分拣员面前，替代了"人找货"模式' },
          { company: '亚马逊', detail: '通过AI优化机器人路径，运营成本降低20%' },
        ],
      },
      {
        title: '智能运营管理',
        items: [
          { company: '玉湖冷链', detail: '用AI调度冷库作业、预警临期商品，保障冷链品质' },
          { company: '中科富创', detail: '物流大模型让煤炭物流园实现全程无人化，运能从200万吨跃升至近500万吨' },
        ],
      },
    ],
  },
  transport: {
    title: '智能运输调度',
    subtitle: '决策式AI · 路径优化 · 大数据分析',
    icon: '🚛',
    stats: [
      { label: '卡车装载率', value: '97%', sub: '优化前90%', trend: 'up' },
      { label: '燃油成本降低', value: '15%', trend: 'down' },
      { label: '每日减少车次', value: '10+', sub: '香港某连锁超市', trend: 'down' },
    ],
    cases: [
      {
        title: '动态路线规划',
        items: [
          { company: '多点', detail: '智能调度系统帮助香港某连锁超市每天减少10趟以上车次' },
          { company: '快递/零售企业', detail: 'AI结合实时路况为车辆规划最优配送路线' },
        ],
      },
      {
        title: '智能配载与装车',
        items: [
          { company: '埃森哲', detail: 'AI优化货物托盘摆放方案，卡车装载率从90%提升至97%，降低15%燃油成本' },
        ],
      },
    ],
    chart: {
      data: [
        { name: '装载率', 优化前: 90, 优化后: 97 },
        { name: '燃油成本指数', 优化前: 100, 优化后: 85 },
      ],
      bars: [
        { key: '优化前', label: '优化前', color: '#94a3b8' },
        { key: '优化后', label: '优化后', color: '#3b82f6' },
      ],
    },
  },
  delivery: {
    title: '"最后一公里"配送',
    subtitle: '自动驾驶 · 无人机技术 · 智能调度',
    icon: '🚁',
    stats: [
      { label: '美团无人机配送', value: '数十万单', sub: '深圳区域' },
      { label: '配送模式', value: '无人车+无人机', sub: '园区/社区/冷链' },
    ],
    cases: [
      {
        title: '无人车配送',
        items: [
          { company: '多城市园区', detail: '无人车在园区、社区配送已较为成熟，实现非接触式末端交付' },
        ],
      },
      {
        title: '无人机配送',
        items: [
          { company: '美团', detail: '在深圳完成数十万单无人机外卖配送，突破地面交通限制' },
          { company: '玉湖冷链', detail: '在成都园区探索无人机冷链配送场景，生鲜直达' },
        ],
      },
    ],
    chart: {
      data: [
        { name: '无人车', 覆盖场景数: 3 },
        { name: '无人机', 覆盖场景数: 2 },
        { name: '传统人工', 覆盖场景数: 5 },
      ],
      bars: [
        { key: '覆盖场景数', label: '覆盖场景数', color: '#8b5cf6' },
      ],
    },
  },
  prediction: {
    title: '全链路预测与决策',
    subtitle: '生成式AI · 机器学习 · 预测模型',
    icon: '📊',
    stats: [
      { label: '预测准确率提升', value: '40%', trend: 'up' },
      { label: '缺货率降低', value: '35%-45%', trend: 'down' },
      { label: '风控提前预警', value: '3-5天', sub: '极兔速递' },
    ],
    cases: [
      {
        title: '需求预测',
        items: [
          { company: '埃森哲', detail: 'AI分析历史销售、市场趋势、天气等数据，预测准确率提高40%，缺货率降低35%-45%' },
          { company: '零售企业', detail: '提前指导商家备货分仓，降低库存积压和断货风险' },
        ],
      },
      {
        title: '供应链风控',
        items: [
          { company: '极兔速递', detail: 'AI模型能在客户投诉前3-5天就识别出有风险的运单，提前介入处理' },
        ],
      },
    ],
    chart: {
      data: [
        { name: '预测准确率', 传统方式: 60, AI预测: 84 },
        { name: '缺货率', 传统方式: 30, AI预测: 18 },
        { name: '风控响应(天)', 传统方式: 0.5, AI预测: 4 },
      ],
      bars: [
        { key: '传统方式', label: '传统方式', color: '#94a3b8' },
        { key: 'AI预测', label: 'AI预测', color: '#10b981' },
      ],
    },
  },
  operation: {
    title: '运营与客服',
    subtitle: '大语言模型 · NLP · RPA',
    icon: '🤖',
    stats: [
      { label: 'AI日处理', value: '3,000单', sub: '人工仅200单/天' },
      { label: 'AI准确率', value: '99.99%', sub: '人工准确率92%' },
      { label: '效率提升', value: '15倍', sub: '录单场景' },
    ],
    cases: [
      {
        title: '智能录单',
        items: [
          { company: '牛卡福', detail: 'AI自动识别微信、表格、图片中的订单信息并录入，日处理3000单、准确率99.99%；人工仅200单、准确率92%' },
        ],
      },
      {
        title: '数字员工与智能客服',
        items: [
          { company: '韵达', detail: '"小达"客服机器人自动理解和应答客户问题，7×24小时在线' },
          { company: '物流企业', detail: 'AI数字员工自动完成对账、开票、报表等重复性工作' },
        ],
      },
    ],
    chart: {
      data: [
        { name: '日处理量(单)', 人工: 200, AI: 3000 },
        { name: '准确率(%)', 人工: 92, AI: 99.99 },
      ],
      bars: [
        { key: '人工', label: '人工', color: '#94a3b8' },
        { key: 'AI', label: 'AI', color: '#f59e0b' },
      ],
    },
  },
};

export const pageKeys = Object.keys(pages);
