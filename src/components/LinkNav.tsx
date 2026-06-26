import { type Lang } from '../i18n/translations'

export interface ToolLink {
  name: string
  url: string
  desc: string | { en?: string; zh?: string; tw?: string }
  cat: string
  icon?: string
}

function getDesc(d: ToolLink['desc'], lang: string): string {
  if (typeof d === 'string') return d
  if (lang === 'zh-CN') return d.zh || d.en || ''
  if (lang === 'zh-TW') return d.tw || d.zh || d.en || ''
  return d.en || d.zh || ''
}

interface Props {
  links: ToolLink[]
  lang: Lang
  color?: string
}

function getFavicon(url: string) {
  try {
    const host = new URL(url).hostname
    return `https://favicon.is/${host}`
  } catch { return '' }
}

export default function LinkNav({ links, lang, color }: Props) {
  const accent = color || 'var(--primary)'

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
      gap: 8,
    }}>
      {links.map(l => (
        <a
          key={l.name}
          href={l.url}
          target="_blank"
          rel="noopener"
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
          <span style={{ fontWeight: 600, color: accent, fontSize: 13, minWidth: 100, maxWidth: 160, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {l.name}
          </span>
          <span style={{ color: 'var(--text-secondary)', fontSize: 12, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {getDesc(l.desc, lang)}
          </span>
          <span style={{ color: 'var(--text-muted)', fontSize: 14, flexShrink: 0 }}>↗</span>
        </a>
      ))}
    </div>
  )
}
