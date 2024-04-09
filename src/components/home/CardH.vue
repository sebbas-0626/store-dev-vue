<template>
    <div>
      <div class="w-11/12 mt-3 bg-black">
        <a :href="link" class="gridwide" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
          <div class="image-container">
            <h1 class="text-4xl my-4">{{ title }}</h1>
          </div>
          <img :src="imageUrl" class="w-full h-auto" alt="Image">
        </a>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  interface EsatCardProps {
    imageUrl: string;
    title: string;
    link: string;
  }
  
  const props: EsatCardProps = defineProps({
    imageUrl: { type: String, required: true },
    title: { type: String, required: true },
    link: { type: String, required: true }
  });
  </script>
  
  <style>
  .gridwide {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  
  .image-container {
    text-align: center;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>
  