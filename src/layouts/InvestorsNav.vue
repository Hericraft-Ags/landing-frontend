<script setup>
import { RouterLink } from 'vue-router'

import StatusBadge from '../components/sections/investors/StatusBadge.vue'

const props = defineProps({
  color: {
    type: String,
    default: '#000',
  },
})
</script>

<template>
  <header
    class="fixed top-10 border-b border-gray-300/10 w-full z-50 h-20 transition-all shadow-sm"
    :style="{ backgroundColor: props.color }"
  >
    <nav class="max-w-7xl mx-auto px-2 gap-4 h-full flex justify-between items-center">
      <div class="flex justify-between items-center gap-2">
        <RouterLink to="/" class="flex-shrink-0 cursor-pointer hover:opacity-80 transition">
          <img
            src="../assets/images/logos/logo_hericraft.png"
            alt="Hericraft Logo"
            class="h-7 sm:h-10 w-auto"
          />
        </RouterLink>
        <RouterLink
          to="/"
          class="hidden sm:flex px-3 py-2 text-xs font-bold text-[#00f0ff] transition uppercase tracking-wide rounded-full hover:bg-white/10"
        >
          Investor Relations
        </RouterLink>
      </div>
      <div class="flex items-center gap-1">
        <StatusBadge> Ronda Seed Activa </StatusBadge>
        <RouterLink
          to="/ecosistema"
          class="px-3 py-2 text-xs font-bold text-gray-300 transition uppercase tracking-wide rounded-full hover:bg-white/10"
        >
          Ecosistema
        </RouterLink>
        <RouterLink
          to="/ecosistema"
          class="px-4 py-2 text-center sm:py-2 text-xs font-bold whitespace-nowrap text-black bg-white transition uppercase rounded-2xl hover:bg-[#00f0ff]"
        >
          Solicitar Pitch Deck
        </RouterLink>
      </div>
    </nav>
  </header>
</template>
