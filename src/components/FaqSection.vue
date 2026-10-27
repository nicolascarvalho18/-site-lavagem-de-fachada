<template>
  <section class="section faq" id="faq">
    <div class="wrap">
      <span class="eyebrow">Antes de contratar</span>
      <h2>Dúvidas sobre o serviço</h2>
      <div class="faq-list">
        <div v-for="(item, i) in faqs" :key="i" class="faq-item" :class="{ open: openIndex === i }">
          <button class="faq-q" @click="toggle(i)" :aria-expanded="openIndex === i" :aria-controls="`faq-answer-${i}`">
            {{ item.q }}
            <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <div class="faq-a" :id="`faq-answer-${i}`" role="region" :aria-hidden="openIndex !== i">
            <p>{{ item.a }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(-1)

function toggle(i) {
  openIndex.value = openIndex.value === i ? -1 : i
}

const faqs = [
  { q: 'Quanto tempo leva a limpeza?', a: 'O prazo depende da área, do revestimento, do acesso e das condições da fachada. Depois de avaliar o local, alinhamos uma previsão e o cronograma.' },
  { q: 'Vocês limpam vidros e esquadrias?', a: 'Sim. Atendemos vidros externos e esquadrias. O método é definido conforme o material e as condições de acesso.' },
  { q: 'A Lumiere também faz pintura predial?', a: 'Sim. O tipo de preparo e acabamento depende do estado da fachada e do revestimento. Esses pontos são avaliados e descritos no escopo antes do início do serviço.' },
  { q: 'Como vocês escolhem o método?', a: 'A equipe considera o tipo de revestimento, o nível de sujeira e o acesso ao local antes de indicar os produtos e equipamentos.' },
  { q: 'Quais cidades vocês atendem?', a: 'Atendemos Santos, São Vicente, Praia Grande e outras cidades da Baixada Santista. Consulte a equipe sobre o seu endereço.' },
  { q: 'É preciso liberar o acesso à cobertura?', a: 'Na maioria dos trabalhos em altura, sim. A necessidade é verificada durante a avaliação e combinada com o responsável pelo imóvel.' },
]
</script>
