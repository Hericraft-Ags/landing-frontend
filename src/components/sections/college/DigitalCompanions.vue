<template>
  <section id="acompanantes" class="py-24 px-6 bg-white relative overflow-hidden">
    <div
      class="absolute inset-0 opacity-5 pointer-events-none"
      style="
        background-image: radial-gradient(#2563eb 1px, transparent 1px);
        background-size: 30px 30px;
      "
    ></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="text-center mb-16">
        <span
          class="text-collegeOrange font-bold uppercase tracking-widest text-sm bg-orange-50 px-3 py-1 rounded-full"
        >
          {{ $t('college.companions_badge') }}
        </span>
        <h2 class="text-4xl font-display font-bold text-navy mt-4">
          {{ $t('college.companions_title') }}
        </h2>
        <p class="text-gray-600 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
          {{ $t('college.companions_description') }}
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
        <CompanionCard
          v-for="companion in companions"
          :key="companion.id"
          :name="companion.name"
          :role="companion.role"
          :image1="companion.image1"
          :image2="companion.image2"
          :hover-color="companion.hoverColor"
        />
      </div>

      <div class="grid md:grid-cols-2 gap-8 items-stretch">
        <SafetyCard />
        <ProfileCard />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import CompanionCard from '@/components/ui/CompanionCard.vue'
import SafetyCard from '@/components/ui/SafetyCard.vue'
import ProfileCard from '@/components/ui/ProfileCard.vue'

const { t } = useI18n({ useScope: 'global' })

const companions = computed(() => [
  {
    id: 'kiby',
    name: t('college.companion_kiby_name'),
    role: t('college.companion_kiby_role'),
    image1: 'personaje_kiby.png',
    image2: 'personaje_kiby_2.png',
    hoverColor: 'yellow',
  },
  {
    id: 'lider',
    name: t('college.companion_lider_name'),
    role: t('college.companion_lider_role'),
    image1: 'personaje_lider.png',
    image2: 'personaje_lider_2.png',
    hoverColor: 'red',
  },
  {
    id: 'cientifica',
    name: t('college.companion_cientifica_name'),
    role: t('college.companion_cientifica_role'),
    image1: 'personaje_cientifica.png',
    image2: 'personaje_cientifica_2.png',
    hoverColor: 'blue',
  },
  {
    id: 'constructor',
    name: t('college.companion_constructor_name'),
    role: t('college.companion_constructor_role'),
    image1: 'personaje_constructor.png',
    image2: 'personaje_constructor_2.png',
    hoverColor: 'purple',
  },
  {
    id: 'comunicologa',
    name: t('college.companion_comunicologa_name'),
    role: t('college.companion_comunicologa_role'),
    image1: 'personaje_comunicologa.png',
    image2: 'personaje_comunicologa_2.png',
    hoverColor: 'teal',
  },
  {
    id: 'artista',
    name: t('college.companion_artista_name'),
    role: t('college.companion_artista_role'),
    image1: 'personaje_artista.png',
    image2: 'personaje_artista_2.png',
    hoverColor: 'orange',
  },
])
</script>
