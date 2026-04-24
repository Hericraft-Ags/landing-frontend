// stores/authorStore.js
import { ref } from 'vue'
import apiClient from '@/config/axios'

const getBaseUrl = () => {
  const baseURL = apiClient.defaults.baseURL
  return baseURL.replace(/\/api\/?$/, '')
}

const cleanImageUrl = url => {
  if (!url) return null
  if (url.startsWith('http')) return url

  const match = url.match(/([^\/]+\.(jpg|jpeg|png|gif|webp))$/i)
  if (match) {
    return `${getBaseUrl()}/storage/authors/${match[1]}`
  }
  return url
}

export const useAuthorStore = () => {
  const authors = ref([])
  const isLoading = ref(false)
  const pagination = ref({
    current_page: 1,
    last_page: 1,
    per_page: 10,
    total: 0,
  })

  const fetchAuthors = async (params = {}) => {
    isLoading.value = true
    try {
      const response = await apiClient.get('/admin/authors', { params })
      const authorsData = response.data.data

      const cleanedAuthors = authorsData.data.map(author => ({
        ...author,
        avatar_url: cleanImageUrl(author.avatar_url),
      }))

      authors.value = cleanedAuthors
      pagination.value = {
        current_page: authorsData.current_page,
        last_page: authorsData.last_page,
        per_page: authorsData.per_page,
        total: authorsData.total,
      }
      return response.data
    } catch (error) {
      console.error('Error fetching authors:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const createAuthor = async data => {
    isLoading.value = true
    try {
      const formData = new FormData()
      Object.keys(data).forEach(key => {
        if (key === 'social_links' && typeof data[key] === 'object') {
          formData.append(key, JSON.stringify(data[key]))
        } else if (data[key] !== null && data[key] !== undefined) {
          formData.append(key, data[key])
        }
      })

      const response = await apiClient.post('/admin/authors', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      return response.data
    } catch (error) {
      console.error('Error creating author:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const updateAuthor = async (id, data) => {
    isLoading.value = true
    try {
      const formData = new FormData()
      Object.keys(data).forEach(key => {
        if (key === 'social_links' && typeof data[key] === 'object') {
          formData.append(key, JSON.stringify(data[key]))
        } else if (data[key] !== null && data[key] !== undefined) {
          formData.append(key, data[key])
        }
      })
      formData.append('_method', 'PUT')

      const response = await apiClient.post(`/admin/authors/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      return response.data
    } catch (error) {
      console.error('Error updating author:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const deleteAuthor = async id => {
    isLoading.value = true
    try {
      const response = await apiClient.delete(`/admin/authors/${id}`)
      return response.data
    } catch (error) {
      console.error('Error deleting author:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  return {
    authors,
    isLoading,
    pagination,
    fetchAuthors,
    createAuthor,
    updateAuthor,
    deleteAuthor,
  }
}
