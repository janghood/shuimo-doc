<template>
  <div class="component" id="level">
    <div class="entry-dialog">
      <m-input/>
      <m-button text="点我进入组件页面" @click="toMain"/>
    </div>
    <img class="level" src="/img/entry/level.png" alt="">
    <img class="fan-left" src="/img/entry/fan_left.png" alt="">
    <img class="fan-center" src="/img/entry/fan_center.png" alt="">
    <img class="fan-right" src="/img/entry/fan_right.png" alt="">
  </div>
</template>

<script setup lang="ts">
import useMouseMove from "@/compositions/entry/useMouseMove";

useMouseMove('level', 25);

const router = useRouter();
const toMain = () => {
  router.push('/main');
}

</script>

<style scoped lang="scss">
@import "/assets/style/base.scss";

.component {
  display: grid;
  grid-template-areas:  ". . ."
                        ". main ."
                        ". . .";
  height: 100%;
  grid-auto-columns: realPx(400) auto realPx(227);
  grid-auto-rows: auto realPx(734) realPx(144);
  position: relative;
  transform: translate(0px, 0px);
  transition: transform 500ms;
  grid-area: container;


  .main-area {
    grid-area: main;
    position: relative;
  }

  .entry-dialog {
    @extend .main-area;
    background: url(/img/entry/dialog_bg.png) no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
    width: realPx(996);
    height: realPx(690);
    padding-top: realPx(130);
    padding-left: realPx(40);
    z-index: -1;
  }

  .level {
    @extend .main-area;
    height: realPx(564);
    margin-top: realPx(200);
    z-index: 4;
  }

  .fan-left {
    @extend .main-area;
    height: realPx(246);
    width: realPx(461);
    margin-top: realPx(480);
    margin-left: realPx(-40);
    z-index: 3;
  }

  .fan-center {
    @extend .main-area;
    height: realPx(524);
    width: realPx(1038);
    margin-top: realPx(180);
    margin-left: realPx(50);
    z-index: 2;
  }

  .fan-right {
    @extend .main-area;
    height: realPx(245);
    width: realPx(444);
    margin-top: realPx(470);
    margin-left: realPx(700);
    z-index: 3;
  }
}
</style>
