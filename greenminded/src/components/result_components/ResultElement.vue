<template>
    <div id="result_element">
        {{values.source}} {{values.destination}}
        {{values.departureTime}} {{values.arrivalTime}}
        {{values.co2Emission}} {{values.duration}}
    </div>
</template>

<script>
    export default {
        name: "ResultElement",
        components:{

        },
        data(){
            return{

            }
        },
        props:{
            values: {String}
        }
    }

</script>

<style scoped>
    #result_element{
        border-color: #81b622;
        border-radius: 5px;
        border-style: groove;
        margin-top: 5px;
        padding: 5px;
    }
</style>