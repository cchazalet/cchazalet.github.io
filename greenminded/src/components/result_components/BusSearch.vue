<template>
    <div id="bus_search">
        <div class="title_element">
            Bus
        </div>
        <div class="search_element">
            <input type="text" placeholder="Choose A Station" v-model="departure" list="departBusList" class="form-control search-slt">
            <datalist id="departBusList">
                <option v-for="(item, index) in departureBusCityList" v-bind:key="index">{{item}}</option>
            </datalist>
        </div>
        <div class="search_element">
            <input type="text" placeholder="Choose A Station" v-model="arrival" list="arrivalBusList" class="form-control search-slt">
            <datalist id="arrivalBusList">
                <option v-for="(item, index) in arrivalBusCityList" v-bind:key="index">{{item}}</option>
            </datalist>
        </div>
        <input name="submit" value="Search" class="btn btn-success
                                                      btn-lg btn-block wrn-btn" type="submit"
                            @click="searchBus()">  
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

    .bus_search{
        position: relative;
        width: 100%;
    }
    .title_element{
        display:inline-block;
        width: 20%;
    }

    .search_element{
        display: inline-block;
        width: 20%;
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
    font-size: 16px;
    font-weight: 400;
    text-transform: capitalize;
    height: calc(3rem + 2px) !important;
    border-radius: 0;
}


</style>