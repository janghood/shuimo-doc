<template>
  <w-button @click="showDialog">点击显示弹窗</w-button>
  <w-dialog @close="closeDialog" :visible="visible">
    <span>嗨嗨嗨！大侠别来无恙！</span>
  </w-dialog>
</template>

<script setup lang="ts">

import { useDialog } from "@higuaifan/wash-painting-ui";

const { visible, closeDialog, showDialog } = useDialog();

</script>

