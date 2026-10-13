<template>
  <div class="p-6">
    <div class="flex items-center justify-between mb-6">
      <div>
        <h2 class="text-2xl font-bold text-gray-800">Suscriptores Newsletter</h2>
        <p class="text-gray-500 text-sm">Gestiona los suscriptores de tu newsletter</p>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-sm text-gray-500">
          Total: <strong class="text-navy">{{ total }}</strong>
        </span>
        <button
          @click="refresh"
          class="px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/80 transition"
        >
          <i class="fas fa-sync-alt"></i> Actualizar
        </button>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="isLoading" class="bg-white rounded-xl p-12 text-center">
      <i class="fas fa-spinner fa-spin text-3xl text-navy"></i>
      <p class="mt-2 text-gray-500">Cargando suscriptores...</p>
    </div>

    <!-- Tabla -->
    <div
      v-else-if="subscribers.length > 0"
      class="bg-white rounded-xl shadow-sm border overflow-hidden"
    >
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50 border-b">
            <tr>
              <th class="text-left px-6 py-3 text-xs font-semibold text-gray-500">Email</th>
              <th class="text-left px-6 py-3 text-xs font-semibold text-gray-500">Nombre</th>
              <th class="text-left px-6 py-3 text-xs font-semibold text-gray-500">Fecha</th>
              <th class="text-right px-6 py-3 text-xs font-semibold text-gray-500">Acciones</th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr v-for="sub in subscribers" :key="sub.email" class="hover:bg-gray-50 transition">
              <td class="px-6 py-4 text-sm text-gray-800">{{ sub.email }}</td>
              <td class="px-6 py-4 text-sm text-gray-600">
                {{ sub.fields?.name || sub.name || '—' }}
              </td>
              <td class="px-6 py-4 text-sm text-gray-500">
                {{ formatDate(sub.date_created || sub.created_at) }}
              </td>
              <td class="px-6 py-4 text-right">
                <button
                  @click="confirmDelete(sub)"
                  class="text-red-500 hover:text-red-700 transition"
                  title="Eliminar suscriptor"
                >
                  <i class="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="bg-white rounded-xl p-12 text-center border">
      <div class="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
        <i class="fas fa-users text-3xl text-gray-400"></i>
      </div>
      <h3 class="text-lg font-semibold text-gray-600 mt-4">No hay suscriptores</h3>
      <p class="text-gray-400 text-sm">
        Los suscriptores aparecerán aquí cuando alguien se registre.
      </p>
    </div>

    <!-- Modal de confirmación -->
    <div
      v-if="showDeleteModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
        <h3 class="text-xl font-bold text-gray-800 mb-2">Confirmar eliminación</h3>
        <p class="text-gray-600 mb-4">
          ¿Estás seguro de que deseas eliminar a <strong>{{ subscriberToDelete?.email }}</strong
          >?
        </p>
        <div class="flex justify-end gap-3">
          <button
            @click="showDeleteModal = false"
            class="px-4 py-2 border rounded-lg hover:bg-gray-50"
          >
            Cancelar
          </button>
          <button
            @click="deleteSubscriberHandler"
            :disabled="isDeleting"
            class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition disabled:opacity-50"
          >
            <i v-if="isDeleting" class="fas fa-spinner fa-spin mr-2"></i>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useNewsletterStore } from '@/stores/newsletterStore'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

const newsletterStore = useNewsletterStore()
const { subscribers, total, isLoading, isDeleting, fetchSubscribers, deleteSubscriber } =
  newsletterStore

const showDeleteModal = ref(false)
const subscriberToDelete = ref(null)

const formatDate = date => {
  if (!date) return '—'
  try {
    return format(new Date(date), 'dd MMM yyyy', { locale: es })
  } catch {
    return '—'
  }
}

const refresh = () => {
  fetchSubscribers()
}

const confirmDelete = sub => {
  console.log('Sub a eliminar:', sub) // 👈 Verifica que sea el objeto con email
  subscriberToDelete.value = sub
  showDeleteModal.value = true
}

const deleteSubscriberHandler = async () => {
  if (!subscriberToDelete.value) return

  const email = subscriberToDelete.value.email

  // Forzar que sea string
  if (typeof email !== 'string') {
    console.error('Email no es string:', email)
    return
  }

  try {
    await deleteSubscriber(email)
    showDeleteModal.value = false
    subscriberToDelete.value = null
  } catch (error) {
    alert('Error al eliminar el suscriptor')
  }
}

onMounted(() => {
  fetchSubscribers()
})
</script>
