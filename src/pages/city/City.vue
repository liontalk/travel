<template>
  <div>
    <CityHeader></CityHeader>
    <city-search></city-search>
  </div>
</template>


<script>
    import CityHeader from './components/CityHeader'
    import CitySearch from './components/CitySearch'

    export default {
        name: 'city',
        components: {
            CityHeader: CityHeader,
            CitySearch: CitySearch
        }
    }

</script>
<style scoped>

</style>
