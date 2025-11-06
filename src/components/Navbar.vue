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
          <MenuButton :is-open="menuOpen" @toggle="toggleMenu" />
           <!-- Logo container-->
           <a href="/">
            <div class="flex mx-14">
              <img src="/public/images/logoStore.png" class="w-16  mx-1" alt="">
              <h1 class="font-bold text-4xl ">DEV</h1>
            </div>
          </a>
           <!-- Menú desplegable -->
           <div :class="{ hidden: !menuOpen, 'block': menuOpen, 'sm:flex': true }" class="flex-col sm:flex-row sm:items-center w-full sm:w-auto p-4 gap-4 sm:gap-2">
      <div class="flex flex-col sm:flex-row w-full sm:w-auto">
        <div class="text-gray-950 hover:bg-gray-200 px-4 py-2 rounded hover:text-gray-900">
          <router-link to="/mujer">MUJER</router-link>
        </div>
        <div class="text-gray-950 hover:bg-gray-200 px-4 py-2 rounded hover:text-gray-900">
          <router-link to="/hombre">HOMBRE</router-link>
        </div>
        <div class="text-gray-950 hover:bg-gray-200 px-4 py-2 rounded hover:text-gray-900">
          <router-link to="/accesorios">ACCESORIOS</router-link>
        </div>
      </div>
    </div>
         
        </section>
        <!-- <div :class="{ hidden: !menuOpen }" class="flex flex-col sm:flex sm:items-center sm:flex-row gap-2">
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
        </div> -->
        

        <!-- Botones de acción -->
        <div class="flex items-center mt-3 sm:mt-0 lg:flex-row lg:items-center">
          <router-link to="/login">
            <!-- <a class="text-gray-600 hover:bg-gray-200 text-left px-2 rounded hover:text-gray-900">INICIAR SESION</a> -->


            <a @click="handleLogin"
              class="flex items-center text-gray-600 hover:bg-gray-200 text-left px-2 py-1 rounded hover:text-gray-900 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>

              <span class="hidden md:inline">INICIAR SESIÓN</span>
            </a>
          </router-link>

          <a @click="showCartModal"
            class="flex items-center text-gray-600 hover:bg-gray-200 text-left px-2 py-1 rounded hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <path fill="currentColor"
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607L1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479l9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4a2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2a1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2" />
            </svg>
            <span class="hidden md:inline">CESTA</span>
          </a>

          <!-- modal cesta -->
          <!-- <ModalComponent v-show="cartOpen" @close="closeCartModal" /> -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ModalComponent from "./modules/ModalComponent.vue";
import MenuButton from "./MenuButton.vue";

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

const handleLogin = () => {
  // Login logic here
  console.log("que hces ",handleLogin);
};
</script>
<style></style>
