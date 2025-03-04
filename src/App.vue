<script setup>
import { ref, computed, onMounted } from 'vue';
import UiSearchSelect from './components/Ui/SearchSelect.vue';
import Card from './components/Card.vue';

const list = ref([]);
const search = ref('');

const filteredList = computed(() => {
  const items = list.value;
  const { value } = search;

  if (value === '') return items;

  return items.filter((el) => el.tags.includes(value));
});

onMounted(() => {
  fetch('data.json').then((res) => res.json()).then((data) => {
    list.value = data;
  });
});
</script>

<template>
  <div>
    <div class="c-app__header">
      <UiSearchSelect label="Map name" />
    </div>

    <div class="c-app__body">
      <template v-for="(item, index) in filteredList" :key="index">
        <Card v-bind="item" />
      </template>
    </div>
  </div>
</template>

<style>
.c-app__header {
  margin: 0 auto 40px;
  padding: 20px 0;
  max-width: 700px;
}
.c-app__body {
  margin: 0 auto;
  padding-bottom: 40px;
  max-width: 1520px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min-content, 500px));
  gap: 10px;
  justify-content: center;
}
</style>
