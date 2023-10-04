/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
// GridLayout
import { GridLayout, GridItem } from "grid-layout-plus";
const app = createApp(App);

registerPlugins(app);
app.component("GridLayout", GridLayout);
app.component("GridItem", GridItem);
app.mount("#app");
