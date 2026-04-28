// stores/authStore.js
import { ref, computed } from 'vue'
import apiClient from '@/config/axios'

// Estado global
const user = ref(null)
const token = ref(localStorage.getItem('token') || null)
const isAuthenticated = ref(!!token.value)
const isLoading = ref(false)

// Configurar token inicial en axios
if (token.value) {
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${token.value}`
}

export const useAuthStore = () => {
  const login = async (email, password) => {
    isLoading.value = true
    try {
      const response = await apiClient.post('/login', { email, password })

      token.value = response.data.token
      user.value = response.data.user
      isAuthenticated.value = true

      localStorage.setItem('token', response.data.token)
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`

      return response.data
    } catch (error) {
      // Limpiar en caso de error
      token.value = null
      user.value = null
      isAuthenticated.value = false
      localStorage.removeItem('token')
      delete apiClient.defaults.headers.common['Authorization']
      throw error.response?.data || error
    } finally {
      isLoading.value = false
    }
  }

  const logout = async () => {
    try {
      await apiClient.post('/logout')
    } catch (error) {
      console.error('Error en logout:', error)
    } finally {
      token.value = null
      user.value = null
      isAuthenticated.value = false
      localStorage.removeItem('token')
      delete apiClient.defaults.headers.common['Authorization']
    }
  }

  const fetchUser = async () => {
    if (!token.value) return null

    try {
      const response = await apiClient.get('/me')
      user.value = response.data.user
      isAuthenticated.value = true
      return user.value
    } catch (error) {
      console.error('Error fetching user:', error)
      // Si hay error al obtener el usuario, limpiar sesión
      token.value = null
      user.value = null
      isAuthenticated.value = false
      localStorage.removeItem('token')
      delete apiClient.defaults.headers.common['Authorization']
      return null
    }
  }

  const checkAuth = async () => {
    // Si ya hay token pero no hay usuario, intentar obtenerlo
    if (token.value && !user.value) {
      await fetchUser()
    }
    return isAuthenticated.value
  }

  // Inicializar la sesión al cargar el store
  const initAuth = async () => {
    if (token.value && !user.value) {
      await fetchUser()
    }
  }

  // Getters
  const isAdmin = computed(() => user.value?.is_admin === true)
  const userName = computed(() => user.value?.name || '')
  const userEmail = computed(() => user.value?.email || '')

  return {
    // Estado
    user,
    token,
    isAuthenticated,
    isLoading,
    // Getters
    isAdmin,
    userName,
    userEmail,
    // Acciones
    login,
    logout,
    fetchUser,
    checkAuth,
    initAuth,
  }
}
