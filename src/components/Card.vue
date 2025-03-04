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
    <ul class="c-card__tags">
      <template v-for="(item, index) in props.tags" :key="index">
        <li>{{ item }}</li>
      </template>
    </ul>
  </div>
</template>

<style>
.c-card {
  position: relative;
  cursor: pointer;
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

.c-card__tags {
  position: absolute;
  left: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 2px;
  font-size: 11px;
  list-style: none;
}
.c-card__tags li {
  padding: 4px 6px;
  background-color: rgba(0,0,0,0.6);
  color: rgba(255,255,255,0.8);
}

.c-card:hover .c-card__title {
  opacity: 1;
}
</style>
