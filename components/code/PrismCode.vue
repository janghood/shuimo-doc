<template>
  <pre :class="[languageType]"><code ref="element" :class="[languageType]"/></pre>
</template>

<script setup lang="ts">
import Prism from 'prismjs';

import { onMounted, onUpdated, ref, watch, useSlots } from "vue";
import 'prismjs/components/prism-typescript.js'
import 'prismjs/components/prism-json.js'
import 'prismjs/plugins/toolbar/prism-toolbar.js'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js'

interface codeType {
  type: string,
  languageType: string,
  code: string
}

const props = defineProps<codeType>();
Prism.manual = true;
const languageType = ref('language-');
const innerCode = ref('');
const element = ref(null);

watch(props, () => {
  initHtml();
});

let firstFlag = false;

const initHtml = () => {
  languageType.value = ` language-${props.type}`;
  innerCode.value = `${props.code}`
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  element.value.innerHTML = innerCode.value;
  Prism.highlightAll();
}

onMounted(() => {
  initHtml();
})

onUpdated(() => {
  if (!firstFlag) {
    firstFlag = true;
    initHtml();
  }
})

</script>

<style lang="scss" scoped>
</style>
