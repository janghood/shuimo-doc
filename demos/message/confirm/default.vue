<template>
  <w-button text="点击弹出确认框" @click="showConfirm"/>
</template>

<script setup lang="ts">
import { WConfirm, WPrinter } from "@higuaifan/wash-painting-ui";

const showConfirm = async () => {
  const res = await WConfirm({
    content: '嗨嗨嗨！大侠别来无恙！'
  });
  WPrinter('水墨确认组件').info(res);
}

</script>
