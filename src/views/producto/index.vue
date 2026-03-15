<!-- src/components/ProductDetail.vue -->

<template>
  <!-- --------------------------------- BREADCRUMB --------------------------------- -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <nav
      class="flex items-center gap-2 text-xs font-medium text-slate-500 mb-8 uppercase tracking-widest"
    >
      <a class="hover:text-primary" href="#">Home</a>
      <span class="material-icons text-[10px]">chevron_right</span>
      <a class="hover:text-primary" href="#">Men's Apparel</a>
      <span class="material-icons text-[10px]">chevron_right</span>
      <span class="text-slate-900 dark:text-white">Hoodies</span>
    </nav>

    <!-- ====================== GRID PRODUCT DETAIL ====================== -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <!-- ---------- IMAGEN PRINCIPAL + MINIATURAS ---------- -->
      <div class="lg:col-span-7 space-y-4">
        <div
          class="aspect-square rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-400 border "
        >
          <img
            :src="mainImg"
            alt="Console.log Happiness Hoodie Main View"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="grid grid-cols-4 gap-4">
          <button
            v-for="(src, i) in thumbnails"
            :key="i"
            class="aspect-square rounded-xl overflow-hidden border-2"
            :class="{
              'border-primary': src === mainImg,
              'border-transparent hover:border-slate-300 dark:hover:border-slate-700 transition-colors':
                src !== mainImg,
            }"
            @click="selectImage(src)"
          >
            <img :src="src" class="w-full h-full object-cover" />
          </button>

          <!-- Botón de vídeo (solo icono) -->
          <button
            class="aspect-square rounded-xl overflow-hidden border border-transparent hover:border-slate-300 dark:hover:border-slate-700 transition-colors bg-slate-100 dark:bg-slate-800 flex items-center justify-center"
          >
            <span class="material-icons text-slate-400">videocam</span>
          </button>
        </div>
      </div>

      <!-- ---------- INFO PRODUCTO ---------- -->
      <div class="lg:col-span-5 flex flex-col">
        <div class="mb-2">
          <span
            class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white uppercase tracking-wide"
            >New Arrival</span
          >
        </div>

        <h1
          class="text-3xl font-bold text-slate-900 mb-2 leading-tight"
        >
          Console.log("Happiness") Hoodie
        </h1>

        <!-- Rating -->
        <!-- <div class="flex items-center gap-4 mb-6">
          <div class="flex items-center">
            <span
              v-for="(type, idx) in ratingStars(4.8)"
              :key="'star-' + idx"
              class="material-icons"
              :class="{
                'text-orange-400': type !== 'empty',
                'text-slate-300 dark:text-slate-700': type === 'empty',
              }"
              >{{ type === "half" ? "star_half" : "star" }}</span
            >
          </div>
          <span class="text-sm font-medium text-slate-500"
            >4.8 (124 reviews)</span
          >
        </div> -->

        <div class="text-4xl font-bold text-blue-600 mb-6">$54.99</div>

        <div
          class="prose prose-sm dark:prose-invert text-slate-600 dark:text-slate-400 mb-8"
        >
          <p>
            Output pure joy with our signature
            <code>"Console.log('Happiness')"</code> hoodie. Crafted from
            ultra‑soft heavy fleece, this hoodie features minimalist syntax
            design that speaks the universal language of developers. Perfect for
            late‑night deployments or coffee‑shop coding sessions.
          </p>
        </div>

        <!-- ==================== OPTIONS ==================== -->
        <div class="space-y-6">
          <!-- COLORS -->
          <div>
            <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-3">
              Color:
              <span class="text-slate-500 font-normal">Midnight Black</span>
            </h3>

            <div class="flex gap-3">
              <button
                v-for="(c, i) in colors"
                :key="i"
                :class="[
                  c.bg,
                  c.ring ? `${c.ring}` : '',
                  c.selected
                    ? 'ring-2 ring-primary ring-offset-2'
                    : 'ring-1 ring-slate-200 dark:ring-slate-800',
                ]"
                class="w-10 h-10 rounded-full transition-shadow"
                @click="selectColor(i)"
              ></button>
            </div>
          </div>

          <!-- SIZES -->
          <div>
            <div class="flex justify-between items-center mb-3">
              <h3 class="text-sm font-bold text-slate-900 dark:text-white">
                Select Size
              </h3>
              <button class="text-xs font-bold text-primary hover:underline">
                Size Guide
              </button>
            </div>

            <div class="grid grid-cols-5 gap-2">
              <button
                v-for="(s, i) in sizes"
                :key="i"
                @click="selectSize(i)"
                :class="[
                  s.selected
                    ? 'bg-primary/5 border-2 border-primary text-primary'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800',
                ]"
                class="py-2.5 text-xs font-bold rounded-lg transition-colors hover:border-primary"
              >
                {{ s.label }}
              </button>
            </div>
          </div>

          <!-- CUSTOMIZATION TYPE -->
          <div>
            <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-3">
              Customization Type
            </h3>
            <select
              v-model="selectedCustom"
              class="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium focus:ring-primary focus:border-primary p-2"
            >
              <option
                v-for="opt in customTypes"
                :key="opt.value"
                :value="opt.value"
              >
                {{ opt.label }}
              </option>
            </select>
          </div>
        </div>

        <!-- ==================== ACTION BUTTONS ==================== -->
        <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            @click="addToCart"
            class="flex-1 bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 hover:bg-blue-600/90 transition-all"
          >
            <span class="material-icons"></span> Add to Cart
          </button>

          <!-- <button
            @click="openPersonalizer"
            class="flex-1 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold py-4 rounded-xl border-2 border-slate-200 dark:border-slate-800 hover:border-primary dark:hover:border-primary transition-all flex items-center justify-center gap-2"
          >
            <span class="material-icons">palette</span> Personalize this item
          </button> -->
        </div>

        <!-- ==================== SHIPPING / GUARANTEE ==================== -->
        <div
          class="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 space-y-4"
        >
          <div class="flex items-center gap-3 text-sm">
            <span class="material-icons text-slate-400 text-lg"
              >local_shipping</span
            >
            <span class="text-slate-600 dark:text-slate-400"
              >Free worldwide shipping on orders over $100</span
            >
          </div>
          <div class="flex items-center gap-3 text-sm">
            <span class="material-icons text-slate-400 text-lg"
              >verified_user</span
            >
            <span class="text-slate-600 dark:text-slate-400"
              >100% Satisfaction Guarantee / 30‑day returns</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- ====================== RELATED PRODUCTS ====================== -->
    <section class="mt-24">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
          Related Products
        </h2>
        <a href="#" class="text-sm font-bold text-primary hover:underline"
          >View Collection</a
        >
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <article
          v-for="(p, i) in relatedProducts"
          :key="i"
          class="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col"
        >
          <div
            class="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800"
          >
            <img
              :src="p.img"
              :alt="p.name"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div class="p-4 flex-1 flex flex-col">
            <h3
              class="font-bold text-sm mb-1 group-hover:text-primary transition-colors"
            >
              {{ p.name }}
            </h3>
            <p class="text-primary font-bold mt-auto text-base">
              {{ p.price }}
            </p>
          </div>
        </article>
      </div>
    </section>

    <!-- ====================== CUSTOMER REVIEWS ====================== -->
    <section
      class="mt-24 pt-24 border-t border-slate-200 dark:border-slate-800"
    >
      <div class="flex flex-col md:flex-row gap-12">
        <!-- LEFT: Global rating -->
        <div class="md:w-1/3 space-y-6">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
            Customer Reviews
          </h2>

          <div class="flex items-center gap-4">
            <span class="text-5xl font-bold text-slate-900 dark:text-white">
              4.8
            </span>
            <div>
              <div class="flex items-center">
                <span
                  v-for="n in starRange"
                  :key="n"
                  class="material-icons text-orange-400 text-lg"
                  >star</span
                >
                <span class="material-icons text-orange-400 text-lg"
                  >star_half</span
                >
              </div>
              <p class="text-sm text-slate-500 font-medium">
                Based on 124 reviews
              </p>
            </div>
          </div>

          <!-- Distribution bars -->
          <div class="space-y-3 text-xs">
            <div
              v-for="rating in [5, 4, 3, 2, 1]"
              :key="rating"
              class="flex items-center gap-4"
            >
              <span class="w-4 font-bold">{{ rating }}</span>
              <div
                class="flex-1 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden"
              >
                <div
                  class="h-full bg-orange-400"
                  :style="{
                    width:
                      rating === 5
                        ? '85%'
                        : rating === 4
                          ? '10%'
                          : rating === 3
                            ? '3%'
                            : rating === 2
                              ? '1%'
                              : '1%',
                  }"
                ></div>
              </div>
              <span class="w-8 text-slate-500">
                {{
                  rating === 5
                    ? "85%"
                    : rating === 4
                      ? "10%"
                      : rating === 3
                        ? "3%"
                        : rating === 2
                          ? "1%"
                          : "1%"
                }}
              </span>
            </div>
          </div>

          <button
            class="w-full py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-bold hover:border-primary transition-colors"
          >
            Write a Review
          </button>
        </div>

        <!-- RIGHT: Individual reviews -->
        <div class="md:w-2/3 space-y-10">
          <article
            v-for="(r, i) in reviews"
            :key="i"
            class="border-b border-slate-100 dark:border-slate-800/50 pb-8"
          >
            <div class="flex items-center gap-4 mb-4">
              <div
                class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-primary"
              >
                {{ r.initials }}
              </div>
              <div>
                <h4 class="font-bold text-sm">
                  {{ r.name }}
                  <span class="ml-2 font-normal text-slate-500 text-xs"
                    >— Verified Buyer</span
                  >
                </h4>
                <div class="flex text-orange-400 text-xs">
                  <span
                    v-for="n in ratingStars(r.rating)"
                    :key="n + i"
                    class="material-icons text-xs"
                    >{{ n === "half" ? "star_half" : "star" }}</span
                  >
                </div>
              </div>
            </div>

            <h5 class="font-bold text-sm mb-2">{{ r.title }}</h5>
            <p
              class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              {{ r.comment }}
            </p>
          </article>

          <button class="text-sm font-bold text-primary hover:underline">
            Read more reviews
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";

