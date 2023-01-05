<template>
    <div id="train_search">
        <div class="title_element">
            Train
        </div>
        <div class="search_element">
            <input type="text" placeholder="Choose A Station" v-model="departure" list="departList">
            <datalist id="departList">
                <option v-for="(item, index) in departureCityList" v-bind:key="index">{{item}}</option>
            </datalist>
        </div>
        <div class="search_element">
            <input type="text" placeholder="Choose A Station" v-model="arrival" list="departList">
            <datalist id="arrivalList">
                <option v-for="(item, index) in arrivalCityList" v-bind:key="index">{{item}}</option>
            </datalist>
        </div>
    </div>

</template>

<script>
    import API from '../../plugins/axiosInstance'

    export default{
        name:"TrainSearchElement",
        components:{

        },
        data(){
            return{
                departure: '',
                arrival:'',
                departureCityList:[],
                arrivalCityList:[],
            }
        },
        props:{
            departure_city: String,
            arrival_city: String,
        },
        methods:{

        },
        mounted(){
            API({
                url:'/journey/getCityGare',
                method:'post',
                data:{
                    city:this.departure_city
                }
            }).then((res)=>{
                if(res.data.ok){
                    this.departureCityList = res.data.data.gareList
                }else{
                    console.log('ERROR!')
                    console.log(res.data.code)
                }
            })

            API({
                url:'/journey/getCityGare',
                method:'post',
                data:{
                    city:this.arrival_city
                }
            }).then((res)=>{
                if(res.data.ok){
                    this.arrivalCityList = res.data.data.gareList
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