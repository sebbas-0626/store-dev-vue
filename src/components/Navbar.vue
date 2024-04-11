import { ref } from 'vue';
<template>
  <div>
    <div class="flex justify-center bg-black py-1">
      <p class="text-white">welcome to the Dev store</p>
      <!-- <a href="" class="text-white font-bold">ES</a>
      <a href="" class="text-white px-4 font-bold">EN</a> -->
    </div>

    <!-- Navbar Start -->
    <nav class="px-6 py-4">
      <div class="border-b-2 border-slate-300 flex justify-between py-4">
        <!-- Menu hamburguesa -->
        <section class="flex justify-between items-center">
          <button id="menuBtn" class="text-gray-700 sm:hidden" @click="toggleMenu">
            <svg v-if="!menuOpen" class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="100" height="100" viewBox="0 0 50 50">
              <path
                d="M 3 8 A 2.0002 2.0002 0 1 0 3 12 L 47 12 A 2.0002 2.0002 0 1 0 47 8 L 3 8 z M 3 23 A 2.0002 2.0002 0 1 0 3 27 L 47 27 A 2.0002 2.0002 0 1 0 47 23 L 3 23 z M 3 38 A 2.0002 2.0002 0 1 0 3 42 L 47 42 A 2.0002 2.0002 0 1 0 47 38 L 3 38 z">
              </path>
            </svg>
            <svg v-else class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z"></path>
            </svg>
          </button>
          <!-- Logo container-->
          <a href="/">
            <h1 class="text-3xl text-black font-bold mx-4">DEV</h1>
          </a>
        </section>
        <nav :class="{ hidden: !menuOpen }" class="flex flex-col sm:flex sm:items-center sm:flex-row gap-2">
          <div class="flex flex-wrap">
            <div class="text-gray-600 hover:bg-gray-200 w-full text-left px-2 rounded hover:text-gray-900">
              <router-link to="/mujer">MUJER</router-link>
            </div>
            <div class="text-gray-600 hover:bg-gray-200 w-full text-left px-2 rounded hover:text-gray-900">
              <router-link to="/hombre">HOMBRE</router-link>
            </div>
            <div class="text-gray-600 hover:bg-gray-200 w-full text-left px-2 rounded hover:text-gray-900">
              <router-link to="/accesorios">ACCESORIOS</router-link>
            </div>
          </div>
        </nav>


        <!-- Botones de acción -->
        <div class="flex flex-row mt-3 sm:mt-0 lg:flex-row lg:items-center">
          <button class="text-gray-600 hover:bg-gray-200 text-left px-2 rounded hover:text-gray-900">
            <a href="">INICIAR SESION</a>
          </button>
          <button class="text-gray-600 hover:bg-gray-200 text-left px-2 rounded hover:text-gray-900">
            <a href="">CESTA</a>
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>
<style></style>
