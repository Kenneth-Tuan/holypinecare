<template>
  <div class="pb-12">
    <div class="page-title-wrapper">
      <p class="page-title-content">醫師開講-{{ doctorName }}</p>
    </div>

    <template v-if="seminarId === '5-1'">
      <div class="flex flex-col gap-y-20">
        <div class="flex flex-col items-center">
          <span class="seminar-subtitle">新時代的抗氧化利氣 台灣氫水研究報告12-3 氫氣 接近完美的抗氧化劑</span>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/N84RzG_dRfc" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
    </template>

    <template v-if="seminarId === '5-2'">
      <div class="flex flex-col gap-y-20">
        <div class="flex flex-col items-center">
          <span class="seminar-subtitle">V3 l 富氢水 l 中国国宝钟南山院士对富氢水的研究 l 富氢水对人体有效吗？</span>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/rXOrxmha0a4" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        <div class="flex flex-col items-center">
          <span class="seminar-subtitle">【钟南山谈氢气】关于氢气癌症肿瘤以及化疗耐药方面的最新突破！</span>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/mklVynjJWB0" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
    </template>

    <template v-if="seminarId === '5-3'">
      <div class="flex flex-col gap-y-20">
        <div class="flex flex-col items-center">
          <span class="seminar-subtitle">徐克成：用氢氧呼吸机吸入氢气能治疗癌症吗？</span>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/0aqfps1njRg" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        <div class="flex flex-col items-center">
          <span class="seminar-subtitle">徐克成教授：氢气控癌真实案例分享 （第一段）</span>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/9u68IY3S2cQ" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
    </template>

    <template v-if="seminarId === '5-4'">
      <div class="flex flex-col gap-y-20">
        <div class="flex flex-col items-center">
          <span class="seminar-subtitle">使用氫分子水治療疾病-孫學軍教授</span>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/bhUIMf0riGg" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        <div class="flex flex-col items-center">
          <span class="seminar-subtitle">【氫分子醫學系列】三高不再棘手</span>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dzr8Aru03vE" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
    </template>

    <template v-if="seminarId === '5-5'">
      <div class="flex flex-col gap-y-20">
        <div class="flex flex-col items-center">
          <span class="seminar-subtitle">日本專訪《世界氫分子醫學領域第一人》太田成男教授：氫氣的唯一缺點是什麼？</span>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/7VS5e3uAG-s" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </div>
        <div class="flex flex-col items-center">
          <span class="seminar-subtitle">太田成男專訪 - 世界氫分子醫學領域第一人 談「氫水」對慢性病的幫助</span>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/vQJf3RE4Ctw" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
    </template>

    <template v-if="seminarId === '5-6'">
      <div class="flex flex-col gap-y-20">
        <div class="flex flex-col items-center">
          <span class="seminar-subtitle">張民傑醫師與氫氧氣</span>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/5Wxd9kSpwlM" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        <div class="flex flex-col items-center">
          <span class="seminar-subtitle">張民傑醫師談氫水</span>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/sKb7y4ednk0" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
    </template>

    <template v-if="seminarId === '5-7'">
      <div class="flex flex-col gap-y-20">
        <div class="flex flex-col items-center">
          <span class="seminar-subtitle">心臟科權威暨抗衰老專家王復蘇醫師分享親身體驗，運用「氫」作為一種輔助性療法，「氫」可謂預防保健的明日之星!</span>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/uNEDThaawBA" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
    </template>


    <template v-if="seminarId === '5-8'">
      <div class="flex flex-col gap-y-20">
        <div class="flex flex-col items-center">
          <span class="seminar-subtitle">癌症之氢气免疫疗法</span>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/bGDQQqqsm4Y" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { watch, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { menuList } from '../../components/Header/index'

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

const doctorName = computed(() =>
  menuList.find((i) => i.key === 'seminar').children.find((i) => i.key === seminarId.value).title
)
</script>

<style lang="scss" scoped>
.seminar-subtitle {
  @apply text-2xl antialiased font-semibold mb-6 text-gray-200
}
</style>
