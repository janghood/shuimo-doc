<template>
  <w-popover :show="visible">
    <w-button text="将毛笔移入试试" @click="showDialog"/>
    <template #content>
      <div>
        <div>嗨嗨嗨！大侠别来无恙！</div>
        <div style="text-align: right; margin: 0">
          <w-button text="关闭" @click="closeDialog"></w-button>
          <w-button text="确定" @click="closeDialog"></w-button>
        </div>
      </div>
    </template>
  </w-popover>
</template>

<script setup lang="ts">
import { useDialog } from "@higuaifan/wash-painting-ui";

const { visible, closeDialog, showDialog } = useDialog();

</script>
