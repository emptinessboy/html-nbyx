<template>
  <!--组件使用文档https://bootstrap-vue.org/docs/components/carousel-->
  <div class="header-carousel">
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        style="height: 500px; text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <!-- 轮播图片 -->
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
              class="d-block"
              src="../assets/images/dqh.jpg"
              alt="image slot"
          >
        </template>
        <h1>景 • IN NingBo</h1>
        <p class="mt-4">东钱湖位于宁波市东侧,距市中心十五公里。素有“西子风韵、太湖气魄”之称</p>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
              class="d-block"
              src="../assets/images/sjk-bg.jpg"
              alt="image slot"
          >
        </template>
        <h1>城 • IN NingBo</h1>
        <p class="mt-4">三江口是宁波最早的“宁波港”港埠，就是从灵桥脚下到江北的下白沙一带</p>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
              class="d-block"
              src="../assets/images/dmk.jpg"
              alt="image slot"
          >
        </template>
        <h1>玩 • IN NingBo</h1>
        <p class="mt-4">东门口一直是宁波人心中的市中心</p>
      </b-carousel-slide>

    </b-carousel>
<!--下面内容供调试使用-->
<!--    <p class="mt-4">-->
<!--      Slide #: {{ slide }}<br>-->
<!--      Sliding: {{ sliding }}-->
<!--    </p>-->
  </div>
</template>

<script>
export default {
  name: "HeaderCarousel",
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>

<style scoped>
.carousel {
  height: 500px;
}
.carousel-item {
  height: 500px;
}
@media (min-width:768px) {
  /* 图片轮播适应宽度 电脑版 */
  .carousel-item img {
    width: 100%;
  }
}
@media (max-width:768px) {
  /* 图片轮播适应宽度 电脑版 */
  .carousel-item img {
    height: 100%;
  }
}
</style>
<!--这个样式放到scoped不生效-->
<style>
.header-carousel .carousel-caption {
  top: 35%!important;
  bottom: auto!important;
}
</style>