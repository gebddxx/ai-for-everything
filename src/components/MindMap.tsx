import { useState, useRef, useCallback, useEffect } from 'react'

interface SubNode {
  label: string
}

interface Node {
  id: string
  label: string
  emoji: string
  color: string
  subs: SubNode[]
}

const nodes: Node[] = [
  {
    id: 'warehouse', label: 'Smart Warehousing', emoji: '🏭', color: '#3b82f6',
    subs: [
      { label: 'JD Health — robots bring shelves to pickers' },
      { label: 'Amazon — AI routing, cost ↓20%' },
      { label: 'Zhongke Fuchuang — unmanned coal park, 2M→5M tons' },
    ],
  },
  {
    id: 'transport', label: 'Transport Dispatch', emoji: '🚛', color: '#10b981',
    subs: [
      { label: 'Dmall — 10+ fewer trips/day for HK chain' },
      { label: 'Accenture — load rate 90%→97%' },
      { label: 'Real-time traffic → optimal routes' },
    ],
  },
  {
    id: 'delivery', label: 'Last-Mile Delivery', emoji: '🚁', color: '#8b5cf6',
    subs: [
      { label: 'Meituan — 100K+ drone orders in Shenzhen' },
      { label: 'Yuhu Cold Chain — drone cold-chain pilot' },
      { label: 'AGV — mature campus & community delivery' },
    ],
  },
  {
    id: 'prediction', label: 'Prediction & Decision', emoji: '📊', color: '#f59e0b',
    subs: [
      { label: 'Accenture — forecast accuracy +40%' },
      { label: 'Stockout rate ↓35-45%' },
      { label: 'J&T Express — risk detected 3-5d early' },
    ],
  },
  {
    id: 'operation', label: 'Operations & Service', emoji: '🤖', color: '#ef4444',
    subs: [
      { label: 'Niukafu — 3K orders/day, 99.99% accuracy' },
      { label: 'Yunda "Xiaoda" — 24/7 CS bot' },
      { label: 'AI digital employees — billing & reporting' },
    ],
  },
]

// Layout
const CX = 450
const CY = 260
const MAIN_R = 150
const SUB_R = 80
const VB_W = 920
const VB_H = 540
const MW = 195
const MH = 68
const SW = 208
const SH = 28

function getAngle(i: number, total: number) {
  return (i / total) * 2 * Math.PI - Math.PI / 2
}

function getMainPos(i: number) {
  const a = getAngle(i, nodes.length)
  return {
    x: CX + MAIN_R * Math.cos(a),
    y: CY + MAIN_R * Math.sin(a),
    angle: a,
    isRight: Math.cos(a) >= 0,
  }
}

function getSubPos(
  mainX: number, mainY: number, mainAngle: number,
  subIndex: number, subTotal: number, _isRight: boolean
) {
  const spread = 0.55
  const baseAngle = mainAngle + (subIndex - (subTotal - 1) / 2) * (spread / subTotal)
  const dist = MAIN_R + SUB_R
  const x = CX + dist * Math.cos(baseAngle)
  const y = CY + dist * Math.sin(baseAngle)
  const isRight = Math.cos(baseAngle) >= 0
  return {
    x, y,
    cardX: isRight ? x : x - SW,
    cardY: y - SH / 2,
  }
}

