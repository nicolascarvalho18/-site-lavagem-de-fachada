<template>
  <a class="wfab" :href="waUrl" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
    <WhatsAppIcon :size="30" />
  </a>
</template>

<script setup>
import WhatsAppIcon from './WhatsAppIcon.vue'
import { whatsappUrl } from '../config.js'

const waUrl = whatsappUrl()
</script>
