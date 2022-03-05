<template>
  <main class="entry-main">
    <Component/>
  </main>
</template>

<script lang="ts" setup>
/**
 * @Description: 首页
 * @Author: 阿怪
 * @Date: 2022/3/4 12:27 AM
 * @Version v1.0.0
 *
 * 公司的业务千篇一律，复杂的代码好几百行。
 */
import Component from '/components/entry/Component.vue';

definePageMeta({
  layout: 'without-menu'
})

</script>

<style scoped>

.entry-main {
  height: calc(100vh - 100px);
  display: grid;
  grid-template-areas:  "container";
}

</style>
