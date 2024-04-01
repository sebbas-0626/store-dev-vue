<template>
  <div>
    <AvatarGallery :avatars="avatars" />
    <section>
      <Cards :products="products" />
    </section>
  </div>
</template>

<script setup lang="ts">
import Cards from "../../components/cards.vue";
import AvatarGallery from '@/components/AvatarGallery.vue';
import productosHombres from '../../data/productosHombres.json'

const avatars = [
  { src: "/public/images/hombre/saco1.webp" },
  { src: "/public/images/hombre/saco2.webp" },
];

const products = productosHombres;

</script>

<style></style>
