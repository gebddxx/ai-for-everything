import { useState, useRef, useCallback, useEffect } from 'react'
import { useT } from '../contexts/LanguageContext'

// Layout constants
const CX = 450
const CY = 260
const MAIN_R = 150
const SUB_R = 80
const MW = 195
const MH = 68
const SW = 208
const SH = 28
const VB_W = 920
const VB_H = 540

function getAngle(i: number, total: number) {
  return (i / total) * 2 * Math.PI - Math.PI / 2
}

function getMainPos(i: number, total: number) {
  const a = getAngle(i, total)
  return {
    x: CX + MAIN_R * Math.cos(a),
    y: CY + MAIN_R * Math.sin(a),
    angle: a,
    isRight: Math.cos(a) >= 0,
  }
}

function getSubPos(
  mainAngle: number, subIndex: number, subTotal: number
) {
  const spread = 0.55
  const baseAngle = mainAngle + (subIndex - (subTotal - 1) / 2) * (spread / subTotal)
  const dist = MAIN_R + SUB_R
  const x = CX + dist * Math.cos(baseAngle)
  const y = CY + dist * Math.sin(baseAngle)
  const isRight = Math.cos(baseAngle) >= 0
  return { x, y, cardX: isRight ? x : x - SW, cardY: y - SH / 2 }
}

const colors = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444']
const emojis = ['🏭', '🚛', '🚁', '📊', '🤖']

const MODULE_KEYS = ['warehouse', 'transport', 'delivery', 'prediction', 'operation'] as const

export default function MindMap() {
  const { t } = useT()
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

  // Build nodes from translations
  const nodes = MODULE_KEYS.map((key, i) => {
    const mod = t.modules[key]
    const cases = mod.cases.flatMap((c: { items: { company: string; detail: string }[] }) =>
      c.items.map(it => ({ label: `${it.company} — ${it.detail.length > 55 ? it.detail.slice(0, 55) + '...' : it.detail}` }))
    ).slice(0, 3)
    return {
      id: key,
      label: mod.title as string,
      emoji: emojis[i],
      color: colors[i],
      subs: cases as { label: string }[],
    }
  })

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

      <div
        ref={containerRef}
        onMouseDown={onMouseDown}
        style={{ overflow: 'hidden', border: '1px solid var(--border)', borderRadius: 12, background: 'var(--bg-body)', cursor: 'grab', height: VB_H + 80 }}
      >
        <div style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`, transformOrigin: 'top left', transition: 'transform 0.08s ease-out', width: VB_W, height: VB_H }}>
          <svg viewBox={`0 0 ${VB_W} ${VB_H}`} style={{ width: '100%', maxWidth: VB_W, height: 'auto', display: 'block' }}>
            {nodes.map((node, i) => {
              const total = nodes.length
              const main = getMainPos(i, total)
              const mainCardX = main.isRight ? main.x : main.x - MW
              const mainCardY = main.y - MH / 2

              return (
                <g key={node.id}>
                  <path d={`M ${CX} ${CY} Q ${(CX + main.x) / 2} ${(CY + main.y) / 2} ${main.x} ${main.y}`}
                    fill="none" stroke={node.color} strokeWidth={3} strokeOpacity={0.5} />
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
                    {t.mindmap.cases.replace('{n}', String(node.subs.length))}
                  </text>

                  {node.subs.map((sub, si) => {
                    const sp = getSubPos(main.angle, si, node.subs.length)
                    return (
                      <g key={si}>
                        <line x1={main.x} y1={main.y} x2={sp.x} y2={sp.y}
                          stroke={node.color} strokeWidth={1.5} strokeOpacity={0.35} strokeDasharray="4 3" />
                        <circle cx={sp.x} cy={sp.y} r={3} fill={node.color} opacity={0.6} />
                        <rect x={sp.cardX} y={sp.cardY} width={SW} height={SH} rx={6}
                          fill="var(--bg-card, #fff)" stroke={node.color} strokeWidth={1.2} strokeOpacity={0.6} />
                        <text x={sp.cardX + 8} y={sp.cardY + 18} fontSize={10.5} fill="var(--text-secondary, #64748b)">
                          {sub.label}
                        </text>
                      </g>
                    )
                  })}
                </g>
              )
            })}

            <circle cx={CX} cy={CY} r={56} fill="#1e3a8a" />
            <circle cx={CX} cy={CY} r={54} fill="#2563eb" opacity={0.2} />
            <text x={CX} y={CY - 2} textAnchor="middle" fontSize={38} fill="#fff">📦</text>
            <text x={CX} y={CY + 26} textAnchor="middle" fontSize={12} fontWeight={700} fill="#fff" letterSpacing={1}>
              {t.mindmap.hub}
            </text>
            <text x={CX} y={VB_H - 8} textAnchor="middle" fontSize={11} fill="var(--text-muted, #94a3b8)">
              {t.overview.mindmapTip}
            </text>
          </svg>
        </div>
      </div>
    </div>
  )
}

const btnStyle: React.CSSProperties = {
  padding: '4px 12px', fontSize: 13, borderRadius: 6,
  border: '1px solid var(--border)', background: 'var(--bg-card)',
  color: 'var(--text)', cursor: 'pointer',
}
