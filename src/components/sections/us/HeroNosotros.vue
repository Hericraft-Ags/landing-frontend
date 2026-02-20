<template>
  <section class="relative bg-hero-space text-white pt-40 pb-28 px-6 overflow-hidden">
    <div
      class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"
    ></div>
    <div
      class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan/20 to-transparent pointer-events-none"
    ></div>

    <div class="max-w-4xl mx-auto relative z-10 text-center">
      <div
        class="inline-flex items-center gap-2 border border-cyan/50 bg-cyan/10 text-cyan text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6"
      >
        <span class="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
        Nuestra Esencia
      </div>

      <h1 class="text-5xl lg:text-7xl font-display font-bold mb-8 leading-tight">
        Nacidos en el Aula, <br />
        <span class="text-gray-400"> Para Transformarla. </span>
      </h1>

      <p class="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
        Somos un equipo multidisciplinario de pedagogos, ingenieros y diseñadores unidos por una
        misión: cerrar la brecha entre la tecnología y el humanismo.
      </p>
    </div>
  </section>
</template>

<style scoped>
.bg-hero-space {
  background: linear-gradient(135deg, #111319 0%, #1a1f2e 100%);
}

.text-cyan {
  color: #0ef1eb;
}

.bg-cyan {
  background-color: #0ef1eb;
}

.from-cyan {
  --tw-gradient-from: #0ef1eb;
}

.to-green {
  --tw-gradient-to: #39cc7f;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@media (max-width: 768px) {
  section {
    padding-top: 8rem;
  }
}
</style>
