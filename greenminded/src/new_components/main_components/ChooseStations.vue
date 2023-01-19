<template>
    <div class="blog-content" v-show="show">
        <div class="blog-container">
    `        <div class="blog-header">
                <h4>Choisir Les Stations Correspondantes</h4>
            </div>
            <div class="blog-main">
                <form>
                    <div class="sncf-title">
                        <h4>Gare SNCF :</h4>
                    </div>
                    <div class="sncf-stations row">
                        <div class="col-sm-2">
                            <p>Depart</p>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <select v-model="departSNCF">
                                    <option v-for="(item, index) in departureSNCFCityList" v-bind:key="index">
                                        {{ item }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <!-- end .col-sm-4 -->
                        <div class="col-sm-2">
                            <p>Arrivée</p>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <select v-model="arriveSNCF">
                                    <option v-for="(item, index) in arrivalSNCFCityList" v-bind:key="index">
                                        {{ item }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <!-- end .col-sm-4 -->
                    </div>
                    <div class="sncf-title">
                        <h4>Gare Flixbus:</h4>
                    </div>
                    <div class="flixbus-stations row">
                        <div class="col-sm-2">
                            <p>Depart</p>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <select v-model="departFlixbus">
                                    <option v-for="(item, index) in departureFlixbusCityList" v-bind:key="index">
                                        {{ item }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <!-- end .col-sm-4 -->
                        <div class="col-sm-2">
                            <p>Arrivée</p>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <select v-model="arriveFlixbus">
                                    <option v-for="(item, index) in arrivalFlixbusCityList" v-bind:key="index">
                                        {{ item }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <!-- end .col-sm-4 -->
                    </div>
                </form>
            </div>
            <div class="blog-footer">
                <div class="button-div">
                    <button class="button" @click="search">CHERCHER</button>
                </div>
                <div class="button-div">
                    <button class="button" @click="close">FERMER</button>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>

    import API from '@/plugins/axiosInstance'

    export default {
        name:"ChooseStationsVue",
        data(){
            return{
                chosenCities:{
                    departure:'',
                    arrival:'',
                },
                departureSNCFCityList:[],
                arrivalSNCFCityList:[],
                departureFlixbusCityList:[],
                arrivalFlixbusCityList:[],

                departSNCF:'',
                arriveSNCF:'',
                departFlixbus:'',
                arriveFlixbus:'',
                
            }
        },
        props:{
            values:{
                type:Object,
                default:NaN,
            },
            show:{
                type:Boolean,
                default:false,
                require:true,
            },
            hideBloc:{
                type:Function,
            }
        },
        watch:{
            show:{
                handler(){
                    if(this.values.departure != this.chosenCities.departure){
                        console.log('searching for departure stations')
                        this.searchDeparture()
                        this.chosenCities.departure = this.values.departure
                    }
                    if(this.values.arrival != this.chosenCities.arrival){
                        console.log('searching for arrival stations')
                        this.searchArrival()
                        this.chosenCities.arrival = this.values.arrival
                    }
                },
                deep:true
            }
        },
        methods:{
            searchDeparture(){
                API({
                    url: "/journey/getCityGare",
                    method: "post",
                    data: {
                        city: this.values.departure,
                    },
                }).then((res) => {
                    if (res.data.ok) {
                        this.departureSNCFCityList = res.data.data.gareList
                        // console.log(res.data.data.gareList)
                        // this.departureSNCFCityList.unshift('--None--')
                    } else {
                        console.log("ERROR!");
                        console.log(res.data.code);
                    }
                });

                API({
                    url:'/flixbus/getCityStations',
                    method:'post',
                    data:{
                        city:this.values.departure,
                    }
                }).then((res)=>{
                    if(res.data.ok){
                        this.departureFlixbusCityList = res.data.data.cityStations
                        //this.departureFlixbusCityList.unshift('--None--')
                    }else{
                        console.log('ERROR!')
                        console.log(res.data.code)
                    }
                })

            },
            searchArrival(){
                API({
                    url: "/journey/getCityGare",
                    method: "post",
                    data: {
                        city: this.values.arrival,
                    },
                }).then((res) => {
                    if (res.data.ok) {
                        this.arrivalSNCFCityList = res.data.data.gareList;
                        //this.arrivalSNCFCityList.unshift('--None--')
                    } else {
                        console.log("ERROR!");
                        console.log(res.data.code);
                    }
                });

                API({
                    url:'/flixbus/getCityStations',
                    method:'post',
                    data:{
                        city:this.values.arrival
                    }
                }).then((res)=>{
                    if(res.data.ok){
                        this.arrivalFlixbusCityList = res.data.data.cityStations
                        //this.arrivalFlixbusCityList.unshift('--None--')
                    }else{
                        console.log('ERROR!')
                        console.log(res.data.code)
                    }
                })

            },
            search(){
                var reg1 = new RegExp("-", "g");
                this.$router.push({
                    name: "result",
                    query: {
                        source: this.values.departure,
                        destination: this.values.arrival,
                        hour: this.values.time,
                        date: this.values.date.replace(reg1, ""),
                        date_: this.values.date,
                        departSNCF: this.departSNCF,
                        arriveSNCF: this.arriveSNCF,
                        departFlixbus: this.departFlixbus,
                        arriveFlixbus: this.arriveFlixbus,
                    },
                });
            },
            close(){
                this.hideBloc()
            }
        }
    }
</script>
    
<style scoped>
    .col-sm-2{
        text-align: center;
    }
    .blog-content{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, .4);
        z-index: 999;
        padding-top: 50px;
        padding-bottom: 50px;
        padding-left: 100px;
        padding-right: 100px;
        text-align: center;
    }

    .blog-container{
        padding: 15px 20px;
        border-radius: 10px;
        margin: 200px 200px 200px 200px;
        background: rgba(255, 255, 255, .9);
        min-height: 500px;
        position: relative;
        width:100%;

    }

    .blog-header{
        border-bottom: 1px solid gray;
        margin-bottom: 10px;
        margin-top: 50px;
    }

    .blog-infos{
        text-align: right;
        padding-right: 10px;
        margin-bottom: 10px;
    }

    .blog-main{
        display: block;
        height: calc(80% - 50px);
        padding: 0 20px;
        text-align: justify;
    }

    .blog-footer{
        vertical-align:middle;
        bottom: 0;
        position:absolute;
        margin-bottom: 20px;
        width: 100%;
    }
    
    .button-div{
        margin-bottom: 10px;
    }

    .button {
        width: 200px;
    }
</style>