<template>
  <section
    class="relative bg-linear-to-b from-white to-metanoiaLight pt-40 pb-32 px-6 overflow-hidden"
  >
    <div class="absolute inset-0 hero-pattern pointer-events-none"></div>
    <div
      class="absolute top-0 right-0 w-150 h-150 bg-metanoiaPink/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-100 h-100 bg-purple-500/5 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4"
    ></div>

    <div class="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
      <div class="space-y-8 animate-fade-in-up order-2 lg:order-1">
        <div
          class="inline-flex items-center gap-2 border border-metanoiaPink/30 bg-pink-50 text-metanoiaPink text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider"
        >
          <i class="fas fa-heart"></i> {{ $t('metanoia.hero_badge') }}
        </div>

        <img :src="logoMetanoia" alt="Logo Metanoia" class="h-40 w-auto mb-2 drop-shadow-sm" />

        <h1 class="text-5xl lg:text-6xl font-metanoia font-black text-navy leading-[1.1]">
          {{ $t('metanoia.hero_title_part1') }} <br />
          <span class="bg-clip-text text-pink-700">{{ $t('metanoia.hero_title_part2') }}</span>
        </h1>

        <p
          class="text-xl text-gray-600 leading-relaxed border-l-4 border-metanoiaPink pl-6 font-light"
        >
          {{ $t('metanoia.hero_description') }}
        </p>

        <div class="flex flex-wrap gap-4 pt-4">
          <a
            href="#pilares"
            class="bg-metanoiaPink text-white px-8 py-4 rounded-full font-bold hover:bg-metanoiaDeep transition shadow-lg shadow-pink-200 transform hover:-translate-y-1 flex items-center gap-2"
          >
            {{ $t('metanoia.hero_button_primary') }} <i class="fas fa-heart"></i>
          </a>
          <button
            class="flex items-center gap-3 px-6 py-4 rounded-full border-2 border-navy text-navy font-bold hover:bg-black hover:text-pink-700 transition shadow-lg hover:shadow-pink-500/30"
          >
            <i class="fas fa-play-circle text-xl"></i> {{ $t('metanoia.hero_button_secondary') }}
          </button>
        </div>
      </div>

      <div class="relative order-1 lg:order-2 group">
        <div
          class="absolute inset-0 bg-linear-to-tr from-metanoiaPink to-purple-500 rounded-[3rem] opacity-20 rotate-3 scale-95 transition-transform group-hover:rotate-1"
        ></div>
        <img
          src="/assets/images/metanoia/METANOIA-01.png"
          :alt="$t('metanoia.hero_image_alt')"
          class="relative rounded-[3rem] shadow-2xl border-4 border-white w-full object-cover transform transition duration-500 group-hover:-translate-y-2 h-[500px]"
        />

        <!-- Badge con efecto de flotación suave -->
        <div
          class="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4 border-l-4 border-metanoiaPink animate-float-soft"
        >
          <div class="bg-pink-50 p-3 rounded-full text-metanoiaPink">
            <i class="fas fa-users text-2xl"></i>
          </div>
          <div>
            <p class="font-bold text-navy text-lg">{{ $t('metanoia.hero_badge_community') }}</p>
            <p class="text-xs text-gray-500">{{ $t('metanoia.hero_badge_families') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const logoMetanoia = '/assets/images/logos/logo_metanoia.png'
</script>

<style scoped>
/* Animación de flotación suave */
@keyframes float-soft {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-float-soft {
  animation: float-soft 4s ease-in-out infinite;
}

/* Mantén las animaciones existentes */
@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 3s infinite;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
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
</style>
