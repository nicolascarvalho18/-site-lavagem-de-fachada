# LUMIERE Fachadas - Landing Page (Vue 3 + Vite)

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

## Build para produção

```bash
npm run build
```

## Estrutura

```
src/
├── App.vue                  # Componente raiz
├── main.js                  # Entrada
├── config.js                # WhatsApp, telefone, email (EDITE AQUI)
├── assets/
│   └── main.css             # Estilos globais
└── components/
    ├── LogoMark.vue          # SVG da logo LUMIERE
    ├── WhatsAppIcon.vue      # Ícone WhatsApp reutilizável
    ├── NavBar.vue            # Navbar com menu mobile
    ├── HeroSection.vue       # Hero com badge de prova social
    ├── BenefitsStrip.vue     # Faixa de benefícios
    ├── BeforeAfter.vue       # Slider antes/depois
    ├── ServicesSection.vue   # Grid de serviços
    ├── HowItWorks.vue        # Etapas do processo
    ├── StatsSection.vue      # Números com animação
    ├── CertificationsSection.vue  # Selos NR-35, seguro, etc.
    ├── ClientsStrip.vue      # Nomes de clientes
    ├── TestimonialsSection.vue    # Depoimentos
    ├── FaqSection.vue        # Accordion de perguntas
    ├── CtaForm.vue           # Formulário → WhatsApp
    ├── FooterSection.vue     # Rodapé
    ├── WhatsAppFab.vue       # Botão flutuante WhatsApp
    └── MobileCta.vue         # Barra fixa mobile
```

## Configuração

Edite `src/config.js` para colocar seu número de WhatsApp, telefone e email reais.

Para as imagens, coloque-as em `src/assets/` e importe no `App.vue`:

```js
import heroImg from './assets/hero.jpg'

const images = {
  hero: heroImg,
  before: beforeImg,
  after: afterImg,
  bg: bgImg,
}
```
