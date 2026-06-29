import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'
export default function LawOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (<div className={styles.page}>
    <div className={styles.head}><h2 className={styles.title}>⚖️ {L('AI in Legal','AI 法律科技','AI 法律科技')}</h2><p className={styles.subtitle}>{L('How AI transforms contract review, legal research and compliance','AI如何变革合同审查、法律研究和合规管理','AI如何變革合同審查、法律研究和合規管理')}</p></div>
    <section className={styles.chart} style={{marginBottom:20}}>
      <div style={{height:1,background:'var(--border)',margin:'36px 0 20px'}} /><h3 style={{fontSize:17,fontWeight:700,color:'var(--text)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>{L('AI法律正在改变什么','AI is Transforming Legal','AI正在改變法律')}</h3>
      <p style={{color:'var(--text-secondary)',lineHeight:1.8,fontSize:14,marginBottom:12}}>{L('法律行业正经历AI带来的效率革命。AI合同审查以95%准确率将律师从重复劳动中解放，审查速度提升20倍；法律研究AI在秒级检索百万份判例并提取关键论点；诉讼预测AI分析法官历史判案模式，准确预测案件走向。Harvey AI已成为全球顶级律所标配，DoNotPay帮消费者自动处理罚单和退款。中国法大大电子签章覆盖3000万+企业，幂律智能的AI合同审查服务数百家企业。全球法律AI市场预计2027年突破200亿美元。','法律行業正經歷AI帶來的效率革命。AI合同審查以95%準確率將律師從重複勞動中解放，審查速度提升20倍；法律研究AI在秒級檢索百萬份判例並提取關鍵論點；訴訟預測AI分析法官歷史判案模式。Harvey AI已成為全球頂級律所標配。中國法大大電子簽章覆蓋3000萬+企業。全球法律AI市場預計2027年突破200億美元。','The legal industry is undergoing an AI efficiency revolution. AI contract review frees lawyers from repetitive work with 95% accuracy at 20x speed; legal research AI searches millions of cases and extracts key arguments in seconds; litigation prediction AI analyzes judge patterns. Harvey AI is now standard at top global law firms. China Fadada e-signatures cover 30M+ enterprises. Global legal AI market projected to exceed $20B by 2027.')}</p>
    </section>
    <section className={styles.chart} style={{marginBottom:20}}>
      <div style={{height:1,background:'var(--border)',margin:'36px 0 20px'}} /><h3 style={{fontSize:17,fontWeight:700,color:'var(--text)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>{L('前沿应用场景','Cutting-Edge Applications','前沿應用場景')}</h3>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:12}}>
        {[{icon:'📄',t:L('AI合同审查','Contract Review','AI合同審查'),d:L('NLP分析合同条款自动识别风险和缺失项。Ironclad用AI管理合同全生命周期——起草→审核→谈判→签署。幂律智能的AI合同审查服务数百家企业，将审查时间从数小时压缩到分钟。','NLP analyzes contract clauses to auto-identify risks and omissions. Ironclad uses AI for full contract lifecycle. PowerLaw AI serves hundreds of enterprises, compressing review from hours to minutes.','NLP分析合同條款自動識別風險和缺失項。Ironclad用AI管理合同全生命週期。冪律智能的AI合同審查服務數百家企業。')},
        {icon:'📚',t:L('AI法律研究','Legal Research','AI法律研究'),d:L('AI秒级检索百万判例并提取关键论点。Casetext的CoCounsel用GPT-4进行法律研究，已被美国顶级律所采用。Harvey AI基于判例法和成文法回答复杂法律问题。北大法宝AI版覆盖中国3000万+法律文书。','AI searches millions of cases and extracts key arguments in seconds. Casetext CoCounsel uses GPT-4 for legal research, adopted by top US firms. Harvey AI answers complex legal questions based on case law. PKULaw AI covers 30M+ Chinese legal documents.','AI秒級檢索百萬判例並提取關鍵論點。Casetext的CoCounsel用GPT-4進行法律研究。Harvey AI基於判例法和成文法回答複雜法律問題。')},
        {icon:'🔮',t:L('AI诉讼预测','Litigation Prediction','AI訴訟預測'),d:L('AI分析法官历史判决模式预测案件走向。Lex Machina用AI分析数百万诉讼数据，帮助律师制定策略。Premonition的AI系统号称能预测律师胜率，准确率超80%。','AI analyzes judge patterns to predict case outcomes. Lex Machina analyzes millions of litigation records to guide strategy. Premonition AI predicts lawyer win rates with 80%+ accuracy.','AI分析法官歷史判決模式預測案件走向。Lex Machina用AI分析數百萬訴訟數據。Premonition的AI系統號稱能預測律師勝率。')},
        {icon:'🛡️',t:L('AI合规管理','Compliance','AI合規管理'),d:L('AI实时监控法规变化并自动更新合规策略。OneTrust用AI管理全球隐私合规。中国法大大的电子签章+AI合同审查覆盖3000万+企业。金杜律师事务所用AI进行反垄断合规分析。','AI monitors regulatory changes in real-time and auto-updates compliance. OneTrust manages global privacy compliance with AI. China Fadada covers 30M+ enterprises. King & Wood uses AI for antitrust compliance analysis.','AI即時監控法規變化並自動更新合規策略。OneTrust用AI管理全球隱私合規。中國法大大的電子簽章+AI合同審查覆蓋3000萬+企業。')},
      ].map(item => (<div key={item.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 4px'}}>{item.icon} {item.t}</h4><p style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.7,margin:0}}>{item.d}</p></div>))}
      </div>
    </section>
    <section className={styles.chart} style={{marginBottom:20}}>
      <div style={{height:1,background:'var(--border)',margin:'36px 0 20px'}} /><h3 style={{fontSize:17,fontWeight:700,color:'var(--text)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>{L('关键数据','Key Metrics','關鍵數據')}</h3>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:10}}>
        {[{v:'20×',l:L('AI vs 人工审查速度','AI vs Manual Speed','AI vs 人工審查')},{v:'95%+',l:L('合同审查准确率','Contract Review Acc','合同審查準確率')},{v:'3,000万+',l:L('法大大企业用户','Fadada Enterprise','法大大企業用戶')},{v:'$20B+',l:L('2027年法律AI市场','2027 Legal AI Mkt','2027年法律AI市場')}].map(m => (<div key={m.l} style={{textAlign:'center',padding:'16px 12px',background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}><div style={{fontSize:24,fontWeight:800,color:'var(--primary)'}}>{m.v}</div><div style={{fontSize:12,color:'var(--text-secondary)',marginTop:4}}>{m.l}</div></div>))}
      </div>
    </section>
    <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12,marginTop:24}}>{L('行业工具导航','Industry Tool Directory','行業工具導航')}</h3>
    <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#6366f1" />
  </div>)}
const links: ToolLink[] = [
  {name:'Harvey AI',url:'https://www.harvey.ai/',desc:{en:'AI for law firms: contract, due diligence, research',zh:'律所AI:合同分析/尽职调查/法律研究,全球标配'},cat:'tools',icon:'⚖️'},
  {name:'Ironclad',url:'https://ironcladapp.com/',desc:{en:'AI contract lifecycle: draft→review→negotiate',zh:'AI合同全生命周期:起草→审核→谈判→签署'},cat:'tools',icon:'🛡️'},
  {name:'Casetext',url:'https://casetext.com/',desc:{en:'AI legal research, CoCounsel GPT-4 assistant',zh:'AI法律研究,CoCounsel智能助手,GPT-4驱动'},cat:'tools',icon:'📚'},
  {name:'法大大',url:'https://www.fadada.com/',desc:{en:'Chinese e-signature leader, AI contract review, 30M+',zh:'国产电子签章领导者,AI合同审查,3000万+企业'},cat:'tools',icon:'✍️'},
  {name:'幂律智能',url:'https://www.powerlawai.com/',desc:{en:'AI contract review, due diligence, legal knowledge graph',zh:'AI合同审查,尽职调查,法律知识图谱'},cat:'tools',icon:'🧠'},
  {name:'Lex Machina',url:'https://lexmachina.com/',desc:{en:'AI litigation analytics, judge & lawyer patterns',zh:'AI诉讼分析,法官/律师行为模式预测'},cat:'tools',icon:'🔮'},
  {name:'北大法宝',url:'https://www.pkulaw.com/',desc:{en:'Chinese legal database, AI search, 30M+ documents',zh:'中国法律数据库,AI智能检索,3000万+文书'},cat:'tools',icon:'📜'},
]
