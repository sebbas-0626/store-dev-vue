<!-- <template>
  <footer>
    <div class="bg-white sm:grid grid-cols-4 gap-4 text-black py-8 border-t-2 border-gray-300">

      <div class="w-full sm:w-1/2 md:w-auto px-4 mb-4 md:mb-0">
        <h1>AYUDA</h1>
        <ul class="text-gray-600 text-sm">
          <li><a href="">Cómo comprar online</a></li>
          <li><a href="">Pago</a></li>
          <li><a href="">Envío</a></li>
          <li><a href="">Cambios y devoluciones</a></li>
          <li><a href="">Guía de tallas</a></li>
        </ul>
      </div>
      <div class="w-full sm:w-1/2 md:w-auto px-4 mb-4 md:mb-0">
        <h1>ATENCIÓN AL CLIENTE</h1>
        <ul class="text-gray-600 text-sm">
          <li><a href="">¿Cómo podemos ayudarte?</a>
          </li>
          <li><a href="">Contacto</a></li>
          <li><a href="">Estado de tu pedido</a></li>
        </ul>
      </div>
      <div class="w-full sm:w-1/2 md:w-auto px-4 mb-4 md:mb-0">
        <h1>EMPRESA Y POLÍTICAS</h1>
        <ul class="text-gray-600 text-sm">
          <li><a href="">Sostenibilidad</a></li>
          <li><a href="">Condiciones de compra</a>
          </li>
          <li><a href="">Política de privacidad</a>
          </li>
          <li><a href="">Política de cookies</a></li>
          <li><a href="" class="open-config-cookies">Configuración de cookies</a></li>

        </ul>
      </div>
      <div class="w-full sm:w-1/2 md:w-auto px-4 mb-4 md:mb-0">
        <h1>SUSCRÍBETE A NUESTRA EMPRESA</h1>
        <div class="form grid grid-cols-1 gap-1">
          <input id="submitSuscribe" type="submit" value="SUSCRIBIRME"
            class="bg-black text-white py-3  w-28 rounded-md text-sm ">
          <label class="text-sm text-gray-600"><input type="checkbox" id="suscribe_terms" value="1"> He podido leer y
            entiendo la
            información sobre el uso de mis datos personales explicada en la <a target="_blank" href="">política de
              privacidad</a> y
            acepto recibir comunicaciones comerciales personalizadas a través del email y otros
            medios.</label>
        </div>

      </div>
    </div>
    <div class="text-center sm:grid grid-cols-2 bg-black text-white px-2 py-6 text-sm">
      <div class="sm:text-start">
        <h1>© 2024®. Todos los derechos reservados.</h1>
      </div>
      <div class="sm:text-end">
        <h1>Los precios mostrados en esta web incluyen IVA.</h1>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style></style> -->

<template>
  <footer class="bg-muted/30 border-t mt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Logo y descripción -->
        <div class="space-y-4">
          <h3
            class="flex items-center text-2xl font-bold bg-gradient-to-r from-black to-pink-950 bg-clip-text text-transparent">
            <img src="/public/images/logoStore.png" class="w-16 mx-1" alt="">
            <span class="ml-2">DEV</span>
          </h3>
          <p class="text-muted-foreground text-sm">
            {{ t.footerDescription }}
          </p>
          <div class="flex space-x-4">
            <Facebook class="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            <Instagram class="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            <Twitter class="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
          </div>
        </div>

        <!-- Enlaces rápidos -->
        <div class="space-y-4">
          <h4 class="font-semibold">{{ t.quickLinks }}</h4>
          <div class="space-y-2">
            <RouterLink to="/" class="block text-muted-foreground hover:text-primary transition-colors text-sm">
              {{ t.home }}
            </RouterLink>
            <RouterLink to="/men" class="block text-muted-foreground hover:text-primary transition-colors text-sm">
              {{ t.men }}
            </RouterLink>
            <RouterLink to="/women" class="block text-muted-foreground hover:text-primary transition-colors text-sm">
              {{ t.women }}
            </RouterLink>
            <RouterLink to="/accessories"
              class="block text-muted-foreground hover:text-primary transition-colors text-sm">
              {{ t.accessories }}
            </RouterLink>
          </div>
        </div>

        <!-- Atención al cliente -->
        <div class="space-y-4">
          <h4 class="font-semibold">{{ t.customerService }}</h4>
          <div class="space-y-2">
            <p class="text-muted-foreground text-sm">{{ t.aboutUs }}</p>
            <p class="text-muted-foreground text-sm">{{ t.shippingInfo }}</p>
            <p class="text-muted-foreground text-sm">{{ t.returnPolicy }}</p>
            <p class="text-muted-foreground text-sm">{{ t.faq }}</p>
          </div>
        </div>

        <!-- Contacto -->
        <div class="space-y-4">
          <h4 class="font-semibold">{{ t.contact }}</h4>
          <div class="space-y-2">
            <div class="flex items-center space-x-2 text-sm text-muted-foreground">
              <Mail class="h-4 w-4" />
              <span>info@styleshop.com</span>
            </div>
            <div class="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone class="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div class="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin class="h-4 w-4" />
              <span>123 Fashion St, NYC</span>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t mt-8 pt-8 text-center">
        <p class="text-muted-foreground text-sm">
          © 2024 StyleShop. {{ t.allRightsReserved }}

        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-vue-next'
import { translations } from '@/utils/translations'

// Suponiendo que `useTheme` retorna un reactive `language`
const { language } = useTheme()
const t = computed(() => translations[language.value])
</script>
