<template>
    <div class="navigation clearfix">
        <div class="page-header">
            <div class="container">
                <div class="breadcrumbs">
                    <ul class="list-unstyled">
                        <li><a href="/">Home</a></li>
                        <li>Blog</li>
                    </ul>
                </div> <!-- end .breadcrumbs -->
            </div> <!-- end .container -->
        </div> <!-- end .page-header -->
        <div class="page-title">
			<div class="inner">
				<div class="boxed-section light">	
					<el-button>
						<router-link to="/createBlog" class="button">Créez Votre Propre Blog</router-link>
					</el-button>			
				</div>
				<h2>Les Derniers Blogs </h2>
				<p>Vous Accompagner Pour Voir Le Monde</p>
				
			</div> <!-- end .inner -->
		</div> <!-- end .page-title -->
		

		

		<div class="section boxed-section light">
			<div class="inner">
				<div class="container">
					<div class="box transparent blog-grid">					
						<div class="row">
							<div v-for="(item,index) in lastestBlogList.slice(0, 3)" v-bind:key="index">
								<slot :data="item">
									<BlogAffichage :values="item" :showBlog="showBlog"></BlogAffichage>
									<!-- <TrainResultElement :values="item"></TrainResultElement> -->
								</slot>
							</div>
							<div v-for="(item,index) in lastestBlogList.slice(3, 6)" v-bind:key="index">
								<slot :data="item">
									<BlogAffichage :values="item" :showBlog="showBlog"></BlogAffichage>
									<!-- <TrainResultElement :values="item"></TrainResultElement> -->
								</slot>
							</div>
							<div v-for="(item,index) in lastestBlogList.slice(6, 9)" v-bind:key="index">
								<slot :data="item">
									<BlogAffichage :values="item" :showBlog="showBlog"></BlogAffichage>
									<!-- <TrainResultElement :values="item"></TrainResultElement> -->
								</slot>
							</div>
						</div> <!-- end .row -->
                    </div>
                </div>
            </div>
        </div>                  
    </div>
	<BlogContenu :values="blogContent" :show="isShowBlog" :hideBlog="hideBlog"></BlogContenu>
</template>
<script>
import API from '@/plugins/axiosInstance'
import BlogAffichage from './BlogAffichage.vue'
import BlogContenu from './BlogContenu.vue'
export default{
	components:{
        BlogAffichage,
		BlogContenu,
    },
	watch: {
		$route () { 
			this.getLastestBlog()
		}
	},
	data(){
		return{
			lastestBlogList:[],
			isShowBlog:false,
			blogContent:this.blogContent,
		}
	},
	mounted(){
        this.getLastestBlog()
    },
	methods: {
		getLastestBlog(){
			API({
				url:'/blog/getLatestBlog',
				method:'post',
				data: {
				}
			}).then((res)=>{
				if (res.data.ok){
					res.data.data.forEach((element)=>{
						this.lastestBlogList.push({
							image: element.image,
							username: element.username,
							nombreDeLikes: element.nombreDeLikes,
							contenue: element.contenue, 
							city: element.city,
							title: element.title,
							date: element.date.slice(0,10)       
						})
					})
				}else{
					// console.log('ERROR!')
					// console.log(res.data.code)
				}
			})
		},
		showBlog(content){
            this.isShowBlog = true
			this.blogContent = content
        },
        hideBlog(){
            this.isShowBlog = false
        },

	}
}

</script>
<style scoped>
    .page-title {
		background-image: url('../../assets/images/background14.jpg');
	}
	.button {
	font-size: 16px;
	font-weight: 400;
	line-height: 48px;
	padding: 0 28px;
	display: inline-block;
	-webkit-transition: .25s;
	-ms-transition: .25s;
	-moz-transition: .25s;
	-o-transition: .25s;
	transition: .25s;
	position: relative;
	bottom: 75px;
	outline: none !important;
	border: none;
	background: #00b0ff;
	color: #fff;
	border-radius: 48px;
	text-transform: uppercase;
	box-shadow: 0 12px 22px rgba(0,0,0,.35);
	letter-spacing: 1.6px;
}
.button:hover {
	opacity: 1;
	background: #00b0ff;
	color: #fff;
	box-shadow: 0 12px 22px rgba(0,0,0,.2);
}
.button.dark {
	background: #172434;
	color: #00b0ff;
}
.button.dark:hover {
	background: #00b0ff;
	color: #fff;
}
.button.white {
	background: #fff;
	color: #00b0ff;
}
.button.white:hover {
	background: #00b0ff;
	color: #fff;
}
.button.border {
	background: none;
	border: 1px solid rgba(255,255,255,.25);
	line-height: 46px;
	font-weight: 300;
	box-shadow: none;
}
.button.border:hover {
	background: #fff;
	border-color: #fff;
	color: #00b0ff;
}
.button img {
	margin-right: 8px;
}
.pagination-wrapper {
	text-align: center;
}
.pagination {
	border: 3px solid #fafafa;
	margin: 0;
	margin-top: 60px;
	position: relative;
	padding: 0 60px;
}
.pagination>li>a, .pagination>li>span {
	float: none;
	padding: 0;
	margin: 0 15px;
	line-height: 74px;
	color: #444;
	background: none;
	border: none;
	font-size: 13px;
	font-weight: 700;
	font-family: 'Montserrat', sans-serif;
}
.pagination>li>a:focus, .pagination>li>a:hover, .pagination>li>span:focus, .pagination>li>span:hover {
	background: none;
	color: #444;
}
.pagination>li.prev>a {
	display: block;
	width: 63px;
	text-align: center;
	line-height: 53px;
	margin: 0;
	position: absolute;
	left: -38px;
	top: 11px;
	background: #00b0ff;
	border-radius: 0;
	color: #fff;
	font-size: 16px;
}
.pagination>li.next>a {
	display: block;
	width: 63px;
	text-align: center;
	line-height: 53px;
	margin: 0;
	position: absolute;
	right: -38px;
	top: 11px;
	background: #00b0ff;
	border-radius: 0;
	color: #fff;
	font-size: 16px;
}
.share-button .social {
	position: absolute;
	top: 50%;
	left: 100%;
	width: 50px;
	text-align: right;
	line-height: 30px;
	-webkit-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	transform: translateY(-50%);
	opacity: 0;
	visibility: hidden;
	-webkit-transition: .5s;
	-ms-transition: .5s;
	-moz-transition: .5s;
	-o-transition: .5s;
	transition: .5s;
}
.share-button:hover .social {
	visibility: visible;
	opacity: 1;
}
.share-button .social a {
	display: inline-block;
	margin: 5px 0;
}
.share-button .social a img {
	margin: 0;
}
@media all and (max-width: 768px) {
	.pagination>li.prev>a {
		width: 48px;
		left: -18px;
	}
	.pagination>li.next>a {
		width: 48px;
		right: -18px;
	}
	.pagination>li>a, .pagination>li>span {
		margin: 0 6px;
	}
}

</style>
