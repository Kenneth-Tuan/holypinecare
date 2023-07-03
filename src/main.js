import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import { createWebHashHistory, createRouter } from "vue-router";

import "./styles/base.scss";
import BaseLayout from "./layout/BaseLayout.vue";
import Introduction from "./views/About/Introduction.vue";
import ContactUs from "./views/About/ContactUs.vue";
import Main from "./views/Main/Index.vue";
import Testimony from "./views/Testimony/Index.vue";
import Article from "./views/Article/Index.vue";
import Seminar from "./views/Seminar/Index.vue";

const routes = [
  {
    path: "/",
    redirect: { name: "Main" },
    component: BaseLayout,
    children: [
      { path: "main", name: "Main", component: Main },
      {
        path: "about",
        redirect: { name: "Introduction" },
        children: [
          { path: "contact-us", name: "ContactUs", component: ContactUs },
          {
            path: "introduction",
            name: "Introduction",
            component: Introduction,
          },
        ],
      },
      { path: "testimony/:id", name: "Testimony", component: Testimony },
      { path: "article/:id", name: "Article", component: Article },
      { path: "seminar/:id", name: "Seminar", component: Seminar },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

const app = createApp(App);

app.use(Antd).use(router).mount("#holyPineCareApp");
