<script setup>
import Header from "../components/Header/Index.vue";
</script>

<template>
  <div class="holyPineCare-container flex flex-col">
    <Header />
    <main class="holyPineCare-container__main mx-auto pt-4 ">
      <router-view />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.holyPineCare-container {
  width: 100%;
  height: 100%;

  &__main {
    width: 1280px;
    height: 100%;
  }
}
</style>
