<template>
  <div class="wash-painting-ui w-cursor">
    <Title>水墨组件官网</Title>
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
    { name: 'author', content: '阿怪' },
    { name: 'description', content: '' },
    { name: 'keywords', content: '' },
    { name: 'referrer', content: 'no-referrer' },
  ]
})
</script>
