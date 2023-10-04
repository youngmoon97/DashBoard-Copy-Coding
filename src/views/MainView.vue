<template>
  <v-layout>
    <v-app-bar :elevation="5" color="#023" absolute>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-app-bar-title>DSME SEA TRIAL DATA CENTER</v-app-bar-title>

      <div class="righttop" style="display: flex; text-align: center">
        <span class="text" style="vertical-align: middle">목</span>
        <div>
          <v-btn icon="mdi-weather-sunny" class="ms-2"></v-btn>
          <p>9/14</p>
        </div>
        <span class="text" style="vertical-align: middle">금</span>
        <div>
          <v-btn icon="mdi-weather-partly-cloudy" class="ms-2"></v-btn>
          <p>9/15</p>
        </div>
        <span class="text" style="vertical-align: middle">토</span>
        <div>
          <v-btn icon="mdi-weather-pouring" class="ms-2"></v-btn>
          <p>9/16</p>
        </div>
        <v-spacer></v-spacer>
        <div class="accout">
          <span style="vertical-align: middle">조영문</span>
          <v-btn icon="mdi-account" class="ms-2"></v-btn>
        </div>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      app
      clipped
      expand-on-hover
      v-model="drawer"
      class="master-main__sidebar"
      :width="60"
    >
      <v-list density="compact" nav>
        <v-list-item link v-for="menu in menuitems" :key="menu.name">
          <v-list-item-media class="mr-2">
            <v-icon>
              {{ menu.name }}
            </v-icon>
          </v-list-item-media>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <dashboard> </dashboard>
      <GridLayout
        v-model:layout="layout"
        :row-height="30"
        :vertical-compact="false"
      >
        <template #item="{ item }">
          <template v-if="item.i == 0"> <!--% echart1--> </template>
          <template v-if="item.i == 1"> <!--bar echart--></template>
          <template v-if="item.i == 2">
            <WindyComponent />
          </template>
          <template v-if="item.i == 3"> <!--pie+boat echart--></template>
          <template v-if="item.i == 4"> <!--pie echart--></template>
          <template v-if="item.i == 5"> <!--table--></template>
          <!-- <span class="text">{{ item.i }}</span> -->
        </template>
      </GridLayout>
    </v-main>
  </v-layout>
</template>

<script setup>
import dashboard from "@/components/DashBoardComponent.vue";
import WindyComponent from "@/components/WindyComponent.vue";

import { onMounted, reactive } from "vue";

let drawer = true;
console.log(drawer);

const menuitems = [
  {
    name: "mdi-monitor-dashboard",
    path: "/",
  },
  {
    name: "mdi-database-search",
    path: "/second",
  },
  {
    name: "mdi-chart-box-outline",
    path: "/third",
  },
  {
    name: "mdi-cogs",
    path: "/forth",
  },
];
const layout = reactive([
  { x: 0, y: 0, w: 5, h: 7, i: 0, static: false, mode: "chart" },
  { x: 5, y: 0, w: 5, h: 7, i: 1, static: false, mode: "windy" },
  { x: 0, y: 5, w: 5, h: 14, i: 2, static: false },
  { x: 5, y: 5, w: 5, h: 7, i: 3, static: false },
  { x: 5, y: 10, w: 2, h: 7, i: 4, static: false },
  { x: 7, y: 10, w: 3, h: 7, i: 5, static: false },
]);

onMounted(() => {
  drawer = false;
});
</script>

<style scoped>
.vgl-layout {
  background-color: #eee;
}

:deep(.vgl-item:not(.vgl-item--placeholder)) {
  background-color: #ccc;
  border: 1px solid black;
}

:deep(.vgl-item--resizing) {
  opacity: 90%;
}

:deep(.vgl-item--static) {
  background-color: #cce;
}
.text {
  margin-top: 25px;
}
.weather {
  text-align: center;
}
.ms-2 {
  margin-right: 6px;
}
.accout {
  margin-top: 14px;
}
</style>
