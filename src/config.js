// Configure o número oficial do WhatsApp antes de publicar a página.
export const WHATSAPP_NUMBER = '5513999999999'
export const WHATSAPP_MESSAGE = 'Olá! Quero um orçamento de limpeza de fachada.'

export function whatsappUrl(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text || WHATSAPP_MESSAGE)}`
}
