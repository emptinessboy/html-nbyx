<template>
  <div class="d-none d-md-block col-md-7 background-walk-y position-relative overlay-gradient-bottom">
    <b-carousel
        v-model="slide"
        :interval="4000"
        fade
        indicators
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
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
  </div>
</template>

<script>
export default {
  name: "UserCarousel",
  props: ['carousel'],
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  created() {
    console.log("登录页图片轮播created")
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
/*登录页的图片轮播控件相关*/
.carousel-inner {
  height: 100%
}

.carousel {
  height: 100%;
}

.carousel-item {
  height: 100%;
}
</style>