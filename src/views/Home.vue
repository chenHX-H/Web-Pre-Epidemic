<template>
    <div class="about">
        <v-header></v-header>
        <v-sidebar></v-sidebar>
        <div class="banner" :class="{'content-collapse':$store.state.collapse}">
            <span class="scrollTip">{{scrollTip}}</span>
        </div>
        <div class="content-box" :class="{'content-collapse':$store.state.collapse}">
            <router-view></router-view>
        </div>
    </div>
   
</template>

<script>
import vHeader from '../components/Header.vue'
import vSidebar from '../components/Sidebar.vue'
import {ref }from 'vue'
export default {
    components:{vHeader,vSidebar},
    setup(){
        let scrollTip=ref("这是一条提示信息!")
        return{
            scrollTip
        }
    }
}
</script>

<style scoped>
    .content-box{
        position: absolute;
        left: 170px;
        right: 0;
        top: 70px;
        bottom: 0;
        padding-bottom: 30px;
        transition: left .4s ease-in-out;
    }  
     .banner{
        position: absolute;
        box-sizing: border-box;
        right: 0;
        left: 160px;
        height: 50px;
        margin: 5px;
        padding: 5px;
        overflow: hidden;
        line-height: 40px;
        background-color: white;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        transition: left .5s ease;
    }

    .content-collapse{
        left: 70px;
     } 
     .scrollTip{
         position: absolute;
         left: 101%;
         white-space: nowrap;
         overflow: hidden;
         animation: scrollTip 10s linear 0s infinite;

     }
     @keyframes scrollTip {
         from{ left: 101%;}
         to{left: -10%;}
     }
</style>