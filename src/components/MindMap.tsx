import { useT } from '../contexts/LanguageContext'

const nodes = [
  { id:'overview',  label:{en:'Overview',     'zh-CN':'智慧物流概述',     'zh-TW':'智慧物流概述'},     emoji:'📋', color:'#6366f1', subs:['IoT+AI感知','智能决策','自动执行'] },
  { id:'warehouse', label:{en:'Smart Warehouse','zh-CN':'智能化仓储管理',   'zh-TW':'智慧倉儲管理'},     emoji:'🏭', color:'#3b82f6', subs:['AI视觉入库盘点','AMR/AGV机器人','智能货位规划'] },
  { id:'transport',label:{en:'Smart Transport', 'zh-CN':'智能化运输配送',   'zh-TW':'智慧運輸配送'},     emoji:'🚛', color:'#10b981', subs:['动态路径规划','自动驾驶运输','在途AI监控'] },
  { id:'delivery', label:{en:'Last-Mile',      'zh-CN':'末端最后一公里',   'zh-TW':'末端最後一公里'},   emoji:'🚁', color:'#8b5cf6', subs:['无人机无人车','智能快递柜','个性化预约'] },
  { id:'data',     label:{en:'Data Platform',  'zh-CN':'数据平台与决策',   'zh-TW':'數據平台與決策'},   emoji:'📊', color:'#f59e0b', subs:['统一数据中台','全链路可视化','AI决策支持'] },
  { id:'roadmap',  label:{en:'Roadmap',        'zh-CN':'实施路径与展望',   'zh-TW':'實施路徑與展望'},   emoji:'🔮', color:'#ef4444', subs:['分阶段实施','AI+IoT+区块链','绿色物流'] },
]

export default function MindMap() {
  const { lang } = useT()

  return (
    <div style={containerStyle}>
      <div style={hubStyle}>
        <span style={{ fontSize: 42 }}>📦</span>
        <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1 }}>{lang==='zh-CN'?'AI 智慧物流':lang==='zh-TW'?'AI 智慧物流':'AI Logistics'}</span>
      </div>
      <div style={trunkStyle} />
      <div style={hBarStyle}>
        {nodes.map(n=>(<div key={n.id} style={{...hBarDot,background:n.color}}/>))}
      </div>
      <div style={branchesStyle}>
        {nodes.map(n=>(<div key={n.id} style={branchColStyle}>
          <div style={{...dropLineStyle,background:n.color}}/>
          <div style={{...mainCardStyle,background:n.color}}>
            <span style={{fontSize:26}}>{n.emoji}</span>
            <span style={{fontSize:13,fontWeight:700,color:'#fff',textAlign:'center'}}>{n.label[lang as 'en'|'zh-CN'|'zh-TW']}</span>
          </div>
          <div style={subConnectorStyle}>
            <div style={{...subDotStyle,background:n.color}}/>
            <div style={{...subVertLine,background:n.color}}/>
          </div>
          <div style={subsStyle}>
            {n.subs.map((name,si)=>(<div key={si} style={{...subPillStyle,borderColor:n.color}}>
              <span style={{...bulletStyle,background:n.color}}/>
              <span style={{fontSize:12,color:'var(--text-secondary)',lineHeight:1.3}}>{name}</span>
            </div>))}
          </div>
        </div>))}
      </div>
    </div>
  )
}

const containerStyle:React.CSSProperties={display:'flex',flexDirection:'column',alignItems:'center',padding:'28px 20px 20px',gap:28}
const hubStyle:React.CSSProperties={display:'flex',flexDirection:'column',alignItems:'center',gap:6,padding:'18px 36px',background:'linear-gradient(135deg,#1e3a8a,#2563eb)',borderRadius:20,color:'#fff',boxShadow:'0 4px 20px rgba(37,99,235,0.35)',zIndex:2,position:'relative'}
const branchesStyle:React.CSSProperties={display:'flex',gap:10,flexWrap:'wrap',justifyContent:'center',width:'100%',maxWidth:1300}
const branchColStyle:React.CSSProperties={display:'flex',flexDirection:'column',alignItems:'center',gap:10,flex:'1 1 150px',minWidth:140,maxWidth:190}
const trunkStyle:React.CSSProperties={width:3,height:24,background:'#94a3b8',borderRadius:2,opacity:0.6}
const hBarStyle:React.CSSProperties={display:'flex',justifyContent:'space-around',width:'100%',maxWidth:1200,height:3,background:'#94a3b8',borderRadius:2,opacity:0.35,position:'relative'}
const hBarDot:React.CSSProperties={width:10,height:10,borderRadius:'50%',marginTop:-3.5}
const dropLineStyle:React.CSSProperties={width:2,height:14,borderRadius:1,opacity:0.5}
const subConnectorStyle:React.CSSProperties={display:'flex',flexDirection:'column',alignItems:'center',gap:0,height:14}
const subDotStyle:React.CSSProperties={width:7,height:7,borderRadius:'50%',opacity:0.6}
const subVertLine:React.CSSProperties={width:2,height:8,borderRadius:1,opacity:0.35}
const mainCardStyle:React.CSSProperties={display:'flex',flexDirection:'column',alignItems:'center',gap:6,padding:'14px 12px',borderRadius:14,width:'100%',boxShadow:'0 2px 12px rgba(0,0,0,0.12)',color:'#fff'}
const subsStyle:React.CSSProperties={display:'flex',flexDirection:'column',gap:6,width:'100%'}
const bulletStyle:React.CSSProperties={width:8,height:8,borderRadius:'50%',flexShrink:0,marginTop:2}
const subPillStyle:React.CSSProperties={display:'flex',alignItems:'flex-start',gap:8,padding:'8px 10px',borderRadius:8,border:'1px solid',borderLeftWidth:3,background:'var(--bg-card, #fff)'}
