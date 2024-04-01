<template>
  <div class="flex justify-center">
    <div v-for="(avatar, index) in avatars" :key="index" class="mx-2">
      <img :src="avatar.src" class="bg-white w-20 h-20 rounded-full border border-gray-300" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Avatar {
  src: string;
}

const props = defineProps<{
  avatars: Avatar[];
}>()

</script>
