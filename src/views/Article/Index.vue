<template>
  <div class="flex flew-row justify-center">
    <canvas ref="articleRef" id="article"></canvas>
  </div>

  <div>
    <button id="prev">Previous</button>
    <button id="next">Next</button>
    &nbsp; &nbsp;
    <span>Page: <span id="page_num"></span> / <span id="page_count"></span></span>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { articlesTable } from ".";

const route = useRoute();
const articleId = computed(() => route.params.id);
const articleTitle = computed(() => articlesTable.find((article) => article.key === articleId.value)?.title)
const articleRef = ref(null);
const url = `/src/articles/${articleTitle.value.toString()}.pdf`;

let pdfjsLib = window["pdfjs-dist/build/pdf"];

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "//mozilla.github.io/pdf.js/build/pdf.worker.js";

let pdfDoc = null
let pageNum = 1
let pageRendering = false
let pageNumPending = null
let scale = 2

watch(() => { route.params.id }, async () => {
  pdfjsLib.getDocument(url).promise.then(function (pdfDoc_) {
    pdfDoc = pdfDoc_;
    document.getElementById('page_count').textContent = pdfDoc.numPages;

    // Initial/first page rendering
    renderPage(pageNum);
  });
}, { deep: true })

onMounted(() => {

  document.getElementById('next').addEventListener('click', onNextPage);

  document.getElementById('prev').addEventListener('click', onPrevPage);

  /**
   * Asynchronously downloads PDF.
   */
  pdfjsLib.getDocument(url).promise.then(function (pdfDoc_) {
    pdfDoc = pdfDoc_;
    document.getElementById('page_count').textContent = pdfDoc.numPages;

    // Initial/first page rendering
    renderPage(pageNum);
  });
});

function renderPage(num) {
  pageRendering = true;
  // Using promise to fetch the page
  pdfDoc.getPage(num).then(function (page) {

    let canvas = articleRef.value
    let ctx = canvas.getContext('2d')
    var viewport = page.getViewport({ scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // Render PDF page into canvas context
    var renderContext = {
      canvasContext: ctx,
      viewport: viewport
    };
    var renderTask = page.render(renderContext);

    // Wait for rendering to finish
    renderTask.promise.then(function () {
      pageRendering = false;
      if (pageNumPending !== null) {
        // New page rendering is pending
        renderPage(pageNumPending);
        pageNumPending = null;
      }
    });
  });

  // Update page counters
  document.getElementById('page_num').textContent = num;
}

/**
 * If another page rendering in progress, waits until the rendering is
 * finised. Otherwise, executes rendering immediately.
 */
function queueRenderPage(num) {
  if (pageRendering) {
    pageNumPending = num;
  } else {
    renderPage(num);
  }
}

/**
 * Displays previous page.
 */
function onPrevPage() {
  if (pageNum <= 1) {
    return;
  }
  pageNum--;
  queueRenderPage(pageNum);
}


/**
 * Displays next page.
 */
function onNextPage() {
  if (pageNum >= pdfDoc.numPages) {
    return;
  }
  pageNum++;
  queueRenderPage(pageNum);
}



</script>

<style lang="scss" scoped></style>
