<template>
    <div class="map-box">
        <div id="chinaMap" ref="chinaMap"></div>
        <span @click="switchMap(0, 0)" class="icon-lastPage"></span>
    </div>
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
        let location = $store.getters.getLocation;
        let mapLevel3 = mapLevel3 = JSON.parse(localStorage.getItem("mapLevel3"));

        /* 初始化数据 */
        location = ["中华人民共和国"];
        let option = {
            title: { text: "全国地图" },
            series: {
                name: "疫情详情:" /* 触碰提示框标题 */,
                type: "map",
                map: "china",
                selectedMode: "single",
                roam: true /* 开启鼠标缩放和平移 */,
                // label:{show:true}, /* 是否显示区域name */
                // center:  [80, 40],
                zoom: 1
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
        /* 自定义初始化地图的函数，在onMounted内部调用，DOM已经渲染完成 */
        let initMap = async function () {
            // 基于准备好的dom，初始化echarts实例
            myChart = echarts.init(chinaMap.value);
            /* echarts配置项 */

            await renderMap(); /* 加上 await 保证后面代码在其之后执行 */
            /* 点击事件 */
            myChart.on("click", (params) => {
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
        function switchMap(name, operate = 1) {
            /* operate：1表示进入下一级地图，0表示回到上一级 */
            if (!("mapLevel3" in localStorage)) {
                saveMapLevel3();
                mapLevel3 = JSON.parse(localStorage.getItem("mapLevel3"));
            }

            if (operate == 1) {
                if (location[location.length - 1] != name) {
                    if (location.length>1 && (name.slice(-1) == "县" ||name.slice(-1) == '区')) {
                        console.log('最多只能下钻3级');
                        return

                    }
                    location.push(name);
                }
            } else {
                if (location.length != 1) {
                    location.pop();
                }
            }
            console.log("本次点击后的地理位置：", location);
            let ob = mapLevel3;
            let code = 100000
            let iterator = null
            for (let i = 1; i < location.length; i++) {
                if (i == 1) {
                    iterator = ob
                } else {
                    iterator = ob['children']
                }
                iterator.forEach(item => {
                    if (item['name'] == location[i]) {
                        ob = item
                    }
                })
                console.log('ob:', ob)
                 code = ob['code']
            }

           

            if (code.length != 6) {
                let i = 6 - code.length
                while (i-- > 0) {
                    code += '0'
                }
            }
            $store.commit("updateAdcode", code);
            renderMap(code);
        }
        async function renderMap(code = '100000') {
            let url =
                "https://geo.datav.aliyun.com/areas_v3/bound/geojson?code=" +
                code +
                "_full";

            let url2 = "https://geo.datav.aliyun.com/areas_v3/bound/" + code + "_full.json"

            /* 加载数据时，开启加载动画 */
            myChart.showLoading();
            let title = "";
            try {
                if (location.length == 1) {
                    mapJson = await $http.get("./chinaMap.json");
                    title = location[0];

                } else {
                    mapJson = await $http.get(url2);
                    title = location[1];
                    for (let i = 2; i < location.length; i++) {
                        title = title + "-" + location[i];
                    }

                }
            } catch (err) { }

            myChart.hideLoading();
            echarts.registerMap("china", mapJson.data);

            option.title.text = title;
            myChart.setOption(option, true);
        }

        return {
            chinaMap,
            switchMap,
        };
    },
};
</script>

<style scoped>
.map-box {
    position: relative;
}
.map-box > span {
    position: absolute;
    top: 35px;
    left: 20px;
    font-size: 30px;
    cursor: pointer;
}
.map-box > span:hover {
    color: rgba(0, 0, 0, 0.5);
}
#chinaMap {
    width: 500px;
    height: 500px;
}
</style>
