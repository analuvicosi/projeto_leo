import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import AboutUs from '@/views/AboutUs.vue';
import LoginPage from '@/views/LoginPage.vue';
import ContactUs from '@/views/ContactUs.vue';
import ProductsPage from '@/views/ProductsPage.vue';
import CartPage from '@/views/CartPage.vue'; // Nova rota para o carrinho
import SuccessPage from '@/views/SuccessPage.vue'; // Nova rota para a página de sucesso

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutUs },
  { path: '/login', component: LoginPage },
  { path: '/contact', component: ContactUs },
  { path: '/products', component: ProductsPage },
  { path: '/cart', component: CartPage },
  { path: '/successPage', component: SuccessPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
