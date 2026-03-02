<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import TimelineItem from '@/components/ui/TimelineItem.vue'
import FounderCard from '@/components/ui/FounderCard.vue'

const { t } = useI18n()

const timelineColors = ['navy', 'cyan', 'green']

const timelineItems = computed(() => [
  {
    year: t('us.timeline.0.year'),
    title: t('us.timeline.0.title'),
    description: t('us.timeline.0.description'),
    color: timelineColors[0],
  },
  {
    year: t('us.timeline.1.year'),
    title: t('us.timeline.1.title'),
    description: t('us.timeline.1.description'),
    color: timelineColors[1],
  },
  {
    year: t('us.timeline.2.year'),
    title: t('us.timeline.2.title'),
    description: t('us.timeline.2.description'),
    color: timelineColors[2],
  },
])

const founders = computed(() => [
  {
    id: 'ricardo',
    name: t('us.ricardo.name'),
    role: t('us.ricardo.role'),
    image: '/assets/images/founders/ricardo.jpg',
  },
  {
    id: 'hector',
    name: t('us.hector.name'),
    role: t('us.hector.role'),
    image: '/assets/images/founders/hector.jpg',
  },
  {
    id: 'marco',
    name: t('us.marco.name'),
    role: t('us.marco.role'),
    image: '/assets/images/founders/marco.jpg',
  },
])
</script>

<template>
  <section class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-16 items-center mb-24">
        <div class="space-y-10 relative border-l-2 border-gray-100 pl-8 ml-4">
          <TimelineItem
            v-for="(item, index) in timelineItems"
            :key="item.year"
            :year="item.year"
            :title="item.title"
            :description="item.description"
            :color="item.color"
            :last="index === timelineItems.length - 1"
          />
        </div>

        <div class="relative">
          <div
            class="absolute inset-0 bg-cyan/10 rounded-2xl transform translate-x-4 translate-y-4"
          ></div>
          <img
            src="../../../assets/images/NOSOTROS-10.png"
            alt="Fundadores Hericraft"
            class="rounded-2xl shadow-2xl relative w-full object-cover filter grayscale hover:grayscale-0 transition duration-500"
          />
        </div>
      </div>

      <div class="text-center mb-12">
        <h2 class="text-3xl font-display font-bold text-navy">
          {{ $t('us.visionary_leadership') }}
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <FounderCard
          v-for="founder in founders"
          :key="founder.id"
          :name="founder.name"
          :role="founder.role"
          :image="founder.image"
        />
      </div>
    </div>
  </section>
</template>
