<script setup>
import { ref, watch, onMounted } from 'vue';
import UiSearchSelect from './components/Ui/SearchSelect.vue';
import Card from './components/Card.vue';
import CardPreview from './components/CardPreview.vue';
import { getFilePath, compare } from './helper.js';

const list = ref([]);
const filteredList = ref([]);
const search = ref('');
const preview = ref(null);

watch(list, (newList) => {
  filteredList.value = newList;
});

let timeout;
watch(search, (value) => {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    let items = list.value;

    if (value !== '') {
      items = items.filter((el) => el.tags.some((v) => compare(v, value)));
    }

    filteredList.value = items;
  }, 300);
});

function handleSelect(item) {
  preview.value = item;
}
function handleClose() {
  preview.value = null;
}

onMounted(() => {
  const url = getFilePath('data.json');
  fetch(url).then((res) => res.json()).then((data) => {
    list.value = data;
  });
});
</script>

<template>
  <div>
    <div class="c-app__header">
      <UiSearchSelect label="Map name" v-model="search" />
    </div>

    <div class="c-app__body">
      <template v-for="(item, index) in filteredList" :key="index">
        <Card v-bind="item" @click="handleSelect(item)" />
      </template>
    </div>

    <CardPreview v-if="preview" v-bind="preview" @close="handleClose" />
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
  grid-template-columns: repeat(auto-fit, minmax(min-content, calc(50% - 5px)));
  gap: 10px;
  justify-content: center;
}

@media (min-width: 1026px) {
  .c-app__body {
    grid-template-columns: repeat(auto-fit, minmax(min-content, 500px));
  }
}
</style>
