<script setup lang="ts">
import { RouterView } from 'vue-router'
import Layout from './components/layout/Layout.vue'
</script>

<template>
  <Layout>
    <RouterView />
  </Layout>
</template>

<style>
/* Estilos globales */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
