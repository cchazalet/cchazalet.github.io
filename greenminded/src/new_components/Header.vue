<template>
  <header class="header clearfix">
    <div class="left">
      <div class="logo">
        <a href="index.html"
          ><img
            src="../../img/logo.png"
            alt="ExploreCity"
            class="img-responsive"
        /></a>
      </div>
      <!-- end .logo -->
      <form class="header-search">
        <button type="submit"><i class="pe-7s-search"></i></button>
      </form>
    </div>
    <!-- end .left -->
    <div class="navigation clearfix">
      <nav class="main-nav">
        <ul class="list-unstyled">
          <li class="menu-item-has-children">
            <a href="list.html">Recherche</a>
            <!-- <ul>
								<li><a href="list.html">All Listings</a></li>
								<li class="menu-item-has-children">
									<a href="list.html">Food & Drink<i class="pe-7s-right-arrow"></i></a>
									<ul>
										<li><a href="list.html">Cafe’</a></li>
										<li><a href="list.html">Restaurant</a></li>
										<li><a href="list.html">Pizza Place</a></li>
									</ul>
								</li>
								<li><a href="list.html">Entertainment</a></li>
								<li><a href="list.html">Nightlife</a></li>
							</ul> -->
          </li>
<!--
          <li class="menu-item-has-children">
            <a href="index.html">Pages</a>
            <ul>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Add Listing</a></li>
              <li><a href="#">Add Your Listing</a></li>
              <li><a href="list.html">List</a></li>
              <li><a href="#">List Detail</a></li>
              <li class="menu-item-has-children">
                <a href="#">Dashboard<i class="pe-7s-right-arrow"></i></a>
                <ul>
                  <li><a href="#">Dashboard</a></li>
                  <li><a href="#">My Listings</a></li>
                  <li><a href="#">My Wishlist</a></li>
                  <li><a href="#">Edit Profile</a></li>
                </ul>
              </li>
              <li><a href="#">Maintenance</a></li>
              <li><a href="#">Coming Soon</a></li>
              <li><a href="#">404</a></li>
            </ul>
          </li>-->
          <li class="menu-item-has-children">
            <router-link :to="{ path: '/blogpage' }">Blog</router-link>
            <ul>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="#">Blog Post</a></li>
              <li><a href="#">Blog Post Video</a></li>
              <li><a href="#">Blog Post Gallery</a></li>
              <li><a href="#">Blog Post Quote</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- end .main-nav -->
      <a href="" class="responsive-menu-open"><i class="fa fa-bars"></i></a>
    </div>
    <!-- end .navigation -->
    <div class="right">
      <router-link :to="{ path: '/login' }" class="button login-open"
        >Connexion</router-link
      >

      <!-- <a href="/login" class="button login-open">Log In</a> -->
    </div>
    <!-- end .left -->
  </header>
  <!-- end .header -->
</template>

<script>
export default {
  name: "HeaderVue",
};
</script>

<style scoped></style>
