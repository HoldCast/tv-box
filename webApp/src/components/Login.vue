<template>
  <div id="logoIn">
    <div class="logo">
      <img src="../assets/logo.png" alt="">
    </div>
    <div class="login-form">
      <mt-field label="账号" placeholder="请输入账号" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="email"></mt-field>
      <div class="tips"></div>
    </div>
    <mt-button class="login-btn" type="primary" >登 录</mt-button>


  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        username:'',
        email: ''
      }
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped rel="stylesheet/scss" >
  .logo{
    margin-top:25%;
    img{
      width:35%;
    }
    text-align: center;
  }
  .login-form{
    margin: 15% auto;
    width: 100%;
  }
  .login-btn{
    width:90%;
  }
</style>

