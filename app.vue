<template>
  <div class="shuimo-ui w-cursor">
    <Title>水墨UI</Title>
    <div class="layout">
      <HeaderBase :show-index-button="showIndexButton"/>
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup type="ts">
import HeaderBase from '~/components/base/HeaderBase.vue';
import { computed } from "vue";

const route = useRoute();
const showIndexButton = computed(() => {
  return route.path !== '/';
});

useHead({
  meta: [
    { name: 'author', content: '极客江湖,阿怪,higuaifan' },
    { name: 'description', content: '一款粗暴的水墨UI' },
    { name: 'keywords', content: '水墨,ui,design,UI,UI design,丹青,wash painting,danqing' },
  ]
})
</script>
