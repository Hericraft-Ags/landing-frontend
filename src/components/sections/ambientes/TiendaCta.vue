<template>
  <div class="bg-gradient-to-r from-navy to-blue-900 py-16 px-6 relative overflow-hidden">
    <div
      class="absolute top-0 right-0 w-64 h-64 bg-cyanBright/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
    ></div>

    <div
      class="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
    >
      <div>
        <h2 class="text-2xl md:text-3xl font-display font-bold text-white mb-2">
          {{ $t('ambientes.tienda_title') }}
        </h2>
        <p class="text-gray-300 text-lg">
          {{ $t('ambientes.tienda_description') }}
        </p>
      </div>
      <a
        :href="tiendaUrl"
        target="_blank"
        class="shrink-0 bg-collegeOrange text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg shadow-collegeOrange/30 hover:bg-white hover:text-collegeOrange transition transform hover:scale-105"
      >
        <i class="fas fa-shopping-cart mr-2"></i>
        {{ $t('ambientes.tienda_button') }}
      </a>
    </div>
  </div>
</template>

<script setup>
const tiendaUrl = 'https://ecommerce.soluciones-hericraft.com/'
</script>
