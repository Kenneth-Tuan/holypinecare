<template>
  <div class="about">
    <div class="page-title-wrapper">
      <p class="page-title-content">Holy Pine Care</p>
      <p class="text-gray-500 text-lg">非藥之藥：氫氣免疫療法</p>
    </div>
    <div class="flex flex-row justify-between mb-12">
      <div class="about-card">
        <p class="text-4xl antialiased font-semibold">有效</p>
        <p>Applicable</p>
      </div>
      <div class="about-card">
        <p class="text-4xl antialiased font-semibold">簡便</p>
        <p>Brief</p>
      </div>
      <div class="about-card">
        <p class="text-4xl antialiased font-semibold">廉價</p>
        <p>costless</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.about-card {
  @apply w-1/4 shadow-lg shadow-blue-500/40 hover:shadow-indigo-500/40 rounded-lg flex flex-col items-center justify-center gap-4 p-6;

  &__content {
    @apply font-sans;
  }
}
</style>
