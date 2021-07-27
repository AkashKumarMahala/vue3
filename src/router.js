
import { createRouter, createWebHistory } from "vue-router";
import DcHeros from './Pages/DcHeros.vue';
import Calender from './Pages/Calender.vue';
import Carousel from './Pages/Carousel.vue';
import Markdown from './Pages/Markdown.vue';
import Shoppe from './Pages/Shoppe.vue'


const routes=[
    { path:"/dc-heros", component: DcHeros },
    { path:"/calender", component: Calender },
    { path:"/slider-carousel", component: Carousel },
    { path:"/markdown", component: Markdown },
    { path:'/shoppe', component: Shoppe}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
