<template>
  <div>
    <AvatarGallery :avatars="avatars" />
    <section class="grid grid-cols-2 sm:grid-cols-4 gap-4 mx-7 my-7">
      <router-link
        v-for="(productItem, index) in products"
        :key="index"
        :to="'/producto/' + productItem.slug"
      >
        <Card :product="productItem" />
      </router-link>
    </section>
  </div>
</template>

<script setup lang="ts">
import AvatarGallery from '@/components/AvatarGallery.vue';
import Card from "@/components/product/Card.vue";
import productostazas from '@/data/productosTazas.json';

const avatars = [
  { src: "/images/accesorios/tazas/mug.jpg" },
  { src: "/images/accesorios/tazas/mug.jpg" },
];

const products = productostazas.filter(product => product.type === 'mug');
</script>

<style></style>