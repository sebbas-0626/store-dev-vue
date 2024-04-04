<template>
  <div>
    <AvatarGallery :avatars="avatars"/>
    <section>
      <Cards/>
    </section>
  </div>
</template>

<script setup lang="ts">
import AvatarGallery from '@/components/AvatarGallery.vue';

const avatars = [
  { src: "/public/images/accesorios/tazas/mug.jpg" },
  { src: "/public/images/accesorios/tazas/mug.jpg" },
];
</script>

<style>
</style>
../../components/Card.vue