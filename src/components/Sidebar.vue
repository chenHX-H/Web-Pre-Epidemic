<template>
  <div class="sidebar">
         
      <el-menu class="elmenu" :collapse="$store.state.collapse"
       router 	>
        <el-menu-item v-for="item in sidebarArray" 
        :key="item.index" :index="item.routerUrl"
       >
       <span :class="item.icon"></span>
            <template #title>
                <!-- <el-tooltip :content="item.title" placement="right" > -->
                    &nbsp; &nbsp;
                    <span >{{item.title}}</span>
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
            {index:0,title:"主页",icon:"icon-zhuye",routerUrl:"/dashboard"},
            {index:1,title:"物资管理",icon:"icon-wuzi",routerUrl:"/material"},
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

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom: 0;
        
    }
    .sidebar>ul>li{
        font-size: 20px;
    }
     .elmenu:not(.elmenu--collapse) {
         color: black;
         height: 100%;
  }
</style>