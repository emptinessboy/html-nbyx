<template>
  <b-container class="window">
    <div class="my-0 row align-text-bottom">
      <!--row里的居中比较复杂-->
      <!--相比较第一版，改变div的透明度，这里使用了添加遮罩的方式，更好的实现鼠标悬停的变暗效果-->
      <div class="window-square dmk col-md-5 col-5 px-0" :style="windowsquare1">
        <a href="./dongmenkou.html" class="mask text-light my-0 mx-0 d-flex align-items-center">
          <!--d-flex 弹性盒子布局 align-items-center 垂直居中-->
          <!--这里是一个遮罩加超链接，鼠标移动后mack由全透明变成半透明-->
          <span class="text-center m-auto">
          <!-- m-auto水平居中-->
          <h4><strong>东门口</strong></h4>
          <p>老宁波的印象</p>
          </span> </a></div>
      <div class="window-square sjk col-md-4 col-7 px-0" :style="windowsquare2">
        <a href="./sanjiangkou.html" class="mask text-light my-0 mx-0 d-flex align-items-center">
          <span class="text-center m-auto">
          <h4><strong>三江口</strong></h4>
          <p>夜景很美的地方</p>
          </span> </a></div>
      <div class="window-square yh col-md-3 col-7 px-0" :style="windowsquare3">
        <a href="./yuehu.html" class="mask text-light my-0 mx-0 d-flex align-items-center">
          <span class="text-center m-auto">
          <h4><strong>月湖</strong></h4>
          <p>这里是我的高中，宁波二中</p>
          </span> </a></div>
      <div class="window-square dqh col-md-3 col-5 px-0" :style="windowsquare4">
        <a href="./dongqianhu.html" class="mask text-light my-0 mx-0 d-flex align-items-center">
          <span class="text-center m-auto">
          <h4><strong>东钱湖</strong></h4>
          <p>周末休闲胜地</p>
          </span> </a></div>
      <div class="window-square nt col-md-3 col-5 px-0" :style="windowsquare5">
        <a href="./nantang.html" class="mask text-light my-0 mx-0 d-flex align-items-center">
          <span class="text-center m-auto">
          <h4><strong>南塘老街</strong></h4>
          <p>城中的幽静之地</p>
          </span> </a></div>
      <div class="window-square lwt col-md-6 col-7 px-0" :style="windowsquare6">
        <a href="./laowaitan.html" class="mask text-light my-0 mx-0 d-flex align-items-center">
          <span class="text-center m-auto">
          <h4><strong>老外滩</strong></h4>
          <p>酒吧夜生活一条街</p>
          </span> </a></div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "HomePic",
  data() {
    return {
      windowsquare1: {
        background: "url(" + require("../assets/images/dmk.jpg") + ")" + "center",
      },
      windowsquare2: {
        background: "url(" + require("../assets/images/sjk.jpg") + ")" + "center",
      },
      windowsquare3: {
        background: "url(" + require("../assets/images/nbez.jpg") + ")" + "center",
      },
      windowsquare4: {
        background: "url(" + require("../assets/images/dqh.jpg") + ")" + "center",
      },
      windowsquare5: {
        background: "url(" + require("../assets/images/ntlj.jpg") + ")" + "center",
      },
      windowsquare6: {
        background: "url(" + require("../assets/images/lwt.jpg") + ")" + "center",
      }
    }
  }
}
</script>

<style scoped>
.window {
  margin-bottom: 4rem;
}

/*row*/
.window-square {
  background-color: #000;
  /*这个设置没啥意义*/
}

@media (max-width: 768px) {
  .row .window-square {
    height: 260px !important;
  }

  .dmk {
    margin: 0rem .125rem .125rem -.125rem;
  }

  .sjk {
    margin: 0rem -.125rem .125rem .125rem;
  }

  .yh {
    margin: 0rem .125rem .125rem -.125rem;
  }

  .dqh {
    margin: 0rem -.125rem .125rem .125rem;
  }

  .nt {
    margin: 0rem .125rem .125rem -.125rem;
  }

  .lwt {
    margin: 0rem -.125rem .125rem .125rem;
  }
}

@media (min-width: 768px) {
  .row .window-square {
    height: 396px;
  }

  .window {
    margin-top: 4rem;
  }

  .dmk {
    margin: 0 .25rem .25rem -.5rem;
  }

  .sjk {
    margin: 0 .25rem .25rem .25rem;
  }

  .yh {
    margin: 0rem -.5rem .25rem .25rem;
  }

  .dqh {
    margin: .25rem .25rem .25rem -.5rem;
  }

  .nt {
    margin: .25rem .25rem .25rem .25rem;
  }

  .lwt {
    margin: .25rem -.5rem .25rem .25rem;
  }
}

@media (max-width: 768px) {
  .window {
    margin-top: 4rem !important;
    margin-bottom: 4rem !important;
  }
}

/*手机版去除头尾部部空白*/
@media (max-width: 576px) {
  .window {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
}

.window-square {
  /*响应式变换动画*/
  transition: all 0.8s;
}

a:hover {
  /*鼠标悬停变灰*/
  /*opacity: 1;*/
  background-color: rgba(0, 0, 0, .5);
  text-decoration: none;
  /*去除超链接下划线*/
}

a {
  transition: all 0.8s;
}
</style>

<style>
/*鼠标悬停特效延时*/
.window .mask {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  opacity: 1;
  top: 0;
  left: 0;
}

.window .mask .text-center {
  opacity: 1;
}
</style>