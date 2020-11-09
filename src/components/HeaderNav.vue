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
              <!--数据来自/static/page-nav.json-->
              <b-nav-item v-for="(page,index) in pages"
                          :key="index"
                          :to="page.to"
                          :active="isActive(page.to)">
                {{ page.name }}
              </b-nav-item>
              <!--下面这种写法会报错 ESLint: The "pages' variable inside 'v-for' directive should be replaced with a computed property that returns filtered array instead. You should not mix 'v-for' with 'v-if'. (vue/no-use-v-if-with-v-for)-->
              <!--<b-nav-item  v-for="(page,index) in pages" :key="index" :to="page.to"-->
              <!--             v-if="$route.path == page.to" active>{{index}}{{ page.name }}</b-nav-item>-->
              <!--&lt;!&ndash;遍历从服务器收到的json中的名称和url&ndash;&gt;-->
              <!--<b-nav-item  :to="page.to" v-else>{{index}}{{ page.name }}</b-nav-item>-->
              <!--&lt;!&ndash;vif用于控制是否高亮显示&ndash;&gt;-->
              <b-nav-item-dropdown text="关于" right>
                <b-dropdown-item :to="{path:'/user/login'}">登录</b-dropdown-item>
                <b-dropdown-item :to="{path:'/user/reg'}">注册</b-dropdown-item>
                <!-- 分割线 -->
                <div class="dropdown-divider"></div>
                <b-dropdown-item href="https://huxiaofan.com/about/">关于我</b-dropdown-item>
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
import axios from 'axios'

export default {
  name: "HeaderNav",
  data() {
    return {
      pages: {}
    }
  },
  created() {
    let that = this
    // 在Vue中this始终指向Vue，但axios中this为undefined
    // 通过 let that = this
    // 将this保存在that中，再在函数中使用that均可
    axios.get('/static/page-nav.json').then(response => {
      that.pages = response.data
    }).finally(function () {
      let page;
      for (page in that.pages) {
        console.log(that.pages[page].name + " ==> " + that.pages[page].to)
      }
    })
  },
  mounted() {
  },
  computed: {},
  methods: {
    isActive(pagepath) {
      // console.log(pagepath)
      // console.log("routepath ==> " + this.$route.path)
      if (this.$route.path == pagepath) {
        return true
      } else {
        return false
      }
    }
    // 判断当前nav是否已经激活
  }
}
</script>

<style scoped>
.navbar-nav {
  letter-spacing: .05rem;
}

.navbar-nav li {
  margin-right: .1rem;
  margin-left: .4rem
}
</style>