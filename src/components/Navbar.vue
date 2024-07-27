<template>
  <div>
    <div class="grid grid-cols-2 bg-black py-1">
      <p class="text-white flex justify-end">welcome to the Dev store</p>
      <div class="flex justify-end mr-6">
        <p class="text-white mx-2"> ES</p>
        <p class="text-white">EN</p>
      </div>
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
            <!-- <h1 class="text-3xl text-black font-bold mx-4">DEV</h1> -->
            <div class="flex">

              <img src="/public/images/logoStore.png" class="w-16  mx-2" alt="">
              <h1 class="font-bold text-4xl ">DEV</h1>
            </div>
          </a>
        </section>
        <nav :class="{ hidden: !menuOpen }" class="flex flex-col sm:flex sm:items-center sm:flex-row gap-2">
          <div class="flex flex-wrap">
            <div class="text-gray-950 hover:bg-gray-200 px-10 rounded hover:text-gray-900    ">
              <router-link to="/mujer">MUJER</router-link>
            </div>
            <div class="text-gray-950 hover:bg-gray-200 px-10 rounded hover:text-gray-900">
              <router-link to="/hombre">HOMBRE</router-link>
            </div>
            <div class="text-gray-950 hover:bg-gray-200 px-2 rounded hover:text-gray-900">
              <router-link to="/accesorios">ACCESORIOS</router-link>
            </div>
          </div>
        </nav>

        <!-- Botones de acción -->
        <div class="flex items-center mt-3 sm:mt-0 lg:flex-row lg:items-center">
          <router-link to="/login">
            <a class="text-gray-600 hover:bg-gray-200 text-left px-2 rounded hover:text-gray-900">INICIAR SESION</a>
          </router-link>



          <button @click="showCartModal"
            class="text-gray-600 hover:bg-gray-200 text-left px-2 rounded hover:text-gray-900">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
              <path fill="currentColor"
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607L1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479l9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4a2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2a1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2" />
            </svg> -->
            <h1>CESTA</h1>

          </button>

          <!-- modal cesta -->
          <ModalComponent v-show="cartOpen" @close="closeCartModal" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ModalComponent from "./modules/ModalComponent.vue";

const menuOpen = ref(false);
const cartOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const showCartModal = () => {
  cartOpen.value = true;
};

const closeCartModal = () => {
  cartOpen.value = false;
};
</script>
<style></style>
