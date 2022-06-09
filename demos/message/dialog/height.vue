<template>
  <m-button @click="showDialog">点击显示弹窗</m-button>
  <m-dialog @close="closeDialog" :visible="visible">
    <div class="height">嗨嗨嗨！大侠别来无恙！</div>
  </m-dialog>
</template>

<script setup lang="ts">

import { useDialog } from "shuimo-ui";

const { visible, closeDialog, showDialog } = useDialog();

</script>

<style scoped>
.height {
  height: 600px;
}
</style>
