/**
 * @Description: 插件安装
 * @Author: 阿怪
 * @Date: 2022/3/3 12:19 AM
 * @Version v1.0.0
 *
 * 公司的业务千篇一律，复杂的代码好几百行。
 */
import { defineNuxtPlugin } from "#app";
import { createWUI } from "../wash-painting-ui/lib";
import { createPinia } from 'pinia';

const WUI = createWUI();
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(WUI);
  nuxtApp.vueApp.use(createPinia());
})
