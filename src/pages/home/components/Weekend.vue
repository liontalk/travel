<template>
  <div>

    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imageUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
  export default {
    name: "Weekend",
    props: [],
    data() {
      return {
        recommendList: [
          {
            id: "001",
            imageUrl: "https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg",
            title: "丽江美景游",
            desc: "丽江美景游"
          },
          {
            id: "002",
            imageUrl: "https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg",
            title: "丽江美景游",
            desc: "丽江美景游"
          },
          {
            id: "003",
            imageUrl: "https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg",
            title: "丽江美景游",
            desc: "丽江美景游"
          },
        ]
      }
    }
  }

</script>
<style scoped lang="stylus">
  @import '~@/assets/css/iconfont/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem

  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%

    .item-img
      width: 100%

  .item-info
    padding: .1rem

    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()

    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
