<template>
    <div class="container">
        <div class="header">
            <mt-header fixed title="影片详情">
                <router-link to="-1" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
        <div class="content">
            <div class="movie-info clearfix">
                <div class="img left">
                    <img src="/static/image/movie.png" alt="">
                </div>
                <div class="info left">
                    <div class="item">
                        <span class="name">战狼2 </span>
                    </div>
                    <div class="item">
                        <span class="star">
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="grade">9.5</i>
                        </span>
                    </div>
                    <div class="item">
                        <span class="pre">年份：</span>
                        <span class="val">2017年</span>
                    </div>
                    <div class="item">
                        <span class="pre">地区：</span>
                        <span class="val">中国大陆</span>
                    </div>
                    <div class="item">
                        <span class="pre">导演：</span>
                        <span class="val">吴京</span>
                    </div>
                    <div class="item">
                        <span class="pre">年份：</span>
                        <span class="val">2017年</span>
                    </div>
                    <div class="item">
                        <span class="pre">演员：</span>
                        <span class="val">吴京、余男、斯科特·阿金斯、Kevin Lee、倪大红</span>
                    </div>
                </div>
            </div>
            <div class="btn">
                <span class="change-bg btn-span">
                    下 载
                </span>
            </div>

            <div class="btn">
                <span class="change-bg2 btn-span">
                    下载中
                </span>
            </div>
            <div class="details">
                <div class="title">
                    影片简介：
                </div>
                <p>
                    被开除军籍的冷锋（吴京饰演）本是因找寻龙小云（余男饰演）来到非洲，但是却突然被卷入一场非洲国家的叛乱。因为国家之间政治立场的关系，中国军队无法在非洲实行武装行动撤离华侨。而作为退伍老兵的冷锋无法忘记曾经为军人的使命，本来可以安全撤离的他毅然决然地回到了沦陷区，孤身一人带领身陷屠杀中的同胞和难民，展开生死逃亡。随着斗争的持续，体内的狼性逐渐复苏，最终闯入战乱区域，为同胞而战斗。
                </p>
            </div>
        </div>
    </div>
</template>
<script>
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
        width: 13.5rem;
        .movie-info{
            .img{
                width: 5rem;
                margin-right: .35rem;
                img{
                    width: 100%;
                }
            }
            .info{
                color:#1A1A1A;
                width: 8rem;
                .item{
                    margin-top: .10rem;
                    font-size:.5rem;
                    .name{
                        font-size: .6rem;
                        font-weight: bold;
                        margin-right: .2rem;
                    }
                }
            }
        }
        .btn{
            margin-top: .8rem;
            .btn-span{
                display: inline-block;
                height: 44px;
                line-height: 44px;
                border-radius: 22px;
                width: 100%;
                margin:auto;
                color: #fafafa;
                font-size: 0.8rem;
                text-align: center;
            }
        }
        .details{
            margin-top: 0.8rem;
            font-size: .55rem;
            .title{
                font-size: 12px;
                color:#999;
                margin-bottom: .2rem;
            }
            p{
                font-family: PingFangSC-Regular;
                font-size: 13px;
                color: #1A1A1A;
                letter-spacing: 0;
                line-height: 20px;
                text-indent: 1rem;
            }
        }
    }
</style>

