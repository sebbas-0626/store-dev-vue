<template>
    <div class="w-full sm:w-80 m-3 border border-gray-200 rounded-md relative">
        <a href="" class="block">
            <img class="w-full" :src="product.image" alt="Camiseta Python" />
            <div class="bg-black w-16 sm:w-16 m-2 sm:m-2 flex justify-center rounded-sm absolute top-0 left-0">
                <span class="text-white text-xs">NOVEDAD</span>
            </div>
        </a>

        <div>
            <div class="bg-black text-white grid grid-cols-5 h-12 text-center py-3" :class="{
                'animate-fade-in': isVisible,
                'animate-fade-out': !isVisible,
            }" :style="{
                opacity: isVisible ? 1 : 0,
                visibility: isVisible ? 'visible' : 'hidden',
            }">
                <a href="">S</a>
                <a href="">M</a>
                <a href="">L</a>
                <a href="">XL</a>
                <a href="">XXL</a>
            </div>
        </div>
        <div>
            <!-- <div class="bg-black text-white  h-12 text-center py-3" :class="{
                'animate-fade-in': isVisible,
                'animate-fade-out': !isVisible,
            }" :style="{
                opacity: isVisible ? 1 : 0,
                visibility: isVisible ? 'visible' : 'hidden',
            }">
                <p>AÑADIR A MI CESTA</p>
            </div> -->
        </div>
        <div class="">
            <div class="mx-5 ">
                <a href="">{{ product.title }}</a>
            </div>
            <div class="font-bold mx-5">
                <span class="">{{ product.price }}<span></span></span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
interface Product {
    image: string;
    title: string;
    price: string;
    slug?: string;
    type?: string;
}

const isVisible = ref(false);

onMounted(() => {
    setInterval(() => {
        isVisible.value = true;
        setTimeout(() => {
            isVisible.value = false;

        }, 100000);
    }, 1000);
});

const props = defineProps({
    product: {
        type: Object as () => Product,
        default: () => ({
            image: '',
            title: '',
            price: ''
        })
    },
});

</script>