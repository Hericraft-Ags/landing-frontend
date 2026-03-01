<template>
  <div
    class="bg-[#085899] rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl"
  >
    <div class="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
      <div class="lg:w-1/2">
        <h3 class="text-3xl md:text-4xl font-display font-bold mb-6">
          {{ $t('college.virtual_lab_title') }}
        </h3>
        <p class="text-gray-300 text-lg mb-8 leading-relaxed">
          {{ $t('college.virtual_lab_description') }}
        </p>
        <button
          class="bg-[#2563eb] hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition shadow-lg shadow-blue-500/30"
        >
          {{ $t('college.virtual_lab_button') }}
        </button>
      </div>

      <div class="lg:w-1/2 w-full">
        <div style="width: 100%">
          <div style="position: relative; padding-bottom: 56.25%; padding-top: 0; height: 0">
            <iframe
              title="Ambiente virtual de aprendizaje Mecatrónica"
              frameborder="0"
              width="1920"
              height="1080"
              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
              src="https://view.genially.com/67168dc0d010e505ac4e1bc5"
              allowscriptaccess="always"
              allowfullscreen="true"
              scrolling="yes"
              allownetworking="all"
            ></iframe>
          </div>
        </div>
        <p class="text-center text-gray-200 text-xs mt-3">
          <i class="fas fa-info-circle mr-1"></i> {{ $t('college.virtual_lab_caption') }}
        </p>
      </div>
    </div>
  </div>
</template>
