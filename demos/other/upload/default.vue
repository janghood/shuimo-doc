<template>
  <span>上传文件为：{{ file.name }}</span>
  <m-upload @upload="uploadHandle">
    <img :src="fileUrl" alt="" v-if="fileUrl">
  </m-upload>
</template>

<script setup lang="ts">

import { ref } from "vue";
import {  MUpload, MPrinter  } from "shuimo-ui";

const file = ref({
  name: ''
});
const fileUrl = ref('');

const uploadHandle = (file: any) => {
  console.log(file);
  file.value = file;
  MPrinter('文件上传组件').info(file);
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (e: any) => {
    fileUrl.value = e.currentTarget.result;
  }

}
</script>
