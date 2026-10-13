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

    const baseURL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000'
    const cleanBaseURL = baseURL.replace(/\/api\/?$/, '')

    // Para artículos
    const articleMatch = path.match(/(articles\/[^\/]+\.(jpg|jpeg|png|gif|webp))$/i)
    if (articleMatch) {
      return `${cleanBaseURL}/storage/${articleMatch[1]}`
    }

    // Para autores (avatares)
    const authorMatch = path.match(/(authors\/[^\/]+\.(jpg|jpeg|png|gif|webp))$/i)
    if (authorMatch) {
      return `${cleanBaseURL}/storage/${authorMatch[1]}`
    }

    // Para videos (thumbnails)
    const videoMatch = path.match(/(videos\/[^\/]+\.(jpg|jpeg|png|gif|webp))$/i)
    if (videoMatch) {
      return `${cleanBaseURL}/storage/${videoMatch[1]}`
    }

    // Para podcasts (cover_image)
    const podcastMatch = path.match(/(podcasts\/[^\/]+\.(jpg|jpeg|png|gif|webp))$/i)
    if (podcastMatch) {
      return `${cleanBaseURL}/storage/${podcastMatch[1]}`
    }

    // Fallback genérico
    const cleanPath = path.replace(/^\/?(storage\/?)+/g, '')
    return `${cleanBaseURL}/storage/${cleanPath}`
  }

  const getLatestArticles = async (limit = 3) => {
    try {
      const response = await apiClient.get('/public/articles', {
        params: { limit, sort: 'latest' },
      })

      const items = response.data?.data || []
      items.forEach(item => {
        item.featured_image = getImageUrl(item.featured_image)
        if (item.author && item.author.avatar_url) {
          item.author.avatar_url = getImageUrl(item.author.avatar_url)
        }
      })

      return { data: items }
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

      const items = response.data?.data || []
      items.forEach(item => {
        item.thumbnail_url = getImageUrl(item.thumbnail_url)
      })

      return { data: items }
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

      const items = response.data?.data || []
      items.forEach(item => {
        item.cover_image = getImageUrl(item.cover_image)
      })

      return { data: items }
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

      const items = response.data?.data || []
      // Los downloads no tienen imagen, solo icono
      return { data: items }
    } catch (error) {
      console.error('Error fetching latest downloads:', error)
      return { data: [] }
    } finally {
      isLoading.value = false
    }
  }

  const getArticleBySlug = async slug => {
    isLoading.value = true
    try {
      const response = await apiClient.get(`/public/articles/${slug}`)
      const article = response.data.data || null
      if (article) {
        article.featured_image = getImageUrl(article.featured_image)
        if (article.author && article.author.avatar_url) {
          article.author.avatar_url = getImageUrl(article.author.avatar_url)
        }
      }
      return { data: article }
    } catch (error) {
      console.error('Error fetching article:', error)
      return { data: null }
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
    getArticleBySlug,
  }
}
