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
            <p class="developer-role">{{ member.role }}</p>
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
        { name: 'Ana Luiza', role: 'Desenvolvedora Frontend' },
        { name: 'Edson Mainarte', role: 'Desenvolvedor Backend' },
        { name: 'Giovana', role: 'Designer de Interface' },
        { name: 'Leonardo', role: 'Desenvolvedor Fullstack' },
        { name: 'Vitor Duvilierz', role: 'Especialista em Banco de Dados' },
      ]
    };
  }
};
</script>

<style scoped>
.about-us-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background-color: #f8f9fa;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title {
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
}

.goal-section {
  background-color: #fff;
  width: 100%;
  max-width: 1100px;
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
}

.goal-title {
  font-size: 2rem;
  color: #333;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.goal-text {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 1rem;
}

.developers-section {
  width: 100%;
  max-width: 1200px;
  margin-bottom: 4rem;
  text-align: center;
}

.developers-title {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;
  text-transform: uppercase;
}

.developer-cards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
}

.developer-card {
  background-color: #fff;
  padding: 2rem;
  width: 220px;
  border-radius: 10px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.developer-card:hover {
  transform: translateY(-10px);
}

.developer-info {
  text-align: center;
}

.developer-name {
  font-size: 1.4rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
}

.developer-role {
  font-size: 1.1rem;
  color: #666;
}
</style>
