<template>
  <section class="clients">
    <div class="wrap inner">
      <div class="area-heading">
        <span class="eyebrow">Atendimento local</span>
        <p>Fale com a equipe sobre a sua fachada em</p>
      </div>
      <ul class="area-list" aria-label="Cidades atendidas">
        <li v-for="area in areas" :key="area">{{ area }}</li>
      </ul>
      <p class="area-note">Outras cidades da Baixada Santista: consulte a disponibilidade.</p>
    </div>
  </section>
</template>

<script setup>
const areas = [
  'Santos',
  'São Vicente',
  'Praia Grande',
]
</script>
