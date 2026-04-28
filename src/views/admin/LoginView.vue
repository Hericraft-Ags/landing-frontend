<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4 relative overflow-hidden"
  >
    <!-- Background decorative elements -->
    <div class="absolute inset-0 opacity-30 pointer-events-none">
      <div class="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-green-500/5 rounded-full"
      ></div>
      <div class="absolute top-1/4 right-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      <div
        class="absolute bottom-1/3 left-1/4 w-3 h-3 bg-green-500 rounded-full animate-pulse"
        style="animation-delay: 1s"
      ></div>
    </div>

    <div class="relative z-10 w-full max-w-md">
      <!-- Logo con animación -->
      <div class="text-center mb-8 mt-6 animate-slide-down">
        <h2
          class="text-3xl font-display font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent"
        >
          Bienvenido
        </h2>
        <p class="text-gray-400 text-sm mt-2">Panel de Administración</p>
      </div>

      <!-- Tarjeta de login -->
      <div
        class="bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700 p-8 animate-slide-up"
        style="animation-delay: 0.1s"
      >
        <!-- Header de la tarjeta -->
        <div class="text-center mb-6">
          <div
            class="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-1.5 rounded-full text-xs font-bold border border-green-500/20"
          >
            <i class="fas fa-shield-alt"></i>
            <span>Acceso Seguro</span>
          </div>
          <p class="text-gray-400 text-sm mt-2">Ingresa tus credenciales para acceder al panel</p>
        </div>

        <!-- Formulario -->
        <form @submit.prevent="handleLogin" class="space-y-5">
          <!-- Campo Email -->
          <div>
            <label class="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">
              Correo electrónico
            </label>
            <div class="relative group">
              <input
                v-model="form.email"
                type="email"
                class="w-full px-4 py-3 pl-11 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                placeholder="email@soluciones-hericraft.com"
                required
              />
              <i
                class="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm group-focus-within:text-green-400 transition-colors"
              ></i>
            </div>
          </div>

          <!-- Campo Password -->
          <div>
            <label class="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">
              Contraseña
            </label>
            <div class="relative group">
              <input
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                class="w-full px-4 py-3 pl-11 pr-11 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                placeholder="••••••••"
                required
              />
              <i
                class="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm group-focus-within:text-green-400 transition-colors"
              ></i>
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-400 transition"
              >
                <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'" class="text-sm"></i>
              </button>
            </div>
          </div>

          <!-- Botón de submit -->
          <button
            type="submit"
            :disabled="authStore.isLoading.value"
            class="relative w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-green-500/20 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
          >
            <span class="relative z-10 flex items-center justify-center gap-2">
              <i v-if="authStore.isLoading.value" class="fas fa-spinner fa-spin"></i>
              <i v-else class="fas fa-arrow-right-to-bracket"></i>
              {{ authStore.isLoading.value ? 'Ingresando...' : 'Iniciar Sesión' }}
            </span>
            <div
              class="absolute inset-0 bg-gradient-to-r from-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            ></div>
          </button>
        </form>

        <!-- Mensaje de error -->
        <div
          v-if="errorMessage"
          class="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl animate-shake"
        >
          <div class="flex items-center gap-2 text-red-400 text-sm">
            <i class="fas fa-exclamation-circle"></i>
            <span>{{ errorMessage }}</span>
          </div>
        </div>

        <!-- Información adicional -->
        <div class="mt-6 pt-4 border-t border-gray-700 text-center">
          <p class="text-xs text-gray-500">
            <i class="fas fa-shield-alt mr-1 text-green-500"></i>
            Acceso restringido a personal autorizado
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

const router = useRouter()
const authStore = useAuthStore()

const form = ref({
  email: '',
  password: '',
})

const showPassword = ref(false)
const errorMessage = ref('')

const handleLogin = async () => {
  errorMessage.value = ''

  try {
    await authStore.login(form.value.email, form.value.password)
    router.push('/admin/dashboard')
  } catch (error) {
    errorMessage.value = error.message || 'Error al iniciar sesión. Verifica tus credenciales.'
  }
}
</script>

<style scoped>
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-3px);
  }
  20%,
  40%,
  60%,
  80% {
    transform: translateX(3px);
  }
}

.animate-slide-down {
  animation: slideDown 0.6s ease-out forwards;
  opacity: 0;
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out forwards;
  opacity: 0;
}

.animate-shake {
  animation: shake 0.5s ease-in-out;
}

/* Mejora el autocompletado en navegadores */
input:-webkit-autofill,
input:-webkit-autofill:focus {
  transition:
    background-color 600000s 0s,
    color 600000s 0s;
}
</style>
