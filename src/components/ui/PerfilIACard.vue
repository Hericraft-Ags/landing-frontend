<template>
  <div
    class="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl p-6 transform transition-transform duration-500 group-hover:scale-[1.01]"
  >
    <!-- Header con avatar -->
    <div class="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
      <div class="flex items-center gap-4">
        <div class="relative">
          <div
            class="w-12 h-12 rounded-full bg-gray-800 overflow-hidden border-2 border-agoraLime shadow-[0_0_10px_rgba(141,198,63,0.5)]"
          >
            <img
              src="https://placehold.co/100x100/333/fff?text=Prof"
              alt="Avatar"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"
          ></div>
        </div>
        <div>
          <p class="text-white font-bold text-sm tracking-wide">{{ $t('agora.profile_name') }}</p>
          <div class="flex items-center gap-2">
            <span
              class="text-[10px] bg-white/5 px-2 py-0.5 rounded text-gray-300 border border-white/10"
            >
              {{ $t('agora.profile_level') }}
            </span>
            <span class="text-agoraLime text-xs font-bold shadow-green-glow">
              {{ $t('agora.profile_specialist') }}
            </span>
          </div>
        </div>
      </div>
      <div class="text-right">
        <p class="text-gray-500 text-[10px] uppercase tracking-widest mb-1">
          {{ $t('agora.skills_score') }}
        </p>
        <div
          class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyanBright to-blue-500"
        >
          94
        </div>
      </div>
    </div>

    <!-- Mapa neuronal -->
    <NeuronalMap />

    <!-- Footer stats -->
    <div class="grid grid-cols-2 gap-4 mt-6">
      <div class="bg-white/5 rounded-xl p-3 border border-white/5 hover:bg-white/10 transition">
        <p class="text-[10px] text-gray-400 mb-1">{{ $t('agora.next_goal') }}</p>
        <div class="flex justify-between items-center">
          <span class="text-white font-bold text-xs">{{ $t('agora.master_ia') }}</span>
          <i class="fas fa-chevron-right text-xs text-agoraLime"></i>
        </div>
        <div class="w-full bg-gray-700 h-1 mt-2 rounded-full overflow-hidden">
          <div class="bg-agoraLime h-full" style="width: 75%"></div>
        </div>
      </div>
      <div class="bg-white/5 rounded-xl p-3 border border-white/5 hover:bg-white/10 transition">
        <p class="text-[10px] text-gray-400 mb-1">{{ $t('agora.badges_earned') }}</p>
        <div class="flex items-center gap-2">
          <img
            src="/assets/images/agora/AGORA-14.png"
            :alt="$t('agora.badges_earned')"
            class="w-5 h-5 object-contain"
          />
          <span class="text-white font-bold text-lg">12</span>
          <span class="text-[10px] text-green-400 ml-auto">{{ $t('agora.monthly_progress') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NeuronalMap from './NeuronalMap.vue'
</script>
