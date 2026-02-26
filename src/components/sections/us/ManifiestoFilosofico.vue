<template>
  <section class="py-24 bg-[#fdfdfd] relative border-b border-gray-100">
    <div
      class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-navy via-cyan to-green"
    ></div>

    <div class="max-w-5xl mx-auto px-6 text-center relative z-10">
      <div class="font-hand text-2xl md:text-3xl text-navy leading-relaxed space-y-8">
        <p>
          {{ $t('us.philosophy_part1') }}
          <span class="text-green font-bold">{{ $t('us.philosophy_highlight') }}</span>
          {{ $t('us.philosophy_part2') }}
        </p>

        <p>
          {{ $t('us.vision_part1') }}
          <span class="text-green font-bold">{{ $t('us.vision_highlight') }}</span>
          {{ $t('us.vision_part2') }}
        </p>
        <p>
          {{ $t('us.beliefs_part1') }}
          <span class="text-green font-bold">{{ $t('us.beliefs_highlight') }}</span>
          {{ $t('us.beliefs_part2') }}
        </p>

        <div class="py-8">
          <p class="text-4xl md:text-5xl font-bold text-navy">
            {{ $t('us.movement_text') }}<br />
            {{ $t('us.movement_text_2') }}
          </p>
          <p class="mt-4 text-2xl">
            {{ $t('us.promise_text') }}
          </p>
        </div>

        <p class="text-2xl text-gray-500">
          {{ $t('us.future_text') }}
        </p>
      </div>

      <div class="mt-12">
        <img
          src="/assets/images/us/NOSOTROS-01.svg"
          alt="Equipo Hericraft"
          class="mx-auto opacity-80 h-20 object-contain"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
@import '@/style.css';

.text-navy {
  color: #0a2966;
}

.text-green {
  color: #39cc7f;
}

.text-cyan {
  color: #0ef1eb;
}

.text-collegeOrange {
  color: #ff6b35;
}
</style>
