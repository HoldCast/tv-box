<template>
    <div class="container">
        <div class="header">
            <mt-header fixed title="影片详情">
                <router-link to="/" slot="left">
                    <mt-button icon="back" @click="backTo"></mt-button>
                </router-link>

                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
        <div class="content">
            <div class="movie-info clearfix">
                <div class="img left">
                    <img src="/static/image/movie.png" :src="movieData.poster1" alt="">
                </div>
                <div class="info left">
                    <div class="item">
                        <span class="name">{{movieData.title}} </span>
                    </div>
                    <div class="item">
                        <span class="star">
                            <template v-for="(item,index) in star">
                                <template v-if="index<movieData.stars">
                                    <i class="icon-star" ></i>
                                </template>
                                <template v-else>
                                    <i class="icon-star no" ></i>
                                </template>
                            </template>

                            <i class="grade">{{movieData.rate}}</i>
                        </span>
                    </div>
                    <div class="item">
                        <span class="pre">年份：</span>
                        <span class="val">{{movieData.release_date}}</span>
                    </div>
                    <div class="item">
                        <span class="pre">地区：</span>
                        <span class="val">{{movieData.country}}</span>
                    </div>
                    <div class="item">
                        <span class="pre">导演：</span>
                        <span class="val">{{movieData.director}}</span>
                    </div>
                    <div class="item">
                        <span class="pre">演员：</span>
                        <span class="val actors">{{movieData.actors}}</span>
                    </div>
                </div>
            </div>
            <div class="btn">
                <span class="change-bg btn-span">
                    下 载
                </span>
            </div>

            <!--<div class="btn">
                <span class="change-bg2 btn-span">
                    下载中
                </span>
            </div>-->
            <div class="details">
                <div class="title">
                    影片简介：
                </div>
                <p>{{movieData.description}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
                movieId: '',
                star: [1,2,3,4,5],
                movieData: {},
            }
        },
        created(){
            this.movieId =  this.$route.query.id;
            this.getMovieDetails(this.movieId);
        },
        mounted(){
           //this.getMovieType();
        },
        methods: {
            backTo: function () {
                this.$router.go(-1);
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
            getMovieDetails: function(movieId){
                var url = '/movie/api/cinema/channel/video/?channel=1&id=' + movieId;
                this.$axios.post(url).then((res) => {
                    let movieDetails = res.data.data;
                    this.movieData = movieDetails;
                    this.movieData.release_date = movieDetails.release_date.substr(0,4);
                    this.movieData.stars = Math.round(this.movieData.rate/2);
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
                    .star{
                        i.no{
                            color: #e2e2e2;
                        }
                    }
                    .actors{
                        overflow : hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
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
                font-size: .5rem;
                color:#999;
                margin-bottom: .2rem;
            }
            p{
                font-family: PingFangSC-Regular;
                font-size: .5rem;
                color: #1A1A1A;
                letter-spacing: 0;
                line-height: .8rem;
                text-indent: 1rem;
            }
        }
    }
</style>

