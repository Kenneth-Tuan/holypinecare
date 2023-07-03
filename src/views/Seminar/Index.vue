<template>
  <div class="pb-12">
    <p>醫師開講-{{ seminarId ?? "testing" }}</p>
  </div>
</template>

<script setup>
import { watch, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const seminarId = ref("");

watch(
  () => {
    route.params;
  },
  () => {
    seminarId.value = route.params.id;
  },
  { deep: true, immediate: true }
);
</script>

<style lang="scss" scoped></style>
