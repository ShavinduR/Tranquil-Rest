import { createContext, useContext, useEffect, useState } from 'react'
import { content } from './content.js'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'tranquil-rest-lang'

function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'si') return saved
  } catch {
    // localStorage can be blocked (private mode); fall through
  }
  return navigator.language?.toLowerCase().startsWith('si') ? 'si' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // ignore
    }
  }, [lang])

  const toggle = () => setLang((l) => (l === 'en' ? 'si' : 'en'))

  return (
    <LanguageContext.Provider value={{ lang, t: content[lang], toggle }}>{children}</LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  return useContext(LanguageContext)
}
