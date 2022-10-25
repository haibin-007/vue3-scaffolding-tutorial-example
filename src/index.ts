interface Test {
  a: number;
  b: string;
}

const test: Test = {
  a: 111,
  b: "111",
};

console.log(test);

import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);
app.mount("#app");
