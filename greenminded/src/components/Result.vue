<template>
    <div id="result">
      <LocationElement>
        Homepage > Results
      </LocationElement>
      <SearchCriteriaElement></SearchCriteriaElement>
      <ResultListElement>
      </ResultListElement>
      {{searchCriteria}}
    </div>
  </template>
  
  <script>
  import LocationElement from './Location.vue';
  import SearchCriteriaElement from './result_components/SearchCriteria.vue'
  import ResultListElement from './result_components/ResultList.vue';
  import API from '../plugins/axiosInstance'

  export default {
    name: 'ResultPage',
    data(){
      return {
        searchCriteria: this.$route.query,
        
      }
    },
    components: {
      LocationElement,
      SearchCriteriaElement,
      ResultListElement
    },
    mounted(){
      API({
        url:'/journey/getJourneyInfo',
        method:'post',
        data: {
          'date': this.searchCriteria.date,
          'destination': this.searchCriteria.destination,
          'hour': this.searchCriteria.hour,
          'source': this.searchCriteria.source,
        }
      }).then((res)=>{
        if (res.ok){
          this.data = res.data
        }else{
          console.log('ERROR!')
        }
        return res
      })
    },
    methods:{

    }
  }
  </script>
  
  <style scoped>

  </style>