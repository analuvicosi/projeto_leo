<!-- src/components/ProdutoItem.vue -->
<template>
    <div>
      <h2>{{ produto.nome }}</h2>
      <p>Preço: R$ {{ produto.preco }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      produto: Object
    }
  };
  </script>
  