import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login";
import Dashboard from "@/views/Dashboard";
import Sidebar from "@/components/Sidebar";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    component: Sidebar,
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
        component: Dashboard,
        name: "questsCreator"
      },
      {
        path: "/settings",
        component: Dashboard,
        name: "Settings"
      },
      {
        path: "/subscribe",
        component: Dashboard,
        name: "subscription"
      },
    ]
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
