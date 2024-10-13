import { createApp } from "vue";
import "./assets/styles/style.scss";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

// components
import Profile from "./components/Profile.vue";
import Badge from "./components/Badge.vue";
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

// components
app.component("Profile", Profile);
app.component("Badge", Badge);
app.component("Experience", Experience);
app.component("Projects", Projects);
app.component("Footer", Footer);

app.mount("#app");
