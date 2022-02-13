<template>
  <div class="wrapper wrap" >
      <div class="content-box">
          <div class="title">Pre_Epidemic疫情管理系统</div>
          <el-form :model="formData" ref="form" :rules="rules"
          :validate-on-rule-change="false">
              <el-form-item  required prop="email">
                  <el-input v-model="formData.email" placeholder="邮箱"></el-input>
              </el-form-item >
              <el-form-item required prop="password">
                  <el-input v-model="formData.password"  placeholder="密码" show-password></el-input>
              </el-form-item>
              <el-form-item size="large" >
                  <el-button-group class="btnGroup">
                    <el-button @click="submitForm">{{formData.isLoginState ?"登录":"注册"}}</el-button>
                    <el-button class="registerBtn" @click="formData.isLoginState=!formData.isLoginState">
                        <span class="icon-right-arrow" style="color:rgb(59, 143, 211)">
                            &nbsp;&nbsp;</span>{{formData.isLoginState ?"注册":"登录"}}</el-button>
                  </el-button-group>
              </el-form-item>
          </el-form>
      </div>
  </div>
  <h1>This is Login</h1>
</template>

<script>
import {reactive,ref} from 'vue'
import { useRouter } from 'vue-router'
export default {
    setup(){
        let formData=reactive({
            isLoginState:true,  //表示是登录按钮
            email:"",
            password:""
        })
        const form=ref(null)
        const router=useRouter()
        console.log("form",form)

        let rules={
            email:[
                {required:true,message:"请输入邮箱"},
                {min:5,max:25,message:"长度在5-25之间",trigger: 'blur'}
            ],
            password:[
                {required:true,message:"请输入密码"},
                {min:6,max:20,message:"密码长度应在6-20之间",trigger: 'blur'}
            ]
        }

        function submitForm(){
            form.value.validate((valid)=>{ //如果表单的规则被满足，则为true，不满足的情况，都设置了提示信息，即如果有错误提示就为false
                if(valid){
                    console.log("邮箱账号：",formData.email)
                    console.log("密码:",formData.password)
                    localStorage.setItem("user",formData.email+"=="+formData.password)
                    router.push("/")
                    console.log("ssa")
                }else{
                    console.log("登录失败")
                }
            })
            
            
        }
        return{
            formData,submitForm,form,rules
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
        border-radius: 8px;
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
         font-weight: bold;
         color:rgba(155,155,155);

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