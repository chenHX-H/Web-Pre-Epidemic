<template>
  <div class="wrapper wrap" >
      <div class="content-box">
          <div class="title">Pre_Epidemic疫情管理系统</div>
          <el-form >
              <el-form-item  >
                  <el-input placeholder="邮箱"></el-input>
              </el-form-item>
              <el-form-item >
                  <el-input placeholder="密码"></el-input>
              </el-form-item>
              <el-form-item size="large">
                  <el-button-group class="btnGroup">
                    <el-button ref="leftBtn">{{isLoginState ?"登录":"注册"}}</el-button>
                    <el-button ref="right"  class="registerBtn" @click="isLoginState=!isLoginState">
                        <span class="icon-right-arrow" style="color:rgb(59, 143, 211)">
                            &nbsp;&nbsp;</span>{{isLoginState ?"注册":"登录"}}</el-button>
                  </el-button-group>
              </el-form-item>
          </el-form>
      </div>
  </div>
  <h1>This is Login</h1>
</template>

<script>
import {ref} from 'vue'
export default {
    setup(){
    
        let isLoginState=ref(true) //表示是登录按钮
        // switchBtn()
        return{
            isLoginState
        }

    }
}
</script>

<style scoped>
    .wrap{
        position: absolute;
        background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    }
    .content-box{
        position: absolute;
        top: 50%;
        left:50%;
        transform: translateY(-50%) translateX(-50%);
        width: 400px;
        height: 300px;
        background-color: rgba(243, 246, 252,0.3);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);  
        padding:0px 30px 0 30px ;
        box-sizing:border-box;
    }
    :deep(.el-input__inner){
          height: 50px;
          font-size: 20px;
          margin-bottom: 10px;
    }
    .title{
        font-size: 25px;
        font-weight: bold;
        height: 70px;
        line-height:70px;
        text-align: center;
        color: rgb(96, 98, 102,0.5);
        margin-bottom: 10px;
      
    }
    .btnGroup{
         width: 100%;
         margin: 0;
         padding: 0;
         margin-top:-5px ;
         
    }
    button{
        float: left;
        width: 70%;
        background-color: rgba(255,255, 255, 0.8);
    }
    button:focus{
         background-color: rgba(255,255, 255, 0.8);
    }
    .registerBtn{
         float: left;
         width: 30%;
    }
     .registerBtn:focus{
          background-color: rgba(255,255, 255, 0.8);
                  outline: 0;
                  color: gray;
               border: 1px solid  #C6E2FF;

    }
    

</style>