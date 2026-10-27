<template>
  <section class="certs">
    <div class="wrap inner">
      <span class="eyebrow">Planejamento do serviço</span>
      <h2>O que alinhamos antes de começar</h2>
      <div class="cert-grid">
        <div v-for="(item, i) in items" :key="item.title" class="cert-item">
          <span class="cert-number">0{{ i + 1 }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  { title: 'Áreas incluídas', desc: 'Quais partes da fachada e superfícies entram no serviço.' },
  { title: 'Método e acabamento', desc: 'Procedimento definido conforme o material e as condições do local.' },
  { title: 'Acesso à fachada', desc: 'Condições de acesso verificadas antes da execução.' },
  { title: 'Cronograma', desc: 'Sequência e previsão do serviço combinadas com o responsável.' },
]
</script>
