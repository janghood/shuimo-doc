<template>
  <div>数字为:{{ number }}</div>
  <w-input-number v-model="number" :max="10" :min="-10"/>
</template>

<script setup lang="ts">
import { ref } from "vue";

const number = ref(0);
</script>
