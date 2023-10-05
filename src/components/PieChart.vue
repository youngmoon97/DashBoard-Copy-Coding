<template>
  <v-layout class="full">
    <v-app-bar :elevation="5" color="#023" absolute>
      <v-app-bar-title>CLAIM STATUS</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-chart class="chart" :option="props.prschartoptions" autoresize />
    </v-main>
  </v-layout>
</template>

<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { provide, onMounted } from "vue";

onMounted(() => {});

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
]);

provide(THEME_KEY, "dark");

const props = defineProps({
  prschartoptions: Object,
});
</script>

<style scoped>
.chart {
  height: 100%;
  width: 100%;
}
.full {
  display: flex;
  height: 100%;
  width: 100%;
}
</style>
