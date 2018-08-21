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
                <div class="pre left">地区:</div>
                <div class="val left">
                    <span v-for="(item,index) in movieType" :key="index" class="type-item" @click="movieTypeSwitch(index,item.id)" v-bind:class="{active:item.isActive}">
                        {{item.title}}
                    </span>
                </div>
            </div>
            <div class="item clearfix">
                <div class="pre left">类型2:</div>
                <div class="val left">
                    <span v-for="(tab,index) in tabsName" class="type-item" @click="tabsSwitch(index)" v-bind:class="{active:tab.isActive}">{{tab.title}}
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
            <li class="item" v-for="(item,index) in movieData2">
                <div class="movie-img" :style="{'background-image': 'url('+item.poster1+')'}" >
                    <div class="star">
                        <i class="icon-star"></i>
                        <i class="icon-star"></i>
                        <i class="icon-star"></i>
                        <i class="icon-star"></i>
                    </div>
                    <div class="core">9.1</div>
                </div>
                <div class="movie-name">
                    {{item.title}}
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
                movieData2: [],
                movieType: [],
                tabsName: [{
                    title: "全部",
                    isActive: true
                },
                {
                    title: "爱情",
                    //isActive: false
                },
                {
                    title: "动作",
                    //isActive: false
                },
                {
                    title: "悬疑",
                    //isActive: false
                },
                {
                    title: "惊悚",
                    //isActive: false
                }
                ],
            }
        },
        created(){
           this.getMovieType();
           this.getMovie();
        },
        methods: {
            movieTypeSwitch:function (tabIndex,id) {
                for(var j = 0; j < this.movieType.length; j++) {
                    this.movieType[j].isActive = false;
                }
                console.log(tabIndex,id);
                this.movieType[tabIndex].isActive = true;
                this.getMovie(id);
            },
            tabsSwitch: function(tabIndex,type) {
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
            getMovie: function(category=17){
                //http://yousdk.com:12000/api/cinema/channel/video/list/?channel=1&category=16&start=1&end=10
                var url = '/movie/api/cinema/channel/video/list/?channel=1&start=1&end=10&category=' + category;
                this.$axios.post(url).then((res) => {
                    this.movieData2 = res.data.data;
                    //console.log(this.movieData2);
                }).catch(function (error) {
                    console.log(error);
                });
            },
            getMovieType: function(){
                //http://yousdk.com:12000/api/cinema/channel/video/list/?channel=1&category=16&start=1&end=10
                var url = '/movie/api/cinema/channel/category/?channel=1';
                this.$axios.post(url).then((res) => {
                    var data = res.data.data;
                    for(var i=0;i<data.length;i++){
                        data[i].isActive = false;
                    }
                    data[0].isActive = true;
                    this.movieType = data;
                    console.log('type:',this.movieType);
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
                    margin:0 .35rem;
                    padding: .15rem 0.1rem .15rem .3rem;
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

