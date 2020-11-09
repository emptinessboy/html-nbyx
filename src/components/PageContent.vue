<template>
  <b-container class="passage jumbotron px-0 pt-0 bg-dark text-light">
    <!--暗色的阅读背景-->
    <div class="page-bg mx-0 px-0" :style="imgstyle">
      <!--背景图片容器page-bg类来设置背景，左右边距消除-->
      <div class="h-100 w-100 mx-0 d-flex d-flex align-items-center" style="background: rgba(0,0,0,.4)">
        <!--灰度遮罩容器-->
        <div class="text-left text-light mx-5 px-1 pt-5">
          <h1 class="mt-1 display-4 font-weight-bold font">&gt; {{ data.title }}</h1>
          <!--主标题-->
          <p class="dropdown-divider"></p>
          <!--分割线-->
          <h2>{{ data.subtitle }}</h2>
          <!--副标题-->
        </div>
      </div>
    </div>
    <div class="main-passage mx-5 mt-5 mb-3">
      <!--存放正文内容的div-->
      <h4 v-if="data.pagetitle != null">{{data.pagetitle}}</h4>
      <blockquote v-html="data.bq">
        {{ data.bq }}
      </blockquote>
      <div v-html="data.content">
        {{ data.content }}
      </div>
      <!--存放正文内容的div结束-->
    </div>
  </b-container>
</template>

<script>
import axios from "axios";

export default {
  name: "PageContent",
  props: ['path'],
  data() {
    return {
      data: {},
      imgstyle: "",
      content: {},
      title : "",
    };
  },
  created() {
    let that = this;
    axios.get("/static/page-content.json").then(response => {
      that.data = response.data;
      let index;
      for (index in that.data) {
        if (that.data[index].to == that.path) {
          console.log("成功加载正文");
          that.data = that.data[index];
          that.imgstyle = "background: url('" + that.data.img + "') center;background-size: 100% auto;"
          break;
        } else {
          //
        }
      }
      //动态标题
      document.title = that.data.title+' | 宁波印象BOOT-VUE3.0'
    });
  }
};
</script>

<style>
/*以下是正文排版部分css*/
.page-bg {
  height: 300px;
  background-size: 100% auto;
}

.main-passage p {
  font-size: .95rem;
  /*正文字体*/
  margin: 1.5rem 0 1.5rem 0;
  letter-spacing: .2rem;
}

.main-passage img {
  max-width: 100%;
  height: auto;
  /*高度超过500px的图片会被强制缩小*/
  max-height: 500px;
}

blockquote {
  background-color: #2C2C2C;
  padding: 0.2rem 0.5rem 0.2rem 1rem;
  margin: 1.5rem 0 0.8rem -.2rem;
  border-left: .5rem solid #454545;
}

/*小尺寸设备优化*/
.passage h2 {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .passage .ml-5, .passage .mx-5 {
    margin-left: 1rem !important;
  }

  .passage .mr-5, .passage .mx-5 {
    margin-right: 1rem !important;
  }

  .passage .display-4 {
    font-size: 2rem;
  }

  .passage h1 {
    font-size: 2rem;
  }

  .passage h2 {
    font-size: 1.2rem !important;
  }

  .main-passage p {
    font-size: .85rem !important;
    /*正文字体移动版*/
  }
}
</style>