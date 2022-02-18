<template>
    <div class="banner" :class="{'content-collapse':$store.state.collapse}">
            <span class="scrollTip">{{scrollTip}}</span>

           <el-popover trigger="hover"  
            placement="bottom"
            width="200" 
            @show="editShow"
            @hide="editHide"
         
              >
                <template #reference>
                    <span  class="editIcon icon-edit"></span>
                </template>
                <template #default>
                    <el-input ref="inputE" v-model="inputV"   placeholder="编辑提示字符"
                    @keyup.enter="saveTip">
                        <template #suffix>
                            <span @click="saveTip" class="icon-baocun font18px"></span>
                        </template>
                    </el-input>
                </template>
            </el-popover>
           
       
             
    </div>
</template>

<script>
import {onMounted, ref }from 'vue'

export default {
  setup(){
        let scrollTip=ref("这是一条提示信息!")
        let inputV=ref(null)
        let inputE=ref(null)
        function saveTip(){
            scrollTip.value=inputV.value
            inputV.value=""
        }
       function editShow(){
           inputE.value.focus();
        console.log("ssslll")
       }
       function editHide(){
           inputE.value.clear();
       }
       
        return{
            scrollTip,inputV,saveTip,editShow,editHide,inputE
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
     .editIcon{
         position: absolute;
         left: 92%;
         font-size: 25px;
         height: 50px;
         width: 120px;
         background-color: #fff;
     }
     @keyframes scrollTip {
         0%{ left: 101%; }
         10%{left: 85%;}
         100%{left: -10%;}
     }
</style>