import { useTheme } from '../contexts/ThemeContext'
import { useT } from '../contexts/LanguageContext'
import { LANGS } from '../i18n/translations'
import type { Lang } from '../i18n/translations'
import styles from './Header.module.css'

export default function Header() {
  const { theme, toggle } = useTheme()
  const { lang, setLang, t } = useT()

  return (
    <header className={styles.header}>
      <span className={styles.logo}>📦</span>
      <h1 className={styles.title}>{t.header.title}</h1>
      <span className={styles.badge}>{t.header.badge}</span>
      <span className={styles.spacer} />
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
