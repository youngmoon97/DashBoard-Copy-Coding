<template>
  <v-layout class="full table">
    <v-app-bar :elevation="20" color="#2F3642" floating>
      <v-app-bar-title
        >CLAIM LIST
        <v-icon>mdi-email-outline</v-icon>
      </v-app-bar-title>
    </v-app-bar>
    <v-main class="full table" style="overflow: auto" scrollable="true">
      <v-table class="text-left table" theme="dark">
        <tbody>
          <tr v-for="claim in claimList" :key="claim.no" style="color: white">
            <td>{{ claim.time }}</td>
            <td>{{ claim.number }} - {{ claim.content }}</td>
            <td>{{ claim.number }}</td>
            <td>
              <v-btn v-if="claim.status == 'FATAL'" color="red" width="140">{{
                claim.status
              }}</v-btn>
              <v-btn v-else color="yellow" width="140">{{
                claim.status
              }}</v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref } from "vue";

const claimList = ref([
  {
    no: 5,
    time: "2021-10-11 13:21:07",
    content: "E2247[긴급] SUB ENGINE PAR...",
    number: "1234",
    status: "FATAL",
  },
  {
    no: 4,
    time: "2021-03-09 08:51:54",
    content: "E2247[긴급] Main Trans...",
    number: "2426",
    status: "FATAL",
  },
  {
    no: 3,
    time: "2021-03-04 03:02:00",
    content: "E006 PREFERENTIAL T...",
    number: "2499",
    status: "GENERAL ITEM",
  },
  {
    no: 2,
    time: "2021-02-15 04:13:11",
    content: "007 NO.1 AND NO.2 V...",
    number: "2498",
    status: "URGENT ITEM",
  },
  {
    no: 1,
    time: "2021-02-01 06:21:07",
    content: "018 MAIN ENGINE PAR...",
    number: "5472",
    status: "GENERAL ITEM",
  },
]);
</script>

<style scoped>
.chart {
  height: 100%;
  width: 100%;
}
.full {
  height: 100%;
  width: 100%;
}
</style>
