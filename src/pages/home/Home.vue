<template>
    <div>
       <Header></Header>
    </div>
</template>

<script>
    import Header from './components/Header';

    export default {
        name: "Home",
        components:{
          Header : Header
        }
    }
</script>

<style scoped>
    /**
       1 rem =html font-size=50px
     */
</style>
