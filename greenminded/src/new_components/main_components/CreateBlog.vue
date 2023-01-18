<template>
    <div class="navigation clearfix">
        <div class="page-header">
            <div class="container">
                <div class="breadcrumbs">
                    <ul class="list-unstyled">
                        <li><a href="/">Home</a></li>
                        <li><router-link :to="{ path: `/blogpage` }">Blog</router-link></li>
                        <li>Create Blog</li>
                    </ul>
                </div> <!-- end .breadcrumbs -->
            </div> <!-- end .container -->
        </div> <!-- end .page-header -->
        <div id='main' class="section large transparent dark text-center">
            <div class="inner">
                <div class="container">
                    <h1>Create Your Own Blog</h1>
                    <p class="lead">Share a better low-carbon life</p>
                    <form>
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <input type="text" placeholder="Title" v-model="departure">
                                </div> <!-- end .form-group -->
                            </div> <!-- end .col-sm-4 -->
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <input type="text" placeholder="Author" v-model="arrival">
                                    <i class="pe-7s-world"></i>
                                </div> <!-- end .form-group -->
                            </div> <!-- end .col-sm-4 -->
                            <div class="col-sm-6">


                                <el-upload v-model:file-list="fileList" class="upload-demo"
                                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple
                                    :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove"
                                    :limit="3" :on-exceed="handleExceed">
                                    <el-button type="primary">Click to upload</el-button>
                                    <template #tip>
                                        <div class="el-upload__tip">
                                            jpg/png files with a size less than 500KB.
                                        </div>
                                    </template>
                                </el-upload>


                            </div>
                        </div>

                        <button type="submit" class="button" @click="searchIte()">Search places</button>
                    </form>
                    <!-- images  -->
                </div> <!-- end .container -->
            </div> <!-- end .inner -->
        </div> <!-- end .section -->



        <div class="section boxed-section light">
            <div class="inner">
                <div class="container">
                    <div class="box transparent blog-grid">
                        <div class="row">
                            <div v-for="(item, index) in lastestBlogList.slice(0, 3)" v-bind:key="index">
                                <slot :data="item">
                                    <BlogAffichage :values="item"></BlogAffichage>
                                    <!-- <TrainResultElement :values="item"></TrainResultElement> -->
                                </slot>
                            </div>
                            <div v-for="(item, index) in lastestBlogList.slice(3, 6)" v-bind:key="index">
                                <slot :data="item">
                                    <BlogAffichage :values="item"></BlogAffichage>
                                    <!-- <TrainResultElement :values="item"></TrainResultElement> -->
                                </slot>
                            </div>
                            <div v-for="(item, index) in lastestBlogList.slice(6, 9)" v-bind:key="index">
                                <slot :data="item">
                                    <BlogAffichage :values="item"></BlogAffichage>
                                    <!-- <TrainResultElement :values="item"></TrainResultElement> -->
                                </slot>
                            </div>
                        </div> <!-- end .row -->
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import API from '@/plugins/axiosInstance'
// import BlogAffichage from './BlogAffichage.vue'
export default {
    components: {
        // BlogAffichage
    },
    data() {
        return {
            lastestBlogList: []
        }
    },
    mounted() {
        this.getLastestBlog()
    },
    methods: {
        getLastestBlog() {
            API({
                url: '/blog/getLatestBlog',
                method: 'post',
                data: {
                }
            }).then((res) => {
                if (res.data.ok) {
                    res.data.data.forEach((element) => {
                        this.lastestBlogList.push({
                            imageAddress: "img/blog-post05.jpg",
                            username: element.username,
                            nombreDeLikes: element.nombreDeLikes,
                            city: element.city,
                            date: element.date.slice(0, 10)
                        })
                        console.log(this.lastestBlogList)
                    })
                } else {
                    // console.log('ERROR!')
                    // console.log(res.data.code)
                }
            })
        },
    }
}

</script>
<style>
input[readonly] {
    background-color: white !important;
    cursor: text !important;
}

/* this is only due to codepen display don't use this outside of codepen */
.container {
    position: relative;
}

.section {
    background-image: url('../../assets/images/background15.jpg');
}

.custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
}

.custom-file-input::before {
    content: 'Select some files';
    display: inline-block;
    background: -webkit-linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
}

.custom-file-input:hover::before {
    border-color: black;
}

.custom-file-input:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}
</style>

