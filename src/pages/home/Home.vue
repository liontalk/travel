<template>
  <div>
    <Header></Header>
    <Swiper></Swiper>
    <Icons></Icons>
    <Recommend></Recommend>
    <Weekend></Weekend>
  </div>
</template>

<script>
  import Header from './components/Header';
  import Swiper from './components/Swiper';
  import Icons from './components/Icons';
  import Recommend from './components/Recommend';
  import Weekend from './components/Weekend';

  export default {
    name: "Home",
    components: {
      Header: Header,
      Swiper: Swiper,
      Icons: Icons,
      Recommend: Recommend,
      Weekend: Weekend
    }
  }
</script>

<style scoped>
  /**
     1 rem =html font-size=50px
   */
</style>
