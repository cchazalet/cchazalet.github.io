<template>
  <!-- <div id = 'main' class="section large transparent dark text-center" style="{'background-image': `url(${require('/assets/image/file-icon.png')})`}"> -->
  <div id="main" class="section large transparent dark text-center">
    <div class="inner">
      <div class="container">
        <h1>Recherchez le meilleur trajet</h1>
        <p class="lead">
          Trouver la meilleur offre en fonction de vos critères.
        </p>
        <form>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <input type="text" placeholder="De..." v-model="chosenValues.departure" />
              </div>
              <!-- end .form-group -->
            </div>
            <!-- end .col-sm-4 -->
            <div class="col-sm-6">
              <div class="form-group">
                <input type="text" placeholder="A..." v-model="chosenValues.arrival" />
                <i class="pe-7s-world"></i>
              </div>
              <!-- end .form-group -->
            </div>
            <!-- end .col-sm-4 -->
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <input type="date" v-model="chosenValues.date" />
              </div>
              <!-- end .form-group -->
            </div>
            <!-- end .col-sm-4 -->
            <div class="col-sm-6">
              <div class="form-group">
                <input type="time" v-model="chosenValues.time" />
              </div>
              <!-- end .form-group -->
            </div>
            <!-- end .col-sm-4 -->
          </div>
          <!-- end .row -->
         
        </form>
        <button type="submit" class="button" @click="searchIte()">
            Rechercher
          </button>
        <!-- images  -->
      </div>
      <!-- end .container -->
    </div>
    <!-- end .inner -->
  </div>
  <!-- end .section -->
  <AlertElement :show="showAlert" :title="'Alert!'" :hideModal="hideModal">Remplir tous les critères SVP</AlertElement>
  <ChooseStations :show="isShowChooseStations" :values="chosenValues" :hideBloc="hideChooseStation"></ChooseStations>
  
  <div class="section dark">
    <div class="inner">
      <div class="container">
        <h2 class="text-center">
          Partager votre expérience<small
            >Parcourez les derniers témoignages de voyages écologiques</small
          >
        </h2>
        <div class="box transparent blog-grid">
          <div class="row">
            <div v-for="(item, index) in lastestBlogList.slice(0, 3)" v-bind:key="index">
              <slot :data="item">
                <BlogAffichage :values="item" :showBlog="showBlog"></BlogAffichage>
                <!-- <TrainResultElement :values="item"></TrainResultElement> -->
              </slot>
            </div>
          </div> <!-- end .row -->
        </div>
        <div class="page-title">
				<div class="boxed-section light">	
					<el-button>
						<router-link to="/createBlog" class="button" >Créez Votre Propre Blog</router-link>
					</el-button>			
				</div>
      </div>
      </div>
    </div>
  </div>  
    <!-- end .section -->

    <div class="section light transparent">
      <div class="inner">
        <div class="container">
          <h2 class="text-center">
            Comment ca marche ?<small>Découvrez comment Greenminded peut vous aider à trouver tout ce que
              vous voulez.</small>
          </h2>
          <div class="row">
            <div class="col-sm-4">
              <div class="services">
                <img src="../../assets/images/services-icon01.png" alt="icon" class="img-responsive center-block" />
                <h3>Choississez<br /> votre voyage</h3>
                <p>
                  Sélectionner la ville de départ, la ville d'arrivée ainsi que la
                  date et l'heure du trajet
                </p>
                <div class="process">
                  <i class="pe-7s-angle-right-circle"></i>
                </div>
              </div>
              <!-- end .services -->
            </div>
            <!-- end .col-sm-4 -->
            <div class="col-sm-4">
              <div class="services">
                <img src="../../assets/images/services-icon03.png" alt="icon" class="img-responsive center-block" />
                <h3>Sélectionner<br />les gares de départ et d'arrivée</h3>
                <p>
                  Une liste déroulante vous aient proposés contenant les gares disponibles dans les villes choisies.
                </p>
                <div class="process">
                  <i class="pe-7s-angle-right-circle"></i>
                </div>
              </div>
              <!-- end .services -->
            </div>
            <!-- end .col-sm-4 -->
            <div class="col-sm-4">
              <div class="services">
                <img src="../../assets/images/services-icon02.png" alt="icon" class="img-responsive center-block" />
                <h3>Filter<br />les résultats de recherche</h3>
                <p>
                  Les 3 critères proposés : prix, durée et sensibilité à l'écologie vous permettent de choisir au mieux
                  le meilleur trajet.
                </p>
              </div>
              <!-- end .services -->
            </div>
            <!-- end .col-sm-4 -->
          </div>
          <!-- end .row -->
        </div>
        <!-- end .container -->
      </div>
      <!-- end .inner -->
    </div>
    <!-- end .section -->
    <BlogContenu :values="blogContent" :show="isShowBlog" :hideBlog="hideBlog"></BlogContenu>

