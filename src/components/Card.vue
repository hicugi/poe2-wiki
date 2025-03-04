<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({ title: String, image: String, images: Array, tags: Array });

const styles = computed(() => ({
  backgroundImage: `url('${props.image}')`,
}));
</script>

<template>
  <div class="c-card">
    <div class="c-card__image" :style="styles" />
    <h3 class="c-card__title">{{ props.title }}</h3>
  </div>
</template>

<style>
.c-card {
  position: relative;
}

.c-card__image {
  background: no-repeat center;
  background-size: auto 100%;
}
.c-card__image::before {
  padding-top: calc(9% / 16 * 101);
  display: block;
  content: '';
}

.c-card__title {
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.6);
  font-size: 28px;
  opacity: 0;
}

.c-card:hover .c-card__title {
  opacity: 1;
}
</style>
