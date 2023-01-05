<template>
    <div id = "search_criteria">
        <div id = "sub_search1">
            <h4>{{msg.source || 'Paris-Gare-de-Lyon'}}->{{msg.destination || 'Lyon-Part-Dieu'}}</h4>
            <h4>  </h4>
            <h4>{{msg.date_ || '15-12-2022'}} {{msg.hour || '10h26'}}</h4>
        </div>
        <div id = "sub_search2">
            <h4>Price:    {{msg.price}}</h4>
            <h4>Duration: {{msg.duration}}</h4>
            <h4>Ecology:  {{msg.ecology}}</h4>
        </div>
    </div>

</template>

<script>
    export default{
        name: 'SearchCriteria',
        props:{
            msg: {String}
        }
    }

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

    #sub_search2{
        width: 30%;
        display: inline-block;
        padding-left: 20px;
    }
</style>