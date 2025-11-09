<template>
    <div class="flex flex-col min-h-screen">
        <!-- Header con sticky -->
        <header class="sticky top-0 z-40 bg-white shadow-sm">
            <Navbar />
        </header>

        <!-- Contenido principal -->
        <main class="flex-1">
            <slot />
        </main>

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Navbar from '../header/Navbar.vue'
import Footer from '../Footer.vue'
</script>

<style scoped>
/* Asegurar que el contenido ocupe toda la altura disponible */
</style>
