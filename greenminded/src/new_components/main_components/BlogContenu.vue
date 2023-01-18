<template>
<!--1.首先，弹窗页面中要有el-dialog组件即弹窗组件，我们把弹窗中的内容放在el-dialog组件中-->
<!--2.设置:visible.sync属性，动态绑定一个布尔值，通过这个属性来控制弹窗是否弹出-->
  <!-- <el-dialog title="弹窗" :visible.sync="detailVisible" width="35%">
    弹窗内容
  </el-dialog> -->
  <div class="blog-content" v-show="show">
    <div class="blog-container">
      <div class="blog-header">
        <h4>{{values.title}}</h4>
      </div>
      <div class="blog-main">
        <div class="blog-infos">
          <p>Par {{values.username}}</p>
          <p>Le {{values.date}}</p>
          <p>A {{values.city}}</p>
        </div>
        <div class="blog-text">
          <p>{{values.contenue}}</p>
        </div>
      </div>
      <div class="blog-footer">
        <button class="button" @click="close">FERMER</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BlogContenuVue",
    data(){
      return{
        
      }
    },
    props:{
      values:{
        type:Object,
        default:NaN,
      },
      show:{
        type:Boolean,
        default:false,
        require:true,
      },
      hideBlog:{
        type:Function,
      }
    },
    methods:{
    // //3.定义一个init函数，通过设置detailVisible值为true来让弹窗弹出，这个函数会在父组件的方法中被调用
    //   init(data){
    //     this.detailVisible=true;
    //     //data是父组件弹窗传递过来的值，我们可以打印看看
    //     console.log(data);
    //   }
      close(){
        this.hideBlog()
      }
    }
  }
</script>

<style scoped>
    .blog-content{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, .4);
        z-index: 999;
        padding-top: 50px;
        padding-bottom: 50px;
        padding-left: 100px;
        padding-right: 100px;
        text-align: center;
    }

    .blog-container{
      padding: 15px 20px;
      border-radius: 10px;
      height:100%;
      width: 100%;
      margin: 200px 200px 200px 200px;
      background: rgba(255, 255, 255, .9);
      min-height: 500px;
      position: relative;

    }

    .blog-header{
      border-bottom: 1px solid gray;
      margin-bottom: 10px;
      margin-top: 50px;
    }

    .blog-infos{
      text-align: right;
      padding-right: 10px;
      margin-bottom: 10px;
    }

    .blog-main{
      display: block;
      overflow-y: scroll;
      height: calc(80% - 50px);
      padding: 0 20px;
      text-align:justify;
    }

    .blog-footer{
      vertical-align:middle;
      bottom: 0;
      position:absolute;
      margin-bottom: 20px;
      width: 100%;
    }

</style>
  