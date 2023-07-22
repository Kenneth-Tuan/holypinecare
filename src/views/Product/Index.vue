<template>
    <div>
        <div class="product-container">
            <div class="page-title-wrapper">
                <p class="page-title-content">{{ product.name }}</p>
                <div class="bg-gray-300 h-[1px] w-3/4"></div>
            </div>
            <div class="flex flex-row  justify-between">
                <div class=" mr-6">
                    <a-carousel autoplay class="mb-12 w-[500px] ">
                        <img v-for="(image, index) in product.imageList" :key="index" class=""
                            :src="getProductsImage(image)" alt="" />
                    </a-carousel>
                </div>
                <div class="">
                    <div class=" product-description text-xl text-white">
                        <p v-for="(content, index) in product.content" :key="index">
                            {{ content }}</p>
                    </div>
                    <div class="flex flex-row flex-nowrap items-end">
                        <div class="text-4xl text-white">
                            <span>產品價格：</span>
                        </div>
                        <div class="flex flex-col">

                            <div class="product-price">
                                <span class="text-3xl text-white" :class="[{ 'line-through': hasDiscount }]">
                                    NT$
                                </span>
                                <span class="text-3xl text-white" :class="[{ 'line-through': hasDiscount }]">
                                    {{ product.price.toLocaleString() }} {{ product.productUnit ? `/ ${product.productUnit}`
                                        :
                                        '' }}
                                </span>
                            </div>
                            <template v-if="hasDiscount">
                                <div class="product-price">
                                    <span class="text-3xl text-orange-600">
                                        NT$
                                    </span>
                                    <span class="text-3xl text-orange-600">
                                        {{ product.discount.toLocaleString() }}
                                        {{ product.productUnit ? `/ ${product.productUnit}`
                                            : ''
                                        }}
                                    </span>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
            <tempate v-if="articleTitle">
                <div class="flex flew-row justify-center mb-12">
                    <canvas ref="articleRef" id="article" class="rounded-lg"></canvas>
                </div>
                <div class="flex flex-row justify-center">
                    <a-pagination v-model:current="current" :total="Number(pageCount)" :pageSize="1" show-less-items
                        @change="onChange()" />
                </div>
            </tempate>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { articlesTable } from "../Article/index";

import { productList } from '../Products/index'
import { getProductsImage } from '../../utils/image';

const route = useRoute()

const product = computed(() => productList.find((pdt) => pdt.productId === route.params.id))
const hasDiscount = computed(() => !!product.value.discount)

const articleId = computed(() => route.params.id);
const articleTitle = computed(
    () => articlesTable.find((article) => article.key === articleId.value)?.title
);
const articleRef = ref(null);
const url = computed(() => {
    if (import.meta.env.DEV) {
        return `/src/articles/${articleTitle.value?.toString()}.pdf`;
    } else {
        return `/holypinecare/articles/${articleTitle.value?.toString()}.pdf`;
    }
});
const current = ref(1);
const pageCount = ref(0);

let pdfjsLib = window["pdfjs-dist/build/pdf"];

pdfjsLib.GlobalWorkerOptions.workerSrc =
    "//mozilla.github.io/pdf.js/build/pdf.worker.js";

let pdfDoc = null;
let pageNum = 1;
let pageRendering = false;
let pageNumPending = null;
let scale = 2;

watch(
    () => {
        route.params;
    },
    () => {
        getPDFDocument();
    },
    { deep: true, immediate: true }
);

onMounted(() => {
    // getPDFDocument();
});

/**
 * Asynchronously downloads PDF.
 */
function getPDFDocument() {
    pdfjsLib.getDocument(url.value).promise.then(function (pdfDoc_) {
        pdfDoc = pdfDoc_;
        pageCount.value = pdfDoc.numPages;
        // Initial/first page rendering
        renderPage(pageNum);
    });
}

function renderPage(num) {
    pageRendering = true;
    // Using promise to fetch the page
    pdfDoc.getPage(num).then(function (page) {
        let canvas = articleRef.value;
        let ctx = canvas.getContext("2d");
        var viewport = page.getViewport({ scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        // canvas.style = { "background-color": rgba(255, 0, 0, 0.5) };
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Render PDF page into canvas context
        var renderContext = {
            canvasContext: ctx,
            viewport: viewport,
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

function onChange() {
    window.scrollTo(0, 0);
    queueRenderPage(current.value);
}

</script>

<style lang="scss" scoped>
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
}

img {
    max-width: 100%;
    height: auto;
}

.product-container {
    margin: 0 auto;
    padding: 20px;
}

.product-name {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

.product-image {
    margin-bottom: 20px;
}

.product-price {
    font-size: 20px;
    font-weight: bold;
    color: #f00;
}

.product-features {
    margin-bottom: 20px;
}

.product-description {
    margin-bottom: 20px;
}
</style>