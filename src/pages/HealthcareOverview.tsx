import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

export default function HealthcareOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  const LA = (en: string[], zh: string[], tw: string[]) => lang === 'zh-CN' ? zh : lang === 'zh-TW' ? tw : en

  return (
    <div className={styles.page}>
      {/* ====== 1. 核心数据 ====== */}
      <div style={{background:'linear-gradient(135deg,#064e3b 0%,#065f46 50%,#047857 100%)',borderRadius:14,padding:'24px 28px',marginBottom:24,color:'#fff'}}>
        <h2 style={{fontSize:24,fontWeight:800,margin:'0 0 16px'}}>🏥 {L('AI in Healthcare','AI 医疗健康','AI 醫療健康')}</h2>
        <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
          {[{v:'↓52%',t:'诊断时间'},{v:'18月',t:'新药研发'},{v:'500+',t:'FDA批准AI设备'},{v:'$350B/年',t:'全球价值潜力'}].map(s=>(
            <div key={s.t} style={{textAlign:'center',background:'rgba(255,255,255,0.13)',borderRadius:10,padding:'14px 18px',minWidth:90}}>
              <div style={{fontSize:28,fontWeight:800}}>{s.v}</div><div style={{fontSize:12,opacity:0.8,marginTop:2}}>{s.t}</div>
            </div>))}
        </div>
      </div>

      {/* ====== 2. AI 如何改变医疗 ====== */}
      <div style={{marginBottom:24}}>
        <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12}}>🔬 {L('AI × Healthcare','AI × 医疗','AI × 醫療')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:10}}>
          {[
            {icon:'🧠',t:L('影像诊断','影像诊断','影像診斷'),items:LA(['📷 CT/MRI/X-ray instant analysis','✅ 500+ FDA-approved AI devices','⚡ Stroke detection time ↓52%'],['📷 CT/MRI/X光 秒级分析','✅ 500+ FDA批准AI设备','⚡ 脑卒中检测 时间↓52%'],['📷 CT/MRI/X光 秒級分析','✅ 500+ FDA批准AI設備','⚡ 腦中風檢測 時間↓52%'])},
            {icon:'💊',t:L('药物研发','药物研发','藥物研發'),items:LA(['🧬 AI molecule generation','⏱️ R&D cycle 4.5yr→18mo','💰 Cost reduced 90%'],['🧬 AI生成分子 靶点发现','⏱️ 研发周期 4.5年→18月','💰 成本降低 90%'],['🧬 AI生成分子 靶點發現','⏱️ 研發週期 4.5年→18月','💰 成本降低 90%'])},
            {icon:'🩺',t:L('临床决策','临床决策','臨床決策'),items:LA(['📋 Analyze EHRs+labs+literature','🤖 AI triage 85% doctor match','🏥 Assisted treatment planning'],['📋 分析病历+检验+文献','🤖 AI分诊 85%与医生一致','🏥 辅助诊疗方案制定'],['📋 分析病歷+檢驗+文獻','🤖 AI分診 85%與醫生一致','🏥 輔助診療方案制定'])},
            {icon:'❤️',t:L('患者监护','患者监护','患者監護'),items:LA(['⌚ Wearables + AI remote care','🛌 Falls ↓60%','💊 Medication adherence ↑40%'],['⌚ 可穿戴+AI 远程监测','🛌 跌倒事件 ↓60%','💊 用药依从性 ↑40%'],['⌚ 可穿戴+AI 遠程監測','🛌 跌倒事件 ↓60%','💊 用藥依從性 ↑40%'])},
          ].map(card=>(
            <div key={card.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}>
              <h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 10px'}}>{card.icon} {card.t}</h4>
              <div style={{display:'flex',flexDirection:'column',gap:6}}>
                {card.items.map((item,i)=>(<div key={i} style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.5}}>{item}</div>))}
              </div>
            </div>))}
        </div>
      </div>

      {/* ====== 3. 工具导航 ====== */}
      <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',margin:'28px 0 12px',paddingBottom:8,borderBottom:'2px solid var(--border)'}}>
        🔗 {L('Tools','工具导航','工具導航')}
      </h3>
      <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#10b981" />
    </div>
  )
}

const links: ToolLink[] = [
  {name:'Aidoc',url:'https://www.aidoc.com/',desc:{en:'AI radiology: stroke/PE/C-spine detection',zh:'AI影像:脑卒中/肺栓塞/颈椎骨折实时识别'},cat:'影像',icon:'🧠'},
  {name:'推想医疗',url:'https://www.infervision.com/',desc:{en:'Chinese AI radiology #1, lung nodule + stroke',zh:'国产AI影像龙头,肺结节/脑卒中/骨折'},cat:'影像',icon:'🫁'},
  {name:'联影智能',url:'https://www.united-imaging.com/',desc:{en:'Full-body AI imaging, Chinese medical giant',zh:'国产医疗设备巨头,全身AI影像辅助诊断'},cat:'影像',icon:'🏥'},
  {name:'Insilico Medicine',url:'https://insilico.com/',desc:{en:'End-to-end AI drug discovery, generative chemistry',zh:'端到端AI药物研发,生成式化学,抗衰老'},cat:'制药',icon:'🧬'},
  {name:'晶泰科技',url:'https://www.xtalpi.com/',desc:{en:'Chinese AI drug discovery unicorn',zh:'国产AI制药独角兽,量子物理+AI'},cat:'制药',icon:'💎'},
  {name:'深势科技',url:'https://www.dp.tech/',desc:{en:'AI for Science, drug design platform',zh:'AI for Science,药物设计+分子模拟'},cat:'制药',icon:'🔬'},
  {name:'PathAI',url:'https://www.pathai.com/',desc:{en:'AI pathology: cancer diagnosis, trials',zh:'AI病理:癌症诊断精准化,临床试验支持'},cat:'诊断',icon:'🔬'},
  {name:'左手医生',url:'https://www.zuoshouyisheng.com/',desc:{en:'Chinese AI clinical assistant, diagnosis',zh:'国产AI临床助手,辅助诊断+智能导诊'},cat:'诊断',icon:'🤖'},
  {name:'Care.ai',url:'https://care.ai/',desc:{en:'AI patient monitoring, fall prevention',zh:'AI患者监测:跌倒预防/生命体征/行为分析'},cat:'护理',icon:'🛌'},
  {name:'微医',url:'https://www.guahao.com/',desc:{en:'Chinese online healthcare, AI triage',zh:'互联网医疗平台,AI分诊+在线复诊'},cat:'护理',icon:'📱'},
  {name:'平安健康',url:'https://www.pinganhealth.cn/',desc:{en:'Ping An health, AI health management',zh:'平安集团,AI健康管理+在线问诊'},cat:'护理',icon:'🏥'},
]
