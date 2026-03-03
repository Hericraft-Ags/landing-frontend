<script setup>
import TeamCard from './TeamCard.vue'
import RequestSection from './RequestSection.vue'
import Aurora from '@/components/animations/backgrounds/Aurora.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="relative w-full min-h-screen bg-[#0A1931] overflow-hidden">
    <div class="max-w-7xl mx-auto flex-col lg:flex-row items-center gap-12 px-4 sm:px-4 py-30">
      <h2 class="text-2xl sm:text-4xl font-bold mb-6 leading-tight text-white inline">
        {{ t('investors.team_title') }}
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-center">
        <TeamCard
          :name="t('investors.team_member_1_name')"
          :role="t('investors.team_member_1_role')"
          :description="t('investors.team_member_1_description')"
          :initials="t('investors.team_member_1_initials')"
          borderColor="cyan-500"
        />

        <TeamCard
          :name="t('investors.team_member_2_name')"
          :role="t('investors.team_member_2_role')"
          :description="t('investors.team_member_2_description')"
          :initials="t('investors.team_member_2_initials')"
          borderColor="gray-400"
        />

        <TeamCard
          :name="t('investors.team_member_3_name')"
          :role="t('investors.team_member_3_role')"
          :description="t('investors.team_member_3_description')"
          :initials="t('investors.team_member_3_initials')"
          borderColor="blue-500"
        />
      </div>

      <RequestSection />
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
