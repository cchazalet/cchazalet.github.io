<template>
	<!-- <div id = 'main' class="section large transparent dark text-center" style="{'background-image': `url(${require('/assets/image/file-icon.png')})`}"> -->
	<div id = 'main' class="section large transparent dark text-center">
		<div class="inner">
			<div class="container">
				<h1>Discover The City Gems</h1>
				<p class="lead">Find great places to stay, eat, shop, or visit from local experts.</p>
				<form>
					<div class="row">
						<div class="col-sm-6">
							<div class="form-group">
								<input type="text" placeholder="Departure" v-model="departure">
							</div> <!-- end .form-group -->
						</div> <!-- end .col-sm-4 -->
						<div class="col-sm-6">
							<div class="form-group">
								<input type="text" placeholder="Arrival" v-model="arrival">
								<i class="pe-7s-world"></i>
							</div> <!-- end .form-group -->
						</div> <!-- end .col-sm-4 -->
					</div>
					<div class="row">
						<div class="col-sm-6">
							<div class="form-group">
								<input type="date" v-model="date">
							</div> <!-- end .form-group -->
						</div> <!-- end .col-sm-4 -->
						<div class="col-sm-6">
							<div class="form-group">
								<input type="time" v-model="time">
							</div> <!-- end .form-group -->
						</div> <!-- end .col-sm-4 -->
					</div> <!-- end .row -->
					<button type="submit" class="button" @click="searchIte()">Search places</button>
				</form>
				<!-- images  -->
			</div> <!-- end .container -->
		</div> <!-- end .inner -->
	</div> <!-- end .section -->
	<AlertElement :show="showAlert" :title="'Alert!'" :hideModal="hideModal">Remplir tous les critères SVP</AlertElement>
	<div class="section dark">
		<div class="inner">
			<div class="container">
				<h2 class="text-center">Share Your Experience<small>Browse the latest articles and tips from our blog.</small></h2>
				<div class="row">
					<div class="col-md-4 col-sm-6">
						<div class="blog-post video">
							<img src="../../assets/images/blog-post03.jpg" alt="image" class="img-responsive">
							<div class="overlay"></div>
							<div class="content">
								<p>By Proin Mattis</p>
								<h3><a href="">Nightlife at NewYork</a></h3>
								<div class="meta">July 03, 2016 - <a href="">Nightlife</a></div>
							</div> <!-- end .content -->
						</div> <!-- end .blog-post -->
					</div> <!-- end .col-md-4 -->
				</div> <!-- end .row -->
				<div class="blog-view-more"><a href="" class="button">View All</a></div>
			</div> <!-- end .container -->
		</div> <!-- end .inner -->
	</div> <!-- end .section -->

	<div class="section light transparent" style="background-image: url('images/background02.jpg');">
		<div class="inner">
			<div class="container">
				<h2 class="text-center">How it Works<small>Discover how EXploreCity can you help you find everything you want.</small></h2>
				<div class="row">
					<div class="col-sm-4">
						<div class="services">
							<img src="../../assets/images/services-icon01.png" alt="icon" class="img-responsive center-block">
							<h3>Choose<br>What To Do</h3>
							<p>Looking for a cozy hotel to stay, a restaurant to eat, a museum to visit or a mall to do some shopping?</p>
							<div class="process"><i class="pe-7s-angle-right-circle"></i></div>
						</div> <!-- end .services -->
					</div> <!-- end .col-sm-4 -->
					<div class="col-sm-4">
						<div class="services">
							<img src="../../assets/images/services-icon02.png" alt="icon" class="img-responsive center-block">
							<h3>Find<br>What You Want</h3>
							<p>Search and filter hundreds of listings, read reviews, explore photos and find the perfect spot.</p>
							<div class="process"><i class="pe-7s-angle-right-circle"></i></div>
						</div> <!-- end .services -->
					</div> <!-- end .col-sm-4 -->
					<div class="col-sm-4">
						<div class="services">
							<img src="../../assets/images/services-icon03.png" alt="icon" class="img-responsive center-block">
							<h3>Explore<br>Amazing Places</h3>
							<p>Go and have a good time or even make a booking directly from the listing page. All of those, thanks to ExploreCity!</p>
						</div> <!-- end .services -->
					</div> <!-- end .col-sm-4 -->
				</div> <!-- end .row -->
			</div> <!-- end .container -->
		</div> <!-- end .inner -->
	</div> <!-- end .section -->
	
</template>
<script>
import AlertElement from '@/new_components/main_components/Alert.vue';

export default{
    name:'SearchSectionVue',
	components:{
		AlertElement
	},
	data(){
		return{
			background01: require('../../assets/images/background01.jpg'),
			departure:'',
			arrival:'',
			date:'',
			time:'',
			showAlert:false,
		}
	},
	methods: {
    searchIte() {
      if (
        this.departure == "" ||
        this.arrival == "" ||
        this.date == "" ||
        this.time == ""
      ) {
        console.log(this.departure=='', this.arrival=='')
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
    mounted(){
		
    },
}
</script>
<style scoped>
	.section {
		background-image: url('../../assets/images/background01.jpg');
	}
</style>