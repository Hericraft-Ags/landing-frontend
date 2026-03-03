<template>
  <header class="relative pt-40 pb-20 bg-[#0B2966] text-white overflow-hidden">
    <div class="absolute inset-0 opacity-10 bg-grid-pattern"></div>
    <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
      <div
        class="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1 mb-6 animate-fade-in-up"
      >
        <span class="text-cyanBright font-bold uppercase text-xs tracking-wider">
          {{ $t('ambientes.hero_badge') }}
        </span>
      </div>
      <h1
        class="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight animate-fade-in-up"
        style="animation-delay: 0.2s"
      >
        {{ $t('ambientes.hero_title_part1') }} <br />
        <span class="text-[#0EF1EB] bg-clip-text bg-linear-to-r from-[#0EF1EB] to-blue-400">
          {{ $t('ambientes.hero_title_part2') }}
        </span>
      </h1>
      <p
        class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 font-light animate-fade-in-up"
        style="animation-delay: 0.4s"
      >
        {{ $t('ambientes.hero_description') }}
      </p>
      <a
        href="#taller-diseno"
        class="inline-flex flex-col items-center text-cyanBright hover:text-white transition animate-bounce mt-4"
      >
        <span class="text-sm font-bold uppercase tracking-widest mb-2">
          {{ $t('ambientes.hero_cta') }}
        </span>
        <i class="fas fa-chevron-down text-2xl"></i>
      </a>
    </div>
  </header>
</template>

<script setup>
// No se necesitan props
</script>

<style scoped>
.bg-grid-pattern {
  background-image:
    linear-gradient(to right, #e5e7eb 1px, transparent 1px),
    linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
  background-size: 40px 40px;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}
</style>
