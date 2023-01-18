<template>
    <div class="left">
        <div v-if="result_status=='search'">Searching for Voyages</div>
        <div v-else-if="result_status=='sncf'">Searching for SNCF Voyages {{percent_sncf}}%</div>
        <div v-else-if="result_status=='flixbus'">Searching for Flixbus Voyages {{percent_flixbus}}%</div>
        <div v-else-if="result_status=='done'">
            <div v-for="(item,index) in fakeDataList" v-bind:key="index">
                <slot :data="item">
                    <IterElement :values="item"></IterElement>
                    <!-- <TrainResultElement :values="item"></TrainResultElement> -->
                </slot>
            </div>
        </div>
        <div v-else>No Result</div>
        <!-- {{trafficDataList}}
        {{trafficSNCFList}}
        {{trafficFlixbusList}} -->
        {{settingParams}}
	</div> <!-- end .left -->
</template>

<script>
import API from '@/plugins/axiosInstance'
import IterElement from './IterElement.vue'

export default{
    name:'LeftSectionVue',
    components:{
        IterElement
    },
    data(){
        return{
            trafficSNCFList:[],
            trafficFlixbusList:[],
            trafficDataList:[],


            result_status:'done',
            percent_sncf:0,
            percent_flixbus:0,

            //fake information
            fakeDataList:[
                {
                    depart: 'Lyon',
                    arrival: 'Paris',
                    departTime: 'depart time',
                    arrivalTime: 'arrive time',
                    co2Emission: 58,
                    duration: 112,
                    economy: 19,
                    msg: 'msg',
                    score: 0,
                    type:'Flixbus',
                },{
                    depart: 'Lyon',
                    arrival: 'Paris',
                    departTime: 'depart time',
                    arrivalTime: 'arrive time',
                    co2Emission: 3,
                    duration: 20,
                    economy: 12,
                    msg: 'msg',
                    score: 0,
                    type:'SNCF',
                },
                {
                    depart: 'Lyon',
                    arrival: 'Paris',
                    departTime: 'depart time',
                    arrivalTime: 'arrive time',
                    co2Emission: 78,
                    duration: 50,
                    economy: 16,
                    msg: 'msg',
                    score: 0,
                    type:'SNCF',
                },

  
            ]

        }


    },
    props:
    // {
    //     departureSNCFCityList:[String],
    //     arrivalSNCFCityList:[String],
    //     departureFlixbusCityList:[String],
    //     arrivalFlixbusCityList:[String],
    //     searchCriteria:{
    //         source: String,
    //         destination: String,
    //         hour: String,
    //         date: String,
    //         date_: String,
    //     },
    //     settingParams:{
    //         duration:Number,
    //         ecology:Number,
    //         price:Number,
    //         departSNCF:String,
    //         arriveSNCF:String,
    //         departFlixbus:String,
    //         arriveFlixbus:String,
    //     },

    // },
    [
        "departureSNCFCityList",
        "arrivalSNCFCityList",
        "departureFlixbusCityList",
        "arrivalFlixbusCityList",
        "searchCriteria",
        "settingParams",
        ],
    watch:{
        // arrivalFlixbusCityList:'pseudo_mounted',
        //settingParams:'calculateRank',
        settingParams:{
            handler(){
                this.calculateRank()
            },
            deep:true,

        }
    },
    mounted(){
        console.log('mounted')     


    },
    methods:{
        pseudo_mounted(){
            console.log('function pseudo_mounted here')
            // console.log(this.departureFlixbusCityList.length,
            //         this.departureSNCFCityList.length,
            //         this.arrivalFlixbusCityList.length,
            //         this.arrivalSNCFCityList.length)
            let unit_sncf_search = 1/this.departureSNCFCityList.length
            // let count = 0
            // console.log(this.result_status)
            this.departureSNCFCityList.forEach((depart_e) => {
                if(depart_e!='--None--'){
                    this.arrivalSNCFCityList.forEach((arrive_e) => {
                        if (arrive_e!='--None--'){
                            this.getSNCFResults(depart_e,arrive_e,unit_sncf_search)
                        }
                    })
                    // count += 1
                    
                }


            })

            let unit_flixbus_search = 1/this.departureFlixbusCityList.length

            // console.log(this.result_status)
            this.departureFlixbusCityList.forEach((depart_e) => {
                if(depart_e!='--None--'){
                    this.arrivalFlixbusCityList.forEach((arrive_e) => {
                        if (arrive_e!='--None--'){
                            console.log('hi!')
                            this.getFlixbusResults(depart_e,arrive_e,unit_flixbus_search)
                        }
                    })

                }
            }) 

            // this.combineData()


        },
        calculateRank(){
            console.log('calculateRank')
            // Calulate Average
            let avg_duration = 0.
            let avg_ecology = 0.
            let avg_price = 0.
            let dataLength = this.fakeDataList.length

            this.fakeDataList.forEach((element)=>{
                avg_duration += element.duration
                avg_ecology += element.co2Emission
                avg_price += element.economy
            })

            avg_duration = avg_duration/dataLength
            avg_ecology = avg_ecology/dataLength
            avg_price = avg_price/dataLength

            // Calculate Score
            this.fakeDataList.forEach((element)=>{
                let score = element.duration / avg_duration * this.settingParams.duration + Number(element.economy) / avg_price * this.settingParams.price + Number(element.co2Emission) / avg_ecology * this.settingParams.ecology
                element.score = score
            })

            this.fakeDataList.sort(function(a,b){
                return a.score - b.score
            })

        },
        getSNCFResults(depart, arrival,unit){
            this.trainResultState = 'Chercher'
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
                    this.percent_sncf += unit
                    res.data.data.journeyVOList.forEach((element)=>{
                        this.transformSNCFData(element)
                    })
                }else{
                    // console.log('ERROR!')
                    // console.log(res.data.code)
                }
            })
        },
        getFlixbusResults(depart, arrival,unit){
            this.busResultState = 'Chercher'
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
                    this.result_status = 'flixbus'
                    this.percent_flixbus += unit
                    res.data.data.flixbusTripBOs.forEach((element)=>{
                        this.transformFlixbusData(element, depart, arrival)
                    })
                }else{
                    // console.log('ERROR!')
                    // console.log(res.data.code)
                }
            })
        },
        transformSNCFData(element){
            this.trafficSNCFList.push({
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
        },
        transformFlixbusData(element,depart,arrive){
            this.trafficFlixbusList.push({
                depart: depart,
                arrival: arrive,
                departTime: element.depatureTime,
                arrivalTime: element.arrivalTime,
                co2Emission: 'unknown',
                duration: element.duration,
                economy: element.price,
                msg: element.msg,
                score: 0,
                type:'Flixbus',                
            })
        },
        transformHToMin(heure){
            let timePair = heure.split('h')
            return Number(timePair[0])*60+Number(timePair[1])
        },
        combineData(){
            this.trafficDataList=[]
            this.trafficDataList.concat(this.trafficFlixbusList)
            this.trafficDataList.concat(this.trafficSNCFList)
            if(this.trafficDataList.length==0){
                this.result_status='none'
            }else{
                this.result_status='done'
            }
        },
    }
    
}

</script>

<style scoped>

    .left{
        padding: 50px;
    }
</style>