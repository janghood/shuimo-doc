<template>
  <div>当前页：{{ current }}</div>
  <w-pagination :total="11" v-model:current="current"></w-pagination>
</template>

<script setup lang="ts">
import { ref } from "vue";

const current = ref(1);
</script>
