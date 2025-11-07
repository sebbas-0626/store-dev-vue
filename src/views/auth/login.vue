<template>
    <div>
        <div class="">
            <section class="rounded-md p-2 bg-white">
                <div class="flex items-center justify-center my-3">
                    <div class="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <div class="mb-2"></div>
                        <h2 class="text-2xl font-bold leading-tight text-center">
                            Bienvenido
                        </h2>
                        <p class="mt-2 text-base text-gray-600">
                            No tienes una cuenta?
                            <router-link to="/registro">
                                <a class="font-bold">Registrate</a>
                            </router-link>
                        </p>
                        <form @submit.prevent="onSubmit" class="mt-5">
                            <div class="space-y-4">
                                <div>
                                    <label class="text-base font-medium text-gray-900">
                                        Correo Electronico *
                                    </label>
                                    <div class="mt-2">
                                        <input v-model="dataForm.email" placeholder="Correo" type="email"
                                            class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            name="email" />
                                    </div>
                                </div>
                                <div>
                                    <div class="flex items-center justify-between">
                                        <label class="text-base font-medium text-gray-900">
                                            Contraseña *
                                        </label>
                                    </div>
                                    <div class="mt-2">
                                        <input v-model="dataForm.password" placeholder="Contraseña" type="password"
                                            class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            name="Contraseña" />
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" :disabled="loading"
                                        class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80">
                                        <span v-if="loading">Cargando...</span>
                                        <span v-else>Iniciar Sesión</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import auth from "@/services/auth";
import Swal from "sweetalert2";
import { useRouter } from 'vue-router';

const loading = ref(false);
const router = useRouter();

const initialData = {
    email: '',
    password: '',
};
const dataForm = ref({ ...initialData });

const onSubmit = () => {
    loading.value = true;
    auth.login(dataForm.value).then((response) => {
        dataForm.value = { ...initialData };

        Swal.fire({
            icon: "success",
            title: "Correcto",
            text: response.message,
        });
        // Redirigir a la vista "Mi Cuenta" después del inicio de sesión exitoso
        router.push({ name: 'mi-cuenta' });
    }).catch((error) => {
        const data = error?.response?.data;
        Swal.fire({
            icon: "error",
            title: "Opss..",
            text: data?.message ?? 'Ocurrio un error inesperado',
        });
    }).finally(() => {
        loading.value = false;
    });
}
</script>
