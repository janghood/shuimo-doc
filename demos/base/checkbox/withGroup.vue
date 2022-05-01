<template>
  <div>已选中：{{ data.join('，') }}</div>
  <w-checkbox-group v-model="data">
    <w-checkbox label="极客江湖" value="极客江湖"/>
    <w-checkbox label="丹青组件" value="丹青组件"/>
  </w-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from "vue";

const data = ref(['极客江湖', '丹青组件']);
</script>
