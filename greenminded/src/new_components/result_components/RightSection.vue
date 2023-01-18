<template>
    <div class="right">
        <div class="inner">
            <div id="option-controler">
                <div class="single-controler">
                    <div class="col-md-3 set_row controler-label">
                        <label for="status">Duration</label>
                    </div>
                    <div class="col-md-9 set_row">
                        <input type="range" min="0" max="10" v-model="duration" class="form-control">
                    </div>
                </div>        
                <div class="single-controler">
                    <div class="col-md-3 set_row controler-label">
                        <label for="status">CO2</label>
                    </div>
                    <div class="col-md-9 set_row">
                        <input type="range" min="0" max="10" v-model="ecology" class="form-control">
                    </div>
                </div>        
                <div class="single-controler">
                    <div class="col-md-3 set_row controler-label">
                        <label for="status">Price</label>
                    </div>
                    <div class="col-md-9 set_row">
                        <input type="range" min="0" max="10" v-model="price" class="form-control">
                    </div>
                </div>
            </div>

            <div class="directory-filters">
                <form>
                    <div class="sncf-title">
                        <p>SNCF Stations:</p>
                    </div>
                    <div class="sncf-stations row">
                        <div class="col-sm-2">
                            <p>Departure</p>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <select v-model="departSNCF">
                                    <option v-for="(item, index) in departureSNCFCityList" v-bind:key="index">
                                        {{ item }}
                                    </option>
                                </select>
                            </div>
                        </div> <!-- end .col-sm-4 -->
                        <div class="col-sm-2">
                            <p>Arrival</p>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <select v-model="arriveSNCF">
                                    <option v-for="(item, index) in arrivalSNCFCityList" v-bind:key="index">
                                        {{ item }}
                                    </option>
                                </select>
                            </div>
                        </div> <!-- end .col-sm-4 -->
                    </div>
                    <div class="sncf-title">
                        <p>Flixbus Stations:</p>
                    </div>
                    <div class="flixbus-stations row">
                        <div class="col-sm-2">
                            <p>Departure</p>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <select v-model="departFlixbus">
                                    <option v-for="(item, index) in departureFlixbusCityList" v-bind:key="index">
                                        {{ item }}
                                    </option>
                                </select>
                            </div>
                        </div> <!-- end .col-sm-4 -->
                        <div class="col-sm-2">
                            <p>Arrival</p>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <select v-model="arriveFlixbus">
                                    <option v-for="(item, index) in arrivalFlixbusCityList" v-bind:key="index">
                                        {{ item }}
                                    </option>
                                </select>
                            </div>
                        </div> <!-- end .col-sm-4 -->
                    </div>
                </form>
                <div class="col-sm-12 button-div">
                    <button type="submit" class="button-long" @click="transSettingParams">Search places</button>
                </div>
                
            </div> <!-- end .directory-filters -->

            <div class="directory-tags">
                <div class="tag">Accepts Credit Cards<a href=""><i class="pe-7s-close"></i></a></div>
                <div class="tag">Parking Street<a href=""><i class="pe-7s-close"></i></a></div>
                <div class="tag">Wireless Internet<a href=""><i class="pe-7s-close"></i></a></div>
            </div> <!-- end .directory-tags -->
            <div class="directory-list-info">
                <p>Showing all Listings tagged "Accepts Credit Cards", "Parking Street", "Wireless Internet".</p>
                <p class="results">79 Results - <a href="">Reset</a></p>
            </div>
            <div class="directory-list row">
                <div class="col-sm-6">
                    <div class="directory-item">
                        <img src="../../assets/images/directory-slider01.jpg" alt="bg" class="img-responsive">
                        <div class="overlay"></div>
                        <div class="rating">4.0</div>
                        <a href="" class="wishlist"><img src="../../assets/images/directory-heart.png" alt="wishlist"></a>
                        <div class="content">
                            <h3><a href="">Not Just Coffee</a></h3>
                            <p>Suspendisse tristique orci justo</p>
                            <div class="location"><img src="../../assets/images/directory-location.png" alt="location">Thomas St , NewYork</div>
                        </div> <!-- end .content -->
                        <div class="category">
                            <a href=""><img src="../../assets/images/directory-category-food.png" alt="food"></a>
                            <a href=""><img src="../../assets/images/directory-category-drink.png" alt="drink"></a>
                        </div> <!-- end .category -->
                    </div> <!-- end .directory-item -->
                </div> <!-- end .col-sm-6 -->
                <div class="col-sm-6">
                    <div class="directory-item">
                        <img src="../../assets/images/directory-slider02.jpg" alt="bg" class="img-responsive">
                        <div class="overlay"></div>
                        <div class="rating">4.0</div>
                        <a href="" class="wishlist"><img src="../../assets/images/directory-heart.png" alt="wishlist"></a>
                        <div class="content">
                            <h3><a href="">Nunc Restaurant</a></h3>
                            <p>Suspendisse tristique orci justo</p>
                            <div class="location"><img src="../../assets/images/directory-location.png" alt="location">Leonard St , NewYork</div>
                        </div> <!-- end .content -->
                        <div class="category">
                            <a href=""><img src="../../assets/images/directory-category-dining.png" alt="dining"></a>
                            <a href=""><img src="../../assets/images/directory-category-wine.png" alt="wine"></a>
                        </div> <!-- end .category -->
                    </div> <!-- end .directory-item -->
                </div> <!-- end .col-sm-6 -->
                <div class="col-sm-6">
                    <div class="directory-item">
                        <img src="../../assets/images/directory-slider03.jpg" alt="bg" class="img-responsive">
                        <div class="overlay"></div>
                        <div class="rating">4.0</div>
                        <a href="" class="wishlist"><img src="../../assets/images/directory-heart.png" alt="wishlist"></a>
                        <div class="content">
                            <h3><a href="">DJ Party</a></h3>
                            <p>Suspendisse tristique orci justo</p>
                            <div class="location"><img src="../../assets/images/directory-location.png" alt="location">Knightsbridge 66</div>
                        </div> <!-- end .content -->
                        <div class="category">
                            <a href=""><img src="../../assets/images/directory-category-party.png" alt="party"></a>
                        </div> <!-- end .category -->
                    </div> <!-- end .directory-item -->
                </div> <!-- end .col-sm-6 -->
                <div class="col-sm-6">
                    <div class="directory-item">
                        <img src="../../assets/images/directory-slider04.jpg" alt="bg" class="img-responsive">
                        <div class="overlay"></div>
                        <div class="rating">4.0</div>
                        <a href="" class="wishlist"><img src="../../assets/images/directory-heart.png" alt="wishlist"></a>
                        <div class="content">
                            <h3><a href="">Quisque Tinibus Hotel</a></h3>
                            <p>Suspendisse tristique orci justo</p>
                            <div class="location"><img src="../../assets/images/directory-location.png" alt="location">Knightsbridge 66</div>
                        </div> <!-- end .content -->
                        <div class="category">
                            <a href=""><img src="../../assets/images/directory-category-hotel.png" alt="hotel"></a>
                        </div> <!-- end .category -->
                    </div> <!-- end .directory-item -->
                </div> <!-- end .col-sm-6 -->
            </div> <!-- end .directory-list -->
        </div> <!-- end .inner -->
    </div> <!-- end .right -->
