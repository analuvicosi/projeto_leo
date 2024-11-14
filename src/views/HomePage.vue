<template>
  <div class="home-page">
    <header class="hero">
      <h1 class="title">Bem-vindo à nossa loja deliciosa!</h1>
      <p class="subtitle">Explore nossos produtos irresistíveis e doces tentadores!</p>
    </header>

    <section class="featured-products">
      <h2 class="section-title">Produtos em Destaque</h2>
      <CarouselComponent />
    </section>

    <section class="store-info">
      <h2 class="section-title">Sobre Nós</h2>
      <p>Na nossa loja, você encontra as melhores delícias, desde chocolates artesanais até bebidas refrescantes. Aproveite as promoções incríveis e descubra novos sabores!</p>
      <p>Oferecemos produtos frescos, qualidade garantida e entrega rápida para sua comodidade.</p>
    </section>
  </div>
</template>

<script>
import CarouselComponent from '@/components/CarouselComponent.vue';

export default {
  components: {
    CarouselComponent
  }
};
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  background-color: #f9f9f9;
}

.hero {
  background-color: #FF6347; /* Fundo em tom de vermelho/laranja */
  color: white;
  padding: 3rem 1.5rem;
  text-align: center;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.section-title {
  font-size: 2rem;
  margin: 2rem 0;
  font-weight: bold;
  color: #333;
}

.featured-products, .store-info {
  width: 90%;
  max-width: 1200px;
  margin-top: 3rem;
}

.store-info p {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
}
</style>
