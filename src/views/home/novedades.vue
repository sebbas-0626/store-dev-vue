<template>
  <div>
    <section>
      <h1 class="text-xl sm:text-4xl font-bold flex justify-center mt-10">
        NOVEDADES
      </h1>
      <section class="grid grid-cols-2  sm:grid-cols-4 gap-4 mx-10 my-10">
        <CardH
          class="col-span-2 "
          image-url="/images/home/homeb.jpg"
          title="Hombre"
          link=""
        />
        <Card
          v-for="(product, index) in productosHombres.slice(0, 6)"
          :key="'hombre-product' + index"
          :product="product"
        />
        <CardH
          class="col-span-2 "
          image-url="/images/home/homeb.jpg"
          title="Mujer"
          link=""
        />

        <Card
          v-for="(product, index) in productosMujer.slice(0, 6)"
          :key="'mujer-product' + index"
          :product="product"
        />
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/product/Card.vue';
import CardH from '@/components/home/CardH.vue';
import productosHombres from '@/data/productosHombres.json';
import productosMujer from '@/data/productosMujer.json';
</script>

<style>
/* Estilos CSS para la vista Home */
</style>
