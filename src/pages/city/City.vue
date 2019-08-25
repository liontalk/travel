<template>
  <div>
    <CityHeader></CityHeader>
    <city-search></city-search>
    <CityList></CityList>
  </div>
</template>


<script>
  import CityHeader from './components/CityHeader'
  import CitySearch from './components/CitySearch'
  import CityList from './components/CityList'

  export default {
    name: 'city',
    components: {
      CityHeader: CityHeader,
      CitySearch: CitySearch,
      CityList: CityList
    }
  }

</script>
<style scoped>

</style>
