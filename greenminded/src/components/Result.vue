<template>
    <div id="result">
      <LocationElement>
        Homepage > Results
      </LocationElement>
      <SearchCriteriaElement :msg="searchCriteria"></SearchCriteriaElement>
      <TrainSearchElement :departure_city="searchCriteria.source" :arrival_city="searchCriteria.destination" 
                          :getTrainResults="getTrainResults"></TrainSearchElement>
      <ResultListElement :result_list="trainData"></ResultListElement>
      <BusSearchElement :departure_city="searchCriteria.source" :arrival_city="searchCriteria.destination"
                        :getBusResults="getBusResults"></BusSearchElement>
      <BusResultListElement :result_list="busData" :bus_depart="busDepart" :bus_arrival="busArrival"></BusResultListElement>
      
    </div>
  </template>
  
  <script>
  import LocationElement from './Location.vue';
  import SearchCriteriaElement from './result_components/SearchCriteria.vue'
  import ResultListElement from './result_components/ResultList.vue';
  import TrainSearchElement from './result_components/TrainSearch.vue';
  import BusSearchElement from './result_components/BusSearch.vue';
  import BusResultListElement from './result_components/BusResultList.vue';
  import API from '../plugins/axiosInstance';

  export default {
    name: 'ResultPage',
    data(){Array
      return {
        searchCriteria: this.$route.query,
        trainData: this.trainData,
        busData: this.busData,
        busDepart: this.busDepart,
        busArrival: this.busArrival,
      }
    },
    components: {
      LocationElement,
      SearchCriteriaElement,
      ResultListElement,
      TrainSearchElement,
      BusSearchElement,
      BusResultListElement,
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
            this.trainData = res.data.data.journeyVOList
            console.log(this.data)
          }else{
            console.log('ERROR!')
            console.log(res.data.code)
          }
        })
      },
      getBusResults(depart, arrival){
        this. busDepart = depart
        this.busArrival = arrival
        API({
          url:'flixbus/getFlixbusTrips',
          method:'post',
          data:{
            date: this.searchCriteria.date_,
            destination: arrival,
            source:depart,
          }
        }).then((res)=>{
          if(res.data.ok){
            this.busData = res.data.data.flixbusTripBOs
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