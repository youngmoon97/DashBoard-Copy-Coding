<template>
  <div class="bar-echart-wrap">
    <ECharts :options="props" autoresize theme="dark-dsme-sst-01" />
  </div>
</template>

<script setup>
import ECharts from "vue-echarts/components/ECharts";

const props = defineProps({ prsChartOptions: Object });
</script>

<style lang="scss" scoped>
.bar-echart-wrap >>> {
  width: 100%;
  height: 100%;

  .echarts {
    width: 100%;
    height: 100%;
  }
}
</style>
