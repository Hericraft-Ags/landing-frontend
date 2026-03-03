<template>
  <section class="py-16 bg-white border-t border-gray-100">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2 class="text-2xl font-bold text-navy mb-4">
        {{ $t('ambientes.contacto_title') }}
      </h2>
      <p class="text-gray-600 mb-8">
        {{ $t('ambientes.contacto_description') }}
      </p>
      <div class="flex flex-col md:flex-row justify-center gap-4">
        <a
          :href="`tel:${telefono}`"
          class="flex items-center justify-center gap-2 px-6 py-3 border-2 border-navy text-navy font-bold rounded-lg hover:bg-navy hover:text-white transition"
        >
          <i class="fas fa-phone"></i>
          {{ $t('ambientes.contacto_phone') }}
        </a>
        <a
          :href="`mailto:${email}`"
          class="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-bold rounded-lg hover:bg-gray-200 transition"
        >
          <i class="fas fa-envelope"></i>
          {{ $t('ambientes.contacto_email') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const telefono = '+525512345678'
const email = 'hola@hericraft.com'
</script>
