<template>
  <section class="py-24 px-6 bg-white relative overflow-hidden">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <span
          class="text-agoraLime font-bold uppercase tracking-widest text-sm bg-gray-100 px-4 py-1 rounded-full"
        >
          {{ $t('agora.cert_badge') }}
        </span>
        <h2 class="text-4xl font-agora font-black text-navy mt-4">
          {{ $t('agora.cert_title') }}
        </h2>
        <p class="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
          {{ $t('agora.cert_description') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-stretch">
        <CertificationCard
          type="blockchain"
          :title="$t('agora.blockchain_title')"
          :description="$t('agora.blockchain_description')"
          icon="fas fa-link"
          iconColor="text-blue-600"
          glowColor="blue"
        />

        <CertificationCard
          type="badges"
          :title="$t('agora.badges_title')"
          :description="$t('agora.badges_description')"
          icon="fas fa-certificate"
          iconColor="text-agoraLime"
          glowColor="lime"
          :badges="badgeItems"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import CertificationCard from '@/components/ui/CertificationCard.vue'

const { t } = useI18n()

const badgeItems = computed(() => [
  {
    title: t('agora.badge_leadership'),
    icon: 'AGORA-22.png',
    color: '#8dc63f',
  },
  {
    title: t('agora.badge_neuro'),
    icon: 'AGORA-23.png',
    color: '#22c55e',
  },
  {
    title: t('agora.badge_agile'),
    icon: 'AGORA-24.png',
    color: '#374151',
  },
])
</script>
