<template>
  <v-layout class="full justify-center">
    <v-app-bar :elevation="5" color="#2F3642" absolute>
      <v-app-bar-title>FUEL CONSUMPTION</v-app-bar-title>
    </v-app-bar>
    <v-main style="height: 100%">
      <v-row style="height: 100%" class="ma-0 pa-0" no-gutters>
        <v-col cols="12" sm="12" md="6" lg="6" class="ma-0 pa-0 half">
          <v-chart class="chart" :option="props.prschartoptions1" autoresize
        /></v-col>
        <v-col cols="12" sm="12" md="6" lg="6" class="ma-0 pa-0 half">
          <v-chart class="chart" :option="props.prschartoptions2" autoresize />
        </v-col>
      </v-row>
    </v-main>
  </v-layout>
</template>

<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { provide, onMounted } from "vue";

onMounted(() => {});

use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent,
]);

provide(THEME_KEY, "dark");

const props = defineProps({
  prschartoptions1: Object,
  prschartoptions2: Object,
});
</script>

<style scoped>
/* .chart {
  color: #000;
  height: 100%;
  width: 100%;
} */
.full {
  display: block;
  height: 100%;
  width: 100%;
}
</style>
