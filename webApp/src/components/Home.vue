<template>
    <div class="container">
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
                <li v-for="(tab,index) in tabsName">
                    <a href="#" class="tab-link" @click="tabsSwitch(index)" v-bind:class="{active:tab.isActive}">{{tab.name}}</a>
                </li>
            </ul>
        </div>
        <div class="type">
            <div class="item">
                <div></div>
            </div>
        </div>
        <ul class="content clearfix">
            <li class="item" v-for="item in moveData">
                <img src="/static/image/img-default.png" alt="">
                <div>战狼3</div>
                <div class="star">
                    <i class="icon-star-empty"></i>
                    <i class="icon-star-empty"></i>
                    <i class="icon-star-empty"></i>
                    <i class="icon-star-empty"></i>
                    <i class="icon-star-empty"></i>
                    <i class="icon-star-empty"></i>
                    <span>9.5</span>
                </div>
            </li>
        </ul>

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
    .search {
        background: $background;
        padding: 0.4rem 0.2rem;
    }
    .movie-type{
        background: #fff;
        .type-item{
            li{
                float: left;
                width: 3rem;
                font-size: .5rem;
            }
        }
        .tab-link.active{
            background: #CCCCCC;
        }
    }

    .content {
        margin: auto;
        margin-top: 15px;
        background: $background;

        .item {
            text-align: left;
            font-size: 0.5rem;
            box-sizing: border-box;
            float: left;
            width: 5rem;
            padding: .3rem;
            img {
                width: 100%;
                margin: auto;
            }
            .star{
                color:#fca202;
            }
        }
    }

</style>

