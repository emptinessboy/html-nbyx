<template>
  <b-container>
    <div>
      <b-navbar class="navbar-expand-lg fixed-top" toggleable="lg" type="dark" variant="dark">
        <!-- fixed-top 置顶，宽度100% -->
        <b-container class="d-flex justify-content-between text-left">
          <!--justify-content-between可以让导航栏元素居中（类似电脑端两侧加padding的效果，之前我还以为要一个个分辨率媒体查询）-->
          <b-navbar-brand to="/">
            <img src="../assets/logo.png" alt="logo" style="width:40px;">
            <strong>&nbsp;NingBo&nbsp;</strong>
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <!--汉堡菜单-->

          <b-collapse id="nav-collapse" is-nav>
            <!-- 具体的导航项目 -->
            <b-navbar-nav>
              <b-nav-item href="#" active>东门口</b-nav-item>
              <b-nav-item href="#">三江口</b-nav-item>
              <b-nav-item href="#">月湖</b-nav-item>
              <b-nav-item href="#">东钱湖</b-nav-item>
              <b-nav-item href="#">南塘</b-nav-item>
              <b-nav-item href="#">外滩</b-nav-item>
              <b-nav-item-dropdown text="关于" right>
                <b-dropdown-item href="#">注册</b-dropdown-item>
                <b-dropdown-item href="#">登录</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-form class="form-inline my-2 my-lg-0" action="https://www.baidu.com/s" mothod="get">
                <b-form-input class="mr-sm-2 ml-1" placeholder="宁波" value="宁波" name="wd"></b-form-input>
                <b-button variant="outline-success" class="ml-1 my-2 my-sm-0" type="submit">搜索</b-button>
                <!--boot-vue使用variant属性-->
              </b-form>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "HeaderNav"
}
</script>

<style scoped>
.navbar-nav{
  letter-spacing: .05rem;
}
.navbar-nav li {
  margin-right: .1rem;
  margin-left: .3rem
}
</style>