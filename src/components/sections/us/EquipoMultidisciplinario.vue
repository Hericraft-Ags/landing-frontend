<template>
  <section class="py-24 px-6 bg-lightGray border-t border-gray-200">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <span class="text-green font-bold uppercase tracking-widest text-sm mb-2 block">
          {{ $t('us.our_motor') }}
        </span>
        <h2 class="text-3xl md:text-4xl font-display font-bold text-navy">
          {{ $t('us.our_motor_ecosystem') }}
        </h2>
        <p class="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          {{ $t('us.our_motor_slogan') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DepartmentCard
          v-for="dept in departments"
          :key="dept.name"
          :name="dept.name"
          :description="dept.description"
          :icon="dept.icon"
          :color="dept.color"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import DepartmentCard from '@/components/ui/DeparmentCard.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const departmentColors = ['blue', 'purple', 'pink', 'orange', 'green', 'gray']
const icons = ['fa-lightbulb', 'fa-code', 'fa-pen-nib', 'fa-video', 'fa-handshake', 'fa-users-cog']

const departments = computed(() => [
  {
    name: t('us.innovation_title'),
    description: t('us.innovation_description'),
    icon: icons[0],
    color: departmentColors[0],
  },
  {
    name: t('us.web_develop_title'),
    description: t('us.web_develop_description'),
    icon: icons[1],
    color: departmentColors[1],
  },
  {
    name: t('us.design_title'),
    description: t('us.design_description'),
    icon: icons[2],
    color: departmentColors[2],
  },
  {
    name: t('us.digital_title'),
    description: t('us.digital_description'),
    icon: icons[3],
    color: departmentColors[3],
  },
  {
    name: t('us.sales_title'),
    description: t('us.sales_description'),
    icon: icons[4],
    color: departmentColors[4],
  },
  {
    name: t('us.rh_title'),
    description: t('us.rh_description'),
    icon: icons[5],
    color: departmentColors[5],
  },
])
</script>
