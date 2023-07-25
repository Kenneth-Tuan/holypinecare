<script setup>
import Header from "../components/Header/Index.vue";
import Footer from "../components/Footer/Index.vue";


</script>

<template>
  <div class="holyPineCare-container flex flex-col">
    <Header class="flex-none" />
    <main class="holyPineCare-container__main mx-auto pt-4 pb-24 flex-grow">
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
  background: linear-gradient(60deg,
      rgba(84, 58, 183, 1) 0%,
      rgba(0, 172, 193, 1) 100%);

  &__main {
    width: 1280px;
    height: 100%;
  }
}
</style>
