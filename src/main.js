import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";

//router
import { router } from "./router";

//Components library
import 'flowbite';

//FontAwesomeIcons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChartPie, faGear, faMedal, faRoute } from '@fortawesome/free-solid-svg-icons'
library.add(faChartPie, faGear, faMedal, faRoute);

const app = createApp(App);

app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount("#app");
