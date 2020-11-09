<template>
  <div>
    <div class="login-reg">
      <div class="login row mt-login min-vh-100">
        <user-carousel :carousel="carousel" v-if="carousel.length != null"></user-carousel>
        <login v-if="$route.path == '/user/login'"></login>
        <reg v-if="$route.path == '/user/reg'"></reg>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import FooterBar from "@/components/FooterBar";
import UserCarousel from "@/components/UserCarousel";
import axios from "axios";
import Login from "@/components/Login";
import Reg from "@/components/Reg";

export default {
  name: "User",
  components: {Reg, Login, UserCarousel, FooterBar},
  data() {
    return {
      carousel: {}
    };
  },
  created() {
    let that = this;
    axios.get("/static/user.json").then(response => {
      that.carousel = response.data.carousel;
    });
  }
}
</script>

<!--suppress CssInvalidPseudoSelector -->
<style>
.login-reg{
  margin-top: -4rem;
}
@media (min-width: 768px) {
  /* 登陆界面图片轮播适应宽度 电脑版 */
  .login .carousel-inner img, .login .carousel-item img {
    /* height:100%   width: auto;貌似有问题*/
    height: 100vh !important;
    /*占满屏幕高度*/
    width: auto;
  }

  .login .login-form {
    /*电脑版消除左侧轮播导致的向右偏移*/
    /*    width: 100%;*/
    margin-left: -7.5px;
  }
}

/*去除登录页面左右宽度异常问题*/
/*这是因为bootstrap的row会自动添加左右-15px的margin*/
.login-reg .row {
  margin-right: 0px !important;
  /*  margin-left: 0px !important;*/
}

@media (max-width: 768px) {
  .login-reg .row {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }
}

.mt-login {
  /*登录界面的导航条不再默认保留下间距*/
  margin-top: 0rem;
}

.login .btn-primary {
  color: rgb(255, 255, 255);
  background-color: mediumpurple;
  border-color: mediumpurple;
}

/*登录表单相关，copy自biitstrap表单组件*/
.form-signin {
  width: 100%;
  max-width: 420px;
  padding: 15px;
  margin: auto;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group input, .form-label-group label {
  height: 3.125rem;
  padding: .75rem;
}

.form-label-group label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0; /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  pointer-events: none;
  cursor: text; /* Match the input under the label */
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:-moz-placeholder-shown) {
  padding-top: 1.25rem;
  padding-bottom: .25rem;
}

.form-label-group input:not(:-ms-input-placeholder) {
  padding-top: 1.25rem;
  padding-bottom: .25rem;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: 1.25rem;
  padding-bottom: .25rem;
}

.form-label-group input:not(:-moz-placeholder-shown) ~ label {
  padding-top: .25rem;
  padding-bottom: .25rem;
  font-size: 12px;
  color: #777;
}

.form-label-group input:not(:-ms-input-placeholder) ~ label {
  padding-top: .25rem;
  padding-bottom: .25rem;
  font-size: 12px;
  color: #777;
}

.form-label-group input:not(:placeholder-shown) ~ label {
  padding-top: .25rem;
  padding-bottom: .25rem;
  font-size: 12px;
  color: #777;
}

/* Fallback for Edge
-------------------------------------------------- */
@supports (-ms-ime-align: auto) {
  .form-label-group {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
  }

  .form-label-group label {
    position: static;
  }

  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}
</style>