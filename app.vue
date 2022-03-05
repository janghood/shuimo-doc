<template>
  <div class="wash-painting-ui w-cursor">
    <Title>水墨UI</Title>
    <div class="layout">
      <Header :show-index-button="showIndexButton"/>
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup type="ts">
import Header from '/components/base/Header.vue';
import { useMeta } from "#meta";
import { computed } from "vue";

const route = useRoute();
const showIndexButton = computed(()=>{
  return route.path!=='/';
});

useMeta({
  meta: [
    { name: 'author', content: '极客江湖,阿怪,higuaifan' },
    { name: 'description', content: '一款粗暴的水墨UI' },
    { name: 'keywords', content: '水墨,ui,design,UI,UI design,丹青,wash painting,danqing' },
  ]
})
</script>
