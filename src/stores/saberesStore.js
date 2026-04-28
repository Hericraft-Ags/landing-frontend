// stores/saberesStore.js
import { ref } from 'vue'
import apiClient from '@/config/axios'

export const useSaberesStore = () => {
  const articles = ref([])
  const videos = ref([])
  const podcasts = ref([])
  const downloads = ref([])
  const isLoading = ref(false)

  const getImageUrl = path => {
    if (!path) return null
    if (path.startsWith('http') && !path.includes('/storage//storage')) {
      return path
    }

    // Para imágenes de artículos
    const articleMatch = path.match(/(articles\/[^\/]+\.(jpg|jpeg|png|gif|webp))$/i)
    if (articleMatch) {
      const baseURL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000'
      const cleanBaseURL = baseURL.replace(/\/api\/?$/, '')
      return `${cleanBaseURL}/storage/${articleMatch[1]}`
    }

    // Para imágenes de autores (avatares)
    const authorMatch = path.match(/(authors\/[^\/]+\.(jpg|jpeg|png|gif|webp))$/i)
    if (authorMatch) {
      const baseURL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000'
      const cleanBaseURL = baseURL.replace(/\/api\/?$/, '')
      return `${cleanBaseURL}/storage/${authorMatch[1]}`
    }

    // Fallback: limpiar manualmente
    const cleanPath = path.replace(/^\/?(storage\/?)+/g, '')
    const baseURL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000'
    const cleanBaseURL = baseURL.replace(/\/api\/?$/, '')
    return `${cleanBaseURL}/storage/${cleanPath}`
  }

  const getLatestArticles = async (limit = 2) => {
    try {
      const response = await apiClient.get('/public/articles', {
        params: { limit, sort: 'latest' },
      })

      const articles = response.data.data || []
      articles.forEach(article => {
        // Procesar imagen destacada
        article.featured_image = getImageUrl(article.featured_image)

        // Procesar avatar del autor
        if (article.author && article.author.avatar_url) {
          article.author.avatar_url = getImageUrl(article.author.avatar_url)
        }
      })

      return { data: articles }
    } catch (error) {
      console.error('Error fetching latest articles:', error)
      return { data: [] }
    }
  }

  const getLatestVideos = async (limit = 5) => {
    isLoading.value = true
    try {
      const response = await apiClient.get('/public/videos', {
        params: { limit, sort: 'latest' },
      })
      return response.data
    } catch (error) {
      console.error('Error fetching latest videos:', error)
      return { data: [] }
    } finally {
      isLoading.value = false
    }
  }

  const getLatestPodcasts = async (limit = 5) => {
    isLoading.value = true
    try {
      const response = await apiClient.get('/public/podcasts', {
        params: { limit, sort: 'latest' },
      })
      return response.data
    } catch (error) {
      console.error('Error fetching latest podcasts:', error)
      return { data: [] }
    } finally {
      isLoading.value = false
    }
  }

  const getLatestDownloads = async (limit = 5) => {
    isLoading.value = true
    try {
      const response = await apiClient.get('/public/downloads', {
        params: { limit, sort: 'latest' },
      })
      return response.data
    } catch (error) {
      console.error('Error fetching latest downloads:', error)
      return { data: [] }
    } finally {
      isLoading.value = false
    }
  }

  return {
    articles,
    videos,
    podcasts,
    downloads,
    isLoading,
    getLatestArticles,
    getLatestVideos,
    getLatestPodcasts,
    getLatestDownloads,
  }
}
