<template>
  <div class="login-page">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin" class="login-form">
      <div class="form-group">
        <label for="email">E-mail</label>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="Seu e-mail"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Senha</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Sua senha"
          required
        />
      </div>
      <button type="submit" class="submit-btn">Entrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      // Aqui você pode fazer uma validação com back-end real ou simular
      if (this.email === "user@exemplo.com" && this.password === "senha123") {
        localStorage.setItem("user", JSON.stringify({ email: this.email }));
        this.$router.push("/"); // Redireciona para a página inicial
      } else {
        alert("Credenciais inválidas!");
      }
    },
  },
};
</script>

<style scoped>
.login-page {
  padding: 4rem 2rem;
  text-align: center;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.login-form {
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
