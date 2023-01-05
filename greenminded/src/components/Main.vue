<template>
    <div id="main">
      <LocationElement>
        Homepage
      </LocationElement>
      <SearchElement></SearchElement>
      <div>
        <!-- <router-view></router-view>
        <router-link to="{path:'/result', push:{key:'value'}}">Result</router-link> -->
        <!-- <button @click="searchIte()">CHERCHER</button> -->
      </div>
    </div>
  </template>
  
  <script>
  import LocationElement from './Location.vue'
  import SearchElement from './main_components/NewSearch.vue'
  //import API from "../plugins/axiosInstance"

  export default {
    name: 'MainPage',
    components: {
      LocationElement,
      SearchElement,

    },
    methods:{

    }
  }
  </script>
  
  <style scoped>

  </style>