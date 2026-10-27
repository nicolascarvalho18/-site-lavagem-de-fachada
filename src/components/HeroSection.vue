<template>
  <section class="hero" id="top">
    <div class="hero-bg">
      <img :src="heroImg" alt="Profissional da Lumiere limpando a fachada de um edifício na orla" fetchpriority="high" />
    </div>
    <div class="wrap hero-inner">
      <span class="eyebrow">Limpeza e pintura predial</span>
      <h1>Fachadas cuidadas.<span class="hl">Prédios renovados.</span></h1>
      <p class="lead">Limpeza de fachadas, vidros e revestimentos, além de pintura predial. Cada serviço começa com uma avaliação do imóvel, do acabamento e das condições de acesso.</p>
      <div class="hero-actions">
        <a class="btn btn-orange" href="#contato">
          <WhatsAppIcon class="ico ico-fill" />
          Solicitar Orçamento
          <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
        <a class="btn btn-ghost" href="#servicos">Conheça nossos serviços
          <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import WhatsAppIcon from './WhatsAppIcon.vue'

defineProps({
  heroImg: { type: String, default: '' }
})
</script>
