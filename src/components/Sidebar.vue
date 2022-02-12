<template>
  <div class="sidebar">
         
      <el-menu class="elmmenu" :collapse="$store.state.collapse"
       text-color="#409EFF">
        <el-menu-item v-for="item in sidebarArray" 
        :key="item.index" index="1"
       >
            <template #title>
                <!-- <el-tooltip :content="item.title" placement="right" > -->
                    <span :class="item.icon"></span>
                    &nbsp; &nbsp;
                    <span>{{item.title}}</span>
                <!-- </el-tooltip> -->
            </template>
        </el-menu-item>
      </el-menu>
  </div>
</template>

<script>import { useStore } from "vuex"

export default {
    setup(){
        const sidebarArray=[
            {index:0,title:"主页",icon:"icon-zhuye"},
            {index:1,title:"物资管理",icon:"icon-wuzi"},
            {index:2,title:"疫情监控",icon:"icon-bingtu"},
            {index:3,title:"住院管理",icon:"icon-zhuyuanjilu"},
            {index:4,title:"文件上传",icon:"icon-yunshangchuan"},
            {index:5,title:"公告发布",icon:"icon-gonggao1"},
            {index:6,title:"Bug反馈",icon:"icon-fankui"},
            {index:7,title:"支持作者",icon:"icon-hongbao"},
        ]
        const store=useStore()
         
        return{
            sidebarArray
        }
    }
}
</script>

<style>
    .sidebar{
        /* display: block; */
        position: absolute;
        height: 100%;
        background: #000;
        /* min-width: 50px; */
        top: 0;
        left: 0;
        padding-top: 60px;
        z-index: -1;
        
    }
    .sidebar>ul>li{
        font-size: 20px;
    }
     .elmmenu:not(.elmmenu--collapse) {
         /* width: 100%; */
         color: black;
  }
</style>