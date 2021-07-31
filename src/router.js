
import { createRouter, createWebHistory } from "vue-router";
import DcHeros from './Pages/DcHeros.vue';
import Calender from './Pages/Calender.vue';
import Carousel from './Pages/Carousel.vue';
import Markdown from './Pages/Markdown.vue';
import Calculator from './Pages/Calculator.vue';
import ReusableModal from './components/ReusableModal'
// import Login from './Pages/Login.vue'


const routes=[
    { path:"/dc-heros", component: DcHeros },
    { path:"/calender", component: Calender },
    { path:"/slider-carousel", component: Carousel },
    { path:"/markdown", component: Markdown },
    { path:"/calculator", component: Calculator },
    { path:"/reusable-modal", component: ReusableModal },
    // { path:'/login', component: Login}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
