import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
import { reveal } from "./composables/reveal";

createApp(App).directive("reveal", reveal).use(router).mount("#app");
