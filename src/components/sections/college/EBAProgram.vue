<template>
  <section id="eba" class="py-24 px-6 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <span
          class="text-[#2563eb] font-bold uppercase tracking-widest text-sm bg-blue-50 px-3 py-1 rounded-full"
        >
          {{ $t('college.eba_badge') }}
        </span>
        <h2 class="text-4xl font-display font-bold text-gray-800 mt-4">
          {{ $t('college.eba_title') }}
        </h2>
        <p class="text-gray-500 mt-4 max-w-2xl mx-auto text-lg mb-8">
          {{ $t('college.eba_description') }}
        </p>

        <a
          :href="pdfLink"
          target="_blank"
          class="inline-flex items-center gap-2 bg-white border-2 border-[#ff6b35] text-[#ff6b35] px-6 py-3 rounded-full font-bold hover:bg-[#ff6b35] hover:text-white transition shadow-lg group"
        >
          <i class="fas fa-file-pdf text-xl"></i>
          {{ $t('college.eba_view_pdf') }}
          <i class="fas fa-external-link-alt text-xs opacity-70 group-hover:opacity-80 ml-1"></i>
        </a>
      </div>

      <div class="grid md:grid-cols-3 gap-8 mb-20">
        <EBACard
          v-for="(level, index) in ebaLevels"
          :key="level.id"
          :title="level.title"
          :description="level.description"
          :image="level.image"
          :badge="level.badge"
          :gradient="level.gradient"
          :icon="level.icon"
          :border-color="level.borderColor"
        />
      </div>

      <VirtualLab />
    </div>
  </section>
</template>
<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import EBACard from '@/components/ui/EBACard.vue'
import VirtualLab from './VirtualLab.vue'

const { t } = useI18n({ useScope: 'global' })
const pdfLink = 'https://soluciones-hericraft.aflip.in/ff0ae8643c.html'

const ebaLevels = computed(() => [
  {
    id: t('college.levels.0.id'),
    title: t('college.levels.0.title'),
    description: t('college.levels.0.description'),
    badge: t('college.levels.0.badge'),
    image: 'eba_kids.png',
    gradient: 'from-yellow-400 to-orange-400',
    icon: 'college-01.png',
    borderColor: 'orange',
  },
  {
    id: t('college.levels.1.id'),
    title: t('college.levels.1.title'),
    description: t('college.levels.1.description'),
    badge: t('college.levels.1.badge'),
    image: 'eba_advanced.png',
    gradient: 'from-purple-500 to-indigo-600',
    icon: 'college-02.png',
    borderColor: 'purple',
  },
  {
    id: t('college.levels.2.id'),
    title: t('college.levels.2.title'),
    description: t('college.levels.2.description'),
    badge: t('college.levels.2.badge'),
    image: 'eba_xpert.png',
    gradient: 'from-blue-400 to-blue-600',
    icon: 'college-03.png',
    borderColor: 'blue',
  },
])
</script>
