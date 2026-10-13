<template>
  <div
    class="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
  >
    <div
      class="bg-white text-navy p-8 rounded-2xl max-w-md w-full shadow-2xl border-t-4 border-blueprint-cyan relative"
    >
      <button
        @click="$emit('close')"
        class="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
      >
        <i class="fas fa-times text-xl"></i>
      </button>

      <h2 class="text-2xl font-bold text-blueprint-navy mb-1">{{ $t('contact.title') }}</h2>
      <p class="text-sm text-gray-500 mb-6">
        {{ $t('contact.description') }}
      </p>

      <!-- Formulario -->
      <div class="space-y-4 mb-6">
        <div>
          <label class="block text-xs font-bold text-gray-500 uppercase mb-1">{{
            $t('contact.your_name')
          }}</label>
          <input
            type="text"
            v-model="clientName"
            class="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:border-blueprint-cyan outline-none transition"
            :placeholder="$t('contact.your_name_placeholder')"
          />
        </div>
        <div>
          <label class="block text-xs font-bold text-gray-500 uppercase mb-1">{{
            $t('contact.school_name')
          }}</label>
          <input
            type="text"
            v-model="schoolName"
            class="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:border-blueprint-cyan outline-none transition"
            :placeholder="$t('contact.school_name_placeholder')"
          />
        </div>
        <div>
          <label class="block text-xs font-bold text-gray-500 uppercase mb-1">{{
            $t('contact.your_email')
          }}</label>
          <input
            type="email"
            v-model="clientEmail"
            class="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:border-blueprint-cyan outline-none transition"
            :placeholder="$t('contact.your_email_placeholder')"
          />
        </div>
      </div>

      <!-- Botones de acción -->
      <div class="space-y-3">
        <button
          @click="handleWhatsApp"
          class="w-full bg-[#25D366] text-white font-bold py-3 rounded-lg hover:brightness-95 transition flex items-center justify-center gap-2"
        >
          <i class="fab fa-whatsapp text-xl"></i> {{ $t('contact.whatsapp') }}
        </button>
        <button
          @click="handleEmail"
          :disabled="isLoading"
          class="w-full bg-blueprint-navy text-white font-bold py-3 rounded-lg hover:bg-blueprint-blue transition flex items-center justify-center gap-2 disabled:opacity-60"
        >
          <i v-if="isLoading" class="fas fa-spinner fa-spin"></i>
          <i v-else class="fas fa-envelope"></i>
          {{ isLoading ? $t('contact.sending') : $t('contact.email') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import axios from 'axios'
import { MySwal as Swal } from '@/plugins/swal.js'

const { t } = useI18n()
const emit = defineEmits(['close'])

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

const props = defineProps({
  projectData: {
    type: Object,
    required: true,
  },
})

const clientName = ref('')
const schoolName = ref('')
const clientEmail = ref('')
const isLoading = ref(false)

const handleWhatsApp = () => {
  if (!clientName.value || !schoolName.value || !clientEmail.value) {
    Swal.fire({
      icon: 'warning',
      text: t('contact.fill_fields'),
      zIndex: 99999,
    })
    return
  }

  // Construir mensaje
  const project = props.projectData
  const message = `
🚀 *SOLICITUD DE PROYECTO HERICRAFT*
--------------------------------
👤 *Cliente:* ${clientName.value}
🏫 *Institución:* ${schoolName.value}
📧 *Correo:* ${clientEmail.value}

📐 *ESPACIO:*
- Tipo: ${project.roomName || 'No especificado'}
- Nivel: ${project.level || 'No especificado'}
- Área: ${project.area || 0} m²
- Dimensiones: ${project.dims?.width || '?'} x ${project.dims?.length || '?'} m
- Forma: ${project.shape || 'No especificado'}

👥 *CAPACIDAD:*
- Alumnos: ${project.students || 0}
- Mesas: ${project.tables || 0}

🛠️ *ESPECIFICACIONES:*
- Acabados: ${project.finish || 'No especificado'}
- Kit Herramientas: ${project.kit || 'No especificado'}
- Zonas Activas: ${project.zones?.length ? project.zones.join(', ') : 'Ninguna'}

💰 *PRESUPUESTO ESTIMADO:*
$${project.budget?.toLocaleString() || 0} MXN
--------------------------------
Solicito una reunión para revisar esta propuesta.
  `.trim()

  const encodedMessage = encodeURIComponent(message)
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5215512345678'

  // Abrir WhatsApp
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')

  // Opcional: cerrar el modal
  emit('close')
}

const handleEmail = async () => {
  if (!clientName.value || !schoolName.value || !clientEmail.value) {
    Swal.fire({
      icon: 'warning',
      text: t('contact.fill_fields'),
      confirmButtonText: 'Ok',
    })
    return
  }

  isLoading.value = true

  try {
    const payload = {
      client_name: clientName.value,
      school_name: schoolName.value,
      client_email: clientEmail.value,
      project: props.projectData,
    }

    const response = await axios.post(`${API_URL}/public/send-quote`, payload)

    if (response.data.success) {
      await Swal.fire({
        icon: 'success',
        title: t('contact.email_success_title'),
        text: t('contact.email_success_message'),
        confirmButtonText: t('contact.email_success_button'),
        timer: 5000,
        timerProgressBar: true,
        zIndex: 99999,
      })
      emit('close')
    } else {
      Swal.fire({
        icon: 'error',
        title: t('contact.email_success_title'),
        text: response.data.message || t('contact.email_error'),
        confirmButtonText: t('contact.email_error_button'),
        zIndex: 99999,
      })
    }
  } catch {
    Swal.fire({
      icon: 'error',
      title: t('contact.email_success_title'),
      text: t('contact.email_error'),
      confirmButtonText: t('contact.email_error_button'),
      zIndex: 99999,
    })
  } finally {
    isLoading.value = false
  }
}
</script>
