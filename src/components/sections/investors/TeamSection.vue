<script setup>
import TeamCard from './TeamCard.vue'
import RequestSection from './RequestSection.vue'
import Aurora from '@/components/animations/backgrounds/Aurora.vue'
import { useI18n } from 'vue-i18n'

import ricardoImg from '@/assets/images/us/NOSOTROS-12.png'
import hectorImg from '@/assets/images/us/NOSOTROS-13.png'
import marcoImg from '@/assets/images/us/NOSOTROS-11.png'

const { t } = useI18n({ useScope: 'global' })
</script>

<template>
  <section class="relative w-full min-h-screen bg-[#0A1931] overflow-hidden">
    <div class="max-w-7xl mx-auto flex flex-col items-center gap-16 px-4 sm:px-6 py-20 md:py-24">
      <!-- Título con más separación -->
      <h2 class="text-2xl sm:text-4xl font-bold text-white text-center mb-8 md:mb-12">
        {{ t('investors.team_title') }}
      </h2>

      <!-- Grid de tarjetas con separación interna -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        <TeamCard
          :name="t('investors.team_member_1_name')"
          :role="t('investors.team_member_1_role')"
          :description="t('investors.team_member_1_description')"
          :initials="t('investors.team_member_1_initials')"
          :image="ricardoImg"
          border-color="cyan-500"
        />

        <TeamCard
          :name="t('investors.team_member_2_name')"
          :role="t('investors.team_member_2_role')"
          :description="t('investors.team_member_2_description')"
          :initials="t('investors.team_member_2_initials')"
          :image="marcoImg"
          border-color="gray-400"
        />

        <TeamCard
          :name="t('investors.team_member_3_name')"
          :role="t('investors.team_member_3_role')"
          :description="t('investors.team_member_3_description')"
          :initials="t('investors.team_member_3_initials')"
          :image="hectorImg"
          border-color="blue-500"
        />
      </div>

      <!-- Separación antes de RequestSection -->
      <div class="mt-16 w-full">
        <RequestSection />
      </div>
    </div>

    <div class="absolute bottom-0 w-full z-0">
      <div class="aurora-container">
        <Aurora
          :color-stops="['#0068bd', '#00c9cc', '#0068bd']"
          :amplitude="0.7"
          :blend="1"
          :speed="1.0"
          :intensity="0.3"
          class="w-full h-full"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.aurora-container {
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
}
</style>
