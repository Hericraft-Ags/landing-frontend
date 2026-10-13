import { ref } from 'vue'
import apiClient from '@/config/axios'

export const useNewsletterStore = () => {
  const subscribers = ref([])
  const total = ref(0)
  const isLoading = ref(false)
  const isDeleting = ref(false)

  const fetchSubscribers = async (limit = 100) => {
    isLoading.value = true
    try {
      const [listResponse, countResponse] = await Promise.all([
        apiClient.get('/admin/newsletter/subscribers', { params: { limit } }),
        apiClient.get('/admin/newsletter/count'),
      ])

      subscribers.value = Array.isArray(listResponse.data.data) ? listResponse.data.data : []
      total.value = countResponse.data?.total ?? 0

      return listResponse.data
    } catch (error) {
      console.error('Error fetching subscribers:', error)
      return { data: [] }
    } finally {
      isLoading.value = false
    }
  }

  const deleteSubscriber = async email => {
    if (!email) {
      console.error('Email no proporcionado')
      return
    }
    isDeleting.value = true
    try {
      const response = await apiClient.delete('/admin/newsletter/subscribers', {
        params: { email },
      })
      if (response.data.success) {
        subscribers.value = subscribers.value.filter(s => s.email !== email)
        total.value--
      }
      return response.data
    } catch (error) {
      console.error('Error deleting subscriber:', error)
      throw error
    } finally {
      isDeleting.value = false
    }
  }

  const countSubscribers = async () => {
    try {
      const response = await apiClient.get('/admin/newsletter/count')
      // Asegurar que response.data.total exista
      return response.data?.total ?? 0
    } catch (error) {
      console.error('Error counting subscribers:', error)
      return 0
    }
  }

  return {
    subscribers,
    total,
    isLoading,
    isDeleting,
    fetchSubscribers,
    deleteSubscriber,
    countSubscribers,
  }
}
