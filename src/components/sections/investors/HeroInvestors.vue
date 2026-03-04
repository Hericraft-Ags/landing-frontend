<script setup>
import InvestorCard from './InvestorCard.vue'
import { RouterLink } from 'vue-router'
import LightRays from '@/components/animations/backgrounds/LightRays.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section
    class="relative bg-[#020617] text-white pt-40 pb-28 overflow-hidden min-h-screen flex items-center justify-center"
  >
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-20">
      <div class="absolute inset-0 z-0 pointer-events-none">
        <LightRays
          rays-origin="right"
          rays-color="#00ffff"
          :rays-speed="1.5"
          :light-spread="0.8"
          :ray-length="1.5"
          :follow-mouse="true"
          :fadeDistance="3"
          :mouse-influence="0.1"
          :noise-amount="0.1"
          :distortion="0.05"
          class="w-full h-full"
        />
      </div>

      <div class="flex-1 text-start lg:text-left px-10">
        <div class="mb-8">
          <span
            class="text-yellow-400 text-sm font-bold px-6 py-2 border border-gray-200/20 rounded-lg bg-gray-600/20 inline-flex items-center gap-4 glow-gold"
          >
            <i :class="[t('investors.hero_badge_icon'), 'text-yellow-400 glow-gold']"></i>
            {{ t('investors.hero_badge') }}
          </span>
        </div>

        <h1 class="text-[2.6rem] sm:text-6xl font-bold mb-6 leading-tight">
          {{ t('investors.hero_title_part1') }}
          <span class="glow-text">{{ t('investors.hero_title_part2') }}</span>
        </h1>

        <p class="text-lg sm:text-lg text-gray-300/80 leading-relaxed max-w-2xl my-6">
          {{ t('investors.hero_description_part1') }}
          <span class="font-bold">"{{ t('investors.hero_description_highlight') }}"</span>
          {{ t('investors.hero_description_part2') }}
        </p>

        <p class="text-lg sm:text-lg text-gray-300/80 leading-relaxed max-w-2xl my-6">
          <span class="font-bold">{{ t('investors.hero_market_label') }}</span>
          {{ t('investors.hero_market_value') }}
        </p>

        <div class="flex mt-4 gap-2">
          <RouterLink
            to="/contacto"
            class="px-3 py-2 flex items-center bg-[#00F0FF] overflow-hidden text-black font-bold rounded-full transition-all duration-300 shadow-[0_0_12px_rgba(0,240,255,0.6)] hover:shadow-[0_0_20px_rgba(0,240,255,0.8)]"
          >
            <span class="sm:hidden whitespace-nowrap">{{
              t('investors.hero_button_primary_mobile')
            }}</span>
            <span class="hidden sm:inline whitespace-nowrap">{{
              t('investors.hero_button_primary_desktop')
            }}</span>
          </RouterLink>

          <a
            href="#metricas"
            class="px-6 py-2 bg-investorGold whitespace-nowrap text-white border border-gray-400 font-bold rounded-full hover:bg-gray-400/10 transition-all duration-300 inline-block"
          >
            {{ t('investors.hero_button_secondary') }}
            <i class="fas fa-arrow-down ml-2 text-white"></i>
          </a>
        </div>
      </div>

      <div class="flex-1 relative">
        <div class="grid grid-cols-2 gap-2 sm:gap-4 relative">
          <div
            class="absolute -top-10 -right-10 w-28 h-32 bg-investorGold/20 rounded-full blur-2xl animate-pulse"
          ></div>

          <InvestorCard
            :title="t('investors.card_1_title')"
            :value="t('investors.card_1_value')"
            :subtitle="t('investors.card_1_subtitle')"
            borderColor="border-investorTeal border-[#00f0ff]"
            subtitleColor="text-green-400"
            icon="fas fa-arrow-up"
          />

          <InvestorCard
            :title="t('investors.card_2_title')"
            :value="t('investors.card_2_value')"
            :subtitle="t('investors.card_2_subtitle')"
            borderColor="border-investorTeal border-purple-600"
            subtitleColor="text-gray-400"
          />

          <InvestorCard
            :title="t('investors.card_3_title')"
            :value="t('investors.card_3_value')"
            borderColor="border-investorTeal border-yellow-600"
            subtitleColor="text-gray-400"
            icon="fas fa-chart-line text-yellow-300 glow-icon"
            large
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.glow-text {
  color: #00f0ff;
  text-shadow:
    0 0 8px rgba(0, 240, 255, 0.5),
    0 0 16px rgba(0, 240, 255, 0.3),
    0 0 32px rgba(0, 240, 255, 0.1);
}

@media (max-width: 768px) {
  section {
    padding-top: 8rem;
  }
}
</style>
