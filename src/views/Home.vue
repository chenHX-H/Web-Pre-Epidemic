<template>
    <div class="about">
        <v-header></v-header>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse':$store.state.collapse}">
                    <router-view></router-view>

        </div>
    </div>
   
</template>

<script>
import vHeader from '../components/Header.vue'
import vSidebar from '../components/Sidebar.vue'
export default {
    components:{vHeader,vSidebar}
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
        background-color: #222228;
        transition: left .4s ease-in-out;
    }
    .content-collapse{
        left: 70px;
    }
</style>