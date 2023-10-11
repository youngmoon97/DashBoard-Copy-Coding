<!--WindyComponent.vue-->
<template>
  <div class="vertical" id="windy_com">
    <iframe
      type="text/html"
      ref="ifrmWindy"
      id="ifrmWindy"
      src="@/../static/windy/windy.html"
      @load="windyLoad"
      class="is-fullscreen"
    />
  </div>
</template>

<script setup>
/* eslint-disable */
import { onMounted, ref, defineProps } from "vue";

// const ifrmWindy = ref(null);
// const option = {
//   key: "lKfjbLiTkkZJN8NVR9uRD7aAjrMgBgKi",
//   verbose: false,
//   lat: 34.6,
//   lon: 128.9,
//   zoom: 9,
// };

// const mapData = {
//   2486: {
//     heading: 215,
//     sail: "2486",
//     track: [
//       [34.6, 128.9],
//       [34.3, 128.8],
//       [34.2, 128.7],
//     ],
//   },
// };
// const getChild = () => {
//   let frame = ifrmWindy.value;
//   return frame.contentWindow || frame.contentDocument;
// };

// const prsMapData = (val) => {
//   if (this.isLoad)
// };

// onMounted(() => {
//   prsMapData();
// });
</script>

<style>
iframe {
  height: 100%;
  width: 100%;
  resize: vertical;
}
.vertical {
  height: 100%;
  width: 100%;
  display: flex;
}
.v-input__control .v-label {
  color: white;
}
#p {
  color: #fafafa;
}
</style>
