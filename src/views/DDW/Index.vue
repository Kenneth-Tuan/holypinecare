<template>
  <input type="file" name="" id="" @change="(e) => handleFileSelect(e)" />
  <div v-html="htmlContent"></div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import "../../../mammoth.browser";

const htmlContent = ref("");

const options = {
  styleMap: [
    "p[style-name='Section Title'] => h1:fresh",
    "p[style-name='Subsection Title'] => h2:fresh",
  ],
};

onBeforeMount(() => {});

function handleFileSelect(event) {
  console.log(event);
  readFileInputEventAsArrayBuffer(event, function (arrayBuffer) {
    mammoth
      .convertToHtml({ arrayBuffer: arrayBuffer }, options)
      .then(displayResult, function (error) {
        console.error(error);
      });
  });
}

function displayResult(result) {
  htmlContent.value = result.value;
}

function readFileInputEventAsArrayBuffer(event, callback) {
  var file = event.target.files[0];

  var reader = new FileReader();

  reader.onload = function (loadEvent) {
    var arrayBuffer = loadEvent.target.result;
    callback(arrayBuffer);
  };

  reader.readAsArrayBuffer(file);
}
</script>

<style lang="scss" scoped></style>
