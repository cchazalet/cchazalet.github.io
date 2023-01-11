<template>
    <div id="rank-list">
        <OptControlerVue :saveSortParameters="saveSortParameters"></OptControlerVue>
        <div v-for="(item,index) in result_sorted" v-bind:key="index">
            <slot :data="item">
                <RankResultElement :values="item"></RankResultElement>
            </slot>
        </div>
    </div>

</template>
<script>
import OptControlerVue from './OptControler.vue';
import RankResultElement from './RankResultElement.vue';

export default{
    name:'RankResultListVue',
    components:{
        OptControlerVue,
        RankResultElement,
    },
    data(){
        return{
            result_sorted: this.result_sorted
        }
    },
    props:{
        trainData:Array,
        busData:Array,
        departure_city:String,
        arrival_city:String,
    },
    methods:{
        saveSortParameters(duration, co2, ecology){
            let sum = duration + co2 + ecology
            let prop_co2 = co2 / sum
            let prop_duration = duration / sum
            let prop_ecology = ecology /sum
            // console.log(prop_co2, prop_duration, prop_ecology)
            this.sortResults(prop_co2, prop_duration, prop_ecology)
        },
        sortResults(prop_co2, prop_duration, prop_ecology){
            //Calculate the average for 3 criterias
            let avg_duration = 0.
            let avg_co2 = 0.
            let avg_ecology = 0.
            // console.log(typeof(this.trainData))
            // let index_sum = this.trainData.length + this.busData.length
            let index_sum = 0

            this.trainData.forEach((element)=>{
                avg_co2 = avg_co2 + element.co2Emission
                avg_duration = avg_duration + Number(element.duration)
                avg_ecology = avg_ecology + Number(element.prix)
                index_sum = index_sum + 1
            })

            this.busData.forEach((element)=>{
                avg_duration = avg_duration + this.transformHToMin(element.duration)
                avg_ecology = avg_ecology + Number(element.price)
                index_sum = index_sum + 1
            })

            

            avg_duration = avg_duration / index_sum
            avg_co2 = avg_co2 / index_sum
            avg_ecology = avg_ecology /index_sum

            // console.log(avg_co2, avg_duration, avg_ecology, typeof(avg_co2))

            //Calculer the score for each result
            // console.log('Calculer the score for each result')
            // console.log(this.trainData)
            // console.log(this.busData)
            let result_sorted = []
            this.trainData.forEach((element)=>{
                let score = element.co2Emission / avg_co2 * prop_co2 + Number(element.duration) / avg_duration * prop_duration + Number(element.prix) / avg_ecology * prop_ecology
                result_sorted.push({
                    depart: element.source,
                    arrival: element.destination,
                    departTime: element.departureTime,
                    arrivalTime: element.arrivalTime,
                    co2Emission: element.co2Emission,
                    duration: element.duration,
                    economy: element.prix,
                    score: score,
                    type:'SNCF',
                })
            })

            this.busData.forEach((element)=>{
                let score = this.transformHToMin(element.duration) / avg_duration * prop_duration + Number(element.price) / avg_ecology * prop_ecology
                // console.log(avg_duration)
                result_sorted.push({
                    depart: this.departure_city,
                    arrival: this.arrival_city,
                    departTime: element.depatureTime,
                    arrivalTime: element.arrivalTime,
                    co2Emission: 'unknown',
                    duration: element.duration,
                    economy: element.price,
                    msg: element.msg,
                    score: score,
                    type:'Flixbus',
                })
            })

            // Sort the result
            result_sorted.sort(function(a,b){
                return a.score - b.score 
            })
            console.log(result_sorted)
            this.result_sorted = result_sorted

        },
        transformHToMin(heure){
            let timePair = heure.split('h')
            return Number(timePair[0])*60+Number(timePair[1])
        }
    },
}
</script>
<style scoped>

</style>