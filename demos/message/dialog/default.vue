<template>
  <m-button @click="showDialog">点击显示弹窗</m-button>
  <m-dialog @close="closeDialog" :visible="visible">
    <span>嗨嗨嗨！大侠别来无恙！</span>
  </m-dialog>
</template>

<script setup lang="ts">

import { useDialog } from "shuimo-ui";

const { visible, closeDialog, showDialog } = useDialog();

</script>

