<template>
    <div class="container">
        <div class="header">
            <!--<mt-header fixed title="fixed top"></mt-header>-->
            <mt-header fixed title="个人中心">
                <router-link to="/home" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
        <div class="content">
            <div class="item user">
                <span class="pre">会员用户: </span>
                <span>
                    201700001
                </span>
            </div>
            <div class="item time">
                <span class="pre">到期时间: </span>
                <span>
                    2018年9月25日
                </span>
            </div>
            <div class="item logout">
                <mt-button @click="logoutConfirm" size="small" class="btn" type="primary" plain>
                    <i class="icon-off"></i>
                    退出登录
                </mt-button>
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
        .item{

        }
        .user{
            margin-top: 1rem;
            font-size: .8rem;
        }
        .time{
            margin-top: 0.5rem;
            font-size: .6rem;
        }
        .logout{
            margin-top: 1rem;
            text-align: center;
            .btn{
                width:100%;
            }
        }
    }
</style>

