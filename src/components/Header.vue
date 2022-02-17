<template>
   <div class="header"  >
       <el-row class="wrapper " justify="center" align="middle">
           <el-col style="cursor: pointer;" @click="$store.commit('collaspseAll')" align="middle" class="font25px" :span="1"  >
                <span  class="icon-un-fold"></span>
           </el-col>
           <el-col  :span="1" >
               <el-image style="height: 35px;" 
                fit="fill" 
               :src="require('../assets/img/school-logo.jpg')">

               </el-image>
           </el-col>
         
           <el-col :span="8"><b>Pre_Epidemic——疫情管理系统</b></el-col>
           <el-col :span="5" :offset="9" class="rightArea">
             <el-row align="middle" >
                 <el-space >
                        <div class="tipBox">
                        <span  class="font30px icon-tongzhi"></span>
                        <div class="tipDot"></div>
                   </div>
                    <el-image class="headImg" :src='headUrl' fit="fill"></el-image>
                    
                    <el-dropdown class="pointer" @command="handleCommand">
                        <span>admin
                            <span class="icon-tabxiala"></span>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu >
                                <el-dropdown-item >项目地址</el-dropdown-item>
                                <el-dropdown-item>个人中心</el-dropdown-item>
                                <el-dropdown-item >联系作者</el-dropdown-item>
                                <el-dropdown-item divided command="4">注销</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    <el-tooltip effect="light" content="项目仓库">
                        <a target="_blank" href="https://github.com/chenHX-H/Web-Pre-Epidemic">
                            <span class="icon-github pointer-primaryBlue"></span>
                        </a>
                    </el-tooltip>
                    
                 </el-space>
                
             </el-row>
                 
           </el-col>
       </el-row>
  </div> 

</template>

<script>

export default {
    setup(){
       let headUrl=require("../assets/img/head.png")
    
       function handleCommand(order){
           if(order==4){
             logout()
           }  
       }
       let logout=()=>{
            localStorage.removeItem("user")
            window.location.reload();
            console.log("已退出登录！")
       }
       return{headUrl,handleCommand}
    }
}
</script>

<style scoped>
    .header{
        
        /* margin: 20px; */
        font-size: 20px;
        background-color: white;
        height: 60px;
        border: 1px rgba(0, 0, 0, 0.1) solid;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    
    }
    
    .tipBox{
        position: relative;
        cursor:pointer;
    }
    .tipDot{
        position: absolute;
        right: 0;
        top:0;
        border-radius: 50%;
        width: 6px;
        height: 6px;
        background-color: #f56c6c;
        z-index: 11;
    }
    .headImg{
        height: 45px;
        border: 1px rgba(222,222,222,0.5) solid;
        border-radius: 50%;
        /* margin-right: 5px; */
        cursor:pointer;
    }

</style>