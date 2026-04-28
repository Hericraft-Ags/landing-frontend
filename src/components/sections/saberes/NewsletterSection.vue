<!-- components/saberes/NewsletterSection.vue -->
<template>
  <section
    class="bg-navy py-20 px-6 text-center text-white border-t border-white/10 relative overflow-hidden"
  >
    <div
      class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"
    ></div>
    <div class="max-w-2xl mx-auto relative z-10">
      <span class="text-cyan font-bold uppercase tracking-widest text-xs mb-4 block"
        >Mantente Actualizado</span
      >
      <h2 class="text-3xl font-display font-bold mb-6">
        Recibe conocimiento de valor en tu bandeja
      </h2>
      <p class="text-gray-300 mb-8 text-sm">
        Únete a +5,000 educadores que reciben semanalmente nuestros recursos, invitaciones a eventos
        y novedades del sector.
      </p>

      <form
        @submit.prevent="handleSubscribe"
        class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      >
        <input
          v-model="email"
          type="email"
          placeholder="Tu correo electrónico"
          class="flex-1 px-6 py-3 rounded-full text-navy focus:outline-none focus:ring-4 focus:ring-cyan/50 text-sm"
        />
        <button
          type="submit"
          :disabled="isSubmitting"
          class="bg-cyan text-navy px-8 py-3 rounded-full font-bold hover:bg-white transition shadow-lg text-sm uppercase tracking-wide disabled:opacity-50"
        >
          <i v-if="isSubmitting" class="fas fa-spinner fa-spin mr-2"></i>
          {{ isSubmitting ? 'Enviando...' : 'Suscribirme' }}
        </button>
      </form>
      <p class="text-[10px] text-gray-500 mt-4">Respetamos tu privacidad. Sin spam.</p>

      <!-- Mensajes de éxito/error -->
      <div
        v-if="successMessage"
        class="mt-4 p-3 bg-green-500/20 border border-green-500 rounded-lg text-sm"
      >
        {{ successMessage }}
      </div>
      <div
        v-if="errorMessage"
        class="mt-4 p-3 bg-red-500/20 border border-red-500 rounded-lg text-sm"
      >
        {{ errorMessage }}
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const handleSubscribe = async () => {
  if (!email.value) {
    errorMessage.value = 'Por favor ingresa tu correo electrónico'
    return
  }

  isSubmitting.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    // Aquí va la llamada a la API para suscribir
    // await apiClient.post('/subscribe', { email: email.value })

    // Simulación
    await new Promise(resolve => setTimeout(resolve, 1000))

    successMessage.value = '¡Gracias por suscribirte! Pronto recibirás nuestro contenido.'
    email.value = ''
  } catch (error) {
    errorMessage.value = 'Ocurrió un error. Por favor intenta nuevamente.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
