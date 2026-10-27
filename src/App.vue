<template>
  <a class="skip-link" href="#main-content">Pular para o conteúdo</a>
  <NavBar />
  <WhatsAppFab />
  <main id="main-content">
    <HeroSection :heroImg="images.hero" />
    <BeforeAfter :heroImg="images.hero" :videoSrc="images.aboutVideo" />
    <ServicesSection :serviceImages="images.services" />
    <HowItWorks :stepImages="images.steps" />
    <StatsSection />
    <CertificationsSection />
    <ClientsStrip />
    <FaqSection />
    <CtaForm />
  </main>
  <FooterSection />
  <MobileCta />
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import BeforeAfter from './components/BeforeAfter.vue'
import ServicesSection from './components/ServicesSection.vue'
import HowItWorks from './components/HowItWorks.vue'
import StatsSection from './components/StatsSection.vue'
import CertificationsSection from './components/CertificationsSection.vue'
import ClientsStrip from './components/ClientsStrip.vue'
import FaqSection from './components/FaqSection.vue'
import CtaForm from './components/CtaForm.vue'
import FooterSection from './components/FooterSection.vue'
import WhatsAppFab from './components/WhatsAppFab.vue'
import MobileCta from './components/MobileCta.vue'
import heroImage from './assets/hero-fachadas.png'
import glassCleaningImage from './assets/servico-vidros-referencia.png'
import stoneCleaningImage from './assets/servico-pedra-referencia.png'
import inspectionImage from './assets/servico-manutencao-referencia.png'
import aboutVideo from './assets/lumiere-fachada-video.mp4'

// ---- Coloque suas imagens aqui ----
// Importe imagens da pasta assets ou use URLs externas
// Exemplo:
// import heroImg from './assets/hero.jpg'
const images = {
  hero: heroImage,
  aboutVideo,
  services: {
    fachada: heroImage,
    vidros: glassCleaningImage,
    pedra: stoneCleaningImage,
    manutencao: inspectionImage,
  },
  steps: {
    edificio: inspectionImage,
    avaliacao: glassCleaningImage,
    planejamento: stoneCleaningImage,
    execucao: heroImage,
  },
}
</script>
