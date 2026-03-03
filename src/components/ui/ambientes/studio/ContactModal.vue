<template>
  <div
    class="fixed inset-0 z-[70] bg-blueprint-navy/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
  >
    <div
      class="bg-white text-navy p-8 rounded-2xl max-w-md w-full shadow-2xl border-t-4 border-blueprint-cyan relative"
    >
      <button
        @click="$emit('close')"
        class="absolute top-4 right-4 text-gray-400 hover:text-red-500"
      >
        <i class="fas fa-times"></i>
      </button>

      <h2 class="text-2xl font-bold text-blueprint-navy mb-1">¡Casi listo!</h2>
      <p class="text-sm text-gray-500 mb-6">
        Envía tu diseño a nuestro equipo de ingeniería para agendar una sesión de validación.
      </p>

      <div class="space-y-4 mb-6">
        <div>
          <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Tu Nombre</label>
          <input
            type="text"
            v-model="clientName"
            class="w-full border border-gray-300 rounded p-2 text-sm focus:border-blueprint-cyan outline-none"
            placeholder="Ej. Prof. Juan Pérez"
          />
        </div>
        <div>
          <label class="block text-xs font-bold text-gray-500 uppercase mb-1"
            >Nombre de la Escuela</label
          >
          <input
            type="text"
            v-model="schoolName"
            class="w-full border border-gray-300 rounded p-2 text-sm focus:border-blueprint-cyan outline-none"
            placeholder="Ej. Colegio Innovation"
          />
        </div>
      </div>

      <div class="space-y-3">
        <button
          @click="handleWhatsApp"
          class="w-full bg-[#25D366] text-white font-bold py-3 rounded-lg hover:brightness-95 transition flex items-center justify-center gap-2"
        >
          <i class="fab fa-whatsapp text-xl"></i> Enviar por WhatsApp
        </button>
        <button
          @click="handleMail"
          class="w-full bg-blueprint-navy text-white font-bold py-3 rounded-lg hover:bg-blueprint-blue transition flex items-center justify-center gap-2"
        >
          <i class="fas fa-envelope"></i> Enviar por Correo
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CONTACT_CONFIG } from '@/data/studioData'

const props = defineProps({
  projectData: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['close'])

const clientName = ref('')
const schoolName = ref('')

const CONTACT_CONFIG = {
  whatsapp: '5215512345678',
  email: 'ventas@hericraft.com',
}

const generateReport = () => {
  return `
🚀 *SOLICITUD DE PROYECTO HERICRAFT*
--------------------------------
👤 *Cliente:* ${clientName.value}
🏫 *Institución:* ${schoolName.value}

📐 *ESPACIO:*
- Tipo: ${props.projectData.roomName}
- Nivel: ${props.projectData.level}
- Área: ${props.projectData.area.toFixed(1)} m² (${props.projectData.dims.width}x${props.projectData.dims.length}m)
- Forma: ${props.projectData.shape}

👥 *CAPACIDAD:*
- Alumnos: ${props.projectData.students}
- Mesas: ${props.projectData.tables}

🛠️ *ESPECIFICACIONES:*
- Acabados: ${props.projectData.finish}
- Kit Herramientas: ${props.projectData.kit}
- Zonas Activas: ${props.projectData.zones.length > 0 ? props.projectData.zones.join(', ') : 'Ninguna'}

💰 *PRESUPUESTO ESTIMADO:*
$${props.projectData.budget.toLocaleString()} MXN
--------------------------------
Solicito una reunión para revisar esta propuesta.
  `.trim()
}

const handleWhatsApp = () => {
  if (!clientName.value || !schoolName.value) {
    alert('Por favor completa tu nombre y escuela.')
    return
  }
  const text = encodeURIComponent(generateReport())
  window.open(`https://wa.me/${CONTACT_CONFIG.whatsapp}?text=${text}`, '_blank')
  emit('close')
}

const handleMail = () => {
  if (!clientName.value || !schoolName.value) {
    alert('Por favor completa tu nombre y escuela.')
    return
  }
  const subject = encodeURIComponent(`Nuevo Proyecto Hericraft: ${schoolName.value}`)
  const body = encodeURIComponent(generateReport())
  window.open(`mailto:${CONTACT_CONFIG.email}?subject=${subject}&body=${body}`, '_blank')
  emit('close')
}
</script>
