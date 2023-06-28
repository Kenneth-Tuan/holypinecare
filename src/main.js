import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import { createWebHistory, createRouter } from "vue-router";

import "./styles/base.scss";
import BaseLayout from "./layout/BaseLayout.vue";
import About from "./views/About/Index.vue";
import Main from "./views/Main/Index.vue";
import Testimony from "./views/Testimony/Index.vue";
import Article from "./views/Article/Index.vue";

const routes = [
  {
    path: "/",
    redirect: { name: "Main" },
    component: BaseLayout,
    children: [
      { path: "main", name: "Main", component: Main },
      { path: "about", name: "About", component: About },
      { path: "testimony/:id", name: "Testimony", component: Testimony },
      { path: "article/:id", name: "Article", component: Article },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

const app = createApp(App);

app.use(Antd).use(router).mount("#holyPineCareApp");
