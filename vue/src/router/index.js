import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/pages/app/Home.vue";
import CreateTweet from "../views/pages/app/CreateTweet.vue";
import ShowTweet from "../views/pages/app/ShowTweet.vue";
import Profile from "../views/pages/app/Profile.vue";
import People from "../views/pages/app/People.vue";
import About from "../views/pages/app/About.vue";
import Register from "../views/pages/auth/Register.vue";
import Login from "../views/pages/auth/Login.vue";

import store from "../store";
const appName = store.state.app.name;
const appLogo = store.state.app.logo;

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: { title: "Home", requireAuth: true },
    },
    {
        path: "/create-tweet",
        name: "CreateTweet",
        component: CreateTweet,
        meta: { title: "Create Tweet", requireAuth: true },
    },
    {
        path: "/show-tweet/:id",
        name: "ShowTweet",
        component: ShowTweet,
        meta: { title: "Tweet Details", requireAuth: true },
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        meta: { title: "Profile", requireAuth: true },
    },
    {
        path: "/people/:id",
        name: "People",
        component: People,
        meta: { title: "People", requireAuth: true },
    },
    {
        path: "/about",
        name: "About",
        component: About,
        meta: { title: "About", requireAuth: true },
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: { title: "Register", requireGuest: true },
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { title: "Login", requireGuest: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    /* Authentication */
    if (to.meta.requireGuest && store.state.user.token) {
        next({ name: "Home" });
    } else if (to.meta.requireAuth && !store.state.user.token) {
        next({ name: "Login" });
    } else {
        next();
    }

    /* App-Title */
    document.title = to.meta?.title ? `${to.meta.title} • ${appName}` : appName;
    /* App-Favicon */
    document.getElementById("favicon").setAttribute("href", appLogo);
});

export default router;
