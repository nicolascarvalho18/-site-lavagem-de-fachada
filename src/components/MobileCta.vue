<template>
  <div class="mobile-cta">
    <div class="mcta-inner">
      <div class="mcta-text"><b>Peça uma avaliação</b>Fale com a equipe pelo WhatsApp</div>
      <a class="mcta-btn" :href="waUrl" target="_blank" rel="noopener">
        <WhatsAppIcon :size="18" />
        Pedir orçamento
      </a>
    </div>
  </div>
</template>

<script setup>
import WhatsAppIcon from './WhatsAppIcon.vue'
import { whatsappUrl } from '../config.js'

const waUrl = whatsappUrl()
</script>
