import { useT } from '../contexts/LanguageContext'

const colors = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444']
const emojis = ['🏭', '🚛', '🚁', '📊', '🤖']
const MODULE_KEYS = ['warehouse', 'transport', 'delivery', 'prediction', 'operation'] as const

export default function MindMap() {
  const { t } = useT()

  const nodes = MODULE_KEYS.map((key, i) => {
    const mod = t.modules[key]
    return {
      id: key,
      label: mod.title as string,
      emoji: emojis[i],
      color: colors[i],
      subs: (mod.cases as { items: { company: string }[] }[])
        .flatMap(c => c.items.map(it => it.company))
        .slice(0, 3),
    }
  })

  return (
    <div style={containerStyle}>
      {/* center hub */}
      <div style={hubStyle}>
        <span style={{ fontSize: 42 }}>📦</span>
        <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1 }}>{t.mindmap.hub}</span>
      </div>

      {/* tree trunk line: hub → horizontal bar */}
      <div style={trunkStyle} />

      {/* horizontal distribution bar */}
      <div style={hBarStyle}>
        {nodes.map((node) => (
          <div key={node.id} style={{ ...hBarDot, background: node.color }} />
        ))}
      </div>

      {/* branches */}
      <div style={branchesStyle}>
        {nodes.map((node) => (
          <div key={node.id} style={branchColStyle}>

            {/* vertical drop line */}
            <div style={{ ...dropLineStyle, background: node.color }} />

            {/* main card */}
            <div style={{ ...mainCardStyle, background: node.color }}>
              <span style={{ fontSize: 26 }}>{node.emoji}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#fff', textAlign: 'center' }}>
                {node.label}
              </span>
            </div>

            {/* sub connector dots + lines */}
            <div style={subConnectorStyle}>
              <div style={{ ...subDotStyle, background: node.color }} />
              <div style={{ ...subVertLine, background: node.color }} />
            </div>

            {/* sub items */}
            <div style={subsStyle}>
              {node.subs.map((name, si) => (
                <div key={si} style={{ ...subPillStyle, borderColor: node.color }}>
                  <span style={{ ...bulletStyle, background: node.color }} />
                  <span style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.3 }}>
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '28px 20px 20px',
  gap: 28,
}

const hubStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 6,
  padding: '18px 36px',
  background: 'linear-gradient(135deg, #1e3a8a, #2563eb)',
  borderRadius: 20,
  color: '#fff',
  boxShadow: '0 4px 20px rgba(37, 99, 235, 0.35)',
  zIndex: 2,
  position: 'relative',
}

const branchesStyle: React.CSSProperties = {
  display: 'flex',
  gap: 14,
  flexWrap: 'wrap',
  justifyContent: 'center',
  width: '100%',
  maxWidth: 1100,
}

const branchColStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 10,
  flex: '1 1 180px',
  minWidth: 170,
  maxWidth: 220,
}

const trunkStyle: React.CSSProperties = {
  width: 3,
  height: 24,
  background: '#94a3b8',
  borderRadius: 2,
  opacity: 0.6,
}

const hBarStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%',
  maxWidth: 1050,
  height: 3,
  background: '#94a3b8',
  borderRadius: 2,
  opacity: 0.35,
  position: 'relative',
}

const hBarDot: React.CSSProperties = {
  width: 10,
  height: 10,
  borderRadius: '50%',
  marginTop: -3.5,
}

const dropLineStyle: React.CSSProperties = {
  width: 2,
  height: 14,
  borderRadius: 1,
  opacity: 0.5,
}

const subConnectorStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 0,
  height: 14,
}

const subDotStyle: React.CSSProperties = {
  width: 7,
  height: 7,
  borderRadius: '50%',
  opacity: 0.6,
}

const subVertLine: React.CSSProperties = {
  width: 2,
  height: 8,
  borderRadius: 1,
  opacity: 0.35,
}

const mainCardStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 6,
  padding: '16px 14px',
  borderRadius: 14,
  width: '100%',
  boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
  color: '#fff',
}

const subsStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  width: '100%',
}

const bulletStyle: React.CSSProperties = {
  width: 8, height: 8, borderRadius: '50%', flexShrink: 0, marginTop: 2,
}

const subPillStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 8,
  padding: '8px 10px',
  borderRadius: 8,
  border: '1px solid',
  borderLeftWidth: 3,
  background: 'var(--bg-card, #fff)',
}
