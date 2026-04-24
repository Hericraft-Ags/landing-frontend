// stores/podcastStore.js
import { ref } from 'vue'
import apiClient from '@/config/axios'

const getBaseUrl = () => {
  const baseURL = apiClient.defaults.baseURL
  return baseURL.replace(/\/api\/?$/, '')
}

const cleanImageUrl = url => {
  if (!url) return null
  if (url.startsWith('http')) return url

  // Para podcasts
  const match = url.match(/([^\/]+\.(jpg|jpeg|png|gif|webp))$/i)
  if (match) {
    return `${getBaseUrl()}/storage/podcasts/${match[1]}`
  }
  return url
}

export const usePodcastStore = () => {
  const podcasts = ref([])
  const currentPodcast = ref(null)
  const categories = ref([])
  const isLoading = ref(false)
  const pagination = ref({
    current_page: 1,
    last_page: 1,
    per_page: 10,
    total: 0,
  })

  const fetchPodcasts = async (params = {}) => {
    isLoading.value = true
    try {
      const response = await apiClient.get('/admin/podcasts', { params })
      const podcastsData = response.data.data

      let podcastsArray = []
      if (podcastsData.data && Array.isArray(podcastsData.data)) {
        podcastsArray = podcastsData.data
      } else if (Array.isArray(podcastsData)) {
        podcastsArray = podcastsData
      } else {
        podcastsArray = []
      }

      podcasts.value = podcastsArray.map(podcast => ({
        ...podcast,
        cover_image: cleanImageUrl(podcast.cover_image),
      }))

      pagination.value = {
        current_page: podcastsData.current_page || 1,
        last_page: podcastsData.last_page || 1,
        per_page: podcastsData.per_page || 10,
        total: podcastsData.total || 0,
      }

      return response.data
    } catch (error) {
      console.error('Error fetching podcasts:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const fetchPodcast = async id => {
    isLoading.value = true
    try {
      const response = await apiClient.get(`/admin/podcasts/${id}`)
      const podcast = response.data.data
      if (podcast) {
        podcast.cover_image = cleanImageUrl(podcast.cover_image)
        currentPodcast.value = podcast
      }
      return response.data
    } catch (error) {
      console.error('Error fetching podcast:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const createPodcast = async data => {
    isLoading.value = true
    try {
      const formData = new FormData()
      Object.keys(data).forEach(key => {
        if (key === 'guests' && Array.isArray(data[key])) {
          formData.append(key, JSON.stringify(data[key]))
        } else if (typeof data[key] === 'boolean') {
          formData.append(key, data[key] ? '1' : '0')
        } else if (data[key] !== null && data[key] !== undefined) {
          formData.append(key, data[key])
        }
      })

      const response = await apiClient.post('/admin/podcasts', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      return response.data
    } catch (error) {
      console.error('Error creating podcast:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const updatePodcast = async (id, data) => {
    isLoading.value = true
    try {
      const formData = new FormData()
      Object.keys(data).forEach(key => {
        if (key === 'guests' && Array.isArray(data[key])) {
          formData.append(key, JSON.stringify(data[key]))
        } else if (typeof data[key] === 'boolean') {
          formData.append(key, data[key] ? '1' : '0')
        } else if (data[key] !== null && data[key] !== undefined) {
          formData.append(key, data[key])
        }
      })
      formData.append('_method', 'PUT')

      const response = await apiClient.post(`/admin/podcasts/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      return response.data
    } catch (error) {
      console.error('Error updating podcast:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const deletePodcast = async id => {
    isLoading.value = true
    try {
      const response = await apiClient.delete(`/admin/podcasts/${id}`)
      return response.data
    } catch (error) {
      console.error('Error deleting podcast:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const togglePublish = async id => {
    isLoading.value = true
    try {
      const response = await apiClient.post(`/admin/podcasts/${id}/toggle-publish`)
      return response.data
    } catch (error) {
      console.error('Error toggling publish:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const fetchCategories = async () => {
    try {
      const response = await apiClient.get('/admin/podcasts/categories')
      categories.value = response.data.data
      return response.data
    } catch (error) {
      console.error('Error fetching categories:', error)
      throw error
    }
  }

  return {
    podcasts,
    currentPodcast,
    categories,
    isLoading,
    pagination,
    fetchPodcasts,
    fetchPodcast,
    createPodcast,
    updatePodcast,
    deletePodcast,
    togglePublish,
    fetchCategories,
  }
}
