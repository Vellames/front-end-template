import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Locales
import EnLocale from '../locales/en.json'
import PtBrLocale from '../locales/br.json'

const i18nBootstrap = {
  init (): void {
    i18n
      .use(initReactI18next) // passes i18n down to react-i18next
      .init({
        resources: {
          en: { translation: EnLocale },
          br: { translation: PtBrLocale }
        },
        lng: 'br',
        fallbackLng: 'br',

        interpolation: {
          escapeValue: false
        }
      })
  }
}

export default i18nBootstrap
