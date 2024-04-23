import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/HomeView/HomeView.vue"
import CountryView from "../components/CountryView/CountryView.vue"


const routes = [
     { path: "/", name: "home view", component: HomeView },
     { path: "/countries/:name", name: "country view", component: CountryView }
]
export const router = createRouter({
     history: createWebHistory(import.meta.env.BASE_URL),
     routes
})