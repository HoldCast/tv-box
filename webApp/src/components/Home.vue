<template>
    <div class="container">
        <div class="header">
            <!--<mt-header fixed title="fixed top"></mt-header>-->
            <mt-header fixed title="VESS家庭点播">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
        <div class="top"></div>
        <div class="search change-bg">
            <i class="icon-search"></i>
            <input type="text" v-model="keywords" class="search-input" placeholder="搜索影片名称">
            <span class="filter">
                <i class="icon-filter"></i>
                筛选
            </span>
        </div>
        <div class="filter-type">
            <div class="item clearfix">
                <div class="pre left">类型:</div>
                <div class="val left">
                    <span class="active type-item">全部</span>
                    <span class="type-item">剧情</span>
                    <span class="type-item">剧情</span>
                    <span class="type-item">剧情</span>
                    <span class="type-item">剧情</span>
                    <span class="type-item">剧情</span>
                    <span class="type-item">剧情</span>
                </div>
            </div>
            <div class="item clearfix">
                <div class="pre left">类型:</div>
                <div class="val left">
                    <span v-for="(tab,index) in tabsName" class="type-item" @click="tabsSwitch(index)" v-bind:class="{active:tab.isActive}">{{tab.name}}
                    </span>
                </div>
            </div>
            <div class="item clearfix">
                <div class="pre left">类型:</div>
                <div class="val left">
                    <span class="active type-item">全部</span>
                    <span class="type-item">2015</span>
                    <span class="type-item">2016</span>
                    <span class="type-item">2017</span>
                    <span class="type-item">2018</span>
                    <span class="type-item">2019</span>
                    <span class="type-item">2020</span>
                </div>
            </div>
        </div>
        <ul class="clearfix movie-content">
            <li class="item" v-for="item in moveData">
                <div class="movie-img">
                    <div class="star">
                        <i class="icon-star"></i>
                        <i class="icon-star"></i>
                        <i class="icon-star"></i>
                        <i class="icon-star"></i>
                    </div>
                    <div class="core">9.5</div>
                </div>
                <div class="movie-name">
                    这个杀手不太冷
                </div>
            </li>
        </ul>
        <div class="footer">
            <img src="/static/image/home-active.png" alt="">
            <router-link to="/downLoad">
                <img src="/static/image/down.png" alt="">
            </router-link>
            <router-link to="/user">
                <img src="/static/image/user.png" alt="">
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
                chanel1: [
                    {"id": 21, "title": "其他地区"},
                    {"id": 19, "title": "亚洲专区"},
                    {"id": 18, "title": "欧洲专区"},
                    {"id": 17, "title": "华语专区"},
                    {"id": 16, "title": "美国专区"},
                    {"id": 28, "title": "4K专区"}
                ],
                keywords:'',
                selected: '1',
                selected2: '22',
                moveData: [1,2,3,4,5,6,7,8,9,10],
                tabsName: [{
                    name: "全部",
                    isActive: true
                },
                {
                    name: "爱情",
                    isActive: false
                },
                {
                    name: "动作",
                    isActive: false
                },
                    {
                        name: "悬疑",
                        isActive: false
                    },
                    {
                        name: "惊悚",
                        isActive: false
                    },
                    {
                        name: "Vue3",
                        isActive: false
                    },
                    {
                        name: "Vue4",
                        isActive: false
                    }
                ],
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
    width: 375 / 15 => 1rem = 25px
    1px == 0.04 rem
    */
    .search{
        color:#ccc;
        i.icon-search{
            position: absolute;
            left: .8rem;
            top: .6rem;
            font-size: .6rem;
        }
        .search-input{
            font-size: .6rem;
            padding-left:1.1rem;
            width: 10.5rem;
            height: 1.2rem;
            margin-top:7px;
            border-radius: 8px;
            margin-left:.5rem;
            background: #fafafa;
            &::placeholder{
                color:#ccc;
            }
        }
        .filter{
            position: relative;
            top: .2rem;
            color: #fff;
            margin-left: .3rem;
            font-size: .6rem;
        }

    }

    .filter-type{
        .item{
            height:40px;
            line-height: 40px;
            border-bottom: 1px solid #eaeaea;
            background: #FFFFFF;
            box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
            .pre{
                text-align: center;
                width:2.5rem;
            }
            .val{
                word-break:keep-all;/* 不换行 */
                white-space:nowrap;/* 不换行 */
                overflow: auto;
                /*white-space：nowrap;*/
                height:40px;
                line-height: 40px;
                width: 12.5rem;
                .type-item{
                    /*display: inline-block;*/
                    width: 2.5rem;
                    margin:0 .35rem;
                    padding: 2px .3rem;
                    height: 1rem;
                    text-align: center;
                    border-radius: 6px;
                }
                .active{
                    color: #fff;
                    background: -webkit-linear-gradient(left, #14D8BF, #5EAAFE ); /* Safari 5.1 - 6.0 */
                    background: -o-linear-gradient(right, #14D8BF, #5EAAFE); /* Opera 11.1 - 12.0 */
                    background: -moz-linear-gradient(right, #14D8BF, #5EAAFE); /* Firefox 3.6 - 15 */
                    background: linear-gradient(to right, #14D8BF, #5EAAFE ); /* 标准的语法（必须放在最后） */
                }
            }
        }
    }

    .movie-content{
        .item {
            margin: .4rem 0.25rem 0 0.25rem;
            float: left;
            .movie-img{
                position: relative;
                background: url("/static/image/movie.png") no-repeat;
                background-size: cover;
                border-radius: 4px;
                font-size: 0.5rem;
                box-sizing: border-box;

                width: 4.5rem;
                height: 6rem;
                .star,.core{
                    font-weight: bold;
                    position: absolute;
                    color:#FCB415;
                    bottom:.1rem;
                    font-size: 12px;
                }
                .star{
                    left:.2rem;

                }
                .core{
                    right:.2rem;
                }

            }
            .movie-name{
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: #1A1A1A;
                letter-spacing: 0.5px;
            }

        }
    }

</style>

