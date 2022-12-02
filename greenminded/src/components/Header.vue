//src/components/Navbar.vue
<template>
    <div id="app">
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="container">
				<a class="navbar-brand"><img src="../../img/logo.png"
									alt="logo"/></a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
					<ul class="navbar-nav ms-auto">
						<li class="nav-item">
							<a class="nav-link active" href="">Accueil</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="">Connexion</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="">A propos</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
  export default {
    name: 'MyHeader',
  } 
</script>
