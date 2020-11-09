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

      <b-carousel-slide v-for="(item,index) in carousel" :key="index">
        <!--循环从json拉取标题和图片-->
        <template v-slot:img>
          <img
              class="d-block"
              :src="item.img"
              alt="image slot"
          >
        </template>
        <h1>{{ item.name }}</h1>
        <p class="mt-4">{{ item.desc }}</p>
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
  props:['carousel'],
  data() {
    return {
      slide: 0,
      sliding: null,
      // carousel: {}
    }
  },
  created() {
    console.log("图片轮播created")
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

@media (min-width: 768px) {
  /* 图片轮播适应宽度 电脑版 */
  .carousel-item img {
    width: 100%;
  }
}

@media (max-width: 768px) {
  /* 图片轮播适应宽度 电脑版 */
  .carousel-item img {
    height: 100%;
  }
}
</style>
<!--这个样式放到scoped不生效-->
<style>
.header-carousel .carousel-caption {
  top: 35% !important;
  bottom: auto !important;
}
</style>