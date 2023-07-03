<script setup>
import Header from "../components/Header/Index.vue";
import Footer from "../components/Footer/Index.vue";
</script>

<template>
  <div class="holyPineCare-container flex flex-col">
    <Header class="flex-none" />
    <main class="holyPineCare-container__main mx-auto pt-4 flex-grow">
      <router-view />
    </main>
    <Footer class="flex-none" />
  </div>
</template>

<style lang="scss" scoped>
.holyPineCare-container {
  width: 100%;
  height: 100%;
  min-height: 100vh;

  &__main {
    width: 1280px;
    height: 100%;
  }
}
</style>
