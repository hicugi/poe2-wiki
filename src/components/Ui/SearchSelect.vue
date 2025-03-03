<script setup>
import { defineProps, defineModel, computed } from 'vue';

const { label, options } = defineProps({ label: String, options: Array });
const model = defineModel();
</script>

<template>
  <div class="ui-select">
    <label v-if="label">{{ label }}</label>

    <input type="text" v-model="model" />
    <span></span>

    <ul>
      <template v-for="(item, idx) of options" :key="idx">
        <li><button>{{ item }}</button></li>
      </template>
    </ul>
  </div>
</template>

<style>
.ui-select {
  --border-color: #4d4533;
  position: relative;
  color: #b1a67f;
}
.ui-select label {
  padding-bottom: 10px;
  display: block;
  font-size: 24px;
}
.ui-select input {
  padding: 0 20px;
  border: 1px solid var(--border-color);
  width: 100%;
  background: #0a0a09;
  color: inherit;
  line-height: 44px;
  box-sizing: border-box;
}

.ui-select ul {
  position: absolute;
  top: 100%;
  margin: 0;
  padding: 0;
  border: 1px solid var(--border-color);
  border-top: none;
  width: 100%;
  list-style: none;
  box-sizing: border-box;
}

.ui-select ul button {
  padding: 0 20px;
  border: none;
  width: 100%;
  background: #0a0909d9;
  color: inherit;
  text-align: left;
  line-height: 40px;
  box-sizing: border-box;
}
</style>
