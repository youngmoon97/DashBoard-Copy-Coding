<template>
  <v-layout class="full">
    <v-app-bar :elevation="5" color="#2F3642" absolute>
      <v-app-bar-title>TRIAL PROGRESS(Ongoing Vessel)</v-app-bar-title>
    </v-app-bar>
    <v-main style="height: 100%; width: 100%" class="justify-center">
      <v-container
        class="progressbar justify-center align-center"
        style="margin-top: 45px"
      >
        <div class="flex">
          <v-row>
            <v-col cols="1">
              <v-icon
                style="color: deepskyblue; margin-top: 4px; margin-right: 2px"
                >mdi-wifi</v-icon
              ></v-col
            >
            <v-col cols="2"><h1 class="white">H.2497</h1></v-col>
            <v-col cols="1"></v-col>
            <v-col cols="8"
              ><v-progress-linear
                v-model="percentData1"
                height="40"
                color="#01C0F1"
                rounded
              >
                <strong class="white">{{ Math.ceil(percentData1) }}%</strong>
              </v-progress-linear></v-col
            >
          </v-row>
          <v-row class="ma-0 pa-0 text-center">
            <v-col cols="11"><p class="white">33) Water spray test</p></v-col>
          </v-row>
        </div>

        <v-spacer></v-spacer>

        <div class="flex justify-center align-center">
          <v-row>
            <v-col cols="1"></v-col>
            <v-col cols="2"><h1 class="white">H.4325</h1></v-col>
            <v-col cols="1"></v-col>

            <v-col cols="8"
              ><v-progress-linear
                v-model="percentData2"
                height="40"
                color="#01C0F1"
                rounded
              >
                <strong class="white">{{ Math.ceil(percentData2) }}%</strong>
              </v-progress-linear></v-col
            >
          </v-row>
          <v-row class="ma-0 pa-0 text-center">
            <v-col cols="11"><p class="white">28) Instrument meas</p></v-col>
          </v-row>
        </div>
      </v-container>
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
  height: 100%;
  width: 80%;
}
.flex {
  /* display: flex; */
}
.full {
  display: block;
  height: 100%;
  width: 100%;
}
</style>
