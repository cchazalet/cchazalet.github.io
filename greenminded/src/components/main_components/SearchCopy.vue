<template>
    <div id="featured">
        <div id="main-slider" class="flexslider">
            <div class="flex-caption">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <!--Search Component-->
                            <div class="quick-search">
                                <div class = "row">
                                    <form role="form">
                                        <div class="col-md-6 col-sm-6 col-xs-6">
                                            <div class="form-group">
                                                <label for="status">Departure</label>
                                                <input type="text" placeholder="Enter A City and Press Enter" 
                                                v-model="departure" class="form-control" list="departList" @keydown.enter="searchDepartureCity">
                                                <datalist id="departList">
                                                    <option v-for="(item,index) in departureCityList" v-bind:key="index">{{item}}</option>
                                                </datalist>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-xs-6">
                                            <div class="form-group">
                                                <label for="status">Arrival</label>
                                                <input type="text" placeholder="Enter A City and Press Enter" 
                                                v-model="arrival" class="form-control" list="arriveList" @keydown.enter="searchArrivalCity">
                                                <datalist id="arriveList">
                                                    <option v-for="(item,index) in arrivalCityList" v-bind:key="index">{{item}}</option>
                                                </datalist>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-xs-6">
                                            <div class="form-group">
                                                <label for="status">Date of Departure</label>
                                                <input type="date" v-model="date" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-xs-6">
                                            <div class="form-group">
                                                <label for="status">Time of Departure</label>
                                                <input type="time" v-model="time" class="form-control">
                                            </div>
                                        </div>

                                        <div class="col-md-3 col-sm-3 col-xs-3">
                                            <div class="form-group">
                                                <label for="status">Price</label>
                                            </div>
                                        </div>
                                        <div class="col-md-9 col-sm-9 col-xs-9">
                                            <div class="form-group">
                                                <input type="range" min="0" max="10" v-model="price" class="form-control">
                                            </div>
                                        </div>

                                        <div class="col-md-3 col-sm-3 col-xs-3">
                                            <div class="form-group">
                                                <label for="status">Duration</label>
                                            </div>
                                        </div>
                                        <div class="col-md-9 col-sm-9 col-xs-9">
                                            <div class="form-group">
                                                <input type="range" min="0" max="10" v-model="duration" class="form-control">
                                            </div>
                                        </div>

                                        <div class="col-md-3 col-sm-3 col-xs-3">
                                            <div class="form-group">
                                                <label for="status">Ecology</label>
                                            </div>
                                        </div>
                                        <div class="col-md-9 col-sm-9 col-xs-9">
                                            <div class="form-group">
                                                <input type="range" min="0" max="10" v-model="ecology" class="form-control">
                                            </div>
                                        </div>

                                        <div class="col-md-12 col-cm-12">
                                            <input name="submit" value="RECHERCHER" class="btn btn-success
                                                            btn-lg btn-block" type="submit" @click="searchIte()">
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>            
            <ul class="slides">
                <li>
                    <img src="../../../img/slides/1.jpg" alt=""/>
                </li>
                <!-- <li>
                    <img src="../../../img/slides/2.jpg" alt=""/>
                </li>
                <li>
                    <img src="../../../img/slides/3.jpg" alt=""/>
                </li> -->
            </ul>

        </div>
    </div>
    <div>
        {{departure}}{{time}}{{date}}{{price}}
    </div>
</template>

<script>
    import API from '../../plugins/axiosInstance'

    export default{
        name: 'SearchElement',
        data(){
            return{
                departure: '',
                arrival: '',
                date: NaN,
                time: NaN,
                price: 0,
                duration: 0,
                ecology: 0,
                departureCityList: [],
                arrivalCityList:[]
            }
        },
        components:{

        },
        methods:{
            searchIte(){
                var reg1 = new RegExp('-', 'g')
                this.$router.push({
                    name: 'result',
                    query: {
                        'source': this.departure,
                        'destination': this.arrival,
                        'hour': this.time,
                        'date': this.date.replace(reg1,''),
                        'price': this.price,
                        'duration': this.duration,
                        'ecology': this.ecology,
                    }
                })
            },
            searchDepartureCity(){        
                console.log('call function searchDepartureCity')
                API({
                    url:'/journey/getCityGare',
                    method:'post',
                    data: {
                        city: this.departure
                    }
                }).then((res)=>{
                    if (res.data.ok){
                        this.departureCityList = res.data.data.gareList
                        console.log(this.departureCityList)
                    }else{
                        console.log('ERROR!')
                        console.log(res.data.code)
                    }
                })
            },
            searchArrivalCity(){       
                console.log('call function searchArrivalCity') 
                API({
                    url:'/journey/getCityGare',
                    method:'post',
                    data: {
                        city: this.arrival
                    }
                }).then((res)=>{
                    if (res.data.ok){
                        this.arrivalCityList = res.data.data.gareList
                        console.log(this.arrivalCityList)
                    }else{
                        console.log('ERROR!')
                        console.log(res.data.code)
                    }
                })
            },
        }
    }

</script>

<style scoped>
    #featured{
        width: 100%;
        background:#000;
        position:relative;
        margin:0;
        padding:0;
    }

    .flexslider {
        padding:0;  
        background: #fff; 
        position: relative; 
        zoom: 1;
    }
    .flex-caption {zoom: 1;
    bottom: 35px; background-color: transparent; color: #fff; margin: 0; padding: 25px 25px 25px 30px; position: absolute; left: 0; right: 0;}
    .flex-caption h3 {color: #fff; letter-spacing: 1px; margin-bottom: 8px; text-transform: uppercase;}
    .flex-caption p {margin: 0 0 15px;}

    .row .row,.row-fluid .row-fluid{
        margin-bottom:30px;
    }

    .row.nomargin,.row-fluid.nomargin {
        margin-bottom:0;
    }
    .quick-search {
        padding: 25px 40px;
        background: rgba(255,255,255,.7);
    }

    .form-group {
        margin-bottom: 15px;
    }

    .form-control {
        display: block;
        width: 100%;
        height: 34px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
        -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
        -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    }

    .btn{text-align: center;
        background: #47A447;
        color: #fff;
        border-color: #47A447;
    }

    .col-xs-3 .col-sm-3 .col-md-3 .col-xs-6 .col-sm-6 .col-md-6 .col-xs-9 .col-sm-9 .col-md-9 .col-sm-12 .col-md-12{
        position: relative;
        min-height: 1px;
        padding-left: 15px;
        padding-right: 15px;
    }

    .col-xs-3 {
        width: 25%;
        float: left;
    }
    .col-xs-6 {
        width: 50%;
        float: left;
    }

    .col-xs-9 {
        width: 75%;
        float: left;
    }

    label {
        display: inline-block;
        max-width: 100%;
        margin-bottom: 5px;
        font-weight: bold;
        color: #555;
    }

    input[type=range] {
        display: block;
        width: 100%;
    }

    input[type="range" i] {
        appearance: auto;
        cursor: default;
    }




</style>