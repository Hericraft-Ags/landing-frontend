<template>
  <section class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Historia Timeline -->
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
            src="https://placehold.co/600x700/0A2966/FFFFFF?text=Fundadores+Hericraft"
            alt="Fundadores Hericraft"
            class="rounded-2xl shadow-2xl relative w-full object-cover filter grayscale hover:grayscale-0 transition duration-500"
          />
        </div>
      </div>

      <!-- Fundadores -->
      <div class="text-center mb-12">
        <h2 class="text-3xl font-display font-bold text-navy">Liderazgo Visionario</h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <FounderCard
          v-for="founder in founders"
          :key="founder.name"
          :name="founder.name"
          :role="founder.role"
          :image="founder.image"
          :border-color="founder.borderColor"
          :role-color="founder.roleColor"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import TimelineItem from '@/components/ui/TimelineItem.vue'
import FounderCard from '@/components/ui/FounderCard.vue'

const timelineItems = [
  {
    year: '2022',
    title: 'La Idea',
    description: 'Nace de la necesidad de unir tecnología y pedagogía real.',
    color: 'navy',
  },
  {
    year: '2023',
    title: 'Constitución',
    description: 'Se funda legalmente Hericraft en Aguascalientes.',
    color: 'cyan',
  },
  {
    year: 'Hoy',
    title: 'Expansión',
    description: 'Impacto en +5,000 estudiantes en México.',
    color: 'green',
  },
]

const founders = [
  {
    name: 'Ricardo A. Villegas',
    role: 'Innovación',
    image: '/assets/images/founders/ricardo.jpg',
    borderColor: 'cyan',
    roleColor: 'green',
  },
  {
    name: 'Héctor N. Prieto',
    role: 'Dirección General',
    image: '/assets/images/founders/hector.jpg',
    borderColor: 'navy',
    roleColor: 'green',
  },
  {
    name: 'Marco A. Gómez',
    role: 'Operaciones',
    image: '/assets/images/founders/marco.jpg',
    borderColor: 'navy',
    roleColor: 'green',
  },
]
</script>
