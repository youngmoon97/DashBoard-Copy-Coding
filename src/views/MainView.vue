<template>
  <v-layout class="justify-center">
    <v-app-bar :elevation="5" color="#4D5667" scroll-threshold="1000">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-app-bar-title>DSME SEA TRIAL DATA CENTER</v-app-bar-title>

      <div class="righttop" style="display: flex; text-align: center">
        <span class="text" style="vertical-align: middle">목</span>
        <div>
          <v-btn icon="mdi-weather-sunny" class="ms-2"></v-btn>
          <p>9/14</p>
        </div>
        <span class="text" style="vertical-align: middle">금</span>
        <div>
          <v-btn icon="mdi-weather-partly-cloudy" class="ms-2"></v-btn>
          <p>9/15</p>
        </div>
        <span class="text" style="vertical-align: middle">토</span>
        <div>
          <v-btn icon="mdi-weather-pouring" class="ms-2"></v-btn>
          <p>9/16</p>
        </div>
        <v-spacer></v-spacer>
        <div class="accout">
          <span style="vertical-align: middle">조영문</span>
          <v-btn icon="mdi-account" class="ms-2"></v-btn>
        </div>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      app
      clipped
      expand-on-hover
      v-model="drawer"
      class="master-main__sidebar"
      color="#353C48"
      :width="60"
    >
      <v-list density="compact" nav>
        <v-list-item link v-for="menu in menuitems" :key="menu.name">
          <v-list-item-media class="mr-2">
            <v-icon>
              {{ menu.name }}
            </v-icon>
          </v-list-item-media>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="justify-center align-center">
      <h1>DashBoard</h1>
      <GridLayout
        v-model:layout="layout"
        :row-height="50"
        :vertical-compact="false"
      >
        <template #item="{ item }">
          <template v-if="item.i == 0">
            <v-container class="ma-0 pa-0" style="height: 100%">
              <ProgessChart> </ProgessChart>
            </v-container>
          </template>
          <template v-if="item.i == 1">
            <div class="echart">
              <BarChart
                :prschartoptions1="barChartOptions1"
                :prschartoptions2="barChartOptions2"
              />
            </div>
          </template>
          <template v-if="item.i == 2">
            <v-container class="ma-0 pa-0" style="height: 100%">
              <WindyComponent />
            </v-container>
          </template>
          <template v-if="item.i == 3">
            <PieBoatChart></PieBoatChart>
          </template>
          <template v-if="item.i == 4">
            <v-layout class="full">
              <v-app-bar :elevation="5" color="#2F3642" absolute>
                <v-app-bar-title>CLAIM STATUS</v-app-bar-title>
              </v-app-bar>
              <v-main>
                <v-container class="ma-0 pa-0" style="height: 26vh">
                  <PieChart :prschartoptions="pieChartOption" />
                </v-container>
              </v-main>
            </v-layout>
          </template>
          <template v-if="item.i == 5">
            <v-container class="ma-0 pa-0" style="height: 100%">
              <ClaimTable> </ClaimTable
            ></v-container>
          </template>
          <!-- <span class="text">{{ item.i }}</span> -->
        </template>
      </GridLayout>
    </v-main>
  </v-layout>
</template>

<script setup>
import WindyComponent from "@/components/WindyComponent.vue";
import BarChart from "@/components/BarChart.vue";
import PieChart from "@/components/PieChart.vue";
import ProgessChart from "@/components/ProgessChart.vue";
import PieBoatChart from "@/components/PieBoatChart.vue";
import ClaimTable from "@/components/ClaimTable.vue";

import { onMounted, reactive, ref } from "vue";

let drawer = true;
// console.log(drawer);
const menuitems = [
  {
    name: "mdi-monitor-dashboard",
    path: "/",
  },
  {
    name: "mdi-database-search",
    path: "/second",
  },
  {
    name: "mdi-chart-box-outline",
    path: "/third",
  },
  {
    name: "mdi-cogs",
    path: "/forth",
  },
];
const layout = reactive([
  { x: 0, y: 0, w: 5, h: 7, i: 0, static: false, mode: "chart" },
  { x: 5, y: 0, w: 7, h: 7, i: 1, static: false, mode: "windy" },
  { x: 0, y: 5, w: 5, h: 14, i: 2, static: false },
  { x: 5, y: 5, w: 7, h: 7, i: 3, static: false },
  { x: 5, y: 10, w: 2, h: 7, i: 4, static: false },
  { x: 7, y: 10, w: 5, h: 7, i: 5, static: false },
]);
const barChartOptions1 = ref({
  legend: {
    bottom: "bottom",
  },
  tooltip: {},
  dataset: {
    source: [
      ["product", "HSFO", "LSMGO", "GAS", "CO2"],
      ["1Q", 0.01, 0.05, 0.055, null],
      ["1Y", 0.01, 0.05, 0.055, 0.06],
    ],
  },
  xAxis: { type: "category" },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [
    {
      type: "bar",
      label: {
        show: true,
        position: "top",
      },
    },
    {
      type: "bar",
      label: {
        show: true,
        position: "top",
      },
    },
    {
      type: "bar",
      label: {
        show: true,
        position: "top",
      },
    },
    {
      type: "bar",
      label: {
        show: true,
        position: "top",
      },
    },
  ],
});

const barChartOptions2 = ref({
  legend: {
    bottom: "bottom",
  },
  tooltip: {},
  dataset: {
    source: [
      ["product", "HSFO", "LSMGO", "GAS"],
      ["2482", 0.0, 2.7, 5.5],
      ["5478", 1.4, 2.0, 0.0],
    ],
  },
  xAxis: { type: "category" },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [
    {
      type: "bar",
      label: {
        show: true,
        position: "top",
      },
    },
    {
      type: "bar",
      label: {
        show: true,
        position: "top",
      },
    },
    {
      type: "bar",
      label: {
        show: true,
        position: "top",
      },
    },
  ],
});
const pieChartOption = ref({
  title: {
    text: `1/6`,
    left: "center",
    top: "center",
    textStyle: {
      fontSize: 30,
    },
  },
  legend: {
    textStyle: {
      fontSize: 15,
    },
    top: "12%",
  },
  series: [
    {
      name: "CLAIM STATUS",
      type: "pie",
      radius: ["35%", "50%"],
      avoidLabelOverlap: false,

      data: [
        { value: 1, name: "In progess" },
        { value: 5, name: "Completed" },
      ],
    },
  ],
});

onMounted(() => {
  drawer = false;
});
</script>

<style scoped>
.justify-center {
  background-color: #465061;
}
h1 {
  color: #eee;
}
.vgl-layout {
  background-color: #465061;
}

:deep(.vgl-item:not(.vgl-item--placeholder)) {
  background-color: #100c2a;
  border: 1px solid black;
}

:deep(.vgl-item--resizing) {
  opacity: 90%;
}

:deep(.vgl-item--static) {
  background-color: #cce;
}
.text {
  margin-top: 25px;
}
.weather {
  text-align: center;
}
.ms-2 {
  margin-right: 6px;
}
.accout {
  margin-top: 14px;
}
.echart {
  display: block;
  height: 100%;
  width: 100%;
}
</style>
