<template>
    <div id = "result_list">
        <div v-for="(item,index) in result_list" v-bind:key="index">
            <slot :data="item">
                <BusResultElement :values="item" :depart="bus_depart" :arrival="bus_arrival"></BusResultElement>
            </slot>
        </div>
    </div>

</template>

<script>
    import BusResultElement from './BusResultElement.vue';

    export default {
        name: 'BusResultListElement',
        components:{
            BusResultElement,
        },
        data(){
            return{
                //result_list: [1,2,3,4],
            }
        },
        props: {
            result_list: Array,
            bus_depart: String,
            bus_arrival: String,
        }
    }
</script>

<style scoped>

</style>