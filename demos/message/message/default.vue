<template>
  <w-button @click="callMessage">点击显示Message</w-button>
</template>

<script setup lang="ts">

import { WMessage } from "@higuaifan/wash-painting-ui";


const callMessage = () => {
  WMessage.success('success的message');
  WMessage.warning('warning的message');
  WMessage.info('info的message');
  WMessage({ content: 'normal' })
}


</script>

<style lang="scss" scoped>

</style>
