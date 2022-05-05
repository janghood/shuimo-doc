# 快速开始

## 安装

``` shell
npm install @higuaifan/wash-painting-ui

yarn install @higuaifan/wash-painting-ui

pnpm install @higuaifan/wash-painting-ui
```

### Vue

``` typescript
// main.ts
import { createWUI } from '@higuaifan/wash-painting-ui';

app.use(createWUI());
```

#### 按需引用

``` vue
<template>
  <WInput/>
</template>

<script setup>
import { WInput } from '@higuaifan/wash-painting-ui';
</script>
```

### Nuxt

``` typescript
// plugins/vue-plugins.ts
import { createWUI } from '@higuaifan/wash-painting-ui';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(WUI);
})
```
