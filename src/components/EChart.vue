<template>
  <div class="bar-echart-wrap">
    <ECharts :options="props" autoresize />
  </div>
</template>

<script setup>
import ECharts from "vue-echarts";

const props = defineProps({ prsChartOptions: Object });
</script>

<style scoped>
.bar-echart-wrap {
  width: 100%;
  height: 100%;
}
.ECharts {
  width: 100%;
  height: 100%;
}
</style>
