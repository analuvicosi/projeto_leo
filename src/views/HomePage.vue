<template>
    <div class="home-page">
      <h1 class="title">Bem-vindo à nossa loja deliciosa!</h1>
      <p class="subtitle">Explore nossos produtos irresistíveis e doces tentadores!</p>
      <CarouselComponent /> <!-- Componente do Carrossel com imagens de produtos -->
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
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  }
  
  .title {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    color: #333;
    font-weight: bold;
  }
  
  .subtitle {
    font-size: 1.4rem;
    margin-bottom: 2rem;
    color: #666;
  }
  
  .carousel-container {
    max-width: 1200px;
    width: 100%;
    margin-top: 2rem;
    padding: 0 20px;
  }
  </style>
  