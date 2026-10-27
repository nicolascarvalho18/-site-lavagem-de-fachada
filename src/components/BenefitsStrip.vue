<template>
  <div class="benefits">
    <div class="wrap benefits-grid">
      <div v-for="b in benefits" :key="b.title" class="benefit">
        <svg class="ico bi" viewBox="0 0 24 24" width="26" height="26" v-html="b.icon"></svg>
        <div><h4>{{ b.title }}</h4><p>{{ b.desc }}</p></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const benefits = [
  { title: 'Método por superfície', desc: 'O revestimento e o tipo de sujeira orientam a limpeza.', icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>' },
  { title: 'Acesso planejado', desc: 'As condições do local são consideradas antes da execução.', icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' },
  { title: 'Atendimento local', desc: 'Santos, São Vicente e Praia Grande; outras cidades sob consulta.', icon: '<path d="M3 9l1-5h16l1 5M4 9h16v11H4zM9 20v-6h6v6"/>' },
  { title: 'Escopo combinado', desc: 'Áreas incluídas e previsão do serviço alinhadas com o responsável.', icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>' },
]
</script>
