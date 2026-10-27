<template>
  <section class="services" id="servicos">
    <div class="wrap inner">
      <header class="svc-intro">
        <div>
          <span class="eyebrow">Serviços da Lumiere</span>
          <h2>Limpeza e pintura.<br><span>Fachada bem cuidada.</span></h2>
        </div>
        <p>Da lavagem à pintura predial, cada fachada pede uma avaliação do revestimento, do estado da superfície e do acesso antes de definir o serviço.</p>
      </header>

      <div class="svc-layout">
        <figure class="svc-viewer">
          <Transition name="svc-photo" mode="out-in">
            <img :key="activeService.image" :src="serviceImages[activeService.image]" :alt="activeService.alt" loading="lazy" decoding="async">
          </Transition>
          <figcaption class="svc-caption">
            <span class="svc-caption-index">{{ String(activeIndex + 1).padStart(2, '0') }} <i></i> {{ String(services.length).padStart(2, '0') }}</span>
            <div><h3>{{ activeService.title }}</h3><p>{{ activeService.desc }}</p></div>
          </figcaption>
        </figure>

        <div class="svc-menu">
          <p class="svc-menu-label">Escolha uma superfície</p>
          <div class="svc-options" role="group" aria-label="Serviços da Lumiere">
            <button v-for="(svc, i) in services" :key="svc.title" class="svc-option" :class="{ active: activeIndex === i }" type="button" :aria-pressed="activeIndex === i" @click="selectService(i)">
              <span class="svc-option-number">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="svc-option-title">{{ svc.title }}</span>
              <svg class="svc-option-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </button>
          </div>
          <a class="btn btn-orange svc-quote" href="#contato" @click="selectService(activeIndex)">Pedir orçamento <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

defineProps({
  serviceImages: { type: Object, default: () => ({}) },
})

const activeIndex = ref(0)
const activeService = computed(() => services[activeIndex.value])

function selectService(index) {
  activeIndex.value = index
  window.dispatchEvent(new CustomEvent('lumiere:service-selected', { detail: services[index].title }))
}

const services = [
  {
    title: 'Limpeza de Fachadas',
    desc: 'Removemos fuligem, limo e marcas de maresia com método adequado ao revestimento.',
    image: 'fachada',
    alt: 'Limpeza de fachada de edifício na orla ao entardecer',
  },
  {
    title: 'Vidros Externos',
    desc: 'Limpamos vidros e esquadrias para recuperar a transparência e reduzir marcas de água e maresia.',
    image: 'vidros',
    alt: 'Profissional da Lumiere realizando limpeza de vidros externos',
  },
  {
    title: 'Pedra e Granito',
    desc: 'Escolhemos produtos e pressão de acordo com a pedra e o acabamento da fachada.',
    image: 'pedra',
    alt: 'Jato de água limpando um revestimento de pedra',
  },
  {
    title: 'Manutenção Preventiva',
    desc: 'Lavagens programadas ajudam a controlar o acúmulo de sujeira e acompanhar o estado da fachada.',
    image: 'manutencao',
    alt: 'Profissional em altura trabalhando junto a edifícios na Baixada Santista',
  },
  {
    title: 'Pintura Predial',
    desc: 'A avaliação considera o estado do revestimento, o preparo necessário e o acabamento antes de definir o escopo.',
    image: 'manutencao',
    alt: 'Profissional em trabalho de fachada suspenso junto a um edifício',
  },
]
</script>
