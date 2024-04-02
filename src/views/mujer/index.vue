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
  { src: "/public/images/hombre/saco1.webp" },
  { src: "/public/images/hombre/saco2.webp" },
];
</script>

<style>
</style>
../../components/Card.vue