import { createApp } from "vue";
import "./assets/styles/style.scss";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "primeicons/primeicons.css";

// components
import Profile from "./components/Profile.vue";
import Badge from "./components/Badge.vue";
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";

//primevue components
import Button from "primevue/button";

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

//primevue components
app.component("Button", Button);

app.mount("#app");
