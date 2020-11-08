<template>
  <div>
    <header-carousel :carousel="carousel"></header-carousel>
    <home-pic></home-pic>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderCarousel from "@/components/HeaderCarousel";
import HomePic from "@/components/HomePic";
import FooterBar from "@/components/FooterBar";
import axios from "axios";

export default {
  name: "Home",
  components: {
    HeaderCarousel,
    HomePic,
    FooterBar
  },
  data() {
    return {
      carousel: {}
    }
  },
  created() {
    let that = this;
    axios.get("/static/index.json").then(response => {
      that.carousel = response.data.carousel
      console.log(that.carousel)
    })
  }
};
</script>
