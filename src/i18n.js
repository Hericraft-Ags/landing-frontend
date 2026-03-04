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

      const fileMessages = messages[path].default
      for (const key in fileMessages) {
        loadedMessages[locale][`${fileName}.${key}`] = fileMessages[key]
      }
    }
  }

  return loadedMessages
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'es',
  fallbackLocale: 'es',
  messages: loadLocaleMessages(),
  missingWarn: false,
  fallbackWarn: false,
})

export default i18n
