import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

export default function HealthcareOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e

  return (
    <div className={styles.page}>
      {/* Hero */}
      <div style={{background:'linear-gradient(135deg,#064e3b 0%,#065f46 50%,#047857 100%)',borderRadius:14,padding:'32px',marginBottom:24,color:'#fff',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:-20,right:-10,fontSize:160,opacity:0.06}}>🏥</div>
        <h2 style={{fontSize:28,fontWeight:800,margin:'0 0 6px'}}>🏥 {L('AI in Healthcare','AI 医疗健康','AI 醫療健康')}</h2>
        <p style={{fontSize:16,opacity:0.9,margin:'0 0 24px',maxWidth:500,lineHeight:1.5}}>
          {L('Faster diagnosis · Shorter R&D · Fewer errors · 24/7 monitoring','更快诊断 · 更短研发 · 更少误诊 · 全天候监护','更快診斷 · 更短研發 · 更少誤診 · 全天候監護')}
        </p>
        {/* Big stat cards */}
        <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
          {[{v:'↓52%',l:L('Stroke Diagnosis Time','脑卒中诊断时间缩短','腦中風診斷時間縮短')},{v:'18 mo',l:L('AI Drug R&D Cycle','AI药物研发周期','AI藥物研發週期')},{v:'500+',l:L('FDA AI Devices','FDA批准AI医疗设备','FDA批准AI醫療設備')},{v:'$350B',l:L('Annual Value Potential','年价值潜力','年價值潛力')}].map(s=>(
            <div key={s.l} style={{textAlign:'center',background:'rgba(255,255,255,0.12)',borderRadius:10,padding:'14px 22px',minWidth:90}}>
              <div style={{fontSize:30,fontWeight:800}}>{s.v}</div><div style={{fontSize:11,opacity:0.8,marginTop:4}}>{s.l}</div>
            </div>))}
        </div>
      </div>

      {/* Applications */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:12,marginBottom:28}}>
        {[
          {icon:'🧠',t:L('Medical Imaging','AI医学影像','AI醫學影像'),d:L('Deep learning reads CT/MRI/X-ray in seconds. 500+ FDA-approved AI devices. Aidoc cuts stroke diagnosis by 52%.','深度学习秒级读取CT/MRI/X光。500+ FDA批准AI设备。Aidoc缩短脑卒中诊断52%。','深度學習秒級讀取CT/MRI/X光。500+ FDA批准AI設備。')},
          {icon:'💊',t:L('Drug Discovery','AI药物研发','AI藥物研發'),d:L('Generative AI accelerates target discovery. Insilico Medicine: 4.5yr→18mo, cost -90%.','生成式AI加速靶点发现。Insilico：4.5年→18个月，成本降低90%。','生成式AI加速靶點發現。Insilico：4.5年→18個月，成本降低90%。')},
          {icon:'🩺',t:L('Clinical Decision','临床决策支持','臨床決策支持'),d:L('AI analyzes EHRs + labs + literature. Babylon AI triage: 85% agreement with doctors.','AI分析病历+检验+文献。Babylon AI分诊：85%与医生判断一致。','AI分析病歷+檢驗+文獻。Babylon AI分診：85%與醫生判斷一致。')},
          {icon:'❤️',t:L('Smart Patient Care','患者智能监护','患者智慧監護'),d:L('Wearables + AI = remote health monitoring. Care.ai: falls -60%. Medisafe: adherence +40%.','可穿戴+AI=远程监护。Care.ai减少跌倒60%。Medisafe提高用药依从性40%。','可穿戴+AI=遠程監護。Care.ai減少跌倒60%。Medisafe提高用藥依從性40%。')},
        ].map(item=>(
          <div key={item.t} style={{padding:16,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}>
            <h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 6px'}}>{item.icon} {item.t}</h4>
            <p style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.6,margin:0}}>{item.d}</p>
          </div>))}
      </div>

      {/* Tool directory */}
      <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',margin:'0 0 12px',paddingBottom:8,borderBottom:'2px solid var(--border)'}}>
        🔗 {L('Industry Tools','行业工具导航','行業工具導航')}
      </h3>
      <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#10b981" />
    </div>
  )
}

const links: ToolLink[] = [
  {name:'Aidoc',url:'https://www.aidoc.com/',desc:{en:'AI radiology: flag stroke, PE, C-spine in real-time',zh:'AI影像:实时识别脑卒中/肺栓塞/颈椎骨折'},cat:'影像',icon:'🧠'},
  {name:'推想医疗',url:'https://www.infervision.com/',desc:{en:'Chinese AI radiology leader, lung nodule + stroke',zh:'国产AI影像龙头,肺结节/脑卒中/骨折AI'},cat:'影像',icon:'🫁'},
  {name:'联影智能',url:'https://www.united-imaging.com/',desc:{en:'Full-body AI imaging, Chinese medical device giant',zh:'国产医疗设备巨头,全身AI影像辅助诊断'},cat:'影像',icon:'🏥'},
  {name:'Insilico Medicine',url:'https://insilico.com/',desc:{en:'End-to-end AI drug discovery, generative chemistry',zh:'端到端AI药物研发,生成式化学,抗衰老'},cat:'制药',icon:'🧬'},
  {name:'晶泰科技',url:'https://www.xtalpi.com/',desc:{en:'Chinese AI drug discovery unicorn, quantum physics+AI',zh:'国产AI制药独角兽,量子物理+AI药物研发'},cat:'制药',icon:'💎'},
  {name:'深势科技',url:'https://www.dp.tech/',desc:{en:'AI for scientific computing, drug design platform',zh:'AI for Science,药物设计平台,分子模拟'},cat:'制药',icon:'🔬'},
  {name:'PathAI',url:'https://www.pathai.com/',desc:{en:'AI pathology: cancer diagnosis, clinical trials',zh:'AI病理分析:癌症诊断精准化,临床试验'},cat:'诊断',icon:'🔬'},
  {name:'左手医生',url:'https://www.zuoshouyisheng.com/',desc:{en:'Chinese AI clinical assistant, diagnosis support',zh:'国产AI临床助手,辅助诊断+智能导诊'},cat:'诊断',icon:'🤖'},
  {name:'Care.ai',url:'https://care.ai/',desc:{en:'AI patient monitoring, fall prevention, vitals',zh:'AI患者监测:跌倒预防/生命体征/行为分析'},cat:'护理',icon:'🛌'},
  {name:'微医',url:'https://www.guahao.com/',desc:{en:'Chinese online healthcare platform, AI triage',zh:'互联网医疗平台,AI分诊+在线复诊'},cat:'护理',icon:'📱'},
  {name:'平安健康',url:'https://www.pinganhealth.cn/',desc:{en:'Ping An health, AI health management',zh:'平安集团健康平台,AI健康管理+在线问诊'},cat:'护理',icon:'🏥'},
]
