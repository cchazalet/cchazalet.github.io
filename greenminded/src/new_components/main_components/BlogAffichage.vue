<template>
    <div class="col-md-4 col-sm-6">
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
            var num = Math.floor(Math.random() * 9 + 1);
            console.log(num)
            var url = require(`@/assets/images/blog-post0` + num + `.jpg`)
            return url
        }
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