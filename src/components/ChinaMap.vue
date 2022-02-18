<template>
    <div id="chinaMap">s</div>
</template>

<script>
import * as echarts from "echarts";
import { onMounted } from "@vue/runtime-core";
import { getCurrentInstance } from "vue";
export default {
    setup() {
        /* vue3获取全局挂载的 axios  */
        const currentInstance = getCurrentInstance();
        const { $http } = currentInstance.appContext.config.globalProperties;

        /* echarts配置项 */
        let option = {
            title: { text: "全国地图" },
            series: [
                {   
                    name:"疫情详情:", /* 触碰提示框标题 */
                    type: "map",
                    map: "china",
                    selectedMode: "single",
                    roam:true
                },
            ],
            /* 数据集，数据的对应，是以 地图数据里面每块区域的名字 作为name */
            dataset:{
                source:[
                    {name:"重庆市",value:18},
                ]        
            },
            /* 提示条,只要改key存在，即使该配置为空，也会打开提示条*/
            tooltip:{

            },
            /* 统计条配置 */
            visualMap: {
                    // left: 'right',
                    min: 0,
                    max: 100,
                    inRange: {
                        color: ['#313695','#4575b4','#74add1','#abd9e9',
                            '#e0f3f8','#ffffbf','#fee090','#fdae61',
                            '#f46d43','#d73027','#a50026'
                        ]
                    },
                    text:['高','低']
                },
                
            };
            /* 自定义渲染地图的函数，在onMounted内部调用，DOM已经渲染完成 */
            let renderMap = async function () {
                // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.init(document.getElementById("chinaMap"));
                /* 加载数据时，开启加载动画 */
                myChart.showLoading()
                let mapJson = await $http.get(
                    // "./chinaMap.json"
                    "https://geo.datav.aliyun.com/areas_v2/bound/100000_full.json"
                );
                /* 加载完毕，关闭动画 */
                myChart.hideLoading()
                console.log("打印返回结果:", mapJson);
                echarts.registerMap("china", mapJson.data);
                myChart.setOption(option);

                window.addEventListener("resize", () => {
                    myChart.resize();
                });
            };
            onMounted(() => {
            renderMap();
        });
    },
};
</script>

<style scoped>
#chinaMap {
    width: 500px;
    height: 500px;
}
</style>
