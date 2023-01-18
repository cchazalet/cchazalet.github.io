<template>
    <div id="result_element">
      <div class="row">
        <div class="col-sm-2">
          <img v-if="values.type === 'Flixbus'"
            src="../../../img/1280px-Flixbus_201x_logo.svg.png"
            class="logo-transport-type"
          /> 
          <img v-if="values.type === 'SNCF'"
            src="../../../img/Logo_SNCF_2011.svg.png"
            class="logo-transport-type"
          /> 
        </div>
        <div class="col-sm-8">
          <div class="row">
            <div class="col-sm-5">
              
              <label for="depart" class="label_type">Departure: </label>
              <p>{{values.depart }}</p>

            </div>
            <div class="col-sm-5">
              <label for="status" class="label_type">Arrival:</label>
              <p>{{ values.arrival }}</p>
            </div>
            <div class="col-sm-5">
              <label for="status" class="label_type">Departure Time:</label>
              <p>{{ values.departTime }}</p>
            </div>
            <div class="col-sm-5">
              <label for="status" class="label_type">Arrival Time:</label>
              <p>{{ values.arrivalTime }}</p>
            </div>
            <div class="col-sm-5">
              <label for="status" class="label_type">CO2 Emission:</label>
              <p>{{ values.co2Emission }} gCO2e</p>
            </div>
            <div class="col-sm-5">
              <label for="status" class="label_type">Duration:</label>
              <p>{{ values.duration }} min</p>
            </div>
            {{ values.msg }}
          </div>
        </div>
        <div class="col-sm-2">
          <p>{{ values.economy }}€</p>
        </div>
      </div>
    </div>
</template>

<script>
export default{
    name:'IterElementVue',
    components:{},
    data(){
        return{}
    },
    props:{
        values:{ String },
    }
}

</script>

<style scoped>
  #result_element {
    border-color: #1b3f61;
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
    color: #000;
    width: 35%;
    font-weight: 1000;
    font-size: small;
    font-style: oblique;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    white-space: nowrap;
  }
  .text_type{
    color: #000;
    width: 35%;
    font-weight: 1000;
    font-size: small;
    font-style: oblique;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }
  
  .logo-transport-type {
    margin-top: 10px;
    width: 100%;
    max-width: 80px;
  }

  .row{
    font-size: small;
  }


</style>