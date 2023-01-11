<template>
    <div id="option-controler">
        <div class="single-controler">
            <div class="col-md-3 row controler-label">
                <label for="status">Duration</label>
            </div>
            <div class="col-md-6 row">
                <input type="range" min="0" max="10" v-model="duration" class="form-control">
            </div>
        </div>        
        <div class="single-controler">
            <div class="col-md-3 row controler-label">
                <label for="status">CO2</label>
            </div>
            <div class="col-md-6 row">
                <input type="range" min="0" max="10" v-model="co2" class="form-control">
            </div>
        </div>        
        <div class="single-controler">
            <div class="col-md-3 row controler-label">
                <label for="status">Price</label>
            </div>
            <div class="col-md-6 row">
                <input type="range" min="0" max="10" v-model="ecology" class="form-control">
            </div>
        </div>
        <div class = "d-grid gap-2 div-margin col-md-9">
            <input name="submit" value="Search" class="buton btn btn-success btn-lg btn-block wrn-btn" type="submit" @click="sortResult"/>
        </div>
    </div>
</template>
<script>
export default{
    name: 'OptionControlerVue',
    components:{

    },
    data(){
        return{
            duration: 5.,
            co2: 5.,
            ecology: 5.,

        }
    },
    props:['saveSortParameters'],
    methods:{
        sortResult(){
            try{
                this.saveSortParameters(this.duration,this.co2,this.ecology)
            }catch(e){
                console.log(e)
            }
            
        }
    },
}
</script>
<style scoped>

    .row{
        display: inline-block;
    }

    .controler-label{
        margin-bottom: 5px;
    }


    .form-control {
        display: block;
        width: 100%;
        height: 34px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #fff;
        background-color:#fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .75);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .75);
        -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
        -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    }

    input[type=range]::-webkit-slider-thumb{
        -webkit-appearance:none;
        appearance:none;
        width:20px;
        height:20px;
        border-radius:50%;
        background-color:darkgreen;
        border:1px solid transparent;
        margin-top:0px;
        border-image:linear-gradient(darkgreen,darkgreen)0 fill / 8 20 8 0 / 0 0 0 500;/*绘制元素外矩形*/
    }

    [type="range"i]::-webkit-slider-container{
        height:20px;
        overflow:hidden;
    }
    
    .div-margin{
        padding: 10px;
    }

</style>