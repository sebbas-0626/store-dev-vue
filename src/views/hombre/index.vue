<template>
  <div>
    <AvatarGallery :avatars="avatars" />
    <section>
      <!-- <Cards :products="products"/> -->
      <section class="grid grid-cols-2 sm:grid-cols-4 gap-4 mx-7 my-7">
        <router-link :to="'/producto/'+productItem.slug" v-for="(productItem, index) in products" :key="index">
          <Card :product="productItem" />
        </router-link>
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
// import Cards from "@/components/Card.vue";
import Card from "@/components/product/Card.vue";
import AvatarGallery from '@/components/AvatarGallery.vue';
import productosHombres from '@/data/productosHombres.json';

const avatars = [
  { src: "/public/images/hombre/saco1.webp" },
  { src: "/public/images/hombre/saco2.webp" },
];

const products = productosHombres;

</script>

<style></style>
