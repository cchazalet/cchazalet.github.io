<template>
    <section class="quick-search">
        <form action="#" method="post" novalidate="novalidate">
            <div class="col-lg-12">
                <div class="row">
                    <div class="col-lg-2 col-md-3 col-sm-12 p-0">
                        <input type="text" placeholder="Enter A City of Departure" v-model="departure"
                            class="form-control search-slt">
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-12 p-0">
                        <input type="text" placeholder="Enter A City of Arrival" v-model="arrival"
                            class="form-control search-slt">
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-12 p-0">
                        <input type="date" v-model="date" class="form-control search-slt">
                    </div>
                    <div class="col-lg-1 col-md-3 col-sm-12 p-0">
                        <input type="time" v-model="time" class="form-control search-slt">
                    </div>
                    <div class="col-lg-1 col-md-3 col-sm-12 p-0">
                        <input name="submit" value="Search" class="btn btn-success
                                                            btn-lg btn-block wrn-btn"
                            @click="searchIte()">
                    </div>
                </div>
            </div>
        </form>
    </section>
    <section>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../../../img/slides/1.jpg" class="d-block w-100" alt="../../../img/slides/1.jpg">
                </div>
                <div class="carousel-item">
                    <img src="../../../img/slides/2.jpg" class="d-block w-100" alt="../../../img/slides/2.jpg">
                </div>
                <div class="carousel-item">
                    <img src="../../../img/slides/3.jpg" class="d-block w-100" alt="../../../img/slides/3.jpg">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </section>
    <AlertElement :show="showAlert" :title="'Alert!'" :hideModal="hideModal">Remplir tous les critères SVP</AlertElement>
</template>
<script>
// import API from '../../plugins/axiosInstance'
 import AlertElement from '../Alert.vue';

export default {
    name: 'SearchElement',
    data() {
        return {
            departure: '',
            arrival: '',
            date: '',
            time: '',
            price: 0,
            duration: 0,
            ecology: 0,
            showAlert: false,
        }
    },
    components: {
        AlertElement,

    },
    methods: {
        searchIte() {
            if (this.departure == '' || this.arrival == '' || this.date == '' || this.time == ''){
                console.log(this.departure=='', this.arrival=='')
                this.showAlert = true
            }else{
                console.log('router')
                var reg1 = new RegExp('-', 'g')
                this.$router.push({
                    name: 'result',
                    query: {
                        'source': this.departure,
                        'destination': this.arrival,
                        'hour': this.time,
                        'date': this.date.replace(reg1, ''),
                        'date_': this.date
                    }
                })
            }

        },
        hideModal(){
            this.showAlert = false
        }
    },
}

</script>


<style scoped>
/*search box css start here*/

.quick-search {
    padding: 25px 40px;
    background: rgba(255, 255, 255, .7);
}

.search-sec {
    padding: 25px 40px;
}
.search-slt {
    display: block;
    width: 100%;
    font-size: 0.875rem;
    line-height: 1.5;
    color: #55595c;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    height: calc(3rem + 2px) !important;
    border-radius: 0;
}

.wrn-btn {
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    text-transform: capitalize;
    height: calc(3rem + 2px) !important;
    border-radius: 0;
}

@media (min-width: 992px) {
    .search-sec {
        position: relative;
        top: -114px;
        background: rgba(255, 255, 255, .7);
    }
}

@media (max-width: 992px) {
    .search-sec {
        background: rgba(255, 255, 255, .7);
    }
}
</style>