/* -----------------------  DATA ----------------------- */
// 1️⃣ Imagen principal + miniaturas
const mainImg = ref(
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDqJ2hXXMcXIGb6wWUZ2Wepp5LrfR0O8bujflcuyzFFEOdHOJnIxW2s65Lpg4QQVr4FHuTCgmHBeRfHBnxQaUt8qoeLe69xAP5e-Hw5_FiAX_ojRekTNLB4QCkGSKkNhnrlOdN3WyXo63RN-NlmcYNOJOS3FLtKPORSgR4xkX7wR4rlUUlDcchH0krpDVLcKgW40lexyIo4A8T2WJvC_asKKV7AldbKD5m-FXFmkX2Yr8jcneN2xdqhXAC39LKriKQr0MN5ICny26Ag"
);
// Miniaturas (pueden ser tantas como quieras)
const thumbnails = [
  mainImg.value,
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA6acit2lOMSQjy6cdj2uLK1orVaLQivoMd_ExRCtgc6G9DahCxngoNtiZAbOo8FHbiAyiCEyPJY2FLN9O3DQhcAipqr4EDSGE0yys_yIHIvGAjXXqUgMVUKRG3H5fWn57ROAn3zIT81kxcY8LaNS6WA3VkCCQIfJw3TQQSnRBbicJhSXz2s-pRgD1J0GWKI4Su95VZlWxB7LWyfHA8ppAmawimgNaEflVpwACAQaHEih9X1I_B-_NPomXcZIeyht-GnaM_-MzNGrin",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCdd1WLlZLTh-6CFjcZ2avzfr9Lruv4e6ZqcQi4YM3BoFt2JdqJSflCvFRQg2-H89iT_3LG8Nuf5PNENIp9oOw4ewjzXqVsVwHnCLq6i6b05F1CilLY-UxlIsTjGP_qevg1g7X-zfHJliZmWrn66D6cLzrbbKmaXd7lhek7iSngc2BwoOMIUiZ1y2w5P8nmdjNohXiKZgvvUXekq9fjemFJxkdlNePFXM4ZCHORf5CVRBugMrccKLPgUe8_vJPYpPpV27L1TWnW4Y6G",
];

