import { useState, useRef, useEffect } from 'react'
import { searchIndex } from '../data/searchIndex'

interface Props {
  onNavigate: (domain: string | null, section?: string) => void
}

export default function SearchBox({ onNavigate }: Props) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  // Fuzzy match: split query into chars, all must be found in order in keywords
  const results = query.trim().length >= 1
    ? searchIndex.filter(entry => {
        const q = query.toLowerCase()
        return entry.keywords.some(kw => {
          // simple substring match for most cases
          if (kw.includes(q)) return true
          // if query is 2+ chars, check if each char appears in order (fuzzy)
          if (q.length >= 2) {
            let pos = 0
            for (const ch of q) {
              pos = kw.indexOf(ch, pos)
              if (pos === -1) return false
              pos++
            }
            return true
          }
          return false
        })
      }).slice(0, 12)
    : []

  useEffect(() => {
    setSelected(0)
  }, [query])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelected(s => Math.min(s + 1, results.length - 1)) }
    if (e.key === 'ArrowUp') { e.preventDefault(); setSelected(s => Math.max(s - 1, 0)) }
    if (e.key === 'Enter' && results[selected]) {
      const r = results[selected]
      onNavigate(r.domain, r.section)
      setQuery('')
      setOpen(false)
    }
    if (e.key === 'Escape') { setOpen(false); inputRef.current?.blur() }
  }

  // close on outside click
  useEffect(() => {
    const handler = () => setOpen(false)
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <div style={{ position: 'relative' }} onClick={e => e.stopPropagation()}>
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={e => { setQuery(e.target.value); setOpen(true) }}
        onFocus={() => { if (query) setOpen(true) }}
        onKeyDown={handleKeyDown}
        placeholder="搜索工具、页面…"
        style={{
          width: 200,
          padding: '5px 12px',
          borderRadius: 8,
          border: '1px solid var(--border)',
          background: 'var(--bg-card)',
          color: 'var(--text)',
          fontSize: 13,
          outline: 'none',
          transition: 'all .15s',
        }}
      />
      {open && results.length > 0 && (
        <div style={{
          position: 'absolute', top: '100%', left: 0,
          marginTop: 6,
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 10,
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          width: 320,
          maxHeight: 400,
          overflowY: 'auto',
          zIndex: 1000,
        }}>
          {results.map((r, i) => (
            <div
              key={r.name + r.section}
              onClick={() => {
                onNavigate(r.domain, r.section)
                setQuery('')
                setOpen(false)
              }}
              style={{
                padding: '10px 14px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                background: i === selected ? 'var(--hover-bg)' : 'transparent',
                borderBottom: i < results.length - 1 ? '1px solid var(--border)' : 'none',
              }}
              onMouseEnter={() => setSelected(i)}
            >
              <span style={{ fontSize: 14 }}>🔍</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {r.name}
                </div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>
                  {r.domain === null ? '首页' : r.domain === 'ai-news' ? 'AI速报' : r.domain === 'nav-tools' ? '🧭 导航工具集' : r.domain === 'ai-industries' ? '🏭 AI行业应用' : '🤖 AIGC教程'}
                </div>
              </div>
              <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>↵</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
