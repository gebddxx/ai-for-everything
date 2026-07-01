import { useT } from '../contexts/LanguageContext'
import { tText, type MultiLang } from '../i18n/translate'
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
  const { t, lang } = useT()
  const L = (a: MultiLang) => tText(a, lang)
  return (
    <div className={styles.page}>
      {/* Hero */}
      <div style={{background:'linear-gradient(135deg,#0f172a 0%,#1e3a5f 50%,#1e40af 100%)',borderRadius:14,padding:'24px 28px',marginBottom:24,color:'#fff'}}>
        <h2 style={{fontSize:24,fontWeight:800,margin:'0 0 16px'}}>📦 {t.overview.title}</h2>
        <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
          {[{v:'↓20%',t:L('运营成本')},{v:'97%',t:L('卡车装载率')},{v:'99.99%',t:L('AI录单准确率')},{v:'+40%',t:L('预测准确率提升')},{v:'15×',t:L('效率提升')}].map(s=>(
            <div key={s.v + s.t} style={{textAlign:'center',background:'rgba(255,255,255,0.13)',borderRadius:10,padding:'14px 18px',minWidth:80}}><div style={{fontSize:28,fontWeight:800}}>{s.v}</div><div style={{fontSize:12,opacity:.8,marginTop:2}}>{s.t}</div></div>))}
        </div>
      </div>
      <div className={styles.summary}>{t.overview.summary}</div>
      {/* ====== 1. ====== */}
      <section className={styles.chart} style={{marginBottom:24}}>
        <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12,paddingBottom:8,borderBottom:'2px solid var(--border)'}}>{L('📋 1. 智慧物流与AI技术概述')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:10}}>
          {[
            {icon:'📡',t:L('全面感知'),items:[L('🛰️ IoT传感器+RFID 实时采集'),L('📍 货物位置/温湿度/车辆状态'),L('📊 海量数据清洗→AI模型训练燃料'),L('🌐 2023智慧物流市场突破8000亿')]},
            {icon:'🧠',t:L('AI核心技术'),items:[L('📈 机器学习: 需求预测+路径优化'),L('👁️ 计算机视觉: 包裹识别+破损检测'),L('💬 NLP: 智能客服+文档自动解析'),L('⚡ 强化学习: 实时路线动态计算')]},
            {icon:'🤖',t:L('自动执行'),items:[L('🏭 仓储: AMR/AGV机器人自动拣选'),L('🚛 运输: 智能调度+动态路线规划'),L('🚁 末端: 无人机/无人车配送'),L('🏢 客服: 7×24h智能应答 95%覆盖率')]},
            {icon:'🎯',t:L('核心价值'),items:[L('💰 仓储人力成本 ↓32%'),L('⏱️ 车辆利用率 ↑25% 配送时效 ↑23%'),L('📦 分拣速度 2万件/时 准确率99.95%'),L('😊 客户满意度 ↑31个百分点')]},
          ].map(c=>(
            <div key={c.icon + c.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}>
              <h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 10px'}}>{c.icon} {c.t}</h4>
              <div style={{display:'flex',flexDirection:'column',gap:6}}>{c.items.map((item,i)=>(<div key={i} style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.5}}>{item}</div>))}</div>
            </div>))}
        </div>
      </section>
      {/* ====== 2. ====== */}
      <section className={styles.chart} style={{marginBottom:24}}>
        <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12,paddingBottom:8,borderBottom:'2px solid var(--border)'}}>{L('🏭 2. 智能化仓储管理方案')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:10}}>
          {[
            {icon:'👁️',t:L('AI视觉入库与盘点'),items:[L('📸 摄像头自动识别条码/二维码/文字'),L('📏 3D视觉快速获取包裹尺寸'),L('🔄 动态盘点系统 库存低于阈值自动预警'),L('📋 自动计算最优装载方案 提高车辆装载率')]},
            {icon:'🤖',t:L('仓储机器人调度'),items:[L('🧭 AMR/AGV协同算法 路径实时优化'),L('⚡ 货到人拣选 峰值准确率99.95%'),L('🔧 预测性维护 设备故障率↓67%'),L('🏭 部分标杆仓已实现黑灯无人作业')]},
            {icon:'📊',t:L('智能货位规划'),items:[L('🧬 聚类算法 按尺寸/重量/周转率动态分配'),L('🔥 高频商品自动移至近拣选区'),L('📉 库存周转 45天→28天(-38%)'),L('📦 WMS自动生成补货预警+采购建议')]},
          ].map(c=>(
            <div key={c.icon + c.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}>
              <h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 10px'}}>{c.icon} {c.t}</h4>
              <div style={{display:'flex',flexDirection:'column',gap:6}}>{c.items.map((item,i)=>(<div key={i} style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.5}}>{item}</div>))}</div>
            </div>))}
        </div>
      </section>
      {/* ====== 3. ====== */}
      <section className={styles.chart} style={{marginBottom:24}}>
        <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12,paddingBottom:8,borderBottom:'2px solid var(--border)'}}>{L('🚛 3. 智能化运输与配送方案')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:10}}>
          {[
            {icon:'🗺️',t:L('智能路径规划'),items:[L('🚦 实时交通+天气+路况 动态路线计算'),L('📈 时序分析: 提前预测区域订单量 调度运力'),L('🚛 车辆利用率 ↑25% 空驶率显著下降'),L('⏱️ 平均配送时长缩短至2.1小时')]},
            {icon:'🚗',t:L('自动驾驶运输'),items:[L('🛣️ L4级 干线物流自动驾驶卡车'),L('🚚 图森未来 无人卡车物流网络'),L('🏙️ 末端配送无人车 特定区域运营'),L('📡 5G+边缘计算 远程实时监控')]},
            {icon:'📡',t:L('在途AI监控'),items:[L('🌡️ 温湿度/震动 传感器实时监测'),L('⚠️ 异常自动预警 主动介入处理'),L('👁️ 驾驶员疲劳/分心 实时检测预警'),L('📊 运输时效预测 94%准确率')]},
          ].map(c=>(
            <div key={c.icon + c.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}>
              <h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 10px'}}>{c.icon} {c.t}</h4>
              <div style={{display:'flex',flexDirection:'column',gap:6}}>{c.items.map((item,i)=>(<div key={i} style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.5}}>{item}</div>))}</div>
            </div>))}
        </div>
      </section>
      {/* ====== 4. ====== */}
      <section className={styles.chart} style={{marginBottom:24}}>
        <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12,paddingBottom:8,borderBottom:'2px solid var(--border)'}}>{L('🚁 4. 末端配送与最后一公里')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:10}}>
          {[
            {icon:'🛸',t:L('无人机无人车配送'),items:[L('🚁 美团10万+单 深圳无人机外卖配送'),L('🤖 园区/社区 无人车成熟运营'),L('📉 单票配送成本大幅下降'),L('🎯 特定区域实现自动化最后一公里')]},
            {icon:'📦',t:L('智能快递柜'),items:[L('🧠 AI优化柜点布局 精准投放'),L('📍 用户画像→个性化时间推荐'),L('📱 预约配送+灵活取件 提升体验'),L('🏫 覆盖500+高校 800+社区网点')]},
          ].map(c=>(
            <div key={c.icon + c.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}>
              <h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 10px'}}>{c.icon} {c.t}</h4>
              <div style={{display:'flex',flexDirection:'column',gap:6}}>{c.items.map((item,i)=>(<div key={i} style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.5}}>{item}</div>))}</div>
            </div>))}
        </div>
      </section>
      {/* ====== 5. ====== */}
      <section className={styles.chart} style={{marginBottom:24}}>
        <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12,paddingBottom:8,borderBottom:'2px solid var(--border)'}}>{L('📊 5. 数据平台与决策支持')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:10}}>
          {[
            {icon:'🏗️',t:L('统一数据中台'),items:[L('🔗 打通仓储+运输+配送 全链路数据'),L('📡 IoT设备实时数据汇聚+清洗整合'),L('☁️ 云平台+边缘计算 按规模混合部署'),L('🤖 物流大模型: 中科富创无人化园区')]},
            {icon:'🔍',t:L('全链路可视化'),items:[L('🗺️ 供应链端到端实时追踪'),L('⚠️ AI异常智能诊断 自动定位根因'),L('📊 KPI大屏监控 运营数据实时可见'),L('🔮 时效预测 到货时间94%准确率')]},
            {icon:'🧠',t:L('AI决策支持'),items:[L('💰 成本优化模型 自动建议降本方案'),L('🛡️ 风险预警 提前3-5天识别问题运单'),L('📈 数据驱动 从经验决策→智能决策'),L('🤖 极兔AI模型: 投诉前主动介入')]},
          ].map(c=>(
            <div key={c.icon + c.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}>
              <h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 10px'}}>{c.icon} {c.t}</h4>
              <div style={{display:'flex',flexDirection:'column',gap:6}}>{c.items.map((item,i)=>(<div key={i} style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.5}}>{item}</div>))}</div>
            </div>))}
        </div>
      </section>
      {/* ====== 6. ====== */}
      <section className={styles.chart} style={{marginBottom:24}}>
        <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12,paddingBottom:8,borderBottom:'2px solid var(--border)'}}>{L('🔮 6. 实施路径与未来趋势')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:10}}>
          {[
            {icon:'📋',t:L('分阶段实施策略'),items:[L('1️⃣ 单点智能: 仓储自动化+运输智能调度'),L('2️⃣ 全链路协同: 数据中台打通 各环节联动'),L('3️⃣ AI自主学习: 系统持续优化 自动决策'),L('📊 预计3年内 60%+企业完成智能化改造')]},
            {icon:'🔮',t:L('未来趋势'),items:[L('🔗 AI+IoT+区块链 深度融合'),L('🧠 物流大模型GPT 全流程智能'),L('🌍 碳中和 绿色物流AI优化'),L('🚀 从单点智能→全链路协同智能演进')]},
          ].map(c=>(
            <div key={c.icon + c.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}>
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
        {[
          { module:t.overviewHighlights[0]?.module||L('智能仓储'), company:L('中科富创'), result:t.overviewHighlights[0]?.result||L('运能：200万→500万吨'), url:'https://www.zkfc.cn/' },
          { module:t.overviewHighlights[1]?.module||L('运输调度'), company:L('埃森哲'), result:t.overviewHighlights[1]?.result||L('装载率：90%→97%'), url:'https://www.accenture.com/' },
          { module:t.overviewHighlights[2]?.module||L('末端配送'), company:L('美团无人机'), result:t.overviewHighlights[2]?.result||L('深圳完成10万+单'), url:'https://www.meituan.com/' },
          { module:t.overviewHighlights[3]?.module||L('预测决策'), company:L('极兔速递'), result:t.overviewHighlights[3]?.result||L('提前3-5天预警'), url:'https://www.jtexpress.com/' },
          { module:t.overviewHighlights[4]?.module||L('运营客服'), company:L('牛卡福'), result:t.overviewHighlights[4]?.result||L('效率提升15倍'), url:'https://www.nucarf.com/' },
          { module:L('自动驾驶'), company:L('图森未来'), result:L('L4无人卡车·全球最大自动驾驶物流网络'), url:'https://www.tusimple.com/cn/' },
        ].map(h => (
          <a key={h.company} href={h.url} target='_blank' rel='noopener noreferrer' className={styles.highlightCard} style={{textDecoration:'none'}}>
            <span className={styles.highlightBadge}>{h.module}</span>
            <div className={styles.highlightBody}>
              <div className={styles.highlightCase}>{h.company} ↗</div>
              <div className={styles.highlightResult}>{h.result}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
