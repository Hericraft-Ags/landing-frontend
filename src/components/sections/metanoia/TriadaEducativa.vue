<template>
  <section class="py-24 px-6 bg-metanoiaLight relative overflow-hidden">
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
      <div
        class="w-[800px] h-[800px] border border-metanoiaPink/20 rounded-full animate-pulse-slow"
      ></div>
      <div
        class="w-[600px] h-[600px] border border-navy/10 rounded-full absolute animate-spin-slow"
      ></div>
    </div>

    <div class="max-w-5xl mx-auto text-center relative z-10">
      <h2 class="text-3xl font-bold text-navy mb-6">{{ $t('metanoia.triada_title') }}</h2>
      <p class="text-gray-600 mb-16 max-w-3xl mx-auto text-lg">
        {{ $t('metanoia.triada_description') }}
      </p>

      <div class="grid md:grid-cols-3 gap-8 items-center">
        <div
          class="group bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden border border-gray-100 card-hover"
        >
          <div
            class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
          ></div>

          <img
            :src="collegeImage"
            alt="College"
            class="h-24 w-auto mx-auto mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
          />
          <h4
            class="font-bold text-navy text-lg group-hover:text-collegeOrange transition-colors duration-300"
          >
            {{ $t('metanoia.triada_college') }}
          </h4>
          <p class="text-xs text-gray-500 mt-1">{{ $t('metanoia.triada_college_desc') }}</p>

          <div
            class="absolute bottom-0 left-0 w-0 h-0.5 bg-collegeOrange group-hover:w-full transition-all duration-500"
          ></div>
        </div>

        <div
          class="group bg-white p-10 rounded-[2.5rem] shadow-xl border-2 border-metanoiaPink relative z-10 transform hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl"
        >
          <div
            class="absolute -top-4 left-1/2 -translate-x-1/2 bg-metanoiaPink text-white text-xs font-bold px-4 py-1 rounded-full shadow-md animate-float-soft"
          >
            {{ $t('metanoia.triada_connection') }}
          </div>

          <div class="absolute inset-0 overflow-hidden rounded-[2.5rem]">
            <div
              class="absolute -top-10 -right-10 w-32 h-32 bg-metanoiaPink/5 rounded-full group-hover:scale-150 transition-transform duration-700"
            ></div>
            <div
              class="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/5 rounded-full group-hover:scale-150 transition-transform duration-700"
            ></div>
          </div>

          <img
            :src="metanoiaImage"
            alt="Metanoia"
            class="h-28 w-auto mx-auto mb-4 relative z-10 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500"
          />
          <h4
            class="font-bold text-metanoiaPink text-xl group-hover:text-metanoiaDeep transition-colors duration-300"
          >
            {{ $t('metanoia.triada_metanoia') }}
          </h4>
          <p class="text-sm text-gray-600 mt-2">{{ $t('metanoia.triada_metanoia_desc') }}</p>
        </div>

        <div
          class="group bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden border border-gray-100 card-hover"
        >
          <div
            class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
          ></div>

          <img
            :src="agoraImage"
            alt="Ágora"
            class="h-24 w-auto mx-auto mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-2"
          />
          <h4
            class="font-bold text-navy text-lg group-hover:text-agoraLime transition-colors duration-300"
          >
            {{ $t('metanoia.triada_agora') }}
          </h4>
          <p class="text-xs text-gray-500 mt-1">{{ $t('metanoia.triada_agora_desc') }}</p>
          <div
            class="absolute bottom-0 left-0 w-0 h-0.5 bg-agoraLime group-hover:w-full transition-all duration-500"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const collegeImage = '/assets/images/metanoia/METANOIA-12-1.png'
const metanoiaImage = '/assets/images/metanoia/METANOIA-13.png'
const agoraImage = '/assets/images/metanoia/METANOIA-14.png'
</script>

<style scoped>
/* Animaciones */
@keyframes float-soft {
  0% {
    transform: translate(-50%, 0px);
  }
  50% {
    transform: translate(-50%, -4px);
  }
  100% {
    transform: translate(-50%, 0px);
  }
}

.animate-float-soft {
  animation: float-soft 3s ease-in-out infinite;
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.02);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.card-hover {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-hover:hover {
  box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.15);
}

img {
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.05));
}

.group:hover img {
  filter: drop-shadow(0 8px 12px rgba(0, 0, 0, 0.1));
}
</style>
