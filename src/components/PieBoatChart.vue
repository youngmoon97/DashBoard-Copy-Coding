<template>
  <v-layout class="full boat">
    <v-app-bar :elevation="5" color="#2F3642" absolute>
      <v-app-bar-title>ANNUAL TRIAL STATUS(Actual / Planned)</v-app-bar-title>
    </v-app-bar>
    <v-main class="full">
      <v-row style="height: 100%; width: 100%" class="ma-0 pa-0">
        <v-col
          cols="4"
          class="ma-0 pa-0"
          style="height: 100%; width: 100% margin-left:12px"
        >
          <PieChart :prschartoptions="pieBoatChartOption" />
        </v-col>
        <v-col cols="4" class="ma-0 pa-0" style="height: 100%; width: 100%">
          <v-row style="height: 50%; width: 100%" class="ma-0 pa-0">
            <v-col class="ma-0 pa-0">
              <BoatChart :prschartoptions="option1"></BoatChart>
            </v-col>
          </v-row>
          <v-row style="height: 50%; width: 100%" class="ma-0 pa-0">
            <v-col class="ma-0 pa-0" style="height: 100%; width: 100%">
              <BoatChart :prschartoptions="option3"></BoatChart>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="4" class="ma-0 pa-0">
          <v-row style="height: 50%; width: 100%" class="ma-0 pa-0">
            <v-col class="ma-0 pa-0" style="height: 100%; width: 100%">
              <BoatChart :prschartoptions="option2"></BoatChart>
            </v-col>
          </v-row>
          <v-row style="height: 50%; width: 100%" class="ma-0 pa-0">
            <v-col class="ma-0 pa-0" style="height: 100%; width: 100%">
              <BoatChart :prschartoptions="option4"></BoatChart>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-main>
  </v-layout>
</template>

<script setup>
import PieChart from "./PieChart.vue";
import BoatChart from "./BoatChart.vue";
import { svg } from "@/assets/boatsvg.js";
import { ref } from "vue";

const pieBoatChartOption = ref({
  title: {
    text: `Overall\n\n29%\n(12/41)`,
    left: "center",
    top: "center",
    textStyle: {
      fontSize: 13,
    },
  },
  legend: {
    textStyle: {
      fontSize: 22,
    },
    top: "12%",
  },
  series: [
    {
      name: "ANNUAL TRIAL STATUS",
      type: "pie",
      radius: ["35%", "50%"],
      avoidLabelOverlap: false,

      data: [
        { value: 12, name: "Actual" },
        { value: 29, name: "Planned" },
      ],
      label: {
        show: false,
      },
    },
  ],
});
const symbols = svg;

const st = 14;
const gt = 15;

const labelSetting = {
  show: true,
  top: "70%",
  // position: "top",
  offset: [0, -20],
  formatter: function (param) {
    return (
      param.seriesName +
      "(" +
      ((param.value / (st + gt)) * 100).toFixed(0) +
      "%)"
    );
  },
  fontSize: 20,
  fontFamily: "Arial",
};

const option1 = ref({
  tooltip: {},
  title: {
    text: `ST(4/${st})\nGT(4/${gt})`,
    right: "top",
    textStyle: {
      fontSize: 15,
    },
  },
  xAxis: {
    max: st + gt,
    offset: 20,
    show: false,
    splitLine: { show: false },
  },
  yAxis: {
    data: ["full"],
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: { show: false },
  },
  series: [
    {
      name: "LNG",
      type: "pictorialBar",
      symbolClip: true,
      symbolBoundingData: st + gt,
      label: labelSetting,
      data: [
        {
          value: 8,
          symbol: symbols,
          symbolSize: [220, 50],
          symbolColor: "black",
        },
      ],
      z: 10,
    },
    {
      name: "full",
      type: "pictorialBar",
      symbolBoundingData: st + gt,
      animationDuration: 0,
      itemStyle: {
        color: "#ccc",
      },
      data: [
        {
          value: 29,
          symbol: symbols,
          symbolSize: [220, 50],
          symbolColor: "black",
        },
      ],
    },
  ],
});
const option2 = ref({
  tooltip: {},
  title: {
    text: `ST(0/1)`,
    right: "top",
    textStyle: {
      fontSize: 15,
    },
  },
  xAxis: {
    max: st + gt,
    offset: 20,
    show: false,
    splitLine: { show: false },
  },
  yAxis: {
    data: [],
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: { show: false },
  },
  series: [
    {
      name: "LPG",
      type: "pictorialBar",
      symbolClip: true,
      symbolBoundingData: st + gt,
      label: labelSetting,
      data: [
        {
          value: 0,
          symbol: symbols,
          symbolSize: [220, 50],
        },
      ],
      z: 10,
    },
    {
      name: "full",
      type: "pictorialBar",
      symbolBoundingData: st + gt,
      animationDuration: 0,
      itemStyle: {
        color: "#ccc",
      },
      data: [
        {
          value: 1,
          symbol: symbols,
          symbolSize: [220, 50],
        },
      ],
    },
  ],
});
const option3 = ref({
  tooltip: {},
  title: {
    text: `ST(3/6)`,
    right: "top",
    textStyle: {
      fontSize: 15,
    },
  },
  xAxis: {
    max: st + gt,
    offset: 20,
    show: false,
    splitLine: { show: false },
  },
  yAxis: {
    data: [],
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: { show: false },
  },
  series: [
    {
      name: "COT",
      type: "pictorialBar",
      symbolClip: true,
      symbolBoundingData: st + gt,
      label: labelSetting,
      data: [
        {
          value: 14.6,
          symbol: symbols,
          symbolSize: [220, 50],
        },
      ],
      z: 10,
    },
    {
      name: "full",
      type: "pictorialBar",
      symbolBoundingData: st + gt,
      animationDuration: 0,
      itemStyle: {
        color: "#ccc",
      },
      data: [
        {
          value: st + gt,
          symbol: symbols,
          symbolSize: [220, 50],
        },
      ],
    },
  ],
});
const option4 = ref({
  tooltip: {},
  title: {
    text: `ST(1/5)`,
    right: "top",
    textStyle: {
      fontSize: 15,
    },
  },
  xAxis: {
    max: st + gt,
    offset: 20,
    show: false,
    splitLine: { show: false },
  },
  yAxis: {
    data: [],
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: { show: false },
  },
  series: [
    {
      name: "CONTI",
      type: "pictorialBar",
      symbolClip: true,
      symbolBoundingData: st + gt,
      label: labelSetting,
      data: [
        {
          value: 5.9,
          symbol: symbols,
          symbolSize: [220, 50],
        },
      ],
      z: 10,
    },
    {
      name: "full",
      type: "pictorialBar",
      symbolBoundingData: st + gt,
      animationDuration: 0,
      itemStyle: {
        color: "#ccc",
      },
      data: [
        {
          value: st + gt,
          symbol: symbols,
          symbolSize: [220, 50],
        },
      ],
    },
  ],
});
</script>

<style scoped>
.full {
  display: block;
  height: 100%;
  width: 100%;
}
</style>