</template>
<script>
import AlertElement from "@/new_components/main_components/Alert.vue";
import API from '@/plugins/axiosInstance'
import BlogAffichage from './BlogAffichage.vue'
import BlogContenu from './BlogContenu.vue'
import ChooseStations from './ChooseStations.vue'

export default {
  name: "SearchSectionVue",
  components: {
    AlertElement,
    BlogAffichage,
    BlogContenu,
    ChooseStations,
  },
  data() {
    return {
      background01: require("../../assets/images/background01.jpg"),
      // departure: "",
      // arrival: "",
      // date: "",
      // time: "",

      // Parameters of windows
      isShowBlog:false,
      blogContent:this.blogContent,
      showAlert: false,
      lastestBlogList: [],

      // Parameters of chooseStations
      isShowChooseStations:false,
      chosenValues:{
        departure:'',
        arrival:'',
        date:'',
        time:'',
      },
    };
  },
  methods: {
    getLastestBlog(){
      API({
        url:'/blog/getLatestBlog',
        method:'post',
        data: {
        }
			}).then((res)=>{
				if (res.data.ok){
					res.data.data.forEach((element)=>{
						this.lastestBlogList.push({
							image: element.image,
							username: element.username,
							nombreDeLikes: element.nombreDeLikes,
							city: element.city,
              contenue: element.contenue, 
							title: element.title,
							date: element.date.slice(0,10)       
						})
						console.log(this.lastestBlogList)
					})
        }else{
            // console.log('ERROR!')
            // console.log(res.data.code)
        }
      })
    },
    showBlog(content){
        this.isShowBlog = true
        this.blogContent = content
    },
    hideBlog(){
        this.isShowBlog = false
    },
    searchIte() {
      if (
        this.chosenValues.departure == "" ||
        this.chosenValues.arrival == "" ||
        this.chosenValues.date == "" ||
        this.chosenValues.time == ""
      ) {
        // console.log(this.departure == "", this.arrival == "");
        this.showAlert = true;
      } else {
        // var reg1 = new RegExp("-", "g");
        // this.$router.push({
        //   name: "result",
        //   query: {
        //     source: this.departure,
        //     destination: this.arrival,
        //     hour: this.time,
        //     date: this.date.replace(reg1, ""),
        //     date_: this.date,
        //   },
        // });
        this.isShowChooseStations = true;
      }
    },
    hideModal() {
      this.showAlert = false;
    },
    hideChooseStation() {
      this.isShowChooseStations = false
    }
  },
  mounted() {
    this.getLastestBlog()
   },
};
</script>
<style scoped>
.section {
  background-image: url("../../assets/images/background01.jpg");
}
.button {
	font-size: 16px;
	font-weight: 400;
	line-height: 48px;
	padding: 0 28px;
	display: inline-block;
	-webkit-transition: .25s;
	-ms-transition: .25s;
	-moz-transition: .25s;
	-o-transition: .25s;
	transition: .25s;
	bottom: -15px;
	outline: none !important;
	border: none;
	background: #00b0ff;
	color: #fff;
	border-radius: 48px;
	text-transform: uppercase;
	box-shadow: 0 12px 22px rgba(0,0,0,.35);
	letter-spacing: 1.6px;
}
.button:hover {
	opacity: 1;
	background: #00b0ff;
	color: #fff;
	box-shadow: 0 12px 22px rgba(0,0,0,.2);
}
.button.dark {
	background: #172434;
	color: #00b0ff;
}
.button.dark:hover {
	background: #00b0ff;
	color: #fff;
}
.button.white {
	background: #fff;
	color: #00b0ff;
}
.button.white:hover {
	background: #00b0ff;
	color: #fff;
}
.button.border {
	background: none;
	border: 1px solid rgba(255,255,255,.25);
	line-height: 46px;
	font-weight: 300;
	box-shadow: none;
}
.button.border:hover {
	background: #fff;
	border-color: #fff;
	color: #00b0ff;
}
.button img {
	margin-right: 8px;
}
</style>
