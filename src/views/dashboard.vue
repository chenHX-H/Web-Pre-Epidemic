<template>
  <div class="dashboard">
    <el-row :gutter="20">
      <el-col :span="8" >
        <el-card class="mgb20px" shadow="hover">
          <template #header>
            <img class="userHead" src="../assets/img/head.png"  alt="">
            <div class="userInfo">
              <span class="font25px">{{$store.state.userInfo.username}}</span>
              <hr>
              <span>{{$store.state.userInfo.username}}</span>
            </div>
          </template>
            <div class="userInfo-list">
              <el-space alignment="letf" direction="vertical" :size="20">
              <span>最近登录时间:{{$store.state.userInfo.lastTime}}</span>
              <span>最近登录地点:{{$store.state.userInfo.lastArea}}</span>
              </el-space>
            </div>
        </el-card>
        <el-card shadow="hover">
          <template #header>
            用户详情：
          </template>
          <!-- <el-space> -->
            普通用户：
            <el-progress :percentage="50" color="gold"/>
            医护人员:
            <el-progress :percentage="43" color="green"></el-progress>
            管理员:
            <el-progress :percentage="7" ></el-progress>
          <!-- </el-space> -->
        </el-card>
      </el-col>
      <el-col  :span="16">
        <el-row :gutter="20">
          <el-col :span="8" >
            <el-card   shadow="hover" :body-style="{ padding: '0px' }">
              <el-row :gutter="0" align="middle">
                <el-col :span="10">
                  <span class="count-icon icon-yonghu"></span>
                </el-col>
                <el-col  :span="14" align="middle">
                  <p class="count-info-number">2266</p>
                  <p class="count-info-word">用户访问量</p>
                </el-col>
              </el-row>
            
            </el-card>
          </el-col>
          <el-col :span="8" >
            <el-card   shadow="hover" :body-style="{ padding: '0px' }">
              <el-row :gutter="0" align="middle">
                <el-col :span="10">
                  <span style="background-color:#64D572" class="count-icon icon-yonghu"></span>
                </el-col>
                <el-col  :span="14" align="middle">
                  <p  class="count-info-number">15</p>
                  <p class="count-info-word">系统消息</p>
                </el-col>
              </el-row>
            
            </el-card>
          </el-col>
          <el-col :span="8" >
            <el-card   shadow="hover" :body-style="{ padding: '0px' }">
              <el-row :gutter="0" align="middle">
                <el-col :span="10">
                  <span  style="background-color: #F25E43" class="count-icon icon-yonghu"></span>
                </el-col>
                <el-col  :span="14" align="middle">
                  <p style="color: #F25E43" class="count-info-number">266</p>
                  <p class="count-info-word">数量</p>
                </el-col>
              </el-row>
            
            </el-card>
          </el-col>
         
        </el-row>
        <el-row></el-row>

      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .dashboard{
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04)
    /* background: #000; */
  }
  .userInfo{
    float: right;;
    width: 120px;
    height: 100px;
    text-align: center;
    padding: 20px 30px 0 0;
  }
  .mgb20px{
    margin-bottom: 20px;
  }
  .userHead{
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .count-icon{
    float: left;
    box-sizing: border-box;
    font-size: 50px;
    line-height: 100px;
    text-align: center;
    /* padding: 30px; */
    width: 100px;
    height: 100px;
    color: white;
    background-color: #2D8CF0;
  }

  .count-info-number{
    font-size: 35px;

    font-weight: bold;
    color: #2D8CF0;
  }
  .count-info-word{
    font-weight: 100;
  }
 
</style>