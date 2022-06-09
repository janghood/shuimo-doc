<template>
  <m-button @click="showDialog">点击显示抽屉</m-button>
  <m-drawer @close="closeDialog" :visible="visible" :mask="{show:false}">
    <span>嗨嗨嗨！大侠别来无恙！</span>
    <m-button @click="closeDialog">关闭</m-button>
  </m-drawer>
</template>

<script setup lang="ts">

import { useDialog } from "shuimo-ui";

const { visible, closeDialog, showDialog } = useDialog();

</script>
