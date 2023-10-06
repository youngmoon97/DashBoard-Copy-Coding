<template>
  <v-layout>
    <v-app-bar :elevation="5" color="#5b5b5b" absolute>
      <v-app-bar-title>TRIAL PROGRESS(Ongoing Vessel)</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <div class="progressbar">
        <div class="flex">
          <v-row>
            <v-col cols="1">
              <v-icon style="color: deepskyblue">mdi-wifi</v-icon></v-col
            >
            <v-col cols="2"><h1 class="white">H.2497</h1></v-col>
            <v-col cols="9"
              ><v-progress-linear
                v-model="percentData1"
                height="40"
                color="primary"
                rounded
              >
                <strong class="white">{{ Math.ceil(percentData1) }}%</strong>
              </v-progress-linear></v-col
            >
          </v-row>
        </div>
        <v-row>
          <v-spacer> </v-spacer>
          <v-col cols="9"><p class="white">33) Water spray test</p></v-col>
        </v-row>
        <div class="flex">
          <v-row>
            <v-col cols="1"></v-col>
            <v-col cols="2"><h1 class="white">H.4325</h1></v-col>
            <v-col cols="9"
              ><v-progress-linear
                v-model="percentData2"
                height="40"
                color="primary"
                rounded
              >
                <strong class="white">{{ Math.ceil(percentData2) }}%</strong>
              </v-progress-linear></v-col
            >
          </v-row>
          <!-- <v-icon>mdi-wifi</v-icon> -->
        </div>
        <v-row>
          <v-spacer> </v-spacer>
          <v-col cols="9"><p class="white">28) Instrument meas</p></v-col>
        </v-row>
      </div>
    </v-main>
  </v-layout>
</template>

<script setup>
// import { ref } from "vue";

const percentData1 = 48;
const percentData2 = 53;
</script>

<style scoped>
:root {
  background-color: #013;
}
.white {
  color: white;
}
.progressbar {
  width: 80%;
  margin-left: 10%;
  margin-top: 8%;
}
.flex {
  display: flex;
}
</style>
