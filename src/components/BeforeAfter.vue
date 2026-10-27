<template>
  <section class="section valuation" id="sobre">
    <div class="wrap cols">
      <div class="about-photo">
        <video
          class="about-video"
          :src="videoSrc"
          :poster="heroImg"
          autoplay
          muted
          loop
          playsinline
          preload="metadata"
          aria-label="Vídeo da equipe realizando limpeza de fachada, sem áudio"
        ></video>
      </div>
      <div>
        <span class="eyebrow">Cuidado para cada superfície</span>
          <h2>O cuidado começa<br>pela avaliação</h2>
        <p class="body">Maresia, fuligem e resíduos se acumulam com o tempo. Antes de iniciar, avaliamos o revestimento e o acesso para escolher o método indicado para cada fachada.</p>
        <ul class="checks">
          <li v-for="c in checks" :key="c">
            <span class="ck"><svg viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M5 12l4 4 10-10"/></svg></span>
            {{ c }}
          </li>
        </ul>
        <a class="btn btn-orange" href="#contato">
          <WhatsAppIcon class="ico ico-fill" />
          Solicitar Orçamento pelo WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import WhatsAppIcon from './WhatsAppIcon.vue'

defineProps({
  heroImg: { type: String, default: '' },
  videoSrc: { type: String, default: '' },
})

const checks = [
  'Avaliação do revestimento e do acesso',
  'Método escolhido para cada superfície',
  'Limpeza e pintura predial',
  'Acesso e áreas de trabalho considerados no planejamento',
]
</script>
