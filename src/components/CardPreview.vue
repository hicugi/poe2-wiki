<script setup>
import { ref, defineProps, computed, defineEmits, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({ image: String, images: Array });

const previewImage = ref(props.images[0].src);

const mainStyles = computed(() => ({
  backgroundImage: `url('${previewImage.value}')`,
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
    <button class="c-cardPreview__close" @click="emit('close')">close</button>

    <div class="c-cardPreview-images">
      <div class="c-cardPreview-images__main" :style="mainStyles" />
    </div>
  </div>
</template>

<style>
.c-cardPreview {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.c-cardPreview__close {
  position: fixed;
  padding: 0;
  border: none;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.75);
  color: transparent;
}

.c-cardPreview-images {
  position: relative;
  margin: 0 auto;
  padding: 40px 20px;
  max-width: 1640px;
}
.c-cardPreview-images__main {
  background: no-repeat center;
  background-size: contain;
}
.c-cardPreview-images__main::before {
  padding-top: calc(9% / 16 * 101);
  display: block;
  content: '';
}
</style>

