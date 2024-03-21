.
<template>
  <div>
    <div class="flex justify-center">
      <div class="mx-4">
        <img
          src="/public/images/hombre/saco1.webp"
          class="bg-white w-20 h-20 rounded-full border border-gray-300"
        />
      </div>
      <div>
        <img
          src="/public/images/hombre/saco2.webp"
          class="bg-white w-20 h-20 rounded-full border border-gray-300"
        />
      </div>
    </div>

    <section>
      <Cards />
    </section>
  </div>
</template>

<script setup lang="ts">
import Cards from "../../components/cards.vue";
</script>

<style></style>
