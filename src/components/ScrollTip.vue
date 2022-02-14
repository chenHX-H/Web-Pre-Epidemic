<template>
    <div class="banner" :class="{'content-collapse':$store.state.collapse}">
            <span class="scrollTip">{{scrollTip}}</span>
    </div>
</template>

<script>
import {ref }from 'vue'

export default {
  setup(){
        let scrollTip=ref("这是一条提示信息!")
        return{
            scrollTip
        }
    }
}
</script>

<style scoped>
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