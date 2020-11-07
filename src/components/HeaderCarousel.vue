<template>
  <div>
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="../assets/images/dqh.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="https://picsum.photos/1024/480/?image=55"
              alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
  </div>

  <!--  <section class="index-pic">-->
  <!--    &lt;!&ndash; 图片轮播插件 carousel&ndash;&gt;-->
  <!--    <div id="browser-pic" class="carousel slide mb-0" data-ride="carousel">-->
  <!--      &lt;!&ndash; 指示符 &ndash;&gt;-->
  <!--      <ul class="carousel-indicators">-->
  <!--        <li data-target="#browser-pic" data-slide-to="0" class="active"></li>-->
  <!--        <li data-target="#browser-pic" data-slide-to="1"></li>-->
  <!--        <li data-target="#browser-pic" data-slide-to="2"></li>-->
  <!--      </ul>-->

  <!--      &lt;!&ndash; 轮播图片 &ndash;&gt;-->
  <!--      <div class="carousel-inner">-->
  <!--        <div class="carousel-item active"><img src="../assets/imgs/dqh.jpg">-->
  <!--          <div class="carousel-caption">-->
  <!--            <h1>景 • IN NingBo</h1>-->
  <!--            <p class="mt-4">东钱湖位于宁波市东侧,距市中心十五公里。素有“西子风韵、太湖气魄”之称</p>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <div class="carousel-item"><img src="../assets/imgs/sjk-bg.jpg">-->
  <!--          <div class="carousel-caption">-->
  <!--            <h1>城 • IN NingBo</h1>-->
  <!--            <p class="mt-4">三江口是宁波最早的“宁波港”港埠，就是从灵桥脚下到江北的下白沙一带</p>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <div class="carousel-item"><img src="../assets/imgs/dmk.jpg">-->
  <!--          <div class="carousel-caption">-->
  <!--            <h1>玩 • IN NingBo</h1>-->
  <!--            <p class="mt-4">东门口一直是宁波人心中的市中心</p>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->

  <!--      &lt;!&ndash; 左右切换按钮 &ndash;&gt;-->
  <!--      <a class="carousel-control-prev" href="#browser-pic" data-slide="prev"> <span-->
  <!--          class="carousel-control-prev-icon"></span> </a> <a class="carousel-control-next" href="#browser-pic"-->
  <!--                                                             data-slide="next"> <span-->
  <!--        class="carousel-control-next-icon"></span> </a></div>-->
  <!--  </section>-->
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

</style>