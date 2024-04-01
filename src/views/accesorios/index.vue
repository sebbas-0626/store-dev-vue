<template>
  <div>
    <AvatarGallery :avatars="avatars"/>
    <section>
      <Cards/>
    </section>
  </div>
</template>

<script setup lang="ts">
import Cards from "../../components/cards.vue";
import AvatarGallery from '@/components/AvatarGallery.vue';

const avatars = [
  { src: "/public/images/accesorios/tazas/logotaza.webp" },
  { src: "/public/images/accesorios/tazas/logotaza.webp" },
];
</script>

<style>
</style>
