<template>
  <div class="header-container px-8 flex flex-row no-wrap justify-between shadow-md bg-white">
    <div class="flex flex-col pb-2">
      <h1 class="text-[36px] mr-4 header-font-color">HolyPineCare</h1>
      <div class="flex flex-row">
        <p class="text-[8px] mr-4 header-font-color">健康～好青松</p>
        <p class="text-[8px] header-font-color">
          給～醫療難民一個輔助醫療的選擇
        </p>
      </div>
    </div>
    <a-menu class="header-menu pt-6" v-model:selectedKeys="current" mode="horizontal">
      <a-menu-item key="main">
        <router-link to="/main" class="header-font-color"> 首頁 </router-link>
      </a-menu-item>

      <a-sub-menu v-for="menuItem in menuTree" :key="menuItem.key">
        <template #title class="header-font-color">
          {{ menuItem.title }}
        </template>

        <div v-if="menuItem.hasMinorChildren" class="">
          <a-sub-menu v-for="menuSubItem in menuItem.children" :key="menuSubItem.key">
            <template #title class="header-font-color">
              {{ menuSubItem.title }}
            </template>
            <router-link v-for="menuMinorSubItem in menuSubItem.children" :key="menuMinorSubItem.key"
              :to="`/${menuItem.type}/${menuMinorSubItem.key}`">
              <a-menu-item :key="menuMinorSubItem.key" class="header-font-color">
                {{ menuMinorSubItem.title }}
              </a-menu-item>
            </router-link>
          </a-sub-menu>
        </div>
        <template v-else>
          <router-link v-for="menuSubItem in menuItem.children" :key="menuSubItem.key"
            :to="`/${menuItem.type}/${menuSubItem.key}`">
            <a-menu-item :key="menuSubItem.key" class="header-font-color">
              {{ menuSubItem.title }}
            </a-menu-item>
          </router-link>
        </template>
      </a-sub-menu>

      <router-link to="/products" class="header-font-color">
        <a-sub-menu key="products">
          <template #title class="header-font-color">
            產品
          </template>
          <a-menu-item key="7-1">
            <router-link to="/products/7-1" class="header-font-color"> 氫氣機 </router-link>
          </a-menu-item>
          <a-menu-item key="7-2">
            <router-link to="/products/7-2" class="header-font-color"> 氫浴機 </router-link>
          </a-menu-item>
          <a-menu-item key="7-3">
            <router-link to="/products/7-3" class="header-font-color"> 氫水機 </router-link>
          </a-menu-item>
          <a-menu-item key="7-4">
            <router-link to="/products/7-4" class="header-font-color"> 氫水杯 </router-link>
          </a-menu-item>
          <a-menu-item key="7-5">
            <router-link to="/products/7-5" class="header-font-color"> 低氘水 </router-link>
          </a-menu-item>
        </a-sub-menu>
      </router-link>
    </a-menu>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { menuList } from "./index";

const current = ref(["main"]);
const menuTree = computed(() => menuList);
</script>

<style lang="scss" scoped>
.header {
  &-conainer {}

  &-menu {
    width: max-content;
  }

  &-font-color {
    @apply text-gray-600;
  }
}
</style>
