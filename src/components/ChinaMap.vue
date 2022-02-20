<template>
  <div id="chinaMap" ref="chinaMap">s</div>
</template>

<script>
import * as echarts from "echarts";
import { onMounted } from "@vue/runtime-core";
import { getCurrentInstance } from "vue";
import { ref } from "vue";
import $store from "../store/index.js";
export default {
  setup() {
    /* vue3获取全局挂载的 axios  */
    const currentInstance = getCurrentInstance();
    const { $http } = currentInstance.appContext.config.globalProperties;
    /***定义地图变量****/
    let chinaMap = ref(null);
    let myChart = null;
    let mapJson = null;
    let option = null;

    /* 初始化数据 */
    $store.state.mapInfo.location=["中华人民共和国"]
    /* 自定义初始化地图的函数，在onMounted内部调用，DOM已经渲染完成 */
    let initMap = async function () {
      // 基于准备好的dom，初始化echarts实例
      myChart = echarts.init(chinaMap.value);
      /* echarts配置项 */
      option = {
        title: { text: "全国地图" },
        series: {
          name: "疫情详情:" /* 触碰提示框标题 */,
          type: "map",
          map: "china",
          selectedMode: "single",
          roam: true /* 开启鼠标缩放和平移 */,
          // label:{show:true}, /* 是否显示区域name */
        },
        /* 数据集，数据的对应，是以 地图数据里面每块区域的名字 作为name */
        dataset: {
          source: [{ name: "重庆市", value: 18 }],
        },
        /* 提示条,只要改key存在，即使该配置为空，也会打开提示条*/
        tooltip: {},
        /* 统计条配置 */
        visualMap: {
          // left: 'right',
          min: 0,
          max: 100,
          inRange: {
            color: [
              "#313695",
              "#4575b4",
              "#74add1",
              "#abd9e9",
              "#e0f3f8",
              "#ffffbf",
              "#fee090",
              "#fdae61",
              "#f46d43",
              "#d73027",
              "#a50026",
            ],
          },
          text: ["高", "低"],
        },
      };
      await renderMap(); /* 加上 await 保证后面代码在其之后执行 */
      myChart.setOption(option);
      /* 点击事件 */
      myChart.on("click", (params) => {
        console.log("params", params.name);
        switchMap(params.name);
      });

      window.addEventListener("resize", () => {
        myChart.resize();
      });
    };
    /* 读取三级城市数据，存入本地 */
    let saveMapLevel3 = async () => {
      let chinaLevel3 = await $http.get("./adcode_citycode_level3.json");
      localStorage.setItem("mapLevel3", JSON.stringify(chinaLevel3.data));
    };
    onMounted(() => {
      initMap();
      if (!("mapLevel3" in localStorage)) {
        saveMapLevel3();
      }
    });
    function switchMap(name) {
      if (!("mapLevel3" in localStorage)) {
        saveMapLevel3();
      }
      let mapLevel3 = JSON.parse(localStorage.getItem("mapLevel3"));

      let location = $store.getters.getLocation;
      location.push(name);
      /* 城市编码数据采用的是自己编程构造的JSON，存在问题，
                    即：只有一级(省/直辖市）和二级(省/直辖市 下一级) 映射关系正确，更低级的城市被直接合并到了二级中 
                幸运的是：提供数据的DataV接口只提供3级地理数据；所以本JSON文件的部分错误映射关系并不影响本地图的使用
                在下面，做出了错误处理*/

      console.log("本次点击后的地理位置：",location)
      let ob = JSON.parse(JSON.stringify(mapLevel3));

      for (let i = 1; i < location.length; i++) {
        let name = location[i];
        try {
          /* if判断是否是省级以下 */
          if (ob[name] == undefined) {
            ob = ob["children"][name];
          } else {
            ob = ob[name];
          }
        } catch (err) {
          /* 因为数据原因，只允许3级，省/州/市 ，市县级无法点击 */
          /* 这里就限定了最多只能下钻2次 */
          return;
        }
      }
      $store.commit("updateAdcode", ob["adcode"]);
      console.log();
      let word = location[location.length - 1].slice(-1);
      if (word == "县" || location.length>2 && word == "区") {
        /* 在上面中，已经catch处理了，3级以下的情况，令其return结束，
                这里处理的是第二级为县,区的情况，
                因为区域码和DataV提供的地理坐标数据都没有此级别，所以令其return */
        return;
      }
      renderMap(ob["adcode"]);
    }
    async function renderMap(code = 100000) {
      let url="https://geo.datav.aliyun.com/areas_v3/bound/geojson?code=" +String(code)+"_full";
      
      /* 加载数据时，开启加载动画 */
      myChart.showLoading();
      try {
        mapJson = await $http.get( 
            // "./chinaMap.json"
          url 
        );
      } catch (err) {}

      myChart.hideLoading();
      echarts.registerMap("china", mapJson.data);
      option.title.text=$store.state.mapInfo.location[$store.state.mapInfo.location.length-1]
      myChart.setOption(option);
    }
    
    return {
      chinaMap,
    };
  },
};
</script>

<style scoped>
#chinaMap {
  width: 500px;
  height: 500px;
}
</style>
