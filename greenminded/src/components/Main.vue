<template>
    <div id="result">
      <h1>Main</h1>
      <div>
        <router-view></router-view>
        <router-link to='/result'>Result</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
	name: 'MainPage',
	components: {
	}
  }
  </script>
  
  <style scoped>

  </style>