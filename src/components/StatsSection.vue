<template>
  <section class="assessment" id="avaliacao">
    <div class="wrap assessment-inner">
      <div class="assessment-intro">
        <span class="eyebrow">Avaliação da fachada</span>
        <h2>O método depende do que o local pede.</h2>
        <p>Antes de definir a limpeza ou a pintura, conversamos sobre o imóvel e analisamos as condições da fachada. Assim, o escopo e os próximos passos ficam claros antes do serviço.</p>
        <a class="assessment-link" href="#contato">Converse com a equipe <span aria-hidden="true">→</span></a>
      </div>
      <div class="assessment-factors" aria-label="Pontos considerados na avaliação">
        <article v-for="factor in factors" :key="factor.title" class="assessment-factor">
          <span class="factor-mark" aria-hidden="true">{{ factor.number }}</span>
          <div><h3>{{ factor.title }}</h3><p>{{ factor.desc }}</p></div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const factors = [
  { number: '01', title: 'Revestimento', desc: 'Material e acabamento da fachada.' },
  { number: '02', title: 'Sujeira e conservação', desc: 'Tipo de resíduo e condição da superfície.' },
  { number: '03', title: 'Acesso ao local', desc: 'Altura e condições para alcançar as áreas externas.' },
]
</script>
