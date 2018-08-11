<template>
    <div class="container">
        <div class="header">
            <!--<mt-header fixed title="fixed top"></mt-header>-->
            <mt-header fixed title="影片详情">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
        <div class="content">
            <div class="search">
                <span>电影</span>
                <input type="text">
                <mt-button size="small">
                    <i class="icon-search"></i>
                </mt-button>
                <mt-button size="small">
                    <i class="icon-reorder"></i>
                </mt-button>
            </div>
            <div class="movie-type">
                <ul class="type-item clearfix">
                    <li v-for="(tab,index) in tabsName" class="tab-link" @click="tabsSwitch(index)" v-bind:class="{active:tab.isActive}">{{tab.name}}
                    </li>
                </ul>
            </div>
            <div class="movie-type">
                <ul class="type-item clearfix">
                    <li v-for="(tab,index) in tabsName" class="tab-link" @click="tabsSwitch(index)" v-bind:class="{active:tab.isActive}">{{tab.name}}
                    </li>
                </ul>
            </div>
            <div class="movie-type">
                <ul class="type-item clearfix">
                    <li v-for="(tab,index) in tabsName" class="tab-link" @click="tabsSwitch(index)" v-bind:class="{active:tab.isActive}">{{tab.name}}
                    </li>
                </ul>
            </div>
            <ul class="clearfix movie-content">
                <li class="item" v-for="item in moveData">
                    <img src="/static/image/img-default.png" alt="">
                    <div>战狼3</div>
                    <div class="star">
                        <i class="icon-star"></i>
                        <i class="icon-star"></i>
                        <i class="icon-star"></i>
                        <i class="icon-star"></i>
                        <i class="icon-star"></i>
                        <i class="icon-star"></i>
                        <span>9.5</span>
                    </div>
                </li>
            </ul>

        </div>

        <footer></footer>
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
           this.getMovieType();
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

    $background: #f7f7f7;


    .content {
        /*background: $background;*/
        width:14.5rem;
        margin: auto;
        .search {
            margin-top:40px;
            background: $background;
            padding: 0.4rem 0.2rem;
        }
        .movie-type{
            overflow: auto;
            .type-item{
                width: 30rem;

                li{
                    /*float: left;*/
                    font-size: 0.6rem;
                    text-align: center;
                    display: inline-block;
                    width: 2rem;
                    padding:0.3rem 0;
                }
            }
            .tab-link.active{
                color: red;
                font-weight:bold;
            }
        }
        .movie-content{
            background: $background;
            .item {
                text-align: left;
                font-size: 0.5rem;
                box-sizing: border-box;
                float: left;
                width: 33.3333%;
                padding: .4rem;
                /*margin-right:0.5rem;*/
                img {
                    width: 100%;
                    margin: auto;
                }
                .star{
                    color:#fca202;
                }
            }
        }
    }

</style>

