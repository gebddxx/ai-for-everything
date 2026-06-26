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

export function Code({ children }: { children: string }) {
  return (
    <pre style={{ background: '#0f172a', color: '#e2e8f0', borderRadius: 8, padding: 16, fontSize: 13, lineHeight: 1.6, overflowX: 'auto', whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: 0 }}>
      <code>{children}</code>
    </pre>
  )
}
