<template>
    <div class="cadastro-page">
      <h2>Cadastro de Usuário</h2>
      <form @submit.prevent="handleSubmit" class="cadastro-form">
        <div class="form-group">
          <label for="username">Nome de Usuário</label>
          <input type="text" v-model="username" id="username" placeholder="Crie um nome de usuário" required />
        </div>
        <div class="form-group">
          <label for="email">E-mail</label>
          <input type="email" v-model="email" id="email"  placeholder="Seu e-mail" required />
        </div>
        <div class="form-group">
          <label for="password">Senha</label>
          <input type="password" v-model="password" id="password"  placeholder="Sua senha" required />
        </div>
        <button type="submit" class="submit-btn">Cadastrar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: ''
      };
    },
    methods: {
      handleSubmit() {
        const user = {
          username: this.username,
          email: this.email,
          password: this.password
        };
  
        // Armazenar no LocalStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
  
        // Limpar os campos do formulário após o cadastro
        this.username = '';
        this.email = '';
        this.password = '';
  
        alert('Usuário cadastrado com sucesso!');
      }
    }
  };
  </script>
  
  <style scoped>
  .cadastro-page {
    padding: 4rem 2rem;
    text-align: center;
    }

    h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    }

    .cadastro-form {
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
  