<template>
  <div class="products-page">
    <h2>Produtos</h2>
    <div class="product-list">
      <ProductCard 
        v-for="(product, index) in products" 
        :key="index" 
        :product="product" 
      />
    </div>
  </div>
</template>

<script>
// Importando o ProductCard.vue
import ProductCard from "@/components/ProductCard.vue";

export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Bolo de Chocolate",
          description: "bolo de chocolate muito bom.",
          price: 30.0,
          image: "https://via.placeholder.com/300x200/FF6347/ffffff?text=Bolo+de+Chocolate",
        },
        {
          id: 2,
          name: "Coxinha",
          description: "coxinha muito boa.",
          price: 5.0,
          image: "https://via.placeholder.com/300x200/FF6347/ffffff?text=Coxinha",
        },
        {
          id: 3,
          name: "Refrigerante Lata",
          description: "refrigerante muito bom.",
          price: 3.0,
          image: "https://via.placeholder.com/300x200/FF6347/ffffff?text=Refrigerante+Lata",
        },
        {
          id: 4,
          name: "Pudim de Leite Condensado",
          description: "pudim muito bom.",
          price: 15.0,
          image: "https://via.placeholder.com/300x200/FF6347/ffffff?text=Pudim+de+Leite+Condensado",
        },
        {
          id: 5,
          name: "Pizza de Calabresa",
          description: "pizza de chocolate muito boa.",
          price: 40.0,
          image: "https://via.placeholder.com/300x200/FF6347/ffffff?text=Pizza+de+Calabresa",
        },
        {
          id: 6,
          name: "Bebida Gelada",
          description: "bebida gelada muito boa.",
          price: 5.0,
          image: "https://via.placeholder.com/300x200/FF6347/ffffff?text=Bebida+Gelada",
        },
      ],
    };
  },
  components: {
    ProductCard,
  },
  created() {
    localStorage.setItem('products', JSON.stringify(this.products));
  },
};
</script>

<style scoped>
.products-page {
  padding: 2rem;
  text-align: center;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

@media (max-width: 768px) {
  .product-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .product-list {
    grid-template-columns: 1fr;
  }
}
</style>
