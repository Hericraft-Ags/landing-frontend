<script setup>
import HeroSection from '@/components/sections/index/HeroSection.vue'
import AulaActiva from '@/components/sections/index/AulaActivaSection.vue'
import Consultoria from '@/components/sections/index/ConsultoriaSection.vue'
import FinalCTA from '@/components/sections/index/FinalCTASection.vue'
import GoogleEcosystem from '@/components/sections/index/GoogleEcosystemSection.vue'
import KnowledgeHub from '@/components/sections/index/KnowledgeHubSection.vue'
import Manifesto from '@/components/sections/index/ManifiestoSection.vue'
</script>

<template>
  <div>
    <HeroSection />
    <Manifesto />
    <GoogleEcosystem />
    <AulaActiva />
    <Consultoria />
    <KnowledgeHub />
    <FinalCTA />
  </div>
</template>
