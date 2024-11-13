<template>
    <div class="success-page">
      <h2>Compra Realizada com Sucesso!</h2>
      <p>Obrigado pela sua compra. Volte para a home para continuar comprando.</p>
      <router-link to="/" class="back-to-home-button">Voltar para a Home</router-link>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .success-page {
    text-align: center;
    padding: 2rem;
  }
  
  .success-page h2 {
    font-size: 2rem;
    color: #2c3e50;
  }
  
  .success-page p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  
  .back-to-home-button {
    display: inline-block;
    padding: 1rem 2rem;
    background-color: #ff6347;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 2rem;
  }
  
  .back-to-home-button:hover {
    background-color: #f4a261;
  }
  </style>
  