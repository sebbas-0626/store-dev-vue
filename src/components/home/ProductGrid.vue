<template>
  <!-- Contenedor principal -->
  <section
    class="bg-background-light dark:bg-background-dark bg-gray-100 py-24"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Tarjeta: se repite por cada producto -->
        <article
          v-for="(p, i) in products"
          :key="i"
          class="group relative rounded-2xl overflow-hidden h-64 bg-slate-900"
        >
          <!-- Imagen de fondo -->
          <img
            :src="p.img"
            :alt="p.alt"
            class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
          />

          <!-- Overlay con gradiente y contenido -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-8"
          >
            <h3 class="text-2xl font-bold text-white">{{ p.title }}</h3>
            <p class="text-slate-300 text-sm mb-4">{{ p.description }}</p>

            <a
              href="#"
              class="text-white font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
            >
              Shop Now
              <span class="material-icons text-sm">arrow_forward</span>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";

/**
 * Cada objeto representa una “tarjeta” del grid.
 * Puedes añadir o remover elementos de este arreglo sin tocar el template.
 */
const products = reactive([
  {
    title: "Hoodies",
    description: "Warmth for late night deploys",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnW4g3xBKjsCaz-VJYT6lYjiDmXedtmOWRjnUjerDchQ3oYE8seKeKui2zXeiu6iMl0J7civgasczfdnYjFlRcuONGKbQp09ifBRHujbhE6tptUCY9bRWWUuKDtgVIANloQdkG72iA2yAso78rFu74m4rTp8AIDcG8pVu85ukoLtHX-AH6REJrp6_hCrCScfQ1-R8TEXh8s4PkLVwSBq0OthVfNIhGu6THI7UvZXF6LrPlRyCoZRjWvrRbr6aQuAGHrSB3H3duUlmP",
    alt: "High quality fabric hoodie preview",
  },
  {
    title: "Sweatshirts",
    description: "Clean aesthetics for the office",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEJfsMt9Ss5Lio9jcSLG4rneM1zzZ7vUwG57bCxSuC0FW_ud-3NzemJd7iWipsbD9I88ZO-4Aq3367fOyEv_1kt_pm92pUMAWalT8eH63LUMJOEvTqEx1zUOieDDuvsLMIFeJF8gTE-ItIBaViehIOM1_P5MWk4_ePpeboIinIrJMPctrRg8oC1VI05_0PWwAU2P5VqXmKYK5TeA_BCzwdncKCzhopEkL4LQMCno8SxDZbRgsDvBRtEQZ9roPrkhxYXhbyhK4vvl5A",
    alt: "Cotton sweatshirt with minimalist design",
  },
  {
    title: "Mugs",
    description: "Fueling your productivity",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2zP7tvsgNiV6NECrfi_qy7ddsj3yUEiuGPKWc4QoakWmzpHXvjJHRnJDUiJW8kitHuPLWyPx6YKV9rppH48WXUvq8Ebp2QPlLYWE8B_q-AqccLBe1s7NyIbWLagsGfjNxu1khzLVaEsPc7raOLEpICtgXqQ1evpx5gfdpHcD2lKBPfZrF7QAAtZ-v0PP81tE4if0C4_gLpSPuyB2XxgccL-ZI-8B2bIf3EQ46sw4agZhSZsigKkHSBcPzVvDWr8sQi9Nnj3cHYoPt",
    alt: "Ceramic coffee mug with code snippets",
  },
]);
</script>
