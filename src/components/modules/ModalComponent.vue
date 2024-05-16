<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded-lg w-96">
        <h2 class="text-xl font-semibold mb-4">{{ title }}</h2>
        <div>
          <!-- Aquí puedes agregar contenido adicional del modal, como los productos en el carrito -->
          <ul>
            <!-- <li v-for="(product, index) in products" :key="index">{{ product.name }} - {{ product.price }}</li> -->
          </ul>
        </div>
        <button @click="$emit('close')">Cerrar</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  
  // Definir una propiedad de título para el modal
  const title = ref("Tu Carrito de Compras");
  
  // Propiedad de los productos en el carrito
  const products = ref([]);
  </script>
  
  <style scoped>
  /* Estilos para el modal */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 400px;
  }
  </style>
  