<template>

        <div id = 'main' class="section large transparent dark text-center" style="background-image: url('background01');">
			<div class="inner">
				<div class="container">
					<h1>Discover The City Gems</h1>
					<p class="lead">Find great places to stay, eat, shop, or visit from local experts.</p>
					<form>
						<div class="row">
							<div class="col-sm-4">
								<div class="form-group">
									<input type="text" placeholder="Departure" v-model="departure">
								</div> <!-- end .form-group -->
							</div> <!-- end .col-sm-4 -->
							<div class="col-sm-4">
								<div class="form-group">
									<input type="text" placeholder="Arrival" v-model="arrival">
									<i class="pe-7s-world"></i>
								</div> <!-- end .form-group -->
							</div> <!-- end .col-sm-4 -->
						</div>
						<div class="row">
							<div class="col-sm-4">
								<div class="form-group">
									<input type="date" v-model="date">
								</div> <!-- end .form-group -->
							</div> <!-- end .col-sm-4 -->
							<div class="col-sm-4">
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
</template>
<script>
import AlertElement from '@/components/Alert.vue';

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
        // $(".result").text("");
        // $(".loading-icon").removeClass("hide");
        // $(".button").attr("disabled", true);
        // $(".btn-txt").text("Fetching Data From Server...");
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
    mounted(){
		
    },
}
</script>
<style scoped>

</style>