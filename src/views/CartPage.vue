<template>
  <div class="cart-page">
    <h2>Carrinho de Compras</h2>
    <div v-if="cart.length > 0" class="cart-items">
      <div v-for="(item, index) in cart" :key="index" class="cart-item">
        <img :src="item.image" alt="Produto" class="cart-item-image" />
        <div class="cart-item-details">
          <p class="cart-item-name">{{ item.name }}</p>
          <p class="cart-item-price">R$ {{ item.price }}</p>
          <div class="cart-item-quantity">
            <button @click="updateQuantity(index, 'decrease')">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="updateQuantity(index, 'increase')">+</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Seu carrinho está vazio.</p>
    </div>
    <div v-if="cart.length > 0" class="cart-total">
      <p><strong>Total:</strong> R$ {{ total }}</p>
      <router-link to="/successPage" class="checkout-button">Finalizar Compra</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: JSON.parse(localStorage.getItem("cart")) || [],
    };
  },
  computed: {
    total() {
      return this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    },
  },
  methods: {
    updateQuantity(index, action) {
      if (action === 'increase') {
        this.cart[index].quantity += 1;
      } else if (action === 'decrease' && this.cart[index].quantity > 1) {
        this.cart[index].quantity -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
  },
};
</script>

<style scoped>
.cart-page {
  padding: 2rem;
  text-align: center;
}

.cart-items {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 600px;
  justify-content: space-between;
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.cart-item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

.cart-item-details {
  flex-grow: 1;
  margin-left: 1rem;
}

.cart-item-name {
  font-size: 1.1rem;
  font-weight: bold;
}

.cart-item-price {
  color: #f4a261;
}

.cart-item-quantity {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.cart-item-quantity button {
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 0.5rem;
}

.cart-item-quantity span {
  font-size: 1rem;
}

.cart-total {
  margin-top: 2rem;
  font-size: 1.2rem;
}

.checkout-button {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #ff6347;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 1rem;
}

.checkout-button:hover {
  background-color: #f4a261;
}
</style>
