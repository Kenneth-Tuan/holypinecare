<template>
  <div class="">
    <canvas ref="articleRef"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const articleId = ref(205);

const url = `src/articles/${articleId.value}.pdf`;

let pdfjsLib = window["pdfjs-dist/build/pdf"];

const loadingTask = pdfjsLib.getDocument(url);

const articleRef = ref(null);

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "//mozilla.github.io/pdf.js/build/pdf.worker.js";

onMounted(() => {
  loadingTask.promise.then(
    function (pdf) {
      console.log("PDF loaded");

      // Fetch the first page
      var pageNumber = 1;
      pdf.getPage(pageNumber).then(function (page) {
        console.log("Page loaded");

        var scale = 1.5;
        var viewport = page.getViewport({ scale: scale });

        // Prepare canvas using PDF page dimensions
        var canvas = articleRef.value;
        var context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render PDF page into canvas context
        var renderContext = {
          canvasContext: context,
          viewport: viewport,
        };
        var renderTask = page.render(renderContext);
        renderTask.promise.then(function () {
          console.log("Page rendered");
        });
      });
    },
    function (reason) {
      // PDF loading error
      console.error(reason);
    }
  );
});
</script>

<style lang="scss" scoped></style>
