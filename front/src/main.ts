import { createApp } from "vue";
import { VueQueryPlugin } from "vue-query";
import App from "./App.vue";
import router from "./router";

const queryConfig = {
    retry: 0,
    refetchOnWindowFocus: false,
    staleTime: 10000,
    cacheTime: 300000,
};

const app = createApp(App);

app.use(VueQueryPlugin);

app.use(router);

app.mount("#app");
