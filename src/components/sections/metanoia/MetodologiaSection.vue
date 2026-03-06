<template>
  <section class="py-24 px-6 bg-white relative overflow-hidden">
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="relative group">
          <div
            class="absolute inset-0 bg-linear-to-tr from-metanoiaPink to-purple-500 rounded-[2rem] opacity-20 rotate-3 transform group-hover:rotate-1 transition duration-500"
          ></div>
          <img
            :src="metodologiaImage"
            :alt="$t('metanoia.metodologia_image_alt')"
            class="relative rounded-[2rem] shadow-2xl border-4 border-white w-full object-cover"
          />
        </div>

        <div>
          <span
            class="text-metanoiaPink font-bold uppercase tracking-widest text-sm mb-2 block bg-pink-50 w-fit px-3 py-1 rounded-full"
          >
            {{ $t('metanoia.metodologia_badge') }}
          </span>
          <h2 class="text-4xl font-metanoia font-black text-[#5f5e5e] mb-6">
            {{ $t('metanoia.metodologia_title_part1') }}
            <span class="text-metanoiaPink">{{ $t('metanoia.metodologia_title_part2') }}</span>
          </h2>
          <p class="text-gray-600 text-lg mb-8 leading-relaxed">
            {{ $t('metanoia.metodologia_description') }}
          </p>

          <div class="space-y-6">
            <div
              v-for="(item, index) in metodologiaItems"
              :key="index"
              class="flex items-start gap-4 p-4 rounded-2xl bg-metanoiaLight/50 border border-pink-100 card-hover-metanoia transition-all duration-300"
              :class="item.hoverClass"
            >
              <div
                class="bg-white p-3 rounded-full shadow-sm shrink-0 transition-all duration-300"
                :class="[item.iconBgClass, item.iconGroupHoverClass]"
              >
                <i
                  :class="[item.icon, 'text-xl transition-all duration-300']"
                  :style="{ color: item.iconColor }"
                ></i>
              </div>
              <div>
                <h4
                  class="font-bold text-navy text-lg transition-colors duration-300"
                  :class="item.titleHoverClass"
                >
                  {{ item.title }}
                </h4>
                <p class="text-sm text-gray-600">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })
const metodologiaImage = '/assets/images/metanoia/METANOIA-01.png'

const metodologiaItems = computed(() => [
  {
    title: t('metanoia.metodologia_item_1_title'),
    description: t('metanoia.metodologia_item_1_description'),
    icon: 'fas fa-shield-alt',
    iconColor: '#d5005f',
    iconBgClass: 'group-hover:bg-metanoiaPink/10',
    iconGroupHoverClass: 'group-hover:scale-110 group-hover:rotate-3',
    titleHoverClass: 'group-hover:text-metanoiaPink',
    hoverClass: 'hover:border-metanoiaPink/30 hover:shadow-lg hover:shadow-pink-500/10',
  },
  {
    title: t('metanoia.metodologia_item_2_title'),
    description: t('metanoia.metodologia_item_2_description'),
    icon: 'fas fa-hands-helping',
    iconColor: '#7c3aed',
    iconBgClass: 'group-hover:bg-purple-500/10',
    iconGroupHoverClass: 'group-hover:scale-110 group-hover:rotate-3',
    titleHoverClass: 'group-hover:text-purple-600',
    hoverClass: 'hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10',
  },
  {
    title: t('metanoia.metodologia_item_3_title'),
    description: t('metanoia.metodologia_item_3_description'),
    icon: 'fas fa-comments',
    iconColor: '#00c2ff',
    iconBgClass: 'group-hover:bg-cyanBright/10',
    iconGroupHoverClass: 'group-hover:scale-110 group-hover:rotate-3',
    titleHoverClass: 'group-hover:text-cyanBright',
    hoverClass: 'hover:border-cyanBright/30 hover:shadow-lg hover:shadow-cyan-500/10',
  },
])
</script>

<style scoped>
.card-hover-metanoia {
  transition: all 0.3s ease;
  cursor: pointer;
  border-width: 1px;
}

.card-hover-metanoia:hover {
  transform: translateX(8px) translateY(-2px);
}

/* Animación adicional para el ícono */
.card-hover-metanoia:hover i {
  animation: iconPulse 0.5s ease;
}

@keyframes iconPulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

/* Efecto de brillo en hover */
.card-hover-metanoia::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
  pointer-events: none;
}

.card-hover-metanoia:hover::after {
  transform: translateX(100%);
}
</style>
