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