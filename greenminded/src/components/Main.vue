<template>
  <div id="main">
    <LocationElement> Homepage </LocationElement>
    <SearchBar></SearchBar>
    <CarousselSlides></CarousselSlides>
    <div>
      <!-- <router-view></router-view>
        <router-link to="{path:'/result', push:{key:'value'}}">Result</router-link> -->
      <!-- <button @click="searchIte()">CHERCHER</button> -->
    </div>
  </div>
</template>

<script>
import LocationElement from "./Location.vue";
import SearchBar from "./main_components/SearchBar.vue";
import CarousselSlides from "./main_components/CarousselSlides.vue";
//import API from "../plugins/axiosInstance"

export default {
  name: "MainPage",
  components: {
    LocationElement,
    SearchBar,
    CarousselSlides,
  },
  methods: {},
};
</script>

<style scoped></style>
