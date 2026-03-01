<template>
  <section class="py-24 px-6 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12">
        <!-- EventCard principal -->
        <EventCard
          :title="$t('college.events.gathering_title')"
          :description="$t('college.events.gathering_description')"
          :badge="$t('college.events.gathering_badge')"
          :image="gatheringImage"
          :link="gatheringLink"
          color="purple"
        />

        <!-- Contenedor de SecondaryCards -->
        <div class="flex flex-col gap-6 justify-center">
          <SecondaryCard
            :title="$t('college.events.franchise_title')"
            :description="$t('college.events.franchise_description')"
            :icon="franchiseIcon"
            :link="franchiseLink"
            color="orange"
          />

          <SecondaryCard
            :title="$t('college.events.agora_title')"
            :description="$t('college.events.agora_description')"
            :icon="agoraIcon"
            :link="agoraLink"
            color="blue"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import EventCard from '@/components/ui/EventCard.vue'
import SecondaryCard from '@/components/ui/SecondaryCard.vue'

// Rutas para imágenes en public
const gatheringImage = '/assets/images/college/encuentro_gigantes.jpg'
const gatheringLink = '/#'
const franchiseIcon = '/assets/images/logo_store_college.svg'
const franchiseLink = '/#'
const agoraIcon = '/assets/images/college/logo_agora.png'
const agoraLink = '/#'
</script>
