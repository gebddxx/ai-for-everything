import { useTheme } from '../contexts/ThemeContext'
import { useT } from '../contexts/LanguageContext'
import { LANGS } from '../i18n/translations'
import type { Lang } from '../i18n/translations'
import SearchBox from './SearchBox'
import styles from './Header.module.css'

interface Props {
  onBack?: () => void
  onNavigate?: (domain: string | null, section?: string) => void
}

export default function Header({ onBack, onNavigate }: Props) {
  const { theme, toggle } = useTheme()
  const { lang, setLang, t } = useT()

  return (
    <header className={styles.header}>
      {onBack && (
        <button className={styles.backBtn} onClick={onBack} title="Back to home">
          ←
        </button>
      )}
      <div onClick={() => onBack?.()} title="回到首页" style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', userSelect: 'none' }}>
        <span className={styles.logo}>📦</span>
        <h1 className={styles.title}>{t.header.title}</h1>
      </div>
      <span className={styles.badge}>{t.header.badge}</span>
      <span className={styles.spacer} />
      {onNavigate && <SearchBox onNavigate={onNavigate} />}
      <div className={styles.langGroup}>
        {LANGS.map((l) => (
          <button
            key={l.key}
            className={`${styles.langBtn} ${lang === l.key ? styles.langActive : ''}`}
            onClick={() => setLang(l.key as Lang)}
          >
            {l.label}
          </button>
        ))}
      </div>
      <button className={styles.themeBtn} onClick={toggle} title="Toggle theme">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </header>
  )
}
