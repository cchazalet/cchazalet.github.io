<template>
    <div class="fullscreen-section">
        <LeftSection
            :departureSNCFCityList="departureSNCFCityList" 
            :arrivalSNCFCityList="arrivalSNCFCityList" 
            :departureFlixbusCityList="departureFlixbusCityList" 
            :arrivalFlixbusCityList="arrivalFlixbusCityList"
            :searchCriteria="searchCriteria"
        ></LeftSection>
		<RightSection 
            :departureSNCFCityList="departureSNCFCityList" 
            :arrivalSNCFCityList="arrivalSNCFCityList" 
            :departureFlixbusCityList="departureFlixbusCityList" 
            :arrivalFlixbusCityList="arrivalFlixbusCityList"
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
            departureSNCFCityList:[],
            arrivalSNCFCityList:[],
            departureFlixbusCityList:[],
            arrivalFlixbusCityList:[],
        }
    },
    mounted() {
        API({
            url: "/journey/getCityGare",
            method: "post",
            data: {
                city: this.searchCriteria.source,
            },
        }).then((res) => {
            if (res.data.ok) {
                this.departureSNCFCityList = res.data.data.gareList
                this.departureSNCFCityList.unshift('--None--')
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
                this.arrivalSNCFCityList.unshift('--None--')
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
                this.departureFlixbusCityList.unshift('--None--')
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
                this.arrivalFlixbusCityList.unshift('--None--')
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