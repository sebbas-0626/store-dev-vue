<template>
    <!-- Modal Menú Mobile -->
    <Teleport to="body">
        <Transition name="modal">
            <div v-if="isOpen" class="fixed inset-0 z-50 sm:hidden" @click="toggleMenu">
                <div class="fixed inset-0 bg-black/50 backdrop-blur-sm"></div>
                <div class="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white shadow-xl" @click.stop>
                    <div class="flex flex-col h-full">
                        <!-- Header del Modal -->
                        <div class="flex items-center justify-between p-4 border-b">
                            <div class="flex items-center">
                                <img src="/public/images/logoStore.png" class="w-12" alt="">
                                <h2 class="font-bold text-2xl ml-2">DEV</h2>
                            </div>
                            <MenuButton :is-open="isOpen" @toggle="toggleMenu" />
                        </div>

                        <!-- Opciones del Menú -->
                        <nav class="flex-1 overflow-y-auto p-4">
                            <div class="space-y-2">
                                <router-link to="/mujer" @click="toggleMenu"
                                    class="block text-gray-950 hover:bg-gray-100 px-4 py-3 rounded-lg text-lg font-medium transition-colors">
                                    MUJER
                                </router-link>
                                <router-link to="/hombre" @click="toggleMenu"
                                    class="block text-gray-950 hover:bg-gray-100 px-4 py-3 rounded-lg text-lg font-medium transition-colors">
                                    HOMBRE
                                </router-link>
                                <router-link to="/accesorios" @click="toggleMenu"
                                    class="block text-gray-950 hover:bg-gray-100 px-4 py-3 rounded-lg text-lg font-medium transition-colors">
                                    ACCESORIOS
                                </router-link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
import MenuButton from "../MenuButton.vue";

defineProps<{
    isOpen: boolean;
}>();

const emit = defineEmits<{
    toggle: [];
}>();

const toggleMenu = () => {
    emit('toggle');
};
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .fixed.inset-y-0 {
  transition: transform 0.3s ease;
}

.modal-enter-from .fixed.inset-y-0 {
  transform: translateX(-100%);
}

.modal-leave-to .fixed.inset-y-0 {
  transform: translateX(-100%);
}
</style>