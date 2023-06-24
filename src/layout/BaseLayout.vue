<script setup>
import Header from "../components/Header/Index.vue";
</script>

<template>
  <div class="holyPineCare-container">
    <Header />
    <main class="relative">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.holyPineCare-container {
  width: 100%;
  height: 100%;
}
</style>
