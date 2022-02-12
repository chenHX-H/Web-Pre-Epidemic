<template>
   <div class="header" >
       <el-row class="wrapper " justify="center" align="middle">
           <el-col class="font25px" :span="1" :offset="0.1">
               <e  class="icon-un-fold"></e>
           </el-col>
           <el-col  :span="1">
               <el-image style="height: 35px;" 
               :fit="cover" 
               :src="require('../assets/img/school-logo.jpg')">

               </el-image>
           </el-col>
           <el-col :span="8"><b>Pre_Epidemic——疫情管理系统</b></el-col>
           <el-col :span="4" :offset="9" class="rightArea">
             <el-row align="middle" >
                 <el-space >
                         <div class="tipBox">
                        <span  class="font30px icon-tongzhi"></span>
                        <div class="tipDot"></div>
                   </div>
                    <el-image class="headImg" :src='headUrl' :fit="fill"></el-image>
                    <el-dropdown class="pointer">
                        <span>admin
                            <span class="icon-tabxiala"></span>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>项目地址</el-dropdown-item>
                                <el-dropdown-item>个人中心</el-dropdown-item>
                                <el-dropdown-item >联系作者</el-dropdown-item>
                                <el-dropdown-item divided>注销</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    <el-tooltip effect="light" content="项目仓库">
                        <a>
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
       console.log("s",headUrl)
       return{headUrl}
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
    .font25px{
        font-size: 25px;
    }
    .font30px{
        font-size: 30px;
    }
    .tipBox{
        /* margin-right:5px; */
        cursor:pointer;
    }
    .tipDot{
        width: 5px;
        height: 5px;
        color:blue;
    }
    .headImg{
        height: 45px;
        border: 1px rgba(222,222,222,0.5) solid;
        border-radius: 50%;
        /* margin-right: 5px; */
        cursor:pointer;
    }

</style>