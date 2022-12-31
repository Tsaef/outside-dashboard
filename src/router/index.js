import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login";
import Homepage from "@/views/Homepage";
import Dashboard from "@/views/Dashboard";
import Temp from "@/views/Temp";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    component: Homepage,
    children: [
      {
        path: '/',
        redirect: { name: 'Dashboard'}
      },
      {
        path: "/dashboard",
        component: Dashboard,
        name: "Dashboard"
      },
      {
        path: "/quests",
        component: Temp,
        name: "questsCreator"
      },
      {
        path: "/settings",
        component: Temp,
        name: "Settings"
      },
      {
        path: "/subscribe",
        component: Temp,
        name: "subscription"
      },
    ]
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
