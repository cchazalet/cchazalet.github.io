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

  export default {
    name: 'MainPage',
    components: {
      LocationElement,
    }
  }
  </script>
  
  <style scoped>

  </style>