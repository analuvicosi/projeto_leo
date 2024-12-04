<template>
  <div class="home-page">
    <!-- Seção Hero com Carrossel de Background -->
    <header class="hero" :style="{ backgroundImage: 'url(' + currentImage + ')' }">
      <div class="overlay"></div> <!-- Camada escura para melhorar contraste -->
      <h1 class="title">Sabores que Encantam</h1>
      <p class="subtitle">Experimente a verdadeira delícia em cada mordida!</p>
      <button class="cta-button" @click="goToMenu">Veja o Menu</button>
    </header>

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

    <!-- Chamada para Ação no Final -->
    <div class="cta-footer">
      <h2>Pronto para provar o melhor da nossa cozinha?</h2>
      <button class="cta-button" @click="goToMenu">Descubra Nosso Menu</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112651/20412_fotos_22-magia_bolo_inteiro_540x400px22.png',
        'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164325/163_pistache_inteiro_540x400px.png',
        'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25112629/20412_fotos_104-frutas-vermelhas_bolo_inteiro_540x400px100.png'
      ],
      currentImageIndex: 0,
      currentImage: ''
    };
  },
  created() {
    this.currentImage = this.images[this.currentImageIndex];
    this.startCarousel();
  },
  methods: {
    goToMenu() {
      this.$router.push('/products');
    },
    startCarousel() {
      setInterval(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        this.currentImage = this.images[this.currentImageIndex];
      }, 5000); // Mudar a imagem a cada 5 segundos
    }
  }
};
</script>

<style scoped>
/* Seção Hero */
.hero {
  position: relative; /* Posiciona os elementos internos corretamente */
  width: 100%;
  height: 100vh; /* Ocupa 100% da altura da tela */
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0;
  margin: 0; /* Remover qualquer margem extra */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 0; /* Garantir que não tenha borda arredondada */
  animation: fadeIn 1s ease-in-out;
  overflow: hidden; /* Evitar que algo saia da tela */
}

/* Camada escura para melhorar o contraste entre o texto e a imagem */
.hero .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4); /* Sombra escura com transparência */
  z-index: 1; /* Coloca a sobreposição acima da imagem, mas abaixo do texto */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.title {
  position: relative;
  font-size: 4rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
  font-family: 'Playfair Display', serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  z-index: 2; /* Garante que o texto fique acima da camada de sobreposição */
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6); /* Sombra no texto para melhorar a legibilidade */
}

.subtitle {
  position: relative;
  font-size: 1.8rem;
  margin-bottom: 2.5rem;
  font-weight: 300;
  font-style: italic;
  z-index: 2; /* Garante que o texto fique acima da camada de sobreposição */
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.6); /* Sombra no texto para melhorar a legibilidade */
}

.cta-button {
  padding: 1rem 2.5rem;
  background-color: #FF8C94;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 2; /* Garante que o botão fique acima da camada de sobreposição */
}

.cta-button:hover {
  transform: scale(1.05);
  background-color: #FF6347;
  color: white;
}

.section-title {
  font-size: 2.8rem;
  margin: 4rem 0 2rem;
  font-weight: 600;
  color: #2c3e50;
}

.featured-products, .testimonials, .cta-footer {
  width: 90%;
  max-width: 1200px;
  margin-top: 4rem;
}

.testimonials {
  margin-top: 4rem;
  font-size: 1.4rem;
  color: #555;
}

.testimonial {
  background-color: #fff;
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  position: relative;
  transition: transform 0.3s ease-in-out;
}

.testimonial:hover {
  transform: translateY(-10px);
}

.testimonial span {
  display: block;
  font-size: 1.1rem;
  color: #888;
  margin-top: 0.5rem;
}

.cta-footer {
  text-align: center;
  margin-top: 4rem;
}

.cta-footer h2 {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

</style>
