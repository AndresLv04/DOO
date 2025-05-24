<script setup>
  defineProps({
    imagenUrl: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <article>
    <img :src="imagenUrl"/>
  </article>
</template>

<style scoped>
  article{
    width: 100%;
    max-width: 190px;
    height: 260px;
    border: 4px solid #fff;
    border-radius: 21px;
    overflow: hidden; /*Oculta todo lo que se salga*/
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;

  }
</style>
