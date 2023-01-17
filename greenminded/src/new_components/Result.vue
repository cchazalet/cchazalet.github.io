<template>
<div class="fullscreen-section">
			<div class="left">
				<div id="map" class="map"></div>
			</div> <!-- end .left -->
			<div class="right">
				<div class="inner">
					<div class="directory-filters">
						<form>
							<div class="row">
								<div class="col-sm-4">
									<div class="form-group">
										<select>
											<option>All Country</option>
										</select>
									</div> <!-- end .form-group -->
								</div> <!-- end .col-sm-4 -->
								<div class="col-sm-4">
									<div class="form-group">
										<select>
											<option>All Categories</option>
										</select>
									</div> <!-- end .form-group -->
								</div> <!-- end .col-sm-4 -->
								<div class="col-sm-4">
									<div class="form-group">
										<select>
											<option>Filter by tags</option>
										</select>
									</div> <!-- end .form-group -->
								</div> <!-- end .col-sm-4 -->
							</div> <!-- end .row -->
						</form>
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
								<img src="images/directory-slider01.jpg" alt="bg" class="img-responsive">
								<div class="overlay"></div>
								<div class="rating">4.0</div>
								<a href="" class="wishlist"><img src="images/directory-heart.png" alt="wishlist"></a>
								<div class="content">
									<h3><a href="">Not Just Coffee</a></h3>
									<p>Suspendisse tristique orci justo</p>
									<div class="location"><img src="images/directory-location.png" alt="location">Thomas St , NewYork</div>
								</div> <!-- end .content -->
								<div class="category">
									<a href=""><img src="images/directory-category-food.png" alt="food"></a>
									<a href=""><img src="images/directory-category-drink.png" alt="drink"></a>
								</div> <!-- end .category -->
							</div> <!-- end .directory-item -->
						</div> <!-- end .col-sm-6 -->
						<div class="col-sm-6">
							<div class="directory-item">
								<img src="images/directory-slider02.jpg" alt="bg" class="img-responsive">
								<div class="overlay"></div>
								<div class="rating">4.0</div>
								<a href="" class="wishlist"><img src="images/directory-heart.png" alt="wishlist"></a>
								<div class="content">
									<h3><a href="">Nunc Restaurant</a></h3>
									<p>Suspendisse tristique orci justo</p>
									<div class="location"><img src="images/directory-location.png" alt="location">Leonard St , NewYork</div>
								</div> <!-- end .content -->
								<div class="category">
									<a href=""><img src="images/directory-category-dining.png" alt="dining"></a>
									<a href=""><img src="images/directory-category-wine.png" alt="wine"></a>
								</div> <!-- end .category -->
							</div> <!-- end .directory-item -->
						</div> <!-- end .col-sm-6 -->
						<div class="col-sm-6">
							<div class="directory-item">
								<img src="images/directory-slider03.jpg" alt="bg" class="img-responsive">
								<div class="overlay"></div>
								<div class="rating">4.0</div>
								<a href="" class="wishlist"><img src="images/directory-heart.png" alt="wishlist"></a>
								<div class="content">
									<h3><a href="">DJ Party</a></h3>
									<p>Suspendisse tristique orci justo</p>
									<div class="location"><img src="images/directory-location.png" alt="location">Knightsbridge 66</div>
								</div> <!-- end .content -->
								<div class="category">
									<a href=""><img src="images/directory-category-party.png" alt="party"></a>
								</div> <!-- end .category -->
							</div> <!-- end .directory-item -->
						</div> <!-- end .col-sm-6 -->
						<div class="col-sm-6">
							<div class="directory-item">
								<img src="images/directory-slider04.jpg" alt="bg" class="img-responsive">
								<div class="overlay"></div>
								<div class="rating">4.0</div>
								<a href="" class="wishlist"><img src="images/directory-heart.png" alt="wishlist"></a>
								<div class="content">
									<h3><a href="">Quisque Tinibus Hotel</a></h3>
									<p>Suspendisse tristique orci justo</p>
									<div class="location"><img src="images/directory-location.png" alt="location">Knightsbridge 66</div>
								</div> <!-- end .content -->
								<div class="category">
									<a href=""><img src="images/directory-category-hotel.png" alt="hotel"></a>
								</div> <!-- end .category -->
							</div> <!-- end .directory-item -->
						</div> <!-- end .col-sm-6 -->
					</div> <!-- end .directory-list -->
				</div> <!-- end .inner -->
			</div> <!-- end .right -->
		</div> <!-- end .section -->
</template>

<script>
export default{
    name:'ResultVue',
    components:{

    },
}
</script>

<style scoped>

</style>