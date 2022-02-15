<template>
    <div class="about">
        <v-header></v-header>
        <v-sidebar></v-sidebar>
        <v-scroll-tip></v-scroll-tip>
        <div class="content-box" :class="{'content-collapse':$store.state.collapse}">
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
   
</template>

<script>
import vHeader from '../components/Header.vue'
import vSidebar from '../components/Sidebar.vue'
import vScrollTip from '../components/ScrollTip.vue'
export default {
    components:{vHeader,vSidebar,vScrollTip},
  
}
</script>

<style scoped>
    .content-box{
        position: absolute;
        left: 170px;
        right: 0px;
        top: 130px;
        bottom: 0;
        padding-bottom: 30px;
        transition: left .5s ease;
    }  

   
     .content {
        width: auto;
        height: 100%;
        padding: 10px;
        overflow-y: scroll;
        box-sizing: border-box;
    }   
</style>