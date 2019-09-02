<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->

    <!--路由中的内容被加载一次就把数据放到内存当中 下一次再次进入之后不需要重新加载数据，从内存中去取数据-->
    <keep-alive>
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'App'
}
//提交测试



</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
</style>
