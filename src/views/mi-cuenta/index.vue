<template>
     <div class="flex border-solid border-slate-600 mx-6 p-4 space-x-4">
    <!-- Columna izquierda con botones -->
    <div class="text-white  p-4 ">
      <!-- <ul class="space-y-2">
                <button class="Btn">
                    Escritorio
                </button> <button class="Btn">
                    Pedidos
                </button> <button class="Btn">
                    Descargas
                </button> <button class="Btn">
                    Direcciones
                </button> <button class="Btn">
                    Detalles de la cuenta
                </button> <button class="Btn">
                    Salir
                </button>
            </ul> -->
            
        </div>
        <div class="text-white bg-black">
            vistas
        </div>
    </div>
</template>
<script setup lang="ts">
</script>

<style>
.Btn {
  width: 300px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(15, 15, 15);
  border: none;
  color: white;
  font-weight: 600;
  gap: 8px;
  cursor: pointer;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.103);
  position: relative;
  overflow: hidden;
  transition-duration: .3s;
}

.svgIcon {
  width: 16px;
}

.svgIcon path {
  fill: white;
}

.Btn::before {
  width: 130px;
  height: 130px;
  position: absolute;
  content: "";
  background-color: white;
  border-radius: 50%;
  left: -100%;
  top: 0;
  transition-duration: .3s;
  mix-blend-mode: difference;
}

.Btn:hover::before {
  transition-duration: .3s;
  transform: translate(100%,-50%);
  border-radius: 0;
}

.Btn:active {
  transform: translate(5px,5px);
  transition-duration: .3s;
}</style>
