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
        <el-row>
          <el-card class="backlog-list" shadow="hover">
            <template #header>
              <span>待处理列表</span>
            </template>
            <el-table :data="tableData">
              <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column label="标题">
                <template #default="scope">{{scope.row.title}}</template>
              </el-table-column>
              <el-table-column label="截止日期" >
                <template #default="scope">{{scope.row.endDate}}</template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-row>

      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col  :span="12">
        <el-card class="chart-box" shadow="hover" :body-style="{padding:'0px'}">
            <Schart class="chart" canvasId="canvas1" :options="chartData1"></Schart>
        </el-card>
      </el-col>
      <el-col  :span="12">
        <el-card class="chart-box" shadow="hover" :body-style="{padding:'0px'}">
            <Schart class="chart" canvasId="canvas2" :options="chartData2"></Schart>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Schart from 'vue-schart'
export default {

  components:{Schart},
    setup() {
        const tableData = [
            {
                endDate: "2022-02-15",
                title: "事件1",
            },
            {
                endDate: "2022-02-16",
                title: "事件1",
            },
            {
                endDate: "2022-02-15",
                title: "事件1",
            },
            {
                endDate: "2022-02-15",
                title: "事件1",
            }
        ];
        const chartData1 = {
            type: "bar",
            title: {
                text: "最近一周访问人数图"
            },
            bgColor: "#fbfbfb",
            labels: ["周一", "周二", "周三", "周四", "周五"],
            datasets: [{
                    label: "普通用户",
                    fillColor: "rgba(241,49,74,0.5)",
                    data: [54, 43, 65, 45, 78]
                }, {
                    label: "医护人员",
                    data: [42, 26, 35, 45, 28]
                }, {
                    label: "管理员",
                    data: [5, 6, 4, 3, 5]
                }
            ]
        };
        const chartData2 = {
          type:'line',
          title:{text:'最近四周用户注册趋势图'},
          bgColor:'#fbfbfb',
          labels:['第一周','第二周','第三周','第四周'],
          datasets:[{
            label:'普通用户',
            data:[45,32,16,75]
          },{
            label:'医护人员',
            data:[26,42,32,28]
          },{
            label:'管理员数量增长',
            data:[4,2,3,2]
          }]
        }
        return {
            tableData,
            chartData1,
            chartData2
        };
    }
}
</script>

<style scoped>
  .dashboard{
    box-sizing: border-box;
    display: block;
    width: 100%;
    /* height: 100%; */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
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
  .backlog-list{
    margin-top: 20px;
    width: 100%;
    height: 370px;
  }
  .chart-box{
    box-sizing: border-box;
    width: 100%;
    margin: 20px 0 20px 0;
    padding: 0 10px 0 10px;
  }
  .chart{
    height: 300px;
  }
</style>