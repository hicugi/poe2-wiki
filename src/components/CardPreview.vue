<script setup>
import { ref, defineProps, computed, defineEmits, onMounted, onBeforeUnmount } from 'vue';
import { getFilePath } from '../helper.js';

const props = defineProps({ image: String, images: Array });

const previewImage = ref(props.images[0].src);

const mainStyles = computed(() => ({
  backgroundImage: `url('${getFilePath(previewImage.value)}')`,
}));

const emit = defineEmits(['close']);

onMounted(() => {
  document.body.style.overflow = 'hidden';
});
onBeforeUnmount(() => {
  document.body.style.overflow = null;
});
</script>

<template>
  <div class="c-cardPreview">
    <button class="c-cardPreview__bg-close" @click="emit('close')">close</button>

    <div class="c-cardPreview-images">
      <button class="c-cardPreview__close" @click="emit('close')">close</button>

      <div class="c-cardPreview-images__main" :style="mainStyles" />

      <ul class="c-cardPreview-images__list" v-if="props.images.length > 1">
        <template v-for="(item, index) of props.images" :key="index">
          <li :class="{ active: previewImage === item.src }" @click="previewImage = item.src">
            <span>{{ item.title }}</span>
            <img :src="getFilePath(item.src)" />
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<style>
.c-cardPreview {
  --border-color: #4d4533;
  --footer-height: 140px;

  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.c-cardPreview__bg-close {
  position: fixed;
  left: 0;
  top: 0;
  padding: 0;
  border: none;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.9);
  color: transparent;
}

.c-cardPreview-images {
  position: relative;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  max-width: 1640px;
  display: grid;
  align-items: center;
  row-gap: 0;
}

.c-cardPreview__close {
  --size: 52px;
  position: absolute;
  right: 20px;
  top: 0;
  border: 1px solid var(--border-color);
  width: var(--size);
  height: var(--size);
  background: rgba(0,0,0,0.9);
  font-size: 0px;
}
.c-cardPreview__close::before,
.c-cardPreview__close::after {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80%;
  height: 2px;
  background: var(--border-color);
  content: '';
}
.c-cardPreview__close::before {
  transform: translate(-50%,-50%) rotate(-45deg);
}
.c-cardPreview__close::after {
  transform: translate(-50%,-50%) rotate(45deg);
}

.c-cardPreview-images__main {
  margin-bottom: 20px;
  max-height: calc(100vh - var(--footer-height) - 30px);
  border: 1px solid var(--border-color);
  background: #000 no-repeat center;
  background-size: contain;
}
.c-cardPreview-images__main::before {
  padding-top: calc(9% / 16 * 101);
  display: block;
  content: '';
}

.c-cardPreview-images__list {
  margin: 0;
  padding: 0;
  height: var(--footer-height);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  list-style: none;
  overflow-x: auto;
}
.c-cardPreview-images__list li {
  position: relative;
  border: 1px solid var(--border-color);
}
.c-cardPreview-images__list span {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255,255,255,0.9);
  background-color: rgba(0,0,0,0.8);
}
.c-cardPreview-images__list img {
  width: 240px;
  display: block;
}

.c-cardPreview-images__list .active span {
  display: none;
}
</style>

