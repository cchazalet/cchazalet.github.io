<template>
    <div id = "search_criteria">
        <div id = "sub_search">
            <h4>{{msg.source || 'Paris-Gare-de-Lyon'}}->{{msg.destination || 'Lyon-Part-Dieu'}}</h4>
            <h4>  </h4>
            <h4>{{msg.date || '15-12-2022'}} {{msg.hour || '10h26'}}</h4>
        </div>
        <div id = "sub_search">
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
        border-radius: 5px;
        border-color: #81b622;
        border-width: 2px;
        border-style: solid;
        height: 100px;
        width: auto;
        margin: 10px;
        text-align: center;
    }

    #sub_search {
        width: 50%;
        display: inline-block;
    }
</style>