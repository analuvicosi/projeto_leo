<template>
  <div class="carousel">
    <slick-carousel :options="slickOptions">
      <div v-for="(image, index) in images" :key="index">
        <img :src="image" :alt="'Imagem ' + (index + 1)" class="carousel-image" />
      </div>
    </slick-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://via.placeholder.com/800x400/FF6347/ffffff?text=Del%C3%ADcia+de+Chocolate',
        'https://via.placeholder.com/800x400/F4A300/ffffff?text=Sabores+Irresist%C3%ADveis',
        'https://via.placeholder.com/800x400/98C8E7/ffffff?text=Refrigerante+Geladinho'
      ],
      slickOptions: {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, /* Ajuste para mostrar 3 imagens ao mesmo tempo */
        slidesToScroll: 1, /* Move uma imagem por vez */
        arrows: true, /* Mostra setas de navegação */
        centerMode: true, /* Centraliza as imagens */
        centerPadding: '0', /* Remove o espaçamento lateral */
        responsive: [
          {
            breakpoint: 768, /* Para telas pequenas, exibe apenas 1 imagem */
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.carousel-container {
  max-width: 1200px;
  margin-top: 2rem;
  padding: 0 20px;
}

.carousel-image {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  object-fit: cover;
}
</style>
