import { useT } from '../contexts/LanguageContext'
import StatCard from '../components/StatCard'
import PieChart from '../components/PieChart'
import MindMap from '../components/MindMap'
import styles from './Page.module.css'

const pieData = [
  { name: 'Smart Warehousing', value: 20, color: '#3b82f6' },
  { name: 'Transport Dispatch', value: 22, color: '#10b981' },
  { name: 'Last-Mile Delivery', value: 18, color: '#8b5cf6' },
  { name: 'Prediction & Decision', value: 25, color: '#f59e0b' },
  { name: 'Operations & Service', value: 15, color: '#ef4444' },
]

export default function Overview() {
  const { t } = useT()

  return (
    <div className={styles.page}>
      {/* Hero */}
      <div style={{background:'linear-gradient(135deg,#0f172a 0%,#1e3a5f 50%,#1e40af 100%)',borderRadius:14,padding:'24px 28px',marginBottom:24,color:'#fff'}}>
        <h2 style={{fontSize:24,fontWeight:800,margin:'0 0 16px'}}>📦 {t.overview.title}</h2>
        <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
          {[{v:'↓20%',t:'运营成本'},{v:'97%',t:'卡车装载率'},{v:'99.99%',t:'AI录单准确率'},{v:'+40%',t:'预测准确率提升'},{v:'15×',t:'效率提升'}].map(s=>(
            <div key={s.t} style={{textAlign:'center',background:'rgba(255,255,255,0.13)',borderRadius:10,padding:'14px 18px',minWidth:80}}><div style={{fontSize:28,fontWeight:800}}>{s.v}</div><div style={{fontSize:12,opacity:.8,marginTop:2}}>{s.t}</div></div>))}
        </div>
      </div>

      <div className={styles.summary}>{t.overview.summary}</div>

      {/* ====== 1. 智慧物流概述 ====== */}
      <section className={styles.chart} style={{marginBottom:24}}>
        <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12,paddingBottom:8,borderBottom:'2px solid var(--border)'}}>📋 1. 智慧物流与AI技术概述</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:10}}>
          {[
            {icon:'📡',t:'全面感知',items:['🛰️ IoT传感器+RFID实时采集','📍 货物位置/温湿度/车辆状态','📊 数据清洗→AI模型训练']},
            {icon:'🧠',t:'智能决策',items:['📈 机器学习 需求预测+路径优化','👁️ 计算机视觉 自动识别+质检','💬 NLP 客服+文档解析']},
            {icon:'⚡',t:'自动执行',items:['🤖 AMR/AGV 机器人自动拣选','🚛 智能调度 动态路线规划','📦 无人机/无人车 末端配送']},
            {icon:'🎯',t:'核心价值',items:['💰 仓储成本 ↓32%','⏱️ 配送时效 ↑23%','😊 客户满意度 ↑31%']},
          ].map(c=>(
            <div key={c.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}>
              <h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 10px'}}>{c.icon} {c.t}</h4>
              <div style={{display:'flex',flexDirection:'column',gap:6}}>{c.items.map((item,i)=>(<div key={i} style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.5}}>{item}</div>))}</div>
            </div>))}
        </div>
      </section>

      {/* ====== 2. 智能仓储 ====== */}
      <section className={styles.chart} style={{marginBottom:24}}>
        <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12,paddingBottom:8,borderBottom:'2px solid var(--border)'}}>🏭 2. 智能化仓储管理方案</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:10}}>
          {[
            {icon:'👁️',t:'AI视觉入库与盘点',items:['📸 摄像头自动识别货物条码/文字','📏 3D视觉测量包裹尺寸','🔄 动态盘点 库存预警自动触发']},
            {icon:'🤖',t:'仓储机器人调度',items:['🧭 AMR/AGV 路径优化算法','⚡ 货到人拣选 准确率99.95%','🔧 预测性维护 故障率↓67%']},
            {icon:'📊',t:'智能货位规划',items:['🧬 聚类算法 动态货位分配','🔥 高频商品→近拣选区','📉 库存周转 45天→28天']},
          ].map(c=>(
            <div key={c.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}>
              <h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 10px'}}>{c.icon} {c.t}</h4>
              <div style={{display:'flex',flexDirection:'column',gap:6}}>{c.items.map((item,i)=>(<div key={i} style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.5}}>{item}</div>))}</div>
            </div>))}
        </div>
      </section>

      {/* ====== 3. 智能运输 ====== */}
      <section className={styles.chart} style={{marginBottom:24}}>
        <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12,paddingBottom:8,borderBottom:'2px solid var(--border)'}}>🚛 3. 智能化运输与配送方案</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:10}}>
          {[
            {icon:'🗺️',t:'智能路径规划',items:['🚦 实时交通数据 动态路线','📈 机器学习 需求预测+车辆调度','🚛 车辆利用率 ↑25% 空驶率下降']},
            {icon:'🚗',t:'自动驾驶运输',items:['🛣️ L4级 干线物流自动驾驶','🏙️ 末端配送无人车','📡 5G+边缘计算 远程监控']},
            {icon:'📡',t:'在途AI监控',items:['🌡️ 温湿度/震动 实时监测','⚠️ 异常自动预警+介入','📊 运输时效预测 94%准确']},
          ].map(c=>(
            <div key={c.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}>
              <h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 10px'}}>{c.icon} {c.t}</h4>
              <div style={{display:'flex',flexDirection:'column',gap:6}}>{c.items.map((item,i)=>(<div key={i} style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.5}}>{item}</div>))}</div>
            </div>))}
        </div>
      </section>

      {/* ====== 4. 末端配送 ====== */}
      <section className={styles.chart} style={{marginBottom:24}}>
        <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12,paddingBottom:8,borderBottom:'2px solid var(--border)'}}>🚁 4. 末端配送与最后一公里</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:10}}>
          {[
            {icon:'🛸',t:'无人机无人车配送',items:['🚁 美团10万+单 深圳无人机','🤖 园区/社区 无人车成熟运营','📉 单票配送成本大幅下降']},
            {icon:'📦',t:'智能快递柜',items:['🧠 AI优化布局 投放位置','📍 用户画像 个性化推荐','📱 预约配送 灵活取件']},
          ].map(c=>(
            <div key={c.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}>
              <h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 10px'}}>{c.icon} {c.t}</h4>
              <div style={{display:'flex',flexDirection:'column',gap:6}}>{c.items.map((item,i)=>(<div key={i} style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.5}}>{item}</div>))}</div>
            </div>))}
        </div>
      </section>

      {/* ====== 5. 数据平台 ====== */}
      <section className={styles.chart} style={{marginBottom:24}}>
        <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12,paddingBottom:8,borderBottom:'2px solid var(--border)'}}>📊 5. 数据平台与决策支持</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:10}}>
          {[
            {icon:'🏗️',t:'统一数据中台',items:['🔗 打通仓储+运输+配送数据','📡 IoT设备实时数据汇聚','☁️ 云平台+边缘计算混合部署']},
            {icon:'🔍',t:'全链路可视化',items:['🗺️ 供应链端到端追踪','⚠️ AI异常智能诊断','📊 实时KPI大屏监控']},
            {icon:'🧠',t:'AI决策支持',items:['💰 成本优化 模型自动建议','🛡️ 风险预警 3-5天提前','📈 数据驱动 战略决策']},
          ].map(c=>(
            <div key={c.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}>
              <h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 10px'}}>{c.icon} {c.t}</h4>
              <div style={{display:'flex',flexDirection:'column',gap:6}}>{c.items.map((item,i)=>(<div key={i} style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.5}}>{item}</div>))}</div>
            </div>))}
        </div>
      </section>

      {/* ====== 6. 实施与展望 ====== */}
      <section className={styles.chart} style={{marginBottom:24}}>
        <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12,paddingBottom:8,borderBottom:'2px solid var(--border)'}}>🔮 6. 实施路径与未来趋势</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:10}}>
          {[
            {icon:'📋',t:'分阶段实施策略',items:['1️⃣ 单点智能化: 仓储自动化→运输智能调度','2️⃣ 全链路协同: 数据中台打通各环节','3️⃣ AI自主学习: 系统自动优化决策']},
            {icon:'🔮',t:'未来趋势',items:['🔗 AI+IoT+区块链 深度融合','🧠 大语言模型 物流GPT','🌍 碳中和 绿色物流AI优化']},
          ].map(c=>(
            <div key={c.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}>
              <h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 10px'}}>{c.icon} {c.t}</h4>
              <div style={{display:'flex',flexDirection:'column',gap:6}}>{c.items.map((item,i)=>(<div key={i} style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.5}}>{item}</div>))}</div>
            </div>))}
        </div>
      </section>

      {/* Stats + Charts */}
      <div className={styles.stats}>
        {t.overviewStats.map((s: { label: string; value: string; sub: string }) => (
          <StatCard key={s.label} label={s.label} value={s.value} sub={s.sub} />
        ))}
      </div>

      <div className={styles.pieSection} style={{ marginBottom: 28 }}>
        <h3 className={styles.chartTitle}>🧠 {t.overview.mindmapTitle}</h3>
        <MindMap />
      </div>

      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginBottom: 28 }}>
        <div className={styles.pieSection} style={{ flex: '1 1 400px' }}>
          <h3 className={styles.chartTitle}>🍩 {t.overview.pieTitle}</h3>
          <PieChart data={pieData} innerRadius={55} />
        </div>
      </div>

      <h3 className={styles.chartTitle}>🏆 {t.overview.highlightsTitle}</h3>
      <div className={styles.highlights}>
        {t.overviewHighlights.map((h: { module: string; company: string; result: string }) => (
          <div key={h.company} className={styles.highlightCard}>
            <span className={styles.highlightBadge}>{h.module}</span>
            <div className={styles.highlightBody}>
              <div className={styles.highlightCase}>{h.company}</div>
              <div className={styles.highlightResult}>{h.result}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
