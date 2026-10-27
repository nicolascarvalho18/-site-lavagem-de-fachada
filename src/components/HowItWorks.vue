<template>
  <section class="section how" id="etapas">
    <div class="wrap how-inner">
      <header class="how-header">
        <span class="eyebrow">Etapas do serviço</span>
        <h2>Da avaliação à execução,<br><span>tudo combinado antes</span></h2>
        <p>Limpeza ou pintura: escopo, método e cronograma são alinhados antes da execução.</p>
      </header>
      <div class="steps">
        <article v-for="(step, i) in steps" :key="i" class="step">
          <img class="step-photo" :src="stepImages[step.image]" :alt="step.alt" loading="lazy" decoding="async">
          <div class="step-copy">
            <div class="num">{{ String(i + 1).padStart(2, '0') }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </div>
          <svg v-if="i < steps.length - 1" class="arrow ico" viewBox="0 0 24 24" width="30" height="30" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </article>
      </div>
      <a class="how-contact" href="#contato">Tire dúvidas sobre a sua fachada <span aria-hidden="true">→</span></a>
    </div>
  </section>
</template>

<script setup>
defineProps({
  stepImages: { type: Object, default: () => ({}) },
})

const steps = [
  { title: 'Conte o que precisa', desc: 'Informe o tipo de imóvel, a altura e se procura limpeza ou pintura.', image: 'edificio', alt: 'Profissional em altura ao lado de uma fachada envidraçada' },
  { title: 'Avaliamos a fachada', desc: 'Conferimos o revestimento, o acesso e as condições do local.', image: 'avaliacao', alt: 'Profissional limpando os vidros externos de um edifício' },
  { title: 'Planejamos o trabalho', desc: 'Alinhamos método, equipamentos e cronograma antes de começar.', image: 'planejamento', alt: 'Jato de água aplicado a um revestimento de pedra' },
  { title: 'Executamos o serviço', desc: 'A equipe segue o escopo e o cronograma definidos com você.', image: 'execucao', alt: 'Profissional trabalhando suspenso junto à fachada de um edifício' },
]
</script>
