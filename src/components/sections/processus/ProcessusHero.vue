<template>
  <section
    class="relative bg-processus-gradient pt-40 pb-32 px-6 overflow-hidden min-h-[80vh] flex items-center"
  >
    <div class="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none"></div>
    <div
      class="absolute top-0 right-0 w-2/3 h-full bg-linear-to-l from-cyan/10 to-transparent pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
      <div class="space-y-8">
        <img :src="logoProcessus" alt="Logo Processus" class="h-40 w-auto -ml-4 mb-4" />

        <div class="flex gap-3 text-xs font-bold tracking-widest uppercase text-cyan mb-4">
          <span>{{ $t('processus.hero_tag_1') }}</span>
          <span class="text-white/30">•</span>
          <span>{{ $t('processus.hero_tag_2') }}</span>
          <span class="text-white/30">•</span>
          <span>{{ $t('processus.hero_tag_3') }}</span>
        </div>

        <h1 class="text-5xl lg:text-7xl font-brand-processus font-black text-white leading-none">
          {{ $t('processus.hero_title_part1') }} <br />
          <span class="bg-clip-text text-cyan">{{ $t('processus.hero_title_part2') }}</span>
        </h1>

        <p
          class="text-xl text-gray-300 leading-relaxed border-l-4 border-cyan pl-6 font-light max-w-lg"
        >
          {{ $t('processus.hero_description') }}
        </p>

        <div class="flex flex-wrap gap-4 pt-6">
          <button
            class="bg-cyan text-navy px-8 py-4 rounded-xl font-bold hover:bg-white transition shadow-lg shadow-cyan/30 transform hover:-translate-y-1"
          >
            {{ $t('processus.hero_button_primary') }}
          </button>
          <button
            class="flex items-center gap-3 px-6 py-4 rounded-xl border border-white/30 text-white font-bold hover:bg-white/10 transition"
          >
            {{ $t('processus.hero_button_secondary') }}
          </button>
        </div>
      </div>

      <div class="relative group">
        <div
          class="absolute inset-0 bg-cyan/20 rounded-2xl transform translate-x-4 translate-y-4 border border-cyan/30"
        ></div>
        <div
          class="absolute -inset-1 bg-linear-to-r from-cyan to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"
        ></div>

        <img
          :src="heroImage"
          class="relative rounded-2xl shadow-2xl border border-white/10 w-full object-cover"
          :alt="$t('processus.hero_image_alt')"
        />

        <div
          class="absolute -bottom-6 right-8 bg-navy p-6 rounded-xl shadow-xl border border-cyan/30 flex flex-col items-center animate-pulse-slow"
        >
          <span class="text-3xl font-bold text-cyan">{{ $t('processus.hero_stat_value') }}</span>
          <span class="text-[10px] uppercase tracking-wide text-gray-400">{{
            $t('processus.hero_stat_label')
          }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const logoProcessus = '/assets/images/logos/processus-dark.svg'
const heroImage = '/assets/images/processus/online-learning-experience.jpg'
</script>
