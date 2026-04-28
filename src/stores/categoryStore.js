// stores/categoryStore.js
import { ref } from 'vue'
import apiClient from '@/config/axios'

export const useCategoryStore = () => {
  const categories = ref([])
  const isLoading = ref(false)
  const pagination = ref({
    current_page: 1,
    last_page: 1,
    per_page: 10,
    total: 0,
  })

  const fetchCategories = async (params = {}) => {
    isLoading.value = true
    try {
      const response = await apiClient.get('/admin/categories', { params })
      categories.value = response.data.data.data
      pagination.value = {
        current_page: response.data.data.current_page,
        last_page: response.data.data.last_page,
        per_page: response.data.data.per_page,
        total: response.data.data.total,
      }
      return response.data
    } catch (error) {
      console.error('Error fetching categories:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const createCategory = async data => {
    isLoading.value = true
    try {
      const response = await apiClient.post('/admin/categories', data)
      return response.data
    } catch (error) {
      console.error('Error creating category:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const updateCategory = async (id, data) => {
    isLoading.value = true
    try {
      const response = await apiClient.put(`/admin/categories/${id}`, data)
      return response.data
    } catch (error) {
      console.error('Error updating category:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const deleteCategory = async id => {
    isLoading.value = true
    try {
      const response = await apiClient.delete(`/admin/categories/${id}`)
      return response.data
    } catch (error) {
      console.error('Error deleting category:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  return {
    categories,
    isLoading,
    pagination,
    fetchCategories,
    createCategory,
    updateCategory,
    deleteCategory,
  }
}
