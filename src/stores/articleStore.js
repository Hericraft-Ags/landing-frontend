// stores/articleStore.js
import { ref } from 'vue'
import apiClient from '@/config/axios'

// Helper para obtener la URL completa de la imagen
const getBaseUrl = () => {
  const baseURL = apiClient.defaults.baseURL
  return baseURL.replace(/\/api\/?$/, '')
}

const cleanImageUrl = url => {
  if (!url) return null
  if (url.startsWith('http')) return url

  // Para imágenes de artículos
  const articleMatch = url.match(/(articles\/[^\/]+\.(jpg|jpeg|png|gif|webp))$/i)
  if (articleMatch) {
    return `${getBaseUrl()}/storage/${articleMatch[1]}`
  }

  // Para imágenes de autores
  const authorMatch = url.match(/(authors\/[^\/]+\.(jpg|jpeg|png|gif|webp))$/i)
  if (authorMatch) {
    return `${getBaseUrl()}/storage/${authorMatch[1]}`
  }

  // Fallback: extraer solo el nombre del archivo
  const filename = url.split('/').pop()
  if (filename && filename.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
    return `${getBaseUrl()}/storage/articles/${filename}`
  }

  return url
}

export const useArticleStore = () => {
  const articles = ref([])
  const currentArticle = ref(null)
  const categories = ref([])
  const authors = ref([])
  const isLoading = ref(false)
  const pagination = ref({
    current_page: 1,
    last_page: 1,
    per_page: 10,
    total: 0,
  })

  const fetchArticles = async (params = {}) => {
    isLoading.value = true
    try {
      const response = await apiClient.get('/admin/articles', { params })
      const articlesData = response.data.data

      // Transformar la imagen destacada de cada artículo usando cleanImageUrl
      articlesData.data = articlesData.data.map(article => ({
        ...article,
        featured_image: cleanImageUrl(article.featured_image),
      }))

      articles.value = articlesData.data
      pagination.value = {
        current_page: articlesData.current_page,
        last_page: articlesData.last_page,
        per_page: articlesData.per_page,
        total: articlesData.total,
      }
      return response.data
    } catch (error) {
      console.error('Error fetching articles:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const fetchArticle = async id => {
    isLoading.value = true
    try {
      const response = await apiClient.get(`/admin/articles/${id}`)
      const article = response.data.data
      if (article.featured_image) {
        article.featured_image = cleanImageUrl(article.featured_image)
      }
      currentArticle.value = article
      return response.data
    } catch (error) {
      console.error('Error fetching article:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const createArticle = async data => {
    isLoading.value = true
    try {
      const formData = new FormData()
      Object.keys(data).forEach(key => {
        if (key === 'tags' && Array.isArray(data[key])) {
          formData.append(key, JSON.stringify(data[key]))
        } else if (typeof data[key] === 'boolean') {
          formData.append(key, data[key] ? '1' : '0')
        } else if (data[key] !== null && data[key] !== undefined) {
          formData.append(key, data[key])
        }
      })

      const response = await apiClient.post('/admin/articles', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      return response.data
    } catch (error) {
      console.error('Error creating article:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const updateArticle = async (id, data) => {
    isLoading.value = true
    try {
      const formData = new FormData()
      Object.keys(data).forEach(key => {
        if (key === 'tags' && Array.isArray(data[key])) {
          formData.append(key, JSON.stringify(data[key]))
        } else if (typeof data[key] === 'boolean') {
          formData.append(key, data[key] ? '1' : '0')
        } else if (data[key] !== null && data[key] !== undefined) {
          formData.append(key, data[key])
        }
      })
      formData.append('_method', 'PUT')

      const response = await apiClient.post(`/admin/articles/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      return response.data
    } catch (error) {
      console.error('Error updating article:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const deleteArticle = async id => {
    isLoading.value = true
    try {
      const response = await apiClient.delete(`/admin/articles/${id}`)
      return response.data
    } catch (error) {
      console.error('Error deleting article:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const togglePublish = async id => {
    isLoading.value = true
    try {
      const response = await apiClient.post(`/admin/articles/${id}/toggle-publish`)
      return response.data
    } catch (error) {
      console.error('Error toggling publish:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const toggleFeatured = async id => {
    isLoading.value = true
    try {
      const response = await apiClient.post(`/admin/articles/${id}/toggle-featured`)
      return response.data
    } catch (error) {
      console.error('Error toggling featured:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const fetchCategories = async () => {
    try {
      const response = await apiClient.get('/admin/articles/categories')
      categories.value = response.data.data
      return response.data
    } catch (error) {
      console.error('Error fetching categories:', error)
      throw error
    }
  }

  const fetchAuthors = async () => {
    try {
      const response = await apiClient.get('/admin/articles/authors')
      authors.value = response.data.data
      return response.data
    } catch (error) {
      console.error('Error fetching authors:', error)
      throw error
    }
  }

  const getLatestArticles = async (limit = 5) => {
    try {
      const response = await apiClient.get('/public/articles', {
        params: { limit, sort: 'latest' },
      })
      return response.data
    } catch (error) {
      console.error('Error fetching latest articles:', error)
      return { data: [] }
    }
  }

  return {
    articles,
    currentArticle,
    categories,
    authors,
    isLoading,
    pagination,
    fetchArticles,
    fetchArticle,
    createArticle,
    updateArticle,
    deleteArticle,
    togglePublish,
    toggleFeatured,
    fetchCategories,
    fetchAuthors,
    getLatestArticles,
  }
}
