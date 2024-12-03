import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import AboutUs from '@/views/AboutUs.vue';
import LoginPage from '@/views/LoginPage.vue';
import ContactUs from '@/views/ContactUs.vue';
import ProductsPage from '@/views/ProductsPage.vue';
import ProductDetail from '@/views/ProductDetail.vue';
import CartPage from '@/views/CartPage.vue'; 
import SuccessPage from '@/views/SuccessPage.vue'; 
import CadastroPage from '@/views/CadastroPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutUs },
  { path: '/login', component: LoginPage },
  { path: '/cadastro', component: CadastroPage },
  { path: '/contact', component: ContactUs },
  { path: '/products', component: ProductsPage },
  { path: '/productDetail/:id', component: ProductDetail, props: true },
  { path: '/cart', component: CartPage },
  { path: '/successPage', component: SuccessPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
