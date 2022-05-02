<template>
  <w-button @click="showDialog">点击显示弹窗</w-button>
  <w-dialog @close="closeDialog" :visible="visible">
    <div class="height">嗨嗨嗨！大侠别来无恙！</div>
  </w-dialog>
</template>

<script setup lang="ts">

import { useDialog } from "@higuaifan/wash-painting-ui";

const { visible, closeDialog, showDialog } = useDialog();

</script>

<style scoped>
.height {
  height: 600px;
}
</style>
