// config/axios.js
import axios from 'axios'

// Obtener la URL base desde variables de entorno
const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api/'

// Crear instancia de axios con configuración base
const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
})

// Interceptor para agregar token a todas las peticiones
apiClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// Interceptor para manejar respuestas
apiClient.interceptors.response.use(
  response => {
    return response
  },
  async error => {
    const originalRequest = error.config

    // Manejar error 401 (no autorizado)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      // Limpiar token y redirigir a login
      localStorage.removeItem('token')
      delete apiClient.defaults.headers.common['Authorization']

      // Redirigir a login si no está ya en esa página
      if (window.location.pathname !== '/admin/login') {
        window.location.href = '/admin/login'
      }
    }

    return Promise.reject(error)
  }
)

export default apiClient
