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
        <router-link to="/main"> 首頁 </router-link>
      </a-menu-item>

      <a-sub-menu v-for="menuItem in menuTree" :key="menuItem.key">
        <template #title>{{ menuItem.title }}</template>

        <a-sub-menu
          v-for="menuSubItem in menuItem.children"
          :key="menuSubItem.key"
        >
          <div v-if="menuItem.hasMinorChildren" class="">
            <template #title>{{ menuSubItem.title }}</template>
            <router-link
              v-for="menuMinorSubItem in menuSubItem.children"
              :key="menuMinorSubItem.key"
              :to="`/${menuItem.type}/${menuMinorSubItem.key}`"
            >
              <a-menu-item :key="menuMinorSubItem.key">
                {{ menuMinorSubItem.title }}
              </a-menu-item>
            </router-link>
          </div>
          <router-link v-else :to="`/${menuItem.type}/${menuSubItem.key}`">
            <a-menu-item :key="menuSubItem.key">
              {{ menuSubItem.title }}
            </a-menu-item>
          </router-link>
        </a-sub-menu>
      </a-sub-menu>
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
  &-conainer {
  }

  &-menu {
    width: max-content;
  }
}
</style>
