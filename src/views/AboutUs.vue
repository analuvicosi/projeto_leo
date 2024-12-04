<template>
  <div class="about-us-page">
    <div class="header">
      <h2 class="page-title">Sobre Nós</h2>
      <p class="description">Somos uma equipe apaixonada por tecnologia e inovação, com o objetivo de transformar a experiência de compra online.</p>
    </div>

    <!-- Seção de objetivo -->
    <div class="goal-section">
      <div class="goal-content">
        <h3 class="goal-title">Nosso Objetivo</h3>
        <p class="goal-text">Nosso principal objetivo com este e-commerce é oferecer uma experiência de compra intuitiva e acessível a todos os usuários. Queremos proporcionar aos nossos clientes uma plataforma moderna, rápida e confiável para realizar suas compras online.</p>
      </div>
    </div>

    <!-- Seção de Desenvolvedores -->
    <div class="developers-section">
      <h3 class="developers-title">Conheça a Equipe</h3>
      <div class="developer-cards">
        <div class="developer-card" v-for="(member, index) in team" :key="index">
          <div class="developer-info">
            <h4 class="developer-name">{{ member.name }}</h4>
            <p class="developer-age">Idade: {{ member.age }} anos</p>
            <p class="developer-hobby">Hobby: {{ member.hobby }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: 'Ana Luiza', age: 18, hobby: 'Leitura' },
        { name: 'Edson Mainarte', age: 18, hobby: 'Programação' },
        { name: 'Giovana Kesives', age: 17, hobby: 'Passear' },
        { name: 'Leonardo Carlos', age: 19, hobby: 'Jogar Videogame' },
        { name: 'Vitor Anacleto', age: 18, hobby: 'Comer' },
      ]
    };
  }
};
</script>

<style scoped>
/* Fonte moderna e mais tecnológica */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Roboto:wght@500;700&display=swap');

.about-us-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #f8f9fa, #e0e0e0);
  color: #333;
  font-family: 'Poppins', sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 4rem;
}

.page-title {
  font-size: 3.2rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.description {
  font-size: 1.2rem;
  font-weight: 400;
  color: #555;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.6;
  letter-spacing: 0.5px;
}

/* Seção de Objetivo */
.goal-section {
  background-color: #ffffff;
  width: 100%;
  max-width: 1100px;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 4rem;
}

.goal-title {
  font-size: 2.2rem;
  color: #333;
  font-weight: 600;
  margin-bottom: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.goal-text {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  font-weight: 400;
}

/* Seção de Desenvolvedores */
.developers-section {
  width: 100%;
  max-width: 1200px;
  margin-bottom: 4rem;
  text-align: center;
}

.developers-title {
  font-size: 2.4rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.developer-cards {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 3rem;
}

.developer-card {
  background-color: #ffffff;
  padding: 2.5rem;
  width: 250px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  overflow: hidden;
}

.developer-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.developer-info {
  text-align: center;
}

.developer-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 0.6rem;
  text-transform: uppercase;
}

.developer-age, .developer-hobby {
  font-size: 1.1rem;
  color: #777;
  font-weight: 500;
  margin-top: 0.4rem;
}

/* Responsividade */
@media (max-width: 768px) {
  .goal-section, .developer-cards {
    padding: 2rem;
  }
  
  .developer-card {
    width: 200px;
  }
  
  .page-title {
    font-size: 2.5rem;
  }

  .developers-title {
    font-size: 2rem;
  }
}
</style>
