<template>
  <div>
    <div class="">
      <section class="rounded-md p-2 bg-white">
        <div class="flex items-center justify-center my-3">
          <div
            class="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md"
          >
            <div class="mb-2" />
            <h2 class="text-2xl font-bold leading-tight text-center">
              Registrarte
              
            </h2>
            <p class="mt-2 text-base text-gray-600">
              ¿Ya tienes una cuenta?
              <router-link to="/login" class="font-bold">
                Inicia Sesión
              </router-link>
            </p>
            <form class="mt-5" @submit.prevent="onSubmit">
              <div class="space-y-4">
                <div>
                  <label class="text-base font-medium text-gray-900">
                    Usuario *
                  </label>
                  <div class="mt-2">
                    <input
                      v-model="dataForm.name"
                      required
                      placeholder="Usuario"
                      type="text"
                      class="flex h-10 w-full round ed-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
                <div>
                  <label class="text-base font-medium text-gray-900">
                    Correo Electrónico *
                  </label>
                  <div class="mt-2">
                    <input
                      v-model="dataForm.email"
                      required
                      placeholder="Correo"
                      type="email"
                      class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
                <div>
                  <div class="flex items-center justify-between">
                    <label class="text-base font-medium text-gray-900">
                      Contraseña *
                    </label>
                  </div>
                  <div class="mt-2">
                    <input
                      v-model="dataForm.password"
                      required
                      placeholder="Contraseña"
                      type="password"
                      class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
                <div>
                  <button
                    class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    type="submit"
                  >
                    Registrarse
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
import { useAuthStore } from "@/core/stores";

const initialData = {
  email: "",
  password: "",
  name: "",
};

const dataForm = ref({ ...initialData });
const authStore = useAuthStore();

const onSubmit = async () => {
  try {
    await authStore.register(dataForm.value);
    dataForm.value = { ...initialData };
  } catch (error) {
    // Error is handled by the store
  }
};
</script>
