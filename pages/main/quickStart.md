# 快速开始

## 安装

``` shell
npm install shuimo-ui

yarn add shuimo-ui

pnpm add shuimo-ui
```

### Vue

``` typescript
// main.ts
import { createMUI } from 'shuimo-ui';
import 'shuimo-ui/dist/style.css'; // 【引入样式】 v0.1.13 及以上版本

app.use(createMUI());
```

``` scss
// 低于v0.1.13版本，需要以这种方式在scss等预处理样式文件中引入【vite】
@import '/node_modules/shuimo-ui/dist/style.css';
```

#### 按需引用

``` vue
<template>
  <MInput/>
</template>

<script setup>
import { MInput } from 'shuimo-ui';
</script>
```

### Nuxt

``` typescript
// plugins/vue-plugins.ts
import { createMUI } from 'shuimo-ui';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(WUI);
})
```

#### 样式引入

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  css: [
    'shuimo-ui/dist/style.css' // v0.1.13 及以上版本
  ]
})

```
