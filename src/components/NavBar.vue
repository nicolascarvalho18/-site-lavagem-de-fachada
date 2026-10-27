<template>
  <header class="nav">
    <div class="wrap nav-inner">
      <a class="brand" href="#top" aria-label="LUMIERE">
        <LogoMark />
        <span>
          <span class="name">LUMIERE</span><br>
          <span class="tag">Limpeza de Fachadas</span>
        </span>
      </a>
      <nav aria-label="Navegação principal">
        <ul class="nav-links" :class="{ open: menuOpen }" @click="onLinkClick">
          <li><a href="#top">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#etapas">Etapas</a></li>
          <li><a href="#avaliacao">Avaliação</a></li>
          <li><a href="#faq">Dúvidas</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
      <div class="nav-cta">
        <a class="btn btn-orange" href="#contato">
          <WhatsAppIcon class="ico ico-fill" />
          Solicitar Orçamento
          <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
      </div>
      <button class="nav-toggle" @click="menuOpen = !menuOpen" aria-label="Menu" :aria-expanded="menuOpen">
        <svg class="ico" viewBox="0 0 24 24" width="28" height="28"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import LogoMark from './LogoMark.vue'
import WhatsAppIcon from './WhatsAppIcon.vue'

const menuOpen = ref(false)

function onLinkClick(e) {
  if (e.target.tagName === 'A') menuOpen.value = false
}
</script>
