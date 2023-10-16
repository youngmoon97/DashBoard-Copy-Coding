<!--WindyComponent.vue-->
<template>
  <div class="vertical" id="windy_com">
    <iframe
      type="text/html"
      ref="ifrmWindy"
      id="ifrmWindy"
      src="/windy.html"
      @load="windyLoad"
      class="is-fullscreen"
    />
  </div>
</template>

<script setup></script>

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
