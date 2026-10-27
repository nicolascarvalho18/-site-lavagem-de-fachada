<template>
  <footer class="foot">
    <div class="wrap inner">
      <div>
        <div class="brand" style="margin-bottom:6px">
          <LogoMark />
          <span>
            <span class="name" style="color:#fff;font-family:var(--font-display);font-weight:700;letter-spacing:.12em">LUMIERE</span><br>
            <span class="tag" style="font-size:.52rem;letter-spacing:.34em;color:var(--orange);text-transform:uppercase;font-weight:600">Limpeza de Fachadas</span>
          </span>
        </div>
        <p class="ftag">Limpeza e pintura predial, vidros e revestimentos na Baixada Santista.</p>
      </div>
      <div>
        <h4>Links rápidos</h4>
        <ul>
          <li><a href="#top">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#etapas">Etapas do serviço</a></li>
          <li><a href="#avaliacao">Avaliação</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </div>
      <div>
        <h4>Atendimento</h4>
        <p class="foot-service-area">Santos, São Vicente, Praia Grande e outras cidades da Baixada Santista.</p>
        <a class="foot-contact-link" href="#contato">Pedir orçamento <span aria-hidden="true">→</span></a>
      </div>
    </div>
    <div class="wrap bar">&copy; {{ year }} LUMIERE Limpeza de Fachadas. Todos os direitos reservados.</div>
  </footer>
</template>

<script setup>
import LogoMark from './LogoMark.vue'
const year = new Date().getFullYear()
</script>
