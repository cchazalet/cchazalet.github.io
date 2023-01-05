<template>
    <div id = "result_list">
        <div v-for="(item,index) in result_list" v-bind:key="index">
            <slot :data="item">
                <TrainResultElement :values="item"></TrainResultElement>
            </slot>
        </div>
    </div>

</template>

<script>
    import TrainResultElement from './TrainResultElement.vue'

    export default {
        name: 'ResultListElement',
        components:{
            TrainResultElement,
        },
        data(){
            return{
                //result_list: [1,2,3,4],
            }
        },
        props: {
            result_list: Array
        }
    }
</script>

<style scoped>

</style>