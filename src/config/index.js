// config/index.js
export const config = {
  api: {
    baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1',
    timeout: 30000,
  },
  app: {
    name: import.meta.env.VITE_APP_NAME || 'Hericraft',
    version: import.meta.env.VITE_APP_VERSION || '1.0.0',
  },
  isProduction: import.meta.env.PROD,
  isDevelopment: import.meta.env.DEV,
}
