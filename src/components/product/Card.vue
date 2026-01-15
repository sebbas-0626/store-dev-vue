<template>
    <div
        class="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <!-- Imagen del producto -->
        <router-link :to="`/producto/${product.slug || ''}`" class="block relative aspect-[3/4] bg-gray-100">
            <img class="w-full h-full object-cover object-center" :src="product.image" :alt="product.title" />

            <!-- Selector de tallas aparece al hover (para ropa) -->
            <div v-if="product.sizes && product.sizes.length > 0"
                class="absolute bottom-0 left-0 right-0 bg-black/90 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="flex justify-center items-center gap-4 py-3 text-sm font-medium">
                    <button v-for="size in product.sizes" :key="size.name" class="hover:underline transition-all">
                        {{ size.name }}
                    </button>
                </div>
            </div>

            <!-- Botón añadir a la cesta (para accesorios sin tallas) -->
            <div v-else
                class="absolute bottom-0 left-0 right-0 bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                    @click.prevent="addToCart"
                    class="w-full py-3 text-sm font-medium hover:bg-gray-800 transition-colors">
                    AÑADIR A MI CESTA
                </button>
            </div>
        </router-link>

        <!-- Contenido de la tarjeta -->
        <div class="p-4 space-y-3">
            <!-- Selector de color -->
            <div v-if="product.colors && product.colors.length > 0" class="flex gap-2">
                <button v-for="(color, index) in product.colors" :key="index"
                    class="w-5 h-5 rounded-full border-2 border-gray-300 hover:border-gray-500 transition-colors"
                    :class="color.class" :aria-label="`Color ${color.name}`"></button>
            </div>

            <!-- Título del producto -->
            <router-link :to="`/producto/${product.slug || ''}`" class="block">
                <h3 class="text-sm font-medium text-gray-900 uppercase hover:text-gray-600 transition-colors">
                    {{ product.title }}
                </h3>
            </router-link>

            <!-- Precio -->
            <div class="flex items-baseline gap-2">
                <span class="text-base font-semibold text-gray-900">
                    {{ product.price }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Product } from "@/types/Product";

const props = defineProps({
    // Definición del producto
    product: {
        type: Object as () => Product,
        default: () => ({
            image: '',
            title: '',
            price: '',
            slug: '',
            type: '',
            sizes: [],
            colors: []
        })
    },
});

// Función para añadir al carrito
const addToCart = () => {
    // Aquí puedes agregar la lógica para añadir al carrito
    console.log('Producto añadido al carrito:', props.product);
    // Emitir evento o llamar a un composable de carrito
};
</script>

<style scoped>
.aspect-\[3\/4\] {
    aspect-ratio: 3 / 4;
}
</style>