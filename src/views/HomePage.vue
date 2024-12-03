<template>
  <div class="home-page">
    <!-- Seção Hero -->
    <header class="hero">
      <h1 class="title">Sabores que Encantam</h1>
      <p class="subtitle">Experimente a verdadeira delícia em cada mordida!</p>
      <button class="cta-button" @click="goToMenu">Veja o Menu</button>
    </header>

    <!-- Seção Produtos em Destaque -->
    <section class="featured-products">
      <h2 class="section-title">Produtos em Destaque</h2>
      <div class="carousel-container">
        <CarouselComponent />
      </div>
    </section>

    <!-- Seção Benefícios -->
    <section class="benefits">
      <h2 class="section-title">Por que Comprar Conosco?</h2>
      <div class="benefit-item">
        <ion-icon name="fast-food-outline" size="large"></ion-icon>
        <h3>Produtos Frescos</h3>
        <p>Comida feita com os melhores ingredientes, sempre fresquinho.</p>
      </div>
      <div class="benefit-item">
        <ion-icon name="time-outline" size="large"></ion-icon>
        <h3>Entrega Rápida</h3>
        <p>Receba suas delícias no conforto da sua casa em minutos.</p>
      </div>
      <div class="benefit-item">
        <ion-icon name="pricetag-outline" size="large"></ion-icon>
        <h3>Preços Justos</h3>
        <p>Qualidade incrível por preços que cabem no seu bolso.</p>
      </div>
    </section>

    <!-- Seção Depoimentos -->
    <section class="testimonials">
      <h2 class="section-title">O que Nossos Clientes Estão Dizendo</h2>
      <div class="testimonial">
        <p>"A comida chegou super rápido e estava deliciosa! Definitivamente comprarei de novo!"</p>
        <span>- João Silva</span>
      </div>
      <div class="testimonial">
        <p>"Simplesmente incrível! Produtos frescos e com sabor de casa." </p>
        <span>- Maria Oliveira</span>
      </div>
    </section>

    <!-- Seção Sobre a Loja -->
    <section class="store-info">
      <h2 class="section-title">Sobre Nós</h2>
      <p>Na nossa loja, você encontra as melhores delícias, desde pratos caseiros até sobremesas irresistíveis. Todos feitos com ingredientes selecionados e carinho, para que você tenha a melhor experiência gastronômica.</p>
      <p>Aproveite nossas promoções exclusivas e descubra novos sabores hoje mesmo!</p>
    </section>
  </div>
</template>

<script>
import CarouselComponent from '@/components/CarouselComponent.vue';

export default {
  components: {
    CarouselComponent
  },
  methods: {
    goToMenu() {
      this.$router.push('/products');
    }
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
  background-color: #FF6347; /* Fundo quente e apetitoso */
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.title {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.subtitle {
  font-size: 1.6rem;
  margin-bottom: 2rem;
  font-weight: 300;
}

.cta-button {
  padding: 1rem 2rem;
  background-color: #FFF;
  color: #FF6347;
  border: none;
  border-radius: 50px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #FF4500;
  color: white;
}

.section-title {
  font-size: 2.5rem;
  margin: 3rem 0 1rem;
  font-weight: 600;
  color: #333;
}

.featured-products, .store-info, .benefits, .testimonials {
  width: 90%;
  max-width: 1200px;
  margin-top: 3rem;
}

.carousel-container {
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.store-info p {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

/* Estilo para a seção de Benefícios */
.benefits {
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  margin-top: 3rem;
}

.benefit-item {
  text-align: center;
  max-width: 300px;
}

.benefit-item h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-top: 1rem;
}

.benefit-item p {
  font-size: 1rem;
  color: #555;
  margin-top: 0.5rem;
}

/* Depoimentos */
.testimonials {
  margin-top: 3rem;
  font-size: 1.2rem;
}

.testimonial {
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
}

.testimonial span {
  display: block;
  font-size: 1rem;
  color: #888;
  margin-top: 0.5rem;
}
</style>
