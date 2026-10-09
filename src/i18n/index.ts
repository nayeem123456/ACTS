import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en'
import ar from './locales/ar'

const STORAGE_KEY = 'acts-lang'

const savedLang =
  typeof window !== 'undefined'
    ? localStorage.getItem(STORAGE_KEY) || 'en'
    : 'en'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: savedLang,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (lang) => {
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    // localStorage unavailable — graceful fallback
  }
  const html = document.documentElement
  html.lang = lang
  html.dir = lang === 'ar' ? 'rtl' : 'ltr'
})

// Set initial dir/lang
if (typeof document !== 'undefined') {
  document.documentElement.lang = savedLang
  document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr'
}

export default i18n
