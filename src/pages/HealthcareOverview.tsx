import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

export default function HealthcareOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e

  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>🏥 {L('AI 醫療健康','AI in Healthcare','AI 医疗健康')}</h2>
        <p className={styles.subtitle}>{L('AI如何重塑診斷、藥物研發和患者護理','How AI is reshaping diagnosis, drug discovery, and patient care','AI如何重塑诊断、药物研发和患者护理')}</p>
      </div>

      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:"var(--border)",margin:"36px 0 20px"}} /><h3 style={{fontSize:17,fontWeight:700,color:"var(--text)",marginBottom:16,display:"flex",alignItems:"center",gap:8}}>{L('AI正在改變醫療','AI医疗正在改变什么','AI is Transforming Healthcare')}</h3>
        <p style={{color:'var(--text-secondary)',lineHeight:1.8,fontSize:14,marginBottom:12}}>
          {L(
            'AI在医疗领域的应用已经从辅助工具升级为核心生产力。医学影像AI可以秒级识别脑卒中和肺栓塞，准确率超过90%；AI药物发现将新药研发周期从10年缩短至2-3年；临床决策支持系统帮助医生减少误诊；患者监护AI实现24小时无间断生命体征监测。据麦肯锡预测，AI每年可为全球医疗行业创造3500亿美元价值。',
            'AI的醫療應用已從輔助工具升級為核心生產力。醫學影像AI可秒級識別腦中風和肺栓塞，準確率超90%；AI藥物發現將新藥研發週期從10年縮短至2-3年；臨床決策支援系統幫助醫生減少誤診；患者監護AI實現24小時生命體徵監測。據麥肯錫預測，AI每年可為全球醫療產業創造3500億美元價值。',
            'AI in healthcare has evolved from an assistant to a core productivity tool. Medical imaging AI can detect strokes and pulmonary embolisms in seconds with 90%+ accuracy; AI drug discovery shortens R&D cycles from 10 years to 2-3 years; clinical decision support reduces misdiagnosis; patient monitoring AI enables 24/7 vital sign tracking. McKinsey estimates AI can create $350B annual value for global healthcare.'
          )}
        </p>
      </section>

      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:"var(--border)",margin:"36px 0 20px"}} /><h3 style={{fontSize:17,fontWeight:700,color:"var(--text)",marginBottom:16,display:"flex",alignItems:"center",gap:8}}>{L('前沿應用場景','前沿应用场景','Cutting-Edge Applications')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:12}}>
          {[
            {icon:'🧠',t:L('AI醫學影像','AI医学影像','AI Medical Imaging'),d:L('深度學習模型分析CT/MRI/X光圖像，秒級檢出病灶。FDA已批准超500個AI醫療設備。','深度学习模型分析CT/MRI/X光图像，秒级检出病灶。FDA已批准超500个AI医疗设备，Aidoc的脑卒中检测将诊断时间缩短52%。','Deep learning models analyze CT/MRI/X-ray images for instant lesion detection. FDA has approved 500+ AI medical devices. Aidoc reduces stroke diagnosis time by 52%.')},
            {icon:'💊',t:L('AI藥物研發','AI药物研发','AI Drug Discovery'),d:L('生成式AI加速靶點發現和分子設計。Insilico Medicine用AI將纖維化藥物研發從4.5年縮短至18個月。','生成式AI加速靶点发现和分子设计。Insilico Medicine用AI将纤维化药物研发从4.5年缩短到18个月，成本降低90%。','Generative AI accelerates target discovery and molecular design. Insilico Medicine reduced fibrosis drug R&D from 4.5 years to 18 months with 90% cost reduction.')},
            {icon:'🩺',t:L('臨床決策','临床决策支持','Clinical Decision'),d:L('AI分析電子病歷、檢驗報告和文獻，輔助醫生制定診療方案。','AI分析电子病历、检验报告和文献，辅助医生制定诊疗方案。Babylon Health的AI分诊系统在85%的案例中给出与医生一致的判断。','AI analyzes EHRs, lab results and literature to assist treatment decisions. Babylon Health AI triage matches doctor judgment in 85% of cases.')},
            {icon:'❤️',t:L('患者智慧監護','患者智能监护','Smart Patient Care'),d:L('可穿戴設備+AI實現遠程健康監測。Care.ai的醫院AI監控系統減少跌倒事件60%。','可穿戴设备+AI实现远程健康监测。Care.ai的医院AI监控系统减少跌倒事件60%，Medisafe提高用药依从性40%。','Wearables + AI enable remote health monitoring. Care.ai hospital monitoring reduces falls by 60%, Medisafe improves medication adherence by 40%.')},
          ].map(item => (
            <div key={item.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}>
              <h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 4px'}}>{item.icon} {item.t}</h4>
              <p style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.7,margin:0}}>{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.chart} style={{marginBottom:20}}>
        <div style={{height:1,background:"var(--border)",margin:"36px 0 20px"}} /><h3 style={{fontSize:17,fontWeight:700,color:"var(--text)",marginBottom:16,display:"flex",alignItems:"center",gap:8}}>{L('關鍵數據','关键数据','Key Metrics')}</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:10}}>
          {[
            {v:'500+',l:L('FDA批准AI醫療設備','FDA批准AI医疗设备','FDA-Approved AI Devices')},
            {v:'↓52%',l:L('AI縮短腦中風診斷時間','AI缩短脑卒中诊断时间','Stroke Diagnosis Time Reduced')},
            {v:'18月',l:L('AI藥物研發週期','AI药物研发周期(传统4.5年)','AI Drug R&D Cycle (vs 4.5yr)')},
            {v:'90%',l:L('成本降低','成本降低','Cost Reduction')},
            {v:'$350B',l:L('年價值潛力','年价值潜力(麦肯锡)','Annual Value Potential')},
          ].map(m => (
            <div key={m.l} style={{textAlign:'center',padding:'16px 12px',background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}>
              <div style={{fontSize:24,fontWeight:800,color:'var(--primary)'}}>{m.v}</div>
              <div style={{fontSize:12,color:'var(--text-secondary)',marginTop:4}}>{m.l}</div>
            </div>
          ))}
        </div>
      </section>

      <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12,marginTop:24}}>{L('行業工具導航','行业工具导航','Industry Tool Directory')}</h3>
      <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#10b981" />
    </div>
  )
}

