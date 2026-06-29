import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

export default function RetailOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (
    <div className={styles.page}>
      <div className={styles.head}><h2 className={styles.title}>🛒 {L('AI 零售電商','AI in Retail','AI 零售电商')}</h2><p className={styles.subtitle}>{L('AI如何變革推薦系統、動態定價、庫存管理和客戶體驗','How AI transforms recommendation, pricing, inventory and customer experience','AI如何变革推荐系统、动态定价、库存管理和客户体验')}</p></div>
      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:'var(--border)',margin:'36px 0 20px'}} /><h3 style={{fontSize:17,fontWeight:700,color:'var(--text)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>{L('AI正在改變零售','AI零售正在改变什么','AI is Transforming Retail')}</h3>
        <p style={{color:'var(--text-secondary)',lineHeight:1.8,fontSize:14,marginBottom:12}}>{L('零售是AI商业化最成功的领域之一。AI推荐引擎贡献了亚马逊35%的营收和Netflix 80%的观看时长；计算机视觉无人店实现即拿即走；动态定价AI每秒调整数万SKU价格；需求预测将库存周转率提升40%。中国零售AI应用全球领先——盒马鲜生用AI预测生鲜需求将损耗降低30%，拼多多AI推荐驱动年GMV超3万亿。据McKinsey，AI可为全球零售业增加4000-8000亿美元价值。','零售是AI商業化最成功的領域之一。AI推薦引擎貢獻了亞馬遜35%的營收和Netflix 80%的觀看時長；計算機視覺無人店實現即拿即走；動態定價AI每秒調整數萬SKU價格；需求預測將庫存周轉率提升40%。中國零售AI應用全球領先——盒馬鮮生用AI預測生鮮需求將損耗降低30%，拼多多AI推薦驅動年GMV超3兆。據McKinsey，AI可為全球零售業增加4000-8000億美元價值。','Retail is AI\'s most successful commercial domain. AI recommendations drive 35% of Amazon\'s revenue and 80% of Netflix viewing; computer vision powers grab-and-go stores; dynamic pricing AI adjusts thousands of SKUs per second; demand forecasting improves inventory turnover by 40%. China leads globally — Hema Fresh uses AI to reduce spoilage by 30%, Pinduoduo\'s AI recommendations drive ¥3T+ GMV. McKinsey estimates AI can add $400-800B to global retail.')}</p>
      </section>
      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:'var(--border)',margin:'36px 0 20px'}} /><h3 style={{fontSize:17,fontWeight:700,color:'var(--text)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>{L('前沿應用場景','前沿应用场景','Cutting-Edge Applications')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:12}}>
          {[{icon:'🎯',t:L('AI個性化推薦','AI个性化推荐','Recommendation'),d:L('深度學習分析用戶行為，即時生成千人千面的商品推薦。亞馬遜35%銷售來自AI推薦，淘寶推薦系統每天處理100億+次請求。','深度学习分析用户行为，实时生成千人千面的商品推荐。亚马逊35%的销售来自AI推荐，淘宝推荐系统每天处理100亿+次请求。TikTok Shop的AI算法将商品发现转化率提升300%。','Deep learning generates personalized product recommendations in real-time. Amazon gets 35% sales from AI recs, Taobao handles 10B+ daily requests. TikTok Shop AI boosts product discovery conversion by 300%.')},
          {icon:'📊',t:L('AI動態定價','AI动态定价','Dynamic Pricing'),d:L('AI根據庫存、競品價格、需求預測即時調整價格。Walmart的AI定價系統每天調整數百萬SKU。','AI根据库存、竞品价格、需求预测实时调整价格。Walmart的AI定价系统每天调整数百万SKU。Uber的激增定价算法平衡供需，高峰期接单率提升40%。中国美团用AI实时优化外卖配送费和菜品定价。','AI adjusts prices in real-time based on inventory, competitor pricing and demand. Walmart AI reprices millions of SKUs daily. Uber surge pricing balances supply-demand, boosting peak-hour fulfillment by 40%. Meituan optimizes delivery fees dynamically.')},
          {icon:'🏪',t:L('AI無人零售','AI无人零售','Autonomous Retail'),d:L('計算機視覺+傳感器實現無收銀員購物。Amazon Go已開設20+家無人店。AI視覺收銀台將結帳速度提升5倍。','计算机视觉+传感器实现无收银员购物。Amazon Go已开设20+家无人店，AI追踪顾客取放商品自动结算。中国缤果盒子、小麦铺等无人零售曾快速扩张。AI视觉收银台将结账速度提升5倍。','CV + sensors enable cashierless shopping. Amazon Go operates 20+ stores where AI tracks item pick-up and auto-charges. Chinese BingoBox and Xiaomaipu pioneered unmanned retail. AI vision checkout boosts speed 5x.')},
          {icon:'📦',t:L('AI供應鏈與庫存','AI供应链与库存','Supply Chain & Inventory'),d:L('AI預測區域需求，優化補貨和倉儲佈局。Zara用AI分析全球門店銷售數據。Shein的AI供應鏈將新款從設計到上架壓縮到3天。','AI预测区域需求，优化补货和仓储布局。Zara用AI分析全球门店销售数据，将库存周转缩短至2周。盒马鲜生AI将生鲜损耗率从行业平均20%降至7%。Shein的AI供应链将新款从设计到上架压缩到3天。','AI predicts regional demand, optimizes replenishment and warehouse layout. Zara uses AI to analyze global store sales, reducing inventory turnover to 2 weeks. Hema AI cuts fresh food spoilage from 20% to 7%. Shein AI supply chain compresses design-to-shelf to 3 days.')},
        ].map(item => (<div key={item.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 4px'}}>{item.icon} {item.t}</h4><p style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.7,margin:0}}>{item.d}</p></div>))}
        </div>
      </section>
      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:'var(--border)',margin:'36px 0 20px'}} /><h3 style={{fontSize:17,fontWeight:700,color:'var(--text)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>{L('關鍵數據','关键数据','Key Metrics')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:10}}>
          {[{v:'35%',l:L('亞馬遜AI推薦貢獻','亚马逊AI推荐贡献营收','Amazon AI Rec Revenue')},{v:'↓30%',l:L('AI生鮮損耗降低','AI生鲜损耗降低','Fresh Food Spoilage Drop')},{v:'5×',l:L('AI結帳速度提升','AI结账速度提升','AI Checkout Speed')},{v:'400-800B',l:L('AI零售價值潛力','AI零售价值潜力','AI Retail Value')}].map(m => (<div key={m.l} style={{textAlign:'center',padding:'16px 12px',background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><div style={{fontSize:24,fontWeight:800,color:'var(--primary)'}}>{m.v}</div><div style={{fontSize:12,color:'var(--text-secondary)',marginTop:4}}>{m.l}</div></div>))}
        </div>
      </section>
      <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12,marginTop:24}}>{L('行業工具導航','行业工具导航','Industry Tool Directory')}</h3>
      <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#f97316" />
    </div>
  )
}
const links: ToolLink[] = [
  {name:'Shopify Magic',url:'https://www.shopify.com/magic',desc:{en:'AI product description, email, storefront gen',zh:'AI商品描述/邮件/店铺自动生成'},cat:'tools',icon:'🛍️'},
  {name:'Dynamic Yield',url:'https://www.dynamicyield.com/',desc:{en:'McDonalds, AI personalization, A/B testing',zh:'麦当劳御用,AI个性化推荐+A/B测试'},cat:'tools',icon:'🎯'},
  {name:'Vue.ai',url:'https://vue.ai/',desc:{en:'AI fashion retail: styling, tagging, virtual try-on',zh:'AI时尚零售:搭配推荐/自动标签/虚拟试穿'},cat:'tools',icon:'👗'},
  {name:'Syte',url:'https://www.syte.ai/',desc:{en:'Visual AI search for e-commerce, camera search',zh:'视觉AI电商搜索,拍照搜同款'},cat:'tools',icon:'📸'},
  {name:'Clerk.io',url:'https://www.clerk.io/',desc:{en:'AI site search, recommendations, email personalization',zh:'AI站内搜索/推荐/邮件个性化'},cat:'tools',icon:'🔍'},
  {name:'有赞AI',url:'https://www.youzan.com/',desc:{en:'Chinese retail SaaS, AI CRM + marketing automation',zh:'国产零售SaaS,AI客户管理+营销自动化'},cat:'tools',icon:'🛒'},
  {name:'微盟AI',url:'https://www.weimob.com/',desc:{en:'Chinese smart retail, AI private domain operations',zh:'国产智慧零售,AI私域运营+小程序电商'},cat:'tools',icon:'🏬'},
]
