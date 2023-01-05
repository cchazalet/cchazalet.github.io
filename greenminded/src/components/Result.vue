<template>
    <div id="result">
      <LocationElement>
        Homepage > Results
      </LocationElement>
      <SearchCriteriaElement :msg="searchCriteria"></SearchCriteriaElement>
      <TrainSearchElement :departure_city="searchCriteria.source" :arrival_city="searchCriteria.destination" 
                          :getTrainResults="getTrainResults"></TrainSearchElement>
      <ResultListElement :result_list="data"></ResultListElement>
    </div>
  </template>
  
  <script>
  import LocationElement from './Location.vue';
  import SearchCriteriaElement from './result_components/SearchCriteria.vue'
  import ResultListElement from './result_components/ResultList.vue';
  import TrainSearchElement from './result_components/TrainSearch.vue';
  import API from '../plugins/axiosInstance'

  export default {
    name: 'ResultPage',
    data(){Array
      return {
        searchCriteria: this.$route.query,
        data: this.data,
      }
    },
    components: {
      LocationElement,
      SearchCriteriaElement,
      ResultListElement,
      TrainSearchElement,
    },
    mounted(){

      
    },
    methods:{
      getTrainResults(depart, arrival){
        API({
          url:'/journey/getJourneyInfo',
          method:'post',
          data: {
            date: this.searchCriteria.date,
            destination: arrival,
            hour: parseInt(this.searchCriteria.hour.slice(0,2)),
            source: depart,
          }
        }).then((res)=>{
          if (res.data.ok){
            this.data = res.data.data.journeyVOList
            console.log(this.data)
          }else{
            console.log('ERROR!')
            console.log(res.data.code)
          }
        })
      }
    }
  }
  </script>
  
  <style scoped>

  </style>