<template>
  <div class="cart-page">
    <h2>Carrinho de Compras</h2>

    <div v-if="cart.length > 0" class="cart-table-container">
      <table class="cart-table">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Total</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cart" :key="item.id">
            <td class="cart-item-name">
              <img :src="item.image" alt="Produto" class="cart-item-image" />
              {{ item.name }}
            </td>
            <td class="cart-item-price">R$ {{ item.price.toFixed(2) }}</td>
            <td class="cart-item-quantity">
              <button @click="updateQuantity(index, 'decrease')">-</button>
              <span>{{ item.quantity }}</span>
              <button @click="updateQuantity(index, 'increase')">+</button>
            </td>
            <td class="cart-item-total">R$ {{ (item.price * item.quantity).toFixed(2) }}</td>
            <td class="cart-item-remove">
              <button @click="removerProduto(item.id)">Remover</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="cart-summary">
        <p><strong>Total: </strong> R$ {{ total }}</p>
        <router-link to="/successPage" @click="finalizarCompra" class="checkout-button">Finalizar Compra</router-link>
      </div>
    </div>

    <div v-else>
      <p>Seu carrinho está vazio.</p>
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
    removerProduto(idProduct) {
      const novoCarrinho = this.cart.filter(item => item.id !== idProduct);
      this.cart = novoCarrinho;
      localStorage.setItem('cart', JSON.stringify(novoCarrinho));
    },
    finalizarCompra() {
      localStorage.removeItem('cart');
      this.$router.push('/successPage');
    }
  },
};
</script>

<style scoped>
.cart-page {
  padding: 2rem;
  text-align: center;
}

.cart-table-container {
  width: 100%;
  max-width: 1200px;
  margin-top: 2rem;
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.cart-table th,
.cart-table td {
  padding: 1rem;
  text-align: center;
  border: 1px solid #ddd;
}

.cart-table th {
  background-color: #ff6347;
  color: white;
  font-size: 1.2rem;
}

.cart-item-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
}

.cart-item-quantity button {
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  cursor: pointer;
}

.cart-item-quantity span {
  font-size: 1rem;
  margin: 0 10px;
}

.cart-summary {
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
}

.checkout-button {
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

.cart-item-remove button {
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  cursor: pointer;
}

.cart-item-remove button:hover {
  background-color: #c0392b;
}
</style>
