<template>
  <section class="relative agora-bg pt-40 pb-28 px-6 overflow-hidden text-white">
    <div class="absolute inset-0 hero-pattern pointer-events-none"></div>
    <div
      class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-agoraLime/10 rounded-full blur-3xl translate-y-1/3 translate-x-1/4"
    ></div>

    <div class="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
      <div class="space-y-8 animate-fade-in-up">
        <div
          class="inline-flex items-center gap-2 border border-agoraLime bg-agoraLime/10 text-agoraLime text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider"
        >
          <i class="fas fa-chalkboard-teacher"></i> {{ $t('agora.hero_badge') }}
        </div>

        <img
          :src="logoAgora"
          alt="Logo Ágora"
          class="h-20 w-auto mb-2 drop-shadow-sm brightness-200"
        />

        <h1 class="text-5xl lg:text-6xl font-agora font-black text-white leading-tight">
          {{ $t('agora.hero_title_part1') }} <br />
          <span class="text-agoraLime">{{ $t('agora.hero_title_part2') }}</span>
        </h1>

        <p
          class="text-xl text-gray-300 leading-relaxed border-l-4 border-agoraLime pl-6 font-light"
        >
          {{ $t('agora.hero_description') }}
        </p>

        <div class="flex flex-wrap gap-4 pt-2">
          <a
            href="#oferta"
            class="bg-agoraLime text-agoraDark px-8 py-4 rounded-full font-bold transition shadow-lg hover:shadow-lime-500/30 transform hover:-translate-y-1 flex items-center gap-2"
          >
            {{ $t('agora.hero_button_primary') }} <i class="fas fa-arrow-down"></i>
          </a>
          <button
            class="flex items-center gap-3 px-6 py-4 rounded-full border-2 border-gray-500 text-gray-300 font-bold hover:border-white hover:text-white transition"
          >
            <i class="fas fa-play-circle text-xl"></i> {{ $t('agora.hero_button_secondary') }}
          </button>
        </div>
      </div>

      <div class="relative hidden lg:flex items-center justify-center h-125">
        <div class="relative z-10">
          <img
            :src="heroImage"
            alt="Red Docente Conectada"
            class="w-full max-w-md object-contain drop-shadow-2xl opacity-90 hover:opacity-100 transition duration-700"
          />
        </div>
        <div
          class="absolute border border-white/5 rounded-full w-150 h-150 animate-spin-slow"
          style="animation-direction: reverse"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const logoAgora = '/assets/images/agora/AGORA-01.png'
const heroImage = '/assets/images/agora/AGORA-02.png'
</script>
