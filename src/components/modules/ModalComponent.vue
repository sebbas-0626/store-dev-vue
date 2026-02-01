<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white p-6 rounded-lg w-96">
      <h2 class="text-xl font-semibold mb-4">
        {{ title }}
      </h2>
      <div>
        <div class="bg-gray-200 h-32 justify-center grid grid-cols-2">
          <div class="">
            <img
              class="img-fluid w-20"
              src="https://codevmonkey.com/wp-content/uploads/product/178d7500924850037d94136b92ae3909.jpg"
              alt="Camiseta Developer for Rent"
            />
          </div>
          <div class="">Camiseta Developer for Rent</div>
          <!-- <input type="number" class="">   -->
          <div class="">S</div>
          <!-- <a href="" class="ml-auto trash" data-key="f47ce25567f50d34c9141093400bd5d4"><i class="bi bi-trash"></i></a> -->
          <span
            ><bdi>39&nbsp;<span>€</span></bdi></span
          >
        </div>
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

// Declarar el evento que el componente emitirá
defineEmits(["close"]);

// Definir una propiedad de título para el modal
const title = ref("Tu Carrito de Compras");

// Si en el futuro se usarán productos, se puede mantener la referencia;
// por ahora, eliminar la variable no utilizada evita el warning.
// const products = ref([]);
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
