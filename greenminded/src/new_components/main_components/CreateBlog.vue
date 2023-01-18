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
                                    <input type="text" placeholder="Title" v-model="title">
                                </div> <!-- end .form-group -->
                            </div> <!-- end .col-sm-4 -->
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <input type="text" placeholder="Author" v-model="username">
                                    <i class="pe-7s-world"></i>
                                </div> <!-- end .form-group -->
                            </div> <!-- end .col-sm-4 -->
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <input type="text" placeholder="City" v-model="city">
                                    <i class="pe-7s-world"></i>
                                </div> <!-- end .form-group -->
                            </div> <!-- end .col-sm-4 -->

                        </div>
                        <div class="col-sm-13">
                            <div class="form-group">
                                <textarea class="textarea2" type="text" placeholder="Content"
                                    v-model="contenue"></textarea>

                            </div> <!-- end .form-group -->
                        </div> <!-- end .col-sm-4 -->

                        <button type="submit" class="button" @click="uploadBlog()">Upload</button>
                    </form>
                    <!-- images  -->
                </div> <!-- end .container -->
            </div> <!-- end .inner -->
        </div> <!-- end .section -->
        <AlertElement :show="showAlert" :title="'Alert!'" :hideModal="hideModal">Remplir tous les critères SVP
        </AlertElement>
    </div>
</template>
<script>

import API from '@/plugins/axiosInstance'
import AlertElement from '@/new_components/main_components/Alert.vue';
// import BlogAffichage from './BlogAffichage.vue'
export default {
    components: {
        AlertElement
    },
    data() {
        return {
            title: '',
            username: '',
            city: '',
            contenue: '',
            showAlert: false,
        }
    },
    mounted() {
    },
    methods: {
        uploadBlog() {
            if (
                this.city == "" ||
                this.contenue == "" ||
                this.username == "" ||
                this.title == ""
            ) {
                console.log(this.departure == '', this.arrival == '')
                this.showAlert = true;
            } else {
                
                    API({
                        url: '/blog/upload',
                        method: 'post',
                        data: {
                            city: this.city,
                            contenue: this.contenue,
                            username: this.username,
                            title: this.title,
                        }
                    }).then((res) => {
                        console.log(res.status)
                    });
                }
            },
            hideModal() {
                this.showAlert = false;
            }
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

.textarea2 {
    padding: 10px;
    width: 100%;
    line-height: 1.5;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px rgb(51, 11, 122);
    max-lines: 100;
    height: 300px;
    resize: none;
    line-height-step: 1px;
}
</style>

