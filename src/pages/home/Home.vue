<template>
  <div>
    <Header></Header>
    <Swiper></Swiper>
    <Icons></Icons>
  </div>
</template>

<script>
    import Header from './components/Header';
    import Swiper from './components/Swiper';
    import Icons from './components/Icons';
    export default {
        name: "Home",
        components: {
            Header: Header,
            Swiper: Swiper,
            Icons: Icons
        }
    }
</script>

<style scoped>
  /**
     1 rem =html font-size=50px
   */
</style>
