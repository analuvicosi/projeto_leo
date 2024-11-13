<template>
  <div class="about-us-page">
    <h2 class="page-title">Sobre Nós</h2>
    <p class="description">Conheça nossa equipe apaixonada por criar delícias!</p>
    <div class="team-members">
      <div class="member" v-for="(member, index) in team" :key="index">
        <img :src="member.image" alt="Foto do membro" class="member-image" />
        <h3 class="member-name">{{ member.name }}</h3>
        <p class="member-info">Idade: {{ member.age }}</p>
        <p class="member-info">Hobby: {{ member.hobby }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: 'Maria', age: 25, hobby: 'Cozinhar', image: 'https://via.placeholder.com/150/FF6347/ffffff?text=Maria' },
        { name: 'João', age: 30, hobby: 'Fotografia', image: 'https://via.placeholder.com/150/F4A300/ffffff?text=João' },
        { name: 'Ana', age: 28, hobby: 'Desenhar', image: 'https://via.placeholder.com/150/98C8E7/ffffff?text=Ana' },
        { name: 'Carlos', age: 35, hobby: 'Jogar futebol', image: 'https://via.placeholder.com/150/98C8E7/ffffff?text=Carlos' },
        { name: 'Lucia', age: 27, hobby: 'Viajar', image: 'https://via.placeholder.com/150/FF6347/ffffff?text=Lucia' },
      ]
    };
  }
};
</script>

<style scoped>
.about-us-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 4rem 2rem;
  margin-top: 80px;
}

.page-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  font-weight: bold;
}

.description {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  color: #666;
}

.team-members {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
}

.member {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.member-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.member-name {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.member-info {
  font-size: 1rem;
  color: #666;
}
</style>
