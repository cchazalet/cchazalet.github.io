<template>
    <div class="modal-bg" v-show="show">
        <div class="modal-container">
            <!-- <div class="modal-header">
                {{title}}
            </div> -->
            <div class="modal-main">
                <slot></slot>
            </div>
            <div class="modal-footer">
                <button class="button" @click="close">Close</button>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    name: 'AlertElement',
    date(){
        return{

        }
    },
    props:{
        show: {
            type: Boolean,
            default: false,
            required:true,
        },
        title:{
            type: String,
            default: 'title',
        },
        hideModal:{
            type: Function,
        }
    },
    methods:{
        close(){
            //console.log('click')
            this.hideModal()
        }
    },
}

</script>

<style scoped>
    .modal-bg{
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
    }
    .modal-container{
        border-radius: 21px;
        background: #fff;
    }
    .modal-header{
        height: 60px;
        background: #55595c;
        color: #fff;
        border-radius: 20px;
    }
    .modal-main{
        padding: 20px 40px;
    }
    .modal-footer{
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        /* border-top: 1px solid #000; */
        border-top: 0;
    }
    .modal-footer button{
        /* width: 100px; */
        box-shadow: none;

    }
</style>