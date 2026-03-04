import { createI18n } from 'vue-i18n'
function loadLocaleMessages() {
  const messages = import.meta.glob('./locales/*/*.json', { eager: true })
  console.log('Archivos encontrados por glob:', Object.keys(messages))

  const loadedMessages = {}

  for (const path in messages) {
    const matched = path.match(/\.\/locales\/([^/]+)\/(.+)\.json$/)
    if (matched) {
      const locale = matched[1]
      const fileName = matched[2]

      if (!loadedMessages[locale]) {
        loadedMessages[locale] = {}
      }
      loadedMessages[locale][fileName] = messages[path].default
    }
  }
  return loadedMessages
}
const i18n = createI18n({
  locale: 'es',
  fallbackLocale: 'es',
  messages: loadLocaleMessages(),
  legacy: false,
  globalInjection: true,
  missingWarn: false,
  fallbackWarn: false,
})

export default i18n
