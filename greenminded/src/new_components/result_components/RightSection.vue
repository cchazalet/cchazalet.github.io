<template>
  <div class="right">
    <div class="inner fullscreen">
      <div class="option-controler">
        <form>
          <div class="single-controler">
            <div class="col-md-3 set_row controler-label">
              <label for="status">Durée</label>
            </div>
            <div class="col-md-9 set_row">
              <input type="range" min="0" max="10" v-model="duration" class="form-control" />
            </div>
          </div>
          <div class="single-controler">
            <div class="col-md-3 set_row controler-label">
              <label for="status">Ecologie (CO2)</label>
            </div>
            <div class="col-md-9 set_row">
              <input type="range" min="0" max="10" v-model="ecology" class="form-control" />
            </div>
          </div>
          <div class="single-controler">
            <div class="col-md-3 set_row controler-label">
              <label for="status">Prix</label>
            </div>
            <div class="col-md-9 set_row">
              <input type="range" min="0" max="10" v-model="price" class="form-control" />
            </div>
          </div>
        </form>
      </div>


      <div class="directory-filters">
        <form>
          <div class="sncf-title">
            <h4>Gare SNCF :</h4>
          </div>
          <div class="sncf-stations row">
            <div class="col-sm-2">
              <p>Depart</p>
            </div>
            <div class="col-sm-4">
              <div class="form-group">
                <select v-model="departSNCF">
                  <option v-for="(item, index) in departureSNCFCityList" v-bind:key="index">
                    {{ item }}
                  </option>
                </select>
              </div>
            </div>
            <!-- end .col-sm-4 -->
            <div class="col-sm-2">
              <p>Arrivée</p>
            </div>
            <div class="col-sm-4">
              <div class="form-group">
                <select v-model="arriveSNCF">
                  <option v-for="(item, index) in arrivalSNCFCityList" v-bind:key="index">
                    {{ item }}
                  </option>
                </select>
              </div>
            </div>
            <!-- end .col-sm-4 -->
          </div>
          <div class="sncf-title">
            <h4>Gare Flixbus:</h4>
          </div>
          <div class="flixbus-stations row">
            <div class="col-sm-2">
              <p>Depart</p>
            </div>
            <div class="col-sm-4">
              <div class="form-group">
                <select v-model="departFlixbus">
                  <option v-for="(item, index) in departureFlixbusCityList" v-bind:key="index">
                    {{ item }}
                  </option>
                </select>
              </div>
            </div>
            <!-- end .col-sm-4 -->
            <div class="col-sm-2">
              <p>Arrivée</p>
            </div>
            <div class="col-sm-4">
              <div class="form-group">
                <select v-model="arriveFlixbus">
                  <option v-for="(item, index) in arrivalFlixbusCityList" v-bind:key="index">
                    {{ item }}
                  </option>
                </select>
              </div>
            </div>
            <!-- end .col-sm-4 -->
          </div>
        </form>
        <div class="col-sm-12 button-div">
          <button type="submit" class="button-long" @click="transSettingParams">
            Rechercher
          </button>
        </div>
      </div>


      <div class="box transparent blog-grid">
        <div class="inner">
          <div class="container">
              <div class="row">
                <div v-for="(item, index) in lastestBlogList.slice(0, 2)" v-bind:key="index">
                  <slot :data="item">
                    <BlogAffichage :values="item" :showBlog="showBlog"></BlogAffichage>
                    <!-- <TrainResultElement :values="item"></TrainResultElement> -->
                  </slot>
                </div>
                </div>
                <div class="row">
                <div v-for="(item, index) in lastestBlogList.slice(2, 4)" v-bind:key="index">
                  <slot :data="item">
                    <BlogAffichage :values="item" :showBlog="showBlog"></BlogAffichage>
                    <!-- <TrainResultElement :values="item"></TrainResultElement> -->
                  </slot>
                </div>
              </div>
              <div class="row">
                <div v-for="(item, index) in lastestBlogList.slice(4, 6)" v-bind:key="index">
                  <slot :data="item">
                    <BlogAffichage :values="item" :showBlog="showBlog"></BlogAffichage>
                    <!-- <TrainResultElement :values="item"></TrainResultElement> -->
                  </slot>
                </div>
              </div> <!-- end .row -->
          </div>
        </div>
      </div>
      <!-- end .directory-filters -->
    </div>
    <!-- end .inner -->
  </div>
  <!-- end .right -->
  <BlogContenu :values="blogContent" :show="isShowBlog" :hideBlog="hideBlog"></BlogContenu>

