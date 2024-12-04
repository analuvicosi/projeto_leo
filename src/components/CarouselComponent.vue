<!-- <template>
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
        'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112651/20412_fotos_22-magia_bolo_inteiro_540x400px22.png',
        'https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164325/163_pistache_inteiro_540x400px.png',
        'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25112629/20412_fotos_104-frutas-vermelhas_bolo_inteiro_540x400px100.png'
      ],
      slickOptions: {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,  /* Mostrar uma imagem por vez */
        slidesToScroll: 1, /* Mover uma imagem por vez */
        arrows: true, /* Setas de navegação */
        centerMode: true, /* Centralizar as imagens */
        centerPadding: '0', /* Remover o padding lateral */
        responsive: [
          {
            breakpoint: 768, /* Para telas pequenas, exibe apenas 1 imagem */
            settings: {
              slidesToShow: 1, /* Exibe 1 imagem */
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
  max-width: 100%;  /* Ocupa toda a largura disponível */
  margin-top: 2rem;
  padding: 0 10px;  /* Adiciona um pouco de padding para ajustar a aparência */
  display: block;   /* O container precisa ser bloco para o carrossel */
  overflow: hidden; /* Esconde as imagens que estão fora da área visível */
}

.carousel .slick-slide {
  display: flex;
  justify-content: center;
}

.carousel-image {
  width: 100%;       /* Faz com que cada imagem ocupe toda a largura do slide */
  border-radius: 10px;
  object-fit: cover; /* A imagem preenche o espaço sem distorcer */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Efeito de sombra */
}
</style> -->
