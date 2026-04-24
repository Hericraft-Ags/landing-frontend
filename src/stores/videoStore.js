// stores/videoStore.js
import { ref } from 'vue'
import apiClient from '@/config/axios'

const getBaseUrl = () => {
  const baseURL = apiClient.defaults.baseURL
  console.log('Base URL original:', baseURL)
  // Eliminar /api/ del final y también asegurar que no haya slash al final
  const cleanUrl = baseURL.replace(/\/api\/?$/, '').replace(/\/$/, '')
  console.log('Base URL limpia:', cleanUrl)
  return cleanUrl
}

const getImageUrl = url => {
  console.log('Procesando URL de imagen:', url)

  if (!url) {
    console.log('URL vacía o nula')
    return null
  }

  // Si ya es una URL completa
  if (url.startsWith('http')) {
    console.log('URL ya es absoluta:', url)
    return url
  }

  // Limpiar la URL: eliminar slashes al inicio
  let cleanPath = url.replace(/^\/+/, '')

  // Construir URL completa sin doble slash
  const baseUrl = getBaseUrl()
  const fullUrl = `${baseUrl}/${cleanPath}`

  console.log('URL generada:', fullUrl)
  return fullUrl
}

export const useVideoStore = () => {
  const videos = ref([])
  const currentVideo = ref(null)
  const categories = ref([])
  const isLoading = ref(false)
  const pagination = ref({
    current_page: 1,
    last_page: 1,
    per_page: 10,
    total: 0,
  })

  const fetchVideos = async (params = {}) => {
    isLoading.value = true
    try {
      console.log('Fetching videos con params:', params)
      const response = await apiClient.get('/admin/videos', { params })
      console.log('Respuesta del servidor:', response.data)

      const videosData = response.data.data
      console.log('Datos de videos:', videosData)

      // Manejar diferentes estructuras de respuesta
      let videosArray = []
      if (videosData.data && Array.isArray(videosData.data)) {
        videosArray = videosData.data
      } else if (Array.isArray(videosData)) {
        videosArray = videosData
      } else {
        videosArray = []
      }

      videos.value = videosArray.map(video => {
        const processedUrl = getImageUrl(video.thumbnail_url)
        console.log(
          `Video ${video.id}: URL original=${video.thumbnail_url}, URL procesada=${processedUrl}`
        )
        return {
          ...video,
          thumbnail_url: processedUrl,
        }
      })

      pagination.value = {
        current_page: videosData.current_page || 1,
        last_page: videosData.last_page || 1,
        per_page: videosData.per_page || 15,
        total: videosData.total || 0,
      }

      console.log('Videos procesados:', videos.value)
      return response.data
    } catch (error) {
      console.error('Error fetching videos:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const fetchVideo = async id => {
    isLoading.value = true
    try {
      const response = await apiClient.get(`/admin/videos/${id}`)
      const video = response.data.data
      if (video) {
        video.thumbnail_url = getImageUrl(video.thumbnail_url)
        currentVideo.value = video
      }
      return response.data
    } catch (error) {
      console.error('Error fetching video:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const createVideo = async data => {
    isLoading.value = true
    try {
      const formData = new FormData()
      Object.keys(data).forEach(key => {
        if (typeof data[key] === 'boolean') {
          formData.append(key, data[key] ? '1' : '0')
        } else if (data[key] !== null && data[key] !== undefined) {
          formData.append(key, data[key])
        }
      })

      const response = await apiClient.post('/admin/videos', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      return response.data
    } catch (error) {
      console.error('Error creating video:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const updateVideo = async (id, data) => {
    isLoading.value = true
    try {
      const formData = new FormData()
      Object.keys(data).forEach(key => {
        if (typeof data[key] === 'boolean') {
          formData.append(key, data[key] ? '1' : '0')
        } else if (data[key] !== null && data[key] !== undefined) {
          formData.append(key, data[key])
        }
      })
      formData.append('_method', 'PUT')

      const response = await apiClient.post(`/admin/videos/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      return response.data
    } catch (error) {
      console.error('Error updating video:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const deleteVideo = async id => {
    isLoading.value = true
    try {
      const response = await apiClient.delete(`/admin/videos/${id}`)
      return response.data
    } catch (error) {
      console.error('Error deleting video:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const togglePublish = async id => {
    isLoading.value = true
    try {
      const response = await apiClient.post(`/admin/videos/${id}/toggle-publish`)
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
      const response = await apiClient.get('/admin/videos/categories')
      categories.value = response.data.data
      return response.data
    } catch (error) {
      console.error('Error fetching categories:', error)
      throw error
    }
  }

  return {
    videos,
    currentVideo,
    categories,
    isLoading,
    pagination,
    fetchVideos,
    fetchVideo,
    createVideo,
    updateVideo,
    deleteVideo,
    togglePublish,
    fetchCategories,
  }
}
