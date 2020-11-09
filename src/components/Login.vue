<template>
  <!--登陆form组件（修改自bootstrap官方example）-->
  <div class="login-form w-100 col-md-5 d-flex justify-content-between">

    <b-form @submit="onSubmit" @reset="onReset" class="form-signin">
      <div class="text-center text-light my-5">
        <!--头部也可以放图片 <img class="mb-4" src="" alt="" width="72" height="72">-->
        <h1 class="h3 mb-3 font-weight-bold">现在登录</h1>
      </div>
      <b-form-group
          class="form-label-group"
      >
        <!--description="我们不会透露您的邮箱地址！"-->
        <b-form-input
            class="form-control"
            id="inputEmail"
            v-model="loginform.email"
            type="email"
            required
            placeholder="Enter email"
        ></b-form-input>
        <label>邮箱地址：</label>
      </b-form-group>

      <b-form-group class="form-label-group">
        <b-form-input
            id="inputPassword"
            v-model="loginform.pass"
            type="password"
            required
            placeholder="Enter passwrod"
        ></b-form-input>
        <label>您的密码：</label>
      </b-form-group>


      <b-form-checkbox
          class="mb-3 text-light"
          id="checkbox-remenberme"
          v-model="loginform.checkboxstatus"
          name="checkbox-remenberme"
          value="yes"
          unchecked-value="no"
      >
        记住我
      </b-form-checkbox>

      <b-button class="btn-lg btn-primary btn-block mb-3 mt-4" type="submit">登 录</b-button>
      <router-link :to="{path:'/user/reg'}" class="btn btn-lg btn-secondary btn-block" role="button">注 册</router-link>
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
  name: "Login",
  data() {
    return {
      loginform: {
        email: '',
        pass: '',
        checkboxstatus: 'no',
        // 多选框时使用
        // checked: []
      }
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.loginform))
    },
    onReset(evt) {
      // evt.preventDefault()
      // // Reset our form values
      // this.form.email = ''
    }
  },
  watch: {
    'loginform.checkboxstatus':{
      handler(){
        console.log("是否记住用户？ " + this.loginform.checkboxstatus)
      }
    }
  }
}
</script>

<style scoped>

</style>