<template>
  <div>
    <a-carousel autoplay>
      <img class="" src="../../assets/image/banner1.jpg" alt="">
      <img class="" src="../../assets/image/banner2.jpg" alt="">
      <img class="" src="../../assets/image/banner4.jpg" alt="">
      <img class="" src="../../assets/image/banner5.jpg" alt="">
      <img class="" src="../../assets/image/banner6.jpg" alt="">
    </a-carousel>
  </div>

  <div class="flex flex-row justify-center">
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/LKzv6Qy_gxs" title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
  </div>
</template>

<script setup>
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
</style>
