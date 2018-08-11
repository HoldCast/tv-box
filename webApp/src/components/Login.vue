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
        <div class="foot-btn">
            <mt-button @click="login" class="btn" type="primary">登 录</mt-button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                username: '',
                email: ''
            }
        },
        methods: {
            login: function () {
                this.$router.push('/home');
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped rel="stylesheet/scss">
    .logo {
        margin-top: 1rem;
        img {
            width: 35%;
        }
        text-align: center;
    }

    .login-form {
        text-align: center;
        margin: 15% auto;
        width: 100%;
    }

    .foot-btn {
        .btn{
            width:100%;
        }
        text-align: center;
        margin:auto;
        width: 12rem;
    }
</style>

