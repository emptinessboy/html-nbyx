<template>
  <div>
    <header-carousel></header-carousel>
    <hello-world></hello-world>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderCarousel from "@/components/HeaderCarousel";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HeaderCarousel,
    HelloWorld
  }
};
</script>