export default function MindMap() {
  const [scale, setScale] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const dragging = useRef(false)
  const last = useRef({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const zoomIn = () => setScale(s => Math.min(s + 0.2, 2.5))
  const zoomOut = () => setScale(s => Math.max(s - 0.2, 0.4))
  const reset = () => { setScale(1); setOffset({ x: 0, y: 0 }) }

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if ((e.target as HTMLElement).tagName !== 'svg' && (e.target as HTMLElement).tagName !== 'rect') return
    dragging.current = true
    last.current = { x: e.clientX, y: e.clientY }
    ;(e.target as HTMLElement).style.cursor = 'grabbing'
  }, [])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragging.current) return
      const dx = e.clientX - last.current.x
      const dy = e.clientY - last.current.y
      last.current = { x: e.clientX, y: e.clientY }
      setOffset(o => ({ x: o.x + dx, y: o.y + dy }))
    }
    const onUp = () => {
      dragging.current = false
      if (containerRef.current) containerRef.current.style.cursor = 'grab'
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  return (
    <div>
      {/* controls */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 8, alignItems: 'center' }}>
        <button onClick={zoomIn} style={btnStyle}>🔍+</button>
        <button onClick={zoomOut} style={btnStyle}>🔍−</button>
        <button onClick={reset} style={btnStyle}>↺ Reset</button>
        <span style={{ fontSize: 12, color: 'var(--text-muted)', marginLeft: 8 }}>
          {Math.round(scale * 100)}% &nbsp;|&nbsp; 🖱 drag to pan &nbsp;|&nbsp; buttons to zoom
        </span>
      </div>

      {/* zoomable / pannable viewport */}
      <div
        ref={containerRef}
        onMouseDown={onMouseDown}
        style={{
          overflow: 'hidden',
          border: '1px solid var(--border)',
          borderRadius: 12,
          background: 'var(--bg-body)',
          cursor: 'grab',
          height: VB_H + 80,
        }}
      >
        <div
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
            transformOrigin: 'top left',
            transition: 'transform 0.08s ease-out',
            width: VB_W,
            height: VB_H,
          }}
        >
          <svg viewBox={`0 0 ${VB_W} ${VB_H}`} style={{ width: '100%', maxWidth: VB_W, height: 'auto', display: 'block' }}>
            {nodes.map((node, i) => {
              const main = getMainPos(i)
              const mainCardX = main.isRight ? main.x : main.x - MW
              const mainCardY = main.y - MH / 2

              return (
                <g key={node.id}>
                  <path
                    d={`M ${CX} ${CY} Q ${(CX + main.x) / 2} ${(CY + main.y) / 2} ${main.x} ${main.y}`}
                    fill="none" stroke={node.color} strokeWidth={3} strokeOpacity={0.5}
                  />
                  <circle cx={main.x} cy={main.y} r={6} fill={node.color} />

                  <rect x={mainCardX} y={mainCardY} width={MW} height={MH} rx={12}
                    fill={node.color} stroke={node.color} strokeWidth={2} opacity={0.95} />
                  <text x={mainCardX + 22} y={mainCardY + 40} fontSize={32} textAnchor="middle" fill="#fff">
                    {node.emoji}
                  </text>
                  <text x={mainCardX + 48} y={mainCardY + 28} fontSize={13} fontWeight={700} fill="#fff">
                    {node.label}
                  </text>
                  <text x={mainCardX + 48} y={mainCardY + 48} fontSize={11} fill="rgba(255,255,255,0.75)">
                    {node.subs.length} key cases
                  </text>

                  {node.subs.map((sub, si) => {
                    const subPos = getSubPos(main.x, main.y, main.angle, si, node.subs.length, main.isRight)
                    return (
                      <g key={si}>
                        <line x1={main.x} y1={main.y} x2={subPos.x} y2={subPos.y}
                          stroke={node.color} strokeWidth={1.5} strokeOpacity={0.35} strokeDasharray="4 3" />
                        <circle cx={subPos.x} cy={subPos.y} r={3} fill={node.color} opacity={0.6} />
                        <rect x={subPos.cardX} y={subPos.cardY} width={SW} height={SH} rx={6}
                          fill="var(--bg-card, #fff)" stroke={node.color} strokeWidth={1.2} strokeOpacity={0.6} />
                        <text x={subPos.cardX + 8} y={subPos.cardY + 18} fontSize={10.5}
                          fill="var(--text-secondary, #64748b)">
                          {sub.label}
                        </text>
                      </g>
                    )
                  })}
                </g>
              )
            })}

            {/* hub */}
            <circle cx={CX} cy={CY} r={56} fill="#1e3a8a" />
            <circle cx={CX} cy={CY} r={54} fill="#2563eb" opacity={0.2} />
            <text x={CX} y={CY - 2} textAnchor="middle" fontSize={38} fill="#fff">📦</text>
            <text x={CX} y={CY + 26} textAnchor="middle" fontSize={12} fontWeight={700} fill="#fff" letterSpacing={1}>
              AI LOGISTICS
            </text>
            <text x={CX} y={VB_H - 8} textAnchor="middle" fontSize={11} fill="var(--text-muted, #94a3b8)">
              ← Select a module from the sidebar to explore full details →
            </text>
          </svg>
        </div>
      </div>
    </div>
  )
}

const btnStyle: React.CSSProperties = {
  padding: '4px 12px',
  fontSize: 13,
  borderRadius: 6,
  border: '1px solid var(--border)',
  background: 'var(--bg-card)',
  color: 'var(--text)',
  cursor: 'pointer',
}
