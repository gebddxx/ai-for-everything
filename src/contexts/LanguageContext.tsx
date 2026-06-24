import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import type { Lang } from '../i18n/translations'
import { t } from '../i18n/translations'

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  t: typeof t.en
}

const LanguageContext = createContext<LangCtx>({
  lang: 'en',
  setLang: () => {},
  t: t.en,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('ai-logistics-lang')
    return (saved === 'zh-CN' || saved === 'zh-TW' || saved === 'en') ? saved : 'en'
  })

  useEffect(() => {
    localStorage.setItem('ai-logistics-lang', lang)
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useT() {
  return useContext(LanguageContext)
}
