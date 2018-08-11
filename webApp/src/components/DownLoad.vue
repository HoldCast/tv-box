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
                <mt-button class="first" size="small" type="primary" plain>全部暂停</mt-button>
                <mt-button size="small" type="primary" plain>编辑</mt-button>
            </div>
            <div class="btn2">
                <mt-button class="first" size="small" type="primary" plain>删除</mt-button>
                <mt-button class="first" size="small" type="primary" plain>全选</mt-button>
                <mt-button size="small" type="primary" plain>取消</mt-button>
            </div>
            <div class="down-info">
                <div class="item clearfix">
                    <img class="left" src="/static/image/img-default.png" alt="">
                    <div class="info left">
                        <div class="name">急速蜗牛</div>
                        <div class="process">
                            <mt-progress type="danger" :value="80"></mt-progress>
                        </div>
                        <div class="speed clearfix">
                            <div class="left">
                                256 kB/s
                            </div>
                            <div class="right">
                                186.5 M
                            </div>
                        </div>
                        <div class="status">
                            正在下载
                        </div>
                        <div class="handle">
                            <mt-button size="small" type="primary" plain>暂停</mt-button>
                        </div>
                    </div>
                </div>
                <div class="item clearfix">
                    <div class="select left">
                        <i class="icon-ok-circle"></i>
                    </div>
                    <img class="left" src="/static/image/img-default.png" alt="">
                    <div class="info left">
                        <div class="name">急速蜗牛</div>
                        <div class="process">
                            <mt-progress type="danger" :value="80"></mt-progress>
                        </div>
                        <div class="speed clearfix">
                            <div class="left">
                                256 kB/s
                            </div>
                            <div class="right">
                                186.5 M
                            </div>
                        </div>
                        <div class="status">
                            正在下载
                        </div>
                        <div class="handle">
                            <mt-button size="small" type="primary" plain>暂停</mt-button>
                        </div>
                    </div>
                </div>
                <div class="item clearfix">
                    <div class="select left">
                        <i class="icon-ok-sign"></i>
                    </div>
                    <img class="left" src="/static/image/img-default.png" alt="">
                    <div class="info left">
                        <div class="name">急速蜗牛</div>
                        <div class="process">
                            <mt-progress type="danger" :value="80"></mt-progress>
                        </div>
                        <div class="speed clearfix">
                            <div class="left">
                                256 kB/s
                            </div>
                            <div class="right">
                                186.5 M
                            </div>
                        </div>
                        <div class="status">
                            正在下载
                        </div>
                        <div class="handle">
                            <mt-button size="small" type="primary" plain>暂停</mt-button>
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
            //this.getMovieType();
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
        .btn {
            .mint-button {
                width: 6.5rem;
            }
            .mint-button.first{
                margin-right:0.3rem;
            }
        }
        .btn2 {
            .mint-button {
                width: 4.2rem;
            }
            .mint-button.first{
                margin-right:0.28rem;
            }
        }
        .down-info {

            .item{
                margin-top: 0.5rem;
                padding-bottom: .5rem;
                border-bottom:1px solid #ccc;
                .select{
                    width: 1rem;
                    margin-top: 1.5rem;
                    margin-right: .2rem;
                    font-size: 1rem;
                    i.icon-ok-sign{
                        color: #CCCCCC;
                    }
                    i.icon-ok-circle{
                        color: #27a2ff;
                    }

                }
                img{
                    width: 3.5rem;
                    margin-right: .6rem;
                }
                .info{
                    margin-top: .2rem;
                    width: 8rem;
                    .name{
                        font-size: 0.6rem;
                        font-weight: bold;
                    }
                    .mt-progress{
                        height: 0.5rem;
                    }
                    .status{
                        margin-top: .5rem;
                        color: #626262;
                    }
                    .handle{
                        margin-top: 0.2rem;
                        .mint-button{
                            height: 1rem;
                            line-height: 1rem;
                            width: 3rem;
                            font-size: .5rem;
                            padding: 0 .5rem;
                        }
                    }
                }
            }

        }
    }
</style>

