<template>
  <m-popover :show="visible">
    <m-button text="将毛笔移入试试" @click="showDialog"/>
    <template #content>
      <div>
        <div>嗨嗨嗨！大侠别来无恙！</div>
        <div style="text-align: right; margin: 0">
          <m-button text="关闭" @click="closeDialog"></m-button>
          <m-button text="确定" @click="closeDialog"></m-button>
        </div>
      </div>
    </template>
  </m-popover>
</template>

<script setup lang="ts">
import { useDialog } from "shuimo-ui";

const { visible, closeDialog, showDialog } = useDialog();

</script>
