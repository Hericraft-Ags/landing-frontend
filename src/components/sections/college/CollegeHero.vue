<template>
  <section class="relative bg-slate-50 pt-40 pb-32 px-6 overflow-hidden clip-wave-bottom">
    <div class="absolute inset-0 hero-pattern pointer-events-none"></div>
    <div
      class="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-orange-50 to-transparent pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-10">
      <div class="space-y-8 animate-fade-in-up">
        <div
          class="inline-flex items-center gap-2 border border-[#ff6b00]/30 bg-orange-50 text-[#ff6b00] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider"
        >
          <i class="fas fa-graduation-cap"></i> {{ $t('college.hero_badge') }}
        </div>

        <img
          src="/assets/images/logos/logo_college.png"
          alt="College Logo"
          class="h-40 w-auto mb-2 drop-shadow-sm"
        />

        <h1
          class="text-5xl md:text-6xl font-display font-bold text-navy leading-tight text-gray-800"
        >
          {{ $t('college.hero_title_part1') }} <br />
          <span class="text-[#ff6b00] bg-clip-text bg-linear-to-r from-[#ff6b00] to-red-500">
            {{ $t('college.hero_title_part2') }}
          </span>
        </h1>

        <p
          class="text-lg text-gray-600 leading-relaxed max-w-lg border-l-4 border-collegeBlue pl-6"
        >
          {{ $t('college.hero_description') }}
        </p>

        <div class="flex flex-wrap gap-4 pt-2">
          <a
            href="#"
            class="bg-[#ff6b00] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-orange-600 transition flex items-center gap-2 group"
          >
            {{ $t('college.hero_schools_btn') }}
            <i class="fas fa-school group-hover:scale-110 transition"></i>
          </a>
          <a
            href="#"
            class="bg-white text-[#2563eb] border-2 border-collegeBlue px-8 py-4 rounded-full font-bold shadow-sm hover:bg-blue-50 transition flex items-center gap-2"
          >
            {{ $t('college.hero_families_btn') }}
            <i class="fas fa-home"></i>
          </a>
        </div>
      </div>

      <div class="relative group perspective-1000">
        <div
          class="absolute inset-0 bg-linear-to-tr from-collegeOrange to-collegeBlue rounded-4xl opacity-20 rotate-6 scale-95 transition-transform group-hover:rotate-3"
        ></div>
        <img
          src="/assets/images/college/hero_college.jpg"
          :alt="$t('college.hero.image_alt')"
          class="relative rounded-4xl shadow-2xl border-4 border-white w-full object-cover transform transition duration-500 group-hover:-translate-y-2"
        />

        <div
          class="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow border-l-4 border-collegeYellow hidden md:flex"
        >
          <div class="bg-yellow-100 p-2 rounded-full text-[#fbbf24]">
            <i class="fas fa-star"></i>
          </div>
          <div>
            <p class="font-bold text-navy text-sm">{{ $t('college.hero_badge_standards') }}</p>
            <p class="text-xs text-gray-500">{{ $t('college.hero_badge_certifications') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
