import { useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'

export const pStyle: CSSProperties = { color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: 14 }
export const ulStyle: CSSProperties = { paddingLeft: 20, color: 'var(--text-secondary)', lineHeight: 2.2 }

export function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div style={{ background: 'var(--bg-card)', borderRadius: 12, padding: 22, boxShadow: 'var(--shadow)', marginBottom: 16 }}>
      <h3 style={{ marginBottom: 12, color: 'var(--text)', fontSize: 16 }}>{title}</h3>
      {children}
    </div>
  )
}

const COLLAPSE_LINES = 8

export function Code({ children }: { children: string }) {
  const lines = children.split('\n')
  const isLong = lines.length > COLLAPSE_LINES
  const [open, setOpen] = useState(!isLong)

  return (
    <div style={{ position: 'relative' }}>
      <pre style={{
        background: 'var(--code-bg, #0f172a)', color: '#e2e8f0', borderRadius: 8, padding: 16,
        fontSize: 13, lineHeight: 1.6, overflowX: 'auto',
        whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: 0,
        maxHeight: open ? 'none' : `${COLLAPSE_LINES * 21}px`, overflowY: 'hidden',
      }}>
        <code>{children}</code>
      </pre>
      {isLong && (
        <button onClick={() => setOpen(!open)} style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: open ? 'transparent' : 'linear-gradient(transparent, var(--code-bg, #0f172a) 60%)',
          border: 'none', color: '#60a5fa', cursor: 'pointer',
          padding: open ? '4px 0 0' : '32px 0 8px',
          fontSize: 12, fontWeight: 600, width: '100%', textAlign: 'center',
          borderRadius: '0 0 8px 8px',
        }}>
          {open ? '▲ 折叠' : `▼ 展开 (${lines.length} 行)`}
        </button>
      )}
    </div>
  )
}
