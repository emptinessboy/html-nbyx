<template>
  <div>
    <page-content></page-content>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import FooterBar from "@/components/FooterBar";
import PageContent from "@/components/PageContent";
export default {
  name: "PageDmk",
  components: {
    PageContent,
    FooterBar
  },
}
</script>

<style scoped>

</style>