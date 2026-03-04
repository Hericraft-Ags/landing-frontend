import { createI18n } from 'vue-i18n'

function flattenMessages(obj, prefix = '') {
  return Object.keys(obj).reduce((acc, key) => {
    const fullKey = prefix ? `${prefix}.${key}` : key
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      Object.assign(acc, flattenMessages(obj[key], fullKey))
    } else {
      acc[fullKey] = obj[key]
    }
    return acc
  }, {})
}

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
      const flattened = flattenMessages(fileMessages, fileName)
      Object.assign(loadedMessages[locale], flattened)
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
