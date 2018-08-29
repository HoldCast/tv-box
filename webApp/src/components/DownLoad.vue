<template>
    <div class="container">
        <div class="header">
            <!--<mt-header fixed title="fixed top"></mt-header>-->
            <mt-header fixed title="影片下载">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
        <div class="content">
            <div class="tab">
                <span @click="switchTab(1)" v-bind:class="{active:loading}">下载中</span>
                <span @click="switchTab(2)" v-bind:class="{active:loaded}">已下载</span>
            </div>
            <div class="line"></div>
            <div class="btn">
                <span>全部暂停</span>
                <span>全部开始</span>
            </div>
            <div class="movie clearfix">
                <div class="img left">
                    <img src="" alt="">
                </div>
                <div class="info left">
                    <div class="name">我不是药神</div>
                    <div>
                        <mt-progress :value="20" :bar-height="5"></mt-progress>
                    </div>
                    <div class="clearfix speed">
                        <span class="left">1.4M/s</span>
                        <span class="right">1.2GB</span>
                    </div>
                    <div class="status">
                        正在下载
                    </div>
                    <div class="btn change-bg">
                        暂停
                    </div>
                </div>
            </div>
            <div class="movie clearfix">
                <div class="img left">
                    <img src="" alt="">
                </div>
            </div>
            <div class="movie clearfix">

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                loading:true,
                loaded:false,
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
            switchTab: function (type) {
                if(type == 1){
                    this.loading = true;
                    this.loaded = false;
                }else{
                    this.loading = false;
                    this.loaded = true;
                }
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
        margin: 2rem 0;
        width:100%;
        .tab{
            width:200px;
            margin:auto;
            text-align: center;
            span{
                font-family: "PingFangSC-Medium";
                margin:3px;
                color:#000;
                padding-bottom:2px;
                font-size: 14px;
            }
            .active{
                font-size: 18px;
                color: #5EAAFE;
                letter-spacing: 0;
                border-bottom: 3px solid #5EAAFE;
            }

        }
        .line{
            margin:8px 0 8px 0;
            border-top: 1px solid #F0F0F0;
        }
        .btn{
            text-align: center;
            >span{
                font-size: 14px;
                display: inline-block;
                height: 28px;
                line-height: 28px;
                color:#000;
                background: #f0f0f0;
                width: 105px;
                border-radius:4px;
                padding: 4px 30px;
                margin:0 5px;
            }
        }
        .movie{
            padding: 8px 0 8px 16px;
            border-bottom: 1px solid #f0f0f0;
            .img{
                background: url("/static/image/movie.png") no-repeat;
                width: 95px;
                background-size: cover;
                height: 140px;
            }
            .info{
                margin-left:10px;
                width:200px;
                .name{
                    color: #000;
                    font-size: 14px;
                    margin-top: 5px;
                }
                .mt-progress{
                    height: 20px;
                }
                .speed{
                    font-size: 13px;
                    color: #999999;
                    margin-top:2px;
                }
                .status{
                    font-size: 13px;
                    color: #ccc;
                    margin-top:5px;
                }
                .btn{
                    margin-top:5px;
                    color: #fff;
                    width: 80px;
                    text-align: center;
                    -webkit-border-radius: 25px;
                    -moz-border-radius: 25px;
                    border-radius: 25px;
                    height:25px;
                    line-height:25px;

                }
            }
        }
        .mt-progress-runway{
            border-radius: 5px !important;
        }
    }
</style>

