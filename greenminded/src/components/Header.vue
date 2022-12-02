<script>
import NavLink from './NavLink.vue'

export default {
	name: 'MyHeader',
    components: {
        NavLink
    }
}
</script>

<template>
	<header>
        <div class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse"
                        data-target=".navbar-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div class="navbar-collapse collapse ">
                    <ul class="nav navbar-nav">
                        <NavLink url="/" text="Accueil" />
                        <NavLink url="/search" text="Rechercher" />
                        <NavLink url="/contact" text="Contact" />
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<style>
.navbar .nav > .active > a, .navbar .nav > .active > a:hover {
    background: none;
    font-weight: 700;
    color: #1B1B1B;
}
</style>