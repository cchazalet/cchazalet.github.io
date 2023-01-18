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
                <input type="text" placeholder="De..." v-model="departure" />
              </div>
              <!-- end .form-group -->
            </div>
            <!-- end .col-sm-4 -->
            <div class="col-sm-6">
              <div class="form-group">
                <input type="text" placeholder="A..." v-model="arrival" />
                <i class="pe-7s-world"></i>
              </div>
              <!-- end .form-group -->
            </div>
            <!-- end .col-sm-4 -->
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <input type="date" v-model="date" />
              </div>
              <!-- end .form-group -->
            </div>
            <!-- end .col-sm-4 -->
            <div class="col-sm-6">
              <div class="form-group">
                <input type="time" v-model="time" />
              </div>
              <!-- end .form-group -->
            </div>
            <!-- end .col-sm-4 -->
          </div>
          <!-- end .row -->
          <button type="submit" class="button" @click="searchIte()">
            Rechercher
          </button>
        </form>
        <!-- images  -->
      </div>
      <!-- end .container -->
    </div>
    <!-- end .inner -->
  </div>
  <!-- end .section -->
  <AlertElement :show="showAlert" :title="'Alert!'" :hideModal="hideModal"
    >Remplir tous les critères SVP</AlertElement
  >
  <div class="section dark">
    <div class="inner">
      <div class="container">
        <h2 class="text-center">
          Partager votre expérience<small
            >Parcourez les derniers témoignages de voyages écologiques</small
          >
        </h2>
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <div class="blog-post video">
              <img
                src="../../assets/images/blog-post01.jpg"
                alt="image"
                class="img-responsive"
              />
              <div class="overlay"></div>
              <div class="content">
                <p>Par Armand Duponset</p>
                <h3>
                  <a href=""
                    >Voyage de Marseille à Paris pour feter la nouvelle année</a
                  >
                </h3>
                <div class="meta">01 janvier 2023 - <a href="">SNCF</a></div>
              </div>
              <!-- end .content -->
            </div>
            <!-- end .blog-post -->
          </div>
          <!-- end .col-md-4 -->
          <div class="col-md-4 col-sm-6">
            <div class="blog-post video">
              <img
                src="../../assets/images/blog-post03.jpg"
                alt="image"
                class="img-responsive"
              />
              <div class="overlay"></div>
              <div class="content">
                <p>Par Nathan Dupond</p>
                <h3><a href="">Concert de Justin Bieber à Paris</a></h3>
                <div class="meta">
                  25 novembre 2022 - <a href="">Flixbus</a>
                </div>
              </div>
              <!-- end .content -->
            </div>
            <!-- end .blog-post -->
          </div>
          <!-- end .col-md-4 -->
          <div class="col-md-4 col-sm-6">
            <div class="blog-post video">
              <img
                src="../../assets/images/blog-post06.jpg"
                alt="image"
                class="img-responsive"
              />
              <div class="overlay"></div>
              <div class="content">
                <p>Par Lucas Adenti</p>
                <h3><a href="">Saint-Valentin en amoureux sur Grenoble</a></h3>
                <div class="meta">14 février 2022 - <a href="">Flixbus</a></div>
              </div>
              <!-- end .content -->
            </div>
            <!-- end .blog-post -->
          </div>
          <!-- end .col-md-4 -->
        </div>
        <!-- end .row -->
        <div class="blog-view-more"><a href="" class="button">View All</a></div>
      </div>
      <!-- end .container -->
    </div>
    <!-- end .inner -->
  </div>
  <!-- end .section -->

  <div
    class="section light transparent"
    style="background-image: url('images/background02.jpg')"
  >
    <div class="inner">
      <div class="container">
        <h2 class="text-center">
          Comment ca marche ?<small
            >Découvrez comment Greenminded peut vous aider à trouver tout ce que
            vous voulez.</small
          >
        </h2>
        <div class="row">
          <div class="col-sm-4">
            <div class="services">
              <img
                src="../../assets/images/services-icon01.png"
                alt="icon"
                class="img-responsive center-block"
              />
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
              <img
                src="../../assets/images/services-icon03.png"
                alt="icon"
                class="img-responsive center-block"
              />
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
              <img
                src="../../assets/images/services-icon02.png"
                alt="icon"
                class="img-responsive center-block"
              />
              <h3>Filter<br />les résultats de recherche</h3>
              <p>
				Les 3 critères proposés : prix, durée et sensibilité à l'écologie vous permettent de choisir au mieux le meilleur trajet.
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
</template>
<script>
import AlertElement from "@/new_components/main_components/Alert.vue";

export default {
  name: "SearchSectionVue",
  components: {
    AlertElement,
  },
  data() {
    return {
      background01: require("../../assets/images/background01.jpg"),
      departure: "",
      arrival: "",
      date: "",
      time: "",
      showAlert: false,
    };
  },
  methods: {
    searchIte() {
      if (
        this.departure == "" ||
        this.arrival == "" ||
        this.date == "" ||
        this.time == ""
      ) {
        console.log(this.departure == "", this.arrival == "");
        this.showAlert = true;
      } else {
        var reg1 = new RegExp("-", "g");
        this.$router.push({
          name: "result",
          query: {
            source: this.departure,
            destination: this.arrival,
            hour: this.time,
            date: this.date.replace(reg1, ""),
            date_: this.date,
          },
        });
      }
    },
    hideModal() {
      this.showAlert = false;
    },
  },
  mounted() {},
};
</script>
<style scoped>
.section {
  background-image: url("../../assets/images/background01.jpg");
}
</style>
