<template>
  <p class="text-[36px]">見證</p>
  <div>
    <p>{{ testimony?.title }}</p>
    <p v-for="(contentItem, index) in testimony?.content" :key="index">
      {{ contentItem }}
    </p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import { TESTIMONY_LIST } from ".";

const route = useRoute();
const testimonyId = computed(() => route.params.id);

const testimony = computed(() =>
  TESTIMONY_LIST.find((i) => i.testimonyId === Number(testimonyId.value))
);

</script>

<style lang="scss" scoped></style>
