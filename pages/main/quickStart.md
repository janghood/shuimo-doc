# 快速开始

## 安装

``` shell
npm install @higuaifan/wash-painting-ui

yarn add @higuaifan/wash-painting-ui

pnpm add @higuaifan/wash-painting-ui
```

### Vue

``` typescript
// main.ts
import { createWUI } from '@higuaifan/wash-painting-ui';
import '@higuaifan/wash-painting-ui/dist/style.css'; // 【引入样式】 v0.1.13 及以上版本

app.use(createWUI());
```

``` scss
// 低于v0.1.13版本，需要以这种方式在scss等预处理样式文件中引入【vite】
@import '/node_modules/@higuaifan/wash-painting-ui/dist/style.css';
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

#### 样式引入

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  css: [
    '@higuaifan/wash-painting-ui/dist/style.css' // v0.1.13 及以上版本
  ]
})

```