const links: ToolLink[] = [
  {name:'Aidoc',url:'https://www.aidoc.com/',desc:{en:'AI radiology: flag stroke, PE, C-spine in real-time',zh:'AI影像:实时识别脑卒中、肺栓塞、颈椎骨折'},cat:'医学影像',icon:'🧠'},
  {name:'Qure.ai',url:'https://qure.ai/',desc:{en:'Chest X-ray, CT head, MSK AI interpretation',zh:'胸部X光/头部CT/肌骨AI智能解读'},cat:'医学影像',icon:'🫁'},
  {name:'Viz.ai',url:'https://www.viz.ai/',desc:{en:'AI stroke detection + care coordination platform',zh:'AI脑卒中检测+跨科室协同救治平台'},cat:'医学影像',icon:'🧠'},
  {name:'Lunit',url:'https://www.lunit.io/',desc:{en:'AI mammography + chest CT, 3D structure analysis',zh:'AI乳腺摄影+胸部CT,3D结构分析'},cat:'医学影像',icon:'📊'},
  {name:'推想医疗',url:'https://www.infervision.com/',desc:{en:'Chinese AI radiology leader, lung nodule + stroke',zh:'国产AI影像龙头,肺结节/脑卒中/骨折AI'},cat:'医学影像',icon:'🫁'},
  {name:'数坤科技',url:'https://www.shukun.net/',desc:{en:'AI cardiovascular + brain + chest diagnosis',zh:'AI心脑血管/脑部/胸部影像诊断'},cat:'医学影像',icon:'❤️'},
  {name:'联影智能',url:'https://www.united-imaging.com/',desc:{en:'Full-body AI imaging, Chinese medical device giant',zh:'国产医疗设备巨头,全身AI影像辅助诊断'},cat:'医学影像',icon:'🏥'},
  {name:'Isomorphic Labs',url:'https://www.isomorphiclabs.com/',desc:{en:'AlphaFold-based AI drug discovery, DeepMind spin-off',zh:'AlphaFold驱动AI药物发现,DeepMind子公司'},cat:'药物研发',icon:'💊'},
  {name:'Insilico Medicine',url:'https://insilico.com/',desc:{en:'End-to-end AI drug discovery, generative chemistry',zh:'端到端AI药物研发,生成式化学,抗衰老'},cat:'药物研发',icon:'🧬'},
  {name:'BenevolentAI',url:'https://www.benevolent.com/',desc:{en:'AI knowledge graph for drug target discovery',zh:'AI知识图谱挖掘药物靶点,罕见病研发'},cat:'药物研发',icon:'🔗'},
  {name:'晶泰科技',url:'https://www.xtalpi.com/',desc:{en:'Chinese AI drug discovery unicorn, quantum physics+AI',zh:'国产AI制药独角兽,量子物理+AI药物研发'},cat:'药物研发',icon:'💎'},
  {name:'深势科技',url:'https://www.dp.tech/',desc:{en:'AI for scientific computing, drug design platform',zh:'AI for Science,药物设计平台,分子模拟'},cat:'药物研发',icon:'🔬'},
  {name:'PathAI',url:'https://www.pathai.com/',desc:{en:'AI pathology: cancer diagnosis, clinical trials',zh:'AI病理分析:癌症诊断精准化,临床试验支持'},cat:'临床决策',icon:'🔬'},
  {name:'Paige AI',url:'https://paige.ai/',desc:{en:'AI prostate cancer detection, FDA breakthrough',zh:'AI前列腺癌检测,FDA突破性设备认定'},cat:'临床决策',icon:'🔬'},
  {name:'左手医生',url:'https://www.zuoshouyisheng.com/',desc:{en:'Chinese AI clinical assistant, diagnosis support',zh:'国产AI临床助手,辅助诊断+智能导诊'},cat:'临床决策',icon:'🤖'},
  {name:'森亿智能',url:'https://www.synyi.com/',desc:{en:'Chinese AI hospital data platform, clinical NLP',zh:'国产AI医院数据平台,临床自然语言处理'},cat:'临床决策',icon:'🏥'},
  {name:'Care.ai',url:'https://care.ai/',desc:{en:'AI patient monitoring, fall prevention, vitals',zh:'AI患者监测:跌倒预防/生命体征/行为分析'},cat:'患者护理',icon:'🛌'},
  {name:'Medisafe',url:'https://www.medisafe.com/',desc:{en:'AI medication adherence, personalized reminders',zh:'AI用药依从性管理,个性化提醒'},cat:'患者护理',icon:'💊'},
  {name:'微医',url:'https://www.guahao.com/',desc:{en:'Chinese online healthcare platform, AI triage',zh:'互联网医疗平台,AI分诊+在线复诊'},cat:'患者护理',icon:'📱'},
  {name:'平安健康',url:'https://www.pinganhealth.cn/',desc:{en:'Ping An health, AI health management',zh:'平安集团健康平台,AI健康管理+在线问诊'},cat:'患者护理',icon:'🏥'},
]
