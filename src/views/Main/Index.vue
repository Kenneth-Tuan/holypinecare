<template>
  <div>
    <a-carousel autoplay class="mb-12 w-full ">
      <img class="" src="../../assets/image/banner2.jpg" alt="" />
      <img class="" src="../../assets/image/banner4.jpg" alt="" />
      <img class="" src="../../assets/image/banner5.jpg" alt="" />
    </a-carousel>
  </div>


  <section id="about">
    <div class="container pb-16">
      <div class="page-title-wrapper">
        <p class="page-title-content">關於氫氣療法</p>
        <div class="bg-gray-300 h-[1px] w-3/4"></div>
      </div>
      <p class="text-left text-white text-2xl px-48 pb-5">
        氫氣療法是一種使用氫氣進行治療的療法，被認為能夠提供多種健康益處。氫氣具有強大的抗氧化性質，能夠中和自由基，減少細胞損傷，改善健康狀態。
      </p>
      <p class="text-left text-white text-2xl px-48">
        氫氣療法通常通過吸入氫氣、飲用氫氣水或浸泡身體部位來實施。它已被廣泛研究，並被認為對許多健康問題有益，包括減輕炎症、改善皮膚狀態、增強免疫力等。
      </p>
    </div>
  </section>

  <section id="benefits">
    <div class="container pb-16">
      <div class="page-title-wrapper">
        <p class="page-title-content">好處與效益</p>
        <div class="bg-gray-300 h-[1px] w-3/4"></div>
      </div>
      <ul class="text-center text-white text-2xl px-20 gap-y-4">
        <li>減輕炎症反應，緩解疼痛</li>
        <li>改善皮膚健康，減少皺紋和斑點</li>
        <li>促進身體細胞修復和再生</li>
        <li>增強免疫力，預防疾病</li>
        <li>提供抗氧化保護，延緩衰老</li>
        <li>增加體能和精力，改善睡眠品質</li>
      </ul>
    </div>
  </section>

  <section id="procedure">
    <div class="container pb-16">
      <div class="page-title-wrapper">
        <p class="page-title-content">療程過程</p>
        <div class="bg-gray-300 h-[1px] w-3/4"></div>
      </div>
      <ul class="text-center text-white text-2xl px-20 gap-y-4">
        <li>1. 評估和診斷，制定個人化治療計劃</li>
        <li>2. 進行氫氣療法，吸入氫氣或飲用氫氣水</li>
        <li>3. 定期追蹤和評估治療效果</li>
      </ul>
    </div>
  </section>

  <div class="pb-16">
    <div class="page-title-wrapper">
      <p class="page-title-content">產品介紹</p>
      <div class="bg-gray-300 h-[1px] w-3/4"></div>
    </div>
    <div class="mx-auto flex flex-row gap-6 px-4">
      <div class="main__product-card">
        <div class="main__image-wrapper">
          <img :src="getProductsImage('納諾巴伯3.jpg')" alt="">
        </div>
        <router-link to="/products/7-1">
          <div class="main__product-name">氫氣機</div>
        </router-link>
      </div>
      <div class="main__product-card">
        <div class="main__image-wrapper">
          <img :src="getProductsImage('氫浴機3.jpg')" alt="">
        </div>
        <router-link to="/products/7-2">
          <div class="main__product-name">氫浴機</div>
        </router-link>
      </div>
      <div class="main__product-card">
        <div class="main__image-wrapper">
          <img :src="getProductsImage('氫水機3.jpg')" alt="">
        </div>
        <router-link to="/products/7-3">
          <div class="main__product-name">氫水機</div>
        </router-link>
      </div>
      <div class="main__product-card">
        <div class="main__image-wrapper">
          <img :src="getProductsImage('氫水杯3.jpg')" alt="">
        </div>
        <router-link to="/products/7-4">
          <div class="main__product-name">氫水杯</div>
        </router-link>
      </div>
      <div class="main__product-card">
        <div class="main__image-wrapper">
          <img :src="getProductsImage('低氘水1.jpg')" alt="">
        </div>
        <router-link to="/products/7-5">
          <div class="main__product-name">低氘水</div>
        </router-link>
      </div>
    </div>
  </div>

  <div class="pb-16">
    <div class="page-title-wrapper">
      <p class="page-title-content">醫師開講</p>
      <div class="bg-gray-300 h-[1px] w-3/4"></div>
    </div>
    <div class="flex flex-row justify-center items-center">
      <iframe width="768" height="480" src="https://www.youtube.com/embed/LKzv6Qy_gxs" title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
  </div>
</template>

<script setup>
import { getProductsImage } from '../../utils/image'

</script>



<style lang="scss" scoped>
/* For demo */

.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 480px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.main {
  &__product-card {
    @apply w-[250px] h-[300px] bg-gray-200/25 rounded-lg flex flex-col justify-end overflow-hidden
  }

  &__image-wrapper {
    @apply flex flex-row justify-center items-center overflow-hidden bg-white flex-grow
  }

  &__product-name {
    @apply h-1/4 w-full text-center text-3xl py-4 font-semibold
  }
}
</style>
