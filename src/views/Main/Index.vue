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

  <div class="pb-16">
    <div class="page-title-wrapper">
      <p class="page-title-content">產品介紹</p>
      <div class="bg-gray-300 h-[1px] w-3/4"></div>
    </div>
    <div class="w-full flex flex-row justify-between gap-12">
      <div
        class="w-1/3 h-[300px] bg-gray-200/25 rounded-lg flex flex-col justify-end overflow-hidden"
      >
        <div class="bg-gray-200/75 h-1/4 w-full text-center">product</div>
      </div>
      <div
        class="w-1/3 h-[300px] bg-gray-200/25 rounded-lg flex flex-col justify-end overflow-hidden"
      >
        <div class="bg-gray-200/75 h-1/4 w-full text-center">product</div>
      </div>
      <div
        class="w-1/3 h-[300px] bg-gray-200/25 rounded-lg flex flex-col justify-end overflow-hidden"
      >
        <div class="bg-gray-200/75 h-1/4 w-full text-center">product</div>
      </div>
    </div>
  </div>

  <div class="pb-16">
    <div class="page-title-wrapper">
      <p class="page-title-content">醫師開講</p>
      <div class="bg-gray-300 h-[1px] w-3/4"></div>
    </div>
    <div class="flex flex-row justify-center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/LKzv6Qy_gxs"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      >
      </iframe>
      <!-- another video -->
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 300px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}
</style>
