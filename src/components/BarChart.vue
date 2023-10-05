<template>
  <v-layout class="full">
    <v-app-bar :elevation="5" color="#023" absolute>
      <v-app-bar-title>FUEL CONSUMPTION</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container style="height: 100%" class="ma-0 pa-0">
        <v-row style="height: 100%" class="ma-0 pa-0">
          <v-col cols="6" class="ma-0 pa-0">
            <v-chart class="chart" :option="props.prschartoptions1" autoresize
          /></v-col>
          <v-col cols="6" class="ma-0 pa-0">
            <v-chart
              class="chart"
              :option="props.prschartoptions2"
              autoresize
            />
          </v-col>
        </v-row>
      </v-container>
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
