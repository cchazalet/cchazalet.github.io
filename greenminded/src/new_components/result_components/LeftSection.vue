<template>
    <div class="left">
        <div v-if="result_status=='search'">Searching for Voyages</div>
        <div v-else-if="result_status=='sncf'">Searching for SNCF Voyages {{percent_sncf}}%</div>
        <div v-else-if="result_status=='flixbus'">Searching for Flixbus Voyages {{percent_flixbus}}%</div>
        <div v-else-if="result_status=='done'">
            <div v-for="(item,index) in result_list" v-bind:key="index">
                <slot :data="item">
                    <!-- <TrainResultElement :values="item"></TrainResultElement> -->
                </slot>
            </div>
        </div>
        <div v-else>No Result</div>
        {{trafficDataList}}
        {{trafficSNCFList}}
        {{trafficFlixbusList}}
	</div> <!-- end .left -->
</template>

<script>
import API from '@/plugins/axiosInstance'

export default{
    name:'LeftSectionVue',
    components:{

    },
    data(){
        return{
            trafficSNCFList:[],
            trafficFlixbusList:[],
            trafficDataList:[],


            result_status:'search',
            percent_sncf:0,
            percent_flixbus:0

        }


    },
    props:["departureSNCFCityList",
        "arrivalSNCFCityList",
        "departureFlixbusCityList",
        "arrivalFlixbusCityList",
        "searchCriteria"],
    watch:{
        arrivalFlixbusCityList:'pseudo_mounted'
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