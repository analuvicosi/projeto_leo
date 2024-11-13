import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa as rotas definidas

// Cria a instância do Vue
const app = createApp(App);

// Usa o router no Vue
app.use(router);

// Monta o aplicativo no elemento HTML com id "app"
app.mount('#app');
