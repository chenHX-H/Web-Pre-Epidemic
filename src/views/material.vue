<template>
  <div class="material">
      <div class="head">
        <el-row :gutter="20"  align="middle">
            <el-col :span="5"  >
                <el-input size="large" v-model="input" placeholder="Please input" clearable />
            </el-col >
            <el-col :span="2">
              <el-button style="height: 38px;" type="primary">搜索</el-button>

            </el-col>
            <el-col :span="5" :offset="12" align="end">
                <el-button style="width: 80px; height: 38px;" type="primary">添加</el-button>
            </el-col>
        </el-row>
    
      </div>
      <el-table :data="tableData" :header-cell-style="{background:'rgba(228,228,228,.9)'}" stripe border >
          <el-table-column label="物资名" prop="name"></el-table-column>
          <el-table-column label="物资属类" prop="kind"></el-table-column>
          <el-table-column label="物资总量" >
              <template #default="scope">
                  {{scope.row.count+'/'+scope.row.residue}}
              </template>
          </el-table-column>
          <el-table-column label="操作">
              <template #default>
                  <el-button>申请</el-button>
                  <el-button>补充</el-button>
              </template>
          </el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
  setup(){
       let tableData=[{
         name:"物资一",
         kind:"医疗物资",
         count:"200",
         residue:"18"
       },{
         name:"物资2",
         kind:"医疗物资",
         count:"202",
         residue:"18"
       },{
         name:"物资3",
         kind:"医疗物资",
         count:"200",
         residue:"18"
       },{
         name:"物资4",
         kind:"医疗物资",
         count:"200",
         residue:"18"
       },]
       return{
           tableData
       }
  }


}
</script>

<style scoped>
    .material{
        position: absolute;
        padding: 20px 100px 0 80px ;
        top:20px;
        bottom: 0;;
        right: 10px;
        left: 0;
        border: 1px solid rgba(188, 188, 188, 0.5);

        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04)
    }
    .head{
        /* margin: 20px  0; */
        width: 100%;
        height: 100px;
        
        /* background-color: rgba(222,222,222); */
    }
    .head>div{
        height: 100%;
    }
   .table-header{
       color: red;
       background-color: rgba(0,0,0,0.5);
   }
</style>