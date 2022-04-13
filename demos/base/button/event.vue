<template>
  <w-button @click="buttonClick">点击事件</w-button>
</template>

<script setup lang="ts">
import { WMessage } from '@higuaifan/wash-painting-ui';

const buttonClick = () => {
  WMessage.success('点击事件触发');
}
</script>
