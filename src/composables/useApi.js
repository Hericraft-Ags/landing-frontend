// composables/useApi.js
import apiClient from '@/config/axios'

export const useApi = () => {
  const get = async (url, params = {}) => {
    try {
      const response = await apiClient.get(url, { params })
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  }

  const post = async (url, data = {}) => {
    try {
      const response = await apiClient.post(url, data)
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  }

  const put = async (url, data = {}) => {
    try {
      const response = await apiClient.put(url, data)
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  }

  const del = async url => {
    try {
      const response = await apiClient.delete(url)
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  }

  const patch = async (url, data = {}) => {
    try {
      const response = await apiClient.patch(url, data)
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  }

  return {
    get,
    post,
    put,
    delete: del,
    patch,
    apiClient,
  }
}
