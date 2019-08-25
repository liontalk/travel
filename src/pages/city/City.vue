<template>
  <div>
    <CityHeader></CityHeader>
    <city-search></city-search>
    <CityList :city="cities" :hotCities="hotCities"></CityList>
    <CityAlphabet></CityAlphabet>
  </div>
</template>


<script>
  import axios from 'axios'
  import CityHeader from './components/CityHeader'
  import CitySearch from './components/CitySearch'
  import CityList from './components/CityList'
  import CityAlphabet from './components/CityAlphabet'

  export default {
    name: 'city',
    components: {
      CityHeader: CityHeader,
      CitySearch: CitySearch,
      CityList: CityList,
      CityAlphabet: CityAlphabet
    },
    data() {
      return {
        cities: {},
        hotCities: []
      }
    },
    methods: {
      getCityInfo() {
        axios.get('http://192.168.1.12:8888/api/city/data').then(this.handleGetCityInfoSuccess);
      },
      handleGetCityInfoSuccess(res) {
        res = res.data;
        if (res.code == 200 && res.data != null) {
          let result = res;
          let data = JSON.parse(result.data);
          this.hotCities = data.data.hotCities;
          this.cities = data.data.cities;
          console.log(this.cities);
          console.log( this.hotCities);
        }
      }
    },
    mounted() {
      this.getCityInfo();
    }
  }

</script>
<style scoped>

</style>
