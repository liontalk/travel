<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-image" :src="item.imageUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        data: function () {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true
                },
                swiperList: [
                    {
                        id: "0001",
                        imageUrl: 'https://imgs.qunarzz.com/p/p66/201304/17/384810d022dd28f793835fbb.jpg_256x160_6a7ec251.jpg'
                    },
                    {
                        id: "0002",
                        imageUrl: 'https://imgs.qunarzz.com/sight/p0/1504/59/594e60a1366e1741.water.jpg_256x160_28de21eb.jpg'
                    },
                    {
                        id: "0003",
                        imageUrl: 'https://imgs.qunarzz.com/sight/p0/1411/b8/f5fd5955bdecc923ce6d40ce453160eb.water.jpg_256x160_f61f5c98.jpg'
                    }

                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff

  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 31.25%
    background #eee

    .swiper-image
      width: 100%
</style>
