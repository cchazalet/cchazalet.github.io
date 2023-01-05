<template>
  <div id="search_criteria">
    <div id="sub_search1">
      <h4>
        {{ msg.source || "Paris-Gare-de-Lyon" }}->{{
          msg.destination || "Lyon-Part-Dieu"
        }}
      </h4>
      <h4>{{ msg.date || "15-12-2022" }} {{ msg.hour || "10h26" }}</h4>
    </div>
    <div id="sub_search2">
      <h4>Price: {{ msg.price }}</h4>
      <h4>Duration: {{ msg.duration }}</h4>
      <h4>Ecology: {{ msg.ecology }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchCriteria",
  components: {
  },
  props: {
    msg: { String },
  },
};
</script>

<style scoped>
#search_criteria {
  /* border-radius: 5px; */
  border-color: #cfe0af;
  border-width: 2px;
  border-style: solid;
  background-color: #cfe0af;
  width: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}

#sub_search1 {
  width: 70%;
  display: inline-block;
  padding-left: 20px;
}

#sub_search2 {
  width: 30%;
  display: inline-block;
  padding-left: 20px;
}
.quick-search {
  padding: 25px 40px;
  background: rgba(255, 255, 255, 0.7);
}

.search-sec {
  padding: 25px 40px;
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
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
  height: calc(3rem + 2px) !important;
  border-radius: 0;
}

@media (min-width: 992px) {
  .search-sec {
    position: relative;
    top: -114px;
    background: rgba(255, 255, 255, 0.7);
  }
}

@media (max-width: 992px) {
  .search-sec {
    background: rgba(255, 255, 255, 0.7);
  }
}
</style>
