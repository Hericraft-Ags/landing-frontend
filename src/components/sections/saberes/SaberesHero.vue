<template>
  <section
    class="relative bg-gradient-to-br from-navy via-blue-900 to-navy text-white pt-40 pb-28 px-6 overflow-hidden"
  >
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <div
        class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
      ></div>
      <div
        class="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
      ></div>
    </div>

    <div class="max-w-4xl mx-auto relative z-10 text-center">
      <div
        class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 mb-6 animate-fade-in-up"
      >
        <i class="fas fa-graduation-cap text-green text-sm"></i>
        <span class="text-green font-bold tracking-widest text-xs uppercase"
          >Centro de Recursos Educativos</span
        >
      </div>

      <h1
        class="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight animate-fade-in-up"
        style="animation-delay: 0.1s"
      >
        Conocimiento Abierto
        <span class="bg-gradient-to-r from-[#39CC7F] to-[#0EF1EB] bg-clip-text text-transparent"
          >para la Comunidad Educativa.</span
        >
      </h1>

      <p
        class="text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-in-up"
        style="animation-delay: 0.2s"
      >
        Explora nuestra biblioteca gratuita de manuales, investigaciones, podcasts y webinars
        diseñados para docentes, directivos y familias comprometidas con la innovación.
      </p>
    </div>
  </section>
</template>

<script setup>
// No se necesitan props
</script>

<style scoped>
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
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}
</style>
