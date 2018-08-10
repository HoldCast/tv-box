<template>
    <div class="container">
        <div class="header">
            <!--<mt-header fixed title="fixed top"></mt-header>-->
            <mt-header fixed title="下载中心">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
        <div class="content">
            <div class="btn">
                <mt-button size="small" type="default">全部暂停</mt-button>
                <!--<mt-button type="default">全部开始</mt-button>-->
                <mt-button size="small" type="default">编辑</mt-button>
            </div>
            <div class="down-info">
                <div class="item clearfix">
                    <img src="/static/image/img-default.png" alt="">
                    <div class="info">
                        <div class="name">急速蜗牛</div>
                        <div class="process"></div>
                        <div class="state"></div>
                        <div class="handle">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                selected: '1',
                selected2: '22',
                moveData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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
        mounted() {
            this.getMovieType();
        },
        methods: {
            tabsSwitch: function (tabIndex) {
                /*var tabCardCollection = document.querySelectorAll(".tab-card"),
                    len = tabCardCollection.length;

                for(var i = 0; i < len; i++) {
                    tabCardCollection[i].style.display = "none";
                    this.tabsName[i].isActive = false;
                }*/
                for (var i = 0; i < this.tabsName.length; i++) {
                    //tabCardCollection[i].style.display = "none";
                    this.tabsName[i].isActive = false;
                }
                this.tabsName[tabIndex].isActive = true;
                //tabCardCollection[tabIndex].style.display = "block";
            },
            getMovieType: function () {
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
    .content {
        width: 13rem;
        margin: 55px auto 0;
        .btn {
            text-align: center;
            margin-top: .5rem;
            .mint-button {
                width: 45%;
                margin: 0 .2rem;
            }
        }
        .details {
            margin-top: 1rem;
            font-size: .55rem;
        }
    }
</style>

