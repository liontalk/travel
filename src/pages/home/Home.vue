<template>
  <div>
    <Header></Header>
    <Swiper></Swiper>
    <Icons></Icons>
    <Recommend></Recommend>
  </div>
</template>

<script>
  import Header from './components/Header';
  import Swiper from './components/Swiper';
  import Icons from './components/Icons';
  import Recommend from './components/Recommend';

  export default {
    name: "Home",
    components: {
      Header: Header,
      Swiper: Swiper,
      Icons: Icons,
      Recommend: Recommend
    }
  }
</script>

<style scoped>
  /**
     1 rem =html font-size=50px
   */
</style>
