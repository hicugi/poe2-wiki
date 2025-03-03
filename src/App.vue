<script setup>
import { ref } from 'vue';
import UiSearchSelect from './components/Ui/SearchSelect.vue';

const search = ref('');
</script>

<template>
  <div>
    <div class="c-app__header">
      <UiSearchSelect label="Map name" />
    </div>
  </div>
</template>

<style>
.c-app__header {
  margin: 0 auto;
  padding: 20px 0;
  max-width: 700px;
}
</style>
