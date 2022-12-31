import { createApp } from "vue";
import App from "./App.vue";

//Tailwind css
import "./main.css";

//v-calendar
import '../node_modules/v-calendar/dist/style.css';
import VCalendar from 'v-calendar';

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
app.use(VCalendar, {});
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount("#app");
