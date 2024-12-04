<template>
  <div class="products-page">
    <h2>Nossos Produtos</h2>
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
          description: "Bolo de massa de chocolate, recheio de trufado de chocolate ao leite Dois Frades®, cobertura de trufado meio amargo, raspas de chocolate ao leite Dois Frades® e cerejas (decorativas).",
          price: 48.0,
          image: "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112651/20412_fotos_22-magia_bolo_inteiro_540x400px22.png",
        },
        {
          id: 2,
          name: "Bolo de Abacaxi com leite em pó.",
          description: "Bolo de massa branca, recheios de doce de leite com abacaxi e brigadeiro de leite em pó, cobertura de marshmallow, abacaxi em calda, coco cozido e cerejas decorativas.",
          price: 48.0,
          image: "https://suafranquia.sodiedoces.com.br/images/bolos/bolo.png",
        },
        {
          id: 3,
          name: "Bolo de Churros",
          description: "Bolo de massa branca, recheios de Moça® churros e mousse de canela, cobertura de mousse branca, Moça® churros e crocante de canela.",
          price: 48.0,
          image: "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/25112445/bolo_de_churros_inteiro_615x500px-e1638282045648.png",
        },
        {
          id: 4,
          name: "Bolo de Pistache",
          description: "Bolo de massa branca, recheios de trufado e aerado de pistache, cobertura de trufado de pistache e pistache granulado.",
          price: 69.0,
          image: "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164325/163_pistache_inteiro_540x400px.png",
        },
        {
          id: 5,
          name: "Leite ninho com nutella",
          description: "Bolo de massa de chocolate e massa branca, recheios de trufado com NUTELLA® e brigadeiro de leite em pó, cobertura de mousse de leite em pó, finalizado com brigadeiros de leite em pó e NUTELLA®.",
          price: 48.0,
          image: "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/08/09094934/20412_fotos_bolo_inteiro_novo_site_540x400px_delicia-de-leite.png",
        },
        {
          id: 6,
          name: "Bolo de nozes",
          description: "Bolo de massa branca, recheio de creme gelado e doce de leite com nozes, cobertura de marshmallow, nozes e cerejas (decorativas).",
          price: 69.0,
          image: "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25112633/20412_fotos_62-nozes_bolo_inteiro_540x400px62.png",
        },
        {
          id: 7,
          name: "Bolo de frutas vermelhas",
          description: "Bolo de massa branca, recheio de trufas brancas com geleia de frutas vermelhas e mousse branca com geleia de frutas vermelhas, cobertura de mousse branca, raspas de chocolate branco, geleia de frutas vermelhas, morangos e cerejas (decorativas).",
          price: 48.90,
          image: "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25112629/20412_fotos_104-frutas-vermelhas_bolo_inteiro_540x400px100.png"
        },
        {
          id: 7,
          name: "Bolo de limão siciliano",
          description: "Bolo de massa branca, recheios de ganache de limão siciliano e creme de limão siciliano, cobertura de merengue, fatias e raspas de limão siciliano.",
          price: 69.0,
          image: "https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/10115309/25972_fotos-sismaker_bolos_site_540x400px_INTEIRO-Limao-Siciliano.png"
        },
        {
          id: 7,
          name: "Bolo de salada de frutas",
          description: "Bolo de massa branca integral, recheio de mousse branca zero adição de açúcares com frutas, cobertura de mousse branca zero adição de açúcares e frutas.",
          price: 48.90,
          image: "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01103302/75-Salada-de-Frutas_INTEIRO-540x400px.png"
        }
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
