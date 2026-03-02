<template>
  <section class="py-24 px-6 bg-navy text-white relative overflow-hidden">
    <div class="absolute inset-0 opacity-20 pointer-events-none">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(141, 198, 63, 0.3)"
              stroke-width="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <div class="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <span
          class="text-agoraLime font-bold uppercase tracking-widest text-sm mb-4 bg-white/10 w-fit px-3 py-1 rounded-full border border-agoraLime/30 flex items-center gap-2"
        >
          <img
            src="/assets/images/agora/AGORA-11.png"
            alt="IA Icon"
            class="w-4 h-4 object-contain"
          />
          {{ $t('agora.ia_badge') }}
        </span>
        <h2 class="text-4xl md:text-5xl font-agora font-black mb-6 leading-tight">
          {{ $t('agora.ia_title_part1') }} <br />
          <span class="text-agoraLime">
            {{ $t('agora.ia_title_part2') }}
          </span>
        </h2>
        <p class="text-gray-300 text-lg mb-8 leading-relaxed">
          {{ $t('agora.ia_description') }}
        </p>
        <ul class="space-y-6">
          <li class="flex items-start gap-4">
            <img
              src="/assets/images/agora/AGORA-12.png"
              :alt="$t('agora.ia_feature_1_title')"
              class="w-10 h-10 object-contain mt-1"
            />
            <div>
              <h4 class="font-bold text-white text-lg">{{ $t('agora.ia_feature_1_title') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('agora.ia_feature_1_description') }}</p>
            </div>
          </li>

          <li class="flex items-start gap-4">
            <img
              src="/assets/images/agora/AGORA-13.png"
              :alt="$t('agora.ia_feature_2_title')"
              class="w-10 h-10 object-contain mt-1"
            />
            <div>
              <h4 class="font-bold text-white text-lg">{{ $t('agora.ia_feature_2_title') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('agora.ia_feature_2_description') }}</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="relative group perspective-1000">
        <div
          class="absolute -inset-1 bg-linear-to-r from-agoraLime to-cyanBright rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 animate-pulse-slow"
        ></div>

        <PerfilIACard />
      </div>
    </div>
  </section>
</template>

<script setup>
import PerfilIACard from '@/components/ui/PerfilIACard.vue'
</script>
