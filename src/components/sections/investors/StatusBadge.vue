<template>
  <div
    class="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/20"
  >
    <span class="relative flex h-2 w-2">
      <span
        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"
      ></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
    </span>
    <span class="text-[10px] font-bold text-[#00F0FF] uppercase tracking-widest whitespace-nowrap">
      <slot />
    </span>
  </div>
</template>
