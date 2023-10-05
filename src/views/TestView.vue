<template>
  <PieBoatChart :prschartoptions="pieChartOption"></PieBoatChart>
</template>

<script setup>
import PieBoatChart from "@/components/PieBoatChart.vue";
import { ref } from "vue";

const pieChartOption = ref({
  title: {
    text: `1/6`,
    left: "center",
    top: "center",
    textStyle: {
      fontSize: 30,
    },
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    textStyle: {
      fontSize: 22,
    },
    top: "15%",
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
</script>
<style scoped></style>
