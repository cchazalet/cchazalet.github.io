<template>
    <div id="result">
      <LocationElement>
        Homepage > Results
      </LocationElement>
      <SearchCriteriaElement :msg="searchCriteria"></SearchCriteriaElement>
      <div class="column">
        <div class="col-lg-12">
          <TrainSearchElement :departure_city="searchCriteria.source" :arrival_city="searchCriteria.destination" 
                            :getTrainResults="getTrainResults"></TrainSearchElement>
          <p v-if="trainResultState ==='Null'">Choisir les stations pour CHERCHER</p>
          <p v-else-if="trainResultState === 'Chercher'">Recherche En Cours</p>
          <ResultListElement v-else-if="trainResultState === 'Result'" :result_list="trainData"></ResultListElement>
          <p v-else>Aucun Resultat</p>
        </div>
        <div class="col-lg-12">
          <BusSearchElement :departure_city="searchCriteria.source" :arrival_city="searchCriteria.destination"
                            :getBusResults="getBusResults"></BusSearchElement>
          <p v-if="busResultState ==='Null'">Choisir les stations pour CHERCHER</p>
          <p v-else-if="busResultState === 'Chercher'">Recherche En Cours</p>
          <BusResultListElement v-else-if="busResultState === 'Result'" :result_list="busData" :bus_depart="busDepart" :bus_arrival="busArrival"></BusResultListElement>
          <p v-else>Aucun Resultat</p>
        </div>
      </div>
      <div class="column">
        <RankResultListVue :trainData="trainData" :busData="busData" :departure_city="busDepart" :arrival_city="busArrival"></RankResultListVue>
      </div>
    </div>
  </template>
  
  <script>
  import LocationElement from './Location.vue';
  import SearchCriteriaElement from './result_components/SearchCriteria.vue'
  import ResultListElement from './result_components/ResultList.vue';
  import TrainSearchElement from './result_components/TrainSearch.vue';
  import BusSearchElement from './result_components/BusSearch.vue';
  import BusResultListElement from './result_components/BusResultList.vue';
  import RankResultListVue from './result_components/RankResultList.vue';
  import API from '../plugins/axiosInstance';

  export default {
    name: 'ResultPage',
    data(){
      return {
        searchCriteria: this.$route.query,
        trainData: this.trainData,
        busData: this.busData,
        busDepart: this.busDepart,
        busArrival: this.busArrival,
        trainResultState: 'Null',
        busResultState: 'Null',
      }
    },
    components: {
      LocationElement,
      SearchCriteriaElement,
      ResultListElement,
      TrainSearchElement,
      BusSearchElement,
      BusResultListElement,
      RankResultListVue,
    },
    mounted(){

      
    },
    methods:{
      getTrainResults(depart, arrival){
        this.trainResultState = 'Chercher'
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
            this.trainResultState = 'Result'
          }else{
            console.log('ERROR!')
            console.log(res.data.code)
            this.trainResultState = 'No Result'
          }
        })
      },
      getBusResults(depart, arrival){
        this. busDepart = depart
        this.busArrival = arrival
        console.log(depart,arrival,this.searchCriteria.date_)
        this.busResultState = 'Chercher'
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
            this.busResultState = 'Result'
          }else{
            console.log('ERROR!')
            console.log(res.data.code)
            this.busResultState = 'No Result'
          }
        })
      },
    }
  }
  </script>
  
  <style scoped>
    .column{
      width: 50%;
      display: inline-block;
      vertical-align: top;
    }
    
  </style>