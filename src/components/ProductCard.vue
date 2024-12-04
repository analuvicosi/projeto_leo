<template>
  <div class="product-card">
    <img :src="product.image" alt="Produto" class="product-image" />
    <h3 class="product-name">{{ product.name }}</h3>
    <p class="product-price">R$ {{ product.price }}</p>

    <router-link :to="'/productDetail/' + product.id">
      <button class="view-details-btn">Ver Detalhes</button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 250px;
  margin: 1rem;
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-10px);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.product-name {
  font-size: 1.2rem;
  font-weight: bold;
  font-family: 'Playfair Display', serif; /* Fonte mais elegante */
  text-transform: uppercase;
  margin-top: 1rem;
  text-align: center;
}

.product-price {
  color: #f4a261;
  font-size: 1.1rem;
  margin: 0.5rem 0;
}

/* Estilo do botão de "Ver Detalhes" */
.view-details-btn {
  padding: 0.8rem 1.5rem;
  background-color:  #FF6347; /* Cor de fundo verde */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
  text-align: center;
  width: 100%;
  margin-top: 1rem;
  font-weight: bold;
}

.view-details-btn:hover {
  background-color: #27ae60; /* Tom mais escuro do verde */
  transform: translateY(-2px); /* Pequeno efeito de elevação */
}

.view-details-btn:focus {
  outline: none;
}

.view-details-btn:active {
  background-color: #2ecc71; /* Cor de fundo inativa */
}
</style>
