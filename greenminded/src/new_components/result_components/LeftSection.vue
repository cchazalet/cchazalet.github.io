<template>
    <div class="left">
        <div v-if="result_status=='begin'">Choose your Criterias on the left</div>
        <div v-else-if="result_status=='search'" class="search-bloc">
            Searching for Voyages
            <div class="middle">
                <fulfilling-bouncing-circle-spinner
                :animation-duration="4000"
                :size="100"
                color="#00b0ff"
                />
            </div>
        </div>
        <div v-else-if="result_status=='done'">
            <div v-for="(item,index) in trafficDataList" v-bind:key="index">
                <slot :data="item">
                    <IterElement :values="item"></IterElement>
                </slot>
            </div>
            <div v-for="(item,index) in trafficDataList_noPrice" v-bind:key="index">
                <slot :data="item">
                    <IterElement :values="item"></IterElement>
                </slot>
            </div>
        </div>
        <div v-else>No Result</div>
	</div> <!-- end .left -->
</template>

<script>
import API from '@/plugins/axiosInstance'
import IterElement from './IterElement.vue'
import { FulfillingBouncingCircleSpinner } from 'epic-spinners'

export default{
    name:'LeftSectionVue',
    components:{
        IterElement,
        FulfillingBouncingCircleSpinner,
    },
    data(){
        return{
            trafficSNCFList:[],
            trafficFlixbusList:[],
            trafficDataList:[],
            trafficDataList_noPrice:[],


            result_status:'begin',
            percent_sncf:0,
            percent_flixbus:0,

            oldSettingParams:{
                criterias:{
                    duration:5,
                    ecology:5,
                    price:5,
                },
                sncf:{
                    departSNCF:'',
                    arriveSNCF:'',
                },
                flixbus:{
                    departFlixbus:'',
                    arriveFlixbus:'',
                },
            }

        }


    },
    props:
    [
        // "departureSNCFCityList",
        // "arrivalSNCFCityList",
        // "departureFlixbusCityList",
        // "arrivalFlixbusCityList",
        "searchCriteria",
        "settingParams",
        "initialStations"
    ],
    watch:{
        // arrivalFlixbusCityList:'pseudo_mounted',
        initialStations:{
            handler(newVal){
                console.log(newVal)
                this.pseudo_mounted()
            },
            deep:true,
        },
        settingParams:{
            handler(newVal){
                // console.log(newVal.sncf,this.oldSettingParams.sncf, newVal.flixbus,this.oldSettingParams.flixbus,newVal.criterias,this.oldSettingParams.criterias)
                if (newVal.sncf.departSNCF != this.oldSettingParams.sncf.departSNCF 
                    || newVal.sncf.arriveSNCF != this.oldSettingParams.sncf.arriveSNCF){
                        // this.trafficSNCFList = [],
                        this.trafficDataList = [],
                        this.trafficDataList_noPrice = [],
                    console.log('setting parameters of sncf stations')
                    this.getSNCFResults(newVal.sncf.departSNCF, newVal.sncf.arriveSNCF)
                    this.oldSettingParams.sncf.departSNCF =newVal.sncf.departSNCF
                    this.oldSettingParams.sncf.arriveSNCF = newVal.sncf.arriveSNCF 
                }

                if (newVal.flixbus.departFlixbus != this.oldSettingParams.flixbus.departFlixbus 
                    || newVal.flixbus.arriveFlixbus != this.oldSettingParams.flixbus.arriveFlixbus){
                    console.log('setting parameters of flixbus stations')
                    // this.trafficSNCFList = [],
                    this.trafficDataList = [],
                    this.trafficDataList_noPrice = [],
                    this.getFlixbusResults(newVal.flixbus.departFlixbus, newVal.flixbus.arriveFlixbus)
                    this.oldSettingParams.flixbus.departFlixbus = newVal.flixbus.departFlixbus
                    this.oldSettingParams.flixbus.arriveFlixbus = newVal.flixbus.arriveFlixbus
                }

                if (newVal.criterias.price != this.oldSettingParams.criterias.price 
                    || newVal.criterias.duration != this.oldSettingParams.criterias.duration 
                    || newVal.criterias.ecology != this.oldSettingParams.criterias.ecology){
                    console.log('setting parameters of criterias')
                    if (this.trafficDataList != []  
                        && newVal.sncf.departSNCF == this.oldSettingParams.sncf.departSNCF
                        && newVal.sncf.arriveSNCF == this.oldSettingParams.sncf.arriveSNCF
                        && newVal.flixbus.arriveFlixbus == this.oldSettingParams.flixbus.arriveFlixbus
                        && newVal.flixbus.departFlixbus == this.oldSettingParams.flixbus.departFlixbus){
                        this.calculateRank()
                    }
                    this.oldSettingParams.criterias.duration = newVal.criterias.duration
                    this.oldSettingParams.criterias.ecology = newVal.criterias.ecology
                    this.oldSettingParams.criterias.price = newVal.criterias.price
                }

            },  
            deep:true,
        },
        trafficSNCFList:{
            handler(){
                console.log('successfully get sncf traffics')
                this.combineData()
            },
            deep:true
        },
        trafficFlixbusList:{
            handler(){   
                console.log('successfully get flixbus traffics')         
                this.combineData()
            },
            deep:true
        }
    },
    mounted(){


    },
    methods:{
        pseudo_mounted(){
            console.log(this.initialStations)
            if (this.initialStations.departSNCF != '' && this.initialStations.arriveSNCF != ''){
                console.log('getting first SNCF result')
                this.getSNCFResults(this.initialStations.departSNCF, this.initialStations.arriveSNCF)
            }
            if (this.initialStations.departFlixbus != '' && this.initialStations.arriveFlixbus != ''){
                console.log('getting first Flixbus result')
                this.getFlixbusResults(this.initialStations.departFlixbus, this.initialStations.arriveFlixbus)
            }
            this.oldSettingParams.sncf.departSNCF=this.initialStations.departSNCF
            this.oldSettingParams.sncf.arriveSNCF=this.initialStations.arriveSNCF
            this.oldSettingParams.flixbus.departFlixbus=this.initialStations.departFlixbus
            this.oldSettingParams.flixbus.arriveFlixbus=this.initialStations.arriveFlixbus
        },
        getSNCFResults(depart, arrival){
            this.result_status = 'search'
            // console.log(this.result_status)
            API({
                url:'/journey/getJourneyInfo',
                method:'post',
                data: {
                    date: this.searchCriteria.date,
                    destination: arrival,
                    hour: parseInt(this.searchCriteria.hour.slice(0,2)),
                    source: depart,
                }
            }).then((res)=>{
                if (res.data.ok){
                    this.result_status = 'sncf'
                    this.trafficSNCFList = res.data.data.journeyVOList
                }else{
                    console.log('ERROR SNCF Result')
                    this.trafficSNCFList = []
                }
            })
        },
        getFlixbusResults(depart, arrival){
            this.result_status = 'search'
            API({
                url:'flixbus/getFlixbusTrips',
                method:'post',
                data:{
                    date: this.searchCriteria.date_,
                    destination: arrival,
                    source:depart,
                }
            }).then((res)=>{
                if(res.data.ok){
                    // console.log('ok')
                    this.trafficFlixbusList = res.data.data.flixbusTripBOs
                }else{
                    console.log('ERROR Flixbus Result')
                    this.trafficFlixbusList = []
                }
            })
        },
        calculateRank(){
            console.log('Calculating the Ranking of total traffics')
            // Calulate Average
            let avg_duration = 0.
            let avg_ecology = 0.
            let avg_price = 0.
            let dataLength = this.trafficDataList.length

            this.trafficDataList.forEach((element)=>{
                avg_duration += Number(element.duration)
                avg_ecology += Number(element.co2Emission)
                avg_price += Number(element.economy)
            })

            avg_duration = avg_duration/dataLength
            avg_ecology = avg_ecology/dataLength
            avg_price = avg_price/dataLength

            // Calculate Score
            this.trafficDataList.forEach((element)=>{
                let score = Number(element.duration) / avg_duration * this.settingParams.criterias.duration + Number(element.economy) / avg_price * this.settingParams.criterias.price + Number(element.co2Emission) / avg_ecology * this.settingParams.criterias.ecology
                element.score = score
            })

            this.trafficDataList.sort(function(a,b){
                return a.score - b.score
            })

            this.result_status = 'done'
            // console.log(this.trafficDataList)

        },
        
        transformSNCFData(element){
            if(element.prix == -1){
                this.trafficDataList_noPrice.push({
                    depart: element.source,
                    arrival: element.destination,
                    departTime: element.departureTime,
                    arrivalTime: element.arrivalTime,
                    co2Emission: element.co2Emission,
                    duration: element.duration,
                    economy: '--',
                    score: 0,
                    type:'SNCF',
                })
            }else{
                this.trafficDataList.push({
                    depart: element.source,
                    arrival: element.destination,
                    departTime: element.departureTime,
                    arrivalTime: element.arrivalTime,
                    co2Emission: element.co2Emission,
                    duration: element.duration,
                    economy: element.prix,
                    score: 0,
                    type:'SNCF',
                })
            }

            // console.log('push')
        },
        transformFlixbusData(element){
            if(element.price == -1){
                this.trafficDataList_noPrice.push({
                    depart: this.settingParams.flixbus.departFlixbus,
                    arrival: this.settingParams.flixbus.arriveFlixbus,
                    departTime: element.depatureTime,
                    arrivalTime: element.arrivalTime,
                    co2Emission: element.co2Emission,
                    duration: this.transformHToMin(element.duration),
                    economy: '--',
                    msg: element.msg,
                    score: 0,
                    type:'Flixbus',                
                })
            }else{
                this.trafficDataList.push({
                    depart: this.settingParams.flixbus.departFlixbus,
                    arrival: this.settingParams.flixbus.arriveFlixbus,
                    departTime: element.depatureTime,
                    arrivalTime: element.arrivalTime,
                    co2Emission: element.co2Emission,
                    duration: this.transformHToMin(element.duration),
                    economy: element.price,
                    msg: element.msg,
                    score: 0,
                    type:'Flixbus',                
                })
            }

        },
        transformHToMin(heure){
            let timePair = heure.split('h')
            return Number(timePair[0])*60+Number(timePair[1])
        },
        combineData(){
            this.trafficDataList=[]

            if (this.trafficSNCFList!=[]){
                this.trafficSNCFList.forEach((element)=>{
                    this.transformSNCFData(element)
                })
            }

            if (this.trafficFlixbusList!=[]){
                this.trafficFlixbusList.forEach((element)=>{
                    this.transformFlixbusData(element)
                })
            }


            if(this.trafficDataList!=[]){
                this.calculateRank()
            }else if(this.trafficDataList_noPrice!=[]){
                this.result_status = 'none'
            }else{
               this.result_status = "done"
            }

        },
    }
    
}

</script>

<style scoped>

    .left{
        padding: 50px;
        /* width: 800px; */
    }

    .search-bloc{
        vertical-align: middle;
        width: fit-content;
        text-align: center;
        padding: 0 40%;
    }

    .middle{
        width: 100%;
        display: table-cell;
        text-align: center;
        padding-top: 20px;
        padding-left: 50px;
    }
</style>