<template>
    <div id="main">
      <LocationElement>
        Homepage
      </LocationElement>
      <h2>Main</h2>
      <div>
        <router-view></router-view>
        <router-link to='/result'>Result</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import LocationElement from './Location.vue'
  import API from "../plugins/axiosInstance"

  export default {
    name: 'MainPage',
    components: {
      LocationElement,
    },
    methods:{
      getData: function(){
        API({
          url:'/test',
          method:'post'
        }).then((res)=>{
          return data
        })
      }
    }
  }
  </script>
  
  <style scoped>

  </style>