<template>
  <section class="quick-search">
    <form action="#" method="post" novalidate="novalidate">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-2 col-md-3 col-sm-12 p-0">
            <input
              type="text"
              placeholder="Enter A City of Departure"
              v-model="departure"
              class="form-control search-slt"
            />
          </div>
          <div class="col-lg-2 col-md-3 col-sm-12 p-0">
            <input
              type="text"
              placeholder="Enter A City of Arrival"
              v-model="arrival"
              class="form-control search-slt"
            />
          </div>
          <div class="col-lg-2 col-md-3 col-sm-12 p-0">
            <input type="date" v-model="date" class="form-control search-slt" />
          </div>
          <div class="col-lg-1 col-md-3 col-sm-12 p-0">
            <input type="time" v-model="time" class="form-control search-slt" />
          </div>
          <div class="col-lg-1 col-md-3 col-sm-12 p-0">
            <input
              name="submit"
              value="Search"
              class="btn btn-success btn-lg btn-block wrn-btn"
              @click="searchIte()"
            />
          </div>
        </div>
      </div>
    </form>
  </section>
  <AlertElement :show="showAlert" :title="'Alert!'" :hideModal="hideModal">Remplir tous les critères SVP</AlertElement>
</template>

<script>
// import API from '../../plugins/axiosInstance'
import AlertElement from '../Alert.vue'
import $ from "jquery";
export default {
  name: "SearchBar",
  data() {
    return {
      departure: "",
      arrival: "",
      date: NaN,
      time: NaN,
      price: 0,
      duration: 0,
      ecology: 0,
      showAlert: false,
    };
  },
  components: {
    AlertElement
  },
  methods: {
    searchIte() {
      if (this.departure == '' || this.arrival == '' || this.date == '' || this.time == ''){
        //console.log(this.departure=='', this.arrival=='')
        this.showAlert = true
      }else{
        $(".result").text("");
        $(".loading-icon").removeClass("hide");
        $(".button").attr("disabled", true);
        $(".btn-txt").text("Fetching Data From Server...");
        var reg1 = new RegExp("-", "g");
        this.$router.push({
          name: "result",
          query: {
            source: this.departure,
            destination: this.arrival,
            hour: this.time,
            date: this.date.replace(reg1, ""),
            price: this.price,
            duration: this.duration,
            ecology: this.ecology,
            date_: this.date
          },
        });
      }
    },
    hideModal(){
      this.showAlert = false
    }

  },
  mounted() {
    $(document).ready(function () {
      $(".button").on("click", function () {
        $(".result").text("");
        $(".loading-icon").removeClass("hide");
        $(".button").attr("disabled", true);
        $(".btn-txt").text("Fetching Data From Server...");
        var reg1 = new RegExp("-", "g");
        this.$router.push({
          name: "result",
          query: {
            source: this.departure,
            destination: this.arrival,
            hour: this.time,
            date: this.date.replace(reg1, ""),
            price: this.price,
            duration: this.duration,
            ecology: this.ecology,
          },
        });
      });
    });
  },
};
</script>

<style scoped>
/*search box css start here*/

.quick-search {
  padding: 25px 40px;
  background: rgba(255, 255, 255, 0.7);
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
    background: rgba(255, 255, 255, 0.7);
  }
}

@media (max-width: 992px) {
  .search-sec {
    background: rgba(255, 255, 255, 0.7);
  }
}

.button {
  background-color: #008cba; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.button:disabled {
  opacity: 0.5;
}
.hide {
  display: none;
}
</style>
