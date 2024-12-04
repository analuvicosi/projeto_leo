<template>
    <div class="contact-page">
      <h2 class="title">Entre em Contato</h2>
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Nome:</label>
          <input type="text" id="name" v-model="form.name" placeholder="Seu nome" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" placeholder="Seu e-mail" required />
        </div>
        <div class="form-group">
          <label for="message">Mensagem:</label>
          <textarea id="message" v-model="form.message" placeholder="Sua mensagem" required></textarea>
        </div>
        <button type="submit" class="submit-btn">Enviar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: '',
        }
      };
    },
    methods: {
      submitForm() {
        alert("Formulário enviado com sucesso!");
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-page {
    padding: 4rem 2rem;
    text-align: center;
  }
  
  /* .title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #333;
  } */

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    margin: 0 auto;
    background-color: #fff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    text-align: left;
  }

  input {
    width: 100%;
    padding: 0.8rem;
    margin-top: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-group label {
    font-size: 1.1rem;
    color: #333;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    margin-top: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-group textarea {
    height: 150px;
    resize: vertical;
  }
  
  .submit-btn {
    background-color: #ff6347;
    color: white;
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .submit-btn:hover {
    background-color: #f4a261;
  }
  </style>
  