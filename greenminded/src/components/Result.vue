<template>
    <div id="result">
      <LocationElement>
        Homepage > Results
      </LocationElement>
      <SearchCriteriaElement></SearchCriteriaElement>
      <ResultListElement>
      </ResultListElement>
    </div>
  </template>
  
  <script>
  import LocationElement from './Location.vue';
  import SearchCriteriaElement from './result_components/SearchCriteria.vue'
  import ResultListElement from './result_components/ResultList.vue';

  export default {
    name: 'ResultPage',
    components: {
      LocationElement,
      SearchCriteriaElement,
      ResultListElement
    }
  }
  </script>
  
  <style scoped>

  </style>