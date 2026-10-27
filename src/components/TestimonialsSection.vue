<template>
  <section class="section testi" id="depoimentos">
    <div class="wrap">
      <span class="eyebrow">Depoimentos</span>
      <h2>O que nossos clientes dizem</h2>
      <div class="t-grid">
        <div v-for="t in testimonials" :key="t.who" class="t-card">
          <div class="ph">
            <img v-if="t.img" :src="t.img" :alt="t.who" />
            <span v-else aria-hidden="true">{{ initials(t.who) }}</span>
          </div>
          <div>
            <div class="stars">★★★★★</div>
            <p class="quote">"{{ t.quote }}"</p>
            <div class="who">{{ t.who }}</div>
            <div class="where">{{ t.where }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  testimonials: {
    type: Array,
    default: () => [
      { quote: 'Serviço excelente, equipe muito profissional e atenciosa. A fachada do nosso condomínio ficou impecável!', who: 'Condomínio Residencial', where: 'Santos · SP', img: '' },
      { quote: 'Pontualidade, segurança e resultado de alta qualidade. Recomendo para empresas e condomínios.', who: 'Edifício Comercial', where: 'São Vicente · SP', img: '' },
    ]
  }
})

function initials(name) {
  return name.split(/\s+/).slice(0, 2).map(word => word[0]).join('').toUpperCase()
}
</script>
