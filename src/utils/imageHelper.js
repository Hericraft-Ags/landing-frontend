// utils/imageHelper.js
import apiClient from '@/config/axios'

// Obtener la base URL de la API (sin /api al final)
const getBaseUrl = () => {
  const baseURL = apiClient.defaults.baseURL
  // Eliminar /api del final si existe
  return baseURL.replace(/\/api\/?$/, '')
}

export const getImageUrl = url => {
  if (!url) return ''

  // Si ya es una URL completa
  if (url.startsWith('http')) {
    // Limpiar duplicados si existen
    if (url.includes('/storage//storage')) {
      const match = url.match(/([^\/]+\.(jpg|jpeg|png|gif|webp))$/i)
      if (match) {
        return `${getBaseUrl()}/storage/authors/${match[1]}`
      }
    }
    return url
  }

  // Extraer el nombre del archivo
  const match = url.match(/([^\/]+\.(jpg|jpeg|png|gif|webp))$/i)
  if (match) {
    return `${getBaseUrl()}/storage/authors/${match[1]}`
  }

  return `${getBaseUrl()}/storage/${url.replace(/^\/+/, '')}`
}
