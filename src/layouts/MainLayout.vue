<script setup>
import Navbar from '@/layouts/TheNavbar.vue'
import Footer from '@/layouts/TheFooter.vue'
import AccessibilityBar from '@/components/ui/AccesibilityBar.vue'
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
    <Navbar :color="themeColor" />

    <main class="flex-1">
      <router-view />
    </main>

    <Footer :color="themeColor" />
  </div>
</template>
