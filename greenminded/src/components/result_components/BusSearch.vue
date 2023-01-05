<template>
    <div id="bus_search">
        <div class="title_element">
            Bus
        </div>
        <div class="search_element">
            <input type="text" placeholder="Choose A Station" v-model="departure" list="departBusList">
            <datalist id="departBusList">
                <option v-for="(item, index) in departureBusCityList" v-bind:key="index">{{item}}</option>
            </datalist>
        </div>
        <div class="search_element">
            <input type="text" placeholder="Choose A Station" v-model="arrival" list="arrivalBusList">
            <datalist id="arrivalBusList">
                <option v-for="(item, index) in arrivalBusCityList" v-bind:key="index">{{item}}</option>
            </datalist>
        </div>
        <button @click="searchBus">CHERCHER</button>
    </div>

</template>

<script>
    import API from '../../plugins/axiosInstance'

    export default{
        name:"BusSearchElement",
        components:{

        },
        data(){
            return{
                departure: '',
                arrival:'',
                departureBusCityList:[],
                arrivalBusCityList:[],
            }
        },
        props:['departure_city','arrival_city','getBusResults'],
        methods:{
            searchDepartureCity(){
                API({
                    url:'/flixbus/getCityStations',
                    method:'post',
                    data:{
                        city:this.departure_city
                    }
                }).then((res)=>{
                    if(res.data.ok){
                        this.departureBusCityList = res.data.data.cityStations
                    }else{
                        console.log('ERROR!')
                        console.log(res.data.code)
                    }
                })
            },
            searchArrivalCity(){
                API({
                    url:'/flixbus/getCityStations',
                    method:'post',
                    data:{
                        city:this.arrival_city
                    }
                }).then((res)=>{
                    if(res.data.ok){
                        this.arrivalBusCityList = res.data.data.cityStations
                    }else{
                        console.log('ERROR!')
                        console.log(res.data.code)
                    }
                })
            },
            searchBus(){
                this.getBusResults(this.departure, this.arrival)
            }
        },
        mounted(){
            API({
                url:'/flixbus/getCityStations',
                method:'post',
                data:{
                    city:this.departure_city
                }
            }).then((res)=>{
                if(res.data.ok){
                    this.departureBusCityList = res.data.data.cityStations
                }else{
                    console.log('ERROR!')
                    console.log(res.data.code)
                }
            })

            API({
                url:'/flixbus/getCityStations',
                method:'post',
                data:{
                    city:this.arrival_city
                }
            }).then((res)=>{
                if(res.data.ok){
                    this.arrivalBusCityList = res.data.data.cityStations
                }else{
                    console.log('ERROR!')
                    console.log(res.data.code)
                }
            })

        }
    }
</script>

<style scoped>
    .title_element{
        display:inline-block;
        width: 20%;
    }

    .search_element{
        display: inline-block;
        width: 20%;
    }

</style>