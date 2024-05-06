<template>
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

<style></style>
