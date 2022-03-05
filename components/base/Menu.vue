<template>
  <w-menu class="menu" :menu="menuList" @click="clickMenu"/>
</template>

<script lang="ts" setup>
/**
 * @Description:
 * @Author: 阿怪
 * @Date: 2022/3/4 8:26 PM
 * @Version v1.0.0
 *
 * 公司的业务千篇一律，复杂的代码好几百行。
 */
import { ref } from "vue";
import { useRouter } from "nuxt3/app";
import { menu } from "~/config/menu.config";

const menuList = ref(menu);

const router = useRouter();
const clickMenu = (index: number[]) => {
  let m;
  if (index.length === 1) {
    m = menuList.value![index[0]];
  } else {
    m = menuList.value![index[0]]!.children![index[1]];
  }
  router.push(`/${m.key}`);
}


</script>

<style lang="scss" scoped>
.menu {
  margin-left: 99px;
  height: 100%;
  width: 216px;
}

</style>
