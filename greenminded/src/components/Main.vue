<template>
    <div id="main">
      <LocationElement>
        Homepage
      </LocationElement>
      <h2>Main</h2>
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
  import SearchElement from './main_components/Search.vue'
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