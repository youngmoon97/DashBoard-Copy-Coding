<template>
  <v-layout>
    <v-app-bar :elevation="5" color="#023" absolute>
      <v-app-bar-title>TRIAL PROGRESS(Ongoing Vessel)</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <div class="progressbar">
        <div class="flex">
          <v-icon>mdi-wifi</v-icon>
          <h1>H.2497</h1>
          <v-progress-linear v-model="percentData" height="40" color="primary">
            <strong>{{ Math.ceil(percentData[0]) }}%</strong>
          </v-progress-linear>
        </div>
        <p>33) Water spray test</p>
        <div class="flex">
          <!-- <v-icon>mdi-wifi</v-icon> -->
          <h1>H.4325</h1>
          <v-progress-linear v-model="percentData" height="40" color="primary">
            <strong>{{ Math.ceil(percentData[1]) }}%</strong>
          </v-progress-linear>
        </div>

        <p>28) Instrument meas</p>
      </div>
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref } from "vue";

const percentData = ref([48, 53]);
</script>

<style scoped>
:root {
  background-color: darkblue;
}
.progressbar {
  width: 60%;
  margin-left: 20%;
  margin-top: 8%;
}
.flex {
  display: flex;
}
</style>
