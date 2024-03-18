<template>
  <div>
<section class="grid grid-cols-2 sm:grid-cols-4 gap-4 mx-7 my-7">
    <div class="w-full sm:w-80 m-3 border border-gray-200 rounded-md relative">
        <a href="" class="block">
            <img
                class="w-full"
                src="https://codevmonkey.com/wp-content/uploads/product/fc395984393ab34ccf27ad06de117861.jpg"
                alt="Camiseta Python"
            />
            <div
                class="bg-black w-16 sm:w-16 m-2 sm:m-2 flex justify-center rounded-sm absolute top-0 left-0"
            >
                <span class="text-white text-xs">NOVEDAD</span>
            </div>
        </a>

        <div class="container">
            <div
                class="bg-black text-white grid grid-cols-5 h-12 text-center py-3"
                :class="{
                    'animate-fade-in': isVisible,
                    'animate-fade-out': !isVisible,
                }"
                :style="{
                    opacity: isVisible ? 1 : 0,
                    visibility: isVisible ? 'visible' : 'hidden',
                }"
            >
                <a href="">S</a>
                <a href="">M</a>
                <a href="">L</a>
                <a href="">XL</a>
                <a href="">XXL</a>
            </div>
        </div>
        <div class="">
            <div class="mx-5 ">
                <a href="">CAMISETA PYTHON</a>
            </div>
            <div class="font-bold mx-5">
                <span class="">35<span>€</span></span>
            </div>
        </div>
    </div>

     <div class="w-full sm:w-80 m-3 border border-gray-200 rounded-md relative">
        <a href="" class="block">
            <img
                class="w-full"
                src="https://codevmonkey.com/wp-content/uploads/product/fc395984393ab34ccf27ad06de117861.jpg"
                alt="Camiseta Python"
            />
            <div
                class="bg-black w-16 sm:w-16 m-2 sm:m-2 flex justify-center rounded-sm absolute top-0 left-0"
            >
                <span class="text-white text-xs">NOVEDAD</span>
            </div>
        </a>

        <div class="container">
            <div
                class="bg-black text-white grid grid-cols-5 h-12 text-center py-3"
                :class="{
                    'animate-fade-in': isVisible,
                    'animate-fade-out': !isVisible,
                }"
                :style="{
                    opacity: isVisible ? 1 : 0,
                    visibility: isVisible ? 'visible' : 'hidden',
                }"
            >
                <a href="">S</a>
                <a href="">M</a>
                <a href="">L</a>
                <a href="">XL</a>
                <a href="">XXL</a>
            </div>
        </div>
        <div class="">
            <div class="mx-5 ">
                <a href="">CAMISETA PYTHON</a>
            </div>
            <div class="font-bold mx-5">
                <span class="">35<span>€</span></span>
            </div>
        </div>
    </div>
     <div class="w-full sm:w-80 m-3 border border-gray-300 rounded-md relative">
        <a href="" class="block">
            <img
                class="w-full"
                src="https://codevmonkey.com/wp-content/uploads/product/fc395984393ab34ccf27ad06de117861.jpg"
                alt="Camiseta Python"
            />
            <div
                class="bg-black w-16 sm:w-16 m-2 sm:m-2 flex justify-center rounded-sm absolute top-0 left-0"
            >
                <span class="text-white text-xs">NOVEDAD</span>
            </div>
        </a>

        <div class="container">
            <div
                class="bg-black text-white grid grid-cols-5 h-12 text-center py-3"
                :class="{
                    'animate-fade-in': isVisible,
                    'animate-fade-out': !isVisible,
                }"
                :style="{
                    opacity: isVisible ? 1 : 0,
                    visibility: isVisible ? 'visible' : 'hidden',
                }"
            >
                <a href="">S</a>
                <a href="">M</a>
                <a href="">L</a>
                <a href="">XL</a>
                <a href="">XXL</a>
            </div>
        </div>
        <div class="">
            <div class="mx-5 ">
                <a href="">CAMISETA PYTHON</a>
            </div>
            <div class="font-bold mx-5">
                <span class="">35<span>€</span></span>
            </div>
        </div>
    </div>
     <div class="w-full sm:w-80 m-3 border border-gray-300 rounded-md relative">
        <a href="" class="block">
            <img
                class="w-full"
                src="https://codevmonkey.com/wp-content/uploads/product/fc395984393ab34ccf27ad06de117861.jpg"
                alt="Camiseta Python"
            />
            <div
                class="bg-black w-16 sm:w-16 m-2 sm:m-2 flex justify-center rounded-sm absolute top-0 left-0"
            >
                <span class="text-white text-xs">NOVEDAD</span>
            </div>
        </a>

        <div class="container">
            <div
                class="bg-black text-white grid grid-cols-5 h-12 text-center py-3"
                :class="{
                    'animate-fade-in': isVisible,
                    'animate-fade-out': !isVisible,
                }"
                :style="{
                    opacity: isVisible ? 1 : 0,
                    visibility: isVisible ? 'visible' : 'hidden',
                }"
            >
                <a href="">S</a>
                <a href="">M</a>
                <a href="">L</a>
                <a href="">XL</a>
                <a href="">XXL</a>
            </div>
        </div>
        <div class="">
            <div class="mx-5 ">
                <a href="">CAMISETA PYTHON</a>
            </div>
            <div class="font-bold mx-5">
                <span class="">35<span>€</span></span>
            </div>
        </div>
    </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const isVisible = ref(false);

onMounted(() => {
  setInterval(() => {
    isVisible.value = true;
    setTimeout(() => {
      isVisible.value = false;

    }, 3000);
  }, 6000);
});
</script>

<style scoped>
.container {
  transition: opacity 0.3s, visibility 0.3s;
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-in;
}

.animate-fade-out {
  animation: fade-out 0.3s ease-out;
}
</style>
