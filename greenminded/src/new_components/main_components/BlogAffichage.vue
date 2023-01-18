<template>
    <div class="col-md-4 col-sm-6" @click="routeContent">
        <div class="blog-post image">
            <img :src="getImgUrl()" class="img-responsive">
            <div class="overlay"></div>
            <div class="content">
                <h3><label>Title: {{ values.title }}</label></h3>
                <p>By {{ values.username }}</p>
                <h3><label>{{ values.city }}</label></h3>
                <div class="meta">{{ values.date }}</div>
            </div> <!-- end .content -->
        </div> <!-- end .blog-post -->
    </div> <!-- end .col-md-4 -->
</template>

<script>

export default{
    name: 'blogAffichageVue',
    data(){
        return {
        }
    },
    methods: {
        getImgUrl() {
            console.log(this.values.image)
            var url = require(`@/assets/images/blog-post0` + this.values.image + `.jpg`)
            return url
        },
        routeContent(){
            this.$router.push({
                name: "blog_content",
                query: {

                },
            });
        },
    },
    props:{
        values:{ String },
    }
}
</script>

<style scoped>
    .page-title {
		background-image: url('../../assets/images/background14.jpg');
	}
</style>