<template>
  <div id="app">
    <header-nav></header-nav>
    <body>
        <!--头部留出距顶端距离-->
        <router-view />
    </body>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  letter-spacing: .1rem;
}

body {
  margin-top: 50px;
  padding: 30px;
}

/* CSS Document */
@media (min-width:576px) {
  .container {
    max-width: 570px
  }
}
@media (min-width:768px) {
  .container {
    max-width: 760px
  }
}
@media (min-width:992px) {
  .container {
    max-width: 970px
  }
}
@media (min-width:1200px) {
  .container {
    max-width: 1160px
  }
}

</style>
<script>
import HeaderNav from "@/components/HeaderNav";
export default {
  components: {HeaderNav}
}
</script>