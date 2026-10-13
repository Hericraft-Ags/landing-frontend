<template>
  <div class="min-h-screen bg-white flex items-center justify-center px-6">
    <div class="max-w-md text-center">
      <div class="mb-6">
        <i class="fas fa-ban text-6xl text-collegeOrange"></i>
      </div>
      <h1 class="text-6xl font-bold text-navy">403</h1>
      <p class="text-xl text-gray-600 mt-2">Acceso denegado</p>
      <p class="text-gray-500 mt-4">No tienes permisos para acceder a esta página.</p>
      <router-link
        to="/"
        class="inline-flex items-center gap-2 bg-[#08BE66] text-white px-6 py-3 rounded-lg hover:bg-collegeOrange transition mt-6"
      >
        <i class="fas fa-home"></i> Volver al inicio
      </router-link>
    </div>
  </div>
</template>
