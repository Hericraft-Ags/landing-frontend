<script setup>
import TeamCard from './TeamCard.vue'
import RequestSection from './RequestSection.vue'
import Aurora from '@/components/animations/backgrounds/Aurora.vue'
</script>

<template>
  <section class="relative w-full min-h-screen bg-[#0A1931] overflow-hidden">
    <div class="max-w-7xl mx-auto flex-col lg:flex-row items-center gap-12 px-4 sm:px-4 py-30">
      <h2 class="text-2xl sm:text-4xl font-bold mb-6 leading-tight text-white inline">
        El equipo ideal
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-center">
        <TeamCard
          name="Ricardo Vásquez"
          role="Vision / producto"
          description="Embajador STEAM en México. +12 años de experiencia. Ha impactado a +20,000 estudiantes. Creador del currículo EBA de College."
          initials="RV"
          borderColor="cyan-500"
        />
        <TeamCard
          name="Marco Gómez"
          role="Ventas / Red"
          description="+25 años de experiencia directiva. Red de contactos de alto nivel en el mercado educativo. Directivo en redes de colegios prestigiosos."
          initials="MG"
          borderColor="gray-400"
        />
        <TeamCard
          name="Héctor Prieto"
          role="Formación"
          description="Único Google Innovator en la región. Fundador de GEG Aguascalientes. Ha capacitado a +500 docentes en ecosistemas digitales."
          initials="HP"
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
