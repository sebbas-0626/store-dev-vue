<template>
  <div>
    <AvatarGallery :avatars="avatars" />
    <section>
      <section class="grid grid-cols-2 sm:grid-cols-4 gap-4 mx-7 my-7">
        <router-link
          v-for="productItem in products"
          :key="productItem.slug"
          :to="`/producto/${productItem.slug}`"
        >
          <Card :product="productItem" />
        </router-link>
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
import Card from "@/components/product/Card.vue";
import AvatarGallery from '@/components/AvatarGallery.vue';
import productosHombres from '@/data/productosHombres.json';

const avatars = [
  { src: "/images/hombre/saco1.webp" },
  { src: "/images/hombre/saco2.webp" },
];

const products = productosHombres;

</script>

<style></style>
