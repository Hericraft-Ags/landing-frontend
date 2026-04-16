<template>
  <div
    class="bg-slate-800/95 lg:bg-slate-800 border-r border-slate-700 shadow-2xl flex flex-col backdrop-blur-md h-full overflow-y-auto custom-scrollbar"
  >
    <!-- Header -->
    <div
      class="p-4 bg-blueprint-navy border-b border-white/10 flex justify-between items-center shrink-0"
    >
      <div>
        <h1 class="font-bold text-white text-lg tracking-wide">
          {{ t('studio.title') }} <span class="text-blueprint-cyan">Studio</span>
        </h1>
        <p class="text-[10px] text-gray-400 uppercase tracking-widest">
          {{ t('studio.subtitle') }}
        </p>
      </div>
      <div class="flex gap-2">
        <button
          @click="$emit('show-help')"
          class="text-blueprint-orange hover:bg-white/10 p-2 rounded-full transition"
          :title="t('studio.help')"
        >
          <i class="fas fa-life-ring animate-pulse"></i>
        </button>
        <button
          @click="$emit('close-sidebar')"
          class="lg:hidden text-gray-400 hover:text-white p-2"
        >
          <i class="fas fa-chevron-left"></i>
        </button>
      </div>
    </div>

    <!-- Content - Scrollable -->
    <div class="flex-1 overflow-y-auto p-4 space-y-6">
      <!-- Nivel Académico -->
      <section
        class="bg-slate-900/50 p-2 rounded-xl border border-slate-700 flex justify-between items-center"
      >
        <label class="text-xs font-bold text-gray-300 ml-2">{{ t('studio.academic_level') }}</label>
        <select
          v-model="localLevel"
          class="bg-slate-800 border border-slate-600 rounded-lg text-xs p-1.5 text-blueprint-cyan outline-none"
        >
          <option value="primaria">{{ t('studio.primaria') }}</option>
          <option value="secundaria">{{ t('studio.secundaria') }}</option>
          <option value="bachillerato">{{ t('studio.bachillerato') }}</option>
        </select>
      </section>

      <!-- 1. Ambiente -->
      <section>
        <h3 class="text-xs font-bold text-blueprint-orange uppercase mb-3 flex items-center gap-2">
          <i class="fas fa-layer-group"></i> 1. {{ t('studio.environment') }}
        </h3>
        <div class="grid grid-cols-2 gap-2">
          <button
            v-for="room in roomTypes"
            :key="room.id"
            @click="localRoomType = room.id"
            class="text-[10px] p-2.5 rounded-lg border transition-all text-left truncate flex items-center gap-2"
            :class="
              localRoomType === room.id
                ? 'bg-blueprint-cyan text-navy border-blueprint-cyan font-bold shadow-[0_0_10px_rgba(14,241,235,0.3)]'
                : 'border-slate-600 text-gray-400 hover:border-gray-400 hover:text-gray-200'
            "
          >
            <i v-if="localRoomType === room.id" class="fas fa-check-circle"></i>
            {{ t(`studio.room_types.${room.id}`) }}
          </button>
        </div>
      </section>

      <!-- 2. Geometría -->
      <section>
        <div class="flex items-center mb-2">
          <h3 class="text-xs font-bold text-blueprint-orange uppercase">
            2. {{ t('studio.geometry') }}
          </h3>
          <InfoTooltip
            :data="{
              title: $t('studio.tooltips.geometry_title'),
              text: $t('studio.tooltips.geometry_text'),
            }"
          />
        </div>
        <div class="flex gap-2 mb-3">
          <button
            v-for="s in roomShapes"
            :key="s.id"
            @click="localShape = s.id"
            class="flex-1 py-2 rounded-lg text-[10px] border transition-colors"
            :class="
              localShape === s.id
                ? 'bg-white text-navy font-bold border-white'
                : 'bg-slate-900 border-slate-600 text-gray-400'
            "
          >
            {{ t(`studio.shapes.${s.id}`) }}
          </button>
        </div>
        <div class="flex gap-3 text-xs">
          <div class="flex-1 relative">
            <label
              class="absolute -top-2 left-2 px-1 bg-slate-800 text-[9px] text-blueprint-cyan"
              >{{ t('studio.width') }}</label
            >
            <input
              type="number"
              v-model.number="localWidth"
              class="w-full bg-slate-900 border border-slate-600 rounded-lg p-2.5 text-center text-white focus:border-blueprint-cyan outline-none transition"
            />
          </div>
          <div class="flex-1 relative">
            <label
              class="absolute -top-2 left-2 px-1 bg-slate-800 text-[9px] text-blueprint-cyan"
              >{{ t('studio.length') }}</label
            >
            <input
              type="number"
              v-model.number="localLength"
              class="w-full bg-slate-900 border border-slate-600 rounded-lg p-2.5 text-center text-white focus:border-blueprint-cyan outline-none transition"
            />
          </div>
        </div>
      </section>

      <!-- 3. Densidad Pedagógica -->
      <section>
        <div class="flex items-center mb-2">
          <h3 class="text-xs font-bold text-blueprint-orange uppercase">
            3. {{ t('studio.density') }}
          </h3>
          <InfoTooltip
            :data="{
              title: $t('studio.tooltips.capacity_title'),
              text: $t('studio.tooltips.capacity_text'),
            }"
            position="right"
          />
        </div>
        <div class="bg-slate-900 p-3 rounded-xl border border-slate-700">
          <div class="flex justify-between items-center mb-2">
            <span class="text-xl font-bold text-white"
              >{{ localStudents }}
              <span class="text-xs font-normal text-gray-400">{{
                t('studio.students')
              }}</span></span
            >
            <span
              class="text-xs bg-blueprint-cyan/10 text-blueprint-cyan px-2 py-1 rounded border border-blueprint-cyan/30"
              >{{ studentTablesCount }} {{ t('studio.tables') }}</span
            >
          </div>
          <input
            type="range"
            v-model.number="localStudents"
            min="8"
            max="64"
            step="8"
            class="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blueprint-cyan"
          />
        </div>
      </section>

      <!-- 4. Zonas Especializadas -->
      <section v-if="currentRoom && currentRoom.zones">
        <div class="flex items-center mb-2">
          <h3 class="text-xs font-bold text-blueprint-orange uppercase">
            4. {{ t('studio.zones') }}
          </h3>
          <InfoTooltip
            :data="{
              title: $t('studio.tooltips.zones_title'),
              text: $t('studio.tooltips.zones_text'),
            }"
            position="right"
          />
        </div>
        <div class="space-y-2">
          <button
            v-for="z in currentRoom.zones"
            :key="z.id"
            @click="toggleZone(z.id)"
            class="w-full text-left p-2.5 rounded-lg border text-xs flex justify-between items-center transition-all duration-200 group"
            :class="
              activeZones.includes(z.id)
                ? 'bg-gradient-to-r from-blueprint-cyan/20 to-transparent border-blueprint-cyan text-white'
                : 'bg-slate-900 border-slate-700 text-gray-400 hover:border-gray-500'
            "
          >
            <span class="flex items-center gap-2 text-lg">
              <span class="w-6 text-center">{{ z.icon }}</span>
              <span :class="{ 'text-xs font-bold': activeZones.includes(z.id) }">{{
                t(`studio.zones_names.${z.id}`)
              }}</span>
            </span>
            <i v-if="activeZones.includes(z.id)" class="fas fa-check text-blueprint-cyan"></i>
          </button>
        </div>
      </section>

      <!-- 5. Acabados -->
      <section>
        <div class="flex items-center mb-2">
          <h3 class="text-xs font-bold text-blueprint-orange uppercase">
            5. {{ t('studio.finishes') }}
          </h3>
          <InfoTooltip
            :data="{
              title: $t('studio.tooltips.acoustics_title'),
              text: $t('studio.tooltips.acoustics_text'),
            }"
            position="right"
          />
        </div>
        <div class="relative">
          <select
            v-model="localFinishTier"
            class="w-full bg-slate-900 border border-slate-600 rounded-lg p-2.5 text-xs text-white appearance-none cursor-pointer focus:border-blueprint-cyan outline-none"
          >
            <option value="basic">
              {{ t('studio.finish_basic') }} (${{ PRICING.finishes.basic }}{{ t('studio.per_m2') }})
            </option>
            <option value="standard">
              {{ t('studio.finish_standard') }} (${{ PRICING.finishes.standard
              }}{{ t('studio.per_m2') }})
            </option>
            <option value="premium">
              {{ t('studio.finish_premium') }} (${{ PRICING.finishes.premium
              }}{{ t('studio.per_m2') }})
            </option>
          </select>
          <i
            class="fas fa-chevron-down absolute right-3 top-3 text-xs text-gray-400 pointer-events-none"
          ></i>
        </div>
        <div
          class="mt-2 p-3 bg-blueprint-navy/30 rounded-lg border border-blueprint-cyan/20 text-[10px] text-gray-300 leading-relaxed italic"
        >
          {{ currentFinishDesc }}
        </div>
      </section>

      <!-- 6. Kit -->
      <section class="pb-4">
        <h3 class="text-xs font-bold text-blueprint-orange uppercase mb-3">
          6. {{ t('studio.kit') }} {{ currentRoom?.name?.split(' ')[0] || '' }}
        </h3>
        <div class="grid grid-cols-3 gap-2">
          <button
            v-for="tier in ['sencillo', 'avanzado', 'experto']"
            :key="tier"
            @click="localKitTier = tier"
            class="p-2 rounded-lg border flex flex-col items-center justify-center text-center transition-all"
            :class="
              localKitTier === tier
                ? 'bg-blueprint-orange/20 border-blueprint-orange text-white shadow-lg transform scale-105'
                : 'bg-slate-900 border-slate-700 text-gray-500 hover:border-gray-500'
            "
          >
            <span class="text-[9px] uppercase font-bold tracking-wide">{{
              t(`studio.kit_${tier}`)
            }}</span>
            <span class="text-[10px] text-blueprint-orange font-mono"
              >${{ getKitCost(tier) }}k</span
            >
          </button>
        </div>
        <div class="mt-2 text-center text-[10px] text-gray-400">
          {{ currentKitDesc }}
        </div>
      </section>
    </div>

    <!-- Footer Presupuesto -->
    <div class="p-4 bg-slate-900 border-t border-slate-700 shrink-0">
      <div class="flex justify-between items-end mb-3">
        <span class="text-xs text-gray-400 uppercase tracking-widest">{{
          t('studio.total_investment')
        }}</span>
        <span class="text-2xl font-bold font-mono text-green-400 tracking-tighter"
          >${{ totalBudget.toLocaleString() }}</span
        >
      </div>
      <div class="flex w-full h-2 rounded-full overflow-hidden bg-slate-800 mb-4">
        <div
          class="bg-blue-500 h-full transition-all duration-500"
          :style="{ width: `${budgetPercentages.civil}%` }"
        ></div>
        <div
          class="bg-green-500 h-full transition-all duration-500"
          :style="{ width: `${budgetPercentages.furn}%` }"
        ></div>
        <div
          class="bg-purple-500 h-full transition-all duration-500"
          :style="{ width: `${budgetPercentages.zones}%` }"
        ></div>
        <div
          class="bg-orange-500 h-full transition-all duration-500"
          :style="{ width: `${budgetPercentages.kit}%` }"
        ></div>
      </div>
      <button
        @click="$emit('request-quote')"
        class="w-full bg-blueprint-cyan text-navy font-bold py-3 rounded-lg hover:bg-cyan-400 transition shadow-[0_0_20px_rgba(14,241,235,0.4)] transform hover:scale-[1.02]"
      >
        {{ t('studio.schedule_meeting') }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import InfoTooltip from './InfoTooltip.vue'
import { ROOM_TYPES, ROOM_SHAPES, PRICING } from '@/data/studioData'

const { t, locale } = useI18n()

const props = defineProps({
  roomType: { type: String, default: 'maker' },
  shape: { type: String, default: 'rectangular' },
  width: { type: Number, default: 12 },
  length: { type: Number, default: 10 },
  students: { type: Number, default: 24 },
  finishTier: { type: String, default: 'standard' },
  kitTier: { type: String, default: 'sencillo' },
  activeZones: { type: Array, default: () => [] },
  level: { type: String, default: 'secundaria' },
})

const emit = defineEmits([
  'update:roomType',
  'update:shape',
  'update:width',
  'update:length',
  'update:students',
  'update:finishTier',
  'update:kitTier',
  'update:activeZones',
  'show-help',
  'request-quote',
  'update:level',
])

const roomTypes = Object.values(ROOM_TYPES)
const roomShapes = Object.values(ROOM_SHAPES)

// Local state for v-model binding
const localRoomType = computed({
  get: () => props.roomType,
  set: val => emit('update:roomType', val),
})

const localShape = computed({
  get: () => props.shape,
  set: val => emit('update:shape', val),
})

const localWidth = computed({
  get: () => props.width,
  set: val => emit('update:width', val),
})

const localLength = computed({
  get: () => props.length,
  set: val => emit('update:length', val),
})

const localStudents = computed({
  get: () => props.students,
  set: val => emit('update:students', val),
})

const localFinishTier = computed({
  get: () => props.finishTier,
  set: val => emit('update:finishTier', val),
})

const localKitTier = computed({
  get: () => props.kitTier,
  set: val => emit('update:kitTier', val),
})

const localLevel = computed({
  get: () => props.level,
  set: val => emit('update:level', val),
})

const activeZones = computed({
  get: () => props.activeZones,
  set: val => emit('update:activeZones', val),
})

// Computed values
const currentRoom = computed(() => ROOM_TYPES[localRoomType.value])
const currentShape = computed(() => ROOM_SHAPES[localShape.value])

const toggleZone = id => {
  if (activeZones.value.includes(id)) {
    emit(
      'update:activeZones',
      activeZones.value.filter(z => z !== id)
    )
  } else {
    emit('update:activeZones', [...activeZones.value, id])
  }
}

// Descripción de acabados traducida
const currentFinishDesc = computed(() => {
  const roomId = localRoomType.value
  const finish = localFinishTier.value
  return t(`studio.finish_descriptions.${roomId}.${finish}`, 'Seleccione un nivel')
})

// Descripción del kit traducida
const currentKitDesc = computed(() => {
  const roomId = localRoomType.value
  const tier = localKitTier.value
  return t(`studio.kit_descriptions.${roomId}.${tier}`, 'Selecciona un kit')
})

const realArea = computed(
  () => localWidth.value * localLength.value * (currentShape.value?.areaFactor || 1)
)
const studentTablesCount = computed(() => Math.ceil(localStudents.value / 8))

const getKitCost = tier => {
  const kit = PRICING.equipmentKits[localRoomType.value]?.[tier]
  return kit ? Math.round(kit.cost / 1000) : 0
}

const totalBudget = computed(() => {
  const civilCost = realArea.value * PRICING.finishes[localFinishTier.value]
  const furnitureCost =
    studentTablesCount.value * PRICING.furniture.studentTable +
    localStudents.value * PRICING.furniture.chair
  const zonesCost = activeZones.value.reduce((total, zId) => {
    const z = currentRoom.value?.zones?.find(zone => zone.id === zId)
    return total + (z ? z.cost : 0)
  }, 0)
  const currentKit = PRICING.equipmentKits[localRoomType.value]?.[localKitTier.value] || { cost: 0 }
  return civilCost + furnitureCost + zonesCost + currentKit.cost
})

const budgetPercentages = computed(() => {
  const total = totalBudget.value
  if (total === 0) return { civil: 0, furn: 0, zones: 0, kit: 0 }
  const civilCost = realArea.value * PRICING.finishes[localFinishTier.value]
  const furnitureCost =
    studentTablesCount.value * PRICING.furniture.studentTable +
    localStudents.value * PRICING.furniture.chair
  const zonesCost = activeZones.value.reduce((total, zId) => {
    const z = currentRoom.value?.zones?.find(zone => zone.id === zId)
    return total + (z ? z.cost : 0)
  }, 0)
  const currentKit = PRICING.equipmentKits[localRoomType.value]?.[localKitTier.value] || { cost: 0 }
  return {
    civil: (civilCost / total) * 100,
    furn: (furnitureCost / total) * 100,
    zones: (zonesCost / total) * 100,
    kit: (currentKit.cost / total) * 100,
  }
})

watch(localRoomType, (newRoomType, oldRoomType) => {
  if (newRoomType !== oldRoomType) {
    emit('update:activeZones', [])
  }
})

watch(
  () => props.roomType,
  () => {
    const currentRoomData = ROOM_TYPES[props.roomType]
    if (currentRoomData && props.activeZones.length > 0) {
      const validZones = props.activeZones.filter(zoneId =>
        currentRoomData.zones.some(z => z.id === zoneId)
      )
      if (validZones.length !== props.activeZones.length) {
        emit('update:activeZones', validZones)
      }
    }
  },
  { immediate: true }
)
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(14, 241, 235, 0.3);
  border-radius: 3px;
}
</style>
