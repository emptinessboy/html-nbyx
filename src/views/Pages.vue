<template>
  <div>
    <page-content :path="path" :key="path"></page-content>
    <!--使用key绑定防止子组件复用，防止路由刷新文章不刷新的bug-->
    <!--数据双向绑定，传递文章内容参数-->
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import FooterBar from "@/components/FooterBar";
import PageContent from "@/components/PageContent";

export default {
  name: "Pages",
  data() {
    return {
      path: this.$route.path
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.path = to.path
    //路由信息动态更新
    console.log("路由更新" + this.path)
    next();
  },
  components: {
    PageContent,
    FooterBar
  },
}
</script>

<style scoped>

</style>