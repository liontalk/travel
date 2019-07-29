<template>
  <div class="icons">
    <swiper>
      <swiper-slide>
        <div class="icon" v-for="item of iconList" :key="item.id">
          <div class="image-icon">
            <img class="icon-img-content" :src="item.imageUrl">
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
    export default {
        name: "Icons.vue",
        data: function () {
            return {
                iconList: [
                    {
                        id: '001',
                        imageUrl: "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                        desc: "景点门票"
                    },
                    {
                        id: '002',
                        imageUrl: "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/f0f00d6dfe038c044dbc9a437f58b0eb.png",
                        desc: "一日行"
                    },
                    {
                        id: '003',
                        imageUrl: "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/437aad2dd0c1edb38fee0c51f8f9dd02.png",
                        desc: "热门演出"
                    },
                    {
                        id: '004',
                        imageUrl: "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/d0d101c23a73467de740ecf68602cd17.png",
                        desc: "壶口瀑布"
                    },
                    {
                        id: '005',
                        imageUrl: "https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
                        desc: "西安必游"
                    },
                    {
                        id: '006',
                        imageUrl: "https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
                        desc: "西安必游"
                    },
                    {
                        id: '007',
                        imageUrl: "https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
                        desc: "西安必游"
                    },
                    {
                        id: '008',
                        imageUrl: "https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
                        desc: "西安必游"
                    },
                    {
                        id: '009',
                        imageUrl: "https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
                        desc: "西安必游"
                    },

                ]
            }
        }
    }
</script>

<style scoped lang="stylus">
  @import '~@/assets/css/iconfont/varibles.styl'
  @import '~@/assets/css/iconfont/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%

  .icons
    margin-top: .1rem

    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%

      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem

        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%

      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
