<template>
  <section id="oferta" class="py-24 px-6 bg-oxfordGray relative overflow-hidden">
    <div
      class="absolute inset-0 opacity-10"
      style="
        background-image: radial-gradient(#ffffff 1px, transparent 1px);
        background-size: 40px 40px;
      "
    ></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="mb-16 text-center md:text-left">
        <span class="text-agoraLime font-bold uppercase tracking-widest text-sm mb-2 block">
          {{ $t('agora.galaxies_badge') }}
        </span>
        <h2 class="text-4xl font-agora font-black text-white">
          {{ $t('agora.galaxies_title') }}
        </h2>
        <p class="text-gray-400 mt-4 max-w-3xl text-lg leading-relaxed">
          {{ $t('agora.galaxies_description') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <GalaxiaCard
          v-for="(galaxy, index) in galaxies"
          :key="index"
          :title="galaxy.title"
          :subtitle="galaxy.subtitle"
          :challenge="galaxy.challenge"
          :objective="galaxy.objective"
          :icon="galaxy.icon"
          :color="galaxy.color"
          :galaxy-id="galaxy.id"
          :button-text="galaxy.buttonText"
          @open-modal="handleOpenModal"
        />
      </div>

      <!-- Tarjeta especial de Sociedad & Futuro -->
      <div
        class="mt-8 bg-gradient-to-r from-agoraDark to-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700 hover:border-agoraLime transition group relative overflow-hidden"
      >
        <div
          class="absolute inset-0 bg-agoraLime/5 opacity-0 group-hover:opacity-100 transition duration-500"
        ></div>
        <div class="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div class="bg-agoraLime/20 p-4 rounded-2xl shrink-0">
            <i class="fas fa-users text-agoraLime text-4xl"></i>
          </div>
          <div class="flex-grow">
            <div class="flex items-center gap-3 mb-2">
              <h3
                class="text-2xl font-agora font-bold text-white group-hover:text-agoraLime transition"
              >
                {{ $t('agora.society_title') }}
              </h3>
              <span
                class="bg-agoraLime/20 text-agoraLime text-[10px] font-bold px-3 py-1 rounded-full border border-agoraLime/30 uppercase"
              >
                {{ $t('agora.society_badge') }}
              </span>
            </div>
            <p class="text-gray-300 text-sm leading-relaxed max-w-2xl">
              <strong>{{ $t('agora.society_challenge') }}</strong>
              {{ $t('agora.society_challenge_text') }} <br />
              <strong>{{ $t('agora.society_objective') }}</strong>
              {{ $t('agora.society_objective_text') }}
            </p>
          </div>
          <!--<button
            @click="openSocietyModal"
            class="bg-agoraLime text-agoraDark px-8 py-4 rounded-full font-bold hover:bg-white transition shadow-lg hover:shadow-lime-500/30 transform hover:-translate-y-1 flex items-center gap-2"
          >
            {{ $t('agora.society_button') }}
            <i class="fas fa-arrow-right"></i>
          </button>-->
        </div>
      </div>
    </div>

    <!-- Modal de cursos -->
    <CourseModal
      :is-open="modalOpen"
      :galaxy-id="selectedGalaxyId"
      :galaxy-name="selectedGalaxyName"
      @close="modalOpen = false"
      @select-course="handleSelectCourse"
    />
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import GalaxiaCard from '@/components/ui/GalaxiaCard.vue'
import CourseModal from '@/components/ui/GalaxiaModal.vue'

const { t } = useI18n({ useScope: 'global' })

// Estado del modal
const modalOpen = ref(false)
const selectedGalaxyId = ref(null)
const selectedGalaxyName = ref('')

const galaxies = computed(() => [
  {
    id: 1,
    title: t('agora.galaxy_1_title'),
    subtitle: t('agora.galaxy_1_subtitle'),
    challenge: t('agora.galaxy_1_challenge'),
    objective: t('agora.galaxy_1_objective'),
    icon: 'AGORA-15.png',
    color: 'green',
  },
  {
    id: 2,
    title: t('agora.galaxy_2_title'),
    subtitle: t('agora.galaxy_2_subtitle'),
    challenge: t('agora.galaxy_2_challenge'),
    objective: t('agora.galaxy_2_objective'),
    icon: 'AGORA-16.png',
    color: 'lime',
  },
  {
    id: 3,
    title: t('agora.galaxy_3_title'),
    subtitle: t('agora.galaxy_3_subtitle'),
    challenge: t('agora.galaxy_3_challenge'),
    objective: t('agora.galaxy_3_objective'),
    icon: 'AGORA-17.png',
    color: 'blue',
    buttonText: t('agora.explore_courses'),
  },
  {
    id: 4,
    title: t('agora.galaxy_4_title'),
    subtitle: t('agora.galaxy_4_subtitle'),
    challenge: t('agora.galaxy_4_challenge'),
    objective: t('agora.galaxy_4_objective'),
    icon: 'AGORA-18.png',
    color: 'yellow',
  },
])

const handleOpenModal = ({ galaxyId, galaxyName }) => {
  selectedGalaxyId.value = galaxyId
  selectedGalaxyName.value = galaxyName
  modalOpen.value = true
}

/*const openSocietyModal = () => {
  selectedGalaxyId.value = 'society'
  selectedGalaxyName.value = t('agora.society_title')
  modalOpen.value = true
}*/
</script>
