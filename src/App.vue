<script setup>
import HeroSection from './components/sections/index/HeroSection.vue'
import AulaActiva from './components/sections/index/AulaActivaSection.vue'
import Consultoria from './components/sections/index/ConsultoriaSection.vue'
import FinalCTA from './components/sections/index/FinalCTASection.vue'
import GoogleEcosystem from './components/sections/index/GoogleEcosystemSection.vue'
import KnowledgeHub from './components/sections/index/KnowledgeHubSection.vue'
import Manifesto from './components/sections/index/ManifiestoSection.vue'
import Navbar from './layouts/Navbar.vue'
import Footer from './layouts/Footer.vue'
</script>

<template>
  <div>
    <Navbar />
    <HeroSection />
    <Manifesto />
    <GoogleEcosystem />
    <AulaActiva />
    <Consultoria />
    <KnowledgeHub />
    <FinalCTA />
    <Footer />
  </div>
</template>
<style scoped></style>
