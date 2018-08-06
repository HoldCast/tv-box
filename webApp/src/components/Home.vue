<template>
  <div id="home">
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
    <div class="type">
      <div class="item">
        <div></div>
      </div>
    </div>
    <div class="content clearfix">
      <div class="item">
        <img src="../assets/logo.png" alt="">
        <div >电影名称</div>
        <div class="star">
          <i class="icon-star-empty"></i>
          <i class="icon-star-empty"></i>
          <i class="icon-star-empty"></i>
          <i class="icon-star-empty"></i>
          <i class="icon-star-empty"></i>
          <i class="icon-star-empty"></i>
          <span>9.2</span>
        </div>
      </div>
      <div class="item">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="item">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
    </div>


  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        value:'',
        username:'',
        email: ''
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss" >
  $background: #ebebeb;
  .search{
    background: $background;
    padding: 10px 5px;
  }
  .content{
    width: 90%;
    margin: auto;
    margin-top: 15px;
    background: $background;
    .item{
      text-align: left;
      font-size: 12px;
      box-sizing: border-box;
      float:left;
      width: 33.33333%;
      height: 200px;
      border:1px solid #0000FF;
      img{
        width: 80%;
        margin:auto;
      }
    }
  }
</style>

