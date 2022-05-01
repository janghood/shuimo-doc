<template>
  <w-form submit>
    <w-form-item label="按钮">
      <w-button @click="clickBtn">点击触发action</w-button>
    </w-form-item>
  </w-form>
</template>

<script setup lang="ts">
import { WPrinter } from "@higuaifan/wash-painting-ui/lib";

const clickBtn = () => {
  WPrinter('水墨表单组件').info('点击按钮');
}

</script>
