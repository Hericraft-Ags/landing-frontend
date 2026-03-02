<template>
  <section class="relative py-24 px-6 bg-agoraDark text-white overflow-hidden">
    <div
      class="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-10"
    ></div>

    <div
      class="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12"
    >
      <div class="md:w-1/2">
        <span class="text-pink-500 font-bold uppercase tracking-widest text-xs mb-2 block">
          {{ $t('agora.next_badge') }}
        </span>
        <h2 class="text-4xl md:text-5xl font-agora font-black mb-6">
          {{ $t('agora.next_title') }}
        </h2>
        <p class="text-gray-400 text-lg mb-8 leading-relaxed">
          {{ $t('agora.next_description') }}
        </p>
        <a
          href="/metanoia"
          class="inline-flex items-center gap-3 bg-pink-600 text-white px-8 py-4 rounded-full font-bold hover:bg-pink-700 transition shadow-lg hover:shadow-pink-500/30 transform hover:scale-105"
        >
          {{ $t('agora.next_button') }} <i class="fas fa-arrow-right"></i>
        </a>
      </div>

      <div class="md:w-1/2 relative group cursor-pointer" @click="goToMetanoia">
        <div
          class="absolute inset-0 bg-pink-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"
        ></div>
        <div
          class="relative bg-gray-900 rounded-3xl p-1 border border-gray-700 hover:border-pink-500 transition overflow-hidden"
        >
          <img
            :src="metanoiaLogo"
            alt="Metanoia Logo"
            class="h-14 w-auto absolute top-6 left-6 z-20 drop-shadow-md"
          />
          <img
            :src="metanoiaImage"
            alt="Familia Metanoia"
            class="w-full h-64 object-cover rounded-2xl opacity-60 group-hover:opacity-80 transition duration-500"
          />
          <div class="absolute bottom-6 left-6 z-20">
            <span
              class="text-white font-bold text-sm bg-white/10 backdrop-blur px-3 py-1 rounded-lg"
            >
              {{ $t('agora.next_for_families') }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const metanoiaLogo = '/assets/images/agora/AGORA-25.png'
const metanoiaImage = '/assets/images/metanoia/METANOIA-01.png'

const goToMetanoia = () => {
  router.push('/metanoia')
}
</script>