</template>

<script>
// import OptControler from '@/components/result_components/OptControler.vue';
import API from '@/plugins/axiosInstance'
import BlogAffichage from '../main_components/BlogAffichage.vue'
import BlogContenu from '../main_components/BlogContenu.vue'
export default {
  name: "RightSectionVue",
  components: {
    BlogAffichage,
		BlogContenu,
  },
  mounted(){
    this.getCityLatestBlog()
  },
  props: [
    "departureSNCFCityList",
    "arrivalSNCFCityList",
    "departureFlixbusCityList",
    "arrivalFlixbusCityList",
    "saveSettingParams",
    "destination"
  ],
  data() {
    return {
      duration: 5,
      ecology: 5,
      price: 5,
      lastestBlogList:[],
      departSNCF: "",
      arriveSNCF: "",
      departFlixbus: "",
      arriveFlixbus: "",
      isShowBlog:false,
      blogContent:this.blogContent,
    };
  },
  watch: {
		$route () { 
			this.getCityLatestBlog()
		},
  },
  methods: {

    transSettingParams() {
      this.saveSettingParams(
        this.duration,
        this.ecology,
        this.price,
        this.departSNCF,
        this.arriveSNCF,
        this.departFlixbus,
        this.arriveFlixbus
      );
    },
    getCityLatestBlog() {
      API({
        url: '/blog/getCityLatestBlog',
        method: 'post',
        data: {
          city: this.destination
        }
      }).then((res) => {
        if (res.data.ok) {
          res.data.data.forEach((element) => {
            this.lastestBlogList.push({
              image: element.image,
              username: element.username,
              nombreDeLikes: element.nombreDeLikes,
              contenue: element.contenue,
              city: element.city,
              title: element.title,
              date: element.date.slice(0, 6)
            })
          })
        } else {
          // console.log('ERROR!')
          // console.log(res.data.code)
        }
      })
    },
    showBlog(content) {
      this.isShowBlog = true
      this.blogContent = content
    },
    hideBlog() {
      this.isShowBlog = false
    },
  }

}
</script>

<style scoped>
/* .option-controler{
  height:150px;
} */
.inner {
  overflow-x: hidden;
  overflow-y: visible;
}
.fullscreen-section>.right>.inner{
  height: 100%;
}
.blog-grid {
  margin-top: 100px;
}

.container {
  width: 153%;
}
.single-controler {
  min-height: 50px;
  margin-bottom: 10px;
  white-space: nowrap;
  vertical-align: top;
}

.right {
  min-width: 700px;
  max-width: max-content;
}

.set_row {
  display: inline-block;
  align-content: center;
}

.controler-label {
  margin-top: 5px;
  padding: 0 5px;
  vertical-align: middle;
}

.form-control {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #fff;
  background-color: #fff;
  background-image: none;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.75);
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #172434;
  border: 1px solid transparent;
  margin-top: 0px;
  border-image: linear-gradient(#172434, #172434) 0 fill / 8 20 8 0 / 0 0 0 520;
}

label {
  font-family: 'Quicksand', sans-serif;
}

/* [type="range"i]::-webkit-slider-container {
  height: 20px;
  overflow: hidden;
} */

.div-margin {
  padding: 10px;
}

.button-long {
  font-size: 16px;
  font-weight: 400;
  line-height: 48px;
  padding-left: 50px;
  padding-right: 50px;
  display: inline-block;
  -webkit-transition: 0.25s;
  -ms-transition: 0.25s;
  -moz-transition: 0.25s;
  -o-transition: 0.25s;
  transition: 0.25s;
  position: relative;
  outline: none !important;
  border: none;
  background: #172434;
  color: #fff;
  border-radius: 48px;
  text-transform: uppercase;
  box-shadow: 0 12px 22px rgba(0, 0, 0, 0.35);
  letter-spacing: 1.6px;
}

.button-div {
  vertical-align: middle;
  text-align: center;
  margin-bottom: 20px;
}

.sncf-stations .flixbus-stations {
  vertical-align: middle;
}
</style>
