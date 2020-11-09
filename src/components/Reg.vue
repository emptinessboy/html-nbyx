<template>
  <!--登陆form组件（修改自bootstrap官方example）-->
  <div class="login-form w-100 col-md-5 d-flex justify-content-between">

    <b-form @submit="onSubmit" @reset="onReset" class="form-signin">
      <div class="text-center text-light my-5">
        <!--头部也可以放图片 <img class="mb-4" src="" alt="" width="72" height="72">-->
        <h1 class="h3 mb-3 font-weight-bold">立刻注册</h1>
      </div>
      <b-form-group
          class="form-label-group"
          description="我们不会透露您的邮箱地址！"
      >

        <b-form-input
            class="form-control"
            id="inputEmail"
            v-model="regform.email"
            type="email"
            required
            placeholder="Enter email"
        ></b-form-input>
        <label>邮箱地址：</label>
      </b-form-group>

      <b-form-group class="form-label-group mb-0">
        <b-form-input
            id="inputPassword"
            v-model="regform.pass"
            type="password"
            required
            placeholder="Enter passwrod"
        ></b-form-input>
        <label>您的密码：</label>
      </b-form-group>

      <b-form-group id="confirm" class="form-label-group mt-0" :description="confrimalert">
        <b-form-input
            id="inputPassword"
            v-model="regform.passconfrim"
            type="password"
            required
            placeholder="Enter passwrod"
        ></b-form-input>
        <label>确认密码：</label>
      </b-form-group>


      <b-button class="btn-lg btn-primary btn-block mb-3 mt-4" type="submit" :disabled="notconfrimed">立刻注册</b-button>
      <router-link :to="{path:'/user/login'}" class="btn btn-lg btn-secondary btn-block" role="button">返回登录
      </router-link>
      <p class="mt-5 mb-3 text-muted text-right"><a class="text-light" href="#">忘了密码 ？</a></p>

    </b-form>

    <!--调试用-->
    <!--<b-card class="mt-3" header="Form Data Result">-->
    <!--<pre class="m-0">{{ form }}</pre>-->
    <!--</b-card>-->

  </div>
</template>

<script>
export default {
  name: "Reg",
  data() {
    return {
      confrimalert: "",
      notconfrimed: false,
      regform: {
        email: '',
        pass: '',
        passconfrim: '',
        // 多选框时使用
        // checked: []
      }
    }
  },
  created() {
    document.title = '注册 | 宁波印象BOOT-VUE3.0'
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.regform))
    },
    onReset(evt) {
      // evt.preventDefault()
      // // Reset our form values
      // this.form.email = ''
    }
  },
  watch: {
    //监控对象
    'regform.passconfrim': {
      handler: function () {
        if (this.regform.pass != this.regform.passconfrim) {
          console.log("两次密码不一致");
          this.confrimalert = "两次密码不一致！";
          this.notconfrimed = true;
        } else {
          this.confrimalert = "";
          this.notconfrimed = false;
        }
      },
    }
  }
}
</script>

<style>
#confirm small {
  color: #fff !important;
}
</style>