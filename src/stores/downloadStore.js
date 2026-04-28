// stores/downloadStore.js
import { ref } from 'vue'
import apiClient from '@/config/axios'

export const useDownloadStore = () => {
  const downloads = ref([])
  const currentDownload = ref(null)
  const categories = ref([])
  const isLoading = ref(false)
  const pagination = ref({
    current_page: 1,
    last_page: 1,
    per_page: 10,
    total: 0,
  })

  const fetchDownloads = async (params = {}) => {
    isLoading.value = true
    try {
      const response = await apiClient.get('/admin/downloads', { params })
      const downloadsData = response.data.data

      let downloadsArray = []
      if (downloadsData.data && Array.isArray(downloadsData.data)) {
        downloadsArray = downloadsData.data
      } else if (Array.isArray(downloadsData)) {
        downloadsArray = downloadsData
      } else {
        downloadsArray = []
      }

      downloads.value = downloadsArray
      pagination.value = {
        current_page: downloadsData.current_page || 1,
        last_page: downloadsData.last_page || 1,
        per_page: downloadsData.per_page || 10,
        total: downloadsData.total || 0,
      }

      return response.data
    } catch (error) {
      console.error('Error fetching downloads:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const fetchDownload = async id => {
    isLoading.value = true
    try {
      const response = await apiClient.get(`/admin/downloads/${id}`)
      const download = response.data.data
      if (download) {
        currentDownload.value = download
      }
      return response.data
    } catch (error) {
      console.error('Error fetching download:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const createDownload = async (data, file) => {
    isLoading.value = true
    try {
      const formData = new FormData()

      // Agregar el archivo
      if (file) {
        formData.append('file', file)
      }

      // Agregar los demás campos
      Object.keys(data).forEach(key => {
        if (key !== 'file' && data[key] !== null && data[key] !== undefined) {
          if (typeof data[key] === 'boolean') {
            formData.append(key, data[key] ? '1' : '0')
          } else {
            formData.append(key, data[key])
          }
        }
      })

      const response = await apiClient.post('/admin/downloads', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      return response.data
    } catch (error) {
      console.error('Error creating download:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const updateDownload = async (id, data, file = null) => {
    isLoading.value = true
    try {
      const formData = new FormData()

      // Si hay archivo nuevo, agregarlo
      if (file) {
        formData.append('file', file)
      }

      // Agregar los demás campos
      Object.keys(data).forEach(key => {
        if (key !== 'file' && data[key] !== null && data[key] !== undefined) {
          if (typeof data[key] === 'boolean') {
            formData.append(key, data[key] ? '1' : '0')
          } else {
            formData.append(key, data[key])
          }
        }
      })
      formData.append('_method', 'PUT')

      const response = await apiClient.post(`/admin/downloads/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      return response.data
    } catch (error) {
      console.error('Error updating download:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const deleteDownload = async id => {
    isLoading.value = true
    try {
      const response = await apiClient.delete(`/admin/downloads/${id}`)
      return response.data
    } catch (error) {
      console.error('Error deleting download:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const togglePublish = async id => {
    isLoading.value = true
    try {
      const response = await apiClient.post(`/admin/downloads/${id}/toggle-publish`)
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
      const response = await apiClient.get('/admin/downloads/categories')
      categories.value = response.data.data
      return response.data
    } catch (error) {
      console.error('Error fetching categories:', error)
      throw error
    }
  }

  return {
    downloads,
    currentDownload,
    categories,
    isLoading,
    pagination,
    fetchDownloads,
    fetchDownload,
    createDownload,
    updateDownload,
    deleteDownload,
    togglePublish,
    fetchCategories,
  }
}