</template>

<script>
// import OptControler from '@/components/result_components/OptControler.vue';


export default{
    name:'RightSectionVue',
    components:{
    },
    props:["departureSNCFCityList",
        "arrivalSNCFCityList",
        "departureFlixbusCityList",
        "arrivalFlixbusCityList",
        "saveSettingParams"],
    data(){
        return{
            duration:5,
            ecology:5,
            price:5,

            departSNCF:'',
            arriveSNCF:'',
            departFlixbus:'',
            arriveFlixbus:'',
        }
    },
    methods:{
        transSettingParams(){
            this.saveSettingParams(this.duration, this.ecology, this.price,
                this.departSNCF, this.arriveSNCF, this.departFlixbus, this.arriveFlixbus)
        }
    }
}
</script>

<style scoped>
    .set_row{
        display: inline-block;
        align-content: center;
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
        background-color:#172434;
        border:1px solid transparent;
        margin-top:0px;
        border-image:linear-gradient(#172434,#172434)0 fill / 8 20 8 0 / 0 0 0 520;/*绘制元素外矩形*/
    }

    [type="range"i]::-webkit-slider-container{
        height:20px;
        overflow:hidden;
    }
    
    .div-margin{
        padding: 10px;
    }

    .button-long {
        font-size: 16px;
        font-weight: 400;
        line-height: 48px;
        padding-left: 50px;
        padding-right: 50px;
        display: inline-block;
        -webkit-transition: .25s;
        -ms-transition: .25s;
        -moz-transition: .25s;
        -o-transition: .25s;
        transition: .25s;
        position: relative;
        outline: none !important;
        border: none;
        background: #172434;
        color: #fff;
        border-radius: 48px;
        text-transform: uppercase;
        box-shadow: 0 12px 22px rgba(0,0,0,.35);
        letter-spacing: 1.6px;
    }

    .button-div{
        vertical-align: middle;
        text-align: center;
        margin-bottom: 20px;
    }
</style>