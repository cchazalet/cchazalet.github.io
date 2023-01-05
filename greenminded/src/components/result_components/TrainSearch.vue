<template>
  <div id="train_search">
    <div class="title_element">Train</div>
    <div class="search_element">
      <input
        type="text"
        placeholder="Choose A Station"
        v-model="departure"
        list="departList"
        class="form-control search-slt"
      />
      <datalist id="departList">
        <option v-for="(item, index) in departureCityList" v-bind:key="index">
          {{ item }}
        </option>
      </datalist>
    </div>
    <div class="search_element">
      <input
        type="text"
        placeholder="Choose A Station"
        v-model="arrival"
        list="arrivalList"
        class="form-control search-slt"
      />
      <datalist id="arrivalList">
        <option v-for="(item, index) in arrivalCityList" v-bind:key="index">
          {{ item }}
        </option>
      </datalist>
    </div>
    <input
      name="submit"
      value="Search"
      class="buton btn btn-success btn-lg btn-block wrn-btn"
      type="submit"
      @click="searchTrain"
    />
  </div>
</template>

<script>
import API from "../../plugins/axiosInstance";
import $ from "jquery";

export default {
  name: "TrainSearchElement",
  components: {},
  data() {
    return {
      departure: "",
      arrival: "",
      departureCityList: [],
      arrivalCityList: [],
    };
  },
  props: ["departure_city", "arrival_city", "getTrainResults"],
  methods: {
    
    searchTrain() {
      $(".button").attr("disabled", true);
        this.getTrainResults(this.departure, this.arrival);
      $(".button").attr("disabled", true);
    },
  },
  mounted() {
    API({
      url: "/journey/getCityGare",
      method: "post",
      data: {
        city: this.departure_city,
      },
    }).then((res) => {
      if (res.data.ok) {
        this.departureCityList = res.data.data.gareList;
      } else {
        console.log("ERROR!");
        console.log(res.data.code);
      }
    });

    API({
      url: "/journey/getCityGare",
      method: "post",
      data: {
        city: this.arrival_city,
      },
    }).then((res) => {
      if (res.data.ok) {
        this.arrivalCityList = res.data.data.gareList;
      } else {
        console.log("ERROR!");
        console.log(res.data.code);
      }
    });
  },
};
</script>

<style scoped>
.title_element {
  display: inline-block;
  width: 20%;
}

.search_element {
  display: inline-block;
  width: 20%;
}
.search-slt {
  display: block;
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #55595c;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  height: calc(3rem + 2px) !important;
  border-radius: 0;
}

.wrn-btn {
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
  height: calc(3rem + 2px) !important;
  border-radius: 0;
}
</style>
