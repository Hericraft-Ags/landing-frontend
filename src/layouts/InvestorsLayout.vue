<script setup>
import Footer from '@/layouts/TheFooter.vue'
import AccessibilityBar from '@/components/ui/AccesibilityBar.vue'
import InverstorsNav from './InvestorsNav.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const themeColor = computed(() => {
  return route.meta.themeColor || '#051b45'
})

const accessibilityColor = computed(() => {
  return route.meta.accessibilityColor || '#fff'
})
const colorTextAccessibility = computed(() => {
  return route.meta.colorTextAccessibility || '#fff'
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AccessibilityBar
      :color="themeColor"
      :accessibility-color="accessibilityColor"
      :colorTextAccessibility="colorTextAccessibility"
    />
    <InverstorsNav :color="themeColor" />
    <main class="flex-1">
      <router-view />
      <!-- Cambiado de slot a router-view -->
    </main>

    <Footer :color="themeColor" />
  </div>
</template>
