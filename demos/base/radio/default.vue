<template>
  <div>选择参数: {{value}}</div>
  <w-radio v-model="value" label="janghood">极客江湖</w-radio>
</template>

<script setup lang="ts">
import { ref } from "vue";
const value = ref('');
</script>
