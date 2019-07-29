<template>
  <div>
    <Header></Header>
    <Swiper></Swiper>
  </div>
</template>

<script>
    import Header from './components/Header';
    import Swiper from './components/Swiper';

    export default {
        name: "Home",
        components: {
            Header: Header,
            Swiper: Swiper
        }
    }
</script>

<style scoped>
  /**
     1 rem =html font-size=50px
   */
</style>
