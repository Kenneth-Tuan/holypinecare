<template>
  <div>
    <a-carousel autoplay class="mb-12">
      <img class="" src="../../assets/image/banner1.jpg" alt="" />
      <img class="" src="../../assets/image/banner2.jpg" alt="" />
      <img class="" src="../../assets/image/banner4.jpg" alt="" />
      <img class="" src="../../assets/image/banner5.jpg" alt="" />
      <img class="" src="../../assets/image/banner6.jpg" alt="" />
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
      <div class="text-left text-white text-2xl px-80 gap-y-4 flex flex-col justify-center items-center">
        <span>1. 評估和診斷，制定個人化治療計劃</span>
        <span>2. 進行氫氣療法，吸入氫氣或飲用氫氣水</span>
        <span>3. 定期追蹤和評估治療效果</span>
      </div>
    </div>
  </section>

  <div class="pb-16">
    <div class="page-title-wrapper">
      <p class="page-title-content">產品介紹</p>
      <div class="bg-gray-300 h-[1px] w-3/4"></div>
    </div>
    <div class="w-full flex flex-row justify-between gap-12">
      <div class="main__product-card">
        <div class="main__image-wrapper">
          <img :src="getProductsImage('納諾巴伯3.jpg')" alt="">
        </div>
        <div class="main__product-name">氫氣機</div>
      </div>
      <div class="main__product-card">
        <div class="main__image-wrapper">
          <img :src="getProductsImage('氫浴機3.jpg')" alt="">
        </div>
        <div class="main__product-name">氫浴機</div>
      </div>
      <div class="main__product-card">
        <div class="main__image-wrapper">
          <img :src="getProductsImage('氫水機3.jpg')" alt="">
        </div>
        <div class="main__product-name">氫水機</div>
      </div>
      <div class="main__product-card">
        <div class="main__image-wrapper">
          <img :src="getProductsImage('氫水杯3.jpg')" alt="">
        </div>
        <div class="main__product-name">氫水杯</div>
      </div>
      <div class="main__product-card">
        <div class="main__image-wrapper">
          <img :src="getProductsImage('低氘水1.jpg')" alt="">
        </div>
        <div class="main__product-name">低氘水</div>
      </div>
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
  height: 300px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.main {
  &__product-card {
    @apply w-1/3 h-[300px] bg-gray-200/25 rounded-lg flex flex-col justify-end overflow-hidden cursor-pointer
  }

  &__image-wrapper {
    @apply flex flex-row justify-center items-center overflow-hidden bg-white flex-grow
  }

  &__product-name {
    @apply bg-gray-200/75 h-1/4 w-full text-center text-3xl py-4 font-semibold
  }
}
</style>
