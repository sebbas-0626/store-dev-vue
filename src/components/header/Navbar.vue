<template>
  <div>
    <TopHeader />
    <nav class="px-6 py-4">
      <div class="flex justify-between items-center py-4">

        <MenuButton :is-open="menuOpen" @toggle="toggleMenu" class="sm:hidden" />
        <div class="flex items-center">
          <a href="/">
            <div class="flex mx-4 sm:mx-14 items-center">
              <img src="/public/images/logoStore.png" class="w-16 mx-1" alt="">
              <h1 class="font-bold text-4xl">DEV</h1>
            </div>
          </a>
        </div>

        <!-- Menú Desktop -->
        <DesktopNavLinks />

        <div class="flex items-center lg:flex-row lg:items-center">
          <router-link to="/login">
            <a @click="handleLogin"
              class="flex items-center text-gray-600 hover:bg-gray-200 text-left px-2 py-1 rounded hover:text-gray-900 cursor-pointer">
              <UserButton />
              <span class="hidden md:inline">INICIAR SESIÓN</span>
            </a>
          </router-link>

          <a @click="showCartModal"
            class="flex items-center text-gray-600 hover:bg-gray-200 text-left px-2 py-1 rounded hover:text-gray-900">
            <CartButton />
            <span class="hidden md:inline">CESTA</span>
          </a>
        </div>

        <MobileMenuModal :is-open="menuOpen" @toggle="toggleMenu" />
      </div>
    </nav>
  </div>
</template> 
<script setup lang="ts">
import { ref } from "vue";
import MenuButton from "../MenuButton.vue";
import CartButton from "../ui/CartButton.vue";
import UserButton from "../ui/UserButton.vue";
import MobileMenuModal from "./MobileMenuModal.vue";
import TopHeader from "../header/TopHeader.vue";
import DesktopNavLinks from "../header/DesktopNavLinks.vue";

const menuOpen = ref(false);
const cartOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const showCartModal = () => {
  cartOpen.value = true;
};

const handleLogin = () => {
};
</script>

