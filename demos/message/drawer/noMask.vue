<template>
  <w-button @click="showDialog">点击显示抽屉</w-button>
  <w-drawer @close="closeDialog" :visible="visible" :mask="{show:false}">
    <span>嗨嗨嗨！大侠别来无恙！</span>
    <w-button @click="closeDialog">关闭</w-button>
  </w-drawer>
</template>

<script setup lang="ts">

import { useDialog } from "@higuaifan/wash-painting-ui";

const { visible, closeDialog, showDialog } = useDialog();

</script>