const selectImage = (src: string) => (mainImg.value = src);

// 2️⃣ Colores disponibles
type Color = { bg: string; ring?: string; selected: boolean };
const colors = reactive<Color[]>([
  { bg: "bg-slate-900", ring: "ring-primary ring-offset-2", selected: true },
  { bg: "bg-slate-500", selected: false },
  { bg: "bg-blue-900", selected: false },
  { bg: "bg-emerald-800", selected: false },
]);

const selectColor = (idx: number) => {
  colors.forEach((c, i) => (c.selected = i === idx));
};

// 3️⃣ Tallas
type Size = { label: string; selected: boolean };
const sizes = reactive<Size[]>([
  { label: "S", selected: false },
  { label: "M", selected: true },
  { label: "L", selected: false },
  { label: "XL", selected: false },
  { label: "2XL", selected: false },
]);
const selectSize = (idx: number) => {
  sizes.forEach((s, i) => (s.selected = i === idx));
};

// 4️⃣ Tipo de customización
const customTypes = [
  { value: "developer", label: "Developer (Syntax highlighting)" },
  { value: "business", label: "Business (Professional minimalist)" },
  { value: "youth", label: "Youth (Bright and bold)" },
];
const selectedCustom = ref(customTypes[0].value);

// 5️⃣ Productos relacionados (solo unos ejemplos)
type Related = { img: string; name: string; price: string };
const relatedProducts: Related[] = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCs6aO-uDu0zM20y8BzbfDi4v38L61VKz3JwDM8Fht-A1uIlsTh57fvoXik1SDlD9-FDbSJhAuIUIvkfVSlyQAZQwO8gh5DpJjZz-_4cVCA4bAsVshoyAIqWwXYHQFjPR6yRgEDD7lK-qvca-9Wi9NazxQmxPX3azPETgGKZFvJrVrvgc27gAFaR2xtVYtlj_v7xH4jMp6VKjgJo759diGAmVrTlnvLRs0btiEYJ5TGjgFYXjSzca6VtSoenv-eGkYiWKZEMHyz1q1",
    name: "Binary Syntax Crewneck",
    price: "$48.00",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6wgvAnf023TV1OKmZwU044W8UE-U9mlqnxbK8j1fnUbJXfA9sHnK0vLh_lIMa4i-YL2ge0Zixh1xqaL9WWFqd5w3566XVPL_GxPNri9UgBqTCmu90BxXxxwsXTIcaDPoUii_yDd2jJvGwa9pxJvy4Nl2gApw2m9NV_p6YdJK597Fh5GYzcnj_YQkb7TgkeRfPCOJmYlW1xAtKe2XrHU4Jwr24Pz9EpubTPNTSr_eqQkLhF8DQuxklRwPpwtQxmTUgYhIudEx07vHd",
    name: "Git Push Force Oversized Tee",
    price: "$32.00",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdJKutHCvnwXP_K792fI7uxVNfNVUxT5WmxPF6HChkJA9WA1Jopnpp_lacioRahAKb7nGJqMN7yluLEcEkLEd9tQtKyGRBk8k4UHPwxz2RmMKbD9Y6OOMjjKkS0knwFhHN_kszDP2RR_8lATUdpTSfJzYX9D6fcz1f8XKNshZYUcbu4_-gM3_KdtpeaA6AHCmYe8xcf2qBO4ee5oT5nzCqxzN8fgo2ukv1ypncMQKzaDuzmdskCE4RuLoSQHhJISB5nV_z3GIF98m-",
    name: 'The "Senior Architect" Zip‑Up',
    price: "$89.00",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAi06PKInmv_oKU4PxvyorEgSrMM5rWuNpvunIPKmndtIiIbcYVELjb_oM9PnKiRcWsuZPCr0eiyNvRYMobm9ALcaPFiPsuSf6KzQPtiAAlYOZbqVumHVOr8LnAxwD0WSEvqh7FPQLamd0nlxN19UV2-GyRv_V16kvCnOupi_NoTrYBcvljTZEFQZsJY95fAhHIxPRDu1pFHyl7KPrX1svVldTyQwLnJKOGOribZFWbpHlLRHoPb_Yx6x7i8px4clJIKvccYKRZJhFp",
    name: "Dark Mode Only Sweatshirt",
    price: "$45.00",
  },
];

