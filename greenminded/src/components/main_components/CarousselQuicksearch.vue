<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="true"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="../../../img/slides/1.jpg"
          class="d-block w-100"
          alt="../../../img/slides/1.jpg"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../../img/slides/2.jpg"
          class="d-block w-100"
          alt="../../../img/slides/2.jpg"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../../img/slides/3.jpg"
          class="d-block w-100"
          alt="../../../img/slides/3.jpg"
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    <div id="quicksearch">
      <form class="col-sm-12" id="searchForm">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-6">
              <div class="form-group">
                <label for="status">Departure</label>
                <input
                  type="text"
                  placeholder="Enter A City"
                  v-model="departure"
                  class="form-control"
                />
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6">
              <div class="form-group">
                <label for="status">Arrival</label>
                <input
                  type="text"
                  placeholder="Enter A City"
                  v-model="arrival"
                  class="form-control"
                />
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6">
              <div class="form-group">
                <label for="status">Date of Departure</label>
                <input type="date" v-model="date" class="form-control" />
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6">
              <div class="form-group">
                <label for="status">Time of Departure</label>
                <input type="time" v-model="time" class="form-control" />
              </div>
            </div>

            <p></p>
            <div class="col-md-3 col-sm-3 col-xs-6">
              <div class="form-group">
                <label for="status">Price</label>
              </div>
            </div>
            <div class="col-md-9 col-sm-9 col-xs-9">
              <div class="form-group">
                <input
                  type="range"
                  min="0"
                  max="10"
                  v-model="price"
                  class="form-control"
                />
              </div>
            </div>
            <div class="col-md-3 col-sm-3 col-xs-3">
              <div class="form-group">
                <label for="status">Duration</label>
              </div>
            </div>
            <div class="col-md-9 col-sm-9 col-xs-9">
              <div class="form-group">
                <input
                  type="range"
                  min="0"
                  max="10"
                  v-model="duration"
                  class="form-control"
                />
              </div>
            </div>

            <div class="col-md-3 col-sm-3 col-xs-3">
              <div class="form-group">
                <label for="status">Ecology</label>
              </div>
            </div>
            <div class="col-md-9 col-sm-9 col-xs-9">
              <div class="form-group">
                <input
                  type="range"
                  min="0"
                  max="10"
                  v-model="ecology"
                  class="form-control"
                />
              </div>
            </div>
            <p></p>
            <div class="col-md-12 col-sm-12 col-xs-12">
              <input
                name="submit"
                value="Rechercher"
                class="btn btn-success btn-lg btn-block wrn-btn"
                @click="searchIte()"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  <AlertElement :show="showAlert" :title="'Alert!'" :hideModal="hideModal">Remplir tous les critères SVP</AlertElement  >
</template>

<script>
// import API from '../../plugins/axiosInstance'
import AlertElement from "../Alert.vue";
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
    AlertElement,
  },
  methods: {
    searchIte() {
      if (
        this.departure == "" ||
        this.arrival == "" ||
        this.date == "" ||
        this.time == ""
      ) {
        //console.log(this.departure=='', this.arrival=='')
        this.showAlert = true;
      } else {
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
            date_: this.date,
          },
        });
      }
    },
    hideModal() {
      this.showAlert = false;
    },
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
#quicksearch {
  border-radius: 10px;
  height: auto;
  width: 600px;
  position: absolute;
  top: 15%;
  padding: 20px 20px 20px 20px;
  left: 20%;
  background: rgba(255, 255, 255, 0.7);
}

#form-group {
  margin: 10px 10px 10px 10px;
}
#form-control {
  margin: 10px 10px 10px 10px;
}
</style>
