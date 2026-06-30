import { type Lang } from '../i18n/translations'
import { tText } from '../i18n/translate'

export interface ToolLink {
  name: string
  url: string
  desc: string | { en?: string; zh?: string; tw?: string }
  cat: string
  icon?: string
  source?: string
}

function getDesc(d: ToolLink['desc'], lang: string): string {
  return tText(d, lang)
}

interface Props {
  links: ToolLink[]
  lang: Lang
  color?: string
}

function getFavicon(url: string) {
  // Use text fallback only — no third-party favicon service to avoid leaking browsing data
  return ''
}

export default function LinkNav({ links, lang, color }: Props) {
  const accent = color || 'var(--primary)'

  // group links by category for subtle dividers
  const grouped: { cat: string; items: ToolLink[] }[] = []
  let lastCat = ''
  links.forEach(l => {
    if (l.cat !== lastCat) {
      grouped.push({ cat: l.cat, items: [l] })
      lastCat = l.cat
    } else {
      grouped[grouped.length - 1].items.push(l)
    }
  })

  return (
    <div>
      {grouped.map((group, gi) => (
        <div key={group.cat}>
          {/* subtle category divider — only if more than 1 group */}
          {grouped.length > 1 && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              margin: gi === 0 ? '0 0 12px' : '24px 0 12px',
            }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: accent, whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                {group.cat}
              </span>
              <div style={{ flex: 1, height: 1, background: accent + '30' }} />
            </div>
          )}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: 8,
            marginBottom: gi < grouped.length - 1 ? 0 : 0,
          }}>
            {group.items.map(l => (
        <a
          key={l.name}
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '10px 14px',
            background: 'var(--bg-card)',
            borderRadius: 10,
            textDecoration: 'none',
            border: '1px solid var(--border)',
            transition: 'all .15s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = accent; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
        >
          <div style={{ position: 'relative', width: 28, height: 28, flexShrink: 0 }}>
            <span className="icon-fb" style={{
              position: 'absolute', inset: 0, borderRadius: 6,
              background: `${accent}18`, color: accent,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: l.icon ? 18 : 14, fontWeight: 700,
            }}>
              {l.icon || l.name.charAt(0).toUpperCase()}
            </span>
            <img
              className="icon-img"
              src={getFavicon(l.url)}
              alt="" width={28} height={28}
              style={{ borderRadius: 6, position: 'absolute', inset: 0, objectFit: 'contain', display: 'none' }}
              onLoad={e => {
                (e.target as HTMLImageElement).style.display = 'block'
                const fb = (e.target as HTMLElement).parentElement?.querySelector('.icon-fb') as HTMLElement
                if (fb) fb.style.display = 'none'
              }}
              onError={() => {}}
            />
          </div>
          <span style={{ fontWeight: 600, color: accent, fontSize: 13, minWidth: 80, maxWidth: 140, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {l.name}
          </span>
          {(()=>{const d=l.source||(l.url?new URL(l.url).hostname.replace('www.',''):'');return d?<span style={{fontSize:9,color:'var(--text-muted)',background:'var(--hover-bg)',padding:'1px 5px',borderRadius:4,flexShrink:0,fontWeight:500}}>{d}</span>:null})()}
          <span style={{ color: 'var(--text-secondary)', fontSize: 12, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {getDesc(l.desc, lang)}
          </span>
          <span style={{ color: 'var(--text-muted)', fontSize: 14, flexShrink: 0 }}>↗</span>
        </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
