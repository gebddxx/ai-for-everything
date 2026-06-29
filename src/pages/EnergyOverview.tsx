import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

export default function EnergyOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (
    <div className={styles.page}>
      <div className={styles.head}><h2 className={styles.title}>⚡ {L('AI 能源電力','AI in Energy','AI 能源电力')}</h2><p className={styles.subtitle}>{L('AI如何優化電網調度、新能源發電和碳減排','How AI optimizes power grids, renewables, and carbon reduction','AI如何优化电网调度、新能源发电和碳减排')}</p></div>
      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:'var(--border)',margin:'36px 0 20px'}} /><h3 style={{fontSize:17,fontWeight:700,color:'var(--text)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>{L('AI正在改變能源','AI能源正在改变什么','AI is Transforming Energy')}</h3>
        <p style={{color:'var(--text-secondary)',lineHeight:1.8,fontSize:14,marginBottom:12}}>{L('能源行业正经历百年未有之变革——AI是核心驱动力。DeepMind用AI将谷歌数据中心冷却能耗降低40%；AI风电功率预测将弃风率从15%降至5%以下；智能电网AI实时平衡供需，每避免一次停电可节省数百万美元。中国是全球最大能源消费国和新能源装机国，国家电网AI调度系统覆盖11亿用户，南方电网AI将线损率降至全球最低的4.3%。据IEA预测，AI可帮助全球在2030年前减少5-10%碳排放。','能源行業正經歷百年未有之變革——AI是核心驅動力。DeepMind用AI將谷歌數據中心冷卻能耗降低40%；AI風電功率預測將棄風率從15%降至5%以下；智能電網AI即時平衡供需。中國是全球最大能源消費國和新能源裝機國，國家電網AI調度系統覆蓋11億用戶。據IEA預測，AI可幫助全球在2030年前減少5-10%碳排放。','The energy sector is undergoing its biggest transformation in a century — AI is the core driver. DeepMind used AI to reduce Google data center cooling energy by 40%; AI wind power forecasting cuts curtailment from 15% to under 5%; smart grid AI balances supply-demand in real-time. China is the world\'s largest energy consumer and renewables installer — State Grid AI covers 1.1B users. IEA projects AI can reduce global carbon emissions by 5-10% by 2030.')}</p>
      </section>
      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:'var(--border)',margin:'36px 0 20px'}} /><h3 style={{fontSize:17,fontWeight:700,color:'var(--text)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>{L('前沿應用場景','前沿应用场景','Cutting-Edge Applications')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:12}}>
          {[{icon:'🔋',t:L('AI智慧電網','AI智能电网','Smart Grid'),d:L('AI即時預測電力需求和新能源出力，動態調度發電和儲能。國家電網的AI調度系統每天處理TB級數據，實現11億用戶的電力供需平衡。','AI实时预测电力需求和新能源出力，动态调度发电和储能。国家电网的AI调度系统每天处理TB级数据，实现11亿用户的电力供需平衡。AutoGrid为全球50+电力公司提供AI优化方案，节省5-15%的运营成本。','AI predicts power demand and renewable output in real-time, dynamically dispatching generation and storage. State Grid AI processes terabytes of data daily to balance supply-demand for 1.1B users. AutoGrid provides AI optimization to 50+ utilities globally.')},
          {icon:'💨',t:L('新能源功率預測','新能源功率预测','Renewables Forecasting'),d:L('AI融合氣象、地形和設備數據預測風電/光伏出力。谷歌DeepMind將風電價值提升20%。金風科技的AI預測系統將風電功率預測準確率提升至92%以上。','AI融合气象、地形和设备数据预测风电/光伏出力。谷歌DeepMind将风电价值提升20%。金风科技的AI预测系统将风电功率预测准确率提升至92%以上，每年为中国风电场减少数亿元弃风损失。','AI fuses weather, terrain and equipment data to forecast wind/solar output. Google DeepMind boosted wind power value by 20%. Goldwind AI prediction achieves 92%+ accuracy, saving Chinese wind farms hundreds of millions in curtailment losses annually.')},
          {icon:'🏭',t:L('碳捕集與減排','碳捕集与减排','Carbon Capture & Reduction'),d:L('AI優化工業流程減少碳排放。Carbon Re用AI將水泥廠燃料消耗降低8%。Siemens Energy的AI燃氣輪機優化系統每年減少數百萬噸CO2。','AI优化工业流程减少碳排放。Carbon Re用AI将水泥厂燃料消耗降低8%。Siemens Energy的AI燃气轮机优化系统每年减少数百万吨CO2。中国华能集团用AI优化燃煤电厂效率，每度电煤耗降低3克。','AI optimizes industrial processes to reduce emissions. Carbon Re uses AI to cut cement plant fuel consumption by 8%. Siemens Energy AI gas turbine optimization saves millions of tons of CO2 annually. China Huaneng uses AI to improve coal plant efficiency.')},
          {icon:'⚡',t:L('AI儲能優化','AI储能优化','Energy Storage'),d:L('AI預測電價波動，自動決定充放電策略實現套利。特斯拉Autobidder用AI管理全球數GWh儲能資產。Fluence的AI儲能平台在全球40+市場運營。','AI预测电价波动，自动决定充放电策略实现套利。特斯拉Autobidder用AI管理全球数GWh储能资产，每年创造数亿美元收入。Fluence的AI储能平台在全球40+市场运营，优化收益的同时支撑电网稳定性。','AI predicts electricity price fluctuations, automatically deciding charge/discharge for arbitrage. Tesla Autobidder manages gigawatt-hours of global storage with AI, generating hundreds of millions in revenue. Fluence AI platform operates in 40+ markets.')},
        ].map(item => (<div key={item.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 4px'}}>{item.icon} {item.t}</h4><p style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.7,margin:0}}>{item.d}</p></div>))}
        </div>
      </section>
      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:'var(--border)',margin:'36px 0 20px'}} /><h3 style={{fontSize:17,fontWeight:700,color:'var(--text)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>{L('關鍵數據','关键数据','Key Metrics')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:10}}>
          {[{v:'↓40%',l:L('AI降低冷卻能耗','AI降低冷却能耗','Cooling Energy Drop')},{v:'92%+',l:L('風電功率預測準確率','风电功率预测准确率','Wind Forecast Accuracy')},{v:'5-10%',l:L('2030年AI減排潛力','2030年AI减排潜力','2030 AI Carbon Cut')},{v:'11亿',l:L('國家電網AI用戶','国家电网AI覆盖用户','State Grid AI Users')}].map(m => (<div key={m.l} style={{textAlign:'center',padding:'16px 12px',background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><div style={{fontSize:24,fontWeight:800,color:'var(--primary)'}}>{m.v}</div><div style={{fontSize:12,color:'var(--text-secondary)',marginTop:4}}>{m.l}</div></div>))}
        </div>
      </section>
      <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12,marginTop:24}}>{L('行業工具導航','行业工具导航','Industry Tool Directory')}</h3>
      <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#f59e0b" />
    </div>
  )
}
const links: ToolLink[] = [
  {name:'AutoGrid',url:'https://www.auto-grid.com/',desc:{en:'AI energy optimization, 50+ utilities worldwide',zh:'AI能源优化平台,服务全球50+电力公司'},cat:'tools',icon:'🔋'},
  {name:'Tesla Autobidder',url:'https://www.tesla.com/autobidder',desc:{en:'AI energy trading, manages GWh of global storage',zh:'AI能源交易平台,管理全球数GWh储能资产'},cat:'tools',icon:'⚡'},
  {name:'Carbon Re',url:'https://carbonre.com/',desc:{en:'AI cement/steel decarbonization, -8% fuel use',zh:'AI水泥/钢铁脱碳,降低8%燃料消耗'},cat:'tools',icon:'🏭'},
  {name:'Stem',url:'https://www.stem.com/',desc:{en:'AI energy storage management, Athena platform',zh:'AI储能管理,Athena平台,商业+工业场景'},cat:'tools',icon:'🔌'},
  {name:'国家电网AI',url:'https://www.sgcc.com.cn/',desc:{en:'AI power dispatch, covers 1.1B users in China',zh:'AI电力调度系统,覆盖中国11亿用户'},cat:'tools',icon:'🇨🇳'},
  {name:'Fluence',url:'https://fluenceenergy.com/',desc:{en:'AI energy storage platform, 40+ global markets',zh:'AI储能平台,全球40+市场,优化收益+电网稳定'},cat:'tools',icon:'🔋'},
]
