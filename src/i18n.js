import { createI18n } from 'vue-i18n'

function loadLocaleMessages() {
  const messages = import.meta.glob('./locales/*/*.json', { eager: true })
  const loadedMessages = {}

  for (const path in messages) {
    const matched = path.match(/\.\/locales\/([^/]+)\/(.+)\.json$/)
    if (matched) {
      const locale = matched[1]
      const fileName = matched[2]
      if (!loadedMessages[locale]) loadedMessages[locale] = {}
      loadedMessages[locale][fileName] = messages[path].default
    }
  }

  // Log para confirmar
  console.log('Locales cargados:', Object.keys(loadedMessages))
  console.log('Keys ES:', Object.keys(loadedMessages.es || {}))

  return loadedMessages
}

const messages = loadLocaleMessages()

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'es',
  fallbackLocale: 'es',
  messages,
  missingWarn: false,
  fallbackWarn: false,
})

// Exporta también los mensajes para debug
export const loadedMessages = messages
export default i18n
