<template>
    <div class="fullscreen-section">
        <LeftSection
            :searchCriteria="searchCriteria"
            :settingParams="settingParams"
            :initialStations="initialStations"
        ></LeftSection>
		<RightSection 
            :departureSNCFCityList="departureSNCFCityList" 
            :arrivalSNCFCityList="arrivalSNCFCityList" 
            :departureFlixbusCityList="departureFlixbusCityList" 
            :arrivalFlixbusCityList="arrivalFlixbusCityList"
            :saveSettingParams="saveSettingParams"
            :destination="searchCriteria.destination"
        ></RightSection>
	</div> <!-- end .section -->
</template>

<script>
import RightSection from './result_components/RightSection.vue';
import LeftSection from './result_components/LeftSection.vue';
import API from '@/plugins/axiosInstance';


export default{
    name:'ResultVue',
    components:{
        RightSection,
        LeftSection,
    },
    data(){
        return{
            searchCriteria: this.$route.query,
            initialStations: {
                departSNCF: '',
                arriveSNCF: '',
                departFlixbus: '',
                arriveFlixbus: '',
            },
            departureSNCFCityList:[],
            arrivalSNCFCityList:[],
            departureFlixbusCityList:[],
            arrivalFlixbusCityList:[],

            // Setting Parameters
            settingParams:{
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
    methods:{
        saveSettingParams(duration, ecology, price,
            departSNCF, arriveSNCF, departFlixbus, arriveFlixbus){
                // console.log('..............')
                this.settingParams.criterias.duration = duration
                this.settingParams.criterias.ecology = ecology
                this.settingParams.criterias.price = price
                this.settingParams.sncf.departSNCF = departSNCF
                this.settingParams.sncf.arriveSNCF = arriveSNCF
                this.settingParams.flixbus.departFlixbus = departFlixbus
                this.settingParams.flixbus.arriveFlixbus = arriveFlixbus
                // console.log(this.settingParams)
                // console.log('hi')
        }
    },
    mounted() {
        this.initialStations.departSNCF = this.searchCriteria.departSNCF
        this.initialStations.arriveSNCF = this.searchCriteria.arriveSNCF
        this.initialStations.departFlixbus = this.searchCriteria.departFlixbus
        this.initialStations.arriveFlixbus = this.searchCriteria.arriveFlixbus
        console.log(this.initialStations)

        
        API({
            url: "/journey/getCityGare",
            method: "post",
            data: {
                city: this.searchCriteria.source,
            },
        }).then((res) => {
            if (res.data.ok) {
                this.departureSNCFCityList = res.data.data.gareList
                // this.departureSNCFCityList.unshift('--None--')
            } else {
                console.log("ERROR!");
                console.log(res.data.code);
            }
        });

        API({
            url: "/journey/getCityGare",
            method: "post",
            data: {
                city: this.searchCriteria.destination,
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
                city:this.searchCriteria.source
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

        API({
            url:'/flixbus/getCityStations',
            method:'post',
            data:{
                city:this.searchCriteria.destination
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
}
</script>

<style scoped>

</style>