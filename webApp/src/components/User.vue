<template>
    <div class="container">
        <div class="header">
            <!--<mt-header fixed title="fixed top"></mt-header>-->
            <mt-header fixed title="我的">
                <router-link to="/home" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
        <div class="content">
            <div class="item user">
                <span class="pre">会员用户</span>
                <span>
                    {{userInfo.cardnumber}}
                </span>
            </div>
            <div class="item time">
                <span class="pre">激活时间: </span>
                <span>
                    {{userInfo.activetimedesc}}
                </span>
            </div>
            <div class="item time">
                <span class="pre">到期时间: </span>
                <span>
                    {{userInfo.overtimedesc}}
                </span>
            </div>
            <div class="line"></div>
            <div class="item logout">
                <div @click="logoutConfirm" size="small" class="btn change-bg" type="primary" plain>
                    <i class="icon-off"></i>
                    退出登录
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { MessageBox } from 'mint-ui';
    export default {
        name: 'HelloWorld',
        data () {
            return {
                userInfo: JSON.parse(localStorage.getItem('userInfo')),
                selected: '1',
                selected2: '22',
                moveData: [1,2,3,4,5,6,7,8,9,10],
                tabsName: [{
                    name: "HTML",
                    isActive: true
                }, {
                    name: "CSS",
                    isActive: false
                }, {
                    name: "Vue",
                    isActive: false
                }],
            }
        },
        mounted(){
           //this.getMovieType();
            console.log(this.userInfo);
        },
        methods: {
            logoutConfirm: function () {
                MessageBox.confirm('确定退出登录吗?').then(action => {
                    this.$router.push('/login')
                });
            },
            tabsSwitch: function(tabIndex) {
                /*var tabCardCollection = document.querySelectorAll(".tab-card"),
                    len = tabCardCollection.length;

                for(var i = 0; i < len; i++) {
                    tabCardCollection[i].style.display = "none";
                    this.tabsName[i].isActive = false;
                }*/
                for(var i = 0; i < this.tabsName.length; i++) {
                    //tabCardCollection[i].style.display = "none";
                    this.tabsName[i].isActive = false;
                }
                this.tabsName[tabIndex].isActive = true;
                //tabCardCollection[tabIndex].style.display = "block";
            },
            getMovieType: function(){
                var url = 'http://yousdk.com:12000/api/cinema/channel/category/?channel=1';
                this.$axios.post(url).then((res) => {
                    console.log(res.data);
                }).catch(function (error) {
                    console.log(error);
                });
            }

        }
    }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
    /*
    width: 375 / 15

    1rem = 25px
    1px == 0.04 rem
    */
    .content{
        width:13.5rem;
        margin-top: 6rem;
        .item{
            text-align: center;
        }
        .user{
            font-family: PingFangSC-Medium;
            color: #1A1A1A;
            letter-spacing: .5px;
            margin-bottom: .5rem;
            font-size: 18px;
            font-weight: bold;
        }
        .time{
            color:#999;
            font-size: .55rem;
        }
        .line{
            height: .04rem;
            width:100%;
            margin: 1rem auto;
            background-image: linear-gradient(-270deg, rgba(200,215,255,0.00) 0%, #BECDFF 53%, rgba(151,174,255,0.00) 100%);
        }
        .logout{

            text-align: center;
            .btn{
                width:100%;
                font-family: PingFangSC-Medium;
                font-size: 0.9rem;
                color: #FAFAFA;
                letter-spacing: 1.67px;
                height:2rem;
                line-height:2rem;
                border-radius: 1rem;
                box-shadow: 0 4px 6px 0 rgba(33,35,38,0.12);
            }
        }
    }
</style>

