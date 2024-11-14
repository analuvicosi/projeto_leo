<template>
    <div class="product-detail" v-if="product">
      <div class="product-header">
        <h2 class="product-name">{{ product.name }}</h2>
        <p class="product-price">R$ {{ product.price.toFixed(2) }}</p>
      </div>
  
      <div class="product-main">
        <div class="product-image-container">
          <img :src="product.image" alt="Imagem do Produto" class="product-image" />
        </div>
  
        <div class="product-info">
          <p class="product-description">{{ product.description }}</p>
  
          <button
            @click="addToCart"
            class="add-to-cart-btn"
            :class="{ 'added': addedToCart }"
          >
            {{ addedToCart ? 'Adicionado!' : 'Adicionar ao Carrinho' }}
          </button>
        </div>
      </div>
    </div>
  
    <div v-else>
      <p>Produto não encontrado.</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'],
    data() {
      return {
        product: null,
        addedToCart: false, // Armazena o estado do botão "Adicionar ao Carrinho"
      };
    },
    created() {
      this.fetchProductDetails();
    },
    methods: {
      fetchProductDetails() {
        const products = JSON.parse(localStorage.getItem('products')) || [];
        this.product = products.find((item) => item.id === parseInt(this.id));
      },
      addToCart() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const itemIndex = cart.findIndex((item) => item.name === this.product.name);
        if (itemIndex !== -1) {
          cart[itemIndex].quantity += 1;
        } else {
          cart.push({ ...this.product, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
  
        this.addedToCart = true;
        setTimeout(() => {
          this.addedToCart = false;
        }, 2000); // Reseta após 2 segundos
      },
    },
  };
  </script>
  
  <style scoped>
  .product-detail {
    padding: 3rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f9f9f9;
  }
  
  .product-header {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .product-name {
    font-size: 2.5rem;
    font-weight: bold;
    color: #333;
  }
  
  .product-price {
    font-size: 1.8rem;
    color: #FF6347;
    font-weight: bold;
  }
  
  .product-main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
  
  .product-image-container {
    flex: 1;
    max-width: 400px;
  }
  
  .product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
  
  .product-info {
    flex: 1;
    max-width: 500px;
    text-align: left;
  }
  
  .product-description {
    font-size: 1.2rem;
    color: #666;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
  
  .add-to-cart-btn {
    background-color: #FF6347;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1.1rem;
    width: 100%;
  }
  
  .add-to-cart-btn:hover {
    background-color: #f4a261;
  }
  
  .add-to-cart-btn.added {
    background-color: #2ecc71; /* Verde quando adicionado */
    color: white;
    font-weight: bold;
  }
  
  .add-to-cart-btn.added:hover {
    background-color: #27ae60;
  }
  
  @media (max-width: 768px) {
    .product-main {
      flex-direction: column;
    }
  
    .product-image-container {
      max-width: 300px;
    }
  
    .product-info {
      max-width: 100%;
    }
  }
  </style>
  