// 6️⃣ Reviews (mini‑data para el ejemplo)
type Review = {
  initials: string;
  name: string;
  rating: number; // 0‑5 (puedes usar 4.5, etc.)
  title: string;
  comment: string;
};
const reviews: Review[] = [
  {
    initials: "JD",
    name: "Jason D.",
    rating: 5,
    title: "Better than expected quality!",
    comment:
      "The print quality is sharp and the material is really heavy and warm. Fits perfectly according to the size guide. I've received so many compliments from my coworkers during standups.",
  },
  {
    initials: "SL",
    name: "Sarah L.",
    rating: 5,
    title: "Comfy and Stylish",
    comment:
      'I love the "developer type" customization. It looks very subtle and modern. It\'s my go‑to hoodie for working from home now.',
  },
];

// 7️⃣ Helpers
const starRange = computed(() => Array.from({ length: 5 }, (_, i) => i + 1));

function ratingStars(rating: number) {
  // devuelve un array con "full", "half" o "empty"
  const full = Math.floor(rating);
  const half = rating - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return [
    ...Array(full).fill("full"),
    ...Array(half).fill("half"),
    ...Array(empty).fill("empty"),
  ];
}

// Acción de botones (puedes sustituir con tu lógica de store / API)
function addToCart() {
  alert("✅ ¡Producto añadido al carrito!");
}
function openPersonalizer() {
  alert("🎨 Aquí abrirías el configurador de personalización");
}
</script>
