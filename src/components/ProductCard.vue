<template>
    <div class="product-card">
      <img :src="product.image" alt="Produto" class="product-image" />
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">R$ {{ product.price }}</p>
      <button 
        @click="addToCart" 
        class="add-to-cart-btn"
        :class="{ 'added': addedToCart }"
      >
        {{ addedToCart ? 'Adicionado!' : 'Adicionar ao Carrinho' }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: Object,
    },
    data() {
      return {
        addedToCart: false,
      };
    },
    methods: {
      addToCart() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const itemIndex = cart.findIndex((item) => item.name === this.product.name);
        if (itemIndex !== -1) {
          cart[itemIndex].quantity += 1; // Se o item já estiver no carrinho, aumenta a quantidade
        } else {
          cart.push({ ...this.product, quantity: 1 }); // Caso contrário, adiciona o item ao carrinho
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        
        // Adiciona a classe para animação
        this.addedToCart = true;
  
        // Reseta o estado após 2 segundos
        setTimeout(() => {
          this.addedToCart = false;
        }, 2000); // A animação dura 2 segundos
      },
    },
  };
  </script>
  
  <style scoped>
  .add-to-cart-btn {
    background-color: #ff6347;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .add-to-cart-btn:hover {
    background-color: #f4a261;
  }
  
  .add-to-cart-btn.added {
    background-color: #2ecc71; /* Verde para indicar que o item foi adicionado */
    color: white;
    font-weight: bold;
  }
  
  .add-to-cart-btn.added:hover {
    background-color: #27ae60;
  }
  </style>
  