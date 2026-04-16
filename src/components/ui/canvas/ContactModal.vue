<template>
  <div
    class="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
  >
    <div
      class="bg-white text-navy p-8 rounded-2xl max-w-md w-full shadow-2xl border-t-4 border-blueprint-cyan relative"
    >
      <!-- Botón cerrar -->
      <button
        @click="$emit('close')"
        class="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
      >
        <i class="fas fa-times text-xl"></i>
      </button>

      <!-- Título -->
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
          class="w-full bg-blueprint-navy text-white font-bold py-3 rounded-lg hover:bg-blueprint-blue transition flex items-center justify-center gap-2"
        >
          <i class="fas fa-envelope"></i> {{ $t('contact.email') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const emit = defineEmits(['close'])

const clientName = ref('')
const schoolName = ref('')

const handleWhatsApp = () => {
  if (!clientName.value || !schoolName.value) {
    alert(t('contact.fill_fields'))
    return
  }
  console.log('Enviar por WhatsApp:', {
    clientName: clientName.value,
    schoolName: schoolName.value,
  })
  alert(t('contact.whatsapp_pending'))
}

const handleEmail = () => {
  if (!clientName.value || !schoolName.value) {
    alert(t('contact.fill_fields'))
    return
  }
  console.log('Enviar por Correo:', { clientName: clientName.value, schoolName: schoolName.value })
  alert(t('contact.email_pending'))
}
</script>
