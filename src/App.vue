<template>
  <div id="app">
    <!-- Navbar fixo no topo -->
    <header class="navbar">
      <div class="logo">
        <a href="/">Docie</a>
      </div>
      <ul class="menu">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">Produtos</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/cadastro">Cadastro</router-link></li>
        <li><router-link to="/contact">Contato</router-link></li>
        <li><router-link to="/about">Sobre Nós</router-link></li>
        <div class="cart-icon">
        <li><router-link to="/cart">Meu Carrinho</router-link></li>
        <span v-if="cartCount > 0" class="cart-count">{{ cartCount }}</span>
        </div>
      </ul>
      <div class="cart-icon">
        <router-link to="/cart">
          <i class="fas fa-shopping-cart"></i>
        </router-link>
      </div>
    </header>

    <!-- Conteúdo das páginas -->
    <main class="content">
      <router-view></router-view> <!-- Aqui as páginas serão renderizadas -->
    </main>

    <!-- Footer fixo na parte inferior -->
    <footer class="footer">
      <p>&copy; 2024 Docie. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    cartCount() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      return cart.reduce((acc, item) => acc + item.quantity, 0);
    },
  },
};
</script>

<style scoped>
/* Importando fontes modernas do Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Playfair+Display:wght@700&display=swap');

/* Navbar fixo no topo */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #FF6347; /* Cor do navbar */
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 2rem;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  height: 70px; /* Aumentando a altura para melhorar a legibilidade */
  font-family: 'Poppins', sans-serif;
}

.navbar .logo a {
  font-size: 2rem;
  font-weight: 600;
  text-decoration: none;
  color: white;
  font-family: 'Playfair Display', serif; /* Usando fonte mais elegante para o logo */
}

.navbar .menu {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.navbar .menu li {
  font-size: 1.2rem;
  font-weight: 400;
}

.navbar .menu li a {
  text-decoration: none;
  color: white;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.navbar .menu li a:hover {
  background-color: #f4a261;
}

/* Estilo geral para conteúdo das páginas */
.content {
  padding: 2rem;
  padding-top: 80px; /* Ajuste para que o conteúdo não fique abaixo do navbar */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: calc(100vh - 70px); /* Ajustando para o novo tamanho da navbar */
  font-family: 'Poppins', sans-serif;
}

/* Ajuste para páginas específicas (Produtos, Contato, etc.) */
.products-page,
.contact-page,
.about-page {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Poppins', sans-serif;
}

/* Estilo para o footer */
.footer {
  background-color: #FF6347;
  color: white;
  text-align: center;
  padding: 1rem;
  position: relative;
  width: 100%;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 2rem; /* Garantir que o footer não sobreponha o conteúdo */
}

/* Estilo geral para o body */
body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
}

html {
  overflow-x: hidden;
}

/* Estilo para o ícone de carrinho */
.cart-icon {
  position: relative;
}

.cart-icon i {
  font-size: 2rem;
  color: #ff6347;
  cursor: pointer;
}

.cart-icon i:hover {
  color: #f4a261;
}

.cart-count {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: white;
  color: black;
  border-radius: 50%;
  padding: 0.3rem 0.5rem;
  font-size: 1.1rem;
  font-weight: bold;
}
</style>
