<script setup>
import { ref } from 'vue'
import { CONTACT_CONFIG } from '@/data/studioData'

// ... resto del código ...

const handleWhatsApp = () => {
  if (!clientName.value || !schoolName.value) {
    alert("Por favor completa tu nombre y escuela.")
    return
  }
  const text = encodeURIComponent(generateReport())
  window.open(`https://wa.me/${CONTACT_CONFIG.whatsapp}?text=${text}`, '_blank')
  emit('close')
}

const handleMail = () => {
  if (!clientName.value || !schoolName.value) {
    alert("Por favor completa tu nombre y escuela.")
    return
  }
  const subject = encodeURIComponent(`Nuevo Proyecto Hericraft: ${schoolName.value}`)
  const body = encodeURIComponent(generateReport())
  window.open(`mailto:${CONTACT_CONFIG.email}?subject=${subject}&body=${body}`, '_blank')
  emit('close')
}
</script>