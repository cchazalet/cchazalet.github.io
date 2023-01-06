<template>
  <div id="result_element">
    <div class="row">
      <div class="col-sm-1">
        <img
          src="../../../img/1280px-Flixbus_201x_logo.svg.png"
          class="logo-transport-type"
        />
      </div>
      <div class="col-sm-10">
        <div class="row">
          <div class="col-sm-6">
            <label for="status" class="label_type">Departure:</label>
            {{ depart }}
          </div>
          <div class="col-sm-6">
            <label for="status" class="label_type">Arrival:</label>
            {{ arrival }}
          </div>
          <div class="col-sm-6">
            <label for="status" class="label_type">Departure Time:</label>
            {{ values.depatureTime }}
          </div>
          <div class="col-sm-6">
            <label for="status" class="label_type">Arrival Time:</label>
            {{ values.arrivalTime }}
          </div>
          <div class="col-sm-6">
            <label for="status" class="label_type">Price:</label>
            {{ values.price }} euros
          </div>
          <div class="col-sm-6">
            <label for="status" class="label_type">Duration:</label>
            {{ values.duration }} min
          </div>
          {{ values.msg }}
        </div>
      </div>
      <div class="col-sm-1">
        <h4>{{ values.price }}€</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BusResultElement",
  components: {},
  data() {
    return {};
  },
  props: {
    values: { String },
    depart: String,
    arrival: String,
  },
};
</script>

<style scoped>
#result_element {
  border-color: #81b622;
  border-radius: 5px;
  border-style: groove;
  margin-top: 5px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 5px;
  padding-left: 1%;
  width: auto;
}

.sub_element {
  display: inline-block;
  width: auto;
}

.label_type {
  width: 35%;
  font-weight: 200;
  font-style: oblique;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.logo-transport-type {
  margin-top: 10px;
  width: 100%;
  max-width: 80px;
}
</style>
