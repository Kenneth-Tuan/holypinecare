<template>
  <div
    class="header-container px-8 flex flex-row no-wrap justify-between shadow-md"
  >
    <div class="flex flex-col pb-2">
      <h1 class="text-[36px] mr-4">HolyPineCare</h1>
      <div class="flex flex-row">
        <p class="text-[8px] mr-4">健康～好青松</p>
        <p class="text-[8px]">給～醫療難民一個輔助醫療的選擇</p>
      </div>
    </div>
    <a-menu
      class="header-menu pt-6"
      v-model:selectedKeys="current"
      mode="horizontal"
    >
      <a-menu-item key="main">
        <router-link to="main"> 首頁 </router-link>
      </a-menu-item>
      <a-sub-menu key="about">
        <template #title>關於我們</template>
        <router-link to="/about">
          <a-menu-item key="about:1">簡介 </a-menu-item>
        </router-link>
        <a-menu-item key="about:2">聯絡方式</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="ddw">
        <template #title>低氘水</template>
        <a-menu-item key="ddw:1">認識低氘水</a-menu-item>
        <a-menu-item key="ddw:2">低氘水與癌症</a-menu-item>
        <a-menu-item key="ddw:3">低氘水文獻</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="hydrogen">
        <template #title>氫氣氫水</template>
        <a-menu-item key="hydrogen:1">認識氫氣</a-menu-item>
        <a-menu-item key="hydrogen:2">氫氣控癌</a-menu-item>
        <a-menu-item key="hydrogen:3">氫氣氫水與疾病</a-menu-item>
        <a-menu-item key="hydrogen:4">氫氣文獻</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="seminar">
        <template #title>醫師開講</template>
        <a-menu-item key="testimony:1">施文儀</a-menu-item>
        <a-menu-item key="testimony:2">鐘南山</a-menu-item>
        <a-menu-item key="testimony:3">徐克成</a-menu-item>
        <a-menu-item key="testimony:4">太田成男</a-menu-item>
        <a-menu-item key="testimony:5">赤木純兒</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="products">
        <template #title>產品</template>
        <a-menu-item-group title="雲端飄雪">
          <a-menu-item key="product:1">低氘水</a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="納諾巴伯">
          <a-menu-item key="product:2">氫氣機</a-menu-item>
          <a-menu-item key="product:3">氫水機</a-menu-item>
          <a-menu-item key="product:4">氫浴機</a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-sub-menu key="testimony">
        <template #title>見證</template>
        <router-link to="/testimony/1">
          <a-menu-item key="testimony:1">巴金森氏症</a-menu-item>
        </router-link>
        <router-link to="/testimony/2">
          <a-menu-item key="testimony:2">失去嗅覺</a-menu-item>
        </router-link>
        <router-link to="/testimony/3">
          <a-menu-item key="testimony:3">失智症</a-menu-item>
        </router-link>
        <router-link to="/testimony/4">
          <a-menu-item key="testimony:4">耳鳴 胃痛</a-menu-item>
        </router-link>
        <router-link to="/testimony/5">
          <a-menu-item key="testimony:5">自律神經失調 失眠</a-menu-item>
        </router-link>
        <router-link to="/testimony/6">
          <a-menu-item key="testimony:6">慢性肺阻塞(COPD)</a-menu-item>
        </router-link>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script setup>
import { ref } from "vue";

const current = ref(["main"]);
</script>

<style lang="scss" scoped>
.header {
  &-conainer {
  }
  &-menu {
    width: max-content;
  }
}
</style>
