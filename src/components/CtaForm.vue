<template>
  <section class="cta" id="contato">
    <div class="cta-bg"><img v-if="bgImg" :src="bgImg" alt="" /></div>
    <div class="wrap inner">
      <div>
        <span class="eyebrow">Fale com a Lumiere</span>
        <h2>Conte sobre a sua fachada</h2>
        <p class="sub">Informe o tipo de imóvel e o serviço que procura. A equipe retorna para entender o local e combinar os próximos passos.</p>
        <div class="cta-feats">
          <div class="cta-feat">
            <svg class="ico ci" viewBox="0 0 24 24" width="22" height="22"><path d="M12 2a10 10 0 00-8.5 15.3L2 22l4.8-1.5A10 10 0 1012 2z"/></svg>
            <span><b>Contato direto</b>pelo WhatsApp</span>
          </div>
          <div class="cta-feat">
            <svg class="ico ci" viewBox="0 0 24 24" width="22" height="22"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span><b>Atendimento local</b>na Baixada Santista</span>
          </div>
          <div class="cta-feat">
            <svg class="ico ci" viewBox="0 0 24 24" width="22" height="22"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
            <span><b>Avaliação do local</b>método definido para cada fachada</span>
          </div>
        </div>
      </div>
      <form class="form" @submit.prevent="onSubmit">
        <div class="field"><label for="contact-name">Seu nome</label><input id="contact-name" v-model="nome" type="text" autocomplete="name" placeholder="Como podemos chamar você?" required></div>
        <div class="field"><label for="contact-whatsapp">Seu WhatsApp</label><input id="contact-whatsapp" v-model="zap" type="tel" autocomplete="tel" inputmode="tel" placeholder="Inclua o DDD" required></div>
        <div class="field">
          <label for="property-type">Tipo de imóvel</label>
          <select id="property-type" v-model="imovel">
            <option value="">Tipo de imóvel (opcional)</option>
            <option>Condomínio residencial</option>
            <option>Edifício comercial</option>
            <option>Empresa / Indústria</option>
            <option>Obra</option>
            <option>Outro</option>
          </select>
        </div>
        <div class="field">
          <label for="service-type">Serviço de interesse</label>
          <select id="service-type" v-model="servico">
            <option value="">Serviço de interesse (opcional)</option>
            <option>Limpeza de Fachadas</option>
            <option>Vidros Externos</option>
            <option>Pedra e Granito</option>
            <option>Manutenção Preventiva</option>
            <option>Pintura Predial</option>
            <option>Ainda não sei</option>
          </select>
        </div>
        <div class="field">
          <label for="service-city">Cidade do imóvel</label>
          <select id="service-city" v-model="cidade">
            <option value="">Cidade do imóvel (opcional)</option>
            <option>Santos</option>
            <option>São Vicente</option>
            <option>Praia Grande</option>
            <option>Outra cidade da Baixada Santista</option>
          </select>
        </div>
        <button class="btn btn-orange" type="submit">
          <WhatsAppIcon class="ico ico-fill" />
          Enviar pelo WhatsApp
        </button>
        <p class="note" ref="noteEl">A mensagem será aberta para você revisar antes de enviar.</p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import WhatsAppIcon from './WhatsAppIcon.vue'
import { WHATSAPP_NUMBER } from '../config.js'

defineProps({
  bgImg: { type: String, default: '' },
})

const nome = ref('')
const zap = ref('')
const imovel = ref('')
const servico = ref('')
const cidade = ref('')
const noteEl = ref(null)

function applySelectedService(event) {
  servico.value = event.detail
}

onMounted(() => window.addEventListener('lumiere:service-selected', applySelectedService))
onUnmounted(() => window.removeEventListener('lumiere:service-selected', applySelectedService))

function onSubmit() {
  let text = 'Olá! Gostaria de solicitar um orçamento.'
  if (nome.value) text += `\n*Nome:* ${nome.value}`
  if (zap.value) text += `\n*WhatsApp:* ${zap.value}`
  if (imovel.value) text += `\n*Tipo de imóvel:* ${imovel.value}`
  if (servico.value) text += `\n*Serviço de interesse:* ${servico.value}`
  if (cidade.value) text += `\n*Cidade do imóvel:* ${cidade.value}`

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')
  if (noteEl.value) noteEl.value.textContent = 'O WhatsApp será aberto para você revisar e enviar a mensagem.'
}
</script>
