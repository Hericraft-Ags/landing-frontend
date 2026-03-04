<template>
  <section id="nucleo" class="py-24 px-6 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <span class="text-agoraLime font-bold uppercase tracking-widest text-sm mb-2 block">
          {{ $t('agora.kernel_badge') }}
        </span>
        <h2 class="text-4xl font-agora font-black text-oxfordGray">
          {{ $t('agora.kernel_title') }}
        </h2>
        <p class="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          {{ $t('agora.kernel_description') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KernelCard
          v-for="(item, index) in kernelItems"
          :key="index"
          :title="item.title"
          :description="item.description"
          :icon="item.icon"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import KernelCard from '@/components/ui/KernelCard.vue'

const { t } = useI18n({ useScope: 'global' })

const kernelItems = computed(() => [
  {
    title: t('agora.kernel_1_title'),
    description: t('agora.kernel_1_description'),
    icon: 'AGORA-03.png',
  },
  {
    title: t('agora.kernel_2_title'),
    description: t('agora.kernel_2_description'),
    icon: 'AGORA-04.png',
  },
  {
    title: t('agora.kernel_3_title'),
    description: t('agora.kernel_3_description'),
    icon: 'AGORA-05.png',
  },
  {
    title: t('agora.kernel_4_title'),
    description: t('agora.kernel_4_description'),
    icon: 'AGORA-06.png',
  },
])
</script>
