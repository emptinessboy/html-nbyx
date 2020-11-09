<template>
  <div>
    <!--此处加v-if的目的是为了防止axiox异步加载没取完数据就把dom给渲染了-->
    <header-carousel :carousel="carousel" v-if="carousel.length != null"></header-carousel>
    <home-pic :imgwindow="imgwindow" v-if="imgwindow.length != null"></home-pic>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import HeaderCarousel from "@/components/HeaderCarousel";
import HomePic from "@/components/HomePic";
import FooterBar from "@/components/FooterBar";

export default {
  name: "Home",
  components: {
    HeaderCarousel,
    HomePic,
    FooterBar
  },
  data() {
    return {
      carousel: {},
      imgwindow: {}
    };
  },
  created() {
    let that = this;
    axios.get("/static/index.json").then(response => {
      that.carousel = response.data.carousel;
      that.imgwindow = response.data.imgwindow;
      // console.log(that.carousel)
      // console.log(that.imgwindow)
    });
  }
};
</script>
