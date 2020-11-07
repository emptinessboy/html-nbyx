<template>
  <div>
    <header-carousel></header-carousel>
    <home-pic></home-pic>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderCarousel from "@/components/HeaderCarousel";
import HomePic from "@/components/HomePic";
import FooterBar from "@/components/FooterBar";

export default {
  name: "Home",
  components: {
    HeaderCarousel,
    HomePic,
    FooterBar
  }
};
</script>
