<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">
        &#xe632;
      </span>
      输入景点/城市搜索
    </div>
    <router-link to="/city">
      <div class="header-right">
        <!--this.$store 就是  store/index.js 中的 Vuex.Store -->
        {{this.$store.state.city}}
        <span class="iconfont arrow-icon">
        &#xe64a;
      </span>
      </div>
    </router-link>

  </div>
</template>

<script>
  export default {
    name: "Header",
    /*props: {
      city: String
    }*/
  }
</script>

<style lang="stylus" scoped>
  /**
    * 1 rem =html font-size=50px
    */
  @import "~@/assets/css/iconfont/varibles.styl"

  .header
    line-height: .86rem
    display: flex
    background: $bgColor
    color: #fff

    .header-left
      width: .64rem
      float: left

      .back-icon
        text-align center
        font-size .4rem

    .header-input
      flex: 1
      height: 0.64rem
      line-height: 0.64rem
      padding-left 0.2rem
      margin-top: 0.12rem
      margin-left: 0.2rem
      background: #fff
      border-radius: .1rem
      color: #ccc

    .header-right
      min-width: 1.04rem
      padding-right 0 .1rem
      float: right
      text-align: center
      color: #fff

      .arrow-icon
        margin-left: -0.04rem
        font-size: 0.24rem
</style>
