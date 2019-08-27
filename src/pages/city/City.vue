<template>
  <div>
    <CityHeader></CityHeader>
    <city-search :cities="cities"></city-search>
    <CityList :cities="cities" :hotCities="hotCities" :letter="letter"></CityList>
    <CityAlphabet :cities="cities" @changeLetter="changeLetter"></CityAlphabet>
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
                hotCities: [],
                letter: ''
            }
        },
        methods: {
            getCityInfo() {
                axios.get('http://localhost:8888/api/city/data').then(this.handleGetCityInfoSuccess);
            },
            handleGetCityInfoSuccess(res) {
                res = res.data;
                if (res.code == 200 && res.data != null) {
                    let result = res;
                    let data = JSON.parse(result.data);
                    this.hotCities = data.data.hotCities;
                    this.cities = data.data.cities;
                    console.log(this.cities);
                    console.log(this.hotCities);
                }
            },
            changeLetter(letter) {
                console.log(letter);
                this.letter = letter;
            }
        },
        mounted() {
            this.getCityInfo();
        }
    }

</script>
<style scoped>

</style>
