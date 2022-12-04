<template>
    <div id = "result_list">
        <div v-for="(item,index) in result_list" v-bind:key="index">
            <slot :data="item">{{item}}</slot>
        </div>
    </div>

</template>

<script>

    export default {
        name: 'ResultListElement',
        components:{

        },
        data(){
            return{
                result_list: [1,2,3,4],
            }
        },
    }
</script>

<style scoped>

</style>