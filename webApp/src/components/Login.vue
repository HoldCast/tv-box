<template>
    <div id="logoIn">
        <div class="logo">
            <img src="/static/image/logo@2x.png" alt="">
        </div>
        <div class="login-form">
            <div class="item">
                <i class="icon-user"></i>
                <input type="text" placeholder="请输入账号" v-model="username">
            </div>
            <div class="item">
                <i class="icon-key"></i>
                <input type="password" placeholder="请输入密码" v-model="password">
            </div>
            <div class="item">
                <button class="change-bg" @click="login">登 录</button>
            </div>
        </div>
    </div>
</template>
<script>
    import { Toast } from 'mint-ui';
    export default {
        name: 'HelloWorld',
        data() {
            return {
                username: '2018081400004',
                password: '819302',

            }
        },
        methods: {
            login: function () {
                //http://stbox-api.niiick.com/card/login
                //this.$router.push('/home');
                var url = '/login/card/login';
                this.$axios.post(
                    url,
                    this.$qs.stringify({
                        cardnumber: this.username,
                        password: this.password,
                        deviceid: '007'
                    }),
                    {
                        headers: {
                            Authentication:'appid=STB-2,account=BEMUU-H5,skey=NDg5MDA1NzUxMzE0MzVkZjZmMGE2Y2NlMDU4YjUxMzVhNjQ3Y2RjNTg4NzVhZjVkMjc1NWUzYjkxNzNiOTM1MA==,nonce=123456,created=1430219361',
                        }
                    }
                ).then((res) => {
                    var data = res.data;
                    if(data.code === 0){
                        localStorage.setItem('userInfo',JSON.stringify(data.data));
                        this.$router.push('/home');
                    }else{
                        Toast({
                            message: data.msg
                        });
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped rel="stylesheet/scss">
    .logo {
        margin-top: 3rem;
        img {
            width: 35%;
        }
        text-align: center;
    }
    .login-form {
        margin-top: 3rem;
        .item{
            width:12rem;
            margin:0.6rem auto;
            position: relative;
            box-sizing: border-box;
            i{
                position: absolute;
                left:0;
                bottom: 0.2rem;
                color:#DFDFDF;
                font-size: .7rem;
            }
            input{
                box-sizing: border-box;
                font-size: .6rem;
                padding:.2rem 1rem;
                width: 100%;
                outline: 0;
                border:0;
                border-bottom: 0.04rem #F0F0F0 solid;
                &::placeholder{
                    color: #ccc;
                    font-size: .5rem;
                }
            }
            button{
                margin-top: 0.6rem;
                height: 2rem;
                width: 100%;
                border-radius: 2rem;
                color:#FAFAFA;
                font-size: 0.9rem;
                box-shadow: 0 0.16rem 0.24rem 0 rgba(33,35,38,0.12);
                /*display: block;
                 */
            }
        }
    }
    .login-form2 {
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

