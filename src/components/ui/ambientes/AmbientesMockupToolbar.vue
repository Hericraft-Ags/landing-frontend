<template>
  <div
    class="bg-slate-900/50 backdrop-blur px-4 py-2 border-t border-slate-700 flex items-center justify-between"
  >
    <div class="flex items-center gap-3">
      <div
        class="w-6 h-6 rounded bg-cyan-bright/20 flex items-center justify-center text-cyan-bright text-xs"
      >
        <i class="fas fa-arrow-pointer"></i>
      </div>
      <div
        class="w-6 h-6 rounded bg-slate-700 flex items-center justify-center text-gray-400 text-xs"
      >
        <i class="fas fa-cube"></i>
      </div>
      <div
        class="w-6 h-6 rounded bg-slate-700 flex items-center justify-center text-gray-400 text-xs"
      >
        <i class="fas fa-ruler"></i>
      </div>
    </div>
    <div class="text-[10px] text-gray-500">
      <i class="far fa-save mr-1"></i>{{ $t('index.auto_save') }}
    </div>
  </div>
</template>
