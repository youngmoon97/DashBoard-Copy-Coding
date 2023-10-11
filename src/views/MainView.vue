<template>
  <v-layout class="main-layout">
    <v-app-bar
      :elevation="5"
      color="#4D5667"
      scroll-threshold="1000"
      :height="50"
    >
      <v-app-bar-nav-icon @click.stop="changeDrawer" />

      <v-app-bar-title>DSME SEA TRIAL DATA CENTER</v-app-bar-title>

      <div class="righttop" style="display: flex; text-align: center">
        <span class="text">목</span>
        <div style="margin: 0px">
          <v-btn icon="mdi-weather-sunny" class="ms-2"></v-btn>
          <p>9/14</p>
        </div>
        <span class="text">금</span>
        <div>
          <v-btn icon="mdi-weather-partly-cloudy" class="ms-2"></v-btn>
          <p>9/15</p>
        </div>
        <span class="text">토</span>
        <div>
          <v-btn icon="mdi-weather-pouring" class="ms-2"></v-btn>
          <p>9/16</p>
        </div>
        <v-spacer></v-spacer>
        <!-- <div class="accout"> -->
        <span class="text">조영문</span>
        <v-btn icon="mdi-account" class="accout"></v-btn>
        <!-- </div> -->
      </div>
    </v-app-bar>

    <v-navigation-drawer
      app
      :scrim="false"
      v-model="drawer"
      class="master-main__sidebar"
      color="#353C48"
      :width="56"
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

    <v-main class="full" style="padding-left: 56px">
      <h1>DashBoard</h1>
      <!-- <div class="overflow-x-auto" v-if="mobile.value">asd</div> -->
      <!-- <v-container class="ma-0 pa-0"> -->
      <GridLayout
        v-model:layout="layout"
        :responsive-layouts="presetLayouts"
        :row-height="58.4"
        :vertical-compact="false"
        drag-allow-from=".vue-draggable-handle"
        responsive
      >
        <template #item="{ item }">
          <template v-if="item.i == 0">
            <ProgessChart> </ProgessChart>
          </template>
          <template v-if="item.i == 1">
            <div class="vue-draggable-handle"></div>
            <WindyComponent />
          </template>
          <template v-if="item.i == 2">
            <BarChart
              :prschartoptions1="barChartOptions1"
              :prschartoptions2="barChartOptions2"
            />
          </template>
          <template v-if="item.i == 3">
            <PieBoatChart></PieBoatChart>
          </template>
          <template v-if="item.i == 4">
            <v-layout class="full">
              <v-app-bar :elevation="5" color="#2F3642" absolute>
                <v-app-bar-title>CLAIM STATUS</v-app-bar-title>
              </v-app-bar>
              <v-main style="height: 100%">
                <PieChart :prschartoptions="pieChartOption" />
              </v-main>
            </v-layout>
          </template>
          <template v-if="item.i == 5">
            <ClaimTable> </ClaimTable>
          </template>
        </template>
      </GridLayout>
      <!-- </v-container> -->
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
// import { Breakpoint, Layout } from "grid-layout-plus";

import { onMounted, reactive, ref } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
const { mobile } = useDisplay();

let drawer = true;
function changeDrawer() {
  drawer = !drawer;
}
onMounted(() => {
  drawer = false;
  // if (mobile.value) alert(mobile.value);
});
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
const presetLayouts = reactive({
  sm: [
    { x: 0, y: 0, w: 6, h: 6, i: 0, static: false },
    { x: 0, y: 6, w: 6, h: 9, i: 1, static: false },
    { x: 0, y: 14, w: 6, h: 7, i: 2, static: false },
    { x: 0, y: 21, w: 6, h: 5, i: 3, static: false },
    { x: 0, y: 26, w: 2, h: 4, i: 4, static: false },
    { x: 2, y: 26, w: 4, h: 4, i: 5, static: false },
  ],
  md: [
    { x: 0, y: 0, w: 10, h: 7, i: 0, static: false },
    { x: 0, y: 7, w: 10, h: 9, i: 1, static: false },
    { x: 0, y: 14, w: 10, h: 7, i: 2, static: false },
    { x: 0, y: 21, w: 10, h: 5, i: 3, static: false },
    { x: 0, y: 26, w: 3, h: 4, i: 4, static: false },
    { x: 3, y: 26, w: 7, h: 4, i: 5, static: false },
  ],
  lg: [
    { x: 0, y: 0, w: 5, h: 5, i: 0, static: false },
    { x: 0, y: 5, w: 5, h: 9, i: 1, static: false },
    { x: 5, y: 0, w: 7, h: 5, i: 2, static: false },
    { x: 5, y: 5, w: 7, h: 5, i: 3, static: false },
    { x: 5, y: 10, w: 2, h: 4, i: 4, static: false },
    { x: 7, y: 10, w: 5, h: 4, i: 5, static: false },
  ],
});
const layout = ref(presetLayouts.lg);

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
    top: "50%",
    textStyle: {
      fontSize: 20,
    },
  },
  legend: {
    textStyle: {
      fontSize: 14,
    },
    top: "10%",
  },
  series: [
    {
      center: ["50%", "60%"],
      name: "CLAIM STATUS",
      type: "pie",
      radius: ["35%", "60%"],
      avoidLabelOverlap: false,
      data: [
        { value: 1, name: "In progess" },
        { value: 5, name: "Completed" },
      ],
      label: {
        show: false,
      },
    },
  ],
});
</script>

<style scoped>
.main-layout {
  height: 100%;
  background-color: #465061;
}
.vgl-layout {
  margin: 13px;
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
  margin-top: 17px;
  top: 50%;
  left: 50%;
}

.ms-2 {
  margin-top: 6px;
  height: 24px;
  /* margin: 6px; */
}
.accout {
  margin: 4px;
}
.righttop {
  height: 50px;
  padding: auto;
  text-align: center;
  align-content: center;
  vertical-align: auto;
}
h1 {
  color: #eee;
  width: 100%;
  height: 100%;
  margin-top: 8px;
  margin-left: 22px;
}
.vue-draggable-handle {
  position: absolute;
  top: 0;
  right: 0;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  padding: 0 8px 8px 0;
  cursor: pointer;
  background-color: black;
  background-origin: content-box;
  border-radius: 10px;
}
.v-navigation-drawer__scrim {
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}
@media (max-width: 1280px) {
  .main {
    padding: 0;
    margin: 0;
    font-size: 1rem;
    width: 1280px;
    white-space: nowrap;
    /* 넘쳐나는 내용 무조건 숨김 */
    overflow-x: hidden;
  }
}
</style>
