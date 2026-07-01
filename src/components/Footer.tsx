import { useT } from '../contexts/LanguageContext'

export default function Footer() {
  const { lang } = useT()
  const year = new Date().getFullYear()

  const links = [
    { label: 'GitHub', url: 'https://github.com/gebddxx/ai-for-everything' },
    { label: lang === 'zh-CN' ? '反馈' : lang === 'zh-TW' ? '反饋' : lang === 'ja' ? 'フィードバック' : lang === 'ko' ? '피드백' : lang === 'es' ? 'Comentarios' : 'Feedback', url: 'https://github.com/gebddxx/ai-for-everything/issues' },
  ]

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '8px 0',
      textAlign: 'center',
      color: 'var(--text-muted)',
      fontSize: 12,
      display: 'flex',
      justifyContent: 'center',
      gap: 16,
    }}>
      {links.map(l => (
        <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer"
          style={{ color: 'var(--primary)', textDecoration: 'none' }}>
          {l.label}
        </a>
      ))}
      <span>© {year} AI Navigator</span>
    </footer>
  )
}
