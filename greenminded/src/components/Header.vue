<template>
  <nav class="navbar navbar-expand-sm navbar-light" id="neubar">
    <div class="container">
      <a class="navbar-brand" href="#"
        ><img src="../../img/logo.png" height="60"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link mx-2 active" aria-current="page" href="#"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link mx-2" href="#">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-2" href="#">Pricing</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link mx-2 dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Company
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Blog</a></li>
              <li><a class="dropdown-item" href="#">About Us</a></li>
              <li><a class="dropdown-item" href="#">Contact us</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MyHeader",
};
</script>

<style>
#neubar {
  background: #fff7ee;
  box-shadow: 4px 6px 12px rgba(0, 0, 0, 0.4);
}

.nav-item .active {
  border-radius: 6px;
  background: #81b622;
}
#neubar .dropdown-menu a:hover {
  color: #81b622;
}
#neubar .nav-item {
  margin: auto 4px;
}
#neubar a {
  padding-left: 12px;
  padding-right: 12px;
}
#neubar .dropdown-menu {
  background: #81b622;
}
a.navbar-brand {
  color: #81b622;
}
</style>
