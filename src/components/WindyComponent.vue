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
    <!-- <div class="checkboxes">
      <p>{{ selected }}</p>

      <v-checkbox
        hide-details
        color="white"
        v-for="item in boats.result"
        :key="item.sail"
        v-model="selected"
        :label="item.sail"
        :value="item.sail"
      ></v-checkbox>
    </div>
    <v-btn @click="sendMessage"> Button </v-btn> -->
  </div>
</template>

<script setup>
/* eslint-disable */
import { onMounted, ref, defineProps } from "vue";
import boats from "/static/windy/boats.json";
console.log(boats.result);
defineProps({
  options: Object,
});

const selected = ref([]);
const ifrmWindy = ref(null);

const windyLoad = () => {
  if (getChild()) {
    getChild().init();
  }
};
const getChild = () => {
  let frame = ifrmWindy.value;
  return frame.contentWindow || frame.contentDocument;
};

const sendMessage = () => {
  // console.log(selected.value);
  getChild().getSelected(selected.value);
};

onMounted(() => {});
</script>

<style>
/* :root {
  background-color: black;
  --title-color: #fafafa;
  --content-color: #6a6e9e;
} */
iframe {
  height: 100%;
  width: 100%;
  resize: vertical;
}
.vertical {
  display: flex;
}
.checkboxes {
  width: 20%;
  height: 80vh;
}
.v-input__control .v-label {
  color: white;
}
#p {
  color: #fafafa;
}
</style>
