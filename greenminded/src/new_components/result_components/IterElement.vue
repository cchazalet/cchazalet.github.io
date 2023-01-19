<template>
    <div id="result_element" @click="openWindow">
      <div class="row">
        <div class="col-sm-2 addwidth">
          <img v-if="values.type === 'Flixbus'"
            src="../../../img/1280px-Flixbus_201x_logo.svg.png"
            class="logo-transport-type"
          /> 
          <img v-if="values.type === 'SNCF'"
            src="../../../img/Logo_SNCF_2011.svg.png"
            class="logo-transport-type"
          /> 
        </div>
        <div class="col-sm-8 norightpadding">
          <div class="row">
            <div class="col-sm-5 addrightpadding">
              <label for="depart" class="label_type">Departure: </label>
              <p class="text_type">{{values.depart }}</p>
            </div>
            <div class="col-sm-5 addrightpadding">
              <label for="status" class="label_type">Arrival:</label>
              <p class="text_type">{{ values.arrival }}</p>
            </div>
            <div class="col-sm-5 addrightpadding">
              <label for="status" class="label_type">Departure Time:</label>
              <p class="text_type">{{ values.departTime }}</p>
            </div>
            <div class="col-sm-5 addrightpadding">
              <label for="status" class="label_type">Arrival Time:</label>
              <p class="text_type">{{ values.arrivalTime }}</p>
            </div>
            <div class="col-sm-5 addrightpadding2">
              <label for="status" class="label_type">CO2 Emission:</label>
              <p class="text_type">{{ values.co2Emission }} gCO2e</p>
            </div>
            <div class="col-sm-5 addrightpadding2">
              <label for="status" class="label_type">Duration:</label>
              <p class="text_type">{{ values.duration }} min</p>
            </div>
          </div>
        </div>
        <div class="col-sm-2 noleftpadding">
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
        return{
        }
    },
    props:{
        values:{ String },
    },
    methods:{
      openWindow(){
        if (this.values.type == 'SNCF'){
          window.open('https://www.sncf-connect.com/app/home/search','_blank');
        }else if(this.values.type == 'Flixbus'){
          window.open('https://www.flixbus.fr/','_blank');
        }

      },
    },
    mounted(){

    },
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
    color: rgb(10, 55, 55);
    width: 35%;
    font-weight: 200;
    font-size: small;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    white-space: nowrap;
  }
  
  .logo-transport-type {
    margin-top: 10px;
    width: 100%;
    max-width: 80px;
  }

  .row{
    font-size: small;
  }
  .addrightpadding{
    width:50%;
    margin-bottom: 10px;
  }
  .addrightpadding2{
    width:50%;
  }
  .noleftpadding{
    padding-left: 0px;
  }
  .norightpadding{
    left: 20px;
    line-height: 15px;
    padding-right: 0px;
  }
  .addwidth{
    padding-left: 20px;
  }
  .linepadding{
    line-height: 14px;
  }


</style>