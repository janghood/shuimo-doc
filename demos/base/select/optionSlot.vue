<template>
  <div>属相为：{{ value }}</div>
  <m-select v-model="value"
            input-param="element"
            option-param="element"
            value-param="before"
            :to-match="toMatch"
            :options="options">
    <template #option="{option}">
      <span>先天：{{ option.before }}，后天：{{ option.after }}</span>
    </template>
  </m-select>
</template>

<script setup lang="ts">
import { ref } from "vue";

const options = [
  { before: '乾', after: '坎', element: '金' },
  { before: '兑', after: '坤', element: '金' },
  { before: '离', after: '震', element: '木' },
  { before: '震', after: '巽', element: '木' }
]
const value = ref(undefined);
type OptionType = { before: string, after: string, element: string };
const toMatch = (option: string, value: string) => {
  return option === value;
}

</script>
