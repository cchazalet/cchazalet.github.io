<template>

        <div id = 'main' class="section large transparent dark text-center" style="background-image: url('../../assets/images/background01.jpg');">
			<div class="inner">
				<div class="container">
					<h1>Discover The City Gems</h1>
					<p class="lead">Find great places to stay, eat, shop, or visit from local experts.</p>
					<form>
						<div class="row">
							<div class="col-sm-4">
								<div class="form-group">
									<input type="text" placeholder="What are you looking for ?">
								</div> <!-- end .form-group -->
							</div> <!-- end .col-sm-4 -->
							<div class="col-sm-4">
								<div class="form-group">
									<input type="text" placeholder="Location">
									<i class="pe-7s-world"></i>
								</div> <!-- end .form-group -->
							</div> <!-- end .col-sm-4 -->
							<div class="col-sm-4">
								<div class="form-group">
									<select>
										<option>All categories</option>
									</select>
								</div> <!-- end .form-group -->
							</div> <!-- end .col-sm-4 -->
						</div> <!-- end .row -->
						<button type="submit" class="button">Search places</button>
					</form>
					<!-- images  -->
				</div> <!-- end .container -->
			</div> <!-- end .inner -->
		</div> <!-- end .section -->
</template>
<script>
export default{
    name:'SearchSectionVue',
    mounted(){
        let script_jquery = document.createElement('script')
        script_jquery.type = 'text/javascript'
        script_jquery.src = '../../assets/js/jquery-3.1.0.min.js'
        document.body.appendChild(script_jquery)

        let script_bootstrap = document.createElement('script')
        script_bootstrap.type = 'text/javascript'
        script_bootstrap.src = '../../assets/js/bootstrap.min.js'
        document.body.appendChild(script_bootstrap)

        let script_richmarker = document.createElement('script')
        script_richmarker.type = 'text/javascript'
        script_richmarker.src = '../../assets/js/richmarker.js'
        document.body.appendChild(script_richmarker)

        let script_owl = document.createElement('script')
        script_owl.type = 'text/javascript'
        script_owl.src = '../../assets/js/owl.carousel.min.js'
        document.body.appendChild(script_owl)

        let script_countdown = document.createElement('script')
        script_countdown.type = 'text/javascript'
        script_countdown.src = '../../assets/js/countdown.js'
        document.body.appendChild(script_countdown)

        let script_sweet = document.createElement('script')
        script_sweet.type = 'text/javascript'
        script_sweet.src = '../../assets/js/sweetalert.min.js'
        document.body.appendChild(script_sweet)

        let script_nivo = document.createElement('script')
        script_nivo.type = 'text/javascript'
        script_nivo.src = '../../assets/scripts/Nivo-Lightbox/nivo-lightbox.min.js'
        document.body.appendChild(script_nivo)

        let script_nouislider = document.createElement('script')
        script_nouislider.type = 'text/javascript'
        script_nouislider.src = '../../assets/js/jquery.nouislider.all.min.js'
        document.body.appendChild(script_nouislider)

        let script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = '../../assets/js/scripts.js'
        document.body.appendChild(script)
    },
}
</script>
<style scoped>

</style>