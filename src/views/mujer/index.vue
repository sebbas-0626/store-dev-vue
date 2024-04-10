<template>
  <div>
    <AvatarGallery :avatars="avatars"/>
    <section class="grid grid-cols-2 sm:grid-cols-4 gap-4 mx-7 my-7">
        <router-link :to="'/producto/'+productItem.slug" v-for="(productItem, index) in products" :key="index">
          <Card :product="productItem" />
        </router-link>
      </section>
  </div>
</template>

<script setup lang="ts">
import AvatarGallery from '@/components/AvatarGallery.vue';
import Card from "@/components/product/Card.vue";
import productosMujeres from '@/data/productosMujer.json';

const avatars = [
  { src: "/images/hombre/saco1.webp" },
  { src: "/images/hombre/saco2.webp" },
];

const products = productosMujeres;
</script>

<style>
</